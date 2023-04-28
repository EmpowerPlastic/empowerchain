package simulation

import (
	"encoding/hex"
	"math/rand"
	"time"
)

func createRandomTime(r *rand.Rand) time.Time {
	turingBirth := time.Date(1912, 6, 23, 0, 0, 0, 0, time.UTC)
	turingBirthUnix := turingBirth.Unix()

	// Assume the earliest possible date is January 1, 1850
	earliestDate := time.Date(1850, 1, 1, 0, 0, 0, 0, time.UTC)
	earliestUnix := earliestDate.Unix()

	// Calculate the range of Unix timestamps between the earliest date and Turing's birth
	rangeUnix := turingBirthUnix - earliestUnix

	// Generate a random Unix timestamp within the range and add it to the earliestUnix
	randomTimestamp := r.Int63n(rangeUnix) + earliestUnix

	// Convert the random Unix timestamp to a time.Time value
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
