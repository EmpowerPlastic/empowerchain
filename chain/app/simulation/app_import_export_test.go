package simulation

import (
	"encoding/json"
	"fmt"
	"os"
	"runtime/debug"
	"strings"
	"testing"

	wasmkeeper "github.com/CosmWasm/wasmd/x/wasm/keeper"
	"github.com/cometbft/cometbft/libs/log"
	tmproto "github.com/cometbft/cometbft/proto/tendermint/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simtestutil "github.com/cosmos/cosmos-sdk/testutil/sims"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	authzkeeper "github.com/cosmos/cosmos-sdk/x/authz/keeper"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	capabilitytypes "github.com/cosmos/cosmos-sdk/x/capability/types"
	distrtypes "github.com/cosmos/cosmos-sdk/x/distribution/types"
	evidencetypes "github.com/cosmos/cosmos-sdk/x/evidence/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
	minttypes "github.com/cosmos/cosmos-sdk/x/mint/types"
	paramstypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	simcli "github.com/cosmos/cosmos-sdk/x/simulation/client/cli"
	slashingtypes "github.com/cosmos/cosmos-sdk/x/slashing/types"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	ibctransfertypes "github.com/cosmos/ibc-go/v7/modules/apps/transfer/types"
	ibcexported "github.com/cosmos/ibc-go/v7/modules/core/exported"
	"github.com/stretchr/testify/require"

	"github.com/EmpowerPlastic/empowerchain/app"
	plasticcreditmoduletypes "github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	proofofexistencemoduletypes "github.com/EmpowerPlastic/empowerchain/x/proofofexistence"
)

func TestAppImportExport(t *testing.T) {
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

	// Run randomized simulation
	_, simParams, simErr := simulation.SimulateFromSeed(
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

	// export state and simParams before the simulation error is checked
	err = simtestutil.CheckExportSimulation(empowerApp, config, simParams)
	require.NoError(t, err)
	require.NoError(t, simErr)

	if config.Commit {
		simtestutil.PrintStats(db)
	}

	fmt.Printf("exporting genesis...\n")

	exported, err := empowerApp.ExportAppStateAndValidators(false, []string{}, []string{})
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

	newApp := app.New(
		log.NewNopLogger(),
		newDB,
		nil,
		true,
		simtestutil.NewAppOptionsWithFlagHome(newDir),
		[]wasmkeeper.Option{},
		fauxMerkleModeOpt,
		baseapp.SetChainID(SimAppChainID),
	)
	require.Equal(t, "empowerchain", newApp.Name())

	var genesisState app.GenesisState
	err = json.Unmarshal(exported.AppState, &genesisState)
	require.NoError(t, err)

	defer func() {
		if r := recover(); r != nil {
			err := fmt.Sprintf("%v", r)
			if !strings.Contains(err, "validator set is empty after InitGenesis") {
				panic(r)
			}
			logger.Info("Skipping simulation as all validators have been unbonded")
			logger.Info("err", err, "stacktrace", string(debug.Stack()))
		}
	}()

	ctxA := empowerApp.NewContext(true, tmproto.Header{Height: empowerApp.LastBlockHeight()})
	ctxB := newApp.NewContext(true, tmproto.Header{Height: empowerApp.LastBlockHeight()})
	newApp.ModuleManager.InitGenesis(ctxB, empowerApp.AppCodec(), genesisState)
	newApp.StoreConsensusParams(ctxB, exported.ConsensusParams)

	fmt.Printf("comparing stores...\n")

	storeKeysPrefixes := []StoreKeysPrefixes{
		{empowerApp.GetStoreKey(authtypes.StoreKey), newApp.GetStoreKey(authtypes.StoreKey), [][]byte{}},
		{
			empowerApp.GetStoreKey(stakingtypes.StoreKey), newApp.GetStoreKey(stakingtypes.StoreKey),
			[][]byte{
				stakingtypes.UnbondingQueueKey, stakingtypes.RedelegationQueueKey, stakingtypes.ValidatorQueueKey,
				stakingtypes.HistoricalInfoKey, stakingtypes.UnbondingIDKey, stakingtypes.UnbondingIndexKey,
				stakingtypes.UnbondingTypeKey, stakingtypes.ValidatorUpdatesKey,
			},
		}, // ordering may change but it doesn't matter
		{empowerApp.GetStoreKey(slashingtypes.StoreKey), newApp.GetStoreKey(slashingtypes.StoreKey), [][]byte{}},
		{empowerApp.GetStoreKey(minttypes.StoreKey), newApp.GetStoreKey(minttypes.StoreKey), [][]byte{}},
		{empowerApp.GetStoreKey(distrtypes.StoreKey), newApp.GetStoreKey(distrtypes.StoreKey), [][]byte{}},
		{empowerApp.GetStoreKey(banktypes.StoreKey), newApp.GetStoreKey(banktypes.StoreKey), [][]byte{banktypes.BalancesPrefix}},
		{empowerApp.GetStoreKey(paramstypes.StoreKey), newApp.GetStoreKey(paramstypes.StoreKey), [][]byte{}},
		{empowerApp.GetStoreKey(govtypes.StoreKey), newApp.GetStoreKey(govtypes.StoreKey), [][]byte{}},
		{empowerApp.GetStoreKey(evidencetypes.StoreKey), newApp.GetStoreKey(evidencetypes.StoreKey), [][]byte{}},
		{empowerApp.GetStoreKey(capabilitytypes.StoreKey), newApp.GetStoreKey(capabilitytypes.StoreKey), [][]byte{}},
		{empowerApp.GetStoreKey(ibcexported.StoreKey), newApp.GetStoreKey(ibcexported.StoreKey), [][]byte{}},
		{empowerApp.GetStoreKey(ibctransfertypes.StoreKey), newApp.GetStoreKey(ibctransfertypes.StoreKey), [][]byte{}},
		// TODO: pending some feedback from SDK team, this is also not in simapp, but I don't know why
		// {empowerApp.GetStoreKey(feegrant.StoreKey), newApp.GetStoreKey(feegrant.StoreKey), [][]byte{}},
		{empowerApp.GetStoreKey(authzkeeper.StoreKey), newApp.GetStoreKey(authzkeeper.StoreKey), [][]byte{authzkeeper.GrantKey, authzkeeper.GrantQueuePrefix}},
		{empowerApp.GetStoreKey(proofofexistencemoduletypes.StoreKey), newApp.GetStoreKey(proofofexistencemoduletypes.StoreKey), [][]byte{}},
		{empowerApp.GetStoreKey(plasticcreditmoduletypes.StoreKey), newApp.GetStoreKey(plasticcreditmoduletypes.StoreKey), [][]byte{}},
	}

	for _, skp := range storeKeysPrefixes {
		storeA := ctxA.KVStore(skp.A)
		storeB := ctxB.KVStore(skp.B)

		failedKVAs, failedKVBs := sdk.DiffKVStores(storeA, storeB, skp.Prefixes)
		require.Equal(t, len(failedKVAs), len(failedKVBs), "unequal sets of key-values to compare")

		fmt.Printf("compared %d different key/value pairs between %s and %s\n", len(failedKVAs), skp.A, skp.B)
		require.Equal(t, 0, len(failedKVAs), simtestutil.GetSimulationLog(skp.A.Name(), empowerApp.SimulationManager().StoreDecoders, failedKVAs, failedKVBs))
	}
}
