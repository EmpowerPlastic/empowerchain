package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgIssueCredits = "issue_credits"

var _ sdk.Msg = &MsgIssueCredits{}

func NewMsgIssueCredits(creator string, issuerId uint64, recipient string, creditBatchIssuance *CreditBatchIssuance) *MsgIssueCredits {
	return &MsgIssueCredits{
		Creator:             creator,
		IssuerId:            issuerId,
		Recipient:           recipient,
		CreditBatchIssuance: creditBatchIssuance,
	}
}

func (msg *MsgIssueCredits) Route() string {
	return RouterKey
}

func (msg *MsgIssueCredits) Type() string {
	return TypeMsgIssueCredits
}

func (msg *MsgIssueCredits) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgIssueCredits) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgIssueCredits) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
