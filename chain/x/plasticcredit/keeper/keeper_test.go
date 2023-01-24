package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/suite"
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"
	tmtime "github.com/tendermint/tendermint/types/time"

	"github.com/EmpowerPlastic/empowerchain/app"
	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/keeper"
)

type TestSuite struct {
	suite.Suite

	empowerApp *app.EmpowerApp
	ctx        sdk.Context
	addrs      []sdk.AccAddress

	issuerCreator                 string
	sampleIssuerID                uint64
	sampleIssuerAdmin             string
	sampleCreditClassAbbreviation string
	sampleApplicantID             uint64
	sampleApplicantAdmin          string
	sampleProjectID               uint64
	sampleUnapprovedProjectID     uint64
	sampleRejectionProjectID      uint64
	sampleSuspendedProjectID      uint64
	sampleCreditDenom             string
}

func (s *TestSuite) SetupTest() {
	empowerApp := app.Setup(s.T(), false)
	ctx := empowerApp.BaseApp.NewContext(false, tmproto.Header{})
	ctx = ctx.WithBlockHeader(tmproto.Header{Time: tmtime.Now()})

	//TODO:
	/*queryHelper := baseapp.NewQueryServerTestHelper(ctx, app.InterfaceRegistry())
	nft.RegisterQueryServer(queryHelper, app.NFTKeeper)
	queryClient := nft.NewQueryClient(queryHelper)*/

	s.empowerApp = empowerApp
	s.ctx = ctx
	s.addrs = app.CreateRandomAccounts(1)
}

func (s *TestSuite) PopulateWithSamples() {
	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)
	ms := keeper.NewMsgServerImpl(k)

	_, err := ms.UpdateParams(goCtx, &plasticcredit.MsgUpdateParams{
		Authority: k.Authority(),
		Params: plasticcredit.Params{
			IssuerCreator: s.issuerCreator,
		},
	})
	s.Require().NoError(err)

	respIssuer, err := ms.CreateIssuer(goCtx, &plasticcredit.MsgCreateIssuer{
		Creator:     s.issuerCreator,
		Name:        "Empower",
		Description: "Empower is cool",
		Admin:       s.sampleIssuerAdmin,
	})
	s.Require().NoError(err)
	s.Require().Equal(s.sampleIssuerID, respIssuer.IssuerId)

	_, err = ms.CreateCreditClass(goCtx, &plasticcredit.MsgCreateCreditClass{
		Creator:      s.sampleIssuerAdmin,
		Abbreviation: s.sampleCreditClassAbbreviation,
		IssuerId:     s.sampleIssuerID,
		Name:         "Empower Plastic Credits",
	})
	s.Require().NoError(err)

	respApplicant, err := ms.CreateApplicant(goCtx, &plasticcredit.MsgCreateApplicant{
		Name:        "Applicant",
		Description: "",
		Admin:       s.sampleApplicantAdmin,
	})
	s.Require().NoError(err)
	s.Require().Equal(s.sampleApplicantID, respApplicant.ApplicantId)

	respProject, err := ms.CreateProject(goCtx, &plasticcredit.MsgCreateProject{
		Creator:                 s.sampleApplicantAdmin,
		ApplicantId:             s.sampleApplicantID,
		CreditClassAbbreviation: s.sampleCreditClassAbbreviation,
		Name:                    "Cool project",
	})
	s.Require().NoError(err)
	s.Require().Equal(s.sampleProjectID, respProject.ProjectId)

	respUnapprovedProject, err := ms.CreateProject(goCtx, &plasticcredit.MsgCreateProject{
		Creator:                 s.sampleApplicantAdmin,
		ApplicantId:             s.sampleApplicantID,
		CreditClassAbbreviation: s.sampleCreditClassAbbreviation,
		Name:                    "Another cool project",
	})
	s.Require().NoError(err)
	s.Require().Equal(s.sampleUnapprovedProjectID, respUnapprovedProject.ProjectId)

	respRejectionProject, err := ms.CreateProject(goCtx, &plasticcredit.MsgCreateProject{
		Creator:                 s.sampleApplicantAdmin,
		ApplicantId:             s.sampleApplicantID,
		CreditClassAbbreviation: s.sampleCreditClassAbbreviation,
		Name:                    "no bueno project",
	})
	s.Require().NoError(err)
	s.Require().Equal(s.sampleRejectionProjectID, respRejectionProject.ProjectId)

	respSuspendedProject, err := ms.CreateProject(goCtx, &plasticcredit.MsgCreateProject{
		Creator:                 s.sampleApplicantAdmin,
		ApplicantId:             s.sampleApplicantID,
		CreditClassAbbreviation: s.sampleCreditClassAbbreviation,
		Name:                    "suspended project",
	})
	s.Require().NoError(err)
	s.Require().Equal(s.sampleSuspendedProjectID, respSuspendedProject.ProjectId)

	_, err = ms.ApproveProject(goCtx, &plasticcredit.MsgApproveProject{
		Approver:  s.sampleIssuerAdmin,
		ProjectId: s.sampleProjectID,
	})
	s.Require().NoError(err)

	_, err = ms.RejectProject(goCtx, &plasticcredit.MsgRejectProject{
		Rejector:  s.sampleIssuerAdmin,
		ProjectId: s.sampleRejectionProjectID,
	})
	s.Require().NoError(err)

	_, err = ms.ApproveProject(goCtx, &plasticcredit.MsgApproveProject{
		Approver:  s.sampleIssuerAdmin,
		ProjectId: s.sampleSuspendedProjectID,
	})
	s.Require().NoError(err)

	_, err = ms.SuspendProject(goCtx, &plasticcredit.MsgSuspendProject{
		Updater:   s.sampleIssuerAdmin,
		ProjectId: s.sampleSuspendedProjectID,
	})
	s.Require().NoError(err)

	respIssue, err := ms.IssueCredits(goCtx, &plasticcredit.MsgIssueCredits{
		Creator:      s.sampleIssuerAdmin,
		ProjectId:    s.sampleProjectID,
		SerialNumber: "123",
		CreditAmount: 100000000,
	})
	s.Require().NoError(err)
	s.Require().Equal(s.sampleCreditDenom, respIssue.Collection.Denom)
	s.ctx = s.ctx.WithEventManager(sdk.NewEventManager())
}

func TestTestSuite(t *testing.T) {
	params.SetAddressPrefixes()
	params.RegisterDenoms()

	ts := &TestSuite{}
	ts.issuerCreator = sample.AccAddress()
	ts.sampleIssuerID = 1
	ts.sampleIssuerAdmin = sample.AccAddress()
	ts.sampleCreditClassAbbreviation = "EMP"
	ts.sampleApplicantID = 1
	ts.sampleApplicantAdmin = sample.AccAddress()
	ts.sampleProjectID = 1
	ts.sampleUnapprovedProjectID = 2
	ts.sampleRejectionProjectID = 3
	ts.sampleSuspendedProjectID = 4
	ts.sampleCreditDenom = "EMP/123"

	suite.Run(t, ts)
}
