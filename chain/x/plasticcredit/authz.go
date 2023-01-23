package plasticcredit

import (
	"cosmossdk.io/errors"
	"cosmossdk.io/math"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/x/authz"

	"github.com/EmpowerPlastic/empowerchain/utils"
)

var _ authz.Authorization = &TransferAuthorization{}

func (a TransferAuthorization) MsgTypeURL() string {
	return sdk.MsgTypeURL(&MsgTransferCredits{})
}

func (a TransferAuthorization) ValidateBasic() error {
	if a.Denom == "" {
		return errors.Wrap(utils.ErrInvalidValue, "denom is empty")
	}

	if a.MaxCredits <= 0 {
		return errors.Wrap(utils.ErrInvalidValue, "max_credits must be more than zero")
	}

	return nil
}

func (a TransferAuthorization) Accept(_ sdk.Context, msg sdk.Msg) (authz.AcceptResponse, error) {
	transferMsg, ok := msg.(*MsgTransferCredits)
	if !ok {
		return authz.AcceptResponse{}, sdkerrors.ErrInvalidType.Wrap("type mismatch")
	}

	if transferMsg.Denom != a.Denom {
		return authz.AcceptResponse{}, sdkerrors.ErrUnauthorized.Wrapf("wrong denom, wanted %s, got %s", transferMsg.Denom, a.Denom)
	}

	amountLeft := math.NewIntFromUint64(a.MaxCredits).Sub(math.NewIntFromUint64(transferMsg.Amount))
	if amountLeft.IsNegative() {
		return authz.AcceptResponse{}, sdkerrors.ErrUnauthorized.Wrapf("not enough allowance left, wanted %d, had %d", transferMsg.Amount, a.MaxCredits)
	}
	if amountLeft.IsZero() {
		return authz.AcceptResponse{
			Accept:  true,
			Delete:  true,
			Updated: nil,
		}, nil
	}

	return authz.AcceptResponse{
		Accept: true,
		Delete: false,
		Updated: &TransferAuthorization{
			Denom:      a.Denom,
			MaxCredits: amountLeft.Uint64(),
		},
	}, nil
}
