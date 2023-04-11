package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	moduletestutil "github.com/cosmos/cosmos-sdk/types/module/testutil"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/keeper"
)

//nolint:gosec
const (
	DefaultWeightMsgCreateIssuer     = 10
	DefaultWeightMsgUpdateIssuer     = 20
	DefaultWeightMsgCreateCreditType = 10
	DefaultWeightMsgUpdateCreditType = 5
	DefaultWeightMsgCreateProject    = 70
	DefaultWeightMsgUpdateProject    = 30
	DefaultWeightMsgApproveProject   = 20
	DefaultWeightMsgRejectProject    = 30
	DefaultWeightMsgSuspendProject   = 10
	DefaultWeightMsgCreateApplicant  = 75
	DefaultWeightMsgUpdateApplicant  = 50
	DefaultWeightMsgIssueCredits     = 75
	DefaultWeightMsgTransferCredits  = 15 // Low for now, the lookup is too expensive
	DefaultWeightMsgRetireCredits    = 15 // Low for now, the lookup is too expensive

	OpWeightMsgApproveProject   = "op_weight_msg_approve_project"
	OpWeightMsgCreateApplicant  = "op_weight_msg_create_applicant"
	OpWeightMsgCreateCreditType = "op_weight_msg_create_credit_type"
	OpWeightMsgCreateIssuer     = "op_weight_msg_create_issuer"
	OpWeightMsgCreateProject    = "op_weight_msg_create_project"
	OpWeightMsgIssueCredits     = "op_weight_msg_issue_credits"
	OpWeightMsgRejectProject    = "op_weight_msg_reject_project"
	OpWeightMsgRetireCredits    = "op_weight_msg_retire_credits"
	OpWeightMsgSuspendProject   = "op_weight_msg_suspend_project"
	OpWeightMsgTransferCredits  = "op_weight_msg_transfer_credits"
	OpWeightMsgUpdateApplicant  = "op_weight_msg_update_applicant"
	OpWeightMsgUpdateCreditType = "op_weight_msg_update_credit_type"
	OpWeightMsgUpdateIssuer     = "op_weight_msg_update_issuer"
	OpWeightMsgUpdateProject    = "op_weight_msg_update_project"
)

