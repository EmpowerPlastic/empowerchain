package cli

import (
	"context"
	"fmt"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"

	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd() *cobra.Command {
	// Group proofofexistence queries under a subcommand
	cmd := &cobra.Command{
		Use:                        proofofexistence.ModuleName,
		Aliases:                    []string{"poe"},
		Short:                      fmt.Sprintf("Querying commands for the %s module", proofofexistence.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(QueryProofCmd())

	return cmd
}

func QueryProofCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "proof [hash]",
		Short: "get proof metadata",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := proofofexistence.NewQueryClient(clientCtx)

			argHash := args[0]

			params := &proofofexistence.QueryProofRequest{
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
