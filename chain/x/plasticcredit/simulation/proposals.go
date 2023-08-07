package simulation

import (
	"math/rand"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/address"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
)

// Simulation operation weights constants
const (
	DefaultWeightMsgUpdateParamsProposal int = 100
	DefaultWeightMsgCreateIssuerProposal int = 10

	OpWeightMsgUpdateParamsProposal = "op_weight_msg_update_params_proposal" //nolint:gosec
	OpWeightMsgCreateIssuerProposal = "op_weight_msg_create_issuer_proposal" //nolint:gosec
)

// ProposalMsgs defines the module weighted proposals' contents
func ProposalMsgs() []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			OpWeightMsgUpdateParamsProposal,
			DefaultWeightMsgUpdateParamsProposal,
			SimulateMsgUpdateParamsForProposal,
		),
		simulation.NewWeightedProposalMsg(
			OpWeightMsgCreateIssuerProposal,
			DefaultWeightMsgCreateIssuerProposal,
			SimulateMsgCreateIssuerForProposal,
		),
	}
}

// SimulateMsgUpdateParamsForProposal returns a random MsgUpdateParams
func SimulateMsgUpdateParamsForProposal(r *rand.Rand, _ sdk.Context, accounts []simtypes.Account) sdk.Msg {
	// use the default gov module account address as authority
	var authority sdk.AccAddress = address.Module("gov")

	params := plasticcredit.DefaultParams()
	params.IssuerCreator = generateIssuerCreator(r, accounts)

	return &plasticcredit.MsgUpdateParams{
		Authority: authority.String(),
		Params:    params,
	}
}

// SimulateMsgCreateIssuerForProposal returns a random MsgCreateIssuer with the default gov module account as authority
func SimulateMsgCreateIssuerForProposal(r *rand.Rand, _ sdk.Context, accounts []simtypes.Account) sdk.Msg {
	// use the default gov module account address as authority
	var authority sdk.AccAddress = address.Module("gov")
	admin, _ := simtypes.RandomAcc(r, accounts)

	params := plasticcredit.DefaultParams()
	params.IssuerCreator = generateIssuerCreator(r, accounts)

	return &plasticcredit.MsgCreateIssuer{
		Creator:     authority.String(),
		Name:        createRandomName(r),
		Description: createRandomDescription(r),
		Admin:       admin.Address.String(),
	}
}
