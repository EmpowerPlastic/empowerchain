package keeper

import (
	"cosmossdk.io/errors"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
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

func (k Keeper) GetApplicants(ctx sdk.Context, pageReq query.PageRequest) ([]plasticcredit.Applicant, query.PageResponse, error) {
	store := k.getApplicantStore(ctx)

	var applicants []plasticcredit.Applicant
	pageRes, err := query.Paginate(store, &pageReq, func(_ []byte, value []byte) error {
		var applicant plasticcredit.Applicant
		if err := k.cdc.Unmarshal(value, &applicant); err != nil {
			return err
		}
		applicants = append(applicants, applicant)

		return nil
	})
	if err != nil {
		return nil, query.PageResponse{}, err
	}

	return applicants, *pageRes, nil
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

	return nextID, ctx.EventManager().EmitTypedEvent(&plasticcredit.EventCreateApplicant{
		ApplicantId: applicant.Id,
		Name:        applicant.Name,
		Description: applicant.Description,
		Admin:       applicant.Admin,
	})
}

func (k Keeper) updateApplicant(ctx sdk.Context, updater sdk.AccAddress, applicantID uint64, name string, description string, admin string) error {
	applicant, found := k.GetApplicant(ctx, applicantID)
	if !found {
		return errors.Wrapf(plasticcredit.ErrApplicantNotFound, "applicant with id %d was not found for update", applicantID)
	}

	if applicant.Admin != updater.String() {
		return errors.Wrapf(sdkerrors.ErrUnauthorized, "updater %s is not the same as applicant creator admin %s", updater, applicant.Admin)
	}

	applicant.Name = name
	applicant.Description = description
	applicant.Admin = admin

	if err := k.setApplicant(ctx, applicant); err != nil {
		return err
	}

	return ctx.EventManager().EmitTypedEvent(&plasticcredit.EventUpdateApplicant{
		ApplicantId: applicant.Id,
		Name:        applicant.Name,
		Description: applicant.Description,
		Admin:       applicant.Admin,
		Updater:     updater.String(),
	})
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

func (k Keeper) iterateApplicants(ctx sdk.Context, handler func(applicant plasticcredit.Applicant)) {
	store := k.getApplicantStore(ctx)

	iterator := store.Iterator(nil, nil)
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var applicant plasticcredit.Applicant
		k.cdc.MustUnmarshal(iterator.Value(), &applicant)
		handler(applicant)
	}
}

func (k Keeper) getApplicantStore(ctx sdk.Context) storetypes.KVStore {
	store := ctx.KVStore(k.storeKey)
	applicantStore := prefix.NewStore(store, plasticcredit.ApplicantKey)

	return applicantStore
}
