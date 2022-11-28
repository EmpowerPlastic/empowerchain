package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
)

func (k Keeper) GetParams(ctx sdk.Context) (plasticcredit.Params, error) {
	store := ctx.KVStore(k.storeKey)
	bz := store.Get(plasticcredit.ParamsKey)
	if bz == nil {
		return plasticcredit.Params{}, nil
	}

	var p plasticcredit.Params
	err := k.cdc.Unmarshal(bz, &p)
	return p, err
}

func (k Keeper) setParams(ctx sdk.Context, p plasticcredit.Params) error {
	if err := p.Validate(); err != nil {
		return err
	}

	store := ctx.KVStore(k.storeKey)
	bz, err := k.cdc.Marshal(&p)
	if err != nil {
		return err
	}
	store.Set(plasticcredit.ParamsKey, bz)

	return nil
}
