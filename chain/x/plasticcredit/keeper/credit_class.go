package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
)

func (k Keeper) GetCreditClass(ctx sdk.Context, creditClassId uint64) (creditClass plasticcredit.CreditClass, found bool, err error) {
	store := k.getCreditClassStore(ctx)

	key := plasticcredit.CreateKeyFromUint64(creditClassId)
	bz := store.Get(key)
	if bz == nil {
		return creditClass, false, nil
	}
	err = k.cdc.Unmarshal(bz, &creditClass)

	return creditClass, true, err
}

func (k Keeper) getCreditClassStore(ctx sdk.Context) storetypes.KVStore {
	store := ctx.KVStore(k.storeKey)
	creditClassStore := prefix.NewStore(store, plasticcredit.CreditClassKey)

	return creditClassStore
}
