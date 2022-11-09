package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CreditDenomKeyPrefix is the prefix to retrieve all CreditDenom
	CreditDenomKeyPrefix = "CreditDenom/value/"
	CreditDenomCountKey  = "CreditDenom/count/"
)

// CreditDenomKey returns the store key to retrieve a CreditDenom from the index fields
func CreditDenomKey(
	batchDenom string,
) []byte {
	var key []byte

	batchDenomBytes := []byte(batchDenom)
	key = append(key, batchDenomBytes...)
	key = append(key, []byte("/")...)

	return key
}
