package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/accesscontrol/types"
)

func (k Keeper) InitGenesis(ctx sdk.Context, genState types.GenesisState) error {
	for _, ps := range genState.PermStores {
		permStore, ok := k.permStores[ps.ModuleName]
		if !ok {
			panic("store not found for module " + ps.ModuleName)
		}
		for _, access := range ps.Accesses {
			permStore.GrantAccess(ctx, sdk.AccAddress(access.Address), access.MsgType)
		}
	}
	return nil
}

func (k Keeper) ExportGenesis(ctx sdk.Context) (*types.GenesisState, error) {
	genesis := types.DefaultGenesis()

	for name, permStore := range k.permStores {
		var accesses []types.Access
		permStore.IteratePermissions(ctx, func(account sdk.AccAddress, msgType string) bool {
			accesses = append(accesses, types.Access{
				Address: account.String(),
				MsgType: msgType,
			})
			return false
		})
		genesis.PermStores = append(genesis.PermStores, types.ModulePermStore{
			ModuleName: name,
			Accesses:   accesses,
		})

	}

	return genesis, nil
}
