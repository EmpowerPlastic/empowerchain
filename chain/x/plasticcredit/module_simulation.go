package plasticcredit

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/empowerchain/empowerchain/testutil/sample"
	plasticcreditsimulation "github.com/empowerchain/empowerchain/x/plasticcredit/simulation"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = plasticcreditsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateIssuer = "op_weight_msg_create_issuer"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateIssuer int = 100

	opWeightMsgCreateCollector = "op_weight_msg_create_collector"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCollector int = 100

	opWeightMsgCreateProject = "op_weight_msg_create_project"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateProject int = 100

	opWeightMsgCreateCreditClass = "op_weight_msg_create_credit_class"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateCreditClass int = 100

	opWeightMsgIssueCredits = "op_weight_msg_issue_credits"
	// TODO: Determine the simulation weight value
	defaultWeightMsgIssueCredits int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	plasticcreditGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&plasticcreditGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {
	plasticcreditParams := types.DefaultParams()
	return []simtypes.ParamChange{
		simulation.NewSimParamChange(types.ModuleName, string(types.KeyCreateissuerAllowlist), func(r *rand.Rand) string {
			return string(types.Amino.MustMarshalJSON(plasticcreditParams.CreateissuerAllowlist))
		}),
	}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateIssuer int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateIssuer, &weightMsgCreateIssuer, nil,
		func(_ *rand.Rand) {
			weightMsgCreateIssuer = defaultWeightMsgCreateIssuer
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateIssuer,
		plasticcreditsimulation.SimulateMsgCreateIssuer(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateCollector int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCollector, &weightMsgCreateCollector, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCollector = defaultWeightMsgCreateCollector
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCollector,
		plasticcreditsimulation.SimulateMsgCreateCollector(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateProject int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateProject, &weightMsgCreateProject, nil,
		func(_ *rand.Rand) {
			weightMsgCreateProject = defaultWeightMsgCreateProject
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateProject,
		plasticcreditsimulation.SimulateMsgCreateProject(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateCreditClass int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateCreditClass, &weightMsgCreateCreditClass, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCreditClass = defaultWeightMsgCreateCreditClass
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateCreditClass,
		plasticcreditsimulation.SimulateMsgCreateCreditClass(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgIssueCredits int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgIssueCredits, &weightMsgIssueCredits, nil,
		func(_ *rand.Rand) {
			weightMsgIssueCredits = defaultWeightMsgIssueCredits
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgIssueCredits,
		plasticcreditsimulation.SimulateMsgIssueCredits(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
