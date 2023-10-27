package preparegenesis

import (
	"encoding/json"
	"fmt"

	tmtypes "github.com/cometbft/cometbft/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/types/module"
	genutiltypes "github.com/cosmos/cosmos-sdk/x/genutil/types"
	"github.com/spf13/cobra"

	genesistools "github.com/EmpowerPlastic/empowerchain/app/genesis-tools"
)

func SingleValidatorCmd(defaultNodeHome string, mbm module.BasicManager) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "single-validator path_to_genesis_file operator_key_name consensus_pubkey [chain_id]",
		Short: "Edits a genesis file to work with a single validator",
		Long: `Edits a genesis file to work with a single validator.
Params:
	- 1st param: Path to the genesis file
	- 2nd param: Name of the key from keyring to use as validator if preset is devnet
	- 3rd param: Base64 encoded tendermint pubkey of the validator if preset is devnet (present in the priv_validator_key.json file)
	- 4th param: Chain ID (optional, default: emp-devnet-1)
Example:
	empowerd genesis single-validator genesis.json validator 1dGwzfPmDwneX2qievD3CMVXzEupNOjEBZkwqpTbXqY=
Output:
	- Creates a new genesis file in the same directory with the suffix .generated
`,
		Args: cobra.MinimumNArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			genesisState := genesistools.GenesisState{}
			var appState map[string]json.RawMessage
			var genDoc *tmtypes.GenesisDoc
			appState, genDoc, err := genutiltypes.GenesisStateFromGenFile(args[0])
			if err != nil {
				return fmt.Errorf("failed to unmarshal genesis state: %w", err)
			}
			// fetch key from keyring
			kb := clientCtx.Keyring
			keyrecord, err := kb.Key(args[1])
			if err != nil {
				return fmt.Errorf("failed to get key: %w", err)
			}
			pubKey, err := keyrecord.GetPubKey()
			if err != nil {
				return fmt.Errorf("failed to get pubkey: %w", err)
			}

			genDoc.Validators = []tmtypes.GenesisValidator{}

			genesistools.UnmarshalGenesis(clientCtx, &genesisState, appState)
			genesistools.SingleValidatorGenesisState(clientCtx, &genesisState, pubKey, args[2])
			if len(args) == 4 {
				genDoc.ChainID = args[3]
			} else {
				genDoc.ChainID = "emp-devnet-1"
			}

			// marshal the genesis state back into the appState
			appState = genesistools.MarshalGenesis(clientCtx, &genesisState, appState)

			return ValidateAndGenerateGenesisFile(clientCtx, appState, genDoc, args[0]+".generated", mbm)
		},
	}

	cmd.Flags().String(flags.FlagHome, defaultNodeHome, "The application home directory")
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
