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

func createNCreditClass(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CreditClass {
	items := make([]types.CreditClass, n)
	for i := range items {
		items[i].CreditClassId = uint64(i)

		keeper.SetCreditClass(ctx, items[i])
	}
	return items
}

func TestCreditClassGet(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNCreditClass(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCreditClass(ctx,
			item.CreditClassId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestCreditClassRemove(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNCreditClass(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCreditClass(ctx,
			item.CreditClassId,
		)
		_, found := keeper.GetCreditClass(ctx,
			item.CreditClassId,
		)
		require.False(t, found)
	}
}

func TestCreditClassGetAll(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNCreditClass(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllCreditClass(ctx)),
	)
}
