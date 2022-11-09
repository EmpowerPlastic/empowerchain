package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CreditDenomAll(c context.Context, req *types.QueryAllCreditDenomRequest) (*types.QueryAllCreditDenomResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var creditDenoms []types.CreditDenom
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	creditDenomStore := prefix.NewStore(store, types.KeyPrefix(types.CreditDenomKeyPrefix))

	pageRes, err := query.Paginate(creditDenomStore, req.Pagination, func(key []byte, value []byte) error {
		var creditDenom types.CreditDenom
		if err := k.cdc.Unmarshal(value, &creditDenom); err != nil {
			return err
		}

		creditDenoms = append(creditDenoms, creditDenom)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCreditDenomResponse{CreditDenom: creditDenoms, Pagination: pageRes}, nil
}

func (k Keeper) CreditDenom(c context.Context, req *types.QueryGetCreditDenomRequest) (*types.QueryGetCreditDenomResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	creditDenom, found := k.GetCreditDenom(ctx, req.BatchDenom)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetCreditDenomResponse{CreditDenom: creditDenom}, nil
}
