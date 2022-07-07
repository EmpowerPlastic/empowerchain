package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// StoredProofKeyPrefix is the prefix to retrieve all StoredProof
	StoredProofKeyPrefix = "StoredProof/value/"
)

// StoredProofKey returns the store key to retrieve a StoredProof from the index fields
func StoredProofKey(
	hash string,
) []byte {
	var key []byte

	hashBytes := []byte(hash)
	key = append(key, hashBytes...)
	key = append(key, []byte("/")...)

	return key
}
