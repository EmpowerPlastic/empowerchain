package simulation_test

import (
	"math/rand"
	"testing"

	tmproto "github.com/cometbft/cometbft/proto/tendermint/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/address"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/stretchr/testify/require"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/simulation"
)

func TestProposalMsgs(t *testing.T) {
	// initialize parameters
	s := rand.NewSource(1)
	r := rand.New(s)

	ctx := sdk.NewContext(nil, tmproto.Header{}, true, nil)
	accounts := simtypes.RandomAccounts(r, 3)

	// execute ProposalMsgs function
	weightedProposalMsgs := simulation.ProposalMsgs()
	require.Len(t, weightedProposalMsgs, 2)

	paramsProposalOperation := weightedProposalMsgs[0]
	// tests paramsProposalOperation interface:
	require.Equal(t, simulation.OpWeightMsgUpdateParamsProposal, paramsProposalOperation.AppParamsKey())
	require.Equal(t, simulation.DefaultWeightMsgUpdateParamsProposal, paramsProposalOperation.DefaultWeight())

	paramsProposalMsg := paramsProposalOperation.MsgSimulatorFn()(r, ctx, accounts)
	msgUpdateParams, ok := paramsProposalMsg.(*plasticcredit.MsgUpdateParams)
	require.True(t, ok)
	require.Equal(t, sdk.AccAddress(address.Module("gov")).String(), msgUpdateParams.Authority)
	require.Equal(t, "cosmos1p8wcgrjr4pjju90xg6u9cgq55dxwq8j7u4x9a0", msgUpdateParams.Params.IssuerCreator)

	createIssuerProposalMessage := weightedProposalMsgs[1]
	// tests createIssuerProposalMessage interface:
	require.Equal(t, simulation.OpWeightMsgCreateIssuerProposal, createIssuerProposalMessage.AppParamsKey())
	require.Equal(t, simulation.DefaultWeightMsgCreateIssuerProposal, createIssuerProposalMessage.DefaultWeight())

	createIssuerProposalMsg := createIssuerProposalMessage.MsgSimulatorFn()(r, ctx, accounts)
	msgCreateIssuer, ok := createIssuerProposalMsg.(*plasticcredit.MsgCreateIssuer)
	require.True(t, ok)
	require.Equal(t, sdk.AccAddress(address.Module("gov")).String(), msgCreateIssuer.Creator)
	require.Equal(t, "cosmos1tnh2q55v8wyygtt9srz5safamzdengsnqeycj3", msgCreateIssuer.Admin)
}
