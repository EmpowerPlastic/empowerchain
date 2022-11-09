package types

import "encoding/binary"

var _ binary.ByteOrder

const creditBalanceKeyPrefix = "CreditBalance/value/"

// CreditBalanceKeyPrefix is the prefix to retrieve all CreditBalance
func CreditBalanceKeyPrefix(
	batchDenom string,
) string {
	return creditBalanceKeyPrefix + batchDenom + "/"
}

// CreditBalanceKey returns the store key to retrieve a CreditBalance from the index fields
func CreditBalanceKey(
	owner string,
) []byte {
	var key []byte

	ownerBytes := []byte(owner)
	key = append(key, ownerBytes...)
	key = append(key, []byte("/")...)

	return key
}
