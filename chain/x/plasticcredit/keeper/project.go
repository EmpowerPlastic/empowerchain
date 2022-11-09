package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

// SetProject set a specific project in the store from its index
func (k Keeper) SetProject(ctx sdk.Context, project types.Project) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProjectKeyPrefix))
	b := k.cdc.MustMarshal(&project)
	store.Set(types.ProjectKey(
		project.ProjectId,
	), b)
}

// GetProject returns a project from its index
func (k Keeper) GetProject(
	ctx sdk.Context,
	projectId uint64,

) (val types.Project, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProjectKeyPrefix))

	b := store.Get(types.ProjectKey(
		projectId,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveProject removes a project from the store
func (k Keeper) RemoveProject(
	ctx sdk.Context,
	projectId uint64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProjectKeyPrefix))
	store.Delete(types.ProjectKey(
		projectId,
	))
}

// GetAllProject returns all project
func (k Keeper) GetAllProject(ctx sdk.Context) (list []types.Project) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProjectKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Project
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
