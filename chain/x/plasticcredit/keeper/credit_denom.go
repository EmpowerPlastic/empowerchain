package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

// GetCreditDenomCount get the total number of creditDenom
func (k Keeper) GetCreditDenomCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CreditDenomCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetCreditDenomCount set the total number of creditDenom
func (k Keeper) SetCreditDenomCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CreditDenomCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendCreditDenom appends a creditDenom in the store with a new id and update the count
func (k Keeper) AppendCreditDenom(
	ctx sdk.Context,
	creditDenom types.CreditDenom,
) uint64 {
	// Create the creditDenom
	count := k.GetCreditDenomCount(ctx)

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreditDenomKeyPrefix))
	appendedValue := k.cdc.MustMarshal(&creditDenom)
	store.Set(types.CreditDenomKey(creditDenom.BatchDenom), appendedValue)

	// Update creditDenom count
	k.SetCreditDenomCount(ctx, count+1)

	return count
}

// SetCreditDenom set a specific creditDenom in the store
func (k Keeper) SetCreditDenom(ctx sdk.Context, creditDenom types.CreditDenom) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreditDenomKeyPrefix))
	b := k.cdc.MustMarshal(&creditDenom)
	store.Set(types.CreditDenomKey(creditDenom.BatchDenom), b)
}

// GetCreditDenom returns a creditDenom from its id
func (k Keeper) GetCreditDenom(ctx sdk.Context, batchDenom string) (val types.CreditDenom, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreditDenomKeyPrefix))
	b := store.Get(types.CreditDenomKey(batchDenom))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCreditDenom removes a creditDenom from the store
func (k Keeper) RemoveCreditDenom(ctx sdk.Context, batchDenom string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreditDenomKeyPrefix))
	store.Delete(types.CreditDenomKey(batchDenom))
}

// GetAllCreditDenom returns all creditDenom
func (k Keeper) GetAllCreditDenom(ctx sdk.Context) (list []types.CreditDenom) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreditDenomKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CreditDenom
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// TODO put in common util to be usable by every map with uint key
// GetCreditDenomIDBytes returns the byte representation of the ID
func GetCreditDenomIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCreditDenomIDFromBytes returns ID in string format from a byte array
func GetCreditDenomIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
