package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

// SetCreditBalance set a specific creditBalance in the store from its index
func (k Keeper) SetCreditBalance(ctx sdk.Context, batchDenom string, creditBalance types.CreditBalance) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreditBalanceKeyPrefix(batchDenom)))
	b := k.cdc.MustMarshal(&creditBalance)
	store.Set(types.CreditBalanceKey(
		creditBalance.Owner,
	), b)
}

// GetCreditBalance returns a creditBalance from its index
func (k Keeper) GetCreditBalance(
	ctx sdk.Context,
	batchDenom string,
	owner string,

) (val types.CreditBalance, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreditBalanceKeyPrefix(batchDenom)))

	b := store.Get(types.CreditBalanceKey(
		owner,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCreditBalance removes a creditBalance from the store
func (k Keeper) RemoveCreditBalance(
	ctx sdk.Context,
	batchDenom string,
	owner string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreditBalanceKeyPrefix(batchDenom)))
	store.Delete(types.CreditBalanceKey(
		owner,
	))
}

// GetAllCreditBalance returns all creditBalance
func (k Keeper) GetAllCreditBalance(ctx sdk.Context, batchDenom string) (list []types.CreditBalance) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreditBalanceKeyPrefix(batchDenom)))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CreditBalance
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
