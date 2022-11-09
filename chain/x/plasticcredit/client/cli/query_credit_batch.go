package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
	"github.com/spf13/cobra"
)

func CmdListCreditBatch() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-credit-batch",
		Short: "list all creditBatch",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllCreditBatchRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.CreditBatchAll(context.Background(), params)
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

func CmdShowCreditBatch() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-credit-batch [batch-denom]",
		Short: "shows a creditBatch",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argBatchDenom := args[0]

			params := &types.QueryGetCreditBatchRequest{
				BatchDenom: argBatchDenom,
			}

			res, err := queryClient.CreditBatch(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
