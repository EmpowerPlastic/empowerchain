package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CreditClassKeyPrefix is the prefix to retrieve all CreditClass
	CreditClassKeyPrefix = "CreditClass/value/"
)

// CreditClassKey returns the store key to retrieve a CreditClass from the index fields
func CreditClassKey(
	creditClassId uint64,
) []byte {
	var key []byte

	creditClassIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(creditClassIdBytes, creditClassId)
	key = append(key, creditClassIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
