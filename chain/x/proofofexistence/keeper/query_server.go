package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/proofofexistence"
)

type Querier struct {
	Keeper
}

var _ proofofexistence.QueryServer = Querier{}

func (k Keeper) Proof(goCtx context.Context, req *proofofexistence.QueryProofRequest) (*proofofexistence.QueryProofResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	metadata, err := k.GetProof(ctx, req.Hash)
	if err != nil {
		return nil, err
	}

	return &proofofexistence.QueryProofResponse{
		Metadata: metadata,
	}, nil
}
