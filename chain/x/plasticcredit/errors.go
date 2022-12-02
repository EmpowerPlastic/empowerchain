package plasticcredit

// DONTCOVER

import (
	"cosmossdk.io/errors"
)

// x/plasticcredit module sentinel errors
var (
	ErrInvalidValue           = errors.Register(ModuleName, 2, "invalid value")
	ErrInvalidParams          = errors.Register(ModuleName, 1100, "invalid params")
	ErrInvalidIssuerName      = errors.Register(ModuleName, 1101, "invalid issuer name")
	ErrCreditCollectionExists = errors.Register(ModuleName, 1102, "credit collection already exists")
	ErrNotEnoughCredits       = errors.Register(ModuleName, 1103, "not enough credits")
	ErrNotEnoughActiveCredits = errors.Register(ModuleName, 1104, "not enough active credits")
	ErrNotIssuer              = errors.Register(ModuleName, 1105, "address is not an issuer")
	ErrInvalidApplicantName   = errors.Register(ModuleName, 1106, "invalid applicant name")
	ErrInvalidProjectID       = errors.Register(ModuleName, 1107, "invalid projectid")
	ErrInvalidDenomSuffix     = errors.Register(ModuleName, 1108, "invalid denom suffix")
	ErrInvalidCreditAmount    = errors.Register(ModuleName, 1109, "invalid credit amount")
	ErrInvalidDenom           = errors.Register(ModuleName, 1110, "invalid denom")
	ErrInvalidHash            = errors.Register(ModuleName, 1111, "invalid hash")
	ErrInvalidURI             = errors.Register(ModuleName, 1112, "invalid URI")
)
