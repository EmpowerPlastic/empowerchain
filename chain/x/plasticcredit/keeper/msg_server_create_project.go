package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

func (k msgServer) CreateProject(goCtx context.Context, msg *types.MsgCreateProject) (*types.MsgCreateProjectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if err := msg.ValidateBasic(); err != nil {
		return nil, err
	}

	// TODO access control

	// check if credit class exists
	_, found := k.GetCreditClass(ctx, msg.CreditClassId)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrCreditClassNotFound, "no credit class found with id (%d)", msg.CreditClassId)
	}

	// check if collector exists
	_, found = k.GetCollector(ctx, msg.CollectorId)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrCollectorNotFound, "no collector found with id (%d)", msg.CollectorId)
	}

	// TODO fetch issuer and check if creator is an issuer

	idCounters, found := k.GetIdCounters(ctx)
	if !found {
		panic("IdCounters not found")
	}

	project := types.Project{
		ProjectId:     idCounters.ProjectId,
		CreditClassId: msg.CreditClassId,
		CollectorId:   msg.CollectorId,
		Name:          msg.Name,
		ProjectData:   msg.ProjectData,
	}

	k.SetProject(ctx, project)

	idCounters.ProjectId++
	k.SetIdCounters(ctx, idCounters)

	_ = ctx

	return &types.MsgCreateProjectResponse{ProjectId: project.ProjectId}, nil
}
