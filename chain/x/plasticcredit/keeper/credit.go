package keeper

import (
	"cosmossdk.io/errors"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
)

func (k Keeper) GetCreditCollection(ctx sdk.Context, denom string) (creditCollection plasticcredit.CreditCollection, found bool) {
	store := k.getCreditCollectionStore(ctx)

	key := plasticcredit.CreateKeyFromString(denom)
	bz := store.Get(key)
	if bz == nil {
		return creditCollection, false
	}
	k.cdc.MustUnmarshal(bz, &creditCollection)

	return creditCollection, true
}

func (k Keeper) GetCreditBalance(ctx sdk.Context, owner sdk.AccAddress, denom string) (creditBalance plasticcredit.CreditBalance, found bool) {
	store := k.getCreditBalanceStore(ctx)

	key := plasticcredit.CreateCreditBalanceKey(owner, denom)
	bz := store.Get(key)
	if bz == nil {
		return creditBalance, false
	}
	k.cdc.MustUnmarshal(bz, &creditBalance)

	return creditBalance, true
}

func (k Keeper) retireCredits(ctx sdk.Context, denom string, amount uint64) error {
	creditCollection, found := k.GetCreditCollection(ctx, denom)
	if !found {
		return errors.Wrapf(plasticcredit.ErrCreditCollectionNotFound, "credit collection with denom %d not found", denom)
	}
	if creditCollection.TotalAmount.Active < amount {
		return errors.Wrapf(plasticcredit.ErrNotEnoughActiveCredits, "only %d credits active for denom %d", amount, denom)
	}
	creditCollection.TotalAmount.Active -= amount
	creditCollection.TotalAmount.Retired += amount

	err := k.setCreditCollection(ctx, denom, creditCollection)
	if err != nil {
		return err
	}
	// TODO event retire
	return nil
}

func (k Keeper) transferCredits(ctx sdk.Context, denom string, from sdk.AccAddress, to sdk.AccAddress, amount uint64, retire bool) error {

	balanceSender, found := k.GetCreditBalance(ctx, from, denom)
	if !found {
		return errors.Wrapf(plasticcredit.ErrCreaditBalanceNotFound, "no balance for denom %s and address %s found", denom, from)
	}
	// Check if sender has enough credits
	if balanceSender.Balance.Active < amount {
		return errors.Wrapf(plasticcredit.ErrNotEnoughCredits, "sender only has %d credits of denom %s", balanceSender.Balance.Active, denom)
	}

	balanceRecipient, found := k.GetCreditBalance(ctx, to, denom)
	if !found {
		balanceRecipient = plasticcredit.CreditBalance{
			Balance: &plasticcredit.CreditAmount{
				Active:  0,
				Retired: 0,
			},
		}
	}
	balanceSender.Balance.Active -= amount
	// If retiring credits, retire and update retired balance, if not, update active balance
	if retire {
		err := k.retireCredits(ctx, denom, amount)
		if err != nil {
			return err
		}
		balanceRecipient.Balance.Retired += amount
	} else {
		balanceRecipient.Balance.Active += amount
	}
	// TODO event transfer
	return nil
}

func (k Keeper) issueCredits(ctx sdk.Context, creator string, projectId uint64, denomSuffix string, amount *plasticcredit.CreditAmount, data []*plasticcredit.ProvenData) error {

	project, found := k.GetProject(ctx, projectId)
	if !found {
		return errors.Wrapf(plasticcredit.ErrProjectNotFound, "project with id %d not found", projectId)
	}

	creditClass, found := k.GetCreditClass(ctx, project.CreditClassId)
	if !found {
		return errors.Wrapf(plasticcredit.ErrCreditClassNotFound, "credit class with id %d not found", project.CreditClassId)
	}

	issuer, found := k.GetIssuer(ctx, creditClass.IssuerId)
	if !found {
		return errors.Wrapf(plasticcredit.ErrIssuerNotFound, "issuer with id %d not found", creditClass.IssuerId)
	}
	// Check if creator is issuer admin
	if issuer.Admin != creator {
		return errors.Wrapf(plasticcredit.ErrNotIssuer, "%s is not allowed to issue credits for class with id %d", creator, creditClass.CreditClassId)
	}

	applicant, found := k.GetApplicant(ctx, project.ApplicantId)
	if !found {
		return errors.Wrapf(plasticcredit.ErrApplicantNotFound, "applicant with id %d not found", project.ApplicantId)
	}

	denom := createCreditDenom(creditClass.Denom, denomSuffix)
	creditCollection, found := k.GetCreditCollection(ctx, denom)
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

	// Use credit recipient or admin if recipient is absent
	var recipient sdk.AccAddress
	var err error
	if applicant.CreditRecipient != "" {
		recipient, err = sdk.AccAddressFromBech32(applicant.CreditRecipient)
		if err != nil {
			return err
		}
	} else {
		recipient, err = sdk.AccAddressFromBech32(applicant.Admin)
		if err != nil {
			return nil
		}
	}

	recipientBalance, found := k.GetCreditBalance(ctx, recipient, denom)
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
	// TODO event issued credits
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
		k.cdc.MustUnmarshal(iterator.Value(), &creditCollection)
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
		k.cdc.MustUnmarshal(iterator.Value(), &creditBalance)
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
