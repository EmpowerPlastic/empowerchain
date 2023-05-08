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
	"github.com/EmpowerPlastic/empowerchain/x/certificates"
	"github.com/EmpowerPlastic/empowerchain/x/certificates/keeper"
)

type TestSuite struct {
	suite.Suite

	empowerApp     *app.EmpowerApp
	ctx            sdk.Context
	addrs          []sdk.AccAddress
	numTestIssuers uint64 // number of issuers created in the initial state of the test

	issuerCreator     string
	sampleOwnerID     uint64
	sampleOwner       string
	sampleIssuerID    uint64
	sampleIssuerAdmin string

	sampleCertificationType certificates.CertificateType
	sampleAdditionalData    []*certificates.AdditionalData
}

func (s *TestSuite) SetupTest() {
	empowerApp := app.Setup(s.T(), false)
	ctx := empowerApp.BaseApp.NewContext(false, tmproto.Header{})
	ctx = ctx.WithBlockHeader(tmproto.Header{Time: tmtime.Now()})

	s.empowerApp = empowerApp
	s.ctx = ctx
	s.addrs = app.CreateRandomAccounts(1)
	// fund the issuerCreator account for fee
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
	k := s.empowerApp.CertificateKeeper
	goCtx := sdk.WrapSDKContext(s.ctx)
	ms := keeper.NewMsgServerImpl(k)

	_, err := ms.UpdateParams(goCtx, &certificates.MsgUpdateParams{
		Authority: k.Authority(),
		Params: certificates.Params{
			AllowedIssuers: []string{s.sampleIssuerAdmin},
		},
	})
	s.Require().NoError(err)
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
	ts.sampleOwner = sample.AccAddress()
	ts.sampleOwnerID = 1
	ts.sampleCertificationType = 0
	additionalData := &certificates.AdditionalData{
		Key:   "test",
		Value: "test",
	}
	ts.sampleAdditionalData = []*certificates.AdditionalData{
		additionalData,
	}
	suite.Run(t, ts)
}
