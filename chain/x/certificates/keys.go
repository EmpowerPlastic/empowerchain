package certificates

import (
	"encoding/binary"

	"cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/address"

	"github.com/EmpowerPlastic/empowerchain/utils"
)

var (
	ParamsKey      = []byte{0x00}
	IDCountersKey  = []byte{0x01}
	CertificateKey = []byte{0x02}
)

const (
	// ModuleName defines the module name
	ModuleName = "certificates"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_certificates"

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName
)

func CreateKeyFromUint64(id uint64) []byte {
	key := make([]byte, 8)
	binary.LittleEndian.PutUint64(key, id)
	return key
}

func CreateKeyFromString(key string) []byte {
	return []byte(key)
}

func CreateCertificateKey(owner sdk.AccAddress, id uint64) ([]byte, error) {
	if len(owner) == 0 {
		return nil, errors.Wrap(utils.ErrInvalidValue, "invalid value for owner or id")
	}
	d := CreateKeyFromUint64(id)
	owner = address.MustLengthPrefix(owner)
	key := sdk.AppendLengthPrefixedBytes(owner, d)
	return key, nil
}
