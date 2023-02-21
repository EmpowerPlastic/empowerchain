package simulation

import (
	"fmt"
	"github.com/CosmWasm/wasmd/x/wasm"
	"os"
	"testing"

	simtestutil "github.com/cosmos/cosmos-sdk/testutil/sims"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	simcli "github.com/cosmos/cosmos-sdk/x/simulation/client/cli"
	"github.com/stretchr/testify/require"
	abci "github.com/tendermint/tendermint/abci/types"
	"github.com/tendermint/tendermint/libs/log"

	"github.com/EmpowerPlastic/empowerchain/app"
	"github.com/EmpowerPlastic/empowerchain/app/params"
)

func TestAppSimulationAfterImport(t *testing.T) {
	config := simcli.NewConfigFromFlags()
	config.ChainID = SimAppChainID

	db, dir, logger, skip, err := simtestutil.SetupSimulation(
		config,
		"empower-chain",
		"empower-chain-sim",
		simcli.FlagVerboseValue,
		simcli.FlagEnabledValue,
	)
	if skip {
		t.Skip("skipping application simulation after import")
	}
	require.NoError(t, err, "simulation setup failed")

	defer func() {
		require.NoError(t, db.Close())
		require.NoError(t, os.RemoveAll(dir))
	}()

	empowerApp := app.New(logger, db, nil, true, map[int64]bool{},
		dir,
		simcli.FlagPeriodValue,
		params.MakeEncodingConfig(app.ModuleBasics),
		simtestutil.EmptyAppOptions{},
		[]wasm.Option{},
		fauxMerkleModeOpt,
	)
	require.Equal(t, "empowerchain", empowerApp.Name())

	// Run randomized simulation
	stopEarly, simParams, simErr := simulation.SimulateFromSeed(
		t,
		os.Stdout,
		empowerApp.BaseApp,
		AppStateFn(empowerApp.AppCodec(), empowerApp.SimulationManager()),
		simtypes.RandomAccounts,
		simtestutil.SimulationOperations(empowerApp, empowerApp.AppCodec(), config),
		app.BlockedAddresses(),
		config,
		empowerApp.AppCodec(),
	)

	// export state and simParams before the simulation error is checked
	err = simtestutil.CheckExportSimulation(empowerApp, config, simParams)
	require.NoError(t, err)
	require.NoError(t, simErr)

	if config.Commit {
		simtestutil.PrintStats(db)
	}

	if stopEarly {
		fmt.Println("can't export or import a zero-validator genesis, exiting test...")
		return
	}

	fmt.Printf("exporting genesis...\n")

	exported, err := empowerApp.ExportAppStateAndValidators(true, []string{}, []string{})
	require.NoError(t, err)

	fmt.Printf("importing genesis...\n")

	newDB, newDir, _, _, err := simtestutil.SetupSimulation(
		config,
		"empower-chain-2",
		"empower-chain-sim-2",
		simcli.FlagVerboseValue,
		simcli.FlagEnabledValue,
	)
	require.NoError(t, err, "simulation setup failed")

	defer func() {
		require.NoError(t, newDB.Close())
		require.NoError(t, os.RemoveAll(newDir))
	}()

	newApp := app.New(log.NewNopLogger(), newDB, nil, true, map[int64]bool{},
		newDir,
		simcli.FlagPeriodValue,
		params.MakeEncodingConfig(app.ModuleBasics),
		simtestutil.EmptyAppOptions{},
		[]wasm.Option{},
		fauxMerkleModeOpt,
	)
	require.Equal(t, "empowerchain", newApp.Name())

	newApp.InitChain(abci.RequestInitChain{
		AppStateBytes: exported.AppState,
	})

	_, _, err = simulation.SimulateFromSeed(
		t,
		os.Stdout,
		newApp.BaseApp,
		AppStateFn(newApp.AppCodec(), newApp.SimulationManager()),
		simtypes.RandomAccounts,
		simtestutil.SimulationOperations(newApp, newApp.AppCodec(), config),
		app.BlockedAddresses(),
		config,
		newApp.AppCodec(),
	)
	require.NoError(t, err)
}
