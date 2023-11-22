package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"github.com/cosmos/ibc-go/v7/modules/apps/27-interchain-accounts/controller/types"
	icatypes "github.com/cosmos/ibc-go/v7/modules/apps/27-interchain-accounts/types"
)

var _ types.MsgServer = msgServer{}

type msgServer struct {
	*Keeper
}

// NewMsgServerImpl returns an implementation of the ICS27 MsgServer interface
// for the provided Keeper.
func NewMsgServerImpl(keeper *Keeper) types.MsgServer {
	return &msgServer{Keeper: keeper}
}

// RegisterInterchainAccount defines a rpc handler for MsgRegisterInterchainAccount
func (s msgServer) RegisterInterchainAccount(goCtx context.Context, msg *types.MsgRegisterInterchainAccount) (*types.MsgRegisterInterchainAccountResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	portID, err := icatypes.NewControllerPortID(msg.Owner)
	if err != nil {
		return nil, err
	}

	if s.IsMiddlewareEnabled(ctx, portID, msg.ConnectionId) && !s.IsActiveChannelClosed(ctx, msg.ConnectionId, portID) {
		return nil, sdkerrors.Wrap(icatypes.ErrInvalidChannelFlow, "channel is already active or a handshake is in flight")
	}

	s.SetMiddlewareDisabled(ctx, portID, msg.ConnectionId)

	channelID, err := s.registerInterchainAccount(ctx, msg.ConnectionId, portID, msg.Version)
	if err != nil {
		s.Logger(ctx).Error("error registering interchain account", "error", err.Error())
		return nil, err
	}

	s.Logger(ctx).Info("successfully registered interchain account", "channel-id", channelID)

	return &types.MsgRegisterInterchainAccountResponse{
		ChannelId: channelID,
		PortId:    portID,
	}, nil
}

// SendTx defines a rpc handler for MsgSendTx
func (s msgServer) SendTx(goCtx context.Context, msg *types.MsgSendTx) (*types.MsgSendTxResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	portID, err := icatypes.NewControllerPortID(msg.Owner)
	if err != nil {
		return nil, err
	}

	// the absolute timeout value is calculated using the controller chain block time + the relative timeout value
	// this assumes time synchrony to a certain degree between the controller and counterparty host chain
	absoluteTimeout := uint64(ctx.BlockTime().UnixNano()) + msg.RelativeTimeout
	seq, err := s.sendTx(ctx, msg.ConnectionId, portID, msg.PacketData, absoluteTimeout)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendTxResponse{Sequence: seq}, nil
}
