package plasticcredit_test

import (
	"testing"

	keepertest "github.com/empowerchain/empowerchain/testutil/keeper"
	"github.com/empowerchain/empowerchain/testutil/nullify"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		IdCounters: types.IdCounters{
			IssuerId:      71,
			CollectorId:   97,
			ProjectId:     4,
			CreditClassId: 19,
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
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.PlasticcreditKeeper(t)
	plasticcredit.InitGenesis(ctx, *k, genesisState)
	got := plasticcredit.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.IdCounters, got.IdCounters)
	require.ElementsMatch(t, genesisState.IssuerList, got.IssuerList)
	require.ElementsMatch(t, genesisState.CreditClassList, got.CreditClassList)
	require.ElementsMatch(t, genesisState.ProjectList, got.ProjectList)
	require.ElementsMatch(t, genesisState.CollectorList, got.CollectorList)
	require.ElementsMatch(t, genesisState.CreditBatchList, got.CreditBatchList)
	require.ElementsMatch(t, genesisState.BatchDenomToCreditBalance, got.BatchDenomToCreditBalance)
	require.ElementsMatch(t, genesisState.CreditDenomList, got.CreditDenomList)
	require.Equal(t, genesisState.CreditDenomCount, got.CreditDenomCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
