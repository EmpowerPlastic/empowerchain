package preparegenesis

import (
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
		Use:   "mainnet [chain-id] [genesis-time] [path_to_genesis_file]",
		Short: "Creates new mainnet genesis file",
		Long: `Creates new mainnet genesis file.
Params:
	- 1st param: Chain ID (optional)
	- 2nd param: Genesis time in RFC3339 format (optional) 
	- 3rd param: Path to the genesis file (optional). Defaults to the default node home directory.
Example:
	empowerd genesis mainnet
Output:
	- Creates a new mainnet genesis file
`,
		Args: cobra.MaximumNArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)
			cdc := clientCtx.Codec

			genesisState := genesistools.GenesisState{}
			genesisState.ChainID = "empowerchain-1"
			genesisState.GenesisTime = time.Date(2023, 6, 28, 15, 0, 0, 0, time.UTC)
			outputFilePath := "./mainnet-genesis.json"
			sdk.DefaultBondDenom = params.BaseCoinDenom

			// Overwrite from params if there
			if len(args) > 0 {
				genesisState.ChainID = args[0]
			}
			if len(args) > 1 {
				genesisTime, err := time.Parse(time.RFC3339, args[1])
				if err != nil {
					return err
				}
				genesisState.GenesisTime = genesisTime
			}
			if len(args) > 2 {
				outputFilePath = args[2]
			}

			appState := mbm.DefaultGenesis(cdc)
			genesistools.UnmarshalGenesis(clientCtx, &genesisState, appState) // This puts default genesis state into genesisState
			genesistools.MainnetGenesisState(&genesisState, clientCtx.Codec)
			genDoc := &tmtypes.GenesisDoc{}
			genDoc.ChainID = genesisState.ChainID
			genDoc.GenesisTime = genesisState.GenesisTime

			// marshal the genesis state back into the appState
			appState = genesistools.MarshalGenesis(clientCtx, &genesisState, appState)

			return ValidateAndGenerateGenesisFile(clientCtx, appState, genDoc, outputFilePath, mbm)
		},
	}

	cmd.Flags().String(flags.FlagHome, defaultNodeHome, "The application home directory")
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
