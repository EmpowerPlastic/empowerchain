package plasticcredit

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
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
				NextApplicantId:   235,
				NextProjectId:     1337,
				NextCreditClassId: 42,
			},
			err: nil,
		},
		"next issuer id not set": {
			idc: IDCounters{
				NextApplicantId:   235,
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
				NextApplicantId:   235,
				NextCreditClassId: 42,
			},
			err: ErrInvalidValue,
		},
		"next credit class id not set": {
			idc: IDCounters{
				NextIssuerId:    1,
				NextApplicantId: 235,
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
			err: sdkerrors.ErrInvalidAddress,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.idc.Validate()

			require.ErrorIs(t, err, tc.err)
		})
	}
}

func TestApplicantValidation(t *testing.T) {
	testCases := map[string]struct {
		applicant Applicant
		err       error
	}{
		"happy path": {
			applicant: Applicant{
				Id:          42,
				Name:        "Empower",
				Description: "Something something",
				Admin:       sample.AccAddress(),
			},
			err: nil,
		},
		"empty description is OK": {
			applicant: Applicant{
				Id:          1337,
				Name:        "MyOrg",
				Description: "",
				Admin:       sample.AccAddress(),
			},
			err: nil,
		},
		"invalid id": {
			applicant: Applicant{
				Id:          0,
				Name:        "Empower",
				Description: "Something something",
				Admin:       sample.AccAddress(),
			},
			err: ErrInvalidValue,
		},
		"empty name": {
			applicant: Applicant{
				Id:          1,
				Name:        "",
				Description: "Something something",
				Admin:       sample.AccAddress(),
			},
			err: ErrInvalidValue,
		},
		"empty admin": {
			applicant: Applicant{
				Id:          37,
				Name:        "EmpowerChain",
				Description: "Something something",
				Admin:       "",
			},
			err: ErrInvalidValue,
		},
		"invalid admin address": {
			applicant: Applicant{
				Id:          100,
				Name:        "Hertogz",
				Description: "Something something",
				Admin:       "invalid",
			},
			err: sdkerrors.ErrInvalidAddress,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.applicant.Validate()

			require.ErrorIs(t, err, tc.err)
		})
	}
}

func TestCreditCollectionValidation(t *testing.T) {
	testCases := map[string]struct {
		collection CreditCollection
		err        error
	}{
		"happy path": {
			collection: CreditCollection{
				Denom:     "EMP/123",
				ProjectId: 1,
				TotalAmount: &CreditAmount{
					Active:  100,
					Retired: 50,
				},
				CreditData: []*ProvenData{
					{
						Uri:  "http://empower.eco",
						Hash: "dc0e5b6690a55f0f1c41ad96f068049e25d9e85d53c0587284b7f1a1f9a51545",
					},
				},
			},
			err: nil,
		},
		"invalid denom": {
			collection: CreditCollection{
				Denom:     "",
				ProjectId: 1,
				TotalAmount: &CreditAmount{
					Active:  100,
					Retired: 50,
				},
				CreditData: []*ProvenData{
					{
						Uri:  "http://empower.eco",
						Hash: "dc0e5b6690a55f0f1c41ad96f068049e25d9e85d53c0587284b7f1a1f9a51545",
					},
				},
			},
			err: ErrInvalidValue,
		},
		"invalid project id": {
			collection: CreditCollection{
				Denom:     "EMP/123",
				ProjectId: 0,
				TotalAmount: &CreditAmount{
					Active:  100,
					Retired: 50,
				},
				CreditData: []*ProvenData{
					{
						Uri:  "http://empower.eco",
						Hash: "dc0e5b6690a55f0f1c41ad96f068049e25d9e85d53c0587284b7f1a1f9a51545",
					},
				},
			},
			err: ErrInvalidValue,
		},
		"invalid total amount": {
			collection: CreditCollection{
				Denom:     "EMP/123",
				ProjectId: 1,
				TotalAmount: &CreditAmount{
					Active:  0,
					Retired: 0,
				},
				CreditData: []*ProvenData{
					{
						Uri:  "http://empower.eco",
						Hash: "dc0e5b6690a55f0f1c41ad96f068049e25d9e85d53c0587284b7f1a1f9a51545",
					},
				},
			},
			err: ErrInvalidValue,
		},
		"invalid credit data uri": {
			collection: CreditCollection{
				Denom:     "EMP/123",
				ProjectId: 0,
				TotalAmount: &CreditAmount{
					Active:  100,
					Retired: 50,
				},
				CreditData: []*ProvenData{
					{
						Uri:  "",
						Hash: "dc0e5b6690a55f0f1c41ad96f068049e25d9e85d53c0587284b7f1a1f9a51545",
					},
				},
			},
			err: ErrInvalidValue,
		},
		"invalid credit data hash": {
			collection: CreditCollection{
				Denom:     "EMP/123",
				ProjectId: 0,
				TotalAmount: &CreditAmount{
					Active:  100,
					Retired: 50,
				},
				CreditData: []*ProvenData{
					{
						Uri:  "http://empower.eco",
						Hash: "a b",
					},
				},
			},
			err: ErrInvalidValue,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.collection.Validate()

			require.ErrorIs(t, err, tc.err)
		})
	}
}

func TestCreditBalanceValidation(t *testing.T) {
	testCases := map[string]struct {
		balance CreditBalance
		err     error
	}{
		"happy path": {
			balance: CreditBalance{
				Owner: sample.AccAddress(),
				Denom: "EMP/123",
				Balance: &CreditAmount{
					Active:  0,
					Retired: 0,
				},
			},
			err: nil,
		},
		"invalid owner": {
			balance: CreditBalance{
				Owner: "Empower",
				Denom: "EMP/123",
				Balance: &CreditAmount{
					Active:  0,
					Retired: 0,
				},
			},
			err: sdkerrors.ErrInvalidAddress,
		},
		"invalid denom": {
			balance: CreditBalance{
				Owner: sample.AccAddress(),
				Denom: "",
				Balance: &CreditAmount{
					Active:  0,
					Retired: 0,
				},
			},
			err: ErrInvalidValue,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.balance.Validate()

			require.ErrorIs(t, err, tc.err)
		})
	}
}
