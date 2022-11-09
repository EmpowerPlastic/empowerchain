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

func createNIssuer(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Issuer {
	items := make([]types.Issuer, n)
	for i := range items {
		items[i].IssuerId = uint64(i)

		keeper.SetIssuer(ctx, items[i])
	}
	return items
}

func TestIssuerGet(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNIssuer(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetIssuer(ctx,
			item.IssuerId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestIssuerRemove(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNIssuer(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveIssuer(ctx,
			item.IssuerId,
		)
		_, found := keeper.GetIssuer(ctx,
			item.IssuerId,
		)
		require.False(t, found)
	}
}

func TestIssuerGetAll(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNIssuer(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllIssuer(ctx)),
	)
}
