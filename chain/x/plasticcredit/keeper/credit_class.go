package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

// SetCreditClass set a specific creditClass in the store from its index
func (k Keeper) SetCreditClass(ctx sdk.Context, creditClass types.CreditClass) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreditClassKeyPrefix))
	b := k.cdc.MustMarshal(&creditClass)
	store.Set(types.CreditClassKey(
		creditClass.CreditClassId,
	), b)
}

// GetCreditClass returns a creditClass from its index
func (k Keeper) GetCreditClass(
	ctx sdk.Context,
	creditClassId uint64,

) (val types.CreditClass, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreditClassKeyPrefix))

	b := store.Get(types.CreditClassKey(
		creditClassId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCreditClass removes a creditClass from the store
func (k Keeper) RemoveCreditClass(
	ctx sdk.Context,
	creditClassId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreditClassKeyPrefix))
	store.Delete(types.CreditClassKey(
		creditClassId,
	))
}

// GetAllCreditClass returns all creditClass
func (k Keeper) GetAllCreditClass(ctx sdk.Context) (list []types.CreditClass) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreditClassKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CreditClass
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
