package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// IssuerKeyPrefix is the prefix to retrieve all Issuer
	IssuerKeyPrefix = "Issuer/value/"
)

// IssuerKey returns the store key to retrieve a Issuer from the index fields
func IssuerKey(
	issuerId uint64,
) []byte {
	var key []byte

	issuerIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(issuerIdBytes, issuerId)
	key = append(key, issuerIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
