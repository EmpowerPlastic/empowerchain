package keeper_test

import (
	"math/rand"
	"time"

	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/x/authz"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
	"github.com/cosmos/gogoproto/proto"

	"github.com/EmpowerPlastic/empowerchain/app"
	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/utils"
	"github.com/EmpowerPlastic/empowerchain/x/certificates"
	certificateskeeper "github.com/EmpowerPlastic/empowerchain/x/certificates/keeper"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/keeper"
)

func (s *TestSuite) TestUpdateParams() {
	testCases := map[string]struct {
		msg func(*app.EmpowerApp) *plasticcredit.MsgUpdateParams
		err error
	}{
		"happy path": {
			msg: func(empowerApp *app.EmpowerApp) *plasticcredit.MsgUpdateParams {
				return &plasticcredit.MsgUpdateParams{
					Authority: empowerApp.PlasticcreditKeeper.Authority(),
					Params: plasticcredit.Params{
						IssuerCreator:         sample.AccAddress(),
						CreditTypeCreationFee: sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(rand.Int63())),
					},
				}
			},
			err: nil,
		},
		"unauthorized caller": {
			msg: func(empowerApp *app.EmpowerApp) *plasticcredit.MsgUpdateParams {
				return &plasticcredit.MsgUpdateParams{
					Authority: s.addrs[0].String(), // Just a random address, should not have access!
					Params:    plasticcredit.Params{},
				}
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"invalid issuer creator params": {
			msg: func(empowerApp *app.EmpowerApp) *plasticcredit.MsgUpdateParams {
				return &plasticcredit.MsgUpdateParams{
					Authority: empowerApp.PlasticcreditKeeper.Authority(),
					Params: plasticcredit.Params{
						IssuerCreator:         "invalid",
						CreditTypeCreationFee: sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(rand.Int63())),
					},
				}
			},
			err: sdkerrors.ErrInvalidAddress,
		},
		"invalid credit type creation fee params": {
			msg: func(empowerApp *app.EmpowerApp) *plasticcredit.MsgUpdateParams {
				return &plasticcredit.MsgUpdateParams{
					Authority: empowerApp.PlasticcreditKeeper.Authority(),
					Params: plasticcredit.Params{
						IssuerCreator:         sample.AccAddress(),
						CreditTypeCreationFee: sdk.Coin{},
					},
				}
			},
			err: sdkerrors.ErrInvalidCoins,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()

			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)
			msg := tc.msg(s.empowerApp)
			_, err := ms.UpdateParams(goCtx, msg)

			s.Require().ErrorIs(err, tc.err)

			if err == nil {
				s.Require().NoError(err)

				getParams := k.GetParams(s.ctx)
				s.Require().Equal(msg.Params, getParams)
			}
		})
	}
}

func (s *TestSuite) TestCreateIssuerWithGov() {
	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)
	ms := keeper.NewMsgServerImpl(k)

	govAcc := s.empowerApp.AccountKeeper.GetModuleAccount(s.ctx, govtypes.ModuleName)

	resp, err := ms.CreateIssuer(goCtx, &plasticcredit.MsgCreateIssuer{
		Creator:     govAcc.GetAddress().String(),
		Name:        "Empower",
		Description: "Empower is cool",
		Admin:       sample.AccAddress(),
	})
	s.Require().NoError(err)
	s.Require().Equal(uint64(1), resp.IssuerId)
}

func (s *TestSuite) TestCreateIssuer() {
	testCases := map[string]struct {
		msg *plasticcredit.MsgCreateIssuer
		err error
	}{
		"happy path": {
			msg: &plasticcredit.MsgCreateIssuer{
				Creator:     s.issuerCreator,
				Name:        "Empower",
				Description: "Empower is cool",
				Admin:       sample.AccAddress(),
			},
			err: nil,
		},
		"unauthorized caller": {
			msg: &plasticcredit.MsgCreateIssuer{
				Creator:     sample.AccAddress(), // not allowed!
				Name:        "Empower",
				Description: "Empower is cool",
				Admin:       sample.AccAddress(),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"invalid name": {
			msg: &plasticcredit.MsgCreateIssuer{
				Creator:     s.issuerCreator,
				Name:        "This is has a space at the end ",
				Description: "Empower is cool",
				Admin:       sample.AccAddress(),
			},
			err: utils.ErrInvalidValue,
		},
		"invalid description": {
			msg: &plasticcredit.MsgCreateIssuer{
				Creator:     s.issuerCreator,
				Name:        "Empower",
				Description: sample.String(257),
				Admin:       sample.AccAddress(),
			},
			err: utils.ErrInvalidValue,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()
			s.PopulateWithSamples()

			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)

			resp, err := ms.CreateIssuer(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)

			events := s.ctx.EventManager().ABCIEvents()
			idCounters := k.GetIDCounters(s.ctx)

			if err == nil {
				s.Require().Equal(s.numTestIssuers+1, resp.IssuerId)

				idCounters := k.GetIDCounters(s.ctx)
				s.Require().Equal(s.numTestIssuers+2, idCounters.NextIssuerId)

				issuer, found := k.GetIssuer(s.ctx, resp.IssuerId)
				s.Require().True(found)
				s.Require().Equal(plasticcredit.Issuer{
					Id:          resp.IssuerId,
					Name:        tc.msg.Name,
					Description: tc.msg.Description,
					Admin:       tc.msg.Admin,
				}, issuer)

				s.Require().Len(events, 1)
				parsedEvent, err := sdk.ParseTypedEvent(events[0])
				s.Require().NoError(err)
				eventCreateIssuer, ok := parsedEvent.(*plasticcredit.EventCreateIssuer)
				s.Require().True(ok)
				s.Require().Equal(&plasticcredit.EventCreateIssuer{
					IssuerId:    issuer.Id,
					Creator:     tc.msg.Creator,
					Name:        issuer.Name,
					Description: issuer.Description,
					Admin:       issuer.Admin,
				}, eventCreateIssuer)

			} else {
				s.Require().Equal(s.numTestIssuers+1, idCounters.NextIssuerId)
				_, found := k.GetIssuer(s.ctx, s.numTestIssuers+1)
				s.Require().False(found)

				s.Require().Len(events, 0)
			}
		})
	}
}