// WeightedOperations returns all the operations from the module with their respective weights
func WeightedOperations(
	appParams simtypes.AppParams,
	cdc codec.JSONCodec,
	ak plasticcredit.AccountKeeper,
	bk plasticcredit.BankKeeper,
	k keeper.Keeper,
) simulation.WeightedOperations {
	var (
		weightMsgApproveProject   int
		weightMsgCreateApplicant  int
		weightMsgCreateCreditType int
		weightMsgCreateIssuer     int
		weightMsgCreateProject    int
		weightMsgIssueCredits     int
		weightMsgRejectProject    int
		weightMsgRetireCredits    int
		weightMsgSuspendProject   int
		weightMsgTransferCredits  int
		weightMsgUpdateApplicant  int
		weightMsgUpdateCreditType int
		weightMsgUpdateIssuer     int
		weightMsgUpdateProject    int
	)

	appParams.GetOrGenerate(cdc, OpWeightMsgCreateIssuer, &weightMsgCreateIssuer, nil,
		func(_ *rand.Rand) {
			weightMsgCreateIssuer = DefaultWeightMsgCreateIssuer
		},
	)
	appParams.GetOrGenerate(cdc, OpWeightMsgUpdateIssuer, &weightMsgUpdateIssuer, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateIssuer = DefaultWeightMsgUpdateIssuer
		},
	)
	appParams.GetOrGenerate(cdc, OpWeightMsgCreateApplicant, &weightMsgCreateApplicant, nil,
		func(_ *rand.Rand) {
			weightMsgCreateApplicant = DefaultWeightMsgCreateApplicant
		},
	)
	appParams.GetOrGenerate(cdc, OpWeightMsgUpdateApplicant, &weightMsgUpdateApplicant, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateApplicant = DefaultWeightMsgUpdateApplicant
		},
	)
	appParams.GetOrGenerate(cdc, OpWeightMsgCreateCreditType, &weightMsgCreateCreditType, nil,
		func(_ *rand.Rand) {
			weightMsgCreateCreditType = DefaultWeightMsgCreateCreditType
		},
	)
	appParams.GetOrGenerate(cdc, OpWeightMsgUpdateCreditType, &weightMsgUpdateCreditType, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateCreditType = DefaultWeightMsgUpdateCreditType
		},
	)
	appParams.GetOrGenerate(cdc, OpWeightMsgCreateProject, &weightMsgCreateProject, nil,
		func(_ *rand.Rand) {
			weightMsgCreateProject = DefaultWeightMsgCreateProject
		},
	)
	appParams.GetOrGenerate(cdc, OpWeightMsgUpdateProject, &weightMsgUpdateProject, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateProject = DefaultWeightMsgUpdateProject
		},
	)
	appParams.GetOrGenerate(cdc, OpWeightMsgApproveProject, &weightMsgApproveProject, nil,
		func(_ *rand.Rand) {
			weightMsgApproveProject = DefaultWeightMsgApproveProject
		},
	)
	appParams.GetOrGenerate(cdc, OpWeightMsgRejectProject, &weightMsgRejectProject, nil,
		func(_ *rand.Rand) {
			weightMsgRejectProject = DefaultWeightMsgRejectProject
		},
	)
	appParams.GetOrGenerate(cdc, OpWeightMsgSuspendProject, &weightMsgSuspendProject, nil,
		func(_ *rand.Rand) {
			weightMsgSuspendProject = DefaultWeightMsgSuspendProject
		},
	)
	appParams.GetOrGenerate(cdc, OpWeightMsgIssueCredits, &weightMsgIssueCredits, nil,
		func(_ *rand.Rand) {
			weightMsgIssueCredits = DefaultWeightMsgIssueCredits
		},
	)
	appParams.GetOrGenerate(cdc, OpWeightMsgTransferCredits, &weightMsgTransferCredits, nil,
		func(_ *rand.Rand) {
			weightMsgTransferCredits = DefaultWeightMsgTransferCredits
		},
	)
	appParams.GetOrGenerate(cdc, OpWeightMsgRetireCredits, &weightMsgRetireCredits, nil,
		func(_ *rand.Rand) {
			weightMsgRetireCredits = DefaultWeightMsgRetireCredits
		},
	)

	protoCodec := cdc.(*codec.ProtoCodec)

	return simulation.WeightedOperations{
		simulation.NewWeightedOperation(
			weightMsgCreateIssuer,
			SimulateMsgCreateIssuer(protoCodec, ak, bk, k),
		),
		simulation.NewWeightedOperation(
			weightMsgUpdateIssuer,
			SimulateMsgUpdateIssuer(protoCodec, ak, bk, k),
		),
		simulation.NewWeightedOperation(
			weightMsgCreateApplicant,
			SimulateMsgCreateApplicant(protoCodec, ak, bk, k),
		),
		simulation.NewWeightedOperation(
			weightMsgUpdateApplicant,
			SimulateMsgUpdateApplicant(protoCodec, ak, bk, k),
		),
		simulation.NewWeightedOperation(
			weightMsgCreateCreditType,
			SimulateMsgCreateCreditType(protoCodec, ak, bk, k),
		),
		simulation.NewWeightedOperation(
			weightMsgUpdateCreditType,
			SimulateMsgUpdateCreditType(protoCodec, ak, bk, k),
		),
		simulation.NewWeightedOperation(
			weightMsgCreateProject,
			SimulateMsgCreateProject(protoCodec, ak, bk, k),
		),
		simulation.NewWeightedOperation(
			weightMsgUpdateProject,
			SimulateMsgUpdateProject(protoCodec, ak, bk, k),
		),
		simulation.NewWeightedOperation(
			weightMsgApproveProject,
			SimulateMsgApproveProject(protoCodec, ak, bk, k),
		),
		simulation.NewWeightedOperation(
			weightMsgRejectProject,
			SimulateMsgRejectProject(protoCodec, ak, bk, k),
		),
		simulation.NewWeightedOperation(
			weightMsgSuspendProject,
			SimulateMsgSuspendProject(protoCodec, ak, bk, k),
		),
		simulation.NewWeightedOperation(
			weightMsgIssueCredits,
			SimulateMsgIssueCredits(protoCodec, ak, bk, k),
		),
		simulation.NewWeightedOperation(
			weightMsgTransferCredits,
			SimulateMsgTransferCredits(protoCodec, ak, bk, k),
		),
		simulation.NewWeightedOperation(
			weightMsgRetireCredits,
			SimulateMsgRetireCredits(protoCodec, ak, bk, k),
		),
	}
}

