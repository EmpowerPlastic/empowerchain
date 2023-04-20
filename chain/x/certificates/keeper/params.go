package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/x/certificates"
)

// GetParams get all parameters as types.Params
func (k Keeper) GetParams(ctx sdk.Context) certificates.Params {
	store := ctx.KVStore(k.storeKey)
	bz := store.Get(certificates.ParamsKey)
	if bz == nil {
		return certificates.Params{}
	}

	var p certificates.Params
	k.cdc.MustUnmarshal(bz, &p)
	return p
}

// SetParams set the params
func (k Keeper) SetParams(ctx sdk.Context, p certificates.Params) error {
	store := ctx.KVStore(k.storeKey)
	bz, err := k.cdc.Marshal(&p)
	if err != nil {
		return err
	}
	store.Set(certificates.ParamsKey, bz)

	return nil
}
