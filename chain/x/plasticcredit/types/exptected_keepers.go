package types

import sdk "github.com/cosmos/cosmos-sdk/types"

type AccessControlKeeper interface {
	HasAccess(ctx sdk.Context, account sdk.AccAddress, msgType string) bool
	GrantAccess(ctx sdk.Context, account sdk.AccAddress, msgType string)
	RevokeAccess(ctx sdk.Context, account sdk.AccAddress, msgType string)
}
