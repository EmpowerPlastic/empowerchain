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

func createNCreditDenom(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CreditDenom {
	items := make([]types.CreditDenom, n)
	for i := range items {
		items[i].BatchDenom = strconv.Itoa(i)
		keeper.AppendCreditDenom(ctx, items[i])
	}
	return items
}

func TestCreditDenomGet(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNCreditDenom(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetCreditDenom(ctx, item.BatchDenom)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestCreditDenomRemove(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNCreditDenom(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCreditDenom(ctx, item.BatchDenom)
		_, found := keeper.GetCreditDenom(ctx, item.BatchDenom)
		require.False(t, found)
	}
}

func TestCreditDenomGetAll(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNCreditDenom(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCreditDenom(ctx)),
	)
}

func TestCreditDenomCount(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNCreditDenom(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetCreditDenomCount(ctx))
}
