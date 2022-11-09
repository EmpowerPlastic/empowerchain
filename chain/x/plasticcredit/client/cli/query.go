package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group plasticcredit queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdShowIdCounters())
	cmd.AddCommand(CmdListIssuer())
	cmd.AddCommand(CmdShowIssuer())
	cmd.AddCommand(CmdListCreditClass())
	cmd.AddCommand(CmdShowCreditClass())
	cmd.AddCommand(CmdListProject())
	cmd.AddCommand(CmdShowProject())
	cmd.AddCommand(CmdListCollector())
	cmd.AddCommand(CmdShowCollector())
	cmd.AddCommand(CmdListCreditBatch())
	cmd.AddCommand(CmdShowCreditBatch())
	cmd.AddCommand(CmdListCreditBalance())
	cmd.AddCommand(CmdShowCreditBalance())
	cmd.AddCommand(CmdListCreditDenom())
	// this line is used by starport scaffolding # 1

	return cmd
}
