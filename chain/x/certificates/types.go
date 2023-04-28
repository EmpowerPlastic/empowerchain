package certificates

import (
	"cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"gopkg.in/yaml.v2"

	"github.com/EmpowerPlastic/empowerchain/utils"
)

// NewParams creates a new Params instance
func NewParams() Params {
	return Params{}
}

// DefaultParams returns a default set of parameters
func DefaultParams() Params {
	return NewParams()
}

// String implements the Stringer interface.
func (p Params) String() string {
	out, _ := yaml.Marshal(p)
	return string(out)
}

func (idc IDCounters) Validate() error {
	if idc.NextCertificateId == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "next_certificate_id is zero")
	}

	return nil
}

func (cert Certificate) Validate() error {
	if cert.Id == 0 {
		return errors.Wrap(utils.ErrInvalidValue, "certificate id is zero")
	}

	if _, ok := CertificateType_name[int32(cert.Type)]; !ok {
		return errors.Wrapf(utils.ErrInvalidValue, "certificate type is invalid %d", cert.Type)
	}

	if cert.Owner == "" {
		return errors.Wrap(utils.ErrInvalidValue, "certificate owner is empty")
	}

	if _, err := sdk.AccAddressFromBech32(cert.Owner); err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid certificate admin address (%s)", err)
	}

	if cert.Issuer == "" {
		return errors.Wrap(utils.ErrInvalidValue, "certificate issuer is empty")
	}

	if _, err := sdk.AccAddressFromBech32(cert.Issuer); err != nil {
		return errors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid certificate issuer address (%s)", err)
	}

	return nil
}
