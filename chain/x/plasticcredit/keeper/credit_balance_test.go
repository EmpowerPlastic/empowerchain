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

func createNCreditBalance(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CreditBalance {
	items := make([]types.CreditBalance, n)
	for i := range items {
		items[i].Owner = strconv.Itoa(i)
		keeper.SetCreditBalance(ctx, "denom", items[i])
	}
	return items
}

func TestCreditBalanceGet(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNCreditBalance(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCreditBalance(ctx,
			"denom",
			item.Owner,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCreditBalanceRemove(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNCreditBalance(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCreditBalance(ctx,
			"denom",
			item.Owner,
		)
		_, found := keeper.GetCreditBalance(ctx,
			"denom",
			item.Owner,
		)
		require.False(t, found)
	}
}

func TestCreditBalanceGetAll(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNCreditBalance(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCreditBalance(ctx, "denom")),
	)
}
