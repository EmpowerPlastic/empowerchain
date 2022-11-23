package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

type PermStore struct {
	cdc  codec.BinaryCodec
	key  storetypes.StoreKey
	name []byte
}

func NewPermStore(cdc codec.BinaryCodec, key storetypes.StoreKey, name string) PermStore {
	return PermStore{
		cdc:  cdc,
		key:  key,
		name: []byte(name),
	}
}

func (ps PermStore) HasAccess(ctx sdk.Context, account sdk.AccAddress, msgType string) bool {
	store := ps.kvStore(ctx)
	key := PermissionStoreKey(account, msgType)

	return store.Has(key)
}

func (ps PermStore) GrantAccess(ctx sdk.Context, account sdk.AccAddress, msgType string) {
	store := ps.kvStore(ctx)
	key := PermissionStoreKey(account, msgType)

	b := ps.cdc.MustMarshal(&Permission{})
	store.Set(key, b)
}

func (ps PermStore) RevokeAccess(ctx sdk.Context, account sdk.AccAddress, msgType string) {
	store := ps.kvStore(ctx)
	key := PermissionStoreKey(account, msgType)

	store.Delete(key)
}

func (ps PermStore) Name() string {
	return string(ps.name)
}

// Should be used only for genesis export!
func (ps PermStore) IteratePermissions(ctx sdk.Context,
	handler func(address sdk.AccAddress, msgType string) bool,
) {
	iter := ps.permissionIterator(ctx)
	defer iter.Close()
	for ; iter.Valid(); iter.Next() {
		account, msgType, err := ParsePermissionStoreKey(iter.Key())
		if err != nil {
			panic("Cannot parse perm store key")
		}
		if handler(account, msgType) {
			break
		}
	}
}

func (ps PermStore) permissionIterator(ctx sdk.Context) sdk.Iterator {
	store := ctx.KVStore(ps.key)
	return sdk.KVStorePrefixIterator(store, append(ps.name, '/'))
}

func (ps PermStore) kvStore(ctx sdk.Context) sdk.KVStore {
	return prefix.NewStore(ctx.KVStore(ps.key), append(ps.name, '/'))
}