func (s *TestSuite) TestUpdateIssuer() {
	testCases := map[string]struct {
		msg *plasticcredit.MsgUpdateIssuer
		err error
	}{
		"happy path": {
			msg: &plasticcredit.MsgUpdateIssuer{
				Updater:     s.sampleIssuerAdmin,
				IssuerId:    s.sampleIssuerID,
				Name:        "EmpowerUpdated",
				Description: "Empower is cool",
				Admin:       s.sampleIssuerAdmin,
			},
			err: nil,
		},
		"unauthorized caller": {
			msg: &plasticcredit.MsgUpdateIssuer{
				Updater:     sample.AccAddress(), // not allowed!
				IssuerId:    s.sampleIssuerID,
				Name:        "Empower",
				Description: "Empower is cool",
				Admin:       s.sampleIssuerAdmin,
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"invalid address": {
			msg: &plasticcredit.MsgUpdateIssuer{
				Updater:     "Invalid", // invalid
				IssuerId:    s.sampleIssuerID,
				Name:        "Empower",
				Description: "Empower is cool",
				Admin:       s.sampleIssuerAdmin,
			},
			err: sdkerrors.ErrInvalidAddress,
		},
		"issuer not found": {
			msg: &plasticcredit.MsgUpdateIssuer{
				Updater:     s.sampleIssuerAdmin,
				IssuerId:    9001,
				Name:        "Empower",
				Description: "Empower is cool",
				Admin:       s.sampleIssuerAdmin,
			},
			err: plasticcredit.ErrIssuerNotFound,
		},
		"change admin": {
			msg: &plasticcredit.MsgUpdateIssuer{
				Updater:     s.sampleIssuerAdmin,
				IssuerId:    s.sampleIssuerID,
				Name:        "EmpowerUpdated",
				Description: "Empower is cool",
				Admin:       s.noCoinsIssuerAdmin,
			},
			err: nil,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()
			s.PopulateWithSamples()

			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)

			_, err := ms.UpdateIssuer(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)

			events := s.ctx.EventManager().ABCIEvents()

			if err == nil {
				issuer, found := k.GetIssuer(s.ctx, tc.msg.IssuerId)
				s.Require().True(found)
				s.Require().Equal(plasticcredit.Issuer{
					Id:          tc.msg.IssuerId,
					Name:        tc.msg.Name,
					Description: tc.msg.Description,
					Admin:       tc.msg.Admin,
				}, issuer)
				s.Require().Len(events, 1)
				parsedEvent, err := sdk.ParseTypedEvent(events[0])
				s.Require().NoError(err)
				eventUpdateIssuer, ok := parsedEvent.(*plasticcredit.EventUpdateIssuer)
				s.Require().True(ok)
				s.Require().Equal(&plasticcredit.EventUpdateIssuer{
					IssuerId:    tc.msg.IssuerId,
					Creator:     tc.msg.Updater,
					Name:        tc.msg.Name,
					Description: tc.msg.Description,
					Admin:       tc.msg.Admin,
				}, eventUpdateIssuer)
			}
		})
	}
}

func (s *TestSuite) TestCreateApplicant() {
	testCases := map[string]struct {
		msg *plasticcredit.MsgCreateApplicant
		err error
	}{
		"happy path": {
			msg: &plasticcredit.MsgCreateApplicant{
				Name:        "Empower",
				Description: "Empower is cool",
				Admin:       sample.AccAddress(),
			},
			err: nil,
		},
		"invalid admin": {
			msg: &plasticcredit.MsgCreateApplicant{
				Name:        "Empower",
				Description: "Empower is cool",
				Admin:       "invalid",
			},
			err: sdkerrors.ErrInvalidAddress,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()

			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)

			resp, err := ms.CreateApplicant(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)
			events := s.ctx.EventManager().ABCIEvents()

			if err == nil {
				s.Require().Equal(uint64(1), resp.ApplicantId)

				idCounters := k.GetIDCounters(s.ctx)
				s.Require().Equal(uint64(2), idCounters.NextApplicantId)

				applicant, found := k.GetApplicant(s.ctx, resp.ApplicantId)
				s.Require().True(found)
				s.Require().Equal(plasticcredit.Applicant{
					Id:          resp.ApplicantId,
					Name:        tc.msg.Name,
					Description: tc.msg.Description,
					Admin:       tc.msg.Admin,
				}, applicant)

				parsedEvent, err := sdk.ParseTypedEvent(events[len(events)-1])
				s.Require().NoError(err)
				eventCreateApplicant, ok := parsedEvent.(*plasticcredit.EventCreateApplicant)
				s.Require().True(ok)
				s.Require().Equal(&plasticcredit.EventCreateApplicant{
					ApplicantId: applicant.Id,
					Name:        applicant.Name,
					Description: applicant.Description,
					Admin:       applicant.Admin,
				}, eventCreateApplicant)
			}
		})
	}
}

func (s *TestSuite) TestUpdateApplicant() {
	issuerAdmin := s.sampleApplicantAdmin
	testCases := map[string]struct {
		msg *plasticcredit.MsgUpdateApplicant
		err error
	}{
		"happy path": {
			msg: &plasticcredit.MsgUpdateApplicant{
				ApplicantId: s.sampleApplicantID,
				Name:        "Empower",
				Description: "Empower is cool",
				Admin:       issuerAdmin,
				Updater:     issuerAdmin,
			},
			err: nil,
		},
		"update non-existing applicant": {
			msg: &plasticcredit.MsgUpdateApplicant{
				ApplicantId: 0,
				Name:        "Empower",
				Description: "Empower is cool",
				Admin:       sample.AccAddress(),
				Updater:     issuerAdmin,
			},
			err: plasticcredit.ErrApplicantNotFound,
		},
		"unauthorized caller / wrong signer": {
			msg: &plasticcredit.MsgUpdateApplicant{
				Updater:     sample.AccAddress(), // not allowed!
				ApplicantId: 1,
				Name:        "Empower",
				Description: "Empower is cool",
				Admin:       issuerAdmin,
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"invalid address": {
			msg: &plasticcredit.MsgUpdateApplicant{
				ApplicantId: 1,
				Updater:     "Invalid", // invalid
				Name:        "Empower",
				Description: "Empower is cool",
				Admin:       sample.AccAddress(),
			},
			err: sdkerrors.ErrInvalidAddress,
		},
		"invalid admin address": {
			msg: &plasticcredit.MsgUpdateApplicant{
				ApplicantId: 1,
				Updater:     issuerAdmin,
				Name:        "Empower",
				Description: "Empower is cool",
				Admin:       "invalid", // invalid
			},
			err: sdkerrors.ErrInvalidAddress,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()
			s.PopulateWithSamples()

			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)

			_, err := ms.UpdateApplicant(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)

			events := s.ctx.EventManager().ABCIEvents()

			if err == nil {
				applicant, found := k.GetApplicant(s.ctx, tc.msg.ApplicantId)
				s.Require().True(found)
				s.Require().Equal(plasticcredit.Applicant{
					Id:          s.sampleApplicantID,
					Name:        tc.msg.Name,
					Description: tc.msg.Description,
					Admin:       tc.msg.Admin,
				}, applicant)

				s.Require().Len(events, 1)
				parsedEvent, err := sdk.ParseTypedEvent(events[0])
				s.Require().NoError(err)
				eventUpdateApplicant, ok := parsedEvent.(*plasticcredit.EventUpdateApplicant)
				s.Require().True(ok)
				s.Require().Equal(&plasticcredit.EventUpdateApplicant{
					ApplicantId: 1,
					Name:        tc.msg.Name,
					Description: tc.msg.Description,
					Admin:       tc.msg.Admin,
					Updater:     tc.msg.Updater,
				}, eventUpdateApplicant)
			} else {
				s.Require().Len(events, 0)
			}
		})
	}
}

