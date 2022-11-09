package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateCollector = "create_collector"

var _ sdk.Msg = &MsgCreateCollector{}

func NewMsgCreateCollector(creator string, name string, admin string, accounts []string) *MsgCreateCollector {
	return &MsgCreateCollector{
		Creator:  creator,
		Name:     name,
		Admin:    admin,
		Accounts: accounts,
	}
}

func (msg *MsgCreateCollector) Route() string {
	return RouterKey
}

func (msg *MsgCreateCollector) Type() string {
	return TypeMsgCreateCollector
}

func (msg *MsgCreateCollector) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCollector) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCollector) ValidateBasic() error {
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
