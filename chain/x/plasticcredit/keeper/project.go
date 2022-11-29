package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
)

func (k Keeper) GetProject(ctx sdk.Context, projectId uint64) (project plasticcredit.Project, found bool, err error) {
	store := k.getCreditCollectionStore(ctx)

	key := plasticcredit.CreateKeyFromUint64(projectId)
	bz := store.Get(key)
	if bz == nil {
		return project, false, nil
	}
	err = k.cdc.Unmarshal(bz, &project)

	return project, true, err
}

func (k Keeper) getProjectStore(ctx sdk.Context) storetypes.KVStore {
	store := ctx.KVStore(k.storeKey)
	projectStore := prefix.NewStore(store, plasticcredit.ProjectKey)

	return projectStore
}
