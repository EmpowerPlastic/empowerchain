package proofofexistence

import (
	"encoding/hex"

	"cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateProof{}

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

func (m *MsgCreateProof) GetSigners() []sdk.AccAddress {
	reporter, err := sdk.AccAddressFromBech32(m.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{reporter}
}
