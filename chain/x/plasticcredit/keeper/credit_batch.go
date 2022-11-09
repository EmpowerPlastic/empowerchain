package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

// SetCreditBatch set a specific creditBatch in the store from its index
func (k Keeper) SetCreditBatch(ctx sdk.Context, creditBatch types.CreditBatch) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreditBatchKeyPrefix))
	b := k.cdc.MustMarshal(&creditBatch)
	store.Set(types.CreditBatchKey(
		creditBatch.BatchDenom,
	), b)
}

// GetCreditBatch returns a creditBatch from its index
func (k Keeper) GetCreditBatch(
	ctx sdk.Context,
	batchDenom string,

) (val types.CreditBatch, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreditBatchKeyPrefix))

	b := store.Get(types.CreditBatchKey(
		batchDenom,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCreditBatch removes a creditBatch from the store
func (k Keeper) RemoveCreditBatch(
	ctx sdk.Context,
	batchDenom string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreditBatchKeyPrefix))
	store.Delete(types.CreditBatchKey(
		batchDenom,
	))
}

// GetAllCreditBatch returns all creditBatch
func (k Keeper) GetAllCreditBatch(ctx sdk.Context) (list []types.CreditBatch) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreditBatchKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CreditBatch
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
