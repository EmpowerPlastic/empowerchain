package main

import (
	"crypto/sha256"
	"fmt"
)

func Sha256Data(data []byte) string {
	h := sha256.New()
	h.Write(data)
	return fmt.Sprintf("%x", h.Sum(nil))
}
