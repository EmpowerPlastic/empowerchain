package cli_test

import (
	"fmt"
	"strconv"
	"testing"

	"github.com/cosmos/cosmos-sdk/client/flags"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	"github.com/stretchr/testify/require"
	tmcli "github.com/tendermint/tendermint/libs/cli"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/empowerchain/empowerchain/testutil/network"
	"github.com/empowerchain/empowerchain/testutil/nullify"
	"github.com/empowerchain/empowerchain/x/plasticcredit/client/cli"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func networkWithCreditBatchObjects(t *testing.T, n int) (*network.Network, []types.CreditBatch) {
	t.Helper()
	cfg := network.DefaultConfig()
	state := types.GenesisState{}
	require.NoError(t, cfg.Codec.UnmarshalJSON(cfg.GenesisState[types.ModuleName], &state))

	for i := 0; i < n; i++ {
		creditBatch := types.CreditBatch{
			BatchDenom: strconv.Itoa(i),
		}
		nullify.Fill(&creditBatch)
		state.CreditBatchList = append(state.CreditBatchList, creditBatch)
	}
	buf, err := cfg.Codec.MarshalJSON(&state)
	require.NoError(t, err)
	cfg.GenesisState[types.ModuleName] = buf
	return network.New(t, cfg), state.CreditBatchList
}

func TestShowCreditBatch(t *testing.T) {
	net, objs := networkWithCreditBatchObjects(t, 2)

	ctx := net.Validators[0].ClientCtx
	common := []string{
		fmt.Sprintf("--%s=json", tmcli.OutputFlag),
	}
	for _, tc := range []struct {
		desc         string
		idBatchDenom string

		args []string
		err  error
		obj  types.CreditBatch
	}{
		{
			desc:         "found",
			idBatchDenom: objs[0].BatchDenom,

			args: common,
			obj:  objs[0],
		},
		{
			desc:         "not found",
			idBatchDenom: strconv.Itoa(100000),

			args: common,
			err:  status.Error(codes.NotFound, "not found"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			args := []string{
				tc.idBatchDenom,
			}
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdShowCreditBatch(), args)
			if tc.err != nil {
				stat, ok := status.FromError(tc.err)
				require.True(t, ok)
				require.ErrorIs(t, stat.Err(), tc.err)
			} else {
				require.NoError(t, err)
				var resp types.QueryGetCreditBatchResponse
				require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.NotNil(t, resp.CreditBatch)
				require.Equal(t,
					nullify.Fill(&tc.obj),
					nullify.Fill(&resp.CreditBatch),
				)
			}
		})
	}
}

func TestListCreditBatch(t *testing.T) {
	net, objs := networkWithCreditBatchObjects(t, 5)

	ctx := net.Validators[0].ClientCtx
	request := func(next []byte, offset, limit uint64, total bool) []string {
		args := []string{
			fmt.Sprintf("--%s=json", tmcli.OutputFlag),
		}
		if next == nil {
			args = append(args, fmt.Sprintf("--%s=%d", flags.FlagOffset, offset))
		} else {
			args = append(args, fmt.Sprintf("--%s=%s", flags.FlagPageKey, next))
		}
		args = append(args, fmt.Sprintf("--%s=%d", flags.FlagLimit, limit))
		if total {
			args = append(args, fmt.Sprintf("--%s", flags.FlagCountTotal))
		}
		return args
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(objs); i += step {
			args := request(nil, uint64(i), uint64(step), false)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdListCreditBatch(), args)
			require.NoError(t, err)
			var resp types.QueryAllCreditBatchResponse
			require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
			require.LessOrEqual(t, len(resp.CreditBatch), step)
			require.Subset(t,
				nullify.Fill(objs),
				nullify.Fill(resp.CreditBatch),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(objs); i += step {
			args := request(next, 0, uint64(step), false)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdListCreditBatch(), args)
			require.NoError(t, err)
			var resp types.QueryAllCreditBatchResponse
			require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
			require.LessOrEqual(t, len(resp.CreditBatch), step)
			require.Subset(t,
				nullify.Fill(objs),
				nullify.Fill(resp.CreditBatch),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		args := request(nil, 0, uint64(len(objs)), true)
		out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdListCreditBatch(), args)
		require.NoError(t, err)
		var resp types.QueryAllCreditBatchResponse
		require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
		require.NoError(t, err)
		require.Equal(t, len(objs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(objs),
			nullify.Fill(resp.CreditBatch),
		)
	})
}
