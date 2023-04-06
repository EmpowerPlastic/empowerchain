package preparegenesis

import (
	"encoding/json"
	"fmt"

	tmtypes "github.com/cometbft/cometbft/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/types/module"
	"github.com/cosmos/cosmos-sdk/x/genutil"

	genesistools "github.com/EmpowerPlastic/empowerchain/app/genesis-tools"
)

func ValidateAndGenerateGenesisFile(clientCtx client.Context, genesisState *genesistools.GenesisState, appState map[string]json.RawMessage, genDoc *tmtypes.GenesisDoc, fileName string, mbm module.BasicManager) error {
	cdc := clientCtx.Codec

	// set right supply
	genesistools.CalculateSupply(genesisState)

	// run Marshal Genesis
	appState = genesistools.MarshalGenesis(clientCtx, genesisState, appState)

	// validate genesis state
	if err := mbm.ValidateGenesis(cdc, clientCtx.TxConfig, appState); err != nil {
		return fmt.Errorf("error validating genesis file: %s", err.Error())
	}

	// save genesis
	appStateJSON, err := json.Marshal(appState)
	if err != nil {
		return fmt.Errorf("failed to marshal application genesis state: %w", err)
	}

	genDoc.AppState = appStateJSON
	err = genutil.ExportGenesisFile(genDoc, fileName)

	return err
}
