package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
)

func (k Keeper) GetIssuer(ctx sdk.Context, id uint64) (plasticcredit.Issuer, error) {
	store := k.getIssuerStore(ctx)

	var issuer plasticcredit.Issuer
	key := createKey(id)
	bz := store.Get(key)
	err := k.cdc.Unmarshal(bz, &issuer)

	return issuer, err
}

func (k Keeper) getAllIssuers(ctx sdk.Context) ([]plasticcredit.Issuer, error) {
	store := k.getIssuerStore(ctx)

	iterator := store.Iterator(nil, nil)
	defer iterator.Close()

	var issuers []plasticcredit.Issuer
	for ; iterator.Valid(); iterator.Next() {
		var issuer plasticcredit.Issuer
		if err := k.cdc.Unmarshal(iterator.Value(), &issuer); err != nil {
			return nil, err
		}
		issuers = append(issuers, issuer)
	}

	return issuers, nil
}

func (k Keeper) createIssuer(ctx sdk.Context, name string, description string, admin string) (uint64, error) {
	idc, err := k.GetIDCounters(ctx)
	if err != nil {
		return 0, err
	}

	nextID := idc.NextIssuerId

	issuer := plasticcredit.Issuer{
		Id:          nextID,
		Name:        name,
		Description: description,
		Admin:       admin,
	}

	if err := issuer.Validate(); err != nil {
		return 0, err
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

func (k Keeper) setIssuer(ctx sdk.Context, issuer plasticcredit.Issuer) error {
	store := k.getIssuerStore(ctx)

	b, err := k.cdc.Marshal(&issuer)
	if err != nil {
		return err
	}

	key := createKey(issuer.Id)
	store.Set(key, b)

	return nil
}

func (k Keeper) getIssuerStore(ctx sdk.Context) storetypes.KVStore {
	store := ctx.KVStore(k.storeKey)
	issuerStore := prefix.NewStore(store, plasticcredit.IssuerKey)

	return issuerStore
}

func createKey(id uint64) []byte {
	key := make([]byte, 8)
	binary.LittleEndian.PutUint64(key, id)

	return key
}
