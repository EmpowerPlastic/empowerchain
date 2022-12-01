package plasticcredit

// DONTCOVER

import (
	"cosmossdk.io/errors"
)

// x/plasticcredit module sentinel errors
var (
	ErrInvalidValue             = errors.Register(ModuleName, 2, "invalid value")
	ErrInvalidParams            = errors.Register(ModuleName, 1100, "invalid params")
	ErrInvalidIssuerName        = errors.Register(ModuleName, 1101, "invalid issuer name")
	ErrCreditCollectionExists   = errors.Register(ModuleName, 1102, "credit collection already exists")
	ErrCreditCollectionNotFound = errors.Register(ModuleName, 1103, "credit collection not found")
	ErrProjectNotFound          = errors.Register(ModuleName, 1104, "project not found")
	ErrCreditClassNotFound      = errors.Register(ModuleName, 1105, "credit class not found")
	ErrCreaditBalanceNotFound   = errors.Register(ModuleName, 1106, "credit balance not found")
	ErrNotEnoughCredits         = errors.Register(ModuleName, 1107, "not enough credits")
	ErrNotEnoughActiveCredits   = errors.Register(ModuleName, 1108, "not enough active credits")
	ErrIssuerNotFound           = errors.Register(ModuleName, 1109, "issuer not found")
	ErrNotIssuer                = errors.Register(ModuleName, 1110, "address is not an issuer")
	ErrInvalidApplicantName     = errors.Register(ModuleName, 1111, "invalid applicant name")
	ErrApplicantNotFound        = errors.Register(ModuleName, 1112, "applicant not found")
	ErrInvalidProjectID         = errors.Register(ModuleName, 1113, "invalid projectid")
	ErrInvalidDenomSuffix       = errors.Register(ModuleName, 1114, "invalid denom suffix")
	ErrInvalidCreditAmount      = errors.Register(ModuleName, 1115, "invalid credit amount")
	ErrInvalidDenom             = errors.Register(ModuleName, 1116, "invalid denom")
	ErrInvalidHash              = errors.Register(ModuleName, 1117, "invalid hash")
	ErrInvalidURI               = errors.Register(ModuleName, 1118, "invalid URI")
)
