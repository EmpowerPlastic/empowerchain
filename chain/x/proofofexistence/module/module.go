package module

import (
	"context"
	"encoding/json"

	"cosmossdk.io/errors"
	abci "github.com/cometbft/cometbft/abci/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/codec"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/spf13/cobra"

	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence"
	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence/client/cli"
	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence/keeper"
)

// ConsensusVersion defines the current x/proofofexistence module consensus version.
const ConsensusVersion = 1

var (
	_ module.AppModule      = AppModule{}
	_ module.AppModuleBasic = AppModuleBasic{}
)

// AppModuleBasic defines the basic application module used by the consensus_param module.
type AppModuleBasic struct {
	cdc codec.Codec
}

type AppModule struct {
	AppModuleBasic
	keeper     keeper.Keeper
	bankKeeper proofofexistence.BankKeeper
	accKeeper  proofofexistence.AccountKeeper
}

func NewAppModule(cdc codec.Codec, keeper keeper.Keeper, ak proofofexistence.AccountKeeper, bk proofofexistence.BankKeeper) AppModule {
	return AppModule{
		AppModuleBasic: AppModuleBasic{cdc: cdc},
		keeper:         keeper,
		bankKeeper:     bk,
		accKeeper:      ak,
	}
}

// Name returns the name of the module
func (AppModuleBasic) Name() string { return proofofexistence.ModuleName }

// RegisterLegacyAminoCodec registers the amino codec for the module, which is used to marshal and unmarshal structs to/from []byte in order to persist them in the module's KVStore
func (AppModuleBasic) RegisterLegacyAminoCodec(cdc *codec.LegacyAmino) {
	proofofexistence.RegisterCodec(cdc)
}

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

// RegisterServices registers a GRPC query service to respond to the
// module-specific GRPC queries.
func (am AppModule) RegisterServices(cfg module.Configurator) {
	msgServer := keeper.NewMsgServerImpl(am.keeper)
	proofofexistence.RegisterMsgServer(cfg.MsgServer(), msgServer)

	querier := keeper.Querier{Keeper: am.keeper}
	proofofexistence.RegisterQueryServer(cfg.QueryServer(), querier)
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
