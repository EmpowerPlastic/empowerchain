package proofofexistence

import "cosmossdk.io/errors"

// DONTCOVER

// x/proofofexistence module sentinel errors
var (
	ErrInvalidProof   = errors.Register(ModuleName, 2, "invalid hash proof")
	ErrHashExists     = errors.Register(ModuleName, 3, "hash already registered")
	ErrInvalidCreator = errors.Register(ModuleName, 4, "invalid creator")
	ErrProofNotFound  = errors.Register(ModuleName, 5, "proof not found")
)
