package keeper

import (
	"context"

	"cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence"
)

type Querier struct {
	Keeper
}

var _ proofofexistence.QueryServer = Querier{}

func (k Keeper) Proof(goCtx context.Context, req *proofofexistence.QueryProofRequest) (*proofofexistence.QueryProofResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	metadata, found, err := k.GetProof(ctx, req.Hash)
	if err != nil {
		return nil, err
	}
	if !found {
		return nil, errors.Wrapf(proofofexistence.ErrProofNotFound, "proof was not found for hash %s", req.Hash)
	}

	return &proofofexistence.QueryProofResponse{
		Metadata: metadata,
	}, nil
}