// SimulateMsgCreateIssuer generates a MsgCreateIssuer with random values.
func SimulateMsgCreateIssuer(cdc *codec.ProtoCodec, ak plasticcredit.AccountKeeper, bk plasticcredit.BankKeeper, k keeper.Keeper) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, sdkCtx sdk.Context, accounts []simtypes.Account, chainID string,
	) (opMsg simtypes.OperationMsg, fOps []simtypes.FutureOperation, err error) {
		msgType := sdk.MsgTypeURL(&plasticcredit.MsgCreateIssuer{})
		querier := keeper.Querier{Keeper: k}
		admin, _ := simtypes.RandomAcc(r, accounts)

		ctx := sdk.WrapSDKContext(sdkCtx)
		res, err := querier.Params(ctx, &plasticcredit.QueryParamsRequest{})
		if err != nil {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get params"), nil, nil
		}

		if res.Params.IssuerCreator == "" {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "issuer creator not set"), nil, nil
		}

		simAccount, found := simtypes.FindAccount(accounts, sdk.MustAccAddressFromBech32(res.Params.IssuerCreator))
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "issuer creator not found"), nil, nil
		}

		msg := &plasticcredit.MsgCreateIssuer{
			Creator:     simAccount.Address.String(),
			Name:        createRandomName(r),
			Description: createRandomDescription(r),
			Admin:       admin.Address.String(),
		}

		spendable := bk.SpendableCoins(sdkCtx, simAccount.Address)

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           moduletestutil.MakeTestEncodingConfig().TxConfig,
			Cdc:             cdc,
			Msg:             msg,
			MsgType:         msgType,
			Context:         sdkCtx,
			SimAccount:      simAccount,
			AccountKeeper:   ak,
			Bankkeeper:      bk,
			ModuleName:      plasticcredit.ModuleName,
			CoinsSpentInMsg: spendable,
		}

		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

// SimulateMsgUpdateIssuer generates a MsgUpdateIssuer with random values.
func SimulateMsgUpdateIssuer(cdc *codec.ProtoCodec, ak plasticcredit.AccountKeeper, bk plasticcredit.BankKeeper, k keeper.Keeper) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, sdkCtx sdk.Context, accounts []simtypes.Account, chainID string,
	) (opMsg simtypes.OperationMsg, fOps []simtypes.FutureOperation, err error) {
		msgType := sdk.MsgTypeURL(&plasticcredit.MsgUpdateIssuer{})
		querier := keeper.Querier{Keeper: k}

		ctx := sdk.WrapSDKContext(sdkCtx)
		ids := querier.GetIDCounters(sdkCtx)
		issuer, err := getRandomIssuer(ctx, r, querier, ids)
		if err != nil {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get issuer"), nil, nil
		}

		admin, found := simtypes.FindAccount(accounts, sdk.MustAccAddressFromBech32(issuer.Admin))
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to find admin"), nil, nil
		}

		msg := &plasticcredit.MsgUpdateIssuer{
			Updater:     admin.Address.String(),
			IssuerId:    issuer.Id,
			Name:        createRandomName(r),
			Description: createRandomDescription(r),
			Admin:       admin.Address.String(),
		}

		spendable := bk.SpendableCoins(sdkCtx, admin.Address)

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           moduletestutil.MakeTestEncodingConfig().TxConfig,
			Cdc:             cdc,
			Msg:             msg,
			MsgType:         msgType,
			Context:         sdkCtx,
			SimAccount:      admin,
			AccountKeeper:   ak,
			Bankkeeper:      bk,
			ModuleName:      plasticcredit.ModuleName,
			CoinsSpentInMsg: spendable,
		}

		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

// SimulateMsgCreateApplicant generates a MsgCreateApplicant with random values.
func SimulateMsgCreateApplicant(cdc *codec.ProtoCodec, ak plasticcredit.AccountKeeper, bk plasticcredit.BankKeeper, _ keeper.Keeper) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, sdkCtx sdk.Context, accounts []simtypes.Account, chainID string,
	) (opMsg simtypes.OperationMsg, fOps []simtypes.FutureOperation, err error) {
		msgType := sdk.MsgTypeURL(&plasticcredit.MsgUpdateIssuer{})
		simAccount, _ := simtypes.RandomAcc(r, accounts)
		admin, _ := simtypes.RandomAcc(r, accounts)

		msg := &plasticcredit.MsgCreateApplicant{
			Name:        createRandomName(r),
			Description: createRandomDescription(r),
			Admin:       admin.Address.String(),
		}

		spendable := bk.SpendableCoins(sdkCtx, simAccount.Address)

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           moduletestutil.MakeTestEncodingConfig().TxConfig,
			Cdc:             cdc,
			Msg:             msg,
			MsgType:         msgType,
			Context:         sdkCtx,
			SimAccount:      admin,
			AccountKeeper:   ak,
			Bankkeeper:      bk,
			ModuleName:      plasticcredit.ModuleName,
			CoinsSpentInMsg: spendable,
		}

		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

