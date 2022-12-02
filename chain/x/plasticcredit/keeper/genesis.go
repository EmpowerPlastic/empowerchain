package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
)

func (k Keeper) InitGenesis(ctx sdk.Context, genState plasticcredit.GenesisState) error {
	if err := k.setParams(ctx, genState.Params); err != nil {
		return err
	}

	if err := k.setIDCounters(ctx, genState.IdCounters); err != nil {
		return err
	}

	for _, issuer := range genState.Issuers {
		if err := k.setIssuer(ctx, issuer); err != nil {
			return err
		}
	}

	for _, creditCollection := range genState.CreditCollections {
		if err := k.setCreditCollection(ctx, *creditCollection); err != nil {
			return err
		}
	}

	for _, creditBalance := range genState.CreditBalances {
		if err := k.setCreditBalance(ctx, *creditBalance); err != nil {
			return err
		}
	}
	for _, applicant := range genState.Applicants {
		if err := k.setApplicant(ctx, applicant); err != nil {
			return err
		}
	}

	return nil
}

func (k Keeper) ExportGenesis(ctx sdk.Context) (*plasticcredit.GenesisState, error) {
	genesis := plasticcredit.DefaultGenesis()
	var err error
	genesis.Params, err = k.GetParams(ctx)
	if err != nil {
		return nil, err
	}

	genesis.IdCounters, err = k.GetIDCounters(ctx)
	if err != nil {
		return nil, err
	}

	genesis.Issuers, err = k.getAllIssuers(ctx)
	if err != nil {
		return nil, err
	}

	genesis.CreditCollections = k.getAllCreditCollections(ctx)

	genesis.CreditBalances = k.getAllCreditBalances(ctx)
	genesis.Applicants, err = k.getAllApplicants(ctx)
	if err != nil {
		return nil, err
	}

	return genesis, err
}
