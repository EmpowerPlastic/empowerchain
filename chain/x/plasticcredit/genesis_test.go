package plasticcredit_test

import (
	"testing"

	"github.com/empowerchain/empowerchain/x/plasticcredit"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	testCases := map[string]struct {
		genState *plasticcredit.GenesisState
		err      error
	}{
		"default is valid": {
			genState: plasticcredit.DefaultGenesis(),
			err:      nil,
		},
		"invalid params fail": {
			genState: &plasticcredit.GenesisState{
				Params: plasticcredit.Params{
					IssuerCreator: "invalid",
				},
				IdCounters: plasticcredit.DefaultGenesis().IdCounters,
				Issuers:    plasticcredit.DefaultGenesis().Issuers,
			},
			err: plasticcredit.ErrInvalidParams,
		},
		"invalid id counters fail": {
			genState: &plasticcredit.GenesisState{
				Params:     plasticcredit.DefaultGenesis().Params,
				IdCounters: plasticcredit.IDCounters{},
				Issuers:    plasticcredit.DefaultGenesis().Issuers,
			},
			err: plasticcredit.ErrInvalidValue,
		},
		"invalid issuers fail": {
			genState: &plasticcredit.GenesisState{
				Params:     plasticcredit.DefaultGenesis().Params,
				IdCounters: plasticcredit.DefaultGenesis().IdCounters,
				Issuers:    []plasticcredit.Issuer{{}},
			},
			err: plasticcredit.ErrInvalidValue,
		},
		"invalid applicants fail": {
			genState: &plasticcredit.GenesisState{
				Params:     plasticcredit.DefaultGenesis().Params,
				IdCounters: plasticcredit.DefaultGenesis().IdCounters,
				Issuers:    plasticcredit.DefaultGenesis().Issuers,
				Applicants: []plasticcredit.Applicant{{}},
			},
			err: plasticcredit.ErrInvalidValue,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.genState.Validate()
			require.ErrorIs(t, err, tc.err)
		})
	}
}
