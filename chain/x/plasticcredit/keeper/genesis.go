package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
)

func (k Keeper) InitGenesis(ctx sdk.Context, genState *plasticcredit.GenesisState) error {
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

	for _, applicant := range genState.Applicants {
		if err := k.setApplicant(ctx, applicant); err != nil {
			return err
		}
	}

	for _, creditClass := range genState.CreditClasses {
		if err := k.setCreditClass(ctx, creditClass); err != nil {
			return err
		}
	}

	for _, project := range genState.Projects {
		if err := k.setProject(ctx, project); err != nil {
			return err
		}
	}

	for _, creditCollection := range genState.CreditCollections {
		if err := k.setCreditCollection(ctx, creditCollection); err != nil {
			return err
		}
	}

	for _, creditBalance := range genState.CreditBalances {
		if err := k.setCreditBalance(ctx, creditBalance); err != nil {
			return err
		}
	}

	return nil
}

func (k Keeper) ExportGenesis(ctx sdk.Context) *plasticcredit.GenesisState {
	genesis := plasticcredit.DefaultGenesis()

	genesis.Params = k.GetParams(ctx)
	genesis.IdCounters = k.GetIDCounters(ctx)
	genesis.Issuers = k.getAllIssuers(ctx)
	genesis.Applicants = k.getAllApplicants(ctx)
	genesis.CreditClasses = k.getAllCreditClasses(ctx)
	genesis.Projects = k.getAllProjects(ctx)
	genesis.CreditCollections = k.getAllCreditCollections(ctx)
	genesis.CreditBalances = k.getAllCreditBalances(ctx)

	return &genesis
}
