package plasticcredit

// DONTCOVER

import (
	"cosmossdk.io/errors"
)

// x/plasticcredit module sentinel errors
var (
	ErrInvalidValue         = errors.Register(ModuleName, 2, "invalid value")
	ErrInvalidParams        = errors.Register(ModuleName, 1100, "invalid params")
	ErrInvalidIssuerName    = errors.Register(ModuleName, 1101, "invalid issuer name")
	ErrIssuerNotFound       = errors.Register(ModuleName, 1102, "issuer not found")
	ErrInvalidApplicantName = errors.Register(ModuleName, 1103, "invalid applicant name")
	ErrApplicantNotFound    = errors.Register(ModuleName, 1104, "applicant not found")
)
