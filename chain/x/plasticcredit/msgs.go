package plasticcredit

import (
	errors "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var (
	_ sdk.Msg = &MsgUpdateParams{}
	_ sdk.Msg = &MsgCreateIssuer{}
)

func (m *MsgUpdateParams) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Authority)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid authority address (%s)", err)
	}

	return m.Params.Validate()
}

func (m *MsgUpdateParams) GetSigners() []sdk.AccAddress {
	reporter, err := sdk.AccAddressFromBech32(m.Authority)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{reporter}
}

func (m *MsgCreateIssuer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Creator)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = sdk.AccAddressFromBech32(m.Admin)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid admin address (%s)", err)
	}

	if m.Name == "" {
		return errors.Wrap(ErrInvalidIssuerName, "issuer name cannot be empty")
	}

	return nil
}

func (m *MsgCreateIssuer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(m.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}