func (s *TestSuite) TestCreateCreditType() {
	testCases := map[string]struct {
		msg *plasticcredit.MsgCreateCreditType
		err error
	}{
		"happy path": {
			msg: &plasticcredit.MsgCreateCreditType{
				Creator:      s.sampleIssuerAdmin,
				Abbreviation: "PTEST",
				IssuerId:     s.sampleIssuerID,
				Name:         "Empower Plastic Credits",
			},
			err: nil,
		},
		"unable to cover fee": {
			msg: &plasticcredit.MsgCreateCreditType{
				Creator:      s.noCoinsIssuerAdmin,
				Abbreviation: "PTEST",
				IssuerId:     s.noCoinsIssuerID,
				Name:         "Empower Plastic Credits",
			},
			err: sdkerrors.ErrInsufficientFee,
		},
		"unauthorized creator on the issuer": {
			msg: &plasticcredit.MsgCreateCreditType{
				Creator:      sample.AccAddress(),
				Abbreviation: "PTEST",
				IssuerId:     s.sampleIssuerID,
				Name:         "Empower Plastic Credits",
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"non-existent issuer": {
			msg: &plasticcredit.MsgCreateCreditType{
				Creator:      s.sampleIssuerAdmin,
				Abbreviation: "VPC",
				IssuerId:     42,
				Name:         "Someone else's PCs",
			},
			err: plasticcredit.ErrIssuerNotFound,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()
			s.PopulateWithSamples()
			k := s.empowerApp.PlasticcreditKeeper
			dk := s.empowerApp.DistrKeeper
			initialCommunityPool := dk.GetFeePool(s.ctx).CommunityPool

			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)

			_, err := ms.CreateCreditType(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)
			events := s.ctx.EventManager().ABCIEvents()

			if err == nil {
				creditType, found := k.GetCreditType(s.ctx, tc.msg.Abbreviation)
				s.Require().True(found)
				s.Require().Equal(plasticcredit.CreditType{
					Abbreviation: tc.msg.Abbreviation,
					IssuerId:     tc.msg.IssuerId,
					Name:         tc.msg.Name,
				}, creditType)

				// verify community pool has increased by fee amount
				communityPool := dk.GetFeePool(s.ctx).CommunityPool
				diff := communityPool.Sub(initialCommunityPool)
				feeDiff := diff.AmountOf(s.creditTypeCreationFee.Denom)
				s.Require().Equal(sdk.NewDecFromInt(s.creditTypeCreationFee.Amount), feeDiff)

				parsedEvent, err := sdk.ParseTypedEvent(events[len(events)-1])
				s.Require().NoError(err)
				eventCreateCreditType, ok := parsedEvent.(*plasticcredit.EventCreateCreditType)
				s.Require().True(ok)
				s.Require().Equal(&plasticcredit.EventCreateCreditType{
					Creator:      tc.msg.Creator,
					Abbreviation: creditType.Abbreviation,
					IssuerId:     creditType.IssuerId,
					Name:         creditType.Name,
				}, eventCreateCreditType)
			}
		})
	}
}

func (s *TestSuite) TestUpdateCreditType() {
	testCases := map[string]struct {
		msg *plasticcredit.MsgUpdateCreditType
		err error
	}{
		"happy path": {
			msg: &plasticcredit.MsgUpdateCreditType{
				Updater:      s.sampleIssuerAdmin,
				Abbreviation: s.sampleCreditTypeAbbreviation,
				Name:         "Updated Empower Plastic Credits",
			},
			err: nil,
		},
		"unauthorized updater on the issuer": {
			msg: &plasticcredit.MsgUpdateCreditType{
				Updater:      sample.AccAddress(),
				Abbreviation: s.sampleCreditTypeAbbreviation,
				Name:         "Empower Plastic Credits",
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"non-existent abbreviation": {
			msg: &plasticcredit.MsgUpdateCreditType{
				Updater:      s.sampleIssuerAdmin,
				Abbreviation: "XX",
				Name:         "Someone else's PCs",
			},
			err: plasticcredit.ErrCreditTypeNotFound,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()
			s.PopulateWithSamples()
			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)
			_, err := ms.UpdateCreditType(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)
			events := s.ctx.EventManager().ABCIEvents()

			if err == nil {
				creditType, found := k.GetCreditType(s.ctx, tc.msg.Abbreviation)
				s.Require().True(found)
				s.Require().Equal(tc.msg.Name, creditType.Name)
				s.Require().Len(events, 1)
				parsedEvent, err := sdk.ParseTypedEvent(events[0])
				s.Require().NoError(err)
				eventUpdateCreditType, ok := parsedEvent.(*plasticcredit.EventUpdateCreditType)
				s.Require().True(ok)
				s.Require().Equal(&plasticcredit.EventUpdateCreditType{
					Updater:      tc.msg.Updater,
					Abbreviation: creditType.Abbreviation,
					Name:         creditType.Name,
				}, eventUpdateCreditType)
			}
		})
	}
}

func (s *TestSuite) TestCreateDuplicateCreditType() {
	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)
	ms := keeper.NewMsgServerImpl(k)
	admin1 := sample.AccAddress()
	s.fundAccount(admin1, sdk.NewCoins(sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(10e12))))
	_, err := ms.CreateIssuer(goCtx, &plasticcredit.MsgCreateIssuer{
		Creator:     k.Authority(),
		Name:        "Empower",
		Description: "",
		Admin:       admin1,
	})
	s.Require().NoError(err)

	admin2 := sample.AccAddress()
	s.fundAccount(admin2, sdk.NewCoins(sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(10e12))))
	_, err = ms.CreateIssuer(goCtx, &plasticcredit.MsgCreateIssuer{
		Creator:     k.Authority(),
		Name:        "Someone else",
		Description: "",
		Admin:       admin2,
	})
	s.Require().NoError(err)

	_, err = ms.CreateCreditType(goCtx, &plasticcredit.MsgCreateCreditType{
		Creator:      admin1,
		Abbreviation: "PTEST",
		IssuerId:     1,
		Name:         "My PTESTS",
	})
	s.Require().NoError(err)

	_, err = ms.CreateCreditType(goCtx, &plasticcredit.MsgCreateCreditType{
		Creator:      admin2,
		Abbreviation: "PTEST",
		IssuerId:     2,
		Name:         "What about _MY_ PTESTS?",
	})
	s.Require().ErrorIs(err, plasticcredit.ErrCreditTypeAbbreviationTaken)
}

