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

func (k Keeper) CollectorAll(c context.Context, req *types.QueryAllCollectorRequest) (*types.QueryAllCollectorResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var collectors []types.Collector
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	collectorStore := prefix.NewStore(store, types.KeyPrefix(types.CollectorKeyPrefix))

	pageRes, err := query.Paginate(collectorStore, req.Pagination, func(key []byte, value []byte) error {
		var collector types.Collector
		if err := k.cdc.Unmarshal(value, &collector); err != nil {
			return err
		}

		collectors = append(collectors, collector)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCollectorResponse{Collector: collectors, Pagination: pageRes}, nil
}

func (k Keeper) Collector(c context.Context, req *types.QueryGetCollectorRequest) (*types.QueryGetCollectorResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCollector(
		ctx,
		req.CollectorId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetCollectorResponse{Collector: val}, nil
}
