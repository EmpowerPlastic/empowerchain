package utils

import "cosmossdk.io/errors"

const genericErrorCodeSpace = "empowergeneric"

// Generic errors to be used across modules
var (
	ErrInvalidValue = errors.Register(genericErrorCodeSpace, 1, "invalid value")
)
