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

func (k Keeper) GetCreditType(ctx sdk.Context, abbreviation string) (creditType plasticcredit.CreditType, found bool) {
	store := k.getCreditTypeStore(ctx)

	key := []byte(abbreviation)
	bz := store.Get(key)
	if len(bz) == 0 {
		return plasticcredit.CreditType{}, false
	}

	k.cdc.MustUnmarshal(bz, &creditType)

	return creditType, true
}

func (k Keeper) GetCreditTypes(ctx sdk.Context, pageReq query.PageRequest) ([]plasticcredit.CreditType, query.PageResponse, error) {
	store := k.getCreditTypeStore(ctx)

	var creditTypes []plasticcredit.CreditType
	pageRes, err := query.Paginate(store, &pageReq, func(_ []byte, value []byte) error {
		var creditType plasticcredit.CreditType
		if err := k.cdc.Unmarshal(value, &creditType); err != nil {
			return err
		}
		creditTypes = append(creditTypes, creditType)

		return nil
	})
	if err != nil {
		return nil, query.PageResponse{}, err
	}

	return creditTypes, *pageRes, nil
}

func (k Keeper) CreateCreditType(ctx sdk.Context, creator sdk.AccAddress, abbreviation string, issuerID uint64, name string) error {
	issuer, found := k.GetIssuer(ctx, issuerID)
	if !found {
		return errors.Wrapf(plasticcredit.ErrIssuerNotFound, "issuer for issue ID %d was not found", issuerID)
	}

	if !issuer.AddressHasAuthorization(creator) {
		return errors.Wrapf(sdkerrors.ErrUnauthorized, "creator %s does not have authorization on issuer with id %d", creator.String(), issuerID)
	}

	_, abbrExists := k.GetCreditType(ctx, abbreviation)
	if abbrExists {
		return errors.Wrapf(plasticcredit.ErrCreditTypeAbbreviationTaken, "the abbreviation %s already exists", abbreviation)
	}

	creditType := plasticcredit.CreditType{
		Abbreviation: abbreviation,
		IssuerId:     issuerID,
		Name:         name,
	}

	params := k.GetParams(ctx)
	err := k.distrKeeper.FundCommunityPool(ctx, sdk.NewCoins(params.CreditTypeCreationFee), creator)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInsufficientFee,
			"creator %s does not have enough funds to cover credit type creation fee %s",
			creator.String(), params.CreditTypeCreationFee.String(),
		)
	}

	if err := k.setCreditType(ctx, creditType); err != nil {
		return err
	}

	return ctx.EventManager().EmitTypedEvent(&plasticcredit.EventCreateCreditType{
		Creator:      creator.String(),
		Abbreviation: abbreviation,
		IssuerId:     creditType.IssuerId,
		Name:         creditType.Name,
	})
}

func (k Keeper) UpdateCreditType(ctx sdk.Context, updater sdk.AccAddress, abbreviation string, name string) error {
	creditType, found := k.GetCreditType(ctx, abbreviation)
	if !found {
		return errors.Wrapf(plasticcredit.ErrCreditTypeNotFound, "the abbreviation %s does not exists", abbreviation)
	}
	issuer, found := k.GetIssuer(ctx, creditType.IssuerId)
	if !found {
		return errors.Wrapf(plasticcredit.ErrIssuerNotFound, "issuer for issue ID %d was not found", creditType.IssuerId)
	}
	if !issuer.AddressHasAuthorization(updater) {
		return errors.Wrapf(sdkerrors.ErrUnauthorized, "updater %s does not have authorization on issuer with id %d", updater.String(), creditType.IssuerId)
	}

	creditType.Name = name

	if err := k.setCreditType(ctx, creditType); err != nil {
		return err
	}

	return ctx.EventManager().EmitTypedEvent(&plasticcredit.EventUpdateCreditType{
		Updater:      issuer.Admin,
		Abbreviation: abbreviation,
		Name:         creditType.Name,
	})
}

func (k Keeper) setCreditType(ctx sdk.Context, creditType plasticcredit.CreditType) error {
	if err := creditType.Validate(); err != nil {
		return err
	}

	store := k.getCreditTypeStore(ctx)

	b, err := k.cdc.Marshal(&creditType)
	if err != nil {
		return err
	}

	key := []byte(creditType.Abbreviation)
	store.Set(key, b)

	return nil
}

func (k Keeper) iterateCreditTypes(ctx sdk.Context, handler func(creditType plasticcredit.CreditType)) {
	store := k.getCreditTypeStore(ctx)

	iterator := store.Iterator(nil, nil)
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var creditType plasticcredit.CreditType
		k.cdc.MustUnmarshal(iterator.Value(), &creditType)
		handler(creditType)
	}
}

func (k Keeper) getCreditTypeStore(ctx sdk.Context) storetypes.KVStore {
	store := ctx.KVStore(k.storeKey)
	creditTypeStore := prefix.NewStore(store, plasticcredit.CreditTypeKey)

	return creditTypeStore
}
