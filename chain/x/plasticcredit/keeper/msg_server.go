package keeper

import (
	"context"

	"cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

type msgServer struct {
	Keeper
}

// NewMsgServerImpl returns an implementation of the MsgServer interface
// for the provided Keeper.
func NewMsgServerImpl(keeper Keeper) types.MsgServer {
	return &msgServer{Keeper: keeper}
}

var _ types.MsgServer = msgServer{}

func (m msgServer) UpdateParams(goCtx context.Context, req *types.MsgUpdateParams) (*types.MsgUpdateParamsResponse, error) {
	if m.authority != req.Authority {
		return nil, errors.Wrapf(govtypes.ErrInvalidSigner, "invalid authority; expected %s, got %s", m.authority, req.Authority)
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	if err := m.setParams(ctx, req.Params); err != nil {
		return nil, err
	}

	return &types.MsgUpdateParamsResponse{}, nil
}

func (m msgServer) CreateIssuer(goCtx context.Context, req *types.MsgCreateIssuer) (*types.MsgCreateIssuerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	p, err := m.GetParams(ctx)
	if err != nil {
		return nil, err
	}

	issuerCreator := p.IssuerCreator
	if issuerCreator == "" {
		issuerCreator = m.authority
	}

	if issuerCreator != req.Creator {
		return nil, errors.Wrapf(govtypes.ErrInvalidSigner, "invalid issue creator; expected %s, got %s", issuerCreator, req.Creator)
	}

	id, err := m.createIssuer(ctx, req.Name, req.Description, req.Admin)
	if err != nil {
		return nil, err
	}

	return &types.MsgCreateIssuerResponse{
		IssuerId: id,
	}, nil
}
