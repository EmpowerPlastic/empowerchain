package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateCreditClass = "create_credit_class"

var _ sdk.Msg = &MsgCreateCreditClass{}

func NewMsgCreateCreditClass(creator string, issuerId uint64, denom string, creditClassData *ProvenData) *MsgCreateCreditClass {
	return &MsgCreateCreditClass{
		Creator:         creator,
		IssuerId:        issuerId,
		Denom:           denom,
		CreditClassData: creditClassData,
	}
}

func (msg *MsgCreateCreditClass) Route() string {
	return RouterKey
}

func (msg *MsgCreateCreditClass) Type() string {
	return TypeMsgCreateCreditClass
}

func (msg *MsgCreateCreditClass) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCreditClass) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCreditClass) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
