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

func TestCreditClassQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNCreditClass(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetCreditClassRequest
		response *types.QueryGetCreditClassResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetCreditClassRequest{
				CreditClassId: msgs[0].CreditClassId,
			},
			response: &types.QueryGetCreditClassResponse{CreditClass: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetCreditClassRequest{
				CreditClassId: msgs[1].CreditClassId,
			},
			response: &types.QueryGetCreditClassResponse{CreditClass: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetCreditClassRequest{
				CreditClassId: 100000,
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.CreditClass(wctx, tc.request)
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

func TestCreditClassQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNCreditClass(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllCreditClassRequest {
		return &types.QueryAllCreditClassRequest{
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
			resp, err := keeper.CreditClassAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.CreditClass), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.CreditClass),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.CreditClassAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.CreditClass), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.CreditClass),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.CreditClassAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.CreditClass),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.CreditClassAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
