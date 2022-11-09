package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
	"github.com/spf13/cobra"
)

func CmdListCreditBalance() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-credit-balance [batch_denom]",
		Short: "list all creditBalance",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)
			argBatchDenom := args[0]

			params := &types.QueryAllCreditBalanceRequest{
				BatchDenom: argBatchDenom,
				Pagination: pageReq,
			}

			res, err := queryClient.CreditBalanceAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowCreditBalance() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-credit-balance [batch_denom] [owner]",
		Short: "shows a creditBalance",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argBatchDenom := args[0]
			argOwner := args[1]

			params := &types.QueryGetCreditBalanceRequest{
				BatchDenom: argBatchDenom,
				Owner:      argOwner,
			}

			res, err := queryClient.CreditBalance(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
