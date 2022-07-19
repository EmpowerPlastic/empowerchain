package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/empowerchain/empowerchain/testutil/keeper"
	"github.com/empowerchain/empowerchain/testutil/nullify"
	"github.com/empowerchain/empowerchain/x/proofofexistence/keeper"
	"github.com/empowerchain/empowerchain/x/proofofexistence/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestProofQuerySingle(t *testing.T) {
	k, ctx := keepertest.ProofofexistenceKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNProof(k, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetProofRequest
		response *types.QueryGetProofResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetProofRequest{
				Hash: msgs[0].Hash,
			},
			response: &types.QueryGetProofResponse{Proof: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetProofRequest{
				Hash: msgs[1].Hash,
			},
			response: &types.QueryGetProofResponse{Proof: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetProofRequest{
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
			q := keeper.Querier{Keeper: *k}
			response, err := q.Proof(wctx, tc.request)
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