// SimulateMsgUpdateApplicant generates a MsgUpdateApplicant with random values.
func SimulateMsgUpdateApplicant(cdc *codec.ProtoCodec, ak plasticcredit.AccountKeeper, bk plasticcredit.BankKeeper, k keeper.Keeper) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, sdkCtx sdk.Context, accounts []simtypes.Account, chainID string,
	) (opMsg simtypes.OperationMsg, fOps []simtypes.FutureOperation, err error) {
		msgType := sdk.MsgTypeURL(&plasticcredit.MsgUpdateApplicant{})
		querier := keeper.Querier{Keeper: k}

		ctx := sdk.WrapSDKContext(sdkCtx)
		ids := querier.GetIDCounters(sdkCtx)
		applicant, err := getRandomApplicant(ctx, r, querier, ids)
		if err != nil {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get applicant"), nil, nil
		}

		admin, found := simtypes.FindAccount(accounts, sdk.MustAccAddressFromBech32(applicant.Admin))
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to find admin"), nil, nil
		}

		msg := &plasticcredit.MsgUpdateApplicant{
			Updater:     admin.Address.String(),
			ApplicantId: applicant.Id,
			Name:        createRandomName(r),
			Description: createRandomDescription(r),
			Admin:       admin.Address.String(),
		}

		spendable := bk.SpendableCoins(sdkCtx, admin.Address)

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           moduletestutil.MakeTestEncodingConfig().TxConfig,
			Cdc:             cdc,
			Msg:             msg,
			MsgType:         msgType,
			Context:         sdkCtx,
			SimAccount:      admin,
			AccountKeeper:   ak,
			Bankkeeper:      bk,
			ModuleName:      plasticcredit.ModuleName,
			CoinsSpentInMsg: spendable,
		}

		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

// SimulateMsgCreateCreditType generates a MsgCreateCreditType with random values.
func SimulateMsgCreateCreditType(cdc *codec.ProtoCodec, ak plasticcredit.AccountKeeper, bk plasticcredit.BankKeeper, k keeper.Keeper) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, sdkCtx sdk.Context, accounts []simtypes.Account, chainID string,
	) (opMsg simtypes.OperationMsg, fOps []simtypes.FutureOperation, err error) {
		msgType := sdk.MsgTypeURL(&plasticcredit.MsgCreateCreditType{})
		querier := keeper.Querier{Keeper: k}

		ctx := sdk.WrapSDKContext(sdkCtx)

		ids := querier.GetIDCounters(sdkCtx)
		issuer, err := getRandomIssuer(ctx, r, querier, ids)
		if err != nil {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get issuer"), nil, nil
		}

		admin, found := simtypes.FindAccount(accounts, sdk.MustAccAddressFromBech32(issuer.Admin))
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to find admin"), nil, nil
		}

		msg := &plasticcredit.MsgCreateCreditType{
			Creator:      admin.Address.String(),
			Abbreviation: createUniqueRandomAbbreviation(ctx, r, querier),
			IssuerId:     issuer.Id,
			Name:         createRandomName(r),
		}

		res, _ := querier.Params(ctx, &plasticcredit.QueryParamsRequest{})
		params := res.Params

		spendable, neg := bk.SpendableCoins(sdkCtx, admin.Address).SafeSub(params.CreditTypeCreationFee)
		if neg {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "not enough balance to create credit type"), nil, nil
		}

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           moduletestutil.MakeTestEncodingConfig().TxConfig,
			Cdc:             cdc,
			Msg:             msg,
			MsgType:         msgType,
			Context:         sdkCtx,
			SimAccount:      admin,
			AccountKeeper:   ak,
			Bankkeeper:      bk,
			ModuleName:      plasticcredit.ModuleName,
			CoinsSpentInMsg: spendable,
		}

		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

