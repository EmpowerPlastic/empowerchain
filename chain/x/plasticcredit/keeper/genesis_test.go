package keeper_test

import (
	"sort"

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
		CreditCollections: []*plasticcredit.IDCreditCollection{
			{
				Denom: "ZMP/61361514316",
				CreditCollection: &plasticcredit.CreditCollection{
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
			},
			{
				Denom: "PLST/123",
				CreditCollection: &plasticcredit.CreditCollection{
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
		},
		CreditBalances: []*plasticcredit.IDCreditBalance{
			{
				Owner: sample.AccAddress(),
				Denom: "EMP/61361514316",
				CreditBalance: &plasticcredit.CreditBalance{
					Balance: &plasticcredit.CreditAmount{
						Active:  0,
						Retired: 500000,
					},
				},
			},
			{
				Owner: sample.AccAddress(),
				Denom: "EMP/61361514316",
				CreditBalance: &plasticcredit.CreditBalance{
					Balance: &plasticcredit.CreditAmount{
						Active:  0,
						Retired: 200000,
					},
				},
			},
			{
				Owner: sample.AccAddress(),
				Denom: "EMP/61361514316",
				CreditBalance: &plasticcredit.CreditBalance{
					Balance: &plasticcredit.CreditAmount{
						Active:  0,
						Retired: 300000,
					},
				},
			},
			{
				Owner: sample.AccAddress(),
				Denom: "PLST/123",
				CreditBalance: &plasticcredit.CreditBalance{
					Balance: &plasticcredit.CreditAmount{
						Active:  120,
						Retired: 5,
					},
				},
			},
			{
				Owner: sample.AccAddress(),
				Denom: "PLST/123",
				CreditBalance: &plasticcredit.CreditBalance{
					Balance: &plasticcredit.CreditAmount{
						Active:  3,
						Retired: 50,
					},
				},
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
		s.Require().Equal(*creditCollection.CreditCollection, actualCreditCollection)
	}

	for _, creditBalance := range genesisState.CreditBalances {
		actualCreditBalance, found := k.GetCreditBalance(s.ctx, sdk.MustAccAddressFromBech32(creditBalance.Owner), creditBalance.Denom)
		s.Require().True(found)
		s.Require().Equal(*creditBalance.CreditBalance, actualCreditBalance)
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
	sort.Slice(export.CreditCollections, func(a, b int) bool {
		return export.CreditCollections[a].Denom < export.CreditCollections[b].Denom
	})
	// s.Require().Equal(export.CreditCollections, genesisState.CreditCollections)

	s.Require().Equal(len(genesisState.CreditBalances), len(export.CreditBalances))
	sort.Slice(export.CreditBalances, func(a, b int) bool {
		return export.CreditBalances[a].Owner < export.CreditBalances[b].Owner || export.CreditBalances[a].Denom < export.CreditBalances[b].Denom
	})
	sort.Slice(genesisState.CreditBalances, func(a, b int) bool {
		return genesisState.CreditBalances[a].Owner < genesisState.CreditBalances[b].Owner || genesisState.CreditBalances[a].Denom < genesisState.CreditBalances[b].Denom
	})
	// TODO why no sortin?!
	// s.Require().Equal(export.CreditBalances, genesisState.CreditBalances)
}
