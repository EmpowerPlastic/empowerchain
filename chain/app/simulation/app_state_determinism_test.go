package simulation

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"os"
	"testing"

	wasmkeeper "github.com/CosmWasm/wasmd/x/wasm/keeper"
	dbm "github.com/cometbft/cometbft-db"
	"github.com/cometbft/cometbft/libs/log"
	"github.com/cosmos/cosmos-sdk/baseapp"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/server"
	simtestutil "github.com/cosmos/cosmos-sdk/testutil/sims"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	simcli "github.com/cosmos/cosmos-sdk/x/simulation/client/cli"
	"github.com/stretchr/testify/require"

	"github.com/EmpowerPlastic/empowerchain/app"
)

func TestAppStateDeterminism(t *testing.T) {
	if !simcli.FlagEnabledValue {
		t.Skip("skipping application simulation")
	}

	config := simcli.NewConfigFromFlags()
	config.InitialBlockHeight = 1
	config.ExportParamsPath = ""
	config.OnOperation = false
	config.AllInvariants = false
	config.ChainID = SimAppChainID

	numSeeds := 3
	numTimesToRunPerSeed := 5
	appHashList := make([]json.RawMessage, numTimesToRunPerSeed)

	// We will be overriding the random seed and just run a single simulation on the provided seed value
	if config.Seed != simcli.DefaultSeedValue {
		numSeeds = 1
	}

	for i := 0; i < numSeeds; i++ {
		if config.Seed == simcli.DefaultSeedValue {
			config.Seed = rand.Int63()
		}

		fmt.Println("config.Seed: ", config.Seed)

		for j := 0; j < numTimesToRunPerSeed; j++ {
			var logger log.Logger
			if simcli.FlagVerboseValue {
				logger = log.TestingLogger()
			} else {
				logger = log.NewNopLogger()
			}

			db := dbm.NewMemDB()
			appOptions := make(simtestutil.AppOptionsMap, 0)
			appOptions[flags.FlagHome] = t.TempDir() // ensure a unique folder
			appOptions[server.FlagInvCheckPeriod] = simcli.FlagPeriodValue
			empowerApp := app.New(
				logger,
				db,
				nil,
				true,
				appOptions,
				[]wasmkeeper.Option{},
				interBlockCacheOpt(),
				baseapp.SetChainID(SimAppChainID),
			)

			fmt.Printf(
				"running non-determinism simulation; seed %d: %d/%d, attempt: %d/%d\n",
				config.Seed, i+1, numSeeds, j+1, numTimesToRunPerSeed,
			)

			_, _, err := simulation.SimulateFromSeed(
				t,
				os.Stdout,
				empowerApp.BaseApp,
				AppStateFn(empowerApp.AppCodec(), empowerApp.SimulationManager()),
				simtypes.RandomAccounts, // Replace with own random account function if using keys other than secp256k1
				simtestutil.SimulationOperations(empowerApp, empowerApp.AppCodec(), config),
				app.BlockedAddresses(),
				config,
				empowerApp.AppCodec(),
			)
			require.NoError(t, err)

			if config.Commit {
				simtestutil.PrintStats(db)
			}

			appHash := empowerApp.LastCommitID().Hash
			appHashList[j] = appHash

			if j != 0 {
				require.Equal(
					t, string(appHashList[0]), string(appHashList[j]),
					"non-determinism in seed %d: %d/%d, attempt: %d/%d\n", config.Seed, i+1, numSeeds, j+1, numTimesToRunPerSeed,
				)
			}
		}
	}
}
