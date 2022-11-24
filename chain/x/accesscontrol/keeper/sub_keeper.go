package keeper

import sdk "github.com/cosmos/cosmos-sdk/types"

type IAccessControlSubKeeper interface {
	HasAccess(ctx sdk.Context, account sdk.AccAddress, msgType string) bool
	GrantAccess(ctx sdk.Context, account sdk.AccAddress, msgType string)
	RevokeAccess(ctx sdk.Context, account sdk.AccAddress, msgType string)
}

type SubKeeper struct {
	*Keeper
	subKey string
	kaddr  string
	skaddr string
}

func NewSubKeeper(keeper *Keeper, subKey string) IAccessControlSubKeeper {
	sk := SubKeeper{
		Keeper: keeper,
		subKey: subKey,
	}
	sk.kaddr = keeper.storeKey.String()
	sk.skaddr = sk.storeKey.String()
	sk.initSubStore()
	return sk
}

func (sk SubKeeper) HasAccess(ctx sdk.Context, account sdk.AccAddress, msgType string) bool {
	return sk.hasAccess(ctx, sk.subKey, account, msgType)
}

func (sk SubKeeper) GrantAccess(ctx sdk.Context, account sdk.AccAddress, msgType string) {
	sk.grantAccess(ctx, sk.subKey, account, msgType)
}

func (sk SubKeeper) RevokeAccess(ctx sdk.Context, account sdk.AccAddress, msgType string) {
	sk.revokeAccess(ctx, sk.subKey, account, msgType)
}

func (sk SubKeeper) initSubStore() {
	_, found := sk.subKeys[sk.subKey]
	if found {
		panic("sub store already occupied")
	}
	sk.subKeys[sk.subKey] = []byte(sk.subKey)
}
