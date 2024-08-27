package keeper

import (
	"context"

	"cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
)

type msgServer struct {
	Keeper
}

// NewMsgServerImpl returns an implementation of the MsgServer interface
// for the provided Keeper.
func NewMsgServerImpl(keeper Keeper) plasticcredit.MsgServer {
	return &msgServer{Keeper: keeper}
}

var _ plasticcredit.MsgServer = msgServer{}

func (m msgServer) UpdateParams(goCtx context.Context, req *plasticcredit.MsgUpdateParams) (*plasticcredit.MsgUpdateParamsResponse, error) {
	if m.authority != req.Authority {
		return nil, errors.Wrapf(sdkerrors.ErrUnauthorized, "invalid authority; expected %s, got %s", m.authority, req.Authority)
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	if err := m.setParams(ctx, req.Params); err != nil {
		return nil, err
	}

	return &plasticcredit.MsgUpdateParamsResponse{}, nil
}

func (m msgServer) CreateIssuer(goCtx context.Context, req *plasticcredit.MsgCreateIssuer) (*plasticcredit.MsgCreateIssuerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	creator, err := sdk.AccAddressFromBech32(req.Creator)
	if err != nil {
		return nil, errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address: %s", req.Creator)
	}

	id, err := m.Keeper.CreateIssuer(ctx, creator, req.Name, req.Description, req.Admin)
	if err != nil {
		return nil, err
	}

	return &plasticcredit.MsgCreateIssuerResponse{
		IssuerId: id,
	}, nil
}

func (m msgServer) UpdateIssuer(goCtx context.Context, req *plasticcredit.MsgUpdateIssuer) (*plasticcredit.MsgUpdateIssuerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	updater, err := sdk.AccAddressFromBech32(req.Updater)
	if err != nil {
		return nil, errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address: %s", req.Updater)
	}

	if err := m.Keeper.UpdateIssuer(ctx, updater, req.IssuerId, req.Name, req.Description, req.Admin); err != nil {
		return nil, err
	}

	return &plasticcredit.MsgUpdateIssuerResponse{}, nil
}

func (m msgServer) CreateApplicant(goCtx context.Context, req *plasticcredit.MsgCreateApplicant) (*plasticcredit.MsgCreateApplicantResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id, err := m.createApplicant(ctx, req.Name, req.Description, req.Admin)
	if err != nil {
		return nil, err
	}

	return &plasticcredit.MsgCreateApplicantResponse{
		ApplicantId: id,
	}, nil
}

func (m msgServer) UpdateApplicant(goCtx context.Context, req *plasticcredit.MsgUpdateApplicant) (*plasticcredit.MsgUpdateApplicantResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	updater, err := sdk.AccAddressFromBech32(req.Updater)
	if err != nil {
		return nil, errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid updater address: %s", req.Updater)
	}

	if err := m.Keeper.updateApplicant(ctx, updater, req.ApplicantId, req.Name, req.Description, req.Admin); err != nil {
		return nil, err
	}

	return &plasticcredit.MsgUpdateApplicantResponse{}, nil
}

func (m msgServer) CreateCreditType(goCtx context.Context, req *plasticcredit.MsgCreateCreditType) (*plasticcredit.MsgCreateCreditTypeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	creator, err := sdk.AccAddressFromBech32(req.Creator)
	if err != nil {
		return nil, errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address: %s", req.Creator)
	}

	if err := m.Keeper.CreateCreditType(ctx, creator, req.Abbreviation, req.IssuerId, req.Name); err != nil {
		return nil, err
	}

	return &plasticcredit.MsgCreateCreditTypeResponse{}, nil
}

func (m msgServer) UpdateCreditType(goCtx context.Context, req *plasticcredit.MsgUpdateCreditType) (*plasticcredit.MsgUpdateCreditTypeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	updater, err := sdk.AccAddressFromBech32(req.Updater)
	if err != nil {
		return nil, errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid updater address: %s", req.Updater)
	}

	if err := m.Keeper.UpdateCreditType(ctx, updater, req.Abbreviation, req.Name); err != nil {
		return nil, err
	}

	return &plasticcredit.MsgUpdateCreditTypeResponse{}, nil
}

func (m msgServer) CreateProject(goCtx context.Context, req *plasticcredit.MsgCreateProject) (*plasticcredit.MsgCreateProjectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	creator, err := sdk.AccAddressFromBech32(req.Creator)
	if err != nil {
		return nil, errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address: %s", req.Creator)
	}

	projectID, err := m.Keeper.CreateProject(ctx, creator, req.ApplicantId, req.CreditTypeAbbreviation, req.Name)
	if err != nil {
		return nil, err
	}

	return &plasticcredit.MsgCreateProjectResponse{
		ProjectId: projectID,
	}, nil
}

func (m msgServer) UpdateProject(goCtx context.Context, req *plasticcredit.MsgUpdateProject) (*plasticcredit.MsgUpdateProjectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	updater, err := sdk.AccAddressFromBech32(req.Updater)
	if err != nil {
		return nil, errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid updater address: %s", req.Updater)
	}

	err = m.Keeper.UpdateProject(ctx, updater, req.ProjectId, req.Name)
	if err != nil {
		return nil, err
	}

	return &plasticcredit.MsgUpdateProjectResponse{}, nil
}

func (m msgServer) ApproveProject(goCtx context.Context, req *plasticcredit.MsgApproveProject) (*plasticcredit.MsgApproveProjectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	approver, err := sdk.AccAddressFromBech32(req.Approver)
	if err != nil {
		return nil, errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid approver address: %s", req.Approver)
	}

	if err := m.Keeper.ApproveProject(ctx, approver, req.ProjectId); err != nil {
		return nil, err
	}

	return &plasticcredit.MsgApproveProjectResponse{}, nil
}

func (m msgServer) RejectProject(goCtx context.Context, req *plasticcredit.MsgRejectProject) (*plasticcredit.MsgRejectProjectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	rejector, err := sdk.AccAddressFromBech32(req.Rejector)
	if err != nil {
		return nil, errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid rejector address: %s", req.Rejector)
	}

	if err := m.Keeper.RejectProject(ctx, rejector, req.ProjectId); err != nil {
		return nil, err
	}

	return &plasticcredit.MsgRejectProjectResponse{}, nil
}

func (m msgServer) SuspendProject(goCtx context.Context, req *plasticcredit.MsgSuspendProject) (*plasticcredit.MsgSuspendProjectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	updater, err := sdk.AccAddressFromBech32(req.Updater)
	if err != nil {
		return nil, errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid updater address: %s", req.Updater)
	}

	if err := m.Keeper.SuspendProject(ctx, updater, req.ProjectId); err != nil {
		return nil, err
	}

	return &plasticcredit.MsgSuspendProjectResponse{}, nil
}

func (m msgServer) IssueCredits(goCtx context.Context, req *plasticcredit.MsgIssueCredits) (*plasticcredit.MsgIssueCreditsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	collection, err := m.issueCredits(ctx, req.Creator, req.ProjectId, req.SerialNumber, req.CreditAmount, req.MetadataUris)
	if err != nil {
		return nil, err
	}
	return &plasticcredit.MsgIssueCreditsResponse{
		Collection: collection,
	}, nil
}

func (m msgServer) TransferCredits(goCtx context.Context, req *plasticcredit.MsgTransferCredits) (*plasticcredit.MsgTransferCreditsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	from, err := sdk.AccAddressFromBech32(req.From)
	if err != nil {
		return &plasticcredit.MsgTransferCreditsResponse{}, sdkerrors.ErrInvalidAddress
	}
	to, err := sdk.AccAddressFromBech32(req.To)
	if err != nil {
		return &plasticcredit.MsgTransferCreditsResponse{}, sdkerrors.ErrInvalidAddress
	}
	err = m.transferCredits(ctx, req.Denom, from, to, req.Amount, req.Retire, req.RetiringEntityName, req.RetiringEntityAdditionalData)
	if err != nil {
		return &plasticcredit.MsgTransferCreditsResponse{}, err
	}
	return &plasticcredit.MsgTransferCreditsResponse{}, nil
}

func (m msgServer) RetireCredits(goCtx context.Context, req *plasticcredit.MsgRetireCredits) (*plasticcredit.MsgRetireCreditsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	newBalance, err := m.retireCreditsForAddress(ctx, req.Owner, req.Denom, req.Amount, req.RetiringEntityName, req.RetiringEntityAdditionalData)
	if err != nil {
		return &plasticcredit.MsgRetireCreditsResponse{}, err
	}
	return &plasticcredit.MsgRetireCreditsResponse{
		Balance: newBalance,
	}, nil
}
