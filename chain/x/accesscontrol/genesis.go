package accesscontrol

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PermStores: []ModulePermStore{},
	}
}

// Validate performs basic genesis state validation
func (gs GenesisState) Validate() error {
	for _, permStore := range gs.PermStores {
		for _, access := range permStore.Accesses {
			_, err := sdk.AccAddressFromBech32(access.Address)
			if err != nil {
				return err
			}
		}
	}
	return nil
}
