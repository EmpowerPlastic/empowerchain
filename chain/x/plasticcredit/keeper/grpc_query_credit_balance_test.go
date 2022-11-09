package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/empowerchain/empowerchain/testutil/keeper"
	"github.com/empowerchain/empowerchain/testutil/nullify"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

// TODO use real addresses and denoms after validation is implemented
func TestCreditBalanceQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNCreditBalance(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetCreditBalanceRequest
		response *types.QueryGetCreditBalanceResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetCreditBalanceRequest{
				BatchDenom: "denom",
				Owner:      msgs[0].Owner,
			},
			response: &types.QueryGetCreditBalanceResponse{CreditBalance: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetCreditBalanceRequest{
				BatchDenom: "denom",
				Owner:      msgs[1].Owner,
			},
			response: &types.QueryGetCreditBalanceResponse{CreditBalance: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetCreditBalanceRequest{
				BatchDenom: "denom",
				Owner:      strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.CreditBalance(wctx, tc.request)
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

func TestCreditBalanceQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNCreditBalance(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllCreditBalanceRequest {
		return &types.QueryAllCreditBalanceRequest{
			BatchDenom: "denom",
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
			resp, err := keeper.CreditBalanceAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.CreditBalance), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.CreditBalance),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.CreditBalanceAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.CreditBalance), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.CreditBalance),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.CreditBalanceAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.CreditBalance),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.CreditBalanceAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
