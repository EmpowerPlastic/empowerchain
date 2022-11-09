package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ProjectKeyPrefix is the prefix to retrieve all Project
	ProjectKeyPrefix = "Project/value/"
)

// ProjectKey returns the store key to retrieve a Project from the index fields
func ProjectKey(
	projectId uint64,
) []byte {
	var key []byte

	projectIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(projectIdBytes, projectId)
	key = append(key, projectIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
