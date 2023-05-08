package certificates

import (
	errors "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var (
	_ sdk.Msg = &MsgUpdateParams{}
	_ sdk.Msg = &MsgCreateCertificate{}
)

func (m *MsgUpdateParams) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Authority)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid authority address (%s)", err)
	}
	// We allow empty issuer creator (which means only gov can create issuers)
	if len(m.Params.AllowedIssuers) == 0 {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "issuer name cannot be empty")
	}

	return nil
}

func (m *MsgUpdateParams) GetSigners() []sdk.AccAddress {
	authority, err := sdk.AccAddressFromBech32(m.Authority)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{authority}
}

func (m *MsgCreateCertificate) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Owner)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}

	_, err = sdk.AccAddressFromBech32(m.Issuer)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid issuer address (%s)", err)
	}

	if m.AdditionalData == nil || len(m.AdditionalData) == 0 {
		return errors.Wrapf(sdkerrors.ErrInvalidRequest, "Additional Data cannot be empty")
	}

	return nil
}

func (m *MsgCreateCertificate) GetSigners() []sdk.AccAddress {
	issuer, err := sdk.AccAddressFromBech32(m.Issuer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{issuer}
}
