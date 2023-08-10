package keeper

import (
	"fmt"
	"strings"

	"cosmossdk.io/errors"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/cosmos/gogoproto/proto"
	"golang.org/x/exp/slices"

	"github.com/EmpowerPlastic/empowerchain/utils"
	"github.com/EmpowerPlastic/empowerchain/x/certificates"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
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

func (k Keeper) GetCreditBalances(ctx sdk.Context, pageReq query.PageRequest) ([]plasticcredit.CreditBalance, query.PageResponse, error) {
	store := k.getCreditBalanceStore(ctx)

	var creditBalances []plasticcredit.CreditBalance
	pageRes, err := query.Paginate(store, &pageReq, func(_ []byte, value []byte) error {
		var creditBalance plasticcredit.CreditBalance
		if err := k.cdc.Unmarshal(value, &creditBalance); err != nil {
			return err
		}
		creditBalances = append(creditBalances, creditBalance)

		return nil
	})
	if err != nil {
		return nil, query.PageResponse{}, err
	}

	return creditBalances, *pageRes, nil
}

func (k Keeper) createCreditRetirmentCertificate(
	ctx sdk.Context,
	owner sdk.AccAddress,
	denom string,
	amount uint64,
	retiringEntityName string,
	retiringEntityAdditionalData string,
) error {
	certificatesAdditionalData := []*certificates.AdditionalData{
		{Key: "denom", Value: denom},
		{Key: "amount", Value: fmt.Sprint(amount)},
		{Key: "retiring_entity_address", Value: owner.String()},
		{Key: "retiring_entity_name", Value: retiringEntityName},
		{Key: "retiring_entity_additional_data", Value: retiringEntityAdditionalData},
	}
	abbrev, _ := SplitCreditDenom(denom)
	creditType, found := k.GetCreditType(ctx, abbrev)
	if !found {
		return errors.Wrapf(plasticcredit.ErrCreditTypeNotFound, "credit type with abbrev %s not found", abbrev)
	}
	issuer, found := k.GetIssuer(ctx, creditType.IssuerId)
	if !found {
		return errors.Wrapf(plasticcredit.ErrIssuerNotFound, "issuer with id %d not found", creditType.IssuerId)
	}
	certificate := certificates.MsgCreateCertificate{
		Owner:          owner.String(),
		Issuer:         issuer.Admin,
		Type:           0,
		AdditionalData: certificatesAdditionalData,
	}
	_, err := k.certificatesKeeper.CreateCertificateSkipAllowedIssuers(ctx, &certificate)
	if err != nil {
		return errors.Wrapf(plasticcredit.ErrFailedCreateCertificate,
			"unable to create certificate for owner %s for issuer %s",
			owner.String(), issuer.Admin,
		)
	}
	return nil
}

func (k Keeper) retireCreditsForAddress(
	ctx sdk.Context,
	ownerAccAddress string,
	denom string, amount uint64,
	retiringEntityName string,
	retiringEntityAdditionalData string,
) (plasticcredit.CreditBalance, error) {
	owner, err := sdk.AccAddressFromBech32(ownerAccAddress)
	if err != nil {
		return plasticcredit.CreditBalance{}, sdkerrors.ErrInvalidAddress
	}
	creditBalance, found := k.GetCreditBalance(ctx, owner, denom)
	if !found {
		return plasticcredit.CreditBalance{}, errors.Wrapf(plasticcredit.ErrCreditsNotEnough, "user %s doesn't have credits of denom %s", owner.String(), denom)
	}
	if creditBalance.Balance.Active < amount {
		return plasticcredit.CreditBalance{}, errors.Wrapf(plasticcredit.ErrActiveCreditsNotEnough, "user %s has only %d credits", owner.String(), amount)
	}
	creditBalance.Balance.Active -= amount
	creditBalance.Balance.Retired += amount

	err = k.setCreditBalance(ctx, creditBalance)
	if err != nil {
		return plasticcredit.CreditBalance{}, err
	}

	err = k.retireCreditsInCollection(ctx, denom, amount)
	if err != nil {
		return plasticcredit.CreditBalance{}, err
	}
	abbrev, _ := SplitCreditDenom(denom)
	creditType, found := k.GetCreditType(ctx, abbrev)
	if !found {
		return plasticcredit.CreditBalance{}, errors.Wrapf(plasticcredit.ErrCreditTypeNotFound, "credit type with abbrev %s not found", abbrev)
	}

	err = k.createCreditRetirmentCertificate(ctx, owner, denom, amount, retiringEntityName, retiringEntityAdditionalData)
	if err != nil {
		return creditBalance, errors.Wrapf(plasticcredit.ErrFailedCreateCertificate,
			"unable to create certificate for owner %s for issuer %d",
			owner.String(), &creditType.IssuerId,
		)
	}
	return creditBalance, ctx.EventManager().EmitTypedEvent(&plasticcredit.EventRetiredCredits{
		Owner:                  owner.String(),
		Denom:                  denom,
		Amount:                 amount,
		IssuerId:               creditType.IssuerId,
		CreditTypeAbbreviation: abbrev,
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

func (k Keeper) transferCredits(
	ctx sdk.Context,
	denom string,
	from sdk.AccAddress,
	to sdk.AccAddress,
	amount uint64,
	retire bool,
	retiringEntityName string,
	retiringEntityAdditionalData string,
) error {
	balanceSender, found := k.GetCreditBalance(ctx, from, denom)
	if !found {
		return errors.Wrapf(plasticcredit.ErrCreditBalanceNotFound, "no balance for denom %s and address %s found", denom, from)
	}
	// Check if sender has enough credits
	if balanceSender.Balance.Active < amount {
		return errors.Wrapf(plasticcredit.ErrCreditsNotEnough, "sender only has %d credits of denom %s", balanceSender.Balance.Active, denom)
	}

	if from.Equals(to) {
		return errors.Wrapf(plasticcredit.ErrSameSenderAndRecipient, "sender and recipient are the same")
	}

	balanceRecipient, found := k.GetCreditBalance(ctx, to, denom)
	if !found {
		// Create a new, empty one if not found
		balanceRecipient = plasticcredit.CreditBalance{
			Owner: to.String(),
			Denom: denom,
			Balance: plasticcredit.CreditAmount{
				Active:  0,
				Retired: 0,
			},
		}
	}
	balanceSender.Balance.Active -= amount

	// If retiring credits, retire and update retired balance, if not, update active balance
	if retire {
		if err := k.retireCreditsInCollection(ctx, denom, amount); err != nil {
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

	err = k.setCreditBalance(ctx, balanceRecipient)
	if err != nil {
		return err
	}

	abbrev, _ := SplitCreditDenom(denom)
	creditType, found := k.GetCreditType(ctx, abbrev)
	if !found {
		return errors.Wrapf(plasticcredit.ErrCreditTypeNotFound, "credit type with abbrev %s not found", abbrev)
	}
	events := []proto.Message{
		&plasticcredit.EventTransferCredits{
			Sender:                 from.String(),
			Recipient:              to.String(),
			Denom:                  denom,
			Amount:                 amount,
			IssuerId:               creditType.IssuerId,
			CreditTypeAbbreviation: abbrev,
		},
	}
	if retire {
		err = k.createCreditRetirmentCertificate(ctx, to, denom, amount, retiringEntityName, retiringEntityAdditionalData)
		if err != nil {
			return errors.Wrapf(plasticcredit.ErrFailedCreateCertificate,
				"unable to create certificate for owner %s for issuer %d",
				to.String(), &creditType.IssuerId,
			)
		}
		events = append(events, &plasticcredit.EventRetiredCredits{
			Owner:                  to.String(),
			Denom:                  denom,
			Amount:                 amount,
			IssuerId:               creditType.IssuerId,
			CreditTypeAbbreviation: abbrev,
		})
	}
	return ctx.EventManager().EmitTypedEvents(events...)
}

func (k Keeper) issueCredits(ctx sdk.Context, creator string, projectID uint64, serialNumber string, amount uint64, metadataUris []string) (collection plasticcredit.CreditCollection, err error) {
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

	creditType, found := k.GetCreditType(ctx, project.CreditTypeAbbreviation)
	if !found {
		return plasticcredit.CreditCollection{}, errors.Wrapf(plasticcredit.ErrCreditTypeNotFound, "credit type with abbreviation %s not found", project.CreditTypeAbbreviation)
	}

	issuer, found := k.GetIssuer(ctx, creditType.IssuerId)
	if !found {
		return plasticcredit.CreditCollection{}, errors.Wrapf(plasticcredit.ErrIssuerNotFound, "issuer with id %d not found", creditType.IssuerId)
	}
	// Check if creator is issuer admin
	if issuer.Admin != creator {
		return plasticcredit.CreditCollection{}, errors.Wrapf(plasticcredit.ErrIssuerNotAllowed, "%s is not allowed to issue credits for type with abbreviation %s", creator, creditType.Abbreviation)
	}

	applicant, found := k.GetApplicant(ctx, project.ApplicantId)
	if !found {
		return plasticcredit.CreditCollection{}, errors.Wrapf(plasticcredit.ErrApplicantNotFound, "applicant with id %d not found", project.ApplicantId)
	}

	denom, err := CreateCreditDenom(creditType.Abbreviation, serialNumber)
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
			MetadataUris: metadataUris,
		}
	} else {
		// If collection already exists, add new credits to the total and append new data if present
		creditCollection.TotalAmount.Active += amount
		// avoid adding duplicate metadata uris
		for _, uri := range metadataUris {
			if !slices.Contains(creditCollection.MetadataUris, uri) {
				creditCollection.MetadataUris = append(creditCollection.MetadataUris, uri)
			}
		}
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
		IssuerId:               issuer.Id,
		ProjectId:              projectID,
		ApplicantId:            applicant.Id,
		Recipient:              recipient.String(),
		CreditTypeAbbreviation: creditType.Abbreviation,
		Denom:                  denom,
		Amount:                 amount,
		IssuerAddress:          creator,
		MetadataUris:           metadataUris,
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

func CreateCreditDenom(creditTypeAbbreviation string, serialNumber string) (string, error) {
	if creditTypeAbbreviation == "" || serialNumber == "" {
		return "", errors.Wrap(utils.ErrInvalidValue, "empty denom part")
	}
	return creditTypeAbbreviation + "/" + serialNumber, nil
}

func SplitCreditDenom(denom string) (creditTypeAbbreviation string, serialNumber string) {
	delimIndex := strings.Index(denom, "/")
	return denom[:delimIndex], denom[delimIndex:]
}