// SimulateMsgUpdateCreditType generates a MsgUpdateCreditType with random values.
func SimulateMsgUpdateCreditType(cdc *codec.ProtoCodec, ak plasticcredit.AccountKeeper, bk plasticcredit.BankKeeper, k keeper.Keeper) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, sdkCtx sdk.Context, accounts []simtypes.Account, chainID string,
	) (opMsg simtypes.OperationMsg, fOps []simtypes.FutureOperation, err error) {
		msgType := sdk.MsgTypeURL(&plasticcredit.MsgUpdateCreditType{})
		querier := keeper.Querier{Keeper: k}

		ctx := sdk.WrapSDKContext(sdkCtx)
		creditType, err := getRandomCreditType(ctx, r, querier)
		if err != nil {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get issuer"), nil, nil
		}

		issuer, found := querier.GetIssuer(sdkCtx, creditType.IssuerId)
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to find issuer"), nil, nil
		}

		admin, found := simtypes.FindAccount(accounts, sdk.MustAccAddressFromBech32(issuer.Admin))
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to find admin"), nil, nil
		}

		msg := &plasticcredit.MsgUpdateCreditType{
			Updater:      admin.Address.String(),
			Abbreviation: creditType.Abbreviation,
			Name:         createRandomName(r),
		}

		spendable := bk.SpendableCoins(sdkCtx, admin.Address)

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           moduletestutil.MakeTestEncodingConfig().TxConfig,
			Cdc:             cdc,
			Msg:             msg,
			MsgType:         msgType,
			Context:         sdkCtx,
			SimAccount:      admin,
			AccountKeeper:   ak,
			Bankkeeper:      bk,
			ModuleName:      plasticcredit.ModuleName,
			CoinsSpentInMsg: spendable,
		}

		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

func SimulateMsgCreateProject(cdc *codec.ProtoCodec, ak plasticcredit.AccountKeeper, bk plasticcredit.BankKeeper, k keeper.Keeper) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, sdkCtx sdk.Context, accounts []simtypes.Account, chainID string,
	) (opMsg simtypes.OperationMsg, fOps []simtypes.FutureOperation, err error) {
		msgType := sdk.MsgTypeURL(&plasticcredit.MsgCreateProject{})
		querier := keeper.Querier{Keeper: k}

		ctx := sdk.WrapSDKContext(sdkCtx)

		ids := querier.GetIDCounters(sdkCtx)
		applicant, err := getRandomApplicant(ctx, r, querier, ids)
		if err != nil {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get applicant"), nil, nil
		}

		creditType, err := getRandomCreditType(ctx, r, querier)
		if err != nil {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get credit type"), nil, nil
		}

		admin, found := simtypes.FindAccount(accounts, sdk.MustAccAddressFromBech32(applicant.Admin))
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to find admin"), nil, nil
		}

		msg := &plasticcredit.MsgCreateProject{
			Creator:                admin.Address.String(),
			ApplicantId:            applicant.Id,
			CreditTypeAbbreviation: creditType.Abbreviation,
			Name:                   createRandomName(r),
		}

		spendable := bk.SpendableCoins(sdkCtx, admin.Address)

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           moduletestutil.MakeTestEncodingConfig().TxConfig,
			Cdc:             cdc,
			Msg:             msg,
			MsgType:         msgType,
			Context:         sdkCtx,
			SimAccount:      admin,
			AccountKeeper:   ak,
			Bankkeeper:      bk,
			ModuleName:      plasticcredit.ModuleName,
			CoinsSpentInMsg: spendable,
		}

		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

func SimulateMsgUpdateProject(cdc *codec.ProtoCodec, ak plasticcredit.AccountKeeper, bk plasticcredit.BankKeeper, k keeper.Keeper) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, sdkCtx sdk.Context, accounts []simtypes.Account, chainID string,
	) (opMsg simtypes.OperationMsg, fOps []simtypes.FutureOperation, err error) {
		msgType := sdk.MsgTypeURL(&plasticcredit.MsgUpdateProject{})
		querier := keeper.Querier{Keeper: k}

		ctx := sdk.WrapSDKContext(sdkCtx)

		ids := querier.GetIDCounters(sdkCtx)
		project, err := getRandomProject(ctx, r, querier, ids)
		if err != nil {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get project"), nil, nil
		}

		applicant, found := querier.GetApplicant(sdkCtx, project.ApplicantId)
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get applicant"), nil, nil
		}

		admin, found := simtypes.FindAccount(accounts, sdk.MustAccAddressFromBech32(applicant.Admin))
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to find admin"), nil, nil
		}

		msg := &plasticcredit.MsgUpdateProject{
			Updater:   admin.Address.String(),
			ProjectId: project.Id,
			Name:      createRandomName(r),
		}

		spendable := bk.SpendableCoins(sdkCtx, admin.Address)

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           moduletestutil.MakeTestEncodingConfig().TxConfig,
			Cdc:             cdc,
			Msg:             msg,
			MsgType:         msgType,
			Context:         sdkCtx,
			SimAccount:      admin,
			AccountKeeper:   ak,
			Bankkeeper:      bk,
			ModuleName:      plasticcredit.ModuleName,
			CoinsSpentInMsg: spendable,
		}

		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

