package keeper

import (
	"context"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/proofofexistence/types"
)

type Querier struct {
	Keeper
}

var _ types.QueryServer = Querier{}

func (k Keeper) Proof(goCtx context.Context, req *types.QueryProofRequest) (*types.QueryProofResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	metadata, err := k.GetProof(ctx, req.Hash)
	if err != nil {
		return nil, err
	}

	return &types.QueryProofResponse{
		Metadata: metadata,
	}, nil
}
