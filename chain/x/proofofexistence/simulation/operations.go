package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	moduletestutil "github.com/cosmos/cosmos-sdk/types/module/testutil"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"

	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence"
	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence/keeper"
)

//nolint:gosec
const (
	DefaultWeightMsgCreateProof = 10

	OpWeightMsgCreateProof = "op_weight_msg_create_proof"
)

// WeightedOperations returns all the operations from the module with their respective weights
func WeightedOperations(
	appParams simtypes.AppParams,
	cdc codec.JSONCodec,
	k keeper.Keeper,
) simulation.WeightedOperations {
	var (
		weightMsgCreateProof int
	)

	appParams.GetOrGenerate(cdc, OpWeightMsgCreateProof, &weightMsgCreateProof, nil,
		func(_ *rand.Rand) {
			weightMsgCreateProof = DefaultWeightMsgCreateProof
		},
	)

	protoCodec := cdc.(*codec.ProtoCodec)

	return simulation.WeightedOperations{
		simulation.NewWeightedOperation(
			weightMsgCreateProof,
			SimulateMsgCreateProof(protoCodec, k),
		),
	}
}

// SimulateMsgCreateProof generates a MsgCreateProof with random values.
func SimulateMsgCreateProof(cdc *codec.ProtoCodec, k keeper.Keeper) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, sdkCtx sdk.Context, accounts []simtypes.Account, chainID string,
	) (opMsg simtypes.OperationMsg, fOps []simtypes.FutureOperation, err error) {
		msgType := sdk.MsgTypeURL(&proofofexistence.MsgCreateProof{})
		querier := keeper.Querier{Keeper: k}
		admin, _ := simtypes.RandomAcc(r, accounts)

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           moduletestutil.MakeTestEncodingConfig().TxConfig,
			Cdc:             cdc,
			Msg:             msg,
			MsgType:         msgType,
			Context:         sdkCtx,
			SimAccount:      simAccount,
			ModuleName:      proofofexistence.ModuleName,
			CoinsSpentInMsg: spendable,
		}

		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}
