package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/accesscontrol/types"
)

func (k Keeper) InitGenesis(ctx sdk.Context, genState types.GenesisState) error {
	for _, ps := range genState.PermStores {
		_, found := k.subKeys[ps.ModuleName]
		if !found {
			panic("store not found for module " + ps.ModuleName)
		}
		for _, access := range ps.Accesses {
			k.grantAccess(ctx, ps.ModuleName, sdk.AccAddress(access.Address), access.MsgType)
		}
	}
	return nil
}

func (k Keeper) ExportGenesis(ctx sdk.Context) (*types.GenesisState, error) {
	genesis := types.DefaultGenesis()

	for name, _ := range k.subKeys {
		var accesses []types.Access
		k.iteratePermissions(ctx, name, func(account sdk.AccAddress, msgType string) bool {
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
