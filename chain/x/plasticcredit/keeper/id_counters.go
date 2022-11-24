package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

func (k Keeper) GetIDCounters(ctx sdk.Context) (types.IDCounters, error) {
	store := ctx.KVStore(k.storeKey)
	bz := store.Get(types.IDCountersKey)
	if bz == nil {
		return types.IDCounters{}, nil
	}

	var idc types.IDCounters
	err := k.cdc.Unmarshal(bz, &idc)
	return idc, err
}

func (k Keeper) setIDCounters(ctx sdk.Context, idc types.IDCounters) error {
	if err := idc.Validate(); err != nil {
		return err
	}

	store := ctx.KVStore(k.storeKey)
	bz, err := k.cdc.Marshal(&idc)
	if err != nil {
		return err
	}
	store.Set(types.IDCountersKey, bz)

	return nil
}
