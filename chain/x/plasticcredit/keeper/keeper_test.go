package keeper_test

import (
	"testing"

	"github.com/EmpowerPlastic/empowerchain/app"
	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/keeper"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/suite"
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"
	tmtime "github.com/tendermint/tendermint/types/time"
)

type TestSuite struct {
	suite.Suite

	empowerApp *app.EmpowerApp
	ctx        sdk.Context
	addrs      []sdk.AccAddress

	issuerCreator                 string
	sampleIssuerId                uint64
	sampleIssuerAdmin             string
	sampleCreditClassAbbreviation string
	sampleApplicantId             uint64
	sampleApplicantAdmin          string
	sampleProjectId               uint64
	sampleUnapprovedProjectId     uint64
	sampleRejectionProjectId      uint64
	sampleSuspendedProjectId      uint64
	sampleCreditDenom             string
}

func NewTestSuite() suite.TestingSuite {
	t := &TestSuite{}
	t.issuerCreator = sample.AccAddress()
	t.sampleIssuerId = 1
	t.sampleIssuerAdmin = sample.AccAddress()
	t.sampleCreditClassAbbreviation = "EMP"
	t.sampleApplicantId = 1
	t.sampleApplicantAdmin = sample.AccAddress()
	t.sampleProjectId = 1
	t.sampleUnapprovedProjectId = 2
	t.sampleRejectionProjectId = 3
	t.sampleSuspendedProjectId = 4
	t.sampleCreditDenom = "EMP/123"
	return t
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
	s.Require().Equal(s.sampleIssuerId, respIssuer.IssuerId)

	_, err = ms.CreateCreditClass(goCtx, &plasticcredit.MsgCreateCreditClass{
		Creator:      s.sampleIssuerAdmin,
		Abbreviation: s.sampleCreditClassAbbreviation,
		IssuerId:     s.sampleIssuerId,
		Name:         "Empower Plastic Credits",
	})
	s.Require().NoError(err)

	respApplicant, err := ms.CreateApplicant(goCtx, &plasticcredit.MsgCreateApplicant{
		Name:        "Applicant",
		Description: "",
		Admin:       s.sampleApplicantAdmin,
	})
	s.Require().NoError(err)
	s.Require().Equal(s.sampleApplicantId, respApplicant.ApplicantId)

	respProject, err := ms.CreateProject(goCtx, &plasticcredit.MsgCreateProject{
		Creator:                 s.sampleApplicantAdmin,
		ApplicantId:             s.sampleApplicantId,
		CreditClassAbbreviation: s.sampleCreditClassAbbreviation,
		Name:                    "Cool project",
	})
	s.Require().NoError(err)
	s.Require().Equal(s.sampleProjectId, respProject.ProjectId)

	respUnapprovedProject, err := ms.CreateProject(goCtx, &plasticcredit.MsgCreateProject{
		Creator:                 s.sampleApplicantAdmin,
		ApplicantId:             s.sampleApplicantId,
		CreditClassAbbreviation: s.sampleCreditClassAbbreviation,
		Name:                    "Another cool project",
	})
	s.Require().NoError(err)
	s.Require().Equal(s.sampleUnapprovedProjectId, respUnapprovedProject.ProjectId)

	respRejectionProject, err := ms.CreateProject(goCtx, &plasticcredit.MsgCreateProject{
		Creator:                 s.sampleApplicantAdmin,
		ApplicantId:             s.sampleApplicantId,
		CreditClassAbbreviation: s.sampleCreditClassAbbreviation,
		Name:                    "no bueno project",
	})
	s.Require().NoError(err)
	s.Require().Equal(s.sampleRejectionProjectId, respRejectionProject.ProjectId)

	respSuspendedProject, err := ms.CreateProject(goCtx, &plasticcredit.MsgCreateProject{
		Creator:                 s.sampleApplicantAdmin,
		ApplicantId:             s.sampleApplicantId,
		CreditClassAbbreviation: s.sampleCreditClassAbbreviation,
		Name:                    "suspended project",
	})
	s.Require().NoError(err)
	s.Require().Equal(s.sampleSuspendedProjectId, respSuspendedProject.ProjectId)

	_, err = ms.ApproveProject(goCtx, &plasticcredit.MsgApproveProject{
		Approver:  s.sampleIssuerAdmin,
		ProjectId: s.sampleProjectId,
	})
	s.Require().NoError(err)

	_, err = ms.RejectProject(goCtx, &plasticcredit.MsgRejectProject{
		Rejector:  s.sampleIssuerAdmin,
		ProjectId: s.sampleRejectionProjectId,
	})
	s.Require().NoError(err)

	_, err = ms.ApproveProject(goCtx, &plasticcredit.MsgApproveProject{
		Approver:  s.sampleIssuerAdmin,
		ProjectId: s.sampleSuspendedProjectId,
	})
	s.Require().NoError(err)

	_, err = ms.SuspendProject(goCtx, &plasticcredit.MsgSuspendProject{
		Updater:   s.sampleIssuerAdmin,
		ProjectId: s.sampleSuspendedProjectId,
	})
	s.Require().NoError(err)

	respIssue, err := ms.IssueCredits(goCtx, &plasticcredit.MsgIssueCredits{
		Creator:      s.sampleIssuerAdmin,
		ProjectId:    s.sampleProjectId,
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
	suite.Run(t, NewTestSuite())
}
