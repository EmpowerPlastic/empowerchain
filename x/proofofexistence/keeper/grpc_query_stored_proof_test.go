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
	"github.com/empowerchain/empowerchain/x/proofofexistence/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestStoredProofQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.ProofofexistenceKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNStoredProof(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetStoredProofRequest
		response *types.QueryGetStoredProofResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetStoredProofRequest{
				Hash: msgs[0].Hash,
			},
			response: &types.QueryGetStoredProofResponse{StoredProof: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetStoredProofRequest{
				Hash: msgs[1].Hash,
			},
			response: &types.QueryGetStoredProofResponse{StoredProof: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetStoredProofRequest{
				Hash: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.StoredProof(wctx, tc.request)
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

func TestStoredProofQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.ProofofexistenceKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNStoredProof(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllStoredProofRequest {
		return &types.QueryAllStoredProofRequest{
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
			resp, err := keeper.StoredProofAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.StoredProof), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.StoredProof),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.StoredProofAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.StoredProof), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.StoredProof),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.StoredProofAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.StoredProof),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.StoredProofAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
