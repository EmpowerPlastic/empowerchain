package types_test

import (
	"testing"

	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				IdCounters: types.IdCounters{
					IssuerId:      57,
					CollectorId:   26,
					ProjectId:     55,
					CreditClassId: 64,
				},
				IssuerList: []types.Issuer{
					{
						IssuerId: 0,
					},
					{
						IssuerId: 1,
					},
				},
				CreditClassList: []types.CreditClass{
					{
						CreditClassId: 0,
					},
					{
						CreditClassId: 1,
					},
				},
				ProjectList: []types.Project{
					{
						ProjectId: 0,
					},
					{
						ProjectId: 1,
					},
				},
				CollectorList: []types.Collector{
					{
						CollectorId: 0,
					},
					{
						CollectorId: 1,
					},
				},
				CreditBatchList: []types.CreditBatch{
					{
						BatchDenom: "0",
					},
					{
						BatchDenom: "1",
					},
				},
				BatchDenomToCreditBalance: []types.BatchDenomToCreditBalance{
					{
						BatchDenom: "0",
					},
					{
						BatchDenom: "1",
					},
				},
				CreditDenomList: []types.CreditDenom{
					{
						BatchDenom: "0",
					},
					{
						BatchDenom: "1",
					},
				},
				CreditDenomCount: 2,
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated issuer",
			genState: &types.GenesisState{
				IssuerList: []types.Issuer{
					{
						IssuerId: 0,
					},
					{
						IssuerId: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated creditClass",
			genState: &types.GenesisState{
				CreditClassList: []types.CreditClass{
					{
						CreditClassId: 0,
					},
					{
						CreditClassId: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated project",
			genState: &types.GenesisState{
				ProjectList: []types.Project{
					{
						ProjectId: 0,
					},
					{
						ProjectId: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated collector",
			genState: &types.GenesisState{
				CollectorList: []types.Collector{
					{
						CollectorId: 0,
					},
					{
						CollectorId: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated creditBatch",
			genState: &types.GenesisState{
				CreditBatchList: []types.CreditBatch{
					{
						BatchDenom: "0",
					},
					{
						BatchDenom: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated creditBalance",
			genState: &types.GenesisState{
				BatchDenomToCreditBalance: []types.BatchDenomToCreditBalance{
					{
						BatchDenom: "0",
					},
					{
						BatchDenom: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated creditDenom",
			genState: &types.GenesisState{
				CreditDenomList: []types.CreditDenom{
					{
						BatchDenom: "0",
					},
					{
						BatchDenom: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid creditDenom count",
			genState: &types.GenesisState{
				CreditDenomList: []types.CreditDenom{
					{
						BatchDenom: "1",
					},
				},
				CreditDenomCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
