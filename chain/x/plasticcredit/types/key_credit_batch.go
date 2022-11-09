package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CreditBatchKeyPrefix is the prefix to retrieve all CreditBatch
	CreditBatchKeyPrefix = "CreditBatch/value/"
)

// CreditBatchKey returns the store key to retrieve a CreditBatch from the index fields
func CreditBatchKey(
	batchDenom string,
) []byte {
	var key []byte

	batchDenomBytes := []byte(batchDenom)
	key = append(key, batchDenomBytes...)
	key = append(key, []byte("/")...)

	return key
}
