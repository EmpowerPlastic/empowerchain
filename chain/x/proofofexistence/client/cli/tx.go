package cli

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"

	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence"
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        proofofexistence.ModuleName,
		Aliases:                    []string{"poe"},
		Short:                      fmt.Sprintf("%s transactions subcommands", proofofexistence.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(MsgCreateProof())

	return cmd
}

func MsgCreateProof() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-proof [hash]",
		Short: "Create new proof of existence from hash",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argHash := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := proofofexistence.MsgCreateProof{
				Hash:    argHash,
				Creator: clientCtx.GetFromAddress().String(),
			}

			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), &msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
