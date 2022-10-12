package cli

import (
	"context"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/empowerchain/empowerchain/x/proofofexistence/types"
	"github.com/spf13/cobra"
)

func QueryProofCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "proof [hash]",
		Short: "get proof metadata",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argHash := args[0]

			params := &types.QueryProofRequest{
				Hash: argHash,
			}

			res, err := queryClient.Proof(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
