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
	ErrProjectNotFound        = errors.Register(ModuleName, 1103, "project not found")
	ErrCreditClassNotFound    = errors.Register(ModuleName, 1104, "credit class not found")
	ErrCollectorNotFound      = errors.Register(ModuleName, 1105, "collector not found")
)
