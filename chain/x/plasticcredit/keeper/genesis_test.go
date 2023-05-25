package keeper_test

import (
	"math/rand"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/app/params"
	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
)

func (s *TestSuite) TestGenesis() {
	genesisState := plasticcredit.GenesisState{
		Params: plasticcredit.Params{
			IssuerCreator:         sample.AccAddress(),
			CreditTypeCreationFee: sdk.NewCoin(params.BaseCoinDenom, sdk.NewInt(rand.Int63())),
		},
		IdCounters: plasticcredit.IDCounters{
			NextIssuerId:    3,
			NextApplicantId: 1,
			NextProjectId:   1,
		},
		Issuers: []plasticcredit.Issuer{
			{
				Id:          1,
				Name:        "Empower",
				Description: "The OG plastic credit issuer!",
				Admin:       sample.AccAddress(),
			},
			{
				Id:          2,
				Name:        "SomeoneElse",
				Description: "They are probably cool too!",
				Admin:       sample.AccAddress(),
			},
		},
		Applicants: []plasticcredit.Applicant{
			{
				Id:          1,
				Name:        "Cleanup inc.",
				Description: "We clean up plastics!",
				Admin:       sample.AccAddress(),
			},
			{
				Id:          2,
				Name:        "Recycler coop",
				Description: "We recycle plastics!",
				Admin:       sample.AccAddress(),
			},
			{
				Id:          3,
				Name:        "Who me?",
				Description: "I don't know what I'm doing",
				Admin:       sample.AccAddress(),
			},
		},
		CreditTypes: []plasticcredit.CreditType{
			{
				Abbreviation: "PTEST",
				IssuerId:     1,
				Name:         "Empower Plastic Cleanup Credit",
			},
			{
				Abbreviation: "RCRD",
				IssuerId:     1,
				Name:         "Empower Recycling Credit",
			},
			{
				Abbreviation: "WE",
				IssuerId:     2,
				Name:         "Whatever",
			},
		},
		Projects: []plasticcredit.Project{
			{
				Id:                     1,
				ApplicantId:            1,
				CreditTypeAbbreviation: "PTEST",
				Name:                   "My project",
			},
			{
				Id:                     2,
				ApplicantId:            1,
				CreditTypeAbbreviation: "RCRD",
				Name:                   "My other project",
			},
			{
				Id:                     3,
				ApplicantId:            2,
				CreditTypeAbbreviation: "WE",
				Name:                   "The I barely care project",
			},
			{
				Id:                     4,
				ApplicantId:            3,
				CreditTypeAbbreviation: "PTEST",
				Name:                   "Project 420x",
			},
		},
		CreditCollections: []plasticcredit.CreditCollection{
			{
				Denom:     "ZMP/61361514316",
				ProjectId: 2,
				TotalAmount: plasticcredit.CreditAmount{
					Active:  0,
					Retired: 100000,
				},
				MetadataUris: []string{"ipfs://CID1", "ipfs://CID2"},
			},
			{
				Denom:     "PLST/123",
				ProjectId: 1,
				TotalAmount: plasticcredit.CreditAmount{
					Active:  123,
					Retired: 55,
				},
				MetadataUris: []string{"ipfs://CID3", "ipfs://CID4"},
			},
		},
		CreditBalances: []plasticcredit.CreditBalance{
			{
				Owner: sample.AccAddress(),
				Denom: "ETEST/61361514316",
				Balance: plasticcredit.CreditAmount{
					Active:  0,
					Retired: 500000,
				},
			},
			{
				Owner: sample.AccAddress(),
				Denom: "ETEST/61361514316",
				Balance: plasticcredit.CreditAmount{
					Active:  0,
					Retired: 200000,
				},
			},
			{
				Owner: sample.AccAddress(),
				Denom: "ETEST/61361514316",
				Balance: plasticcredit.CreditAmount{
					Active:  0,
					Retired: 300000,
				},
			},
			{
				Owner: sample.AccAddress(),
				Denom: "PLST/123",
				Balance: plasticcredit.CreditAmount{
					Active:  120,
					Retired: 5,
				},
			},
			{
				Owner: sample.AccAddress(),
				Denom: "PLST/123",
				Balance: plasticcredit.CreditAmount{
					Active:  3,
					Retired: 50,
				},
			},
		},
	}

	err := s.empowerApp.PlasticcreditKeeper.InitGenesis(s.ctx, &genesisState)
	s.Require().NoError(err)

	k := s.empowerApp.PlasticcreditKeeper

	fetchedParams := k.GetParams(s.ctx)
	s.Require().Equal(genesisState.Params, fetchedParams)

	idCounter := k.GetIDCounters(s.ctx)
	s.Require().Equal(genesisState.IdCounters, idCounter)

	for _, issuer := range genesisState.Issuers {
		actualIssuer, found := k.GetIssuer(s.ctx, issuer.Id)
		s.Require().True(found)
		s.Require().Equal(issuer, actualIssuer)
	}

	for _, applicant := range genesisState.Applicants {
		actualApplicant, found := k.GetApplicant(s.ctx, applicant.Id)
		s.Require().True(found)
		s.Require().Equal(applicant, actualApplicant)
	}

	for _, creditType := range genesisState.CreditTypes {
		actualCreditType, found := k.GetCreditType(s.ctx, creditType.Abbreviation)
		s.Require().True(found)
		s.Require().Equal(creditType, actualCreditType)
	}

	for _, project := range genesisState.Projects {
		actualProject, found := k.GetProject(s.ctx, project.Id)
		s.Require().True(found)
		s.Require().Equal(project, actualProject)
	}

	for _, creditCollection := range genesisState.CreditCollections {
		actualCreditCollection, found := k.GetCreditCollection(s.ctx, creditCollection.Denom)
		s.Require().True(found)
		s.Require().Equal(creditCollection, actualCreditCollection)
	}

	for _, creditBalance := range genesisState.CreditBalances {
		actualCreditBalance, found := k.GetCreditBalance(s.ctx, sdk.MustAccAddressFromBech32(creditBalance.Owner), creditBalance.Denom)
		s.Require().True(found)
		s.Require().Equal(creditBalance, actualCreditBalance)
	}

	export := s.empowerApp.PlasticcreditKeeper.ExportGenesis(s.ctx)

	s.Require().Equal(genesisState.Params, export.Params)

	s.Require().Equal(genesisState.IdCounters, export.IdCounters)

	s.Require().Equal(len(genesisState.Issuers), len(export.Issuers))
	for i, issuer := range genesisState.Issuers {
		actualIssuer := export.Issuers[i]
		s.Require().Equal(issuer, actualIssuer)
	}

	s.Require().Equal(len(genesisState.Applicants), len(export.Applicants))
	for i, applicant := range genesisState.Applicants {
		actualApplicant := export.Applicants[i]
		s.Require().Equal(applicant, actualApplicant)
	}

	s.Require().Equal(len(genesisState.CreditTypes), len(export.CreditTypes))
	s.Require().ElementsMatch(export.CreditTypes, genesisState.CreditTypes)

	s.Require().Equal(len(genesisState.Projects), len(export.Projects))
	s.Require().ElementsMatch(export.Projects, genesisState.Projects)

	s.Require().Equal(len(genesisState.CreditCollections), len(export.CreditCollections))
	s.Require().ElementsMatch(export.CreditCollections, genesisState.CreditCollections)

	s.Require().Equal(len(genesisState.CreditBalances), len(export.CreditBalances))
	s.Require().ElementsMatch(export.CreditBalances, genesisState.CreditBalances)
}