func (s *TestSuite) TestCreateProject() {
	testCases := map[string]struct {
		msg *plasticcredit.MsgCreateProject
		err error
	}{
		"happy path": {
			msg: &plasticcredit.MsgCreateProject{
				Creator:                s.sampleApplicantAdmin,
				ApplicantId:            s.sampleApplicantID,
				CreditTypeAbbreviation: s.sampleCreditTypeAbbreviation,
				Name:                   "My happy path project",
			},
			err: nil,
		},
		"unauthorized creator on the issuer": {
			msg: &plasticcredit.MsgCreateProject{
				Creator:                sample.AccAddress(),
				ApplicantId:            s.sampleApplicantID,
				CreditTypeAbbreviation: s.sampleCreditTypeAbbreviation,
				Name:                   "My project",
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"non-existent applicant": {
			msg: &plasticcredit.MsgCreateProject{
				Creator:                s.sampleApplicantAdmin,
				ApplicantId:            37,
				CreditTypeAbbreviation: s.sampleCreditTypeAbbreviation,
				Name:                   "My project",
			},
			err: plasticcredit.ErrApplicantNotFound,
		},
		"non-existent credit type": {
			msg: &plasticcredit.MsgCreateProject{
				Creator:                s.sampleApplicantAdmin,
				ApplicantId:            s.sampleApplicantID,
				CreditTypeAbbreviation: "Not here",
				Name:                   "My project",
			},
			err: plasticcredit.ErrCreditTypeNotFound,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()
			s.PopulateWithSamples()
			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)

			resp, err := ms.CreateProject(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)
			events := s.ctx.EventManager().ABCIEvents()

			if err == nil {
				idCounters := k.GetIDCounters(s.ctx)
				s.Require().Equal(uint64(6), idCounters.NextProjectId)

				project, found := k.GetProject(s.ctx, resp.ProjectId)
				s.Require().True(found)
				s.Require().Equal(plasticcredit.Project{
					Id:                     5,
					ApplicantId:            tc.msg.ApplicantId,
					CreditTypeAbbreviation: tc.msg.CreditTypeAbbreviation,
					Name:                   tc.msg.Name,
					Status:                 plasticcredit.ProjectStatus_NEW,
				}, project)
				s.Require().Len(events, 1)
				parsedEvent, err := sdk.ParseTypedEvent(events[0])
				s.Require().NoError(err)
				eventCreateProject, ok := parsedEvent.(*plasticcredit.EventCreateProject)
				s.Require().True(ok)
				s.Require().Equal(&plasticcredit.EventCreateProject{
					Creator:                s.sampleApplicantAdmin,
					ProjectId:              project.Id,
					ApplicantId:            project.ApplicantId,
					CreditTypeAbbreviation: project.CreditTypeAbbreviation,
					Name:                   project.Name,
				}, eventCreateProject)
			}
		})
	}
}

func (s *TestSuite) TestUpdateProject() {
	testCases := map[string]struct {
		msg *plasticcredit.MsgUpdateProject
		err error
	}{
		"happy path": {
			msg: &plasticcredit.MsgUpdateProject{
				Updater:   s.sampleApplicantAdmin,
				ProjectId: s.sampleUnapprovedProjectID,
				Name:      "Updated project name",
			},
			err: nil,
		},
		"unauthorized creator on the issuer / invalid applicant": {
			msg: &plasticcredit.MsgUpdateProject{
				Updater:   sample.AccAddress(),
				ProjectId: s.sampleUnapprovedProjectID,
				Name:      "My project",
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"update non-existing project": {
			msg: &plasticcredit.MsgUpdateProject{
				Updater:   s.sampleApplicantAdmin,
				ProjectId: 42,
				Name:      "My project",
			},
			err: plasticcredit.ErrProjectNotFound,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()
			s.PopulateWithSamples()
			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)

			_, err := ms.UpdateProject(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)

			events := s.ctx.EventManager().ABCIEvents()
			if err == nil {
				project, found := k.GetProject(s.ctx, tc.msg.ProjectId)
				s.Require().True(found)
				s.Require().Equal(tc.msg.Name, project.Name)
				s.Require().Len(events, 1)
				parsedEvent, err := sdk.ParseTypedEvent(events[0])
				s.Require().NoError(err)
				eventUpdateProject, ok := parsedEvent.(*plasticcredit.EventUpdateProject)
				s.Require().True(ok)
				s.Require().Equal(&plasticcredit.EventUpdateProject{
					Updater:   s.sampleApplicantAdmin,
					ProjectId: project.Id,
					Name:      project.Name,
				}, eventUpdateProject)
			}
		})
	}
}

