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

// TODO use real addresses and denoms after validation is implemented
func networkWithCreditBalanceObjects(t *testing.T, n int) (*network.Network, []types.BatchDenomToCreditBalance) {
	t.Helper()
	cfg := network.DefaultConfig()
	state := types.GenesisState{}
	require.NoError(t, cfg.Codec.UnmarshalJSON(cfg.GenesisState[types.ModuleName], &state))

	var creditBalances []*types.CreditBalance
	for i := 0; i < n; i++ {
		creditBalances = append(creditBalances, &types.CreditBalance{
			Owner: "owner" + strconv.Itoa(i),
			Balance: &types.CreditAmount{
				Active:  uint64(i),
				Retired: uint64(i),
			},
		})
	}
	batchDenomToCreditBalance := types.BatchDenomToCreditBalance{
		BatchDenom:     "denom",
		CreditBalances: creditBalances,
	}
	state.BatchDenomToCreditBalance = append(state.BatchDenomToCreditBalance, batchDenomToCreditBalance)
	buf, err := cfg.Codec.MarshalJSON(&state)
	require.NoError(t, err)
	cfg.GenesisState[types.ModuleName] = buf
	return network.New(t, cfg), state.BatchDenomToCreditBalance
}

func TestShowCreditBalance(t *testing.T) {
	net, objs := networkWithCreditBalanceObjects(t, 2)

	ctx := net.Validators[0].ClientCtx
	common := []string{
		fmt.Sprintf("--%s=json", tmcli.OutputFlag),
	}
	for _, tc := range []struct {
		desc       string
		batchDenom string
		owner      string

		args []string
		err  error
		obj  types.CreditBalance
	}{
		{
			desc:       "found",
			batchDenom: "denom",
			owner:      "owner",

			args: common,
			obj:  *objs[0].CreditBalances[0],
		},
		{
			desc:       "not found",
			batchDenom: "NotFound",
			owner:      "owner",

			args: common,
			err:  status.Error(codes.NotFound, "not found"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			args := []string{
				tc.batchDenom,
				tc.owner,
			}
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdShowCreditBalance(), args)
			if tc.err != nil {
				stat, ok := status.FromError(tc.err)
				require.True(t, ok)
				require.ErrorIs(t, stat.Err(), tc.err)
			} else {
				require.NoError(t, err)
				var resp types.QueryGetCreditBalanceResponse
				require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.NotNil(t, resp.CreditBalance)
				require.Equal(t,
					nullify.Fill(&tc.obj),
					nullify.Fill(&resp.CreditBalance),
				)
			}
		})
	}
}

func TestListCreditBalance(t *testing.T) {
	net, objs := networkWithCreditBalanceObjects(t, 5)
	var creditBalances []types.CreditBalance
	for _, obj := range objs {
		for _, creditBalance := range obj.CreditBalances {
			creditBalances = append(creditBalances, *creditBalance)
		}
	}

	ctx := net.Validators[0].ClientCtx
	request := func(next []byte, offset, limit uint64, total bool) []string {
		args := []string{
			"denom",
		}
		args = append(args, fmt.Sprintf("--%s=json", tmcli.OutputFlag))
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
		for i := 0; i < len(creditBalances); i += step {
			args := request(nil, uint64(i), uint64(step), false)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdListCreditBalance(), args)
			require.NoError(t, err)
			var resp types.QueryAllCreditBalanceResponse
			require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
			require.LessOrEqual(t, len(resp.CreditBalance), step)
			require.Subset(t,
				nullify.Fill(creditBalances),
				nullify.Fill(resp.CreditBalance),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(creditBalances); i += step {
			args := request(next, 0, uint64(step), false)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdListCreditBalance(), args)
			require.NoError(t, err)
			var resp types.QueryAllCreditBalanceResponse
			require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
			require.LessOrEqual(t, len(resp.CreditBalance), step)
			require.Subset(t,
				nullify.Fill(creditBalances),
				nullify.Fill(resp.CreditBalance),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		args := request(nil, 0, uint64(len(creditBalances)), true)
		out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdListCreditBalance(), args)
		require.NoError(t, err)
		var resp types.QueryAllCreditBalanceResponse
		require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
		require.NoError(t, err)
		require.Equal(t, len(creditBalances), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(creditBalances),
			nullify.Fill(resp.CreditBalance),
		)
	})
}
