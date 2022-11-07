package v1

import (
	_ "github.com/gogo/protobuf/gogoproto"
	_ "github.com/golang/protobuf/ptypes/timestamp"
)

const ProofKeyPrefix = "Proof/value/"

func ProofKey(
	hash string,
) []byte {
	var key []byte

	hashBytes := []byte(hash)
	key = append(key, hashBytes...)
	key = append(key, []byte("/")...)

	return key
}
