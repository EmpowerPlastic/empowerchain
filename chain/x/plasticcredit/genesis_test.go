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
				IdCounters:        plasticcredit.DefaultGenesis().IdCounters,
				Issuers:           plasticcredit.DefaultGenesis().Issuers,
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: plasticcredit.ErrInvalidParams,
		},
		"invalid id counters fail": {
			genState: &plasticcredit.GenesisState{
				Params:            plasticcredit.DefaultGenesis().Params,
				IdCounters:        plasticcredit.IDCounters{},
				Issuers:           plasticcredit.DefaultGenesis().Issuers,
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: plasticcredit.ErrInvalidValue,
		},
		"invalid issuers fail": {
			genState: &plasticcredit.GenesisState{
				Params:            plasticcredit.DefaultGenesis().Params,
				IdCounters:        plasticcredit.DefaultGenesis().IdCounters,
				Issuers:           []plasticcredit.Issuer{{}},
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: plasticcredit.ErrInvalidValue,
		},
		"invalid credit collections fail": {
			genState: &plasticcredit.GenesisState{
				Params:     plasticcredit.DefaultGenesis().Params,
				IdCounters: plasticcredit.DefaultGenesis().IdCounters,
				Issuers:    plasticcredit.DefaultGenesis().Issuers,
				CreditCollections: []*plasticcredit.IDCreditCollection{
					{
						Denom: "",
						CreditCollection: &plasticcredit.CreditCollection{
							ProjectId: 1,
						},
					},
				},
				CreditBalances: plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: plasticcredit.ErrInvalidValue,
		},
		"invalid credit balances fail": {
			genState: &plasticcredit.GenesisState{
				Params:            plasticcredit.DefaultGenesis().Params,
				IdCounters:        plasticcredit.DefaultGenesis().IdCounters,
				Issuers:           plasticcredit.DefaultGenesis().Issuers,
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances: []*plasticcredit.IDCreditBalance{
					{
						Owner:         "emp123",
						Denom:         "EMP/123",
						CreditBalance: &plasticcredit.CreditBalance{},
					},
				},
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
