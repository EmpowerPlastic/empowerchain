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

func createNProject(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Project {
	items := make([]types.Project, n)
	for i := range items {
		items[i].ProjectId = uint64(i)

		keeper.SetProject(ctx, items[i])
	}
	return items
}

func TestProjectGet(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNProject(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetProject(ctx,
			item.ProjectId,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestProjectRemove(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNProject(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveProject(ctx,
			item.ProjectId,
		)
		_, found := keeper.GetProject(ctx,
			item.ProjectId,
		)
		require.False(t, found)
	}
}

func TestProjectGetAll(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	items := createNProject(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllProject(ctx)),
	)
}
