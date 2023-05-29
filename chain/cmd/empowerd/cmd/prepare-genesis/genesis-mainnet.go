package preparegenesis

import (
	"fmt"
	"time"

	tmtypes "github.com/cometbft/cometbft/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	"github.com/spf13/cobra"

	genesistools "github.com/EmpowerPlastic/empowerchain/app/genesis-tools"
	"github.com/EmpowerPlastic/empowerchain/app/params"
)

func MainnetCmd(defaultNodeHome string, mbm module.BasicManager) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "mainnet chain-id genesis-time [path_to_genesis_file]",
		Short: "Creates new mainnet genesis file",
		Long: `Creates new mainnet genesis file.
Params:
	- 1st param: Chain ID
	- 2nd param: Genesis time in RFC3339 format
	- 3rd param: Path to the genesis file (optional). Defaults to the default node home directory.
Example:
	empowerd genesis mainnet empowerchain-1 2021-01-01T00:00:00Z
Output:
	- Creates a new genesis file
`,
		Args: cobra.MinimumNArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)
			cdc := clientCtx.Codec

			genesisTime, err := time.Parse(time.RFC3339, args[1])
			if err != nil {
				return err
			}

			genesisState := genesistools.GenesisState{}
			genesisState.GenesisTime = genesisTime

			// Overwrite default denom
			sdk.DefaultBondDenom = params.BaseCoinDenom

			appState := mbm.DefaultGenesis(cdc)
			genesistools.UnmarshalGenesis(clientCtx, &genesisState, appState) // This puts default genesis state into genesisState
			genesistools.MainnetGenesisState(&genesisState)
			genDoc := &tmtypes.GenesisDoc{}
			genDoc.ChainID = args[0]
			genDoc.GenesisTime = genesisTime
			var filePath string
			if len(args) == 3 {
				filePath = args[2]
			} else {
				filePath = fmt.Sprintf("%s/%s", defaultNodeHome, "config/genesis.json")
			}

			// marshal the genesis state back into the appState
			appState = genesistools.MarshalGenesis(clientCtx, &genesisState, appState)

			return ValidateAndGenerateGenesisFile(clientCtx, appState, genDoc, filePath, mbm)
		},
	}

	cmd.Flags().String(flags.FlagHome, defaultNodeHome, "The application home directory")
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
