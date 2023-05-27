package preparegenesis

import (
	"encoding/json"
	"fmt"

	tmtypes "github.com/cometbft/cometbft/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/types/module"
	"github.com/cosmos/cosmos-sdk/x/genutil"
)

func ValidateAndGenerateGenesisFile(clientCtx client.Context, appState map[string]json.RawMessage, genDoc *tmtypes.GenesisDoc, fileName string, mbm module.BasicManager) error {
	// validate genesis state
	if err := mbm.ValidateGenesis(clientCtx.Codec, clientCtx.TxConfig, appState); err != nil {
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
