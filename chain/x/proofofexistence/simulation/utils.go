package simulation

import (
	"encoding/hex"
	"math/rand"
	"time"
)

func createRandomTime(r *rand.Rand) time.Time {
	randomTimestamp := r.Int63n(time.Now().Unix()-94608000) + 94608000
	randomTime := time.Unix(randomTimestamp, 0)
	return randomTime
}

func createRandom32ByteString(r *rand.Rand) string {
	data := make([]byte, 32)
	for i := range data {
		data[i] = byte(r.Intn(256))
	}
	return hex.EncodeToString(data)
}
