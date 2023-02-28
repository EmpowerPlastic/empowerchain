package igniter_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "igniter/testutil/keeper"
	"igniter/testutil/nullify"
	"igniter/x/igniter"
	"igniter/x/igniter/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.IgniterKeeper(t)
	igniter.InitGenesis(ctx, *k, genesisState)
	got := igniter.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
