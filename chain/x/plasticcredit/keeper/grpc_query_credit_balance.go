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

func (k Keeper) CreditBalanceAll(c context.Context, req *types.QueryAllCreditBalanceRequest) (*types.QueryAllCreditBalanceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var creditBalances []types.CreditBalance
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	creditBalanceStore := prefix.NewStore(store, types.KeyPrefix(types.CreditBalanceKeyPrefix(req.BatchDenom)))

	pageRes, err := query.Paginate(creditBalanceStore, req.Pagination, func(key []byte, value []byte) error {
		var creditBalance types.CreditBalance
		if err := k.cdc.Unmarshal(value, &creditBalance); err != nil {
			return err
		}

		creditBalances = append(creditBalances, creditBalance)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCreditBalanceResponse{CreditBalance: creditBalances, Pagination: pageRes}, nil
}

func (k Keeper) CreditBalance(c context.Context, req *types.QueryGetCreditBalanceRequest) (*types.QueryGetCreditBalanceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCreditBalance(
		ctx,
		req.BatchDenom,
		req.Owner,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetCreditBalanceResponse{CreditBalance: val}, nil
}
