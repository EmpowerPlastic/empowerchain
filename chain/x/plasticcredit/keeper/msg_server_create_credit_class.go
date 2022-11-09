package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

func (k msgServer) CreateCreditClass(goCtx context.Context, msg *types.MsgCreateCreditClass) (*types.MsgCreateCreditClassResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if err := msg.ValidateBasic(); err != nil {
		return nil, err
	}

	// TODO access control

	// TODO fetch issuer and check if creator is an issuer

	idCounters, found := k.GetIdCounters(ctx)
	if !found {
		panic("IdCounters not found")
	}

	creditClass := types.CreditClass{
		CreditClassId: idCounters.CreditClassId,
		IssuerId:      msg.IssuerId,
		// TODO validate denom
		Denom:           msg.Denom,
		CreditClassData: msg.CreditClassData,
	}

	k.SetCreditClass(ctx, creditClass)

	idCounters.CreditClassId++
	k.SetIdCounters(ctx, idCounters)

	_ = ctx

	return &types.MsgCreateCreditClassResponse{CreditClassId: creditClass.CreditClassId}, nil
}
