package types

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"gopkg.in/yaml.v2"
)

var _ paramtypes.ParamSet = (*Params)(nil)

var (
	KeyCreateissuerAllowlist     = []byte("CreateissuerAllowlist")
	DefaultCreateissuerAllowlist []string
)

// ParamKeyTable the param key table for launch module
func ParamKeyTable() paramtypes.KeyTable {
	return paramtypes.NewKeyTable().RegisterParamSet(&Params{})
}

// NewParams creates a new Params instance
func NewParams(
	createissuerAllowlist []string,
) Params {
	return Params{
		CreateissuerAllowlist: createissuerAllowlist,
	}
}

// DefaultParams returns a default set of parameters
func DefaultParams() Params {
	return NewParams(
		DefaultCreateissuerAllowlist,
	)
}

// ParamSetPairs get the params.ParamSet
func (p *Params) ParamSetPairs() paramtypes.ParamSetPairs {
	return paramtypes.ParamSetPairs{
		paramtypes.NewParamSetPair(KeyCreateissuerAllowlist, &p.CreateissuerAllowlist, validateCreateissuerAllowlist),
	}
}

// Validate validates the set of params
func (p Params) Validate() error {
	if err := validateCreateissuerAllowlist(p.CreateissuerAllowlist); err != nil {
		return err
	}

	return nil
}

// String implements the Stringer interface.
func (p Params) String() string {
	out, _ := yaml.Marshal(p)
	return string(out)
}

// validateCreateissuerAllowlist validates the CreateissuerAllowlist param
func validateCreateissuerAllowlist(v interface{}) error {
	createissuerAllowlist, ok := v.([]string)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", v)
	}

	for _, addr := range createissuerAllowlist {
		_, err := sdk.AccAddressFromBech32(addr)
		if err != nil {
			return fmt.Errorf("%s is not a valid address. Err: %w", addr, err)
		}
	}
	_ = createissuerAllowlist

	return nil
}