func SimulateMsgApproveProject(cdc *codec.ProtoCodec, ak plasticcredit.AccountKeeper, bk plasticcredit.BankKeeper, k keeper.Keeper) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, sdkCtx sdk.Context, accounts []simtypes.Account, chainID string,
	) (opMsg simtypes.OperationMsg, fOps []simtypes.FutureOperation, err error) {
		msgType := sdk.MsgTypeURL(&plasticcredit.MsgApproveProject{})
		querier := keeper.Querier{Keeper: k}

		ctx := sdk.WrapSDKContext(sdkCtx)

		ids := querier.GetIDCounters(sdkCtx)
		project, err := getRandomProject(ctx, r, querier, ids)
		if err != nil {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get project"), nil, nil
		}
		if project.Status == plasticcredit.ProjectStatus_APPROVED {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "project already approved"), nil, nil
		}

		creditType, found := querier.GetCreditType(sdkCtx, project.CreditTypeAbbreviation)
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get credit type"), nil, nil
		}

		issuer, found := querier.GetIssuer(sdkCtx, creditType.IssuerId)
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get issuer"), nil, nil
		}

		issuerAdmin, found := simtypes.FindAccount(accounts, sdk.MustAccAddressFromBech32(issuer.Admin))
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to find admin"), nil, nil
		}

		msg := &plasticcredit.MsgApproveProject{
			Approver:  issuerAdmin.Address.String(),
			ProjectId: project.Id,
		}

		spendable := bk.SpendableCoins(sdkCtx, issuerAdmin.Address)

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           moduletestutil.MakeTestEncodingConfig().TxConfig,
			Cdc:             cdc,
			Msg:             msg,
			MsgType:         msgType,
			Context:         sdkCtx,
			SimAccount:      issuerAdmin,
			AccountKeeper:   ak,
			Bankkeeper:      bk,
			ModuleName:      plasticcredit.ModuleName,
			CoinsSpentInMsg: spendable,
		}

		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

func SimulateMsgRejectProject(cdc *codec.ProtoCodec, ak plasticcredit.AccountKeeper, bk plasticcredit.BankKeeper, k keeper.Keeper) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, sdkCtx sdk.Context, accounts []simtypes.Account, chainID string,
	) (opMsg simtypes.OperationMsg, fOps []simtypes.FutureOperation, err error) {
		msgType := sdk.MsgTypeURL(&plasticcredit.MsgRejectProject{})
		querier := keeper.Querier{Keeper: k}

		ctx := sdk.WrapSDKContext(sdkCtx)

		ids := querier.GetIDCounters(sdkCtx)
		project, err := getRandomProject(ctx, r, querier, ids)
		if err != nil {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get project"), nil, nil
		}
		if project.Status != plasticcredit.ProjectStatus_NEW {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "project cannot be rejected"), nil, nil
		}

		creditType, found := querier.GetCreditType(sdkCtx, project.CreditTypeAbbreviation)
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get credit type"), nil, nil
		}

		issuer, found := querier.GetIssuer(sdkCtx, creditType.IssuerId)
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get issuer"), nil, nil
		}

		issuerAdmin, found := simtypes.FindAccount(accounts, sdk.MustAccAddressFromBech32(issuer.Admin))
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to find admin"), nil, nil
		}

		msg := &plasticcredit.MsgRejectProject{
			Rejector:  issuerAdmin.Address.String(),
			ProjectId: project.Id,
		}

		spendable := bk.SpendableCoins(sdkCtx, issuerAdmin.Address)

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           moduletestutil.MakeTestEncodingConfig().TxConfig,
			Cdc:             cdc,
			Msg:             msg,
			MsgType:         msgType,
			Context:         sdkCtx,
			SimAccount:      issuerAdmin,
			AccountKeeper:   ak,
			Bankkeeper:      bk,
			ModuleName:      plasticcredit.ModuleName,
			CoinsSpentInMsg: spendable,
		}

		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

