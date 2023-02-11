package sample

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/crypto/keys/ed25519"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// AccAddress returns a sample account address
func AccAddress() string {
	pk := ed25519.GenPrivKey().PubKey()
	addr := pk.Address()
	return sdk.AccAddress(addr).String()
}

// String returns a random string of length n
func String(n int) string {
	chars := []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY0123456789.?!@#$%^&*()[]{}_-+= ")

	randomString := make([]rune, n)
	for i := range randomString {
		randomString[i] = chars[rand.Intn(len(chars))]
	}
	return string(randomString)
}
