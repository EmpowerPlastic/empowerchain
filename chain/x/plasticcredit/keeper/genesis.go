package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

func (k Keeper) InitGenesis(ctx sdk.Context, genState types.GenesisState) error {
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

	return nil
}

func (k Keeper) ExportGenesis(ctx sdk.Context) (*types.GenesisState, error) {
	genesis := types.DefaultGenesis()
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

	return genesis, err
}