func SimulateMsgSuspendProject(cdc *codec.ProtoCodec, ak plasticcredit.AccountKeeper, bk plasticcredit.BankKeeper, k keeper.Keeper) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, sdkCtx sdk.Context, accounts []simtypes.Account, chainID string,
	) (opMsg simtypes.OperationMsg, fOps []simtypes.FutureOperation, err error) {
		msgType := sdk.MsgTypeURL(&plasticcredit.MsgSuspendProject{})
		querier := keeper.Querier{Keeper: k}

		ctx := sdk.WrapSDKContext(sdkCtx)

		ids := querier.GetIDCounters(sdkCtx)
		project, err := getRandomProject(ctx, r, querier, ids)
		if err != nil {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get project"), nil, nil
		}
		if project.Status != plasticcredit.ProjectStatus_APPROVED {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "project cannot be suspended"), nil, nil
		}

		creditType, found := querier.GetCreditType(sdkCtx, project.CreditTypeAbbreviation)
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get credit type"), nil, nil
		}

		issuer, found := querier.GetIssuer(sdkCtx, creditType.IssuerId)
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get issuer"), nil, nil
		}

		issuerAdmin, found := simtypes.FindAccount(accounts, sdk.MustAccAddressFromBech32(issuer.Admin))
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to find admin"), nil, nil
		}

		msg := &plasticcredit.MsgSuspendProject{
			Updater:   issuerAdmin.Address.String(),
			ProjectId: project.Id,
		}

		spendable := bk.SpendableCoins(sdkCtx, issuerAdmin.Address)

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           moduletestutil.MakeTestEncodingConfig().TxConfig,
			Cdc:             cdc,
			Msg:             msg,
			MsgType:         msgType,
			Context:         sdkCtx,
			SimAccount:      issuerAdmin,
			AccountKeeper:   ak,
			Bankkeeper:      bk,
			ModuleName:      plasticcredit.ModuleName,
			CoinsSpentInMsg: spendable,
		}

		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

func SimulateMsgIssueCredits(cdc *codec.ProtoCodec, ak plasticcredit.AccountKeeper, bk plasticcredit.BankKeeper, k keeper.Keeper) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, sdkCtx sdk.Context, accounts []simtypes.Account, chainID string,
	) (opMsg simtypes.OperationMsg, fOps []simtypes.FutureOperation, err error) {
		msgType := sdk.MsgTypeURL(&plasticcredit.MsgIssueCredits{})
		querier := keeper.Querier{Keeper: k}

		ctx := sdk.WrapSDKContext(sdkCtx)

		ids := querier.GetIDCounters(sdkCtx)
		project, err := getRandomProject(ctx, r, querier, ids)
		if err != nil {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get project"), nil, nil
		}
		if project.Status != plasticcredit.ProjectStatus_APPROVED {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "cannot issue credit for non-approved project"), nil, nil
		}

		creditType, found := querier.GetCreditType(sdkCtx, project.CreditTypeAbbreviation)
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get credit type"), nil, nil
		}

		issuer, found := querier.GetIssuer(sdkCtx, creditType.IssuerId)
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get issuer"), nil, nil
		}

		issuerAdmin, found := simtypes.FindAccount(accounts, sdk.MustAccAddressFromBech32(issuer.Admin))
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to find admin"), nil, nil
		}

		metadatasNo := simtypes.RandIntBetween(r, 1, 5)
		metadatas := make([]string, metadatasNo)
		for i := 0; i < metadatasNo; i++ {
			metadatas[i] = createRandomMetadataURI(r)
		}

		msg := &plasticcredit.MsgIssueCredits{
			Creator:      issuerAdmin.Address.String(),
			ProjectId:    project.Id,
			SerialNumber: createUniqueRandomSerialNumber(ctx, r, querier, creditType.Abbreviation),
			CreditAmount: uint64(simtypes.RandIntBetween(r, 1, 10000000)),
			MetadataUris: metadatas,
		}

		spendable := bk.SpendableCoins(sdkCtx, issuerAdmin.Address)

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           moduletestutil.MakeTestEncodingConfig().TxConfig,
			Cdc:             cdc,
			Msg:             msg,
			MsgType:         msgType,
			Context:         sdkCtx,
			SimAccount:      issuerAdmin,
			AccountKeeper:   ak,
			Bankkeeper:      bk,
			ModuleName:      plasticcredit.ModuleName,
			CoinsSpentInMsg: spendable,
		}

		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

