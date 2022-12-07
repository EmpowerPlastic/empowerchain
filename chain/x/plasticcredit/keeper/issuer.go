package keeper

import (
	"cosmossdk.io/errors"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
)

func (k Keeper) GetIssuer(ctx sdk.Context, id uint64) (issuer plasticcredit.Issuer, found bool) {
	store := k.getIssuerStore(ctx)

	key := plasticcredit.CreateKeyFromUint64(id)
	bz := store.Get(key)
	if len(bz) == 0 {
		return issuer, false
	}

	k.cdc.MustUnmarshal(bz, &issuer)

	return issuer, true
}

func (k Keeper) GetIssuers(ctx sdk.Context, pageReq query.PageRequest) ([]plasticcredit.Issuer, query.PageResponse, error) {
	store := k.getIssuerStore(ctx)

	var issuers []plasticcredit.Issuer
	pageRes, err := query.Paginate(store, &pageReq, func(_ []byte, value []byte) error {
		var issuer plasticcredit.Issuer
		if err := k.cdc.Unmarshal(value, &issuer); err != nil {
			return err
		}
		issuers = append(issuers, issuer)

		return nil
	})
	if err != nil {
		return nil, query.PageResponse{}, err
	}

	return issuers, *pageRes, nil
}

func (k Keeper) getAllIssuers(ctx sdk.Context) []plasticcredit.Issuer {
	store := k.getIssuerStore(ctx)

	iterator := store.Iterator(nil, nil)
	defer iterator.Close()

	var issuers []plasticcredit.Issuer
	for ; iterator.Valid(); iterator.Next() {
		var issuer plasticcredit.Issuer
		k.cdc.MustUnmarshal(iterator.Value(), &issuer)
		issuers = append(issuers, issuer)
	}

	return issuers
}

func (k Keeper) CreateIssuer(ctx sdk.Context, name string, description string, admin string) (uint64, error) {
	idc := k.GetIDCounters(ctx)

	nextID := idc.NextIssuerId

	issuer := plasticcredit.Issuer{
		Id:          nextID,
		Name:        name,
		Description: description,
		Admin:       admin,
	}

	if err := k.setIssuer(ctx, issuer); err != nil {
		return 0, err
	}

	idc.NextIssuerId = nextID + 1
	if err := k.setIDCounters(ctx, idc); err != nil {
		return 0, err
	}

	return nextID, nil
}

func (k Keeper) UpdateIssuer(ctx sdk.Context, updater sdk.AccAddress, issuerID uint64, name string, description string, admin string) error {
	issuer, found := k.GetIssuer(ctx, issuerID)
	if !found {
		return errors.Wrapf(plasticcredit.ErrNotFoundIssuer, "issuer with id %d was not found for update", issuerID)
	}

	if issuer.Admin != updater.String() {
		return errors.Wrapf(sdkerrors.ErrUnauthorized, "updater %s is not the same as issuer admin %s", updater, issuer.Admin)
	}

	issuer.Name = name
	issuer.Description = description
	issuer.Admin = admin

	return k.setIssuer(ctx, issuer)
}

func (k Keeper) setIssuer(ctx sdk.Context, issuer plasticcredit.Issuer) error {
	if err := issuer.Validate(); err != nil {
		return err
	}
	store := k.getIssuerStore(ctx)

	b, err := k.cdc.Marshal(&issuer)
	if err != nil {
		return err
	}

	key := plasticcredit.CreateKeyFromUint64(issuer.Id)
	store.Set(key, b)

	return nil
}

func (k Keeper) getIssuerStore(ctx sdk.Context) storetypes.KVStore {
	store := ctx.KVStore(k.storeKey)
	issuerStore := prefix.NewStore(store, plasticcredit.IssuerKey)

	return issuerStore
}
