package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/empowerchain/empowerchain/testutil/keeper"
	"github.com/empowerchain/empowerchain/testutil/nullify"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

func TestIdCountersQuery(t *testing.T) {
	keeper, ctx := keepertest.PlasticcreditKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestIdCounters(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetIdCountersRequest
		response *types.QueryGetIdCountersResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetIdCountersRequest{},
			response: &types.QueryGetIdCountersResponse{IdCounters: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.IdCounters(wctx, tc.request)
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
