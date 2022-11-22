package types

import (
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"gopkg.in/yaml.v2"
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
			return fmt.Errorf("%s is not a valid address. Err: %w", p.IssuerCreator, err)
		}
	}

	return nil
}

// String implements the Stringer interface.
func (p Params) String() string {
	out, _ := yaml.Marshal(p)
	return string(out)
}
