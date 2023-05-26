package module

import (
	"encoding/json"

	"cosmossdk.io/errors"
	abci "github.com/cometbft/cometbft/abci/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/codec"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/spf13/cobra"

	// "github.com/EmpowerPlastic/empowerchain/x/accesscontrol/client/cli"
	"github.com/EmpowerPlastic/empowerchain/x/accesscontrol"
	"github.com/EmpowerPlastic/empowerchain/x/accesscontrol/keeper"
)

// ConsensusVersion defines the current x/accesscontrol module consensus version.
const ConsensusVersion = 1

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
func (AppModuleBasic) Name() string { return accesscontrol.ModuleName }

func (AppModuleBasic) RegisterLegacyAminoCodec(*codec.LegacyAmino) {}

// RegisterInterfaces registers the module's interface types
func (AppModuleBasic) RegisterInterfaces(registry codectypes.InterfaceRegistry) {
	accesscontrol.RegisterInterfaces(registry)
}

func (AppModuleBasic) DefaultGenesis(cdc codec.JSONCodec) json.RawMessage {
	return cdc.MustMarshalJSON(accesscontrol.DefaultGenesis())
}

func (AppModuleBasic) ValidateGenesis(cdc codec.JSONCodec, _ client.TxEncodingConfig, bz json.RawMessage) error {
	var data accesscontrol.GenesisState
	if err := cdc.UnmarshalJSON(bz, &data); err != nil {
		return errors.Wrapf(err, "failed to unmarshal %s genesis state", accesscontrol.ModuleName)
	}

	return data.Validate()
}

func (AppModuleBasic) RegisterGRPCGatewayRoutes(clientCtx client.Context, mux *runtime.ServeMux) {
}

func (AppModuleBasic) GetTxCmd() *cobra.Command {
	return nil
}

func (AppModuleBasic) GetQueryCmd() *cobra.Command {
	return nil
}

// RegisterInvariants does nothing, there are no invariants to enforce
func (AppModule) RegisterInvariants(_ sdk.InvariantRegistry) {}

// RegisterServices registers a GRPC query service to respond to the
// module-specific GRPC queries.
func (am AppModule) RegisterServices(cfg module.Configurator) {
}

func (AppModule) ConsensusVersion() uint64 {
	return ConsensusVersion
}

// InitGenesis performs the accesscontrol module's genesis initialization
// It returns no validator updates.
func (am AppModule) InitGenesis(ctx sdk.Context, cdc codec.JSONCodec, gs json.RawMessage) []abci.ValidatorUpdate {
	var genState accesscontrol.GenesisState
	// Initialize global index to index in genesis state
	cdc.MustUnmarshalJSON(gs, &genState)
	if err := am.keeper.InitGenesis(ctx, genState); err != nil {
		panic(err)
	}

	return []abci.ValidatorUpdate{}
}

// ExportGenesis returns the accesscontrol module's exported genesis state as raw JSON bytes.
func (am AppModule) ExportGenesis(ctx sdk.Context, cdc codec.JSONCodec) json.RawMessage {
	gs, err := am.keeper.ExportGenesis(ctx)
	if err != nil {
		panic(err)
	}

	return cdc.MustMarshalJSON(gs)
}

// AppModuleSimulation functions

// GenerateGenesisState creates a randomized GenState of the accesscontrol module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	// TODO: simulation.RandomizedGenState(simState)
	// https://github.com/cosmos/cosmos-sdk/blob/main/x/nft/simulation/genesis.go
}

// ProposalContents returns all the accesscontrol content functions used to simulate governance proposals.
func (am AppModule) ProposalContents(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return nil
}

// RegisterStoreDecoder registers a decoder for accesscontrol module's types
func (am AppModule) RegisterStoreDecoder(sdr sdk.StoreDecoderRegistry) {
	// TODO: sdr[keeper.StoreKey] = simulation.NewDecodeStore(am.cdc)
}

// WeightedOperations returns the all the accesscontrol module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	// TODO
	return nil
}
