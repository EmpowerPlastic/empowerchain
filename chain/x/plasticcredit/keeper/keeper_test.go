package keeper_test

import (
	"testing"

	tmproto "github.com/cometbft/cometbft/proto/tendermint/types"
	tmtime "github.com/cometbft/cometbft/types/time"
	sdk "github.com/cosmos/cosmos-sdk/types"
	minttypes "github.com/cosmos/cosmos-sdk/x/mint/types"
	"github.com/stretchr/testify/suite"

	"github.com/EmpowerPlastic/empowerchain/app"
	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/keeper"
)

type TestSuite struct {
	suite.Suite

	empowerApp     *app.EmpowerApp
	ctx            sdk.Context
	addrs          []sdk.AccAddress
	numTestIssuers uint64 // number of issuers created in the initial state of the test

	issuerCreator                string
	sampleIssuerID               uint64
	sampleIssuerAdmin            string
	noCoinsIssuerID              uint64
	noCoinsIssuerAdmin           string
	sampleCreditTypeAbbreviation string
	sampleApplicantID            uint64
	sampleApplicantAdmin         string
	sampleProjectID              uint64
	sampleUnapprovedProjectID    uint64
	sampleRejectionProjectID     uint64
	sampleSuspendedProjectID     uint64
	sampleCreditDenom            string

	creditTypeCreationFee sdk.Coin
}

func (s *TestSuite) SetupTest() {
	empowerApp := app.Setup(s.T(), false)
	ctx := empowerApp.BaseApp.NewContext(false, tmproto.Header{})
	ctx = ctx.WithBlockHeader(tmproto.Header{Time: tmtime.Now()})

	s.empowerApp = empowerApp
	s.ctx = ctx
	s.addrs = app.CreateRandomAccounts(1)

	// fund the issuerCreator account for fee
	s.fundAccount(s.issuerCreator, sdk.NewCoins(sdk.NormalizeCoin(sdk.NewCoin(params.HumanCoinDenom, sdk.NewInt(10e6)))))
	s.fundAccount(s.sampleIssuerAdmin, sdk.NewCoins(sdk.NormalizeCoin(sdk.NewCoin(params.HumanCoinDenom, sdk.NewInt(10e6)))))
}

// fundAccount mints new coins and send them to the given test account
func (s *TestSuite) fundAccount(acc string, amt sdk.Coins) {
	s.T().Helper()
	sdkAddr, err := sdk.AccAddressFromBech32(acc)
	s.Require().NoError(err)
	err = s.empowerApp.MintKeeper.MintCoins(s.ctx, amt)
	s.Require().NoError(err)
	err = s.empowerApp.BankKeeper.SendCoinsFromModuleToAccount(s.ctx, minttypes.ModuleName, sdkAddr, amt)
	s.Require().NoError(err)
}

func (s *TestSuite) PopulateWithSamples() {
	k := s.empowerApp.PlasticcreditKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)
	ms := keeper.NewMsgServerImpl(k)

	_, err := ms.UpdateParams(goCtx, &plasticcredit.MsgUpdateParams{
		Authority: k.Authority(),
		Params: plasticcredit.Params{
			IssuerCreator:         s.issuerCreator,
			CreditTypeCreationFee: s.creditTypeCreationFee,
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

	// create 2nd issuer which will receive no funds
	respIssuer, err = ms.CreateIssuer(goCtx, &plasticcredit.MsgCreateIssuer{
		Creator:     s.issuerCreator,
		Name:        "Empower",
		Description: "Empower is cool",
		Admin:       s.noCoinsIssuerAdmin,
	})
	s.Require().NoError(err)
	s.Require().Equal(s.noCoinsIssuerID, respIssuer.IssuerId)

	_, err = ms.CreateCreditType(goCtx, &plasticcredit.MsgCreateCreditType{
		Creator:      s.sampleIssuerAdmin,
		Abbreviation: s.sampleCreditTypeAbbreviation,
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
		Creator:                s.sampleApplicantAdmin,
		ApplicantId:            s.sampleApplicantID,
		CreditTypeAbbreviation: s.sampleCreditTypeAbbreviation,
		Name:                   "Cool project",
	})
	s.Require().NoError(err)
	s.Require().Equal(s.sampleProjectID, respProject.ProjectId)

	respUnapprovedProject, err := ms.CreateProject(goCtx, &plasticcredit.MsgCreateProject{
		Creator:                s.sampleApplicantAdmin,
		ApplicantId:            s.sampleApplicantID,
		CreditTypeAbbreviation: s.sampleCreditTypeAbbreviation,
		Name:                   "Another cool project",
	})
	s.Require().NoError(err)
	s.Require().Equal(s.sampleUnapprovedProjectID, respUnapprovedProject.ProjectId)

	respRejectionProject, err := ms.CreateProject(goCtx, &plasticcredit.MsgCreateProject{
		Creator:                s.sampleApplicantAdmin,
		ApplicantId:            s.sampleApplicantID,
		CreditTypeAbbreviation: s.sampleCreditTypeAbbreviation,
		Name:                   "no bueno project",
	})
	s.Require().NoError(err)
	s.Require().Equal(s.sampleRejectionProjectID, respRejectionProject.ProjectId)

	respSuspendedProject, err := ms.CreateProject(goCtx, &plasticcredit.MsgCreateProject{
		Creator:                s.sampleApplicantAdmin,
		ApplicantId:            s.sampleApplicantID,
		CreditTypeAbbreviation: s.sampleCreditTypeAbbreviation,
		Name:                   "suspended project",
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
		MetadataUris: []string{"ipfs://CID1", "ipfs://CID2"},
	})
	s.Require().NoError(err)
	s.Require().Equal(s.sampleCreditDenom, respIssue.Collection.Denom)
	s.ctx = s.ctx.WithEventManager(sdk.NewEventManager())
}

func TestTestSuite(t *testing.T) {
	params.SetAddressPrefixes()
	params.RegisterDenoms()

	ts := &TestSuite{}
	ts.numTestIssuers = 2
	ts.issuerCreator = sample.AccAddress()
	ts.sampleIssuerID = 1
	ts.sampleIssuerAdmin = sample.AccAddress()
	ts.noCoinsIssuerID = 2
	ts.noCoinsIssuerAdmin = sample.AccAddress()
	ts.sampleCreditTypeAbbreviation = "ETEST"
	ts.sampleApplicantID = 1
	ts.sampleApplicantAdmin = sample.AccAddress()
	ts.sampleProjectID = 1
	ts.sampleUnapprovedProjectID = 2
	ts.sampleRejectionProjectID = 3
	ts.sampleSuspendedProjectID = 4
	ts.sampleCreditDenom = "ETEST/123"
	ts.creditTypeCreationFee = sdk.NormalizeCoin(plasticcredit.DefaultCreditTypeCreationFee)

	suite.Run(t, ts)
}
