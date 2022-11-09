package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateIssuer = "create_issuer"

var _ sdk.Msg = &MsgCreateIssuer{}

func NewMsgCreateIssuer(creator string, name string, description string, admin string, accounts []string) *MsgCreateIssuer {
	return &MsgCreateIssuer{
		Creator:     creator,
		Name:        name,
		Description: description,
		Admin:       admin,
		Accounts:    accounts,
	}
}

func (msg *MsgCreateIssuer) Route() string {
	return RouterKey
}

func (msg *MsgCreateIssuer) Type() string {
	return TypeMsgCreateIssuer
}

func (msg *MsgCreateIssuer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateIssuer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateIssuer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	_, err = sdk.AccAddressFromBech32(msg.Admin)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid admin address (%s)", err)
	}
	for _, account := range msg.Accounts {
		_, err := sdk.AccAddressFromBech32(account)
		if err != nil {
			return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid account address (%s)", err)
		}
	}
	return nil
}
