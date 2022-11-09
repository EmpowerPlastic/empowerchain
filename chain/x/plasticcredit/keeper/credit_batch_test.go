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

func createNCreditBatch(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CreditBatch {
	items := make([]types.CreditBatch, n)
	for i := range items {
		items[i].BatchDenom = strconv.Itoa(i)

		keeper.SetCreditBatch(ctx, items[i])
	}
	return items
}

func TestCreditBatchGet(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNCreditBatch(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCreditBatch(ctx,
			item.BatchDenom,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCreditBatchRemove(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNCreditBatch(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCreditBatch(ctx,
			item.BatchDenom,
		)
		_, found := keeper.GetCreditBatch(ctx,
			item.BatchDenom,
		)
		require.False(t, found)
	}
}

func TestCreditBatchGetAll(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNCreditBatch(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCreditBatch(ctx)),
	)
}
