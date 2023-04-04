package plasticcredit

import (
	"encoding/binary"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/address"
)

var (
	ParamsKey           = []byte{0x00}
	IDCountersKey       = []byte{0x01}
	IssuerKey           = []byte{0x02}
	ApplicantKey        = []byte{0x03}
	CreditTypeKey       = []byte{0x04}
	ProjectKey          = []byte{0x05}
	CreditCollectionKey = []byte{0x06}
	CreditBalanceKey    = []byte{0x07}
)

const (
	// ModuleName defines the module name
	ModuleName = "plasticcredit"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_plasticcredit"
)

func CreateKeyFromUint64(id uint64) []byte {
	key := make([]byte, 8)
	binary.LittleEndian.PutUint64(key, id)

	return key
}

func CreateKeyFromString(key string) []byte {
	return []byte(key)
}

// TODO: Test
func CreateCreditBalanceKey(owner sdk.AccAddress, denom string) []byte {
	d := []byte(denom)
	owner = address.MustLengthPrefix(owner)
	key := sdk.AppendLengthPrefixedBytes(owner, d)
	return key
}
