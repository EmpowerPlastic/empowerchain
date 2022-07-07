package proofofexistence_test

import (
	"testing"

	keepertest "github.com/empowerchain/empowerchain/testutil/keeper"
	"github.com/empowerchain/empowerchain/testutil/nullify"
	"github.com/empowerchain/empowerchain/x/proofofexistence"
	"github.com/empowerchain/empowerchain/x/proofofexistence/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		StoredProofList: []types.StoredProof{
			{
				Hash: "0",
			},
			{
				Hash: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ProofofexistenceKeeper(t)
	proofofexistence.InitGenesis(ctx, *k, genesisState)
	got := proofofexistence.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.StoredProofList, got.StoredProofList)
	// this line is used by starport scaffolding # genesis/test/assert
}