func SimulateMsgTransferCredits(cdc *codec.ProtoCodec, ak plasticcredit.AccountKeeper, bk plasticcredit.BankKeeper, k keeper.Keeper) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, sdkCtx sdk.Context, accounts []simtypes.Account, chainID string,
	) (opMsg simtypes.OperationMsg, fOps []simtypes.FutureOperation, err error) {
		msgType := sdk.MsgTypeURL(&plasticcredit.MsgTransferCredits{})
		querier := keeper.Querier{Keeper: k}

		ctx := sdk.WrapSDKContext(sdkCtx)

		creditBalance, err := getRandomCreditBalance(ctx, r, querier)
		if err != nil {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get credit balance"), nil, nil
		}

		owner, found := simtypes.FindAccount(accounts, sdk.MustAccAddressFromBech32(creditBalance.Owner))
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to find owner"), nil, nil
		}
		recipient, _ := simtypes.RandomAcc(r, accounts)
		if owner.Equals(recipient) {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "cannot transfer credits to self"), nil, nil
		}

		if creditBalance.Balance.Active == 0 {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "no active credits to transfer"), nil, nil
		}

		amount := 1
		if creditBalance.Balance.Active > 1 {
			amount = simtypes.RandIntBetween(r, 1, int(creditBalance.Balance.Active))
		}

		msg := &plasticcredit.MsgTransferCredits{
			From:   owner.Address.String(),
			To:     recipient.Address.String(),
			Denom:  creditBalance.Denom,
			Amount: uint64(amount),
			Retire: simtypes.RandIntBetween(r, 0, 1) == 1,
		}

		spendable := bk.SpendableCoins(sdkCtx, owner.Address)

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           moduletestutil.MakeTestEncodingConfig().TxConfig,
			Cdc:             cdc,
			Msg:             msg,
			MsgType:         msgType,
			Context:         sdkCtx,
			SimAccount:      owner,
			AccountKeeper:   ak,
			Bankkeeper:      bk,
			ModuleName:      plasticcredit.ModuleName,
			CoinsSpentInMsg: spendable,
		}

		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}

func SimulateMsgRetireCredits(cdc *codec.ProtoCodec, ak plasticcredit.AccountKeeper, bk plasticcredit.BankKeeper, k keeper.Keeper) simtypes.Operation {
	return func(
		r *rand.Rand, app *baseapp.BaseApp, sdkCtx sdk.Context, accounts []simtypes.Account, chainID string,
	) (opMsg simtypes.OperationMsg, fOps []simtypes.FutureOperation, err error) {
		msgType := sdk.MsgTypeURL(&plasticcredit.MsgRetireCredits{})
		querier := keeper.Querier{Keeper: k}

		ctx := sdk.WrapSDKContext(sdkCtx)

		creditBalance, err := getRandomCreditBalance(ctx, r, querier)
		if err != nil {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to get credit balance"), nil, nil
		}

		owner, found := simtypes.FindAccount(accounts, sdk.MustAccAddressFromBech32(creditBalance.Owner))
		if !found {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "unable to find owner"), nil, nil
		}

		if creditBalance.Balance.Active == 0 {
			return simtypes.NoOpMsg(plasticcredit.ModuleName, msgType, "no active credits to retire"), nil, nil
		}

		amount := 1
		if creditBalance.Balance.Active > 1 {
			amount = simtypes.RandIntBetween(r, 1, int(creditBalance.Balance.Active))
		}

		msg := &plasticcredit.MsgRetireCredits{
			Owner:  owner.Address.String(),
			Denom:  creditBalance.Denom,
			Amount: uint64(amount),
		}

		spendable := bk.SpendableCoins(sdkCtx, owner.Address)

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           moduletestutil.MakeTestEncodingConfig().TxConfig,
			Cdc:             cdc,
			Msg:             msg,
			MsgType:         msgType,
			Context:         sdkCtx,
			SimAccount:      owner,
			AccountKeeper:   ak,
			Bankkeeper:      bk,
			ModuleName:      plasticcredit.ModuleName,
			CoinsSpentInMsg: spendable,
		}

		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}
