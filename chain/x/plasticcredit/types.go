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

const defaultCreditTypeCreationFeeAmt = 50 // 50 $mpwr

var DefaultCreditTypeCreationFee = sdk.NewCoin(params.HumanCoinDenom, sdk.NewInt(defaultCreditTypeCreationFeeAmt))

// NewParams creates a new Params instance
func NewParams(issuerCreator string, creditTypeCreationFee sdk.Coin) Params {
	return Params{
		IssuerCreator:         issuerCreator,
		CreditTypeCreationFee: creditTypeCreationFee,
	}
}

// DefaultParams returns a default set of parameters
func DefaultParams() Params {
	return NewParams(
		"",
		DefaultCreditTypeCreationFee,
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

	if err := p.CreditTypeCreationFee.Validate(); err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidCoins, "invalid creditTypeCreationFee: %s", err.Error())
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

	err := utils.ValidBasicName(is.Name)
	if err != nil {
		return err
	}

	err = utils.ValidDescription(is.Description)
	if err != nil {
		return err
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

	err := utils.ValidBasicName(a.Name)
	if err != nil {
		return err
	}

	err = utils.ValidDescription(a.Description)
	if err != nil {
		return err
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

var creditTypeAbbreviationRegex = regexp.MustCompile(`^[A-Z0-9]{2,5}$`)

func (cc CreditType) Validate() error {
	if !creditTypeAbbreviationRegex.MatchString(cc.Abbreviation) {
		return errors.Wrapf(utils.ErrInvalidValue, "credit type abbreviation %q is invalid, must match %s", cc.Abbreviation, creditTypeAbbreviationRegex.String())
	}

	if cc.IssuerId == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "credit type issuer_id is zero")
	}

	err := utils.ValidBasicName(cc.Name)
	if err != nil {
		return err
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

	if proj.CreditTypeAbbreviation == "" {
		return errors.Wrap(utils.ErrInvalidValue, "project credit_type_abbreviation is empty")
	}

	err := utils.ValidBasicName(proj.Name)
	if err != nil {
		return err
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
