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

func (k Keeper) CreditClassAll(c context.Context, req *types.QueryAllCreditClassRequest) (*types.QueryAllCreditClassResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var creditClasss []types.CreditClass
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	creditClassStore := prefix.NewStore(store, types.KeyPrefix(types.CreditClassKeyPrefix))

	pageRes, err := query.Paginate(creditClassStore, req.Pagination, func(key []byte, value []byte) error {
		var creditClass types.CreditClass
		if err := k.cdc.Unmarshal(value, &creditClass); err != nil {
			return err
		}

		creditClasss = append(creditClasss, creditClass)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCreditClassResponse{CreditClass: creditClasss, Pagination: pageRes}, nil
}

func (k Keeper) CreditClass(c context.Context, req *types.QueryGetCreditClassRequest) (*types.QueryGetCreditClassResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCreditClass(
		ctx,
		req.CreditClassId,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetCreditClassResponse{CreditClass: val}, nil
}
