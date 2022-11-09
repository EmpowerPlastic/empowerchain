package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/empowerchain/empowerchain/testutil/keeper"
	"github.com/empowerchain/empowerchain/x/plasticcredit/keeper"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.PlasticcreditKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
