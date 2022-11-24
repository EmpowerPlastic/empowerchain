package types

import (
	"cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (idc IDCounters) Validate() error {
	if idc.NextIssuerId == 0 {
		return errors.Wrap(ErrInvalidValue, "next_issuer_id is zero")
	}

	if idc.NextCreditClassId == 0 {
		return errors.Wrap(ErrInvalidValue, "next_credit_class_id is zero")
	}

	if idc.NextProjectId == 0 {
		return errors.Wrap(ErrInvalidValue, "next_project_id is zero")
	}

	if idc.NextCollectorId == 0 {
		return errors.Wrap(ErrInvalidValue, "next_collector_id is zero")
	}

	return nil
}

func (is Issuer) Validate() error {
	if is.Id == 0 {
		return errors.Wrap(ErrInvalidValue, "id is zero")
	}

	if is.Name == "" {
		return errors.Wrap(ErrInvalidValue, "name is empty")
	}

	if is.Admin == "" {
		return errors.Wrap(ErrInvalidValue, "admin is empty")
	}

	if _, err := sdk.AccAddressFromBech32(is.Admin); err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid admin address (%s)", err)
	}

	return nil
}
