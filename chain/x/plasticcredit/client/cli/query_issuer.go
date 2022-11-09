package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdListIssuer() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-issuer",
		Short: "list all issuer",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllIssuerRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.IssuerAll(context.Background(), params)
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

func CmdShowIssuer() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-issuer [issuer-id]",
		Short: "shows a issuer",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIssuerId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			params := &types.QueryGetIssuerRequest{
				IssuerId: argIssuerId,
			}

			res, err := queryClient.Issuer(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
