package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

// SetIdCounters set idCounters in the store
func (k Keeper) SetIdCounters(ctx sdk.Context, idCounters types.IdCounters) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IdCountersKey))
	b := k.cdc.MustMarshal(&idCounters)
	store.Set([]byte{0}, b)
}

// GetIdCounters returns idCounters
func (k Keeper) GetIdCounters(ctx sdk.Context) (val types.IdCounters, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IdCountersKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveIdCounters removes idCounters from the store
func (k Keeper) RemoveIdCounters(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.IdCountersKey))
	store.Delete([]byte{0})
}
