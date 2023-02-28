package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "igniter/testutil/keeper"
	"igniter/x/igniter/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.IgniterKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
