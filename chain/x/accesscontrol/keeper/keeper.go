package keeper

import (
	"fmt"

	"github.com/cometbft/cometbft/libs/log"
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/x/accesscontrol"
)

type (
	Keeper struct {
		cdc      codec.BinaryCodec
		storeKey storetypes.StoreKey
		subKeys  map[string][]byte
	}
)

func NewKeeper(
	cdc codec.BinaryCodec,
	storeKey storetypes.StoreKey,
) *Keeper {
	return &Keeper{
		cdc:      cdc,
		storeKey: storeKey,
		subKeys:  make(map[string][]byte),
	}
}

func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", accesscontrol.ModuleName))
}

func (k Keeper) hasAccess(ctx sdk.Context, subKey string, account sdk.AccAddress, msgType string) bool {
	store := k.kvStore(ctx, subKey)
	key := accesscontrol.PermissionStoreKey(account, msgType)

	return store.Has(key)
}

func (k Keeper) grantAccess(ctx sdk.Context, subKey string, account sdk.AccAddress, msgType string) error {
	store := k.kvStore(ctx, subKey)
	key := accesscontrol.PermissionStoreKey(account, msgType)

	b, err := k.cdc.Marshal(&accesscontrol.Permission{})
	if err != nil {
		return err
	}
	store.Set(key, b)
	return ctx.EventManager().EmitTypedEvent(&accesscontrol.EventAccessGranted{
		ModuleName: subKey,
		Account:    account.String(),
		MsgType:    msgType,
	})
}

func (k Keeper) revokeAccess(ctx sdk.Context, subKey string, account sdk.AccAddress, msgType string) error {
	store := k.kvStore(ctx, subKey)
	key := accesscontrol.PermissionStoreKey(account, msgType)

	store.Delete(key)
	return ctx.EventManager().EmitTypedEvent(&accesscontrol.EventAccessRevoked{
		ModuleName: subKey,
		Account:    account.String(),
		MsgType:    msgType,
	})
}

// Should be used only for genesis export!
func (k Keeper) iteratePermissions(ctx sdk.Context, subKey string,
	handler func(address sdk.AccAddress, msgType string) bool,
) {
	iter := k.permissionIterator(ctx, subKey)
	defer iter.Close()
	for ; iter.Valid(); iter.Next() {
		account, msgType, err := accesscontrol.ParsePermissionStoreKey(iter.Key())
		if err != nil {
			panic("Cannot parse permission store key")
		}
		if handler(account, msgType) {
			break
		}
	}
}

func (k Keeper) permissionIterator(ctx sdk.Context, subKey string) sdk.Iterator {
	store := ctx.KVStore(k.storeKey)
	return sdk.KVStorePrefixIterator(store, k.subKeys[subKey])
}

func (k Keeper) kvStore(ctx sdk.Context, subKey string) sdk.KVStore {
	return prefix.NewStore(ctx.KVStore(k.storeKey), k.subKeys[subKey])
}
