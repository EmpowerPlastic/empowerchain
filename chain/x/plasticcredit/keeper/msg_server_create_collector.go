package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
)

func (k msgServer) CreateCollector(goCtx context.Context, msg *types.MsgCreateCollector) (*types.MsgCreateCollectorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if err := msg.ValidateBasic(); err != nil {
		return nil, err
	}

	// TODO access control

	idCounters, found := k.GetIdCounters(ctx)
	if !found {
		panic("IdCounters not found")
	}

	collector := types.Collector{
		CollectorId: idCounters.CollectorId,
		Name:        msg.Name,
		Admin:       msg.Admin,
		Accounts:    msg.Accounts,
	}

	// update state
	k.SetCollector(ctx, collector)

	idCounters.CollectorId++
	k.SetIdCounters(ctx, idCounters)

	_ = ctx

	return &types.MsgCreateCollectorResponse{CollectorId: collector.CollectorId}, nil
}
