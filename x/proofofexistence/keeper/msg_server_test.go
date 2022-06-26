package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/empowerchain/empowerchain/testutil/keeper"
	"github.com/empowerchain/empowerchain/x/proofofexistence/keeper"
	"github.com/empowerchain/empowerchain/x/proofofexistence/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.ProofofexistenceKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
