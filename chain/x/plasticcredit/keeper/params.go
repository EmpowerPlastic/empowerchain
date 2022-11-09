package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

// GetParams get all parameters as types.Params
func (k Keeper) GetParams(ctx sdk.Context) types.Params {
	return types.NewParams(
		k.CreateissuerAllowlist(ctx),
	)
}

// SetParams set the params
func (k Keeper) SetParams(ctx sdk.Context, params types.Params) {
	k.paramstore.SetParamSet(ctx, &params)
}

// CreateissuerAllowlist returns the CreateissuerAllowlist param
func (k Keeper) CreateissuerAllowlist(ctx sdk.Context) (res []string) {
	k.paramstore.Get(ctx, types.KeyCreateissuerAllowlist, &res)
	return
}
