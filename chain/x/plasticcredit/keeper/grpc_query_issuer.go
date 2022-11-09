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

func (k Keeper) IssuerAll(c context.Context, req *types.QueryAllIssuerRequest) (*types.QueryAllIssuerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var issuers []types.Issuer
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	issuerStore := prefix.NewStore(store, types.KeyPrefix(types.IssuerKeyPrefix))

	pageRes, err := query.Paginate(issuerStore, req.Pagination, func(key []byte, value []byte) error {
		var issuer types.Issuer
		if err := k.cdc.Unmarshal(value, &issuer); err != nil {
			return err
		}

		issuers = append(issuers, issuer)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllIssuerResponse{Issuer: issuers, Pagination: pageRes}, nil
}

func (k Keeper) Issuer(c context.Context, req *types.QueryGetIssuerRequest) (*types.QueryGetIssuerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetIssuer(
		ctx,
		req.IssuerId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetIssuerResponse{Issuer: val}, nil
}
