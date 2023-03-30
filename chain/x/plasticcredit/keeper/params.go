package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
)

func (k Keeper) GetParams(ctx sdk.Context) plasticcredit.Params {
	store := ctx.KVStore(k.storeKey)
	bz := store.Get(plasticcredit.ParamsKey)
	if bz == nil {
		return plasticcredit.Params{}
	}

	var p plasticcredit.Params
	k.cdc.MustUnmarshal(bz, &p)
	return p
}

func (k Keeper) setParams(ctx sdk.Context, p plasticcredit.Params) error {
	if err := p.Validate(); err != nil {
		return err
	}

	// normalize coin to use lowest denom
	p.CreditTypeCreationFee = sdk.NormalizeCoin(p.GetCreditTypeCreationFee())

	store := ctx.KVStore(k.storeKey)
	bz, err := k.cdc.Marshal(&p)
	if err != nil {
		return err
	}
	store.Set(plasticcredit.ParamsKey, bz)

	return nil
}
