package types

import (
	"encoding/base64"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreate = "create"

var _ sdk.Msg = &MsgCreate{}

func NewMsgCreate(reporter string, hash string) *MsgCreate {
	return &MsgCreate{
		Reporter: reporter,
		Hash:     hash,
	}
}

func (msg *MsgCreate) Route() string {
	return RouterKey
}

func (msg *MsgCreate) Type() string {
	return TypeMsgCreate
}

func (msg *MsgCreate) GetSigners() []sdk.AccAddress {
	reporter, err := sdk.AccAddressFromBech32(msg.Reporter)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{reporter}
}

func (msg *MsgCreate) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreate) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Reporter)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid reporter address (%s)", err)
	}

	hashBytes, err := base64.StdEncoding.DecodeString(msg.Hash)
	if err != nil {
		return sdkerrors.Wrap(ErrInvalidHash, msg.Hash)
	}

	if len(hashBytes) != 32 {
		return sdkerrors.Wrap(ErrInvalidHash, msg.Hash)
	}

	return nil
}
