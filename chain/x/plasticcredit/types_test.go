package plasticcredit

import (
	"testing"

	errors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/empowerchain/empowerchain/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestIDCountersValidation(t *testing.T) {
	testCases := map[string]struct {
		idc IDCounters
		err error
	}{
		"happy path": {
			idc: IDCounters{
				NextIssuerId:      1,
				NextCollectorId:   235,
				NextProjectId:     1337,
				NextCreditClassId: 42,
			},
			err: nil,
		},
		"next issuer id not set": {
			idc: IDCounters{
				NextCollectorId:   235,
				NextProjectId:     1337,
				NextCreditClassId: 42,
			},
			err: ErrInvalidValue,
		},
		"next collector id not set": {
			idc: IDCounters{
				NextIssuerId:      1,
				NextProjectId:     1337,
				NextCreditClassId: 42,
			},
			err: ErrInvalidValue,
		},
		"next project id not set": {
			idc: IDCounters{
				NextIssuerId:      1,
				NextCollectorId:   235,
				NextCreditClassId: 42,
			},
			err: ErrInvalidValue,
		},
		"next credit class id not set": {
			idc: IDCounters{
				NextIssuerId:    1,
				NextCollectorId: 235,
				NextProjectId:   1337,
			},
			err: ErrInvalidValue,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.idc.Validate()

			require.ErrorIs(t, err, tc.err)
		})
	}
}

func TestIssuerValidation(t *testing.T) {
	testCases := map[string]struct {
		idc Issuer
		err error
	}{
		"happy path": {
			idc: Issuer{
				Id:          42,
				Name:        "Empower",
				Description: "Something something",
				Admin:       sample.AccAddress(),
			},
			err: nil,
		},
		"empty description is OK": {
			idc: Issuer{
				Id:          1337,
				Name:        "MyOrg",
				Description: "",
				Admin:       sample.AccAddress(),
			},
			err: nil,
		},
		"invalid id": {
			idc: Issuer{
				Id:          0,
				Name:        "Empower",
				Description: "Something something",
				Admin:       sample.AccAddress(),
			},
			err: ErrInvalidValue,
		},
		"empty name": {
			idc: Issuer{
				Id:          1,
				Name:        "",
				Description: "Something something",
				Admin:       sample.AccAddress(),
			},
			err: ErrInvalidValue,
		},
		"empty admin": {
			idc: Issuer{
				Id:          37,
				Name:        "EmpowerChain",
				Description: "Something something",
				Admin:       "",
			},
			err: ErrInvalidValue,
		},
		"invalid admin address": {
			idc: Issuer{
				Id:          100,
				Name:        "Hertogz",
				Description: "Something something",
				Admin:       "invalid",
			},
			err: errors.ErrInvalidAddress,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.idc.Validate()

			require.ErrorIs(t, err, tc.err)
		})
	}
}
