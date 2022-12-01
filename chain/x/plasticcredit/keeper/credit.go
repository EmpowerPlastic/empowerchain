package keeper

import (
	"cosmossdk.io/errors"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
)

func (k Keeper) GetCreditCollection(ctx sdk.Context, denom string) (plasticcredit.CreditCollection, bool) {
	store := k.getCreditCollectionStore(ctx)

	key := plasticcredit.CreateKeyFromString(denom)
	bz := store.Get(key)
	if bz == nil {
		return plasticcredit.CreditCollection{}, false
	}
	var creditCollection plasticcredit.CreditCollection
	k.cdc.MustUnmarshal(bz, &creditCollection)

	return creditCollection, true
}

func (k Keeper) GetCreditBalance(ctx sdk.Context, owner sdk.AccAddress, denom string) (plasticcredit.CreditBalance, bool) {
	store := k.getCreditBalanceStore(ctx)

	key := plasticcredit.CreateCreditBalanceKey(owner, denom)
	bz := store.Get(key)
	if bz == nil {
		return plasticcredit.CreditBalance{}, false
	}
	var creditBalance plasticcredit.CreditBalance
	k.cdc.MustUnmarshal(bz, &creditBalance)

	return creditBalance, true
}

func (k Keeper) retireCreditsForAddress(ctx sdk.Context, owner sdk.AccAddress, denom string, amount uint64) (*plasticcredit.CreditAmount, error) {
	creditBalance, found := k.GetCreditBalance(ctx, owner, denom)
	if !found {
		return &plasticcredit.CreditAmount{}, errors.Wrapf(plasticcredit.ErrNotEnoughCredits, "user %s doesn't have credits of denom %s", owner.String(), denom)
	}
	if creditBalance.Balance.Active < amount {
		return &plasticcredit.CreditAmount{}, errors.Wrapf(plasticcredit.ErrNotEnoughActiveCredits, "user %s has only %d credits", owner.String(), amount)
	}
	creditBalance.Balance.Active -= amount
	creditBalance.Balance.Retired += amount

	err := k.setCreditBalance(ctx, owner, denom, creditBalance)
	if err != nil {
		return &plasticcredit.CreditAmount{}, err
	}

	err = k.retireCreditsInCollection(ctx, denom, amount)
	if err != nil {
		return &plasticcredit.CreditAmount{}, err
	}

	return creditBalance.Balance, nil

}

func (k Keeper) retireCreditsInCollection(ctx sdk.Context, denom string, amount uint64) error {
	creditCollection, found := k.GetCreditCollection(ctx, denom)
	if !found {
		return errors.Wrapf(plasticcredit.ErrCreditCollectionNotFound, "credit collection with denom %s not found", denom)
	}
	if creditCollection.TotalAmount.Active < amount {
		return errors.Wrapf(plasticcredit.ErrNotEnoughActiveCredits, "only %d credits active for denom %s", amount, denom)
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
		err := k.retireCreditsInCollection(ctx, denom, amount)
		if err != nil {
			return err
		}
		balanceRecipient.Balance.Retired += amount
	} else {
		balanceRecipient.Balance.Active += amount
	}
	err := k.setCreditBalance(ctx, from, denom, balanceSender)
	if err != nil {
		return err
	}
	err = k.setCreditBalance(ctx, to, denom, balanceRecipient)
	if err != nil {
		return err
	}
	// TODO event transfer
	return nil
}

func (k Keeper) issueCredits(ctx sdk.Context, creator string, projectId uint64, denomSuffix string, amount *plasticcredit.CreditAmount, data []*plasticcredit.ProvenData) (denom string, totalAmount plasticcredit.CreditAmount, err error) {

	project, found := k.GetProject(ctx, projectId)
	if !found {
		return "", totalAmount, errors.Wrapf(plasticcredit.ErrProjectNotFound, "project with id %d not found", projectId)
	}

	creditClass, found := k.GetCreditClass(ctx, project.CreditClassId)
	if !found {
		return "", totalAmount, errors.Wrapf(plasticcredit.ErrCreditClassNotFound, "credit class with id %d not found", project.CreditClassId)
	}

	issuer, found := k.GetIssuer(ctx, creditClass.IssuerId)
	if !found {
		return "", totalAmount, errors.Wrapf(plasticcredit.ErrIssuerNotFound, "issuer with id %d not found", creditClass.IssuerId)
	}
	// Check if creator is issuer admin
	if issuer.Admin != creator {
		return "", totalAmount, errors.Wrapf(plasticcredit.ErrNotIssuer, "%s is not allowed to issue credits for class with id %d", creator, creditClass.CreditClassId)
	}

	applicant, found := k.GetApplicant(ctx, project.ApplicantId)
	if !found {
		return "", totalAmount, errors.Wrapf(plasticcredit.ErrApplicantNotFound, "applicant with id %d not found", project.ApplicantId)
	}

	denom = createCreditDenom(creditClass.Denom, denomSuffix)
	creditCollection, found := k.GetCreditCollection(ctx, denom)
	// If collection doesn't exist, create a new one
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
	recipient, err = sdk.AccAddressFromBech32(applicant.Admin)
	if err != nil {
		return "", totalAmount, err
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
		return "", totalAmount, err
	}
	// TODO event issued credits
	return denom, *creditCollection.TotalAmount, nil
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

func (k Keeper) getAllCreditCollections(ctx sdk.Context) []*plasticcredit.IDCreditCollection {
	store := k.getCreditCollectionStore(ctx)

	iterator := store.Iterator(nil, nil)
	defer iterator.Close()

	var creditCollections []*plasticcredit.IDCreditCollection
	for ; iterator.Valid(); iterator.Next() {
		var creditCollection plasticcredit.CreditCollection
		k.cdc.MustUnmarshal(iterator.Value(), &creditCollection)
		denom := string(iterator.Key())
		creditCollections = append(creditCollections, &plasticcredit.IDCreditCollection{
			Denom:            denom,
			CreditCollection: &creditCollection,
		})
	}
	return creditCollections
}

func (k Keeper) getAllCreditBalances(ctx sdk.Context) []*plasticcredit.IDCreditBalance {
	store := k.getCreditBalanceStore(ctx)

	iterator := store.Iterator(nil, nil)
	defer iterator.Close()

	var creditBalances []*plasticcredit.IDCreditBalance
	for ; iterator.Valid(); iterator.Next() {
		var creditBalance plasticcredit.CreditBalance
		k.cdc.MustUnmarshal(iterator.Value(), &creditBalance)
		owner, denom, err := plasticcredit.ParseCreditBalanceKey(iterator.Key())
		if err != nil {
			panic("Cannot parse credit balance key")
		}
		creditBalances = append(creditBalances, &plasticcredit.IDCreditBalance{
			Owner:         owner.String(),
			Denom:         denom,
			CreditBalance: &creditBalance,
		})
	}
	return creditBalances
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
