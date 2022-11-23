package types

import (
	"bytes"

	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/address"
	"github.com/cosmos/cosmos-sdk/types/kv"
)

var (
	PermissionKey = []byte{0x01}
)

func permissionStoreKey(account sdk.AccAddress, msgType string) []byte {
	m := []byte(msgType)
	account = address.MustLengthPrefix(account)
	key := sdk.AppendLengthPrefixedBytes(PermissionKey, account, m)

	return key
}

func parsePermissionStoreKey(key []byte) (account sdk.AccAddress, msgType string, err error) {
	accountLenStartIndex := bytes.IndexByte(key, 0x01) + 1
	accountLen, accountLenEndIndex := sdk.ParseLengthPrefixedBytes(key, accountLenStartIndex, 1)
	accountAddr, accountAddrEndIndex := sdk.ParseLengthPrefixedBytes(key, accountLenEndIndex+1, int(accountLen[0]))
	kv.AssertKeyAtLeastLength(key, accountAddrEndIndex+1)
	accountAddr, err = sdk.AccAddressFromBech32(string(accountAddr))
	if err != nil {
		return nil, "", err
	}

	return accountAddr, string(key[(accountAddrEndIndex + 1):]), nil
}

type PermStore struct {
	cdc  codec.BinaryCodec
	key  storetypes.StoreKey
	name []byte
}

func (ps PermStore) HasAccess(ctx sdk.Context, account sdk.AccAddress, msgType string) bool {
	store := ps.kvStore(ctx)
	key := permissionStoreKey(account, msgType)

	return store.Has(key)
}

func (ps PermStore) GrantAccess(ctx sdk.Context, account sdk.AccAddress, msgType string) {
	store := ps.kvStore(ctx)
	key := permissionStoreKey(account, msgType)

	b := ps.cdc.MustMarshal(&Permission{})
	store.Set(key, b)
}

func (ps PermStore) RevokeAccess(ctx sdk.Context, account sdk.AccAddress, msgType string) {
	store := ps.kvStore(ctx)
	key := permissionStoreKey(account, msgType)

	store.Delete(key)
}

func (ps PermStore) Name() string {
	return string(ps.name)
}

func NewPermStore(cdc codec.BinaryCodec, key storetypes.StoreKey, name string) PermStore {
	return PermStore{
		cdc:  cdc,
		key:  key,
		name: []byte(name),
	}
}

func (ps PermStore) IteratePermissions(ctx sdk.Context,
	handler func(address sdk.AccAddress, msgType string) bool,
) {
	iter := ps.permissionIterator(ctx)
	defer iter.Close()
	for ; iter.Valid(); iter.Next() {
		account, msgType, err := parsePermissionStoreKey(iter.Key())
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
