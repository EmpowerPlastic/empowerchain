package plasticcredit

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit/keeper"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	k.SetIdCounters(ctx, genState.IdCounters)
	// Set all the issuer
	for _, elem := range genState.IssuerList {
		k.SetIssuer(ctx, elem)
	}
	// Set all the creditClass
	for _, elem := range genState.CreditClassList {
		k.SetCreditClass(ctx, elem)
	}
	// Set all the project
	for _, elem := range genState.ProjectList {
		k.SetProject(ctx, elem)
	}
	// Set all the collector
	for _, elem := range genState.CollectorList {
		k.SetCollector(ctx, elem)
	}
	// Set all the creditBatch
	for _, elem := range genState.CreditBatchList {
		k.SetCreditBatch(ctx, elem)
	}
	// Set all the creditBalance
	for _, denomToBalance := range genState.BatchDenomToCreditBalance {
		for _, balance := range denomToBalance.CreditBalances {
			k.SetCreditBalance(ctx, denomToBalance.BatchDenom, *balance)
		}
	}
	// Set all the creditDenom
	for _, elem := range genState.CreditDenomList {
		k.SetCreditDenom(ctx, elem)
	}

	// Set creditDenom count
	k.SetCreditDenomCount(ctx, genState.CreditDenomCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	// Get all idCounters
	idCounters, found := k.GetIdCounters(ctx)
	if found {
		genesis.IdCounters = idCounters
	}
	genesis.IssuerList = k.GetAllIssuer(ctx)
	genesis.CreditClassList = k.GetAllCreditClass(ctx)
	genesis.ProjectList = k.GetAllProject(ctx)
	genesis.CollectorList = k.GetAllCollector(ctx)
	genesis.CreditBatchList = k.GetAllCreditBatch(ctx)
	genesis.CreditDenomList = k.GetAllCreditDenom(ctx)
	genesis.CreditDenomCount = k.GetCreditDenomCount(ctx)
	// TODO workaround for passing array of pointers to Genesis state
	for _, creditDenom := range genesis.CreditDenomList {
		creditBalances := k.GetAllCreditBalance(ctx, creditDenom.BatchDenom)
		var creditBalancesPtrs []*types.CreditBalance
		for _, creditBalance := range creditBalances {
			creditBalancesPtrs = append(creditBalancesPtrs, &creditBalance)
		}
		genesis.BatchDenomToCreditBalance = append(genesis.BatchDenomToCreditBalance, types.BatchDenomToCreditBalance{BatchDenom: creditDenom.BatchDenom, CreditBalances: creditBalancesPtrs})
	}
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
