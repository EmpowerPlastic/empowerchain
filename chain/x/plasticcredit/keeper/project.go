package keeper

import (
	"cosmossdk.io/errors"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
)

func (k Keeper) GetProject(ctx sdk.Context, projectID uint64) (project plasticcredit.Project, found bool) {
	store := k.getProjectStore(ctx)

	key := plasticcredit.CreateKeyFromUint64(projectID)
	bz := store.Get(key)
	if bz == nil {
		return project, false
	}
	k.cdc.MustUnmarshal(bz, &project)

	return project, true
}

func (k Keeper) CreateProject(ctx sdk.Context, creator sdk.AccAddress, applicantID uint64, creditClassAbbreviation string, name string) (uint64, error) {
	applicant, found := k.GetApplicant(ctx, applicantID)
	if !found {
		return 0, errors.Wrapf(sdkerrors.ErrNotFound, "applicant with id %d was not found", applicantID)
	}

	if !applicant.AddressHasAuthorization(creator) {
		return 0, errors.Wrapf(sdkerrors.ErrUnauthorized, "%s does not have authorization for applicant with id %d", creator.String(), applicantID)
	}

	if _, found := k.GetCreditClass(ctx, creditClassAbbreviation); !found {
		return 0, errors.Wrapf(sdkerrors.ErrNotFound, "credit class with abbreviation %s was not found", creditClassAbbreviation)
	}

	idc := k.GetIDCounters(ctx)
	nextID := idc.NextProjectId
	project := plasticcredit.Project{
		Id:                      nextID,
		ApplicantId:             applicantID,
		CreditClassAbbreviation: creditClassAbbreviation,
		Name:                    name,
	}

	if err := k.setProject(ctx, project); err != nil {
		return 0, err
	}

	idc.NextProjectId = nextID + 1
	if err := k.setIDCounters(ctx, idc); err != nil {
		return 0, err
	}

	return nextID, nil
}

func (k Keeper) setProject(ctx sdk.Context, project plasticcredit.Project) error {
	if err := project.Validate(); err != nil {
		return err
	}
	store := k.getProjectStore(ctx)

	b, err := k.cdc.Marshal(&project)
	if err != nil {
		return err
	}

	key := plasticcredit.CreateKeyFromUint64(project.Id)
	store.Set(key, b)

	return nil
}

func (k Keeper) getAllProjects(ctx sdk.Context) []plasticcredit.Project {
	store := k.getProjectStore(ctx)

	iterator := store.Iterator(nil, nil)
	defer iterator.Close()

	var projects []plasticcredit.Project
	for ; iterator.Valid(); iterator.Next() {
		var project plasticcredit.Project
		k.cdc.MustUnmarshal(iterator.Value(), &project)
		projects = append(projects, project)
	}

	return projects
}

func (k Keeper) getProjectStore(ctx sdk.Context) storetypes.KVStore {
	store := ctx.KVStore(k.storeKey)
	projectStore := prefix.NewStore(store, plasticcredit.ProjectKey)

	return projectStore
}
