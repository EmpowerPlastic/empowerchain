package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CollectorKeyPrefix is the prefix to retrieve all Collector
	CollectorKeyPrefix = "Collector/value/"
)

// CollectorKey returns the store key to retrieve a Collector from the index fields
func CollectorKey(
	collectorId uint64,
) []byte {
	var key []byte

	collectorIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(collectorIdBytes, collectorId)
	key = append(key, collectorIdBytes...)
	key = append(key, []byte("/")...)

	return key
}
