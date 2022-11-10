package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

func (k msgServer) IssueCredits(goCtx context.Context, msg *types.MsgIssueCredits) (*types.MsgIssueCreditsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if err := msg.ValidateBasic(); err != nil {
		return nil, err
	}

	// TODO implement credit issuance

	_ = ctx

	return &types.MsgIssueCreditsResponse{}, nil
}
