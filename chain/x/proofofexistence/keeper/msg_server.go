package keeper

import (
	"context"

	"cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence"
)

var _ proofofexistence.MsgServer = msgServer{}

type msgServer struct {
	Keeper
}

// NewMsgServerImpl returns an implementation of the MsgServer interface
// for the provided Keeper.
func NewMsgServerImpl(keeper Keeper) proofofexistence.MsgServer {
	return &msgServer{Keeper: keeper}
}

func (k msgServer) CreateProof(goCtx context.Context, req *proofofexistence.MsgCreateProof) (*proofofexistence.MsgCreateProofResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	acc, err := sdk.AccAddressFromBech32(req.Creator)
	if err != nil {
		return nil, errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address: %s", req.Creator)
	}

	if err := k.CreateNewProof(ctx, req.Hash, acc); err != nil {
		return nil, err
	}

	return &proofofexistence.MsgCreateProofResponse{}, nil
}
