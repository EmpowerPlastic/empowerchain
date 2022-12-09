package keeper_test

import (
	"github.com/EmpowerPlastic/empowerchain/app"
	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/utils"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/keeper"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
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
						IssuerCreator: sample.AccAddress(),
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
		"invalid params": {
			msg: func(empowerApp *app.EmpowerApp) *plasticcredit.MsgUpdateParams {
				return &plasticcredit.MsgUpdateParams{
					Authority: empowerApp.PlasticcreditKeeper.Authority(),
					Params: plasticcredit.Params{
						IssuerCreator: "invalid",
					},
				}
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
			msg := tc.msg(s.empowerApp)
			_, err := ms.UpdateParams(goCtx, msg)

			s.Require().ErrorIs(err, tc.err)

			if err == nil {
				s.Require().NoError(err)

				params := k.GetParams(s.ctx)
				s.Require().Equal(msg.Params, params)
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
				s.Require().Equal(uint64(2), resp.IssuerId)

				idCounters := k.GetIDCounters(s.ctx)
				s.Require().Equal(uint64(3), idCounters.NextIssuerId)

				issuer, found := k.GetIssuer(s.ctx, resp.IssuerId)
				s.Require().True(found)
				s.Require().Equal(plasticcredit.Issuer{
					Id:          resp.IssuerId,
					Name:        tc.msg.Name,
					Description: tc.msg.Description,
					Admin:       tc.msg.Admin,
				}, issuer)

				s.Require().Len(events, 3)
				parsedEvent, err := sdk.ParseTypedEvent(events[2])
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
				s.Require().Equal(uint64(2), idCounters.NextIssuerId)
				_, found := k.GetIssuer(s.ctx, 2)
				s.Require().False(found)

				s.Require().Len(events, 2)
			}
		})
	}
}

