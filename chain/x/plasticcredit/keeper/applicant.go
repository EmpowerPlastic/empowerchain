package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
)

func (k Keeper) GetApplicant(ctx sdk.Context, id uint64) (applicant plasticcredit.Applicant, found bool) {
	store := k.getApplicantStore(ctx)

	key := plasticcredit.CreateKeyFromUint64(id)
	bz := store.Get(key)
	if len(bz) == 0 {
		return applicant, false
	}

	k.cdc.MustUnmarshal(bz, &applicant)

	return applicant, true
}

func (k Keeper) createApplicant(ctx sdk.Context, name string, description string, admin string) (uint64, error) {
	idc := k.GetIDCounters(ctx)

	nextID := idc.NextApplicantId

	applicant := plasticcredit.Applicant{
		Id:          nextID,
		Name:        name,
		Description: description,
		Admin:       admin,
	}

	if err := k.setApplicant(ctx, applicant); err != nil {
		return 0, err
	}

	idc.NextApplicantId = nextID + 1
	if err := k.setIDCounters(ctx, idc); err != nil {
		return 0, err
	}

	return nextID, nil
}

func (k Keeper) setApplicant(ctx sdk.Context, applicant plasticcredit.Applicant) error {
	if err := applicant.Validate(); err != nil {
		return err
	}
	store := k.getApplicantStore(ctx)

	b, err := k.cdc.Marshal(&applicant)
	if err != nil {
		return err
	}

	key := plasticcredit.CreateKeyFromUint64(applicant.Id)
	store.Set(key, b)

	return nil
}

func (k Keeper) getAllApplicants(ctx sdk.Context) []plasticcredit.Applicant {
	store := k.getApplicantStore(ctx)

	iterator := store.Iterator(nil, nil)
	defer iterator.Close()

	var applicants []plasticcredit.Applicant
	for ; iterator.Valid(); iterator.Next() {
		var applicant plasticcredit.Applicant
		k.cdc.MustUnmarshal(iterator.Value(), &applicant)
		applicants = append(applicants, applicant)
	}

	return applicants
}

func (k Keeper) getApplicantStore(ctx sdk.Context) storetypes.KVStore {
	store := ctx.KVStore(k.storeKey)
	applicantStore := prefix.NewStore(store, plasticcredit.ApplicantKey)

	return applicantStore
}
