package plasticcredit

import (
	"regexp"

	"cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"gopkg.in/yaml.v2"

	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/utils"
)

const defaultCreditClassCreationFeeAmt = 50 // 50 $mpwr

var DefaultCreditClassCreationFee = sdk.NewCoin(params.HumanCoinDenom, sdk.NewInt(defaultCreditClassCreationFeeAmt))

// NewParams creates a new Params instance
func NewParams(issuerCreator string, creditClassCreationFee sdk.Coin) Params {
	return Params{
		IssuerCreator:          issuerCreator,
		CreditClassCreationFee: creditClassCreationFee,
	}
}

// DefaultParams returns a default set of parameters
func DefaultParams() Params {
	return NewParams(
		"",
		DefaultCreditClassCreationFee,
	)
}

// Validate validates the set of params
func (p Params) Validate() error {
	if p.IssuerCreator != "" {
		_, err := sdk.AccAddressFromBech32(p.IssuerCreator)
		if err != nil {
			return errors.Wrapf(sdkerrors.ErrInvalidAddress, "params invalid issuer creator address (%s)", err)
		}
	}

	if err := p.CreditClassCreationFee.Validate(); err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidCoins, "invalid creditClassCreationFee: %s", err.Error())
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
		return errors.Wrap(utils.ErrInvalidValue, "issuer id is zero")
	}

	if !utils.IsBasicValidName(is.Name) {
		return errors.Wrapf(utils.ErrInvalidValue, "issuer name is invalid (%s)", is.Name)
	}

	if !utils.IsValidDescription(is.Description) {
		return errors.Wrap(utils.ErrInvalidValue, "description is invalid")
	}

	if is.Admin == "" {
		return errors.Wrap(utils.ErrInvalidValue, "issuer admin is empty")
	}

	if _, err := sdk.AccAddressFromBech32(is.Admin); err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid issuer admin address (%s)", err)
	}

	return nil
}

func (is Issuer) AddressHasAuthorization(addr sdk.AccAddress) bool {
	return is.Admin == addr.String()
}

func (a Applicant) Validate() error {
	if a.Id == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "applicant id is zero")
	}

	if !utils.IsBasicValidName(a.Name) {
		return errors.Wrapf(utils.ErrInvalidValue, "applicant name is invalid (%s)", a.Name)
	}

	if !utils.IsValidDescription(a.Description) {
		return errors.Wrap(utils.ErrInvalidValue, "description is invalid")
	}

	if a.Admin == "" {
		return errors.Wrap(utils.ErrInvalidValue, "applicant admin is empty")
	}

	if _, err := sdk.AccAddressFromBech32(a.Admin); err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid applicant admin address (%s)", err)
	}

	return nil
}

func (a Applicant) AddressHasAuthorization(addr sdk.AccAddress) bool {
	return a.Admin == addr.String()
}

var creditClassAbbreviationRegex = regexp.MustCompile(`^[A-Z0-9]{2,5}$`)

func (cc CreditClass) Validate() error {
	if !creditClassAbbreviationRegex.MatchString(cc.Abbreviation) {
		return errors.Wrapf(utils.ErrInvalidValue, "credit class abbreviation %q is invalid, must match %s", cc.Abbreviation, creditClassAbbreviationRegex.String())
	}

	if cc.IssuerId == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "credit class issuer_id is zero")
	}

	if !utils.IsBasicValidName(cc.Name) {
		return errors.Wrapf(utils.ErrInvalidValue, "credit class name is invalid (%s)", cc.Name)
	}

	return nil
}

func (proj Project) Validate() error {
	if proj.Id == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "project id is zero")
	}

	if proj.ApplicantId == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "project applicant_id is zero")
	}

	if proj.CreditClassAbbreviation == "" {
		return errors.Wrap(utils.ErrInvalidValue, "project credit_class_abbreviation is empty")
	}

	if !utils.IsBasicValidName(proj.Name) {
		return errors.Wrapf(utils.ErrInvalidValue, "project name is invalid (%s)", proj.Name)
	}

	if _, ok := ProjectStatus_name[int32(proj.Status)]; !ok {
		return errors.Wrapf(utils.ErrInvalidValue, "project status is invalid %d", proj.Status)
	}

	return nil
}

func (cc CreditCollection) Validate() error {
	if cc.Denom == "" {
		return errors.Wrap(utils.ErrInvalidValue, "credit collection denom is empty")
	}
	if cc.ProjectId == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "credit collection project_id is empty or zero")
	}
	if cc.TotalAmount.Active == 0 && cc.TotalAmount.Retired == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "credit collection cannot have a collection with 0 credits")
	}
	if len(cc.MetadataUris) == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "credit collection must have at least one metadata uri")
	}
	return nil
}

func (cb CreditBalance) Validate() error {
	if _, err := sdk.AccAddressFromBech32(cb.Owner); err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "credit balance invalid credit owner address (%s)", err)
	}
	if cb.Denom == "" {
		return errors.Wrap(utils.ErrInvalidValue, "credit balance denom is empty")
	}
	return nil
}
