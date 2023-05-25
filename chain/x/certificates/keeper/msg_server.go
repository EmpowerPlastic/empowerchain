package keeper

import (
	"context"

	"cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"github.com/EmpowerPlastic/empowerchain/x/certificates"
)

type msgServer struct {
	Keeper
}

// NewMsgServerImpl returns an implementation of the MsgServer interface
// for the provided Keeper.
func NewMsgServerImpl(keeper Keeper) certificates.MsgServer {
	return &msgServer{Keeper: keeper}
}

func (m msgServer) UpdateParams(goCtx context.Context, req *certificates.MsgUpdateParams) (*certificates.MsgUpdateParamsResponse, error) {
	if m.authority != req.Authority {
		return nil, errors.Wrapf(sdkerrors.ErrUnauthorized, "invalid authority; expected %s, got %s", m.authority, req.Authority)
	}
	for _, issuer := range req.Params.AllowedIssuers {
		_, err := sdk.AccAddressFromBech32(issuer)
		if len(issuer) == 0 || err != nil {
			return nil, errors.Wrap(sdkerrors.ErrInvalidAddress, "invalid issuer parameter")
		}
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	if err := m.SetParams(ctx, req.Params); err != nil {
		return nil, err
	}

	return &certificates.MsgUpdateParamsResponse{}, nil
}

func (m msgServer) CreateCertificate(goCtx context.Context, req *certificates.MsgCreateCertificate) (*certificates.MsgCreateCertificateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	certificateID, err := m.Keeper.createCertificate(ctx, req)
	if err != nil {
		return nil, err
	}

	return &certificates.MsgCreateCertificateResponse{
		CertificateId: certificateID,
	}, nil
}

var _ certificates.MsgServer = msgServer{}
