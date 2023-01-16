package accesscontrol

import (
	"bytes"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/address"
	"github.com/cosmos/cosmos-sdk/types/kv"
)

const (
	// ModuleName defines the module name
	ModuleName = "accesscontrol"

	// Workaround for key collision
	// SDK modules use store with prefix "acc"
	StoreKey = "x" + ModuleName
)

var PermissionKey = []byte{0x01}

func PermissionStoreKey(account sdk.AccAddress, msgType string) []byte {
	m := []byte(msgType)
	account = address.MustLengthPrefix(account)
	key := sdk.AppendLengthPrefixedBytes(PermissionKey, account, m)

	return key
}

func ParsePermissionStoreKey(key []byte) (account sdk.AccAddress, msgType string, err error) {
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
