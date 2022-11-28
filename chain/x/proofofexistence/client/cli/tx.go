package cli

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/empowerchain/empowerchain/x/proofofexistence"
	"github.com/spf13/cobra"
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
