package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

// SetCollector set a specific collector in the store from its index
func (k Keeper) SetCollector(ctx sdk.Context, collector types.Collector) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CollectorKeyPrefix))
	b := k.cdc.MustMarshal(&collector)
	store.Set(types.CollectorKey(
		collector.CollectorId,
	), b)
}

// GetCollector returns a collector from its index
func (k Keeper) GetCollector(
	ctx sdk.Context,
	collectorId uint64,

) (val types.Collector, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CollectorKeyPrefix))

	b := store.Get(types.CollectorKey(
		collectorId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCollector removes a collector from the store
func (k Keeper) RemoveCollector(
	ctx sdk.Context,
	collectorId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CollectorKeyPrefix))
	store.Delete(types.CollectorKey(
		collectorId,
	))
}

// GetAllCollector returns all collector
func (k Keeper) GetAllCollector(ctx sdk.Context) (list []types.Collector) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CollectorKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Collector
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
