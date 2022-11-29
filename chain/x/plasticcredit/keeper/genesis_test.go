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
			NextCollectorId:   1,
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
		actualIssuer, err := k.GetIssuer(s.ctx, issuer.Id)
		s.Require().NoError(err)
		s.Require().Equal(issuer, actualIssuer)
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
}
