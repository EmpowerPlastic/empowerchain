package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/empowerchain/empowerchain/testutil/keeper"
	"github.com/empowerchain/empowerchain/testutil/nullify"
	"github.com/empowerchain/empowerchain/x/plasticcredit/keeper"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNCollector(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Collector {
	items := make([]types.Collector, n)
	for i := range items {
		items[i].CollectorId = uint64(i)

		keeper.SetCollector(ctx, items[i])
	}
	return items
}

func TestCollectorGet(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNCollector(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCollector(ctx,
			item.CollectorId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCollectorRemove(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNCollector(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCollector(ctx,
			item.CollectorId,
		)
		_, found := keeper.GetCollector(ctx,
			item.CollectorId,
		)
		require.False(t, found)
	}
}

func TestCollectorGetAll(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNCollector(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCollector(ctx)),
	)
}
