package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/plasticcredit module sentinel errors
var (
	ErrCreatorNotAllowlisted    = sdkerrors.Register(ModuleName, 1100, "message creator not on an allowlist")
	ErrIssuerNameTooLong        = sdkerrors.Register(ModuleName, 1101, "issuer name too long")
	ErrIssuerDescriptionTooLong = sdkerrors.Register(ModuleName, 1102, "issuer description too long")
	ErrCreditClassNotFound      = sdkerrors.Register(ModuleName, 1103, "credit class not found")
	ErrCollectorNotFound        = sdkerrors.Register(ModuleName, 1104, "collector not found")
)
