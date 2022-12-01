package keeper_test

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
	"github.com/empowerchain/empowerchain/app"
	"github.com/empowerchain/empowerchain/testutil/sample"
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
			err: govtypes.ErrInvalidSigner,
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
			err: plasticcredit.ErrInvalidParams,
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

				params, err := k.GetParams(s.ctx)
				s.Require().NoError(err)
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
			err: govtypes.ErrInvalidSigner,
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

			if err == nil {
				s.Require().Equal(uint64(1), resp.IssuerId)

				idCounters, err := k.GetIDCounters(s.ctx)
				s.Require().NoError(err)
				s.Require().Equal(uint64(2), idCounters.NextIssuerId)

				issuer, found := k.GetIssuer(s.ctx, resp.IssuerId)
				s.Require().True(found)
				s.Require().Equal(plasticcredit.Issuer{
					Id:          resp.IssuerId,
					Name:        tc.msg.Name,
					Description: tc.msg.Description,
					Admin:       tc.msg.Admin,
				}, issuer)
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

				idCounters, err := k.GetIDCounters(s.ctx)
				s.Require().NoError(err)
				s.Require().Equal(uint64(2), idCounters.NextApplicantId)

				issuer, found := k.GetApplicant(s.ctx, resp.ApplicantId)
				s.Require().True(found)
				s.Require().Equal(plasticcredit.Applicant{
					Id:          resp.ApplicantId,
					Name:        tc.msg.Name,
					Description: tc.msg.Description,
					Admin:       tc.msg.Admin,
				}, issuer)
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
