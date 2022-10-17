package cli

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/empowerchain/empowerchain/x/proofofexistence/types"
	"github.com/spf13/cobra"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd() *cobra.Command {
	// Group proofofexistence queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Aliases:                    []string{"poe"},
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(QueryProofCmd())

	return cmd
}
