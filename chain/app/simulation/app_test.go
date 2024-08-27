package simulation

import (
	"os"
	"testing"

	wasmkeeper "github.com/CosmWasm/wasmd/x/wasm/keeper"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simtestutil "github.com/cosmos/cosmos-sdk/testutil/sims"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	simcli "github.com/cosmos/cosmos-sdk/x/simulation/client/cli"
	"github.com/stretchr/testify/require"

	"github.com/EmpowerPlastic/empowerchain/app"
)

func TestFullAppSimulation(t *testing.T) {
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
		t.Skip("skipping application simulation")
	}
	require.NoError(t, err, "simulation setup failed")

	defer func() {
		require.NoError(t, db.Close())
		require.NoError(t, os.RemoveAll(dir))
	}()

	empowerApp := app.New(
		logger,
		db,
		nil,
		true,
		simtestutil.NewAppOptionsWithFlagHome(dir),
		[]wasmkeeper.Option{},
		fauxMerkleModeOpt,
		baseapp.SetChainID(SimAppChainID),
	)
	require.Equal(t, "empowerchain", empowerApp.Name())

	// run randomized simulation
	_, simParams, simErr := simulation.SimulateFromSeed(
		t,
		os.Stdout,
		empowerApp.BaseApp,
		// TODO: REPLACE WITH SDK VERSION
		AppStateFn(empowerApp.AppCodec(), empowerApp.SimulationManager()),
		simtypes.RandomAccounts, // Replace with own random account function if using keys other than secp256k1
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
}
