package module

import (
	"context"
	"encoding/json"
	"math/rand"

	"cosmossdk.io/errors"

	"github.com/empowerchain/empowerchain/x/proofofexistence"
	"github.com/empowerchain/empowerchain/x/proofofexistence/client/cli"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/codec"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/empowerchain/empowerchain/x/proofofexistence/keeper"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/spf13/cobra"
	abci "github.com/tendermint/tendermint/abci/types"
)

// ConsensusVersion defines the current x/proofofexistence module consensus version.
const ConsensusVersion = 3

var (
	_ module.AppModule      = AppModule{}
	_ module.AppModuleBasic = AppModuleBasic{}
)

// AppModuleBasic defines the basic application module used by the consensus_param module.
type AppModuleBasic struct{}

type AppModule struct {
	AppModuleBasic

	keeper keeper.Keeper
}

func NewAppModule(keeper keeper.Keeper) AppModule {
	return AppModule{
		AppModuleBasic: AppModuleBasic{},
		keeper:         keeper,
	}
}

// Name returns the name of the module
func (AppModuleBasic) Name() string { return proofofexistence.ModuleName }

func (AppModuleBasic) RegisterLegacyAminoCodec(*codec.LegacyAmino) {}

// RegisterInterfaces registers the module's interface types
func (AppModuleBasic) RegisterInterfaces(registry codectypes.InterfaceRegistry) {
	proofofexistence.RegisterInterfaces(registry)
}

func (AppModuleBasic) DefaultGenesis(cdc codec.JSONCodec) json.RawMessage {
	return cdc.MustMarshalJSON(proofofexistence.DefaultGenesisState())
}

func (AppModuleBasic) ValidateGenesis(cdc codec.JSONCodec, _ client.TxEncodingConfig, bz json.RawMessage) error {
	var data proofofexistence.GenesisState
	if err := cdc.UnmarshalJSON(bz, &data); err != nil {
		return errors.Wrapf(err, "failed to unmarshal %s genesis state", proofofexistence.ModuleName)
	}

	return data.Validate()
}

func (AppModuleBasic) RegisterGRPCGatewayRoutes(clientCtx client.Context, mux *runtime.ServeMux) {
	if err := proofofexistence.RegisterQueryHandlerClient(context.Background(), mux, proofofexistence.NewQueryClient(clientCtx)); err != nil {
		panic(err)
	}
}

func (AppModuleBasic) GetTxCmd() *cobra.Command {
	return cli.GetTxCmd()
}

func (AppModuleBasic) GetQueryCmd() *cobra.Command {
	return cli.GetQueryCmd()
}

// RegisterInvariants does nothing, there are no invariants to enforce
func (AppModule) RegisterInvariants(_ sdk.InvariantRegistry) {}

// Deprecated: Route returns the capability module's message routing key.
func (AppModule) Route() sdk.Route {
	return sdk.Route{}
}

// Deprecated: QuerierRoute returns the proofofexistence module's query routing key.
func (AppModule) QuerierRoute() string { return proofofexistence.QuerierRoute }

// Deprecated: LegacyQuerierHandler returns the proofofexistence module's Querier.
func (am AppModule) LegacyQuerierHandler(*codec.LegacyAmino) sdk.Querier {
	return nil
}

// RegisterServices registers a GRPC query service to respond to the
// module-specific GRPC queries.
func (am AppModule) RegisterServices(cfg module.Configurator) {
	msgServer := keeper.NewMsgServerImpl(am.keeper)
	proofofexistence.RegisterMsgServer(cfg.MsgServer(), msgServer)

	querier := keeper.Querier{Keeper: am.keeper}
	proofofexistence.RegisterQueryServer(cfg.QueryServer(), querier)

	m := keeper.NewMigrator(am.keeper)
	// For some reason this was hardcoded to 2 in the previous version https://github.com/empowerchain/empowerchain/blob/f7e68c0cd2901c9a60bd2ce00b43cf0db2c33f0e/chain/x/proofofexistence/module.go#L171
	// When resetting all this before main net, get it back to 1
	if err := cfg.RegisterMigration(proofofexistence.ModuleName, 2, m.Migrate1to2); err != nil {
		panic(err)
	}
}

func (AppModule) ConsensusVersion() uint64 {
	return ConsensusVersion
}

// InitGenesis performs the proofofexistence module's genesis initialization
// It returns no validator updates.
func (am AppModule) InitGenesis(ctx sdk.Context, cdc codec.JSONCodec, gs json.RawMessage) []abci.ValidatorUpdate {
	var genState proofofexistence.GenesisState
	// Initialize global index to index in genesis state
	cdc.MustUnmarshalJSON(gs, &genState)
	if err := am.keeper.InitGenesis(ctx, genState); err != nil {
		panic(err)
	}

	return []abci.ValidatorUpdate{}
}

// ExportGenesis returns the proofofexistence module's exported genesis state as raw JSON bytes.
func (am AppModule) ExportGenesis(ctx sdk.Context, cdc codec.JSONCodec) json.RawMessage {
	gs, err := am.keeper.ExportGenesis(ctx)
	if err != nil {
		panic(err)
	}

	return cdc.MustMarshalJSON(gs)
}

// AppModuleSimulation functions

// GenerateGenesisState creates a randomized GenState of the proofofexistence module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	// TODO: simulation.RandomizedGenState(simState)
	// https://github.com/cosmos/cosmos-sdk/blob/main/x/nft/simulation/genesis.go
}

// ProposalContents returns all the proofofexistence content functions used to simulate governance proposals.
func (am AppModule) ProposalContents(simState module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized proofofexistence param changes for the simulator.
func (AppModule) RandomizedParams(r *rand.Rand) []simtypes.ParamChange {
	return nil
}

// RegisterStoreDecoder registers a decoder for proofofexistence module's types
func (am AppModule) RegisterStoreDecoder(sdr sdk.StoreDecoderRegistry) {
	// TODO: sdr[keeper.StoreKey] = simulation.NewDecodeStore(am.cdc)
}

// WeightedOperations returns the all the proofofexistence module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	// TODO
	return nil
}
