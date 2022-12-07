package keeper_test

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
	"github.com/empowerchain/empowerchain/app"
	"github.com/empowerchain/empowerchain/testutil/sample"
	"github.com/empowerchain/empowerchain/utils"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
	"github.com/empowerchain/empowerchain/x/plasticcredit/keeper"
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
	issuerCreator := sample.AccAddress()

	testCases := map[string]struct {
		msg *plasticcredit.MsgCreateIssuer
		err error
	}{
		"happy path": {
			msg: &plasticcredit.MsgCreateIssuer{
				Creator:     issuerCreator,
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

			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)
			_, err := ms.UpdateParams(goCtx, &plasticcredit.MsgUpdateParams{
				Authority: k.Authority(),
				Params: plasticcredit.Params{
					IssuerCreator: issuerCreator,
				},
			})
			s.Require().NoError(err)

			resp, err := ms.CreateIssuer(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)

			events := s.ctx.EventManager().ABCIEvents()
			idCounters := k.GetIDCounters(s.ctx)

			if err == nil {
				s.Require().Equal(uint64(1), resp.IssuerId)
				s.Require().Equal(uint64(2), idCounters.NextIssuerId)

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
				s.Require().Equal(uint64(1), idCounters.NextIssuerId)
				_, found := k.GetIssuer(s.ctx, 1)
				s.Require().False(found)

				s.Require().Len(events, 0)
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
			}
		})
	}
}

