package keeper_test

import (
	"testing"

	testkeeper "github.com/empowerchain/empowerchain/testutil/keeper"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.PlasticcreditKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
	require.EqualValues(t, params.CreateissuerAllowlist, k.CreateissuerAllowlist(ctx))
}
