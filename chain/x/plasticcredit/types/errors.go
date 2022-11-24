package types

// DONTCOVER

import (
	"cosmossdk.io/errors"
)

// x/plasticcredit module sentinel errors
var (
	ErrInvalidValue      = errors.Register(ModuleName, 2, "invalid value")
	ErrInvalidParams     = errors.Register(ModuleName, 1100, "invalid params")
	ErrInvalidIssuerName = errors.Register(ModuleName, 1101, "invalid issuer name")
)
