package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/address"
)

func storeKey(account sdk.AccAddress, msgType string) []byte {
	m := []byte(msgType)
	account = address.MustLengthPrefix(account)
	key := sdk.AppendLengthPrefixedBytes(account, m)

	return key
}

type PermStore struct {
	cdc  codec.BinaryCodec
	key  storetypes.StoreKey
	name []byte
}

func (ps PermStore) HasAccess(ctx sdk.Context, account sdk.AccAddress, msgType string) bool {
	store := ps.kvStore(ctx)
	key := storeKey(account, msgType)

	return store.Has(key)
}

func (ps PermStore) GrantAccess(ctx sdk.Context, account sdk.AccAddress, msgType string) {
	store := ps.kvStore(ctx)
	key := storeKey(account, msgType)

	b := ps.cdc.MustMarshal(&Permission{})
	store.Set(key, b)
}

func (ps PermStore) RevokeAccess(ctx sdk.Context, account sdk.AccAddress, msgType string) {
	store := ps.kvStore(ctx)
	key := storeKey(account, msgType)

	store.Delete(key)
}

func NewPermStore(cdc codec.BinaryCodec, key storetypes.StoreKey, name string) PermStore {
	return PermStore{
		cdc:  cdc,
		key:  key,
		name: []byte(name),
	}
}

func (ps PermStore) kvStore(ctx sdk.Context) sdk.KVStore {
	return prefix.NewStore(ctx.KVStore(ps.key), append(ps.name, '/'))
}
