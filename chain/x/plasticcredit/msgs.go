package plasticcredit

import (
	errors "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var (
	_ sdk.Msg = &MsgUpdateParams{}
	_ sdk.Msg = &MsgCreateIssuer{}
	_ sdk.Msg = &MsgUpdateIssuer{}
	_ sdk.Msg = &MsgCreateApplicant{}
	_ sdk.Msg = &MsgUpdateApplicant{}
	_ sdk.Msg = &MsgCreateCreditType{}
	_ sdk.Msg = &MsgUpdateCreditType{}
	_ sdk.Msg = &MsgCreateProject{}
	_ sdk.Msg = &MsgUpdateProject{}
	_ sdk.Msg = &MsgApproveProject{}
	_ sdk.Msg = &MsgRejectProject{}
	_ sdk.Msg = &MsgSuspendProject{}
	_ sdk.Msg = &MsgIssueCredits{}
	_ sdk.Msg = &MsgTransferCredits{}
	_ sdk.Msg = &MsgRetireCredits{}
)

func (m *MsgUpdateParams) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Authority)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid authority address (%s)", err)
	}

	// We allow empty issuer creator (which means only gov can create issuers)
	if m.Params.IssuerCreator != "" {
		_, err = sdk.AccAddressFromBech32(m.Params.IssuerCreator)
		if err != nil {
			return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid issuer creator address (%s)", err)
		}
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
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "issuer name cannot be empty")
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

func (m *MsgUpdateIssuer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Updater)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid updater address (%s)", err)
	}

	if m.IssuerId == 0 {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "issuer_id cannot be 0")
	}

	if m.Name == "" {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "issuer name cannot be empty")
	}

	_, err = sdk.AccAddressFromBech32(m.Admin)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid admin address (%s)", err)
	}

	return nil
}

func (m *MsgUpdateIssuer) GetSigners() []sdk.AccAddress {
	updater, err := sdk.AccAddressFromBech32(m.Updater)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{updater}
}

func (m *MsgCreateApplicant) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Admin)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid admin address (%s)", err)
	}

	if m.Name == "" {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "applicant name cannot be empty")
	}

	return nil
}

func (m *MsgCreateApplicant) GetSigners() []sdk.AccAddress {
	admin, err := sdk.AccAddressFromBech32(m.Admin)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{admin}
}

func (m *MsgUpdateApplicant) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Admin)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid admin address (%s)", err)
	}

	if m.ApplicantId == 0 {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "applicant_id cannot be 0")
	}

	if m.Name == "" {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "applicant name cannot be empty")
	}
	_, err = sdk.AccAddressFromBech32(m.Updater)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid updater address (%s)", err)
	}

	return nil
}

func (m *MsgUpdateApplicant) GetSigners() []sdk.AccAddress {
	updater, err := sdk.AccAddressFromBech32(m.Updater)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{updater}
}

func (m *MsgCreateCreditType) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Creator)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	if m.IssuerId == 0 {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "issuer_id cannot be 0")
	}

	if m.Abbreviation == "" {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "abbreviation cannot be empty")
	}

	if m.Name == "" {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "credit type name cannot be empty")
	}

	return nil
}

func (m *MsgCreateCreditType) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(m.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (m *MsgUpdateCreditType) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Updater)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid updater address (%s)", err)
	}
	if m.Abbreviation == "" {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "abbreviation cannot be empty")
	}
	if m.Name == "" {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "credit type name cannot be empty")
	}

	return nil
}

func (m *MsgUpdateCreditType) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(m.Updater)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (m *MsgCreateProject) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Creator)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	if m.ApplicantId == 0 {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "applicant_id cannot be 0")
	}

	if m.CreditTypeAbbreviation == "" {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "abbreviation cannot be empty")
	}

	if m.Name == "" {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "project name cannot be empty")
	}

	return nil
}

func (m *MsgCreateProject) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(m.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (m *MsgUpdateProject) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Updater)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid updater address (%s)", err)
	}

	if m.ProjectId == 0 {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "project_id cannot be 0")
	}

	if m.Name == "" {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "project name cannot be empty")
	}

	return nil
}

func (m *MsgUpdateProject) GetSigners() []sdk.AccAddress {
	updater, err := sdk.AccAddressFromBech32(m.Updater)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{updater}
}

func (m *MsgApproveProject) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Approver)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid approver address (%s)", err)
	}

	if m.ProjectId == 0 {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "project_id cannot be 0")
	}

	return nil
}

func (m *MsgApproveProject) GetSigners() []sdk.AccAddress {
	approver, err := sdk.AccAddressFromBech32(m.Approver)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{approver}
}

func (m *MsgRejectProject) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Rejector)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid rejector address (%s)", err)
	}

	if m.ProjectId == 0 {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "project_id cannot be 0")
	}

	return nil
}

func (m *MsgRejectProject) GetSigners() []sdk.AccAddress {
	rejector, err := sdk.AccAddressFromBech32(m.Rejector)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{rejector}
}

func (m *MsgSuspendProject) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Updater)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid updater address (%s)", err)
	}

	if m.ProjectId == 0 {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "project_id cannot be 0")
	}

	return nil
}

func (m *MsgSuspendProject) GetSigners() []sdk.AccAddress {
	rejector, err := sdk.AccAddressFromBech32(m.Updater)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{rejector}
}

func (m *MsgIssueCredits) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Creator)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if m.ProjectId == 0 {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "invalid project id")
	}
	if m.SerialNumber == "" {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "invalid serial number")
	}
	if m.CreditAmount == 0 {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "invalid credit amount")
	}
	if len(m.MetadataUris) == 0 {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "invalid metadata uris")
	}
	return nil
}

func (m *MsgIssueCredits) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(m.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (m *MsgTransferCredits) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.From)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid sender address (%s)", err)
	}
	_, err = sdk.AccAddressFromBech32(m.To)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid recipient address (%s)", err)
	}
	if m.Denom == "" {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "invalid denom")
	}
	if m.Amount == 0 {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "invalid credit amount")
	}
	return nil
}

func (m *MsgTransferCredits) GetSigners() []sdk.AccAddress {
	from, err := sdk.AccAddressFromBech32(m.From)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{from}
}

func (m *MsgRetireCredits) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(m.Owner)
	if err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	if m.Denom == "" {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "invalid denom")
	}
	if m.Amount == 0 {
		return errors.Wrap(sdkerrors.ErrInvalidRequest, "invalid credit amount")
	}
	return nil
}

func (m *MsgRetireCredits) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(m.Owner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{owner}
}
