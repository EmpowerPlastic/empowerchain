package plasticcredit_test

import (
	"math/rand"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/utils"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
)

func TestGenesisState_Validate(t *testing.T) {
	duplicateAddress := sample.AccAddress()

	testCases := map[string]struct {
		genState plasticcredit.GenesisState
		err      error
	}{
		"default is valid": {
			genState: plasticcredit.DefaultGenesis(),
			err:      nil,
		},
		"kitchen sink is valid": {
			genState: plasticcredit.GenesisState{
				Params: plasticcredit.Params{
					IssuerCreator:          sample.AccAddress(),
					CreditClassCreationFee: sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(rand.Int63())),
				},
				IdCounters: plasticcredit.IDCounters{
					NextIssuerId:    3,
					NextApplicantId: 5,
					NextProjectId:   6,
				},
				Issuers: []plasticcredit.Issuer{
					{
						Id:          1,
						Name:        "Empower",
						Description: "Empowers own plastic credits",
						Admin:       sample.AccAddress(),
					},
					{
						Id:          2,
						Name:        "Someone else",
						Description: "Someone else is cool too",
						Admin:       sample.AccAddress(),
					},
				},
				Applicants: []plasticcredit.Applicant{
					{
						Id:          1,
						Name:        "My Applicant 1",
						Description: "Has a description",
						Admin:       sample.AccAddress(),
					},
					{
						Id:          2,
						Name:        "My Applicant 2",
						Description: "",
						Admin:       sample.AccAddress(),
					},
					{
						Id:          3,
						Name:        "My Applicant 3",
						Description: "Yet Another Applicant",
						Admin:       sample.AccAddress(),
					},
					{
						Id:          4,
						Name:        "My Applicant 4",
						Description: "",
						Admin:       sample.AccAddress(),
					},
				},
				CreditClasses: []plasticcredit.CreditClass{
					{
						Abbreviation: "PCRD",
						IssuerId:     1,
						Name:         "Empower Plastic Credits",
					},
					{
						Abbreviation: "RCRD",
						IssuerId:     1,
						Name:         "Empower Recycling Credits",
					},
					{
						Abbreviation: "WEC",
						IssuerId:     2,
						Name:         "Whatever Credits",
					},
				},
				Projects: []plasticcredit.Project{
					{
						Id:                      1,
						ApplicantId:             1,
						CreditClassAbbreviation: "PCRD",
						Name:                    "My project 1",
					},
					{
						Id:                      2,
						ApplicantId:             1,
						CreditClassAbbreviation: "WEC",
						Name:                    "My project 2",
					},
					{
						Id:                      3,
						ApplicantId:             2,
						CreditClassAbbreviation: "PCRD",
						Name:                    "My project 3",
					},
					{
						Id:                      4,
						ApplicantId:             2,
						CreditClassAbbreviation: "RCRD",
						Name:                    "My project 4",
					},
					{
						Id:                      5,
						ApplicantId:             3,
						CreditClassAbbreviation: "WEC",
						Name:                    "My project 5",
					},
				},
				CreditCollections: []plasticcredit.CreditCollection{
					{
						Denom:     "PCRD/0001",
						ProjectId: 1,
						TotalAmount: plasticcredit.CreditAmount{
							Active:  50,
							Retired: 50,
						},
					},
					{
						Denom:     "PCRD/0002",
						ProjectId: 1,
						TotalAmount: plasticcredit.CreditAmount{
							Active:  100,
							Retired: 0,
						},
					},
					{
						Denom:     "WEC/0001",
						ProjectId: 2,
						TotalAmount: plasticcredit.CreditAmount{
							Active:  1,
							Retired: 0,
						},
					},
					{
						Denom:     "PCRD/0003",
						ProjectId: 3,
						TotalAmount: plasticcredit.CreditAmount{
							Active:  42,
							Retired: 0,
						},
					},
					{
						Denom:     "RCRD/0001",
						ProjectId: 4,
						TotalAmount: plasticcredit.CreditAmount{
							Active:  60,
							Retired: 40,
						},
					},
				},
				CreditBalances: []plasticcredit.CreditBalance{
					{
						Owner: sample.AccAddress(),
						Denom: "PCRD/0001",
						Balance: plasticcredit.CreditAmount{
							Active:  30,
							Retired: 40,
						},
					},
					{
						Owner: duplicateAddress,
						Denom: "PCRD/0001",
						Balance: plasticcredit.CreditAmount{
							Active:  20,
							Retired: 10,
						},
					},
					{
						Owner: sample.AccAddress(),
						Denom: "PCRD/0002",
						Balance: plasticcredit.CreditAmount{
							Active:  100,
							Retired: 0,
						},
					},
					{
						Owner: duplicateAddress, // This should be fine
						Denom: "WEC/0001",
						Balance: plasticcredit.CreditAmount{
							Active:  1,
							Retired: 0,
						},
					},
					{
						Owner: sample.AccAddress(),
						Denom: "PCRD/0003",
						Balance: plasticcredit.CreditAmount{
							Active:  42,
							Retired: 0,
						},
					},
					{
						Owner: sample.AccAddress(),
						Denom: "RCRD/0001",
						Balance: plasticcredit.CreditAmount{
							Active:  60,
							Retired: 40,
						},
					},
				},
			},
			err: nil,
		},
		"invalid issue creator params": {
			genState: plasticcredit.GenesisState{
				Params: plasticcredit.Params{
					IssuerCreator:          "invalid",
					CreditClassCreationFee: sdk.NewCoin(params.HumanCoinDenom, sdk.NewInt(rand.Int63())),
				},
				IdCounters:        plasticcredit.DefaultGenesis().IdCounters,
				Issuers:           plasticcredit.DefaultGenesis().Issuers,
				Applicants:        plasticcredit.DefaultGenesis().Applicants,
				CreditClasses:     plasticcredit.DefaultGenesis().CreditClasses,
				Projects:          plasticcredit.DefaultGenesis().Projects,
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: sdkerrors.ErrInvalidAddress,
		},
		"invalid credit class creation fee params": {
			genState: plasticcredit.GenesisState{
				Params: plasticcredit.Params{
					IssuerCreator:          sample.AccAddress(),
					CreditClassCreationFee: sdk.Coin{},
				},
				IdCounters:        plasticcredit.DefaultGenesis().IdCounters,
				Issuers:           plasticcredit.DefaultGenesis().Issuers,
				Applicants:        plasticcredit.DefaultGenesis().Applicants,
				CreditClasses:     plasticcredit.DefaultGenesis().CreditClasses,
				Projects:          plasticcredit.DefaultGenesis().Projects,
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: sdkerrors.ErrInvalidCoins,
		},
		"invalid id counters": {
			genState: plasticcredit.GenesisState{
				Params:            plasticcredit.DefaultGenesis().Params,
				IdCounters:        plasticcredit.IDCounters{},
				Issuers:           plasticcredit.DefaultGenesis().Issuers,
				Applicants:        plasticcredit.DefaultGenesis().Applicants,
				CreditClasses:     plasticcredit.DefaultGenesis().CreditClasses,
				Projects:          plasticcredit.DefaultGenesis().Projects,
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: utils.ErrInvalidValue,
		},
		"next_issuer_id taken": {
			genState: plasticcredit.GenesisState{
				Params: plasticcredit.DefaultGenesis().Params,
				IdCounters: plasticcredit.IDCounters{
					NextIssuerId:    1,
					NextApplicantId: 1,
					NextProjectId:   1,
				},
				Issuers: []plasticcredit.Issuer{
					{
						Id:          1,
						Name:        "Empower",
						Description: "",
						Admin:       sample.AccAddress(),
					},
				},
				Applicants:        plasticcredit.DefaultGenesis().Applicants,
				CreditClasses:     plasticcredit.DefaultGenesis().CreditClasses,
				Projects:          plasticcredit.DefaultGenesis().Projects,
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: utils.ErrInvalidValue,
		},
		"next_applicant_id taken": {
			genState: plasticcredit.GenesisState{
				Params: plasticcredit.DefaultGenesis().Params,
				IdCounters: plasticcredit.IDCounters{
					NextIssuerId:    1,
					NextApplicantId: 1,
					NextProjectId:   1,
				},
				Issuers: plasticcredit.DefaultGenesis().Issuers,
				Applicants: []plasticcredit.Applicant{
					{
						Id:          1,
						Name:        "My applicant",
						Description: "",
						Admin:       sample.AccAddress(),
					},
				},
				CreditClasses:     plasticcredit.DefaultGenesis().CreditClasses,
				Projects:          plasticcredit.DefaultGenesis().Projects,
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: utils.ErrInvalidValue,
		},
		"next_project_id taken": {
			genState: plasticcredit.GenesisState{
				Params: plasticcredit.DefaultGenesis().Params,
				IdCounters: plasticcredit.IDCounters{
					NextIssuerId:    2,
					NextApplicantId: 2,
					NextProjectId:   1,
				},
				Issuers: []plasticcredit.Issuer{
					{
						Id:          1,
						Name:        "Empower",
						Description: "",
						Admin:       sample.AccAddress(),
					},
				},
				Applicants: []plasticcredit.Applicant{
					{
						Id:          1,
						Name:        "My applicant",
						Description: "",
						Admin:       sample.AccAddress(),
					},
				},
				CreditClasses: []plasticcredit.CreditClass{
					{
						Abbreviation: "PCRD",
						IssuerId:     1,
						Name:         "Empower Plastic Credits",
					},
				},
				Projects: []plasticcredit.Project{
					{
						Id:                      1,
						ApplicantId:             1,
						CreditClassAbbreviation: "PCRD",
						Name:                    "My project",
					},
				},
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: utils.ErrInvalidValue,
		},
		"invalid issuers": {
			genState: plasticcredit.GenesisState{
				Params:            plasticcredit.DefaultGenesis().Params,
				IdCounters:        plasticcredit.DefaultGenesis().IdCounters,
				Issuers:           []plasticcredit.Issuer{{}},
				Applicants:        plasticcredit.DefaultGenesis().Applicants,
				CreditClasses:     plasticcredit.DefaultGenesis().CreditClasses,
				Projects:          plasticcredit.DefaultGenesis().Projects,
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: utils.ErrInvalidValue,
		},
		"duplicate issuers": {
			genState: plasticcredit.GenesisState{
				Params:     plasticcredit.DefaultGenesis().Params,
				IdCounters: plasticcredit.DefaultGenesis().IdCounters,
				Issuers: []plasticcredit.Issuer{
					{
						Id:          1,
						Name:        "Empower",
						Description: "",
						Admin:       sample.AccAddress(),
					},
					{
						Id:          1,
						Name:        "Name does not matter",
						Description: "Nor does description",
						Admin:       sample.AccAddress(),
					},
				},
				Applicants:        plasticcredit.DefaultGenesis().Applicants,
				CreditClasses:     plasticcredit.DefaultGenesis().CreditClasses,
				Projects:          plasticcredit.DefaultGenesis().Projects,
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: plasticcredit.ErrIssuerDuplicate,
		},
		"invalid applicants": {
			genState: plasticcredit.GenesisState{
				Params:            plasticcredit.DefaultGenesis().Params,
				IdCounters:        plasticcredit.DefaultGenesis().IdCounters,
				Issuers:           plasticcredit.DefaultGenesis().Issuers,
				Applicants:        []plasticcredit.Applicant{{}},
				CreditClasses:     plasticcredit.DefaultGenesis().CreditClasses,
				Projects:          plasticcredit.DefaultGenesis().Projects,
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: utils.ErrInvalidValue,
		},
		"duplicate applicants": {
			genState: plasticcredit.GenesisState{
				Params:     plasticcredit.DefaultGenesis().Params,
				IdCounters: plasticcredit.DefaultGenesis().IdCounters,
				Issuers:    plasticcredit.DefaultGenesis().Issuers,
				Applicants: []plasticcredit.Applicant{
					{
						Id:          1,
						Name:        "Collector",
						Description: "",
						Admin:       sample.AccAddress(),
					},
					{
						Id:          1,
						Name:        "Name does not matter",
						Description: "Nor does description",
						Admin:       sample.AccAddress(),
					},
				},
				CreditClasses:     plasticcredit.DefaultGenesis().CreditClasses,
				Projects:          plasticcredit.DefaultGenesis().Projects,
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: plasticcredit.ErrApplicantDuplicate,
		},
		"invalid credit class": {
			genState: plasticcredit.GenesisState{
				Params:            plasticcredit.DefaultGenesis().Params,
				IdCounters:        plasticcredit.DefaultGenesis().IdCounters,
				Issuers:           plasticcredit.DefaultGenesis().Issuers,
				Applicants:        plasticcredit.DefaultGenesis().Applicants,
				CreditClasses:     []plasticcredit.CreditClass{{}},
				Projects:          plasticcredit.DefaultGenesis().Projects,
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: utils.ErrInvalidValue,
		},
		"duplicate credit class ids": {
			genState: plasticcredit.GenesisState{
				Params:     plasticcredit.DefaultGenesis().Params,
				IdCounters: plasticcredit.DefaultGenesis().IdCounters,
				Issuers: []plasticcredit.Issuer{
					{
						Id:          1,
						Name:        "Empower",
						Description: "",
						Admin:       sample.AccAddress(),
					},
				},
				Applicants: plasticcredit.DefaultGenesis().Applicants,
				CreditClasses: []plasticcredit.CreditClass{
					{
						Abbreviation: "PCRD",
						IssuerId:     1,
						Name:         "Empower Plastic Credit",
					},
					{
						Abbreviation: "PCRD",
						IssuerId:     1,
						Name:         "Only abbreviation counts",
					},
				},
				Projects:          plasticcredit.DefaultGenesis().Projects,
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: plasticcredit.ErrCreditClassDuplicate,
		},
		"credit class with non-existent issuer id": {
			genState: plasticcredit.GenesisState{
				Params:     plasticcredit.DefaultGenesis().Params,
				IdCounters: plasticcredit.DefaultGenesis().IdCounters,
				Issuers:    plasticcredit.DefaultGenesis().Issuers,
				Applicants: plasticcredit.DefaultGenesis().Applicants,
				CreditClasses: []plasticcredit.CreditClass{
					{
						Abbreviation: "PPP",
						IssuerId:     37,
						Name:         "This issuer does not exist",
					},
				},
				Projects:          plasticcredit.DefaultGenesis().Projects,
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: plasticcredit.ErrIssuerNotFound,
		},
		"invalid projects": {
			genState: plasticcredit.GenesisState{
				Params:            plasticcredit.DefaultGenesis().Params,
				IdCounters:        plasticcredit.DefaultGenesis().IdCounters,
				Issuers:           plasticcredit.DefaultGenesis().Issuers,
				Applicants:        plasticcredit.DefaultGenesis().Applicants,
				CreditClasses:     plasticcredit.DefaultGenesis().CreditClasses,
				Projects:          []plasticcredit.Project{{}},
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: utils.ErrInvalidValue,
		},
		"duplicate projects": {
			genState: plasticcredit.GenesisState{
				Params:     plasticcredit.DefaultGenesis().Params,
				IdCounters: plasticcredit.DefaultGenesis().IdCounters,
				Issuers: []plasticcredit.Issuer{
					{
						Id:          1,
						Name:        "Empower",
						Description: "",
						Admin:       sample.AccAddress(),
					},
				},
				Applicants: []plasticcredit.Applicant{
					{
						Id:          1,
						Name:        "My applicant",
						Description: "",
						Admin:       sample.AccAddress(),
					},
				},
				CreditClasses: []plasticcredit.CreditClass{
					{
						Abbreviation: "PCRD",
						IssuerId:     1,
						Name:         "Empower Plastic Credits",
					},
				},
				Projects: []plasticcredit.Project{
					{
						Id:                      1,
						ApplicantId:             1,
						CreditClassAbbreviation: "PCRD",
						Name:                    "My Project",
					},
					{
						Id:                      1,
						ApplicantId:             1,
						CreditClassAbbreviation: "PCRD",
						Name:                    "Only ID matters",
					},
				},
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: plasticcredit.ErrProjectDuplicate,
		},
		"project with not found applicant": {
			genState: plasticcredit.GenesisState{
				Params:     plasticcredit.DefaultGenesis().Params,
				IdCounters: plasticcredit.DefaultGenesis().IdCounters,
				Issuers: []plasticcredit.Issuer{
					{
						Id:          1,
						Name:        "Empower",
						Description: "",
						Admin:       sample.AccAddress(),
					},
				},
				Applicants: plasticcredit.DefaultGenesis().Applicants,
				CreditClasses: []plasticcredit.CreditClass{
					{
						Abbreviation: "PCRD",
						IssuerId:     1,
						Name:         "Empower Plastic Credits",
					},
				},
				Projects: []plasticcredit.Project{
					{
						Id:                      1,
						ApplicantId:             42,
						CreditClassAbbreviation: "PCRD",
						Name:                    "My Project",
					},
				},
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: plasticcredit.ErrApplicantNotFound,
		},
		"project with not found credit class": {
			genState: plasticcredit.GenesisState{
				Params:     plasticcredit.DefaultGenesis().Params,
				IdCounters: plasticcredit.DefaultGenesis().IdCounters,
				Issuers:    plasticcredit.DefaultGenesis().Issuers,
				Applicants: []plasticcredit.Applicant{
					{
						Id:          1,
						Name:        "My applicant",
						Description: "",
						Admin:       sample.AccAddress(),
					},
				},
				CreditClasses: plasticcredit.DefaultGenesis().CreditClasses,
				Projects: []plasticcredit.Project{
					{
						Id:                      1,
						ApplicantId:             1,
						CreditClassAbbreviation: "NOTFOUND",
						Name:                    "My Project",
					},
				},
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances:    plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: plasticcredit.ErrCreditClassNotFound,
		},
		"invalid credit collections": {
			genState: plasticcredit.GenesisState{
				Params:        plasticcredit.DefaultGenesis().Params,
				IdCounters:    plasticcredit.DefaultGenesis().IdCounters,
				Issuers:       plasticcredit.DefaultGenesis().Issuers,
				Applicants:    plasticcredit.DefaultGenesis().Applicants,
				CreditClasses: plasticcredit.DefaultGenesis().CreditClasses,
				Projects:      plasticcredit.DefaultGenesis().Projects,
				CreditCollections: []plasticcredit.CreditCollection{
					{
						Denom:     "",
						ProjectId: 1,
						TotalAmount: plasticcredit.CreditAmount{
							Active:  1,
							Retired: 0,
						},
					},
				},
				CreditBalances: plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: utils.ErrInvalidValue,
		},
		"duplicate credit collection": {
			genState: plasticcredit.GenesisState{
				Params:     plasticcredit.DefaultGenesis().Params,
				IdCounters: plasticcredit.DefaultGenesis().IdCounters,
				Issuers: []plasticcredit.Issuer{
					{
						Id:          1,
						Name:        "Empower",
						Description: "",
						Admin:       sample.AccAddress(),
					},
				},
				Applicants: []plasticcredit.Applicant{
					{
						Id:          1,
						Name:        "My applicant",
						Description: "",
						Admin:       sample.AccAddress(),
					},
				},
				CreditClasses: []plasticcredit.CreditClass{
					{
						Abbreviation: "PCRD",
						IssuerId:     1,
						Name:         "Empower Plastic Credits",
					},
				},
				Projects: []plasticcredit.Project{
					{
						Id:                      1,
						ApplicantId:             1,
						CreditClassAbbreviation: "PCRD",
						Name:                    "My project",
					},
				},
				CreditCollections: []plasticcredit.CreditCollection{
					{
						Denom:     "PCRD/1",
						ProjectId: 1,
						TotalAmount: plasticcredit.CreditAmount{
							Active:  1,
							Retired: 0,
						},
					},
					{
						Denom:     "PCRD/1",
						ProjectId: 1,
						TotalAmount: plasticcredit.CreditAmount{
							Active:  0,
							Retired: 1,
						},
					},
				},
				CreditBalances: plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: plasticcredit.ErrCreditCollectionDuplicate,
		},
		"credit collection with not found project": {
			genState: plasticcredit.GenesisState{
				Params:     plasticcredit.DefaultGenesis().Params,
				IdCounters: plasticcredit.DefaultGenesis().IdCounters,
				Issuers: []plasticcredit.Issuer{
					{
						Id:          1,
						Name:        "Empower",
						Description: "",
						Admin:       sample.AccAddress(),
					},
				},
				Applicants: plasticcredit.DefaultGenesis().Applicants,
				CreditClasses: []plasticcredit.CreditClass{
					{
						Abbreviation: "PCRD",
						IssuerId:     1,
						Name:         "Empower Plastic Credits",
					},
				},
				Projects: plasticcredit.DefaultGenesis().Projects,
				CreditCollections: []plasticcredit.CreditCollection{
					{
						Denom:     "PCRD/1",
						ProjectId: 37,
						TotalAmount: plasticcredit.CreditAmount{
							Active:  1,
							Retired: 0,
						},
					},
				},
				CreditBalances: plasticcredit.DefaultGenesis().CreditBalances,
			},
			err: plasticcredit.ErrProjectNotFound,
		},
		"invalid credit balances": {
			genState: plasticcredit.GenesisState{
				Params:            plasticcredit.DefaultGenesis().Params,
				IdCounters:        plasticcredit.DefaultGenesis().IdCounters,
				Issuers:           plasticcredit.DefaultGenesis().Issuers,
				Applicants:        plasticcredit.DefaultGenesis().Applicants,
				CreditClasses:     plasticcredit.DefaultGenesis().CreditClasses,
				Projects:          plasticcredit.DefaultGenesis().Projects,
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances: []plasticcredit.CreditBalance{
					{
						Owner:   "emp123",
						Denom:   "EMP/123",
						Balance: plasticcredit.CreditAmount{},
					},
				},
			},
			err: sdkerrors.ErrInvalidAddress,
		},
		"duplicate credit balance": {
			genState: plasticcredit.GenesisState{
				Params:     plasticcredit.DefaultGenesis().Params,
				IdCounters: plasticcredit.DefaultGenesis().IdCounters,
				Issuers: []plasticcredit.Issuer{
					{
						Id:          1,
						Name:        "Empower",
						Description: "",
						Admin:       sample.AccAddress(),
					},
				},
				Applicants: []plasticcredit.Applicant{
					{
						Id:          1,
						Name:        "My applicant",
						Description: "",
						Admin:       sample.AccAddress(),
					},
				},
				CreditClasses: []plasticcredit.CreditClass{
					{
						Abbreviation: "PCRD",
						IssuerId:     1,
						Name:         "Empower Plastic Credits",
					},
				},
				Projects: []plasticcredit.Project{
					{
						Id:                      1,
						ApplicantId:             1,
						CreditClassAbbreviation: "PCRD",
						Name:                    "My project",
					},
				},
				CreditCollections: []plasticcredit.CreditCollection{
					{
						Denom:     "PCRD/123",
						ProjectId: 1,
						TotalAmount: plasticcredit.CreditAmount{
							Active:  1,
							Retired: 0,
						},
					},
				},
				CreditBalances: []plasticcredit.CreditBalance{
					{
						Owner:   duplicateAddress,
						Denom:   "PCRD/123",
						Balance: plasticcredit.CreditAmount{},
					},
					{
						Owner:   duplicateAddress,
						Denom:   "PCRD/123",
						Balance: plasticcredit.CreditAmount{},
					},
				},
			},
			err: plasticcredit.ErrCreditBalanceDuplicate,
		},
		"credit balance with not found credit collection": {
			genState: plasticcredit.GenesisState{
				Params:            plasticcredit.DefaultGenesis().Params,
				IdCounters:        plasticcredit.DefaultGenesis().IdCounters,
				Issuers:           plasticcredit.DefaultGenesis().Issuers,
				Applicants:        plasticcredit.DefaultGenesis().Applicants,
				CreditClasses:     plasticcredit.DefaultGenesis().CreditClasses,
				Projects:          plasticcredit.DefaultGenesis().Projects,
				CreditCollections: plasticcredit.DefaultGenesis().CreditCollections,
				CreditBalances: []plasticcredit.CreditBalance{
					{
						Owner:   sample.AccAddress(),
						Denom:   "PCRD/123",
						Balance: plasticcredit.CreditAmount{},
					},
				},
			},
			err: plasticcredit.ErrCreditCollectionNotFound,
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			err := tc.genState.Validate()
			require.ErrorIs(t, err, tc.err)
		})
	}
}
