package proofofexistence

import (
	"encoding/hex"

	"cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateProof{}

func (m *MsgCreateProof) Route() string {
	return sdk.MsgTypeURL(m)
}

func (m *MsgCreateProof) Type() string {
	return sdk.MsgTypeURL(m)
}

func (m *MsgCreateProof) GetSigners() []sdk.AccAddress {
	reporter, err := sdk.AccAddressFromBech32(m.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{reporter}
}

func (m *MsgCreateProof) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(m)
	return sdk.MustSortJSON(bz)
}

func (m *MsgCreateProof) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Creator)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = hex.DecodeString(m.Hash)
	if err != nil {
		return errors.Wrapf(ErrInvalidProof, "Hash %s is not hex encoded", m.Hash)
	}

	return nil
}
