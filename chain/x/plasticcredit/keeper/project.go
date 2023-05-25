package keeper

import (
	"cosmossdk.io/errors"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
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

func (k Keeper) GetProjects(ctx sdk.Context, pageReq query.PageRequest) ([]plasticcredit.Project, query.PageResponse, error) {
	store := k.getProjectStore(ctx)

	var projects []plasticcredit.Project
	pageRes, err := query.Paginate(store, &pageReq, func(_ []byte, value []byte) error {
		var project plasticcredit.Project
		if err := k.cdc.Unmarshal(value, &project); err != nil {
			return err
		}
		projects = append(projects, project)

		return nil
	})
	if err != nil {
		return nil, query.PageResponse{}, err
	}

	return projects, *pageRes, nil
}

func (k Keeper) CreateProject(ctx sdk.Context, creator sdk.AccAddress, applicantID uint64, creditTypeAbbreviation string, name string) (uint64, error) {
	applicant, found := k.GetApplicant(ctx, applicantID)
	if !found {
		return 0, errors.Wrapf(plasticcredit.ErrApplicantNotFound, "applicant with id %d was not found", applicantID)
	}

	if !applicant.AddressHasAuthorization(creator) {
		return 0, errors.Wrapf(sdkerrors.ErrUnauthorized, "%s does not have authorization for applicant with id %d", creator.String(), applicantID)
	}

	if _, found := k.GetCreditType(ctx, creditTypeAbbreviation); !found {
		return 0, errors.Wrapf(plasticcredit.ErrCreditTypeNotFound, "credit type with abbreviation %s was not found", creditTypeAbbreviation)
	}

	idc := k.GetIDCounters(ctx)
	nextID := idc.NextProjectId
	project := plasticcredit.Project{
		Id:                     nextID,
		ApplicantId:            applicantID,
		CreditTypeAbbreviation: creditTypeAbbreviation,
		Name:                   name,
		Status:                 plasticcredit.ProjectStatus_NEW,
	}

	if err := k.setProject(ctx, project); err != nil {
		return 0, err
	}

	idc.NextProjectId = nextID + 1
	if err := k.setIDCounters(ctx, idc); err != nil {
		return 0, err
	}

	return nextID, ctx.EventManager().EmitTypedEvent(&plasticcredit.EventCreateProject{
		Creator:                creator.String(),
		ProjectId:              nextID,
		ApplicantId:            applicantID,
		CreditTypeAbbreviation: creditTypeAbbreviation,
		Name:                   name,
	})
}

func (k Keeper) UpdateProject(ctx sdk.Context, updater sdk.AccAddress, projectID uint64, name string) error {
	project, found := k.GetProject(ctx, projectID)
	if !found {
		return errors.Wrapf(plasticcredit.ErrProjectNotFound, "the project %d does not exists", projectID)
	}
	applicant, found := k.GetApplicant(ctx, project.ApplicantId)
	if !found {
		return errors.Wrapf(plasticcredit.ErrApplicantNotFound, "applicant with id %d was not found", project.ApplicantId)
	}

	if !applicant.AddressHasAuthorization(updater) {
		return errors.Wrapf(sdkerrors.ErrUnauthorized, "%s does not have authorization for applicant with id %d", updater.String(), project.ApplicantId)
	}

	project.Name = name
	if err := k.setProject(ctx, project); err != nil {
		return err
	}

	return ctx.EventManager().EmitTypedEvent(&plasticcredit.EventUpdateProject{
		Updater:   updater.String(),
		ProjectId: projectID,
		Name:      name,
	})
}

func (k Keeper) ApproveProject(ctx sdk.Context, approver sdk.AccAddress, projectID uint64) error {
	project, found := k.GetProject(ctx, projectID)
	if !found {
		return errors.Wrapf(plasticcredit.ErrProjectNotFound, "project with id %d was not found", projectID)
	}
	mapAllowedApproveStatuses := map[plasticcredit.ProjectStatus]bool{
		plasticcredit.ProjectStatus_NEW:       true,
		plasticcredit.ProjectStatus_SUSPENDED: true,
		plasticcredit.ProjectStatus_REJECTED:  true,
	}
	if !mapAllowedApproveStatuses[project.Status] {
		return errors.Wrapf(plasticcredit.ErrProjectNotNew, "project with id %d is %s, and not allowed to approve", projectID, project.Status)
	}
	// At some point, I would like to have some better indexing that would allow us to not have to fetch so many things just to get to the issuer
	creditType, found := k.GetCreditType(ctx, project.CreditTypeAbbreviation)
	if !found {
		panic("The project was found, the credit type better exist!")
	}
	issuer, found := k.GetIssuer(ctx, creditType.IssuerId)
	if !found {
		panic("The credit type was found, the issuer better exist!")
	}

	if !issuer.AddressHasAuthorization(approver) {
		return errors.Wrapf(sdkerrors.ErrUnauthorized, "approver %s does not have authorization on issuer with id %d", approver.String(), issuer.Id)
	}

	project.Status = plasticcredit.ProjectStatus_APPROVED
	if err := k.setProject(ctx, project); err != nil {
		return err
	}

	return ctx.EventManager().EmitTypedEvent(&plasticcredit.EventProjectApproved{
		ProjectId:                         project.Id,
		ApprovedForCreditTypeAbbreviation: creditType.Abbreviation,
		ApprovingIssuerId:                 issuer.Id,
		ApprovedBy:                        approver.String(),
	})
}

func (k Keeper) RejectProject(ctx sdk.Context, rejector sdk.AccAddress, projectID uint64) error {
	project, found := k.GetProject(ctx, projectID)
	if !found {
		return errors.Wrapf(plasticcredit.ErrProjectNotFound, "project with id %d was not found", projectID)
	}
	if project.Status != plasticcredit.ProjectStatus_NEW {
		return errors.Wrapf(plasticcredit.ErrProjectNotNew, "project with id %d is %s, and not allowed to reject", projectID, project.Status)
	}

	// At some point, I would like to have some better indexing that would allow us to not have to fetch so many things just to get to the issuer
	creditType, found := k.GetCreditType(ctx, project.CreditTypeAbbreviation)
	if !found {
		panic("The project was found, the credit type better exist!")
	}
	issuer, found := k.GetIssuer(ctx, creditType.IssuerId)
	if !found {
		panic("The credit type was found, the issuer better exist!")
	}
	if !issuer.AddressHasAuthorization(rejector) {
		return errors.Wrapf(sdkerrors.ErrUnauthorized, "rejector %s does not have authorization on issuer with id %d", rejector.String(), issuer.Id)
	}

	project.Status = plasticcredit.ProjectStatus_REJECTED
	if err := k.setProject(ctx, project); err != nil {
		return err
	}

	return ctx.EventManager().EmitTypedEvent(&plasticcredit.EventProjectRejected{
		ProjectId:                         project.Id,
		RejectedForCreditTypeAbbreviation: creditType.Abbreviation,
		RejectingIssuerId:                 issuer.Id,
		RejectedBy:                        rejector.String(),
	})
}

func (k Keeper) SuspendProject(ctx sdk.Context, updater sdk.AccAddress, projectID uint64) error {
	project, found := k.GetProject(ctx, projectID)
	if !found {
		return errors.Wrapf(plasticcredit.ErrProjectNotFound, "project with id %d was not found", projectID)
	}
	if project.Status != plasticcredit.ProjectStatus_APPROVED {
		return errors.Wrapf(plasticcredit.ErrProjectNotSuspendable, "project with id %d is %s, and not allowed to suspend", projectID, project.Status)
	}
	// At some point, I would like to have some better indexing that would allow us to not have to fetch so many things just to get to the issuer
	creditType, found := k.GetCreditType(ctx, project.CreditTypeAbbreviation)
	if !found {
		panic("The project was found, the credit type better exist!")
	}
	issuer, found := k.GetIssuer(ctx, creditType.IssuerId)
	if !found {
		panic("The credit type was found, the issuer better exist!")
	}
	if !issuer.AddressHasAuthorization(updater) {
		return errors.Wrapf(sdkerrors.ErrUnauthorized, "For suspension the updater %s does not have authorization on issuer with id %d", updater.String(), issuer.Id)
	}

	project.Status = plasticcredit.ProjectStatus_SUSPENDED
	if err := k.setProject(ctx, project); err != nil {
		return err
	}

	return ctx.EventManager().EmitTypedEvent(&plasticcredit.EventProjectSuspended{
		ProjectId:                          project.Id,
		SuspendedForCreditTypeAbbreviation: creditType.Abbreviation,
		SuspendingIssuerId:                 issuer.Id,
		SuspendedBy:                        updater.String(),
	})
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

func (k Keeper) iterateProjects(ctx sdk.Context, handler func(project plasticcredit.Project)) {
	store := k.getProjectStore(ctx)

	iterator := store.Iterator(nil, nil)
	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var project plasticcredit.Project
		k.cdc.MustUnmarshal(iterator.Value(), &project)
		handler(project)
	}
}

func (k Keeper) getProjectStore(ctx sdk.Context) storetypes.KVStore {
	store := ctx.KVStore(k.storeKey)
	projectStore := prefix.NewStore(store, plasticcredit.ProjectKey)

	return projectStore
}
