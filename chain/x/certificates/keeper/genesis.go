package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/x/certificates"
)

func (k Keeper) InitGenesis(ctx sdk.Context, genState *certificates.GenesisState) error {
	if err := k.SetParams(ctx, genState.Params); err != nil {
		return err
	}

	if err := k.setIDCounters(ctx, genState.IdCounters); err != nil {
		return err
	}

	for _, certificate := range genState.Certificates {
		if err := k.setCertificate(ctx, certificate); err != nil {
			return err
		}
	}

	return nil
}

func (k Keeper) ExportGenesis(ctx sdk.Context) *certificates.GenesisState {
	genesis := certificates.DefaultGenesis()

	genesis.Params = k.GetParams(ctx)
	genesis.IdCounters = k.GetIDCounters(ctx)
	k.iterateCertificates(ctx, func(certificate certificates.Certificate) {
		genesis.Certificates = append(genesis.Certificates, certificate)
	})

	return &genesis
}
