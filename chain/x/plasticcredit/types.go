package plasticcredit

import (
	"regexp"

	"cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"gopkg.in/yaml.v2"

	"github.com/EmpowerPlastic/empowerchain/utils"
)

// NewParams creates a new Params instance
func NewParams(issuerCreator string) Params {
	return Params{
		IssuerCreator: issuerCreator,
	}
}

// DefaultParams returns a default set of parameters
func DefaultParams() Params {
	return NewParams("")
}

// Validate validates the set of params
func (p Params) Validate() error {
	if p.IssuerCreator != "" {
		_, err := sdk.AccAddressFromBech32(p.IssuerCreator)
		if err != nil {
			return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid issuer creator address (%s)", err)
		}
	}

	return nil
}

// String implements the Stringer interface.
func (p Params) String() string {
	out, _ := yaml.Marshal(p)
	return string(out)
}

func (idc IDCounters) Validate() error {
	if idc.NextIssuerId == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "next_issuer_id is zero")
	}

	if idc.NextProjectId == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "next_project_id is zero")
	}

	if idc.NextApplicantId == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "next_collector_id is zero")
	}

	return nil
}

func (is Issuer) Validate() error {
	if is.Id == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "id is zero")
	}

	if !utils.IsBasicValidName(is.Name) {
		return errors.Wrap(utils.ErrInvalidValue, "name is invalid")
	}

	if is.Admin == "" {
		return errors.Wrap(utils.ErrInvalidValue, "admin is empty")
	}

	if _, err := sdk.AccAddressFromBech32(is.Admin); err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid admin address (%s)", err)
	}

	return nil
}

func (is Issuer) AddressHasAuthorization(addr sdk.AccAddress) bool {
	return is.Admin == addr.String()
}

func (a Applicant) Validate() error {
	if a.Id == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "id is zero")
	}

	if !utils.IsBasicValidName(a.Name) {
		return errors.Wrap(utils.ErrInvalidValue, "name is invalid")
	}

	if a.Admin == "" {
		return errors.Wrap(utils.ErrInvalidValue, "admin is empty")
	}

	if _, err := sdk.AccAddressFromBech32(a.Admin); err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid admin address (%s)", err)
	}

	return nil
}

func (a Applicant) AddressHasAuthorization(addr sdk.AccAddress) bool {
	return a.Admin == addr.String()
}

var creditClassAbbreviationRegex = regexp.MustCompile(`^[A-Z0-9]{2,5}$`)

func (cc CreditClass) Validate() error {
	if !creditClassAbbreviationRegex.MatchString(cc.Abbreviation) {
		return errors.Wrapf(utils.ErrInvalidValue, "abbreviation is invalid, must match %s", creditClassAbbreviationRegex.String())
	}

	if cc.IssuerId == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "issuer_id is zero")
	}

	if !utils.IsBasicValidName(cc.Name) {
		return errors.Wrap(utils.ErrInvalidValue, "name is invalid")
	}

	return nil
}

func (proj Project) Validate() error {
	if proj.Id == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "project_id is zero")
	}

	if proj.ApplicantId == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "applicant_id is zero")
	}

	if proj.CreditClassAbbreviation == "" {
		return errors.Wrap(utils.ErrInvalidValue, "credit_class_abbreviation is empty")
	}

	if !utils.IsBasicValidName(proj.Name) {
		return errors.Wrap(utils.ErrInvalidValue, "name is invalid")
	}

	if _, ok := ProjectStatus_name[int32(proj.Status)]; !ok {
		return errors.Wrapf(utils.ErrInvalidValue, "status is invalid %d", proj.Status)
	}

	return nil
}

func (cc CreditCollection) Validate() error {
	if cc.Denom == "" {
		return errors.Wrap(utils.ErrInvalidValue, "denom is empty")
	}
	if cc.ProjectId == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "project id is empty or zero")
	}
	if cc.TotalAmount.Active == 0 && cc.TotalAmount.Retired == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "cannot have a collection with 0 credits")
	}
	return nil
}

func (cb CreditBalance) Validate() error {
	if _, err := sdk.AccAddressFromBech32(cb.Owner); err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid credit owner address (%s)", err)
	}
	if cb.Denom == "" {
		return errors.Wrap(utils.ErrInvalidValue, "denom is empty")
	}
	return nil
}