func (s *TestSuite) TestApproveProject() {
	extraIssuerAdmin := sample.AccAddress()

	testCases := map[string]struct {
		msg *plasticcredit.MsgApproveProject
		err error
	}{
		"happy path": {
			msg: &plasticcredit.MsgApproveProject{
				Approver:  s.sampleIssuerAdmin,
				ProjectId: s.sampleUnapprovedProjectID,
			},
			err: nil,
		},
		"unauthorized issuer admin": {
			msg: &plasticcredit.MsgApproveProject{
				Approver:  sample.AccAddress(),
				ProjectId: s.sampleUnapprovedProjectID,
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"issuer admin on a different issuer": {
			msg: &plasticcredit.MsgApproveProject{
				Approver:  extraIssuerAdmin,
				ProjectId: s.sampleUnapprovedProjectID,
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"applicant admin cannot approve project": {
			msg: &plasticcredit.MsgApproveProject{
				Approver:  s.sampleApplicantAdmin,
				ProjectId: s.sampleUnapprovedProjectID,
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"project not found": {
			msg: &plasticcredit.MsgApproveProject{
				Approver:  s.sampleIssuerAdmin,
				ProjectId: 42,
			},
			err: plasticcredit.ErrProjectNotFound,
		},
		"approve rejected project": {
			msg: &plasticcredit.MsgApproveProject{
				Approver:  s.sampleIssuerAdmin,
				ProjectId: s.sampleRejectionProjectID,
			},
			err: nil,
		},
		"approve suspended project": {
			msg: &plasticcredit.MsgApproveProject{
				Approver:  s.sampleIssuerAdmin,
				ProjectId: s.sampleSuspendedProjectID,
			},
			err: nil,
		},
		"project already approved": {
			msg: &plasticcredit.MsgApproveProject{
				Approver:  s.sampleIssuerAdmin,
				ProjectId: 1,
			},
			err: plasticcredit.ErrProjectNotNew,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()
			s.PopulateWithSamples()
			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)

			_, err := ms.CreateIssuer(sdk.WrapSDKContext(s.ctx), &plasticcredit.MsgCreateIssuer{
				Creator:     s.issuerCreator,
				Name:        "Extra Issuer",
				Description: "",
				Admin:       extraIssuerAdmin,
			})
			s.Require().NoError(err)

			_, err = ms.ApproveProject(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)

			events := s.ctx.EventManager().ABCIEvents()
			if err == nil {
				project, found := k.GetProject(s.ctx, tc.msg.ProjectId)
				s.Require().True(found)
				s.Require().Equal(plasticcredit.ProjectStatus_APPROVED, project.Status)
				s.Require().Len(events, 2)
				parsedEvent, err := sdk.ParseTypedEvent(events[1])
				s.Require().NoError(err)
				eventProjectApproved, ok := parsedEvent.(*plasticcredit.EventProjectApproved)
				s.Require().True(ok)
				s.Require().Equal(&plasticcredit.EventProjectApproved{
					ProjectId:                         project.Id,
					ApprovedForCreditTypeAbbreviation: s.sampleCreditTypeAbbreviation,
					ApprovingIssuerId:                 s.sampleIssuerID,
					ApprovedBy:                        tc.msg.Approver,
				}, eventProjectApproved)

			} else {
				s.Require().Len(events, 1)
			}
		})
	}
}

func (s *TestSuite) TestRejectProject() {
	extraIssuerAdmin := sample.AccAddress()

	testCases := map[string]struct {
		msg *plasticcredit.MsgRejectProject
		err error
	}{
		"happy path": {
			msg: &plasticcredit.MsgRejectProject{
				Rejector:  s.sampleIssuerAdmin,
				ProjectId: s.sampleUnapprovedProjectID,
			},
			err: nil,
		},
		"unauthorized issuer admin": {
			msg: &plasticcredit.MsgRejectProject{
				Rejector:  sample.AccAddress(),
				ProjectId: s.sampleUnapprovedProjectID,
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"issuer admin on a different issuer": {
			msg: &plasticcredit.MsgRejectProject{
				Rejector:  extraIssuerAdmin,
				ProjectId: s.sampleUnapprovedProjectID,
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"applicant admin cannot reject project": {
			msg: &plasticcredit.MsgRejectProject{
				Rejector:  s.sampleApplicantAdmin,
				ProjectId: s.sampleUnapprovedProjectID,
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"project not found": {
			msg: &plasticcredit.MsgRejectProject{
				Rejector:  s.sampleIssuerAdmin,
				ProjectId: 42,
			},
			err: plasticcredit.ErrProjectNotFound,
		},
		"project already rejected": {
			msg: &plasticcredit.MsgRejectProject{
				Rejector:  s.sampleIssuerAdmin,
				ProjectId: s.sampleRejectionProjectID,
			},
			err: plasticcredit.ErrProjectNotNew,
		},
		"project already approved": {
			msg: &plasticcredit.MsgRejectProject{
				Rejector:  s.sampleIssuerAdmin,
				ProjectId: s.sampleProjectID,
			},
			err: plasticcredit.ErrProjectNotNew,
		},
		"project is suspended": {
			msg: &plasticcredit.MsgRejectProject{
				Rejector:  s.sampleIssuerAdmin,
				ProjectId: s.sampleSuspendedProjectID,
			},
			err: plasticcredit.ErrProjectNotNew,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()
			s.PopulateWithSamples()
			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)

			_, err := ms.CreateIssuer(sdk.WrapSDKContext(s.ctx), &plasticcredit.MsgCreateIssuer{
				Creator:     s.issuerCreator,
				Name:        "Extra Issuer",
				Description: "",
				Admin:       extraIssuerAdmin,
			})
			s.Require().NoError(err)

			_, err = ms.RejectProject(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)

			events := s.ctx.EventManager().ABCIEvents()
			if err == nil {
				project, found := k.GetProject(s.ctx, tc.msg.ProjectId)
				s.Require().True(found)
				s.Require().Equal(plasticcredit.ProjectStatus_REJECTED, project.Status)
				s.Require().Len(events, 2)
				parsedEvent, err := sdk.ParseTypedEvent(events[1])
				s.Require().NoError(err)
				eventProjectRejected, ok := parsedEvent.(*plasticcredit.EventProjectRejected)
				s.Require().True(ok)
				s.Require().Equal(&plasticcredit.EventProjectRejected{
					ProjectId:                         project.Id,
					RejectedForCreditTypeAbbreviation: s.sampleCreditTypeAbbreviation,
					RejectingIssuerId:                 s.sampleIssuerID,
					RejectedBy:                        tc.msg.Rejector,
				}, eventProjectRejected)

			} else {
				s.Require().Len(events, 1)
			}
		})
	}
}

func (s *TestSuite) TestSuspendProject() {
	extraIssuerAdmin := sample.AccAddress()

	testCases := map[string]struct {
		msg *plasticcredit.MsgSuspendProject
		err error
	}{
		"happy path": {
			msg: &plasticcredit.MsgSuspendProject{
				Updater:   s.sampleIssuerAdmin,
				ProjectId: s.sampleProjectID,
			},
			err: nil,
		},
		"unauthorized issuer admin": {
			msg: &plasticcredit.MsgSuspendProject{
				Updater:   sample.AccAddress(),
				ProjectId: s.sampleProjectID,
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"issuer admin on a different issuer": {
			msg: &plasticcredit.MsgSuspendProject{
				Updater:   extraIssuerAdmin,
				ProjectId: s.sampleProjectID,
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"applicant admin cannot suspend project": {
			msg: &plasticcredit.MsgSuspendProject{
				Updater:   s.sampleApplicantAdmin,
				ProjectId: s.sampleProjectID,
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"project not found": {
			msg: &plasticcredit.MsgSuspendProject{
				Updater:   s.sampleIssuerAdmin,
				ProjectId: 42,
			},
			err: plasticcredit.ErrProjectNotFound,
		},
		"project already rejected": {
			msg: &plasticcredit.MsgSuspendProject{
				Updater:   s.sampleIssuerAdmin,
				ProjectId: s.sampleRejectionProjectID,
			},
			err: plasticcredit.ErrProjectNotSuspendable,
		},
		"project still in new state": {
			msg: &plasticcredit.MsgSuspendProject{
				Updater:   s.sampleIssuerAdmin,
				ProjectId: s.sampleUnapprovedProjectID,
			},
			err: plasticcredit.ErrProjectNotSuspendable,
		},
		"project already suspended": {
			msg: &plasticcredit.MsgSuspendProject{
				Updater:   s.sampleIssuerAdmin,
				ProjectId: s.sampleSuspendedProjectID,
			},
			err: plasticcredit.ErrProjectNotSuspendable,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()
			s.PopulateWithSamples()
			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)

			_, err := ms.CreateIssuer(sdk.WrapSDKContext(s.ctx), &plasticcredit.MsgCreateIssuer{
				Creator:     s.issuerCreator,
				Name:        "Extra Issuer",
				Description: "",
				Admin:       extraIssuerAdmin,
			})
			s.Require().NoError(err)

			_, err = ms.SuspendProject(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)

			events := s.ctx.EventManager().ABCIEvents()
			if err == nil {
				project, found := k.GetProject(s.ctx, tc.msg.ProjectId)
				s.Require().True(found)
				s.Require().Equal(plasticcredit.ProjectStatus_SUSPENDED, project.Status)
				s.Require().Len(events, 2)
				parsedEvent, err := sdk.ParseTypedEvent(events[1])
				s.Require().NoError(err)
				eventProjectSuspended, ok := parsedEvent.(*plasticcredit.EventProjectSuspended)
				s.Require().True(ok)
				s.Require().Equal(&plasticcredit.EventProjectSuspended{
					ProjectId:                          s.sampleProjectID,
					SuspendedForCreditTypeAbbreviation: s.sampleCreditTypeAbbreviation,
					SuspendingIssuerId:                 s.sampleIssuerID,
					SuspendedBy:                        tc.msg.Updater,
				}, eventProjectSuspended)

			}
		})
	}
}

func (s *TestSuite) TestIssueCredits() {
	testCases := map[string]struct {
		msg            *plasticcredit.MsgIssueCredits
		expectedAmount uint64
		err            error
	}{
		"happy path (new collection)": {
			msg: &plasticcredit.MsgIssueCredits{
				Creator:      s.sampleIssuerAdmin,
				ProjectId:    s.sampleProjectID,
				SerialNumber: "456",
				CreditAmount: 1000,
				MetadataUris: []string{"ipfs://CID1", "ipfs://CID2"},
			},
			expectedAmount: 1000,
			err:            nil,
		},
		"happy path (existing collection)": {
			msg: &plasticcredit.MsgIssueCredits{
				Creator:      s.sampleIssuerAdmin,
				ProjectId:    s.sampleProjectID,
				SerialNumber: "123",
				CreditAmount: 1000,
				MetadataUris: []string{"ipfs://CID1", "ipfs://CID2"},
			},
			expectedAmount: 100001000,
			err:            nil,
		},
		"wrong issuer address": {
			msg: &plasticcredit.MsgIssueCredits{
				Creator:      sample.AccAddress(),
				ProjectId:    s.sampleProjectID,
				SerialNumber: "123",
				CreditAmount: 1000,
				MetadataUris: []string{"ipfs://CID1", "ipfs://CID2"},
			},
			expectedAmount: 0,
			err:            plasticcredit.ErrIssuerNotAllowed,
		},
		"unexisting project": {
			msg: &plasticcredit.MsgIssueCredits{
				Creator:      s.sampleIssuerAdmin,
				ProjectId:    123,
				SerialNumber: "123",
				CreditAmount: 1000,
				MetadataUris: []string{"ipfs://CID1", "ipfs://CID2"},
			},
			expectedAmount: 0,
			err:            plasticcredit.ErrProjectNotFound,
		},
		"issue zero credits": {
			msg: &plasticcredit.MsgIssueCredits{
				Creator:      s.sampleIssuerAdmin,
				ProjectId:    s.sampleProjectID,
				SerialNumber: "321",
				CreditAmount: 0,
				MetadataUris: []string{"ipfs://CID1", "ipfs://CID2"},
			},
			expectedAmount: 0,
			err:            utils.ErrInvalidValue,
		},
		"issue credits to unapproved project": {
			msg: &plasticcredit.MsgIssueCredits{
				Creator:      s.sampleIssuerAdmin,
				ProjectId:    s.sampleUnapprovedProjectID,
				SerialNumber: "456",
				CreditAmount: 1000,
				MetadataUris: []string{"ipfs://CID1", "ipfs://CID2"},
			},
			expectedAmount: 0,
			err:            plasticcredit.ErrProjectNotApproved,
		},
		"issue credits to rejected project": {
			msg: &plasticcredit.MsgIssueCredits{
				Creator:      s.sampleIssuerAdmin,
				ProjectId:    s.sampleRejectionProjectID,
				SerialNumber: "456",
				CreditAmount: 1000,
				MetadataUris: []string{"ipfs://CID1", "ipfs://CID2"},
			},
			expectedAmount: 0,
			err:            plasticcredit.ErrProjectNotApproved,
		},
		"issue credits to suspended project": {
			msg: &plasticcredit.MsgIssueCredits{
				Creator:      s.sampleIssuerAdmin,
				ProjectId:    s.sampleSuspendedProjectID,
				SerialNumber: "456",
				CreditAmount: 1000,
				MetadataUris: []string{"ipfs://CID1", "ipfs://CID2"},
			},
			expectedAmount: 0,
			err:            plasticcredit.ErrProjectNotApproved,
		},
		"issue credits with no metadata": {
			msg: &plasticcredit.MsgIssueCredits{
				Creator:      s.sampleIssuerAdmin,
				ProjectId:    s.sampleProjectID,
				SerialNumber: "456",
				CreditAmount: 1000,
				MetadataUris: []string{},
			},
			expectedAmount: 0,
			err:            utils.ErrInvalidValue,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()
			s.PopulateWithSamples()
			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)

			resp, err := ms.IssueCredits(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)

			events := s.ctx.EventManager().ABCIEvents()
			if tc.err == nil {
				denom, err := keeper.CreateCreditDenom(s.sampleCreditTypeAbbreviation, tc.msg.SerialNumber)
				s.Require().NoError(err)
				creditCollection, found := k.GetCreditCollection(s.ctx, denom)
				s.Require().True(found)
				ownerAddress, err := sdk.AccAddressFromBech32(s.sampleApplicantAdmin)
				s.Require().NoError(err)
				ownerBalance, found := k.GetCreditBalance(s.ctx, ownerAddress, denom)
				s.Require().True(found)
				s.Require().Equal(tc.expectedAmount, resp.Collection.TotalAmount.Active)
				s.Require().Equal(tc.expectedAmount, creditCollection.TotalAmount.Active)
				s.Require().Equal(tc.expectedAmount, ownerBalance.Balance.Active)
				s.Require().Equal(uint64(0), resp.Collection.TotalAmount.Retired)
				s.Require().Equal(uint64(0), creditCollection.TotalAmount.Retired)
				s.Require().Equal(uint64(0), ownerBalance.Balance.Retired)
				s.Require().Equal(tc.msg.MetadataUris, creditCollection.MetadataUris)
				s.Require().Len(events, 1)
				parsedEvent, err := sdk.ParseTypedEvent(events[0])
				s.Require().NoError(err)
				eventIssuedCredits, ok := parsedEvent.(*plasticcredit.EventIssuedCredits)
				s.Require().True(ok)
				s.Require().Equal(&plasticcredit.EventIssuedCredits{
					IssuerId:               s.sampleIssuerID,
					ProjectId:              tc.msg.ProjectId,
					ApplicantId:            s.sampleApplicantID,
					Recipient:              s.sampleApplicantAdmin,
					CreditTypeAbbreviation: s.sampleCreditTypeAbbreviation,
					Denom:                  denom,
					Amount:                 tc.msg.CreditAmount,
					IssuerAddress:          tc.msg.Creator,
					MetadataUris:           tc.msg.MetadataUris,
				}, eventIssuedCredits)
			} else {
				s.Require().Len(events, 0)
			}
		})
	}
}

func (s *TestSuite) TestTransferCredits() {
	address := sample.AccAddress()
	testCases := map[string]struct {
		msg                             *plasticcredit.MsgTransferCredits
		expectedSenderBalance           uint64
		expectedRecipientBalanceActive  uint64
		expectedRecipientBalanceRetired uint64
		err                             error
	}{
		"happy path (no retire)": {
			msg: &plasticcredit.MsgTransferCredits{
				From:   s.sampleApplicantAdmin,
				To:     address,
				Denom:  s.sampleCreditDenom,
				Amount: 100,
				Retire: false,
			},
			expectedSenderBalance:           99999900,
			expectedRecipientBalanceActive:  100,
			expectedRecipientBalanceRetired: 0,
			err:                             nil,
		},
		"happy path (retire)": {
			msg: &plasticcredit.MsgTransferCredits{
				From:   s.sampleApplicantAdmin,
				To:     address,
				Denom:  s.sampleCreditDenom,
				Amount: 100,
				Retire: true,
			},
			expectedSenderBalance:           99999900,
			expectedRecipientBalanceActive:  0,
			expectedRecipientBalanceRetired: 100,
			err:                             nil,
		},
		"not enough sender balance": {
			msg: &plasticcredit.MsgTransferCredits{
				From:   s.sampleApplicantAdmin,
				To:     address,
				Denom:  s.sampleCreditDenom,
				Amount: 10000000000,
				Retire: false,
			},
			expectedSenderBalance:           0,
			expectedRecipientBalanceActive:  0,
			expectedRecipientBalanceRetired: 0,
			err:                             plasticcredit.ErrCreditsNotEnough,
		},
		"non-existing denom": {
			msg: &plasticcredit.MsgTransferCredits{
				From:   s.sampleApplicantAdmin,
				To:     address,
				Denom:  "ABC/000",
				Amount: 100,
				Retire: false,
			},
			expectedSenderBalance:           0,
			expectedRecipientBalanceActive:  0,
			expectedRecipientBalanceRetired: 0,
			err:                             plasticcredit.ErrCreditBalanceNotFound,
		},
		"wrong from address": {
			msg: &plasticcredit.MsgTransferCredits{
				From:   "emp",
				To:     address,
				Denom:  s.sampleCreditDenom,
				Amount: 100,
				Retire: false,
			},
			expectedSenderBalance:           0,
			expectedRecipientBalanceActive:  0,
			expectedRecipientBalanceRetired: 0,
			err:                             sdkerrors.ErrInvalidAddress,
		},
		"wrong to address": {
			msg: &plasticcredit.MsgTransferCredits{
				From:   s.sampleApplicantAdmin,
				To:     "emp",
				Denom:  s.sampleCreditDenom,
				Amount: 100,
				Retire: false,
			},
			expectedSenderBalance:           0,
			expectedRecipientBalanceActive:  0,
			expectedRecipientBalanceRetired: 0,
			err:                             sdkerrors.ErrInvalidAddress,
		},
		"sending to the same address": {
			msg: &plasticcredit.MsgTransferCredits{
				From:   s.sampleApplicantAdmin,
				To:     s.sampleApplicantAdmin,
				Denom:  s.sampleCreditDenom,
				Amount: 100,
				Retire: false,
			},
			expectedSenderBalance:           0,
			expectedRecipientBalanceActive:  0,
			expectedRecipientBalanceRetired: 0,
			err:                             plasticcredit.ErrSameSenderAndRecipient,
		},
		"sending to the same address (no balance)": {
			msg: &plasticcredit.MsgTransferCredits{
				From:   address,
				To:     address,
				Denom:  s.sampleCreditDenom,
				Amount: 100,
				Retire: false,
			},
			expectedSenderBalance:           0,
			expectedRecipientBalanceActive:  0,
			expectedRecipientBalanceRetired: 0,
			err:                             plasticcredit.ErrCreditBalanceNotFound,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()
			s.PopulateWithSamples()
			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)

			var collectionBefore, collectionAfter plasticcredit.CreditCollection

			if tc.err == nil && tc.msg.Retire == true {
				var found bool
				collectionBefore, found = k.GetCreditCollection(s.ctx, tc.msg.Denom)
				s.Require().True(found)
			}

			_, err := ms.TransferCredits(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)

			events := s.ctx.EventManager().ABCIEvents()
			if tc.err == nil {
				sender, err := sdk.AccAddressFromBech32(tc.msg.From)
				s.Require().NoError(err)
				recipient, err := sdk.AccAddressFromBech32(tc.msg.To)
				s.Require().NoError(err)
				senderBalance, found := k.GetCreditBalance(s.ctx, sender, tc.msg.Denom)
				s.Require().True(found)
				recipientBalance, found := k.GetCreditBalance(s.ctx, recipient, tc.msg.Denom)
				s.Require().True(found)
				s.Require().Equal(tc.expectedSenderBalance, senderBalance.Balance.Active)
				s.Require().Equal(tc.expectedRecipientBalanceActive, recipientBalance.Balance.Active)
				s.Require().Equal(tc.expectedRecipientBalanceRetired, recipientBalance.Balance.Retired)
				var parsedEvent proto.Message
				if tc.msg.Retire == true {
					collectionAfter, found = k.GetCreditCollection(s.ctx, tc.msg.Denom)
					s.Require().True(found)
					s.Require().Equal(collectionBefore.TotalAmount.Active-tc.msg.Amount, collectionAfter.TotalAmount.Active)
					s.Require().Equal(collectionBefore.TotalAmount.Retired+tc.msg.Amount, collectionAfter.TotalAmount.Retired)
					s.Require().Len(events, 3)
					parsedEvent, err = sdk.ParseTypedEvent(events[0])
					s.Require().NoError(err)
					eventCreateCertificate, ok := parsedEvent.(*certificates.EventCreateCertificate)
					s.Require().True(ok)
					s.Require().Equal(tc.msg.To, eventCreateCertificate.Owner)
					s.Require().Equal(certificates.CertificateType_CREDIT_RETIREMENT.String(), eventCreateCertificate.CertificateType)
					parsedEvent, err = sdk.ParseTypedEvent(events[2])
					s.Require().NoError(err)
					eventRetiredCredits, ok := parsedEvent.(*plasticcredit.EventRetiredCredits)
					s.Require().True(ok)
					s.Require().Equal(&plasticcredit.EventRetiredCredits{
						Owner:                  tc.msg.To,
						Denom:                  tc.msg.Denom,
						Amount:                 tc.msg.Amount,
						IssuerId:               s.sampleIssuerID,
						CreditTypeAbbreviation: s.sampleCreditTypeAbbreviation,
					}, eventRetiredCredits)
					parsedEvent, err = sdk.ParseTypedEvent(events[1])
				} else {
					s.Require().Len(events, 1)
					parsedEvent, err = sdk.ParseTypedEvent(events[0])
				}
				s.Require().NoError(err)
				EventTransferCredits, ok := parsedEvent.(*plasticcredit.EventTransferCredits)
				s.Require().True(ok)
				s.Require().Equal(&plasticcredit.EventTransferCredits{
					Sender:                 tc.msg.From,
					Recipient:              tc.msg.To,
					Denom:                  tc.msg.Denom,
					Amount:                 tc.msg.Amount,
					IssuerId:               s.sampleIssuerID,
					CreditTypeAbbreviation: s.sampleCreditTypeAbbreviation,
				}, EventTransferCredits)
			} else {
				s.Require().Len(events, 0)
			}
		})
	}
}

func (s *TestSuite) TestTransferCreditsWithAuthz() {
	s.PopulateWithSamples()
	grantee := sample.AccAddress()

	transfer5Msg, err := codectypes.NewAnyWithValue(&plasticcredit.MsgTransferCredits{
		From:   s.sampleApplicantAdmin,
		To:     grantee,
		Denom:  s.sampleCreditDenom,
		Amount: 5,
		Retire: false,
	})
	s.Require().NoError(err)

	// Authorization not created yet, should fail:
	goCtx := sdk.WrapSDKContext(s.ctx)
	_, err = s.empowerApp.AuthzKeeper.Exec(goCtx, &authz.MsgExec{
		Grantee: grantee,
		Msgs:    []*codectypes.Any{transfer5Msg},
	})
	s.Require().ErrorIs(err, authz.ErrNoAuthorizationFound)

	// Create custom transfer credits authz authorization
	expiration := time.Now().AddDate(1, 0, 0)
	err = s.empowerApp.AuthzKeeper.SaveGrant(
		s.ctx,
		sdk.MustAccAddressFromBech32(grantee),
		sdk.MustAccAddressFromBech32(s.sampleApplicantAdmin),
		&plasticcredit.TransferAuthorization{
			Denom:      s.sampleCreditDenom,
			MaxCredits: 10,
		},
		&expiration,
	)
	s.Require().NoError(err)

	// Transfer above max credits, should fail
	transfer11Msg, err := codectypes.NewAnyWithValue(&plasticcredit.MsgTransferCredits{
		From:   s.sampleApplicantAdmin,
		To:     grantee,
		Denom:  s.sampleCreditDenom,
		Amount: 11,
		Retire: false,
	})
	s.Require().NoError(err)
	_, err = s.empowerApp.AuthzKeeper.Exec(goCtx, &authz.MsgExec{
		Grantee: grantee,
		Msgs:    []*codectypes.Any{transfer11Msg},
	})
	s.Require().ErrorIs(err, sdkerrors.ErrUnauthorized)

	// Transfer 5, should work
	_, err = s.empowerApp.AuthzKeeper.Exec(goCtx, &authz.MsgExec{
		Grantee: grantee,
		Msgs:    []*codectypes.Any{transfer5Msg},
	})
	s.Require().NoError(err)

	// Transfer 6, which is above the max remaining credits (5 left), should fail
	transfer6Msg, err := codectypes.NewAnyWithValue(&plasticcredit.MsgTransferCredits{
		From:   s.sampleApplicantAdmin,
		To:     grantee,
		Denom:  s.sampleCreditDenom,
		Amount: 6,
		Retire: false,
	})
	s.Require().NoError(err)
	_, err = s.empowerApp.AuthzKeeper.Exec(goCtx, &authz.MsgExec{
		Grantee: grantee,
		Msgs:    []*codectypes.Any{transfer6Msg},
	})
	s.Require().ErrorIs(err, sdkerrors.ErrUnauthorized)

	// Transfer the last 5 of the MaxCredits, should work
	_, err = s.empowerApp.AuthzKeeper.Exec(goCtx, &authz.MsgExec{
		Grantee: grantee,
		Msgs:    []*codectypes.Any{transfer5Msg},
	})
	s.Require().NoError(err)

	// There are no more credits left in the authorization, should fail
	_, err = s.empowerApp.AuthzKeeper.Exec(goCtx, &authz.MsgExec{
		Grantee: grantee,
		Msgs:    []*codectypes.Any{transfer5Msg},
	})
	s.Require().ErrorIs(err, authz.ErrNoAuthorizationFound) // Not found because the authorization is deleted when used up
}

func (s *TestSuite) TestRetireCredits() {
	testCases := map[string]struct {
		msg                    *plasticcredit.MsgRetireCredits
		expectedBalanceRetired uint64
		err                    error
	}{
		"happy path": {
			msg: &plasticcredit.MsgRetireCredits{
				Owner:  s.sampleApplicantAdmin,
				Denom:  s.sampleCreditDenom,
				Amount: 100,
			},
			expectedBalanceRetired: 100,
			err:                    nil,
		},
		"not enough active balance": {
			msg: &plasticcredit.MsgRetireCredits{
				Owner:  s.sampleApplicantAdmin,
				Denom:  s.sampleCreditDenom,
				Amount: 100000000000,
			},
			expectedBalanceRetired: 0,
			err:                    plasticcredit.ErrActiveCreditsNotEnough,
		},
		"non-existing denom": {
			msg: &plasticcredit.MsgRetireCredits{
				Owner:  s.sampleApplicantAdmin,
				Denom:  "ABC/000",
				Amount: 100,
			},
			expectedBalanceRetired: 0,
			err:                    plasticcredit.ErrCreditsNotEnough,
		},
		"empty denom": {
			msg: &plasticcredit.MsgRetireCredits{
				Owner:  s.sampleApplicantAdmin,
				Denom:  "",
				Amount: 100,
			},
			expectedBalanceRetired: 0,
			err:                    plasticcredit.ErrCreditsNotEnough,
		},
		"invalid owner address": {
			msg: &plasticcredit.MsgRetireCredits{
				Owner:  "emp",
				Denom:  s.sampleCreditDenom,
				Amount: 100,
			},
			expectedBalanceRetired: 0,
			err:                    sdkerrors.ErrInvalidAddress,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()
			s.PopulateWithSamples()
			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)
			certificatesMsgServer := certificateskeeper.NewMsgServerImpl(s.empowerApp.CertificateKeeper)
			_, err := certificatesMsgServer.UpdateParams(goCtx, &certificates.MsgUpdateParams{
				Authority: k.Authority(),
				Params: certificates.Params{
					AllowedIssuers: []string{s.sampleIssuerAdmin},
				},
			})
			s.Require().NoError(err)
			var collectionBefore, collection plasticcredit.CreditCollection
			var balanceBefore, balance plasticcredit.CreditBalance
			var owner sdk.AccAddress

			if tc.err == nil {
				var found bool
				var err error
				owner, err = sdk.AccAddressFromBech32(tc.msg.Owner)
				s.Require().NoError(err)
				collectionBefore, found = k.GetCreditCollection(s.ctx, tc.msg.Denom)
				s.Require().True(found)
				balanceBefore, found = k.GetCreditBalance(s.ctx, owner, tc.msg.Denom)
				s.Require().True(found)
			}

			_, err = ms.RetireCredits(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)

			events := s.ctx.EventManager().ABCIEvents()
			if tc.err == nil {
				var found bool
				balance, found = k.GetCreditBalance(s.ctx, owner, tc.msg.Denom)
				s.Require().True(found)
				collection, found = k.GetCreditCollection(s.ctx, tc.msg.Denom)
				s.Require().True(found)
				s.Require().Equal(tc.expectedBalanceRetired, balance.Balance.Retired)
				s.Require().Equal(collectionBefore.TotalAmount.Active-tc.msg.Amount, collection.TotalAmount.Active)
				s.Require().Equal(collectionBefore.TotalAmount.Retired+tc.msg.Amount, collection.TotalAmount.Retired)
				s.Require().Equal(balanceBefore.Balance.Active-tc.msg.Amount, balance.Balance.Active)
				s.Require().Equal(balanceBefore.Balance.Retired+tc.msg.Amount, balance.Balance.Retired)
				s.Require().Len(events, 2)
				parsedCreateCertEvent, err := sdk.ParseTypedEvent(events[0])
				s.Require().NoError(err)
				eventCreateCertificates, ok := parsedCreateCertEvent.(*certificates.EventCreateCertificate)
				s.Require().True(ok)
				s.Require().Equal(tc.msg.Owner, eventCreateCertificates.Owner)
				s.Require().Equal(certificates.CertificateType_CREDIT_RETIREMENT.String(), eventCreateCertificates.CertificateType)
				parsedRetiredCreditsEvent, err := sdk.ParseTypedEvent(events[1])
				s.Require().NoError(err)
				eventRetiredCredits, ok := parsedRetiredCreditsEvent.(*plasticcredit.EventRetiredCredits)
				s.Require().True(ok)
				s.Require().Equal(&plasticcredit.EventRetiredCredits{
					Owner:                  tc.msg.Owner,
					Denom:                  tc.msg.Denom,
					Amount:                 tc.msg.Amount,
					IssuerId:               s.sampleIssuerID,
					CreditTypeAbbreviation: s.sampleCreditTypeAbbreviation,
				}, eventRetiredCredits)
			} else {
				s.Require().Len(events, 0)
			}
		})
	}
}
