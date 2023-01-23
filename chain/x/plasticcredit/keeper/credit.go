package keeper

import (
	"github.com/cosmos/gogoproto/proto"
	"strings"

	"cosmossdk.io/errors"
	"github.com/EmpowerPlastic/empowerchain/utils"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
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

func (k Keeper) retireCreditsForAddress(ctx sdk.Context, owner sdk.AccAddress, denom string, amount uint64) (plasticcredit.CreditBalance, error) {
	creditBalance, found := k.GetCreditBalance(ctx, owner, denom)
	if !found {
		return plasticcredit.CreditBalance{}, errors.Wrapf(plasticcredit.ErrCreditsNotEnough, "user %s doesn't have credits of denom %s", owner.String(), denom)
	}
	if creditBalance.Balance.Active < amount {
		return plasticcredit.CreditBalance{}, errors.Wrapf(plasticcredit.ErrActiveCreditsNotEnough, "user %s has only %d credits", owner.String(), amount)
	}
	creditBalance.Balance.Active -= amount
	creditBalance.Balance.Retired += amount

	err := k.setCreditBalance(ctx, creditBalance)
	if err != nil {
		return plasticcredit.CreditBalance{}, err
	}

	err = k.retireCreditsInCollection(ctx, denom, amount)
	if err != nil {
		return plasticcredit.CreditBalance{}, err
	}
	abbrev, _ := SplitCreditDenom(denom)
	creditClass, found := k.GetCreditClass(ctx, abbrev)
	if !found {
		return plasticcredit.CreditBalance{}, errors.Wrapf(plasticcredit.ErrCreditClassNotFound, "credit class with abbrev %s not found", abbrev)
	}
	return creditBalance, ctx.EventManager().EmitTypedEvent(&plasticcredit.EventRetiredCredits{
		Owner:                   owner.String(),
		Denom:                   denom,
		Amount:                  amount,
		IssuerId:                creditClass.IssuerId,
		CreditClassAbbreviation: abbrev,
	})
}

func (k Keeper) retireCreditsInCollection(ctx sdk.Context, denom string, amount uint64) error {
	creditCollection, found := k.GetCreditCollection(ctx, denom)
	if !found {
		return errors.Wrapf(plasticcredit.ErrCreditCollectionNotFound, "credit collection with denom %s not found", denom)
	}
	if creditCollection.TotalAmount.Active < amount {
		return errors.Wrapf(plasticcredit.ErrActiveCreditsNotEnough, "only %d credits active for denom %s", amount, denom)
	}
	creditCollection.TotalAmount.Active -= amount
	creditCollection.TotalAmount.Retired += amount

	err := k.setCreditCollection(ctx, creditCollection)
	if err != nil {
		return err
	}
	return nil
}

func (k Keeper) transferCredits(ctx sdk.Context, denom string, from sdk.AccAddress, to sdk.AccAddress, amount uint64, retire bool) error {
	balanceSender, found := k.GetCreditBalance(ctx, from, denom)
	if !found {
		return errors.Wrapf(plasticcredit.ErrCreditBalanceNotFound, "no balance for denom %s and address %s found", denom, from)
	}
	// Check if sender has enough credits
	if balanceSender.Balance.Active < amount {
		return errors.Wrapf(plasticcredit.ErrCreditsNotEnough, "sender only has %d credits of denom %s", balanceSender.Balance.Active, denom)
	}

	var balanceRecipient *plasticcredit.CreditBalance
	if from.Equals(to) {
		balanceRecipient = &balanceSender
	} else {
		rec, found := k.GetCreditBalance(ctx, to, denom)
		if !found {
			rec = plasticcredit.CreditBalance{
				Owner: to.String(),
				Denom: denom,
				Balance: plasticcredit.CreditAmount{
					Active:  0,
					Retired: 0,
				},
			}
		}
		balanceRecipient = &rec
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
	err := k.setCreditBalance(ctx, balanceSender)
	if err != nil {
		return err
	}
	err = k.setCreditBalance(ctx, *balanceRecipient)
	if err != nil {
		return err
	}
	abbrev, _ := SplitCreditDenom(denom)
	creditClass, found := k.GetCreditClass(ctx, abbrev)
	if !found {
		return errors.Wrapf(plasticcredit.ErrCreditClassNotFound, "credit class with abbrev %s not found", abbrev)
	}
	events := []proto.Message{
		&plasticcredit.EventTransferCredits{
			Sender:                  from.String(),
			Recipient:               to.String(),
			Denom:                   denom,
			Amount:                  amount,
			IssuerId:                creditClass.IssuerId,
			CreditClassAbbreviation: abbrev,
		},
	}
	if retire {
		events = append(events, &plasticcredit.EventRetiredCredits{
			Owner:                   to.String(),
			Denom:                   denom,
			Amount:                  amount,
			IssuerId:                creditClass.IssuerId,
			CreditClassAbbreviation: abbrev,
		})
	}
	return ctx.EventManager().EmitTypedEvents(events...)
}

func (k Keeper) issueCredits(ctx sdk.Context, creator string, projectID uint64, serialNumber string, amount uint64) (collection plasticcredit.CreditCollection, err error) {
	if amount == 0 {
		return plasticcredit.CreditCollection{}, errors.Wrapf(utils.ErrInvalidValue, "cannot issue 0 credits")
	}
	project, found := k.GetProject(ctx, projectID)
	if !found {
		return plasticcredit.CreditCollection{}, errors.Wrapf(plasticcredit.ErrProjectNotFound, "project with id %d not found", projectID)
	}

	if project.Status != plasticcredit.ProjectStatus_APPROVED {
		return plasticcredit.CreditCollection{}, errors.Wrapf(plasticcredit.ErrProjectNotApproved, "project with id %d is not in approved state", projectID)
	}

	creditClass, found := k.GetCreditClass(ctx, project.CreditClassAbbreviation)
	if !found {
		return plasticcredit.CreditCollection{}, errors.Wrapf(plasticcredit.ErrCreditClassNotFound, "credit class with abbreviation %s not found", project.CreditClassAbbreviation)
	}

	issuer, found := k.GetIssuer(ctx, creditClass.IssuerId)
	if !found {
		return plasticcredit.CreditCollection{}, errors.Wrapf(plasticcredit.ErrIssuerNotFound, "issuer with id %d not found", creditClass.IssuerId)
	}
	// Check if creator is issuer admin
	if issuer.Admin != creator {
		return plasticcredit.CreditCollection{}, errors.Wrapf(plasticcredit.ErrIssuerNotAllowed, "%s is not allowed to issue credits for class with abbreviation %s", creator, creditClass.Abbreviation)
	}

	applicant, found := k.GetApplicant(ctx, project.ApplicantId)
	if !found {
		return plasticcredit.CreditCollection{}, errors.Wrapf(plasticcredit.ErrApplicantNotFound, "applicant with id %d not found", project.ApplicantId)
	}

	denom, err := CreateCreditDenom(creditClass.Abbreviation, serialNumber)
	if err != nil {
		return plasticcredit.CreditCollection{}, err
	}
	creditCollection, found := k.GetCreditCollection(ctx, denom)
	// If collection doesn't exist, create a new one
	if !found {
		creditCollection = plasticcredit.CreditCollection{
			Denom:     denom,
			ProjectId: projectID,
			TotalAmount: plasticcredit.CreditAmount{
				Active:  amount,
				Retired: 0,
			},
		}
	} else {
		// If collection already exists, add new credits to the total and append new data if present
		creditCollection.TotalAmount.Active += amount
	}

	err = k.setCreditCollection(ctx, creditCollection)
	if err != nil {
		return plasticcredit.CreditCollection{}, err
	}

	var recipient sdk.AccAddress
	recipient, err = sdk.AccAddressFromBech32(applicant.Admin)
	if err != nil {
		return plasticcredit.CreditCollection{}, err
	}

	recipientBalance, found := k.GetCreditBalance(ctx, recipient, denom)
	// Recipient doesn't have any credits from collection
	if !found {
		recipientBalance = plasticcredit.CreditBalance{
			Owner: recipient.String(),
			Denom: denom,
			Balance: plasticcredit.CreditAmount{
				Active:  amount,
				Retired: 0,
			},
		}
	} else {
		// Recipient already have credits from collection
		recipientBalance.Balance.Active += amount
	}

	err = k.setCreditBalance(ctx, recipientBalance)
	if err != nil {
		return plasticcredit.CreditCollection{}, err
	}
	return creditCollection, ctx.EventManager().EmitTypedEvent(&plasticcredit.EventIssuedCredits{
		IssuerId:                issuer.Id,
		ProjectId:               projectID,
		CreditClassAbbreviation: creditClass.Abbreviation,
		Denom:                   denom,
		Amount:                  amount,
		IssuerAddress:           creator,
	})
}

func (k Keeper) setCreditCollection(ctx sdk.Context, creditCollection plasticcredit.CreditCollection) error {
	err := creditCollection.Validate()
	if err != nil {
		return err
	}
	store := k.getCreditCollectionStore(ctx)

	b, err := k.cdc.Marshal(&creditCollection)
	if err != nil {
		return err
	}

	key := plasticcredit.CreateKeyFromString(creditCollection.Denom)
	store.Set(key, b)

	return nil
}

func (k Keeper) setCreditBalance(ctx sdk.Context, balance plasticcredit.CreditBalance) error {
	err := balance.Validate()
	if err != nil {
		return err
	}
	store := k.getCreditBalanceStore(ctx)

	b, err := k.cdc.Marshal(&balance)
	if err != nil {
		return err
	}
	owner, err := sdk.AccAddressFromBech32(balance.Owner)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	key := plasticcredit.CreateCreditBalanceKey(owner, balance.Denom)
	store.Set(key, b)

	return nil
}

func (k Keeper) IterateCreditCollections(ctx sdk.Context, handler func(creditCollection plasticcredit.CreditCollection)) {
	store := k.getCreditCollectionStore(ctx)

	iterator := store.Iterator(nil, nil)
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var creditCollection plasticcredit.CreditCollection
		k.cdc.MustUnmarshal(iterator.Value(), &creditCollection)
		handler(creditCollection)
	}
}

func (k Keeper) IterateCreditBalances(ctx sdk.Context, handler func(creditBalance plasticcredit.CreditBalance)) {
	store := k.getCreditBalanceStore(ctx)

	iterator := store.Iterator(nil, nil)
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var creditBalance plasticcredit.CreditBalance
		k.cdc.MustUnmarshal(iterator.Value(), &creditBalance)
		handler(creditBalance)
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

func CreateCreditDenom(creditClassAbbreviation string, serialNumber string) (string, error) {
	if creditClassAbbreviation == "" || serialNumber == "" {
		return "", errors.Wrap(utils.ErrInvalidValue, "empty denom part")
	}
	return creditClassAbbreviation + "/" + serialNumber, nil
}

func SplitCreditDenom(denom string) (creditClassAbbreviation string, serialNumber string) {
	delimIndex := strings.Index(denom, "/")
	return denom[:delimIndex], denom[delimIndex:]
}
