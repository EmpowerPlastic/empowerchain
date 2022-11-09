package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/empowerchain/empowerchain/testutil/keeper"
	"github.com/empowerchain/empowerchain/testutil/nullify"
	"github.com/empowerchain/empowerchain/x/plasticcredit/keeper"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

func createTestIdCounters(keeper *keeper.Keeper, ctx sdk.Context) types.IdCounters {
	item := types.IdCounters{}
	keeper.SetIdCounters(ctx, item)
	return item
}

func TestIdCountersGet(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	item := createTestIdCounters(keeper, ctx)
	rst, found := keeper.GetIdCounters(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestIdCountersRemove(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	createTestIdCounters(keeper, ctx)
	keeper.RemoveIdCounters(ctx)
	_, found := keeper.GetIdCounters(ctx)
	require.False(t, found)
}
