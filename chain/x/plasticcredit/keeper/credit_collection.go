package keeper

import (
	"cosmossdk.io/errors"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
)

func (k Keeper) GetCreditCollection(ctx sdk.Context, denom string) (creditCollection plasticcredit.CreditCollection, found bool, err error) {
	store := k.getCreditCollectionStore(ctx)

	key := plasticcredit.CreateKeyFromString(denom)
	bz := store.Get(key)
	if bz == nil {
		return creditCollection, false, nil
	}
	err = k.cdc.Unmarshal(bz, &creditCollection)

	return creditCollection, true, err
}

func (k Keeper) GetCreditBalance(ctx sdk.Context, owner sdk.AccAddress, denom string) (creditBalance plasticcredit.CreditBalance, found bool, err error) {
	store := k.getCreditBalanceStore(ctx)

	key := plasticcredit.CreateCreditBalanceKey(owner, denom)
	bz := store.Get(key)
	if bz == nil {
		return creditBalance, false, nil
	}
	err = k.cdc.Unmarshal(bz, &creditBalance)

	return creditBalance, true, err
}

func (k Keeper) issueCredits(ctx sdk.Context, projectId uint64, denomSuffix string, amount *plasticcredit.CreditAmount, data []*plasticcredit.ProvenData) error {

	project, found, err := k.GetProject(ctx, projectId)
	if err != nil {
		return err
	}
	if !found {
		return errors.Wrapf(plasticcredit.ErrProjectNotFound, "project with id %d not found", projectId)
	}

	creditClass, found, err := k.GetCreditClass(ctx, project.CreditClassId)
	if err != nil {
		return err
	}
	if !found {
		return errors.Wrapf(plasticcredit.ErrCreditClassNotFound, "credit class with id %d not found", project.CreditClassId)
	}

	collector, found, err := k.GetCollector(ctx, project.CollectorId)
	if err != nil {
		return err
	}
	if !found {
		return errors.Wrapf(plasticcredit.ErrCollectorNotFound, "collector with id %d not found", projectId)
	}

	denom := createCreditDenom(creditClass.Denom, denomSuffix)
	creditCollection, found, err := k.GetCreditCollection(ctx, denom)
	if err != nil {
		return err
	}
	// If collection doesn't exist, create new one
	if !found {
		creditCollection = plasticcredit.CreditCollection{
			ProjectId:   projectId,
			TotalAmount: amount,
			CreditData:  data,
		}
	} else {
		// If collection already exists, add new credits to the total and append new data if present
		creditCollection.TotalAmount.Active += amount.Active
		creditCollection.TotalAmount.Retired += amount.Retired
		if data != nil {
			creditCollection.CreditData = append(creditCollection.CreditData, data...)
		}
	}

	k.setCreditCollection(ctx, denom, creditCollection)

	var recipient sdk.AccAddress
	if collector.CreditRecipient != "" {
		recipient, err = sdk.AccAddressFromBech32(collector.CreditRecipient)
		if err != nil {
			return err
		}
	} else {
		recipient, err = sdk.AccAddressFromBech32(collector.Admin)
		if err != nil {
			return nil
		}
	}

	recipientBalance, found, err := k.GetCreditBalance(ctx, recipient, denom)
	if err != nil {
		return err
	}
	// Recipient doesn't have any credits from collection
	if !found {
		recipientBalance = plasticcredit.CreditBalance{
			Balance: amount,
		}
	} else {
		// Recipient already have credits from collection
		recipientBalance.Balance.Active += amount.Active
		recipientBalance.Balance.Retired += amount.Retired
	}

	err = k.setCreditBalance(ctx, recipient, denom, recipientBalance)
	if err != nil {
		return nil
	}
	return nil
}

func (k Keeper) setCreditCollection(ctx sdk.Context, denom string, creditCollection plasticcredit.CreditCollection) error {
	store := k.getCreditCollectionStore(ctx)

	b, err := k.cdc.Marshal(&creditCollection)
	if err != nil {
		return err
	}

	key := plasticcredit.CreateKeyFromString(denom)
	store.Set(key, b)

	return nil
}

func (k Keeper) setCreditBalance(ctx sdk.Context, owner sdk.AccAddress, denom string, balance plasticcredit.CreditBalance) error {
	store := k.getCreditBalanceStore(ctx)

	b, err := k.cdc.Marshal(&balance)
	if err != nil {
		return err
	}
	key := plasticcredit.CreateCreditBalanceKey(owner, denom)
	store.Set(key, b)

	return nil
}

func (k Keeper) iterateCreditCollections(ctx sdk.Context, handler func(denom string, collection plasticcredit.CreditCollection) bool) {
	store := k.getCreditCollectionStore(ctx)

	iterator := store.Iterator(nil, nil)
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var creditCollection plasticcredit.CreditCollection
		if err := k.cdc.Unmarshal(iterator.Value(), &creditCollection); err != nil {
			panic("Cannot parse credit collection value")
		}
		denom := string(iterator.Key())
		if handler(denom, creditCollection) {
			break
		}
	}
}

func (k Keeper) iterateCreditBalances(ctx sdk.Context, handler func(owner sdk.AccAddress, denom string, balance plasticcredit.CreditBalance) bool) {
	store := k.getCreditBalanceStore(ctx)

	iterator := store.Iterator(nil, nil)
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var creditBalance plasticcredit.CreditBalance
		if err := k.cdc.Unmarshal(iterator.Value(), &creditBalance); err != nil {
			panic("Cannot parse credit balance value")
		}
		owner, denom, err := plasticcredit.ParseCreditBalanceKey(iterator.Key())
		if err != nil {
			panic("Cannot parse credit balance key")
		}
		if handler(owner, denom, creditBalance) {
			break
		}
	}
}

func (k Keeper) getCreditCollectionStore(ctx sdk.Context) storetypes.KVStore {
	store := ctx.KVStore(k.storeKey)
	creditCollectionStore := prefix.NewStore(store, plasticcredit.CreditCollectionKey)

	return creditCollectionStore
}
func (k Keeper) getCreditBalanceStore(ctx sdk.Context) storetypes.KVStore {
	store := ctx.KVStore(k.storeKey)
	creditBalanceStore := prefix.NewStore(store, plasticcredit.CreditBalanceKey)

	return creditBalanceStore
}

func createCreditDenom(creditClassDenom string, creditCollectionSuffix string) string {
	return creditClassDenom + "/" + creditCollectionSuffix
}
