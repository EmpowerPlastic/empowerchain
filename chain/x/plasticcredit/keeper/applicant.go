package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
)

func (k Keeper) GetApplicant(ctx sdk.Context, applicantId uint64) (applicant plasticcredit.Applicant, found bool) {
	store := k.getApplicantStore(ctx)

	key := plasticcredit.CreateKeyFromUint64(applicantId)
	bz := store.Get(key)
	if bz == nil {
		return applicant, false
	}
	k.cdc.MustUnmarshal(bz, &applicant)

	return applicant, true
}

func (k Keeper) getApplicantStore(ctx sdk.Context) storetypes.KVStore {
	store := ctx.KVStore(k.storeKey)
	applicantStore := prefix.NewStore(store, plasticcredit.ApplicantKey)

	return applicantStore
}
