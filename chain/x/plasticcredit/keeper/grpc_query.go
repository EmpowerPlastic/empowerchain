package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Querier struct {
	Keeper
}

var _ plasticcredit.QueryServer = Querier{}

func (k Querier) Params(c context.Context, req *plasticcredit.QueryParamsRequest) (*plasticcredit.QueryParamsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	params, err := k.GetParams(ctx)
	if err != nil {
		return nil, err
	}

	return &plasticcredit.QueryParamsResponse{Params: params}, nil
}
