package keeper

import (
	"context"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
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

func (m msgServer) CreateCreditClass(goCtx context.Context, req *plasticcredit.MsgCreateCreditClass) (*plasticcredit.MsgCreateCreditClassResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	creator, err := sdk.AccAddressFromBech32(req.Creator)
	if err != nil {
		return nil, errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address: %s", req.Creator)
	}

	if err := m.Keeper.CreateCreditClass(ctx, creator, req.Abbreviation, req.IssuerId, req.Name); err != nil {
		return nil, err
	}

	return &plasticcredit.MsgCreateCreditClassResponse{}, nil
}

func (m msgServer) CreateProject(goCtx context.Context, req *plasticcredit.MsgCreateProject) (*plasticcredit.MsgCreateProjectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	creator, err := sdk.AccAddressFromBech32(req.Creator)
	if err != nil {
		return nil, errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address: %s", req.Creator)
	}

	projectID, err := m.Keeper.CreateProject(ctx, creator, req.ApplicantId, req.CreditClassAbbreviation, req.Name)
	if err != nil {
		return nil, err
	}

	return &plasticcredit.MsgCreateProjectResponse{
		ProjectId: projectID,
	}, nil
}

func (m msgServer) IssueCredits(goCtx context.Context, req *plasticcredit.MsgIssueCredits) (*plasticcredit.MsgIssueCreditsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	collection, err := m.issueCredits(ctx, req.Creator, req.ProjectId, req.SerialNumber, req.CreditAmount)
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
	err = m.transferCredits(ctx, req.Denom, from, to, req.Amount, req.Retire)
	if err != nil {
		return &plasticcredit.MsgTransferCreditsResponse{}, err
	}
	return &plasticcredit.MsgTransferCreditsResponse{}, nil
}

func (m msgServer) RetireCredits(goCtx context.Context, req *plasticcredit.MsgRetireCredits) (*plasticcredit.MsgRetireCreditsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	owner, err := sdk.AccAddressFromBech32(req.Owner)
	if err != nil {
		return &plasticcredit.MsgRetireCreditsResponse{}, sdkerrors.ErrInvalidAddress
	}
	newBalance, err := m.retireCreditsForAddress(ctx, owner, req.Denom, req.Amount)
	if err != nil {
		return &plasticcredit.MsgRetireCreditsResponse{}, err
	}
	return &plasticcredit.MsgRetireCreditsResponse{
		Balance: newBalance,
	}, nil
}
