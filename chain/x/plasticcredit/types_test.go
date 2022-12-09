package plasticcredit

import (
	"testing"

	"github.com/EmpowerPlastic/empowerchain/utils"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestIDCountersValidation(t *testing.T) {
	testCases := map[string]struct {
		idc IDCounters
		err error
	}{
		"happy path": {
			idc: IDCounters{
				NextIssuerId:    1,
				NextApplicantId: 235,
				NextProjectId:   1337,
			},
			err: nil,
		},
		"next issuer id not set": {
			idc: IDCounters{
				NextApplicantId: 235,
				NextProjectId:   1337,
			},
			err: utils.ErrInvalidValue,
		},
		"next collector id not set": {
			idc: IDCounters{
				NextIssuerId:  1,
				NextProjectId: 1337,
			},
			err: utils.ErrInvalidValue,
		},
		"next project id not set": {
			idc: IDCounters{
				NextIssuerId:    1,
				NextApplicantId: 235,
			},
			err: utils.ErrInvalidValue,
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
			err: utils.ErrInvalidValue,
		},
		"empty name": {
			idc: Issuer{
				Id:          1,
				Name:        "",
				Description: "Something something",
				Admin:       sample.AccAddress(),
			},
			err: utils.ErrInvalidValue,
		},
		"empty admin": {
			idc: Issuer{
				Id:          37,
				Name:        "EmpowerChain",
				Description: "Something something",
				Admin:       "",
			},
			err: utils.ErrInvalidValue,
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

func TestIssuer_AddressHasAuthorization(t *testing.T) {
	issuer := Issuer{
		Id:          1,
		Name:        "Empower",
		Description: "",
		Admin:       sample.AccAddress(),
	}
	adminAddr, _ := sdk.AccAddressFromBech32(issuer.Admin)
	someRandomAddr, _ := sdk.AccAddressFromBech32(sample.AccAddress())

	testCases := map[string]struct {
		addr             sdk.AccAddress
		hasAuthorization bool
	}{
		"admin": {
			addr:             adminAddr,
			hasAuthorization: true,
		},
		"nil": {
			addr:             nil,
			hasAuthorization: false,
		},
		"some random address": {
			addr:             someRandomAddr,
			hasAuthorization: false,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			hasAuthorization := issuer.AddressHasAuthorization(tc.addr)
			require.Equal(t, tc.hasAuthorization, hasAuthorization)
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
			err: utils.ErrInvalidValue,
		},
		"empty name": {
			applicant: Applicant{
				Id:          1,
				Name:        "",
				Description: "Something something",
				Admin:       sample.AccAddress(),
			},
			err: utils.ErrInvalidValue,
		},
		"empty admin": {
			applicant: Applicant{
				Id:          37,
				Name:        "EmpowerChain",
				Description: "Something something",
				Admin:       "",
			},
			err: utils.ErrInvalidValue,
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

func TestApplicant_AddressHasAuthorization(t *testing.T) {
	applicant := Applicant{
		Id:          1,
		Name:        "Empower",
		Description: "",
		Admin:       sample.AccAddress(),
	}
	adminAddr, _ := sdk.AccAddressFromBech32(applicant.Admin)
	someRandomAddr, _ := sdk.AccAddressFromBech32(sample.AccAddress())

	testCases := map[string]struct {
		addr             sdk.AccAddress
		hasAuthorization bool
	}{
		"admin": {
			addr:             adminAddr,
			hasAuthorization: true,
		},
		"nil": {
			addr:             nil,
			hasAuthorization: false,
		},
		"some random address": {
			addr:             someRandomAddr,
			hasAuthorization: false,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			hasAuthorization := applicant.AddressHasAuthorization(tc.addr)
			require.Equal(t, tc.hasAuthorization, hasAuthorization)
		})
	}
}

func TestCreditClassValidation(t *testing.T) {
	testCases := map[string]struct {
		creditClass CreditClass
		err         error
	}{
		"happy path": {
			creditClass: CreditClass{
				Abbreviation: "PCRD",
				IssuerId:     1,
				Name:         "Empower Plastic Credits",
			},
			err: nil,
		},
		"invalid abbreviation": {
			creditClass: CreditClass{
				Abbreviation: "",
				IssuerId:     1,
				Name:         "Empower Plastic Credits",
			},
			err: utils.ErrInvalidValue,
		},
		"invalid issuer id": {
			creditClass: CreditClass{
				Abbreviation: "PCRD",
				IssuerId:     0,
				Name:         "Empower Plastic Credits",
			},
			err: utils.ErrInvalidValue,
		},
		"empty name": {
			creditClass: CreditClass{
				Abbreviation: "PCRD",
				IssuerId:     1,
				Name:         "",
			},
			err: utils.ErrInvalidValue,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.creditClass.Validate()

			require.ErrorIs(t, err, tc.err)
		})
	}
}

func TestProjectValidation(t *testing.T) {
	testCases := map[string]struct {
		project Project
		err     error
	}{
		"happy path": {
			project: Project{
				Id:                      1,
				ApplicantId:             42,
				CreditClassAbbreviation: "PCRD",
				Name:                    "My Project",
			},
			err: nil,
		},
		"invalid project id": {
			project: Project{
				Id:                      0,
				ApplicantId:             42,
				CreditClassAbbreviation: "PCRD",
				Name:                    "My Project",
			},
			err: utils.ErrInvalidValue,
		},
		"invalid applicant id": {
			project: Project{
				Id:                      1337,
				ApplicantId:             0,
				CreditClassAbbreviation: "PCRD",
				Name:                    "My Project",
			},
			err: utils.ErrInvalidValue,
		},
		"invalid abbreviation": {
			project: Project{
				Id:                      1,
				ApplicantId:             42,
				CreditClassAbbreviation: "",
				Name:                    "My Project",
			},
			err: utils.ErrInvalidValue,
		},
		"empty name": {
			project: Project{
				Id:                      1,
				ApplicantId:             42,
				CreditClassAbbreviation: "PCRD",
				Name:                    "",
			},
			err: utils.ErrInvalidValue,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.project.Validate()

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
				TotalAmount: CreditAmount{
					Active:  100,
					Retired: 50,
				},
			},
			err: nil,
		},
		"invalid denom": {
			collection: CreditCollection{
				Denom:     "",
				ProjectId: 1,
				TotalAmount: CreditAmount{
					Active:  100,
					Retired: 50,
				},
			},
			err: utils.ErrInvalidValue,
		},
		"invalid project id": {
			collection: CreditCollection{
				Denom:     "EMP/123",
				ProjectId: 0,
				TotalAmount: CreditAmount{
					Active:  100,
					Retired: 50,
				},
			},
			err: utils.ErrInvalidValue,
		},
		"invalid total amount": {
			collection: CreditCollection{
				Denom:     "EMP/123",
				ProjectId: 1,
				TotalAmount: CreditAmount{
					Active:  0,
					Retired: 0,
				},
			},
			err: utils.ErrInvalidValue,
		},
		"invalid credit data uri": {
			collection: CreditCollection{
				Denom:     "EMP/123",
				ProjectId: 0,
				TotalAmount: CreditAmount{
					Active:  100,
					Retired: 50,
				},
			},
			err: utils.ErrInvalidValue,
		},
		"invalid credit data hash": {
			collection: CreditCollection{
				Denom:     "EMP/123",
				ProjectId: 0,
				TotalAmount: CreditAmount{
					Active:  100,
					Retired: 50,
				},
			},
			err: utils.ErrInvalidValue,
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
				Balance: CreditAmount{
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
				Balance: CreditAmount{
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
				Balance: CreditAmount{
					Active:  0,
					Retired: 0,
				},
			},
			err: utils.ErrInvalidValue,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.balance.Validate()

			require.ErrorIs(t, err, tc.err)
		})
	}
}
