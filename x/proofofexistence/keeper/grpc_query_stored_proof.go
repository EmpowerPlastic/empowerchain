package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/empowerchain/empowerchain/x/proofofexistence/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) StoredProofAll(c context.Context, req *types.QueryAllStoredProofRequest) (*types.QueryAllStoredProofResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var storedProofs []types.StoredProof
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	storedProofStore := prefix.NewStore(store, types.KeyPrefix(types.StoredProofKeyPrefix))

	pageRes, err := query.Paginate(storedProofStore, req.Pagination, func(key []byte, value []byte) error {
		var storedProof types.StoredProof
		if err := k.cdc.Unmarshal(value, &storedProof); err != nil {
			return err
		}

		storedProofs = append(storedProofs, storedProof)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllStoredProofResponse{StoredProof: storedProofs, Pagination: pageRes}, nil
}

func (k Keeper) StoredProof(c context.Context, req *types.QueryGetStoredProofRequest) (*types.QueryGetStoredProofResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetStoredProof(
		ctx,
		req.Hash,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetStoredProofResponse{StoredProof: val}, nil
}
