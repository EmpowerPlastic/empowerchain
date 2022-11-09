package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/empowerchain/empowerchain/x/plasticcredit/types"
	"golang.org/x/exp/slices"
)

func (k msgServer) CreateIssuer(goCtx context.Context, msg *types.MsgCreateIssuer) (*types.MsgCreateIssuerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if err := msg.ValidateBasic(); err != nil {
		return nil, err
	}

	// check if message sender is allowed to create Issuers
	if !slices.Contains(k.Keeper.CreateissuerAllowlist(ctx), msg.Creator) {
		return nil, sdkerrors.Wrapf(types.ErrCreatorNotAllowlisted, "%s", msg.Creator)
	}

	idCounters, found := k.GetIdCounters(ctx)
	if !found {
		panic("IdCounters not found")
	}
	issuer := types.Issuer{
		IssuerId:    idCounters.IssuerId,
		Name:        msg.Name,
		Description: msg.Description,
		Admin:       msg.Admin,
		Accounts:    msg.Accounts,
	}

	// update state
	k.SetIssuer(ctx, issuer)

	idCounters.IssuerId++
	k.SetIdCounters(ctx, idCounters)

	_ = ctx

	return &types.MsgCreateIssuerResponse{IssuerId: issuer.IssuerId}, nil
}
