package types_test

import (
	"testing"

	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	testCases := map[string]struct {
		genState *types.GenesisState
		err      error
	}{
		"default is valid": {
			genState: types.DefaultGenesis(),
			err:      nil,
		},
		"invalid params fail": {
			genState: &types.GenesisState{
				Params: types.Params{
					IssuerCreator: "invalid",
				},
				IdCounters: types.DefaultGenesis().IdCounters,
				Issuers:    types.DefaultGenesis().Issuers,
			},
			err: types.ErrInvalidParams,
		},
		"invalid id counters fail": {
			genState: &types.GenesisState{
				Params:     types.DefaultGenesis().Params,
				IdCounters: types.IDCounters{},
				Issuers:    types.DefaultGenesis().Issuers,
			},
			err: types.ErrInvalidValue,
		},
		"invalid issuers fail": {
			genState: &types.GenesisState{
				Params:     types.DefaultGenesis().Params,
				IdCounters: types.DefaultGenesis().IdCounters,
				Issuers:    []types.Issuer{{}},
			},
			err: types.ErrInvalidValue,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.genState.Validate()
			require.ErrorIs(t, err, tc.err)
		})
	}
}