func (s *TestSuite) TestCreateCreditClass() {
	issuer := plasticcredit.Issuer{
		Id:          1,
		Name:        "Empower",
		Description: "",
		Admin:       sample.AccAddress(),
	}

	testCases := map[string]struct {
		msg *plasticcredit.MsgCreateCreditClass
		err error
	}{
		"happy path": {
			msg: &plasticcredit.MsgCreateCreditClass{
				Creator:      issuer.Admin,
				Abbreviation: "PCRD",
				IssuerId:     issuer.Id,
				Name:         "Empower Plastic Credits",
			},
			err: nil,
		},
		"unauthorized creator on the issuer": {
			msg: &plasticcredit.MsgCreateCreditClass{
				Creator:      sample.AccAddress(),
				Abbreviation: "PCRD",
				IssuerId:     issuer.Id,
				Name:         "Empower Plastic Credits",
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"invalid abbreviation": {
			msg: &plasticcredit.MsgCreateCreditClass{
				Creator:      issuer.Admin,
				Abbreviation: "",
				IssuerId:     issuer.Id,
				Name:         "Empower Plastic Credits",
			},
			err: utils.ErrInvalidValue,
		},
		"non-existent issuer": {
			msg: &plasticcredit.MsgCreateCreditClass{
				Creator:      issuer.Admin,
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
			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)
			_, err := ms.CreateIssuer(goCtx, &plasticcredit.MsgCreateIssuer{
				Creator:     k.Authority(),
				Name:        issuer.Name,
				Description: issuer.Description,
				Admin:       issuer.Admin,
			})
			s.Require().NoError(err)

			_, err = ms.CreateCreditClass(goCtx, tc.msg)
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
	issuer := plasticcredit.Issuer{
		Id:          1,
		Name:        "Empower",
		Description: "",
		Admin:       sample.AccAddress(),
	}
	creditClass := plasticcredit.CreditClass{
		Abbreviation: "PCRD",
		IssuerId:     1,
		Name:         "Empower Plastic Credits",
	}
	applicant := plasticcredit.Applicant{
		Id:          1,
		Name:        "Collector",
		Description: "",
		Admin:       sample.AccAddress(),
	}

	testCases := map[string]struct {
		msg *plasticcredit.MsgCreateProject
		err error
	}{
		"happy path": {
			msg: &plasticcredit.MsgCreateProject{
				Creator:                 applicant.Admin,
				ApplicantId:             applicant.Id,
				CreditClassAbbreviation: creditClass.Abbreviation,
				Name:                    "My happy path project",
			},
			err: nil,
		},
		"unauthorized creator on the issuer": {
			msg: &plasticcredit.MsgCreateProject{
				Creator:                 sample.AccAddress(),
				ApplicantId:             applicant.Id,
				CreditClassAbbreviation: creditClass.Abbreviation,
				Name:                    "My project",
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"non-existent applicant": {
			msg: &plasticcredit.MsgCreateProject{
				Creator:                 applicant.Admin,
				ApplicantId:             37,
				CreditClassAbbreviation: creditClass.Abbreviation,
				Name:                    "My project",
			},
			err: plasticcredit.ErrNotFoundApplicant,
		},
		"non-existent credit class": {
			msg: &plasticcredit.MsgCreateProject{
				Creator:                 applicant.Admin,
				ApplicantId:             applicant.Id,
				CreditClassAbbreviation: "Not here",
				Name:                    "My project",
			},
			err: plasticcredit.ErrNotFoundCreditClass,
		},
		"invalid name": {
			msg: &plasticcredit.MsgCreateProject{
				Creator:                 applicant.Admin,
				ApplicantId:             applicant.Id,
				CreditClassAbbreviation: creditClass.Abbreviation,
				Name:                    "",
			},
			err: utils.ErrInvalidValue,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()
			k := s.empowerApp.PlasticcreditKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)
			_, err := ms.CreateIssuer(goCtx, &plasticcredit.MsgCreateIssuer{
				Creator:     k.Authority(),
				Name:        issuer.Name,
				Description: issuer.Description,
				Admin:       issuer.Admin,
			})
			s.Require().NoError(err)
			_, err = ms.CreateCreditClass(goCtx, &plasticcredit.MsgCreateCreditClass{
				Creator:      issuer.Admin,
				Abbreviation: creditClass.Abbreviation,
				IssuerId:     issuer.Id,
				Name:         creditClass.Name,
			})
			s.Require().NoError(err, tc.err)
			_, err = ms.CreateApplicant(goCtx, &plasticcredit.MsgCreateApplicant{
				Name:        applicant.Name,
				Description: applicant.Description,
				Admin:       applicant.Admin,
			})
			s.Require().NoError(err, tc.err)

			resp, err := ms.CreateProject(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)

			if err == nil {
				idCounters := k.GetIDCounters(s.ctx)
				s.Require().Equal(uint64(2), idCounters.NextIssuerId)

				project, found := k.GetProject(s.ctx, resp.ProjectId)
				s.Require().True(found)
				s.Require().Equal(plasticcredit.Project{
					Id:                      1,
					ApplicantId:             tc.msg.ApplicantId,
					CreditClassAbbreviation: tc.msg.CreditClassAbbreviation,
					Name:                    tc.msg.Name,
				}, project)
			}
		})
	}
}

// TODO mock or after adding project and credit class?
// func (s *TestSuite) TestIssueCredits() {
// 	testCases := map[string]struct {
// 		msg *plasticcredit.MsgIssueCredits
// 		err error
// 	}{
// 		"happy path": {
// 			msg: &plasticcredit.MsgIssueCredits{
// 				Creator:     sample.AccAddress(),
// 				ProjectId:   1,
// 				DenomSuffix: "123",
// 				CreditAmount: &plasticcredit.CreditAmount{
// 					Active:  100,
// 					Retired: 50,
// 				},
// 				CreditData: []*plasticcredit.ProvenData{
// 					{
// 						Uri:  "https://empower.eco",
// 						Hash: "dc0e5b6690a55f0f1c41ad96f068049e25d9e85d53c0587284b7f1a1f9a51545",
// 					},
// 				},
// 			},
// 			err: nil,
// 		},
// 	}

// 	for name, tc := range testCases {
// 		s.Run(name, func() {
// 			s.SetupTest()

// 			k := s.empowerApp.PlasticcreditKeeper
// 			goCtx := sdk.WrapSDKContext(s.ctx)
// 			ms := keeper.NewMsgServerImpl(k)

// 			resp, err := ms.IssueCredits(goCtx, tc.msg)
// 			s.Require().ErrorIs(err, tc.err)

// 			if err == nil {
// 				project, found := k.GetProject(s.ctx, tc.msg.ProjectId)
// 				s.Require().True(found)
// 				creditClass, found := k.GetCreditClass(s.ctx, project.CreditClassId)
// 				s.Require().True(found)
// 				denom := keeper.CreateCreditDenom(creditClass.Denom, tc.msg.DenomSuffix)
// 				s.Require().Equal(resp.Denom, denom)
// 				s.Require().Equal(tc.msg.CreditAmount, resp.TotalAmount)
// 				creditCollection, found := k.GetCreditCollection(s.ctx, denom)
// 				s.Require().True(found)
// 				s.Require().Equal(tc.msg.ProjectId, creditCollection.ProjectId)
// 				s.Require().Equal(tc.msg.CreditAmount, creditCollection.TotalAmount)
// 				s.Require().Equal(tc.msg.CreditData, creditCollection.CreditData)
// 			}
// 		})
// 	}
// }

// func (s *TestSuite) TestTransferCredits() {
// 	testCases := map[string]struct {
// 		msg *plasticcredit.MsgTransferCredits
// 		err error
// 	}{
// 		"happy path": {
// 			msg: &plasticcredit.MsgTransferCredits{
// 				From:   sample.AccAddress(),
// 				To:     sample.AccAddress(),
// 				Denom:  "EMP/123",
// 				Amount: 10,
// 				Retire: false,
// 			},
// 			err: nil,
// 		},
// 	}

// 	for name, tc := range testCases {
// 		s.Run(name, func() {
// 			s.SetupTest()

// 			k := s.empowerApp.PlasticcreditKeeper
// 			goCtx := sdk.WrapSDKContext(s.ctx)
// 			ms := keeper.NewMsgServerImpl(k)

// 		})
// 	}
// }

// func (s *TestSuite) TestRetireCredits() {
// 	testCases := map[string]struct {
// 		msg *plasticcredit.MsgRetireCredits
// 		err error
// 	}{
// 		"happy path": {
// 			msg: &plasticcredit.MsgRetireCredits{
// 				Owner:   sample.AccAddress(),
// 				Denom:  "EMP/123",
// 				Amount: 10,
// 			},
// 			err: nil,
// 		},
// 	}

// 	for name, tc := range testCases {
// 		s.Run(name, func() {
// 			s.SetupTest()

// 			k := s.empowerApp.PlasticcreditKeeper
// 			goCtx := sdk.WrapSDKContext(s.ctx)
// 			ms := keeper.NewMsgServerImpl(k)

// 		})
// 	}
// }
