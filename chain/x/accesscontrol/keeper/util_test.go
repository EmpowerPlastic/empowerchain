package keeper_test

import (
	"testing"

	tmproto "github.com/cometbft/cometbft/proto/tendermint/types"
	tmtime "github.com/cometbft/cometbft/types/time"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/suite"

	"github.com/EmpowerPlastic/empowerchain/app"
	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/x/accesscontrol/keeper"
)

type TestSuite struct {
	suite.Suite

	empowerApp *app.EmpowerApp
	ctx        sdk.Context
	addrs      []sdk.AccAddress
	k          []keeper.IAccessControlSubKeeper
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
	s.k = *app.InitAccessControlSubKeepers(&empowerApp.AccessControlKeeper)
}

func TestTestSuite(t *testing.T) {
	params.SetAddressPrefixes()
	params.RegisterDenoms()
	suite.Run(t, new(TestSuite))
}
