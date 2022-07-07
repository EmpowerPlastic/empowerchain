package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/empowerchain/empowerchain/x/proofofexistence/types"
)

// CreateStoredProof set a specific storedProof in the store from its hash
func (k Keeper) CreateStoredProof(ctx sdk.Context, storedProof types.StoredProof) error {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredProofKeyPrefix))
	b := k.cdc.MustMarshal(&storedProof)

	key := types.StoredProofKey(
		storedProof.Hash,
	)
	if store.Has(key) {
		return sdkerrors.Wrap(types.ErrHashExists, storedProof.Hash)
	}
	store.Set(key, b)

	return nil
}

// SetStoredProof set a specific storedProof in the store from its index
func (k Keeper) SetStoredProof(ctx sdk.Context, storedProof types.StoredProof) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredProofKeyPrefix))
	b := k.cdc.MustMarshal(&storedProof)
	store.Set(types.StoredProofKey(
		storedProof.Hash,
	), b)
}

// GetStoredProof returns a storedProof from its index
func (k Keeper) GetStoredProof(
	ctx sdk.Context,
	hash string,

) (val types.StoredProof, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredProofKeyPrefix))

	b := store.Get(types.StoredProofKey(
		hash,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// GetAllStoredProof returns all storedProof
func (k Keeper) GetAllStoredProof(ctx sdk.Context) (list []types.StoredProof) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredProofKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.StoredProof
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
