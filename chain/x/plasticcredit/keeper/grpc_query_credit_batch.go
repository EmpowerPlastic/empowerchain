package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CreditBatchAll(c context.Context, req *types.QueryAllCreditBatchRequest) (*types.QueryAllCreditBatchResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var creditBatchs []types.CreditBatch
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	creditBatchStore := prefix.NewStore(store, types.KeyPrefix(types.CreditBatchKeyPrefix))

	pageRes, err := query.Paginate(creditBatchStore, req.Pagination, func(key []byte, value []byte) error {
		var creditBatch types.CreditBatch
		if err := k.cdc.Unmarshal(value, &creditBatch); err != nil {
			return err
		}

		creditBatchs = append(creditBatchs, creditBatch)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCreditBatchResponse{CreditBatch: creditBatchs, Pagination: pageRes}, nil
}

func (k Keeper) CreditBatch(c context.Context, req *types.QueryGetCreditBatchRequest) (*types.QueryGetCreditBatchResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCreditBatch(
		ctx,
		req.BatchDenom,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetCreditBatchResponse{CreditBatch: val}, nil
}
