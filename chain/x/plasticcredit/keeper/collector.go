package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
)

func (k Keeper) GetCollector(ctx sdk.Context, collectorId uint64) (collector plasticcredit.Collector, found bool, err error) {
	store := k.getCollectorStore(ctx)

	key := plasticcredit.CreateKeyFromUint64(collectorId)
	bz := store.Get(key)
	if bz == nil {
		return collector, false, nil
	}
	err = k.cdc.Unmarshal(bz, &collector)

	return collector, true, err
}

func (k Keeper) getCollectorStore(ctx sdk.Context) storetypes.KVStore {
	store := ctx.KVStore(k.storeKey)
	collectorStore := prefix.NewStore(store, plasticcredit.CollectorKey)

	return collectorStore
}
