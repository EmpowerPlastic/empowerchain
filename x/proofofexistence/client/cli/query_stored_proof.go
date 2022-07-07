package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/empowerchain/empowerchain/x/proofofexistence/types"
	"github.com/spf13/cobra"
)

func CmdShowStoredProof() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-stored-proof [hash]",
		Short: "shows a StoredProof",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argHash := args[0]

			params := &types.QueryGetStoredProofRequest{
				Hash: argHash,
			}

			res, err := queryClient.StoredProof(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
