package simulation_test

import (
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/simulation"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/address"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/stretchr/testify/require"
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"
	"math/rand"
	"testing"
)

func TestProposalMsgs(t *testing.T) {
	// initialize parameters
	s := rand.NewSource(1)
	r := rand.New(s)

	ctx := sdk.NewContext(nil, tmproto.Header{}, true, nil)
	accounts := simtypes.RandomAccounts(r, 3)

	// execute ProposalMsgs function
	weightedProposalMsgs := simulation.ProposalMsgs()
	require.Len(t, weightedProposalMsgs, 1)

	w0 := weightedProposalMsgs[0]

	// tests w0 interface:
	require.Equal(t, simulation.OpWeightMsgUpdateParams, w0.AppParamsKey())
	require.Equal(t, simulation.DefaultWeightMsgUpdateParams, w0.DefaultWeight())

	msg := w0.MsgSimulatorFn()(r, ctx, accounts)
	msgUpdateParams, ok := msg.(*plasticcredit.MsgUpdateParams)
	require.True(t, ok)
	require.Equal(t, sdk.AccAddress(address.Module("gov")).String(), msgUpdateParams.Authority)
	require.Equal(t, "cosmos1p8wcgrjr4pjju90xg6u9cgq55dxwq8j7u4x9a0", msgUpdateParams.Params.IssuerCreator)
}
