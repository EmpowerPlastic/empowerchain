package keeper

import (
	"cosmossdk.io/errors"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
)

func (k Keeper) GetCreditClass(ctx sdk.Context, abbreviation string) (creditClass plasticcredit.CreditClass, found bool) {
	store := k.getCreditClassStore(ctx)

	key := []byte(abbreviation)
	bz := store.Get(key)
	if len(bz) == 0 {
		return plasticcredit.CreditClass{}, false
	}

	k.cdc.MustUnmarshal(bz, &creditClass)

	return creditClass, true
}

func (k Keeper) GetCreditClasses(ctx sdk.Context, pageReq query.PageRequest) ([]plasticcredit.CreditClass, query.PageResponse, error) {
	store := k.getCreditClassStore(ctx)

	var creditClasses []plasticcredit.CreditClass
	pageRes, err := query.Paginate(store, &pageReq, func(_ []byte, value []byte) error {
		var creditClass plasticcredit.CreditClass
		if err := k.cdc.Unmarshal(value, &creditClass); err != nil {
			return err
		}
		creditClasses = append(creditClasses, creditClass)

		return nil
	})
	if err != nil {
		return nil, query.PageResponse{}, err
	}

	return creditClasses, *pageRes, nil
}

func (k Keeper) CreateCreditClass(ctx sdk.Context, creator sdk.AccAddress, abbreviation string, issuerID uint64, name string) error {
	issuer, found := k.GetIssuer(ctx, issuerID)
	if !found {
		return errors.Wrapf(plasticcredit.ErrNotFoundIssuer, "issuer for issue ID %d was not found", issuerID)
	}

	if !issuer.AddressHasAuthorization(creator) {
		return errors.Wrapf(sdkerrors.ErrUnauthorized, "creator %s does not have authorization on issuer with id %d", creator.String(), issuerID)
	}

	_, abbrExists := k.GetCreditClass(ctx, abbreviation)
	if abbrExists {
		return errors.Wrapf(plasticcredit.ErrCreditClassAbbreviationTaken, "the abbreviation %s already exists", abbreviation)
	}

	creditClass := plasticcredit.CreditClass{
		Abbreviation: abbreviation,
		IssuerId:     issuerID,
		Name:         name,
	}

	if err := k.setCreditClass(ctx, creditClass); err != nil {
		return err
	}

	// TODO: Events
	return nil
}

func (k Keeper) UpdateCreditClass(ctx sdk.Context, updater sdk.AccAddress, abbreviation string, issuerID uint64, name string) error {
	issuer, found := k.GetIssuer(ctx, issuerID)
	if !found {
		return errors.Wrapf(plasticcredit.ErrNotFoundIssuer, "issuer for issue ID %d was not found", issuerID)
	}

	if !issuer.AddressHasAuthorization(updater) {
		return errors.Wrapf(sdkerrors.ErrUnauthorized, "creator %s does not have authorization on issuer with id %d", updater.String(), issuerID)
	}

	creditClass, err := k.GetCreditClass(ctx, abbreviation)
	if err {
		return errors.Wrapf(plasticcredit.ErrNotFoundCreditClass, "the abbreviation %s does not exists", abbreviation)
	}

	creditClass.Name = name

	if err := k.setCreditClass(ctx, creditClass); err != nil {
		return err
	}

	// TODO: Events
	return nil
}

func (k Keeper) setCreditClass(ctx sdk.Context, creditClass plasticcredit.CreditClass) error {
	if err := creditClass.Validate(); err != nil {
		return err
	}

	store := k.getCreditClassStore(ctx)

	b, err := k.cdc.Marshal(&creditClass)
	if err != nil {
		return err
	}

	key := []byte(creditClass.Abbreviation)
	store.Set(key, b)

	return nil
}

func (k Keeper) getAllCreditClasses(ctx sdk.Context) []plasticcredit.CreditClass {
	store := k.getCreditClassStore(ctx)

	iterator := store.Iterator(nil, nil)
	defer iterator.Close()

	var creditClasses []plasticcredit.CreditClass
	for ; iterator.Valid(); iterator.Next() {
		var creditClass plasticcredit.CreditClass
		k.cdc.MustUnmarshal(iterator.Value(), &creditClass)
		creditClasses = append(creditClasses, creditClass)
	}

	return creditClasses
}

func (k Keeper) getCreditClassStore(ctx sdk.Context) storetypes.KVStore {
	store := ctx.KVStore(k.storeKey)
	creditClassStore := prefix.NewStore(store, plasticcredit.CreditClassKey)

	return creditClassStore
}
