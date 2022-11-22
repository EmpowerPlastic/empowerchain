package keeper

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/codec"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/accesscontrol/types"
	"github.com/tendermint/tendermint/libs/log"
)

type (
	Keeper struct {
		cdc        codec.BinaryCodec
		storeKey   storetypes.StoreKey
		permStores map[string]*types.PermStore
	}
)

func NewKeeper(
	cdc codec.BinaryCodec,
	storeKey storetypes.StoreKey,

) Keeper {

	return Keeper{

		cdc:        cdc,
		storeKey:   storeKey,
		permStores: make(map[string]*types.PermStore),
	}
}

func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}

func (k Keeper) PermStore(name string) types.PermStore {
	_, ok := k.permStores[name]
	if ok {
		panic("perm store already occupied")
	}

	if name == "" {
		panic("cannot use empty string for perm store name")
	}

	permStore := types.NewPermStore(k.cdc, k.storeKey, name)
	k.permStores[name] = &permStore

	return permStore
}

func (k Keeper) GetPermStore(name string) (types.PermStore, bool) {
	permStore, ok := k.permStores[name]
	if !ok {
		return types.PermStore{}, false
	}
	return *permStore, ok
}
