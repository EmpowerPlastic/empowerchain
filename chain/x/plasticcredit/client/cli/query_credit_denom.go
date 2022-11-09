package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
	"github.com/spf13/cobra"
)

func CmdListCreditDenom() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-credit-denom",
		Short: "list all creditDenom",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllCreditDenomRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.CreditDenomAll(context.Background(), params)
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
