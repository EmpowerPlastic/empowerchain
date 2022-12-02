package keeper_test

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/testutil/sample"
	"github.com/empowerchain/empowerchain/x/plasticcredit"
)

func (s *TestSuite) TestGenesis() {
	genesisState := plasticcredit.GenesisState{
		Params: plasticcredit.Params{
			IssuerCreator: sample.AccAddress(),
		},
		IdCounters: plasticcredit.IDCounters{
			NextIssuerId:      3,
			NextApplicantId:   1,
			NextProjectId:     1,
			NextCreditClassId: 1,
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
		CreditCollections: []*plasticcredit.CreditCollection{
			{
				Denom:     "ZMP/61361514316",
				ProjectId: 2,
				TotalAmount: &plasticcredit.CreditAmount{
					Active:  0,
					Retired: 100000,
				},
				CreditData: []*plasticcredit.ProvenData{
					{
						Uri:  "ipfs://CID",
						Hash: "dc0e5b6690a55f0f1c41ad96f068049e25d9e85d53c0587284b7f1a1f9a51545",
					},
				},
			},
			{
				Denom:     "PLST/123",
				ProjectId: 1,
				TotalAmount: &plasticcredit.CreditAmount{
					Active:  123,
					Retired: 55,
				},
				CreditData: []*plasticcredit.ProvenData{
					{
						Uri:  "http://example.com",
						Hash: "0ca0ecabdd9d86217a3230a362e1af0b06bdb85b6aa48602004ef515ee9d4908",
					},
					{
						Uri:  "ipfs://CID",
						Hash: "dc0e5b6690a55f0f1c41ad96f068049e25d9e85d53c0587284b7f1a1f9a51545",
					},
				},
			},
		},
		CreditBalances: []*plasticcredit.CreditBalance{
			{
				Owner: sample.AccAddress(),
				Denom: "EMP/61361514316",
				Balance: &plasticcredit.CreditAmount{
					Active:  0,
					Retired: 500000,
				},
			},
			{
				Owner: sample.AccAddress(),
				Denom: "EMP/61361514316",
				Balance: &plasticcredit.CreditAmount{
					Active:  0,
					Retired: 200000,
				},
			},
			{
				Owner: sample.AccAddress(),
				Denom: "EMP/61361514316",
				Balance: &plasticcredit.CreditAmount{
					Active:  0,
					Retired: 300000,
				},
			},
			{
				Owner: sample.AccAddress(),
				Denom: "PLST/123",
				Balance: &plasticcredit.CreditAmount{
					Active:  120,
					Retired: 5,
				},
			},
			{
				Owner: sample.AccAddress(),
				Denom: "PLST/123",
				Balance: &plasticcredit.CreditAmount{
					Active:  3,
					Retired: 50,
				},
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
	}

	err := s.empowerApp.PlasticcreditKeeper.InitGenesis(s.ctx, genesisState)
	s.Require().NoError(err)

	k := s.empowerApp.PlasticcreditKeeper

	params, err := k.GetParams(s.ctx)
	s.Require().NoError(err)
	s.Require().Equal(genesisState.Params, params)

	idCounter, err := k.GetIDCounters(s.ctx)
	s.Require().NoError(err)
	s.Require().Equal(genesisState.IdCounters, idCounter)

	for _, issuer := range genesisState.Issuers {
		actualIssuer, found := k.GetIssuer(s.ctx, issuer.Id)
		s.Require().True(found)
		s.Require().Equal(issuer, actualIssuer)
	}

	for _, creditCollection := range genesisState.CreditCollections {
		actualCreditCollection, found := k.GetCreditCollection(s.ctx, creditCollection.Denom)
		s.Require().True(found)
		s.Require().Equal(*creditCollection, actualCreditCollection)
	}

	for _, creditBalance := range genesisState.CreditBalances {
		actualCreditBalance, found := k.GetCreditBalance(s.ctx, sdk.MustAccAddressFromBech32(creditBalance.Owner), creditBalance.Denom)
		s.Require().True(found)
		s.Require().Equal(*creditBalance, actualCreditBalance)
	}
	for _, applicant := range genesisState.Applicants {
		actualApplicant, found := k.GetApplicant(s.ctx, applicant.Id)
		s.Require().True(found)
		s.Require().Equal(applicant, actualApplicant)
	}

	export, err := s.empowerApp.PlasticcreditKeeper.ExportGenesis(s.ctx)
	s.Require().NoError(err)

	s.Require().Equal(genesisState.Params, export.Params)
	s.Require().Equal(genesisState.IdCounters, export.IdCounters)

	s.Require().Equal(len(genesisState.Issuers), len(export.Issuers))
	for i, issuer := range genesisState.Issuers {
		actualIssuer := export.Issuers[i]
		s.Require().Equal(issuer, actualIssuer)
	}

	s.Require().Equal(len(genesisState.CreditCollections), len(export.CreditCollections))
	s.Require().ElementsMatch(export.CreditCollections, genesisState.CreditCollections)

	s.Require().Equal(len(genesisState.CreditBalances), len(export.CreditBalances))
	s.Require().ElementsMatch(export.CreditBalances, genesisState.CreditBalances)
	s.Require().Equal(len(genesisState.Applicants), len(export.Applicants))
	for i, applicant := range genesisState.Applicants {
		actualApplicant := export.Applicants[i]
		s.Require().Equal(applicant, actualApplicant)
	}
}
