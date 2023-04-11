package plasticcredit

import (
	"math/rand"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/utils"
)

func TestParamsValidation(t *testing.T) {
	testCases := map[string]struct {
		params Params
		err    error
	}{
		"happy path": {
			params: Params{
				IssuerCreator:         sample.AccAddress(),
				CreditTypeCreationFee: sdk.NewCoin(params.HumanCoinDenom, sdk.NewInt(rand.Int63())),
			},
		},
		"invalid issuer creator": {
			params: Params{
				IssuerCreator:         "invalid",
				CreditTypeCreationFee: sdk.NewCoin(params.HumanCoinDenom, sdk.NewInt(rand.Int63())),
			},
			err: sdkerrors.ErrInvalidAddress,
		},
		"invalid credit type creation fee": {
			params: Params{
				IssuerCreator:         sample.AccAddress(),
				CreditTypeCreationFee: sdk.Coin{},
			},
			err: sdkerrors.ErrInvalidCoins,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.params.Validate()

			require.ErrorIs(t, err, tc.err)
		})
	}
}

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
		"happy path name test": {
			idc: Issuer{
				Id:          42,
				Name:        "This is a longer name with spaces and special characters:%$#",
				Description: "Something something",
				Admin:       sample.AccAddress(),
			},
			err: nil,
		},
		"happy path description test": {
			idc: Issuer{
				Id:          42,
				Name:        "Empower",
				Description: "Something something with special characters:%$#",
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
		"too long name": {
			idc: Issuer{
				Id:          1,
				Name:        "This name is 65 characters long, which is above the limit we set!",
				Description: "Something something",
				Admin:       sample.AccAddress(),
			},
			err: utils.ErrInvalidValue,
		},
		"name starts with space": {
			idc: Issuer{
				Id:          1,
				Name:        " Empower",
				Description: "Something something",
				Admin:       sample.AccAddress(),
			},
			err: utils.ErrInvalidValue,
		},
		"name ends with space": {
			idc: Issuer{
				Id:          1,
				Name:        "Empower ",
				Description: "Something something",
				Admin:       sample.AccAddress(),
			},
			err: utils.ErrInvalidValue,
		},
		"description too long": {
			idc: Issuer{
				Id:          1,
				Name:        "Empower ",
				Description: sample.String(257),
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
		"happy path name test": {
			applicant: Applicant{
				Id:          42,
				Name:        "This is a longer name with spaces and special characters:%$#",
				Description: "Something something",
				Admin:       sample.AccAddress(),
			},
			err: nil,
		},
		"happy path description test": {
			applicant: Applicant{
				Id:          42,
				Name:        "Empower",
				Description: "Something something with special characters:%$#",
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
		"too long name": {
			applicant: Applicant{
				Id:          1,
				Name:        "This name is 65 characters long, which is above the limit we set!",
				Description: "Something something",
				Admin:       sample.AccAddress(),
			},
			err: utils.ErrInvalidValue,
		},
		"name starts with space": {
			applicant: Applicant{
				Id:          1,
				Name:        " EmpowerChain",
				Description: "Something something",
				Admin:       sample.AccAddress(),
			},
			err: utils.ErrInvalidValue,
		},
		"name ends with space": {
			applicant: Applicant{
				Id:          1,
				Name:        "EmpowerChain ",
				Description: "Something something",
				Admin:       sample.AccAddress(),
			},
			err: utils.ErrInvalidValue,
		},
		"description too long": {
			applicant: Applicant{
				Id:          1,
				Name:        "Empower ",
				Description: sample.String(257),
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

func TestCreditTypeValidation(t *testing.T) {
	testCases := map[string]struct {
		creditType CreditType
		err        error
	}{
		"happy path": {
			creditType: CreditType{
				Abbreviation: "PTEST",
				IssuerId:     1,
				Name:         "Empower Plastic Credits",
			},
			err: nil,
		},
		"happy path name test": {
			creditType: CreditType{
				Abbreviation: "PTEST",
				IssuerId:     1,
				Name:         "This is a longer name with spaces and special characters:%$#",
			},
			err: nil,
		},
		"happy path 2": {
			creditType: CreditType{
				Abbreviation: "ABC69",
				IssuerId:     42,
				Name:         "thisIsMyNameYo",
			},
			err: nil,
		},
		"empty abbreviation": {
			creditType: CreditType{
				Abbreviation: "",
				IssuerId:     1,
				Name:         "Empower Plastic Credits",
			},
			err: utils.ErrInvalidValue,
		},
		"too short abbreviation": {
			creditType: CreditType{
				Abbreviation: "A",
				IssuerId:     1,
				Name:         "Empower Plastic Credits",
			},
			err: utils.ErrInvalidValue,
		},
		"too long abbreviation": {
			creditType: CreditType{
				Abbreviation: "PTESTTT",
				IssuerId:     1,
				Name:         "Empower Plastic Credits",
			},
			err: utils.ErrInvalidValue,
		},
		"lower-case abbreviation": {
			creditType: CreditType{
				Abbreviation: "AbC",
				IssuerId:     1,
				Name:         "Empower Plastic Credits",
			},
			err: utils.ErrInvalidValue,
		},
		"special char abbreviation": {
			creditType: CreditType{
				Abbreviation: "ABC_",
				IssuerId:     1,
				Name:         "Empower Plastic Credits",
			},
			err: utils.ErrInvalidValue,
		},
		"invalid issuer id": {
			creditType: CreditType{
				Abbreviation: "PTEST",
				IssuerId:     0,
				Name:         "Empower Plastic Credits",
			},
			err: utils.ErrInvalidValue,
		},
		"empty name": {
			creditType: CreditType{
				Abbreviation: "PTEST",
				IssuerId:     1,
				Name:         "",
			},
			err: utils.ErrInvalidValue,
		},
		"too long name": {
			creditType: CreditType{
				Abbreviation: "PTEST",
				IssuerId:     1,
				Name:         "This name is 65 characters long, which is above the limit we set!",
			},
			err: utils.ErrInvalidValue,
		},
		"name starts with space": {
			creditType: CreditType{
				Abbreviation: "PTEST",
				IssuerId:     1,
				Name:         " EmpowerChain",
			},
			err: utils.ErrInvalidValue,
		},
		"name ends with space": {
			creditType: CreditType{
				Abbreviation: "PTEST",
				IssuerId:     1,
				Name:         "EmpowerChain ",
			},
			err: utils.ErrInvalidValue,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.creditType.Validate()

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
				Id:                     1,
				ApplicantId:            42,
				CreditTypeAbbreviation: "PTEST",
				Name:                   "My Project",
				Status:                 ProjectStatus_NEW,
			},
			err: nil,
		},
		"happy path name test": {
			project: Project{
				Id:                     1,
				ApplicantId:            42,
				CreditTypeAbbreviation: "PTEST",
				Name:                   "This is a longer name with spaces and special characters:%$#",
				Status:                 ProjectStatus_NEW,
			},
			err: nil,
		},
		"invalid project id": {
			project: Project{
				Id:                     0,
				ApplicantId:            42,
				CreditTypeAbbreviation: "PTEST",
				Name:                   "My Project",
				Status:                 ProjectStatus_NEW,
			},
			err: utils.ErrInvalidValue,
		},
		"invalid applicant id": {
			project: Project{
				Id:                     1337,
				ApplicantId:            0,
				CreditTypeAbbreviation: "PTEST",
				Name:                   "My Project",
				Status:                 ProjectStatus_NEW,
			},
			err: utils.ErrInvalidValue,
		},
		"invalid abbreviation": {
			project: Project{
				Id:                     1,
				ApplicantId:            42,
				CreditTypeAbbreviation: "",
				Name:                   "My Project",
				Status:                 ProjectStatus_NEW,
			},
			err: utils.ErrInvalidValue,
		},
		"empty name": {
			project: Project{
				Id:                     1,
				ApplicantId:            42,
				CreditTypeAbbreviation: "PTEST",
				Name:                   "",
				Status:                 ProjectStatus_NEW,
			},
			err: utils.ErrInvalidValue,
		},
		"too long name": {
			project: Project{
				Id:                     1,
				ApplicantId:            32,
				CreditTypeAbbreviation: "PTEST",
				Name:                   "This name is 65 characters long, which is above the limit we set!",
				Status:                 ProjectStatus_NEW,
			},
			err: utils.ErrInvalidValue,
		},
		"name starts with space": {
			project: Project{
				Id:                     1,
				ApplicantId:            32,
				CreditTypeAbbreviation: "PTEST",
				Name:                   " EmpowerChain",
				Status:                 ProjectStatus_NEW,
			},
			err: utils.ErrInvalidValue,
		},
		"name ends with space": {
			project: Project{
				Id:                     1,
				ApplicantId:            32,
				CreditTypeAbbreviation: "PTEST",
				Name:                   "EmpowerChain ",
				Status:                 ProjectStatus_NEW,
			},
			err: utils.ErrInvalidValue,
		},
		"invalid status": {
			project: Project{
				Id:                     1,
				ApplicantId:            42,
				CreditTypeAbbreviation: "PTEST",
				Name:                   "My Project",
				Status:                 4,
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
				Denom:     "ETEST/123",
				ProjectId: 1,
				TotalAmount: CreditAmount{
					Active:  100,
					Retired: 50,
				},
				MetadataUris: []string{"ipfs://CID"},
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
				MetadataUris: []string{"ipfs://CID"},
			},
			err: utils.ErrInvalidValue,
		},
		"invalid project id": {
			collection: CreditCollection{
				Denom:     "ETEST/123",
				ProjectId: 0,
				TotalAmount: CreditAmount{
					Active:  100,
					Retired: 50,
				},
				MetadataUris: []string{"ipfs://CID"},
			},
			err: utils.ErrInvalidValue,
		},
		"invalid total amount": {
			collection: CreditCollection{
				Denom:     "ETEST/123",
				ProjectId: 1,
				TotalAmount: CreditAmount{
					Active:  0,
					Retired: 0,
				},
				MetadataUris: []string{"ipfs://CID"},
			},
			err: utils.ErrInvalidValue,
		},
		"invalid credit metadata uri": {
			collection: CreditCollection{
				Denom:     "ETEST/123",
				ProjectId: 0,
				TotalAmount: CreditAmount{
					Active:  100,
					Retired: 50,
				},
				MetadataUris: []string{},
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
				Denom: "ETEST/123",
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
				Denom: "ETEST/123",
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
