package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/x/accesscontrol"
)

func (k Keeper) InitGenesis(ctx sdk.Context, genState accesscontrol.GenesisState) error {
	for _, ps := range genState.PermStores {
		_, found := k.subKeys[ps.ModuleName]
		if !found {
			panic("store not found for module " + ps.ModuleName)
		}
		for _, access := range ps.Accesses {
			err := k.grantAccess(ctx, ps.ModuleName, sdk.AccAddress(access.Address), access.MsgType)
			if err != nil {
				return err
			}
		}
	}
	return nil
}

func (k Keeper) ExportGenesis(ctx sdk.Context) (*accesscontrol.GenesisState, error) {
	genesis := accesscontrol.DefaultGenesis()

	for name := range k.subKeys {
		var accesses []accesscontrol.Access
		k.iteratePermissions(ctx, name, func(account sdk.AccAddress, msgType string) bool {
			accesses = append(accesses, accesscontrol.Access{
				Address: account.String(),
				MsgType: msgType,
			})
			return false
		})
		genesis.PermStores = append(genesis.PermStores, accesscontrol.ModulePermStore{
			ModuleName: name,
			Accesses:   accesses,
		})
	}

	return genesis, nil
}
