package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/proofofexistence module sentinel errors
var (
	ErrInvalidProof   = sdkerrors.Register(ModuleName, 2, "invalid hash proof")
	ErrHashExists     = sdkerrors.Register(ModuleName, 3, "hash already registered")
	ErrInvalidCreator = sdkerrors.Register(ModuleName, 4, "invalid creator")
	ErrProofNotFound  = sdkerrors.Register(ModuleName, 5, "proof not found")
)
