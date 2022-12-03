package plasticcredit

// DONTCOVER

import (
	"cosmossdk.io/errors"
)

// x/plasticcredit module sentinel errors
var (
	ErrInvalidValue                 = errors.Register(ModuleName, 2, "invalid value")
	ErrNotEnoughCredits             = errors.Register(ModuleName, 1103, "not enough credits")
	ErrNotEnoughActiveCredits       = errors.Register(ModuleName, 1104, "not enough active credits")
	ErrNotIssuer                    = errors.Register(ModuleName, 1105, "address is not an issuer")
	ErrCreditClassAbbreviationTaken = errors.Register(ModuleName, 1113, "credit class abbreviation already in use")
)
