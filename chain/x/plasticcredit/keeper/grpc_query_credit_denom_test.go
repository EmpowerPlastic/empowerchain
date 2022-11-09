package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/empowerchain/empowerchain/testutil/keeper"
	"github.com/empowerchain/empowerchain/testutil/nullify"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

func TestCreditDenomQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNCreditDenom(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetCreditDenomRequest
		response *types.QueryGetCreditDenomResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetCreditDenomRequest{BatchDenom: msgs[0].BatchDenom},
			response: &types.QueryGetCreditDenomResponse{CreditDenom: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetCreditDenomRequest{BatchDenom: msgs[1].BatchDenom},
			response: &types.QueryGetCreditDenomResponse{CreditDenom: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetCreditDenomRequest{BatchDenom: "KeyNotPresent"},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.CreditDenom(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestCreditDenomQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNCreditDenom(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllCreditDenomRequest {
		return &types.QueryAllCreditDenomRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.CreditDenomAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.CreditDenom), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.CreditDenom),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.CreditDenomAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.CreditDenom), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.CreditDenom),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.CreditDenomAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.CreditDenom),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.CreditDenomAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