func (s *TestSuite) TestUpdateIssuer() {
	issuerAdmin := sample.AccAddress()

	testCases := map[string]struct {
		msg *plasticcredit.MsgUpdateIssuer
		err error
	}{
		"happy path": {
			msg: &plasticcredit.MsgUpdateIssuer{
				Updater:     issuerAdmin,
				IssuerId:    1,
				Name:        "EmpowerUpdated",
				Description: "Empower is cool",
				Admin:       sample.AccAddress(),
			},
			err: nil,
		},
		"unauthorized caller": {
			msg: &plasticcredit.MsgUpdateIssuer{
				Updater:     sample.AccAddress(), // not allowed!
				IssuerId:    1,
				Name:        "Empower",
				Description: "Empower is cool",
				Admin:       sample.AccAddress(),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"invalid address": {
			msg: &plasticcredit.MsgUpdateIssuer{
				Updater:     "Invalid", // invalid
				Name:        "Empower",
				Description: "Empower is cool",
				Admin:       sample.AccAddress(),
			},
			err: sdkerrors.ErrInvalidAddress,
		},
		"issuer not found": {
			msg: &plasticcredit.MsgUpdateIssuer{
				Updater:     issuerAdmin,
				IssuerId:    2,
				Name:        "Empower",
				Description: "Empower is cool",
				Admin:       sample.AccAddress(),
			},
			err: plasticcredit.ErrNotFoundIssuer,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()

			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)
			_, err := ms.UpdateParams(goCtx, &plasticcredit.MsgUpdateParams{
				Authority: k.Authority(),
				Params: plasticcredit.Params{
					IssuerCreator: issuerAdmin,
				},
			})
			s.Require().NoError(err)

			_, err = ms.CreateIssuer(goCtx, &plasticcredit.MsgCreateIssuer{
				Creator:     issuerAdmin,
				Name:        "Empower",
				Description: "",
				Admin:       issuerAdmin,
			})
			s.Require().NoError(err)

			_, err = ms.UpdateIssuer(goCtx, tc.msg)
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
				s.Require().Len(events, 2)
				parsedEvent, err := sdk.ParseTypedEvent(events[1])
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

				s.Require().Len(events, 1)
				parsedEvent, err := sdk.ParseTypedEvent(events[0])
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
	testCases := map[string]struct {
		msg *plasticcredit.MsgUpdateApplicant
		err error
	}{
		"happy path": {
			msg: &plasticcredit.MsgUpdateApplicant{
				ApplicantId: s.sampleApplicantId,
				Name:        "Empower",
				Description: "Empower is cool",
				Admin:       sample.AccAddress(),
			},
			err: nil,
		},
		"applicant not found": {
			msg: &plasticcredit.MsgUpdateApplicant{
				ApplicantId: 0,
				Name:        "Empower",
				Description: "Empower is cool",
				Admin:       sample.AccAddress(),
			},
			err: plasticcredit.ErrNotFoundApplicant,
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

			if err == nil {
				events := s.ctx.EventManager().ABCIEvents()
				applicant, found := k.GetApplicant(s.ctx, tc.msg.ApplicantId)
				s.Require().True(found)
				s.Require().Equal(plasticcredit.Applicant{
					Id:          s.sampleApplicantId,
					Name:        tc.msg.Name,
					Description: tc.msg.Description,
					Admin:       tc.msg.Admin,
				}, applicant)

				s.Require().Len(events, 3)
				parsedEvent, err := sdk.ParseTypedEvent(events[2])
				s.Require().NoError(err)
				eventUpdateApplicant, ok := parsedEvent.(*plasticcredit.EventUpdateApplicant)
				s.Require().True(ok)
				s.Require().Equal(&plasticcredit.EventUpdateApplicant{
					ApplicantId: 1,
					Name:        tc.msg.Name,
					Description: tc.msg.Description,
					Admin:       tc.msg.Admin,
				}, eventUpdateApplicant)
			}
		})
	}
}

func (s *TestSuite) TestCreateCreditClass() {
	testCases := map[string]struct {
		msg *plasticcredit.MsgCreateCreditClass
		err error
	}{
		"happy path": {
			msg: &plasticcredit.MsgCreateCreditClass{
				Creator:      s.sampleIssuerAdmin,
				Abbreviation: "PCRD",
				IssuerId:     s.sampleIssuerId,
				Name:         "Empower Plastic Credits",
			},
			err: nil,
		},
		"unauthorized creator on the issuer": {
			msg: &plasticcredit.MsgCreateCreditClass{
				Creator:      sample.AccAddress(),
				Abbreviation: "PCRD",
				IssuerId:     s.sampleIssuerId,
				Name:         "Empower Plastic Credits",
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"invalid abbreviation": {
			msg: &plasticcredit.MsgCreateCreditClass{
				Creator:      s.sampleIssuerAdmin,
				Abbreviation: "",
				IssuerId:     s.sampleIssuerId,
				Name:         "Empower Plastic Credits",
			},
			err: utils.ErrInvalidValue,
		},
		"non-existent issuer": {
			msg: &plasticcredit.MsgCreateCreditClass{
				Creator:      s.sampleIssuerAdmin,
				Abbreviation: "VPC",
				IssuerId:     42,
				Name:         "Someone else's PCs",
			},
			err: plasticcredit.ErrNotFoundIssuer,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()
			s.PopulateWithSamples()
			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)

			_, err := ms.CreateCreditClass(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)

			if err == nil {
				creditClass, found := k.GetCreditClass(s.ctx, tc.msg.Abbreviation)
				s.Require().True(found)
				s.Require().Equal(plasticcredit.CreditClass{
					Abbreviation: tc.msg.Abbreviation,
					IssuerId:     tc.msg.IssuerId,
					Name:         tc.msg.Name,
				}, creditClass)
			}
		})
	}
}

func (s *TestSuite) TestCreateDuplicateCreditClass() {
	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)
	ms := keeper.NewMsgServerImpl(k)
	admin1 := sample.AccAddress()
	_, err := ms.CreateIssuer(goCtx, &plasticcredit.MsgCreateIssuer{
		Creator:     k.Authority(),
		Name:        "Empower",
		Description: "",
		Admin:       admin1,
	})
	s.Require().NoError(err)

	admin2 := sample.AccAddress()
	_, err = ms.CreateIssuer(goCtx, &plasticcredit.MsgCreateIssuer{
		Creator:     k.Authority(),
		Name:        "Someone else",
		Description: "",
		Admin:       admin2,
	})
	s.Require().NoError(err)

	_, err = ms.CreateCreditClass(goCtx, &plasticcredit.MsgCreateCreditClass{
		Creator:      admin1,
		Abbreviation: "PCRD",
		IssuerId:     1,
		Name:         "My PCRDS",
	})
	s.Require().NoError(err)

	_, err = ms.CreateCreditClass(goCtx, &plasticcredit.MsgCreateCreditClass{
		Creator:      admin2,
		Abbreviation: "PCRD",
		IssuerId:     2,
		Name:         "What about _MY_ PCRDS?",
	})
	s.Require().ErrorIs(err, plasticcredit.ErrCreditClassAbbreviationTaken)
}

func (s *TestSuite) TestCreateProject() {
	testCases := map[string]struct {
		msg *plasticcredit.MsgCreateProject
		err error
	}{
		"happy path": {
			msg: &plasticcredit.MsgCreateProject{
				Creator:                 s.sampleApplicantAdmin,
				ApplicantId:             s.sampleApplicantId,
				CreditClassAbbreviation: s.sampleCreditClassAbbreviation,
				Name:                    "My happy path project",
			},
			err: nil,
		},
		"unauthorized creator on the issuer": {
			msg: &plasticcredit.MsgCreateProject{
				Creator:                 sample.AccAddress(),
				ApplicantId:             s.sampleApplicantId,
				CreditClassAbbreviation: s.sampleCreditClassAbbreviation,
				Name:                    "My project",
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"non-existent applicant": {
			msg: &plasticcredit.MsgCreateProject{
				Creator:                 s.sampleApplicantAdmin,
				ApplicantId:             37,
				CreditClassAbbreviation: s.sampleCreditClassAbbreviation,
				Name:                    "My project",
			},
			err: plasticcredit.ErrNotFoundApplicant,
		},
		"non-existent credit class": {
			msg: &plasticcredit.MsgCreateProject{
				Creator:                 s.sampleApplicantAdmin,
				ApplicantId:             s.sampleApplicantId,
				CreditClassAbbreviation: "Not here",
				Name:                    "My project",
			},
			err: plasticcredit.ErrNotFoundCreditClass,
		},
		"invalid name": {
			msg: &plasticcredit.MsgCreateProject{
				Creator:                 s.sampleApplicantAdmin,
				ApplicantId:             s.sampleApplicantId,
				CreditClassAbbreviation: s.sampleCreditClassAbbreviation,
				Name:                    "",
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

			resp, err := ms.CreateProject(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)

			if err == nil {
				idCounters := k.GetIDCounters(s.ctx)
				s.Require().Equal(uint64(2), idCounters.NextIssuerId)

				project, found := k.GetProject(s.ctx, resp.ProjectId)
				s.Require().True(found)
				s.Require().Equal(plasticcredit.Project{
					Id:                      2,
					ApplicantId:             tc.msg.ApplicantId,
					CreditClassAbbreviation: tc.msg.CreditClassAbbreviation,
					Name:                    tc.msg.Name,
				}, project)
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
				ProjectId:    s.sampleProjectId,
				SerialNumber: "456",
				CreditAmount: 1000,
			},
			expectedAmount: 1000,
			err:            nil,
		},
		"happy path (existing collection)": {
			msg: &plasticcredit.MsgIssueCredits{
				Creator:      s.sampleIssuerAdmin,
				ProjectId:    s.sampleProjectId,
				SerialNumber: "123",
				CreditAmount: 1000,
			},
			expectedAmount: 100001000,
			err:            nil,
		},
		"wrong issuer address": {
			msg: &plasticcredit.MsgIssueCredits{
				Creator:      sample.AccAddress(),
				ProjectId:    s.sampleProjectId,
				SerialNumber: "123",
				CreditAmount: 1000,
			},
			expectedAmount: 0,
			err:            plasticcredit.ErrNotIssuer,
		},
		"unexisting project": {
			msg: &plasticcredit.MsgIssueCredits{
				Creator:      s.sampleIssuerAdmin,
				ProjectId:    123,
				SerialNumber: "123",
				CreditAmount: 1000,
			},
			expectedAmount: 0,
			err:            plasticcredit.ErrNotFoundProject,
		},
		"empty serial number": {
			msg: &plasticcredit.MsgIssueCredits{
				Creator:      s.sampleIssuerAdmin,
				ProjectId:    s.sampleProjectId,
				SerialNumber: "",
				CreditAmount: 1000,
			},
			expectedAmount: 0,
			err:            utils.ErrInvalidValue,
		},
		"issue zero credits": {
			msg: &plasticcredit.MsgIssueCredits{
				Creator:      s.sampleIssuerAdmin,
				ProjectId:    s.sampleProjectId,
				SerialNumber: "321",
				CreditAmount: 0,
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
				denom, err := keeper.CreateCreditDenom(s.sampleCreditClassAbbreviation, tc.msg.SerialNumber)
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
				s.Require().Len(events, 3)
				parsedEvent, err := sdk.ParseTypedEvent(events[2])
				s.Require().NoError(err)
				eventIssuedCredits, ok := parsedEvent.(*plasticcredit.EventIssuedCredits)
				s.Require().True(ok)
				s.Require().Equal(&plasticcredit.EventIssuedCredits{
					IssuerId:                s.sampleIssuerId,
					ProjectId:               tc.msg.ProjectId,
					CreditClassAbbreviation: s.sampleCreditClassAbbreviation,
					Denom:                   denom,
					Amount:                  tc.msg.CreditAmount,
					IssuerAddress:           tc.msg.Creator,
				}, eventIssuedCredits)
			} else {
				s.Require().Len(events, 2)
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
			err:                             plasticcredit.ErrNotEnoughCredits,
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
			err:                             plasticcredit.ErrNotFoundCreditBalance,
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
			expectedSenderBalance:           100000000,
			expectedRecipientBalanceActive:  100000000,
			expectedRecipientBalanceRetired: 0,
			err:                             nil,
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
			err:                             plasticcredit.ErrNotFoundCreditBalance,
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
				if tc.msg.Retire == true {
					collectionAfter, found = k.GetCreditCollection(s.ctx, tc.msg.Denom)
					s.Require().True(found)
					s.Require().Equal(collectionBefore.TotalAmount.Active-tc.msg.Amount, collectionAfter.TotalAmount.Active)
					s.Require().Equal(collectionBefore.TotalAmount.Retired+tc.msg.Amount, collectionAfter.TotalAmount.Retired)
					s.Require().Len(events, 4)
					parsedEvent, err := sdk.ParseTypedEvent(events[3])
					s.Require().NoError(err)
					eventRetiredCredits, ok := parsedEvent.(*plasticcredit.EventRetiredCredits)
					s.Require().True(ok)
					s.Require().Equal(&plasticcredit.EventRetiredCredits{
						Owner:                   tc.msg.To,
						Denom:                   tc.msg.Denom,
						Amount:                  tc.msg.Amount,
						IssuerId:                s.sampleIssuerId,
						CreditClassAbbreviation: s.sampleCreditClassAbbreviation,
					}, eventRetiredCredits)
				} else {
					s.Require().Len(events, 3)
				}
				parsedEvent, err := sdk.ParseTypedEvent(events[2])
				s.Require().NoError(err)
				EventTransferCredits, ok := parsedEvent.(*plasticcredit.EventTransferCredits)
				s.Require().True(ok)
				s.Require().Equal(&plasticcredit.EventTransferCredits{
					Sender:                  tc.msg.From,
					Recipient:               tc.msg.To,
					Denom:                   tc.msg.Denom,
					Amount:                  tc.msg.Amount,
					IssuerId:                s.sampleIssuerId,
					CreditClassAbbreviation: s.sampleCreditClassAbbreviation,
				}, EventTransferCredits)
			} else {
				s.Require().Len(events, 2)
			}
		})
	}
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
			err:                    plasticcredit.ErrNotEnoughActiveCredits,
		},
		"non-existing denom": {
			msg: &plasticcredit.MsgRetireCredits{
				Owner:  s.sampleApplicantAdmin,
				Denom:  "ABC/000",
				Amount: 100,
			},
			expectedBalanceRetired: 0,
			err:                    plasticcredit.ErrNotEnoughCredits,
		},
		"empty denom": {
			msg: &plasticcredit.MsgRetireCredits{
				Owner:  s.sampleApplicantAdmin,
				Denom:  "",
				Amount: 100,
			},
			expectedBalanceRetired: 0,
			err:                    plasticcredit.ErrNotEnoughCredits,
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

			_, err := ms.RetireCredits(goCtx, tc.msg)
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
				s.Require().Len(events, 3)
				parsedEvent, err := sdk.ParseTypedEvent(events[2])
				s.Require().NoError(err)
				eventRetiredCredits, ok := parsedEvent.(*plasticcredit.EventRetiredCredits)
				s.Require().True(ok)
				s.Require().Equal(&plasticcredit.EventRetiredCredits{
					Owner:                   tc.msg.Owner,
					Denom:                   tc.msg.Denom,
					Amount:                  tc.msg.Amount,
					IssuerId:                s.sampleIssuerId,
					CreditClassAbbreviation: s.sampleCreditClassAbbreviation,
				}, eventRetiredCredits)
			} else {
				s.Require().Len(events, 2)
			}
		})
	}
}
