package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
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

	for _, creditType := range genState.CreditTypes {
		if err := k.setCreditType(ctx, creditType); err != nil {
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
	k.iterateIssuers(ctx, func(issuer plasticcredit.Issuer) {
		genesis.Issuers = append(genesis.Issuers, issuer)
	})
	k.iterateApplicants(ctx, func(applicant plasticcredit.Applicant) {
		genesis.Applicants = append(genesis.Applicants, applicant)
	})
	k.iterateCreditTypes(ctx, func(creditType plasticcredit.CreditType) {
		genesis.CreditTypes = append(genesis.CreditTypes, creditType)
	})
	k.iterateProjects(ctx, func(project plasticcredit.Project) {
		genesis.Projects = append(genesis.Projects, project)
	})
	k.IterateCreditCollections(ctx, func(creditCollection plasticcredit.CreditCollection) {
		genesis.CreditCollections = append(genesis.CreditCollections, creditCollection)
	})
	k.IterateCreditBalances(ctx, func(creditBalance plasticcredit.CreditBalance) {
		genesis.CreditBalances = append(genesis.CreditBalances, creditBalance)
	})

	return &genesis
}
