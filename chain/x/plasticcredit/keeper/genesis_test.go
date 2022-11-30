package keeper_test

import (
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

	s.Require().Equal(len(genesisState.Applicants), len(export.Applicants))
	for i, applicant := range genesisState.Applicants {
		actualApplicant := export.Applicants[i]
		s.Require().Equal(applicant, actualApplicant)
	}
}
