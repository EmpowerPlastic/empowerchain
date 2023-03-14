package keeper_test

import (
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/keeper"
)

type MockInvariantKeeper struct {
	creditCollections []plasticcredit.CreditCollection
	creditBalances    []plasticcredit.CreditBalance
	idCounters        plasticcredit.IDCounters
	applicant         plasticcredit.Applicant
	issuer            plasticcredit.Issuer
	project           plasticcredit.Project
}

func (k MockInvariantKeeper) IterateCreditCollections(ctx sdk.Context, handler func(creditCollection plasticcredit.CreditCollection)) {
	for _, creditCollection := range k.creditCollections {
		handler(creditCollection)
	}
}

func (k MockInvariantKeeper) IterateCreditBalances(ctx sdk.Context, handler func(creditBalance plasticcredit.CreditBalance)) {
	for _, creditBalance := range k.creditBalances {
		handler(creditBalance)
	}
}

func (k MockInvariantKeeper) GetIDCounters(ctx sdk.Context) (idc plasticcredit.IDCounters) {
	return k.idCounters
}

func (k MockInvariantKeeper) GetApplicant(ctx sdk.Context, id uint64) (applicant plasticcredit.Applicant, found bool) {
	if k.applicant.Id == id {
		return k.applicant, true
	}
	return plasticcredit.Applicant{}, false
}

func (k MockInvariantKeeper) GetIssuer(ctx sdk.Context, id uint64) (issuer plasticcredit.Issuer, found bool) {
	if k.issuer.Id == id {
		return k.issuer, true
	}
	return plasticcredit.Issuer{}, false
}

func (k MockInvariantKeeper) GetProject(ctx sdk.Context, projectID uint64) (project plasticcredit.Project, found bool) {
	if k.project.Id == projectID {
		return k.project, true
	}
	return plasticcredit.Project{}, false
}

func (s *TestSuite) TestIDCountersInvariant() {
	testCases := map[string]struct {
		idCounters    plasticcredit.IDCounters
		applicant     plasticcredit.Applicant
		issuer        plasticcredit.Issuer
		project       plasticcredit.Project
		expBroken     bool
		messageBroken string
	}{
		"happy path": {
			idCounters: plasticcredit.IDCounters{
				NextApplicantId: 2,
				NextIssuerId:    2,
				NextProjectId:   2,
			},
			applicant: plasticcredit.Applicant{
				Id: 1,
			},
			issuer: plasticcredit.Issuer{
				Id: 1,
			},
			project: plasticcredit.Project{
				Id: 1,
			},
			expBroken:     false,
			messageBroken: "invalid id counters: none",
		},
		"invalid applicant id": {
			idCounters: plasticcredit.IDCounters{
				NextApplicantId: 2,
				NextIssuerId:    2,
				NextProjectId:   2,
			},
			applicant: plasticcredit.Applicant{
				Id: 2,
			},
			issuer: plasticcredit.Issuer{
				Id: 1,
			},
			project: plasticcredit.Project{
				Id: 1,
			},
			expBroken:     true,
			messageBroken: "invalid id counters: applicant id",
		},
		"invalid issuer id": {
			idCounters: plasticcredit.IDCounters{
				NextApplicantId: 2,
				NextIssuerId:    2,
				NextProjectId:   2,
			},
			applicant: plasticcredit.Applicant{
				Id: 1,
			},
			issuer: plasticcredit.Issuer{
				Id: 2,
			},
			project: plasticcredit.Project{
				Id: 1,
			},
			expBroken:     true,
			messageBroken: "invalid id counters: issuer id",
		},
		"invalid project id": {
			idCounters: plasticcredit.IDCounters{
				NextApplicantId: 2,
				NextIssuerId:    2,
				NextProjectId:   2,
			},
			applicant: plasticcredit.Applicant{
				Id: 1,
			},
			issuer: plasticcredit.Issuer{
				Id: 1,
			},
			project: plasticcredit.Project{
				Id: 2,
			},
			expBroken:     true,
			messageBroken: "invalid id counters: project id",
		},
		"all ids invalid": {
			idCounters: plasticcredit.IDCounters{
				NextApplicantId: 2,
				NextIssuerId:    2,
				NextProjectId:   2,
			},
			applicant: plasticcredit.Applicant{
				Id: 2,
			},
			issuer: plasticcredit.Issuer{
				Id: 2,
			},
			project: plasticcredit.Project{
				Id: 2,
			},
			expBroken:     true,
			messageBroken: "invalid id counters: applicant id, issuer id, project id",
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			k := MockInvariantKeeper{idCounters: tc.idCounters, applicant: tc.applicant, issuer: tc.issuer, project: tc.project}
			invariant := keeper.IDCountersInvariant(k)
			message, broken := invariant(s.ctx)
			s.Require().True(strings.Contains(message, tc.messageBroken))
			s.Require().Equal(tc.expBroken, broken)
		})
	}
}

func (s *TestSuite) TestTotalSuppliesInvariant() {
	testCases := map[string]struct {
		creditCollections []plasticcredit.CreditCollection
		creditBalances    []plasticcredit.CreditBalance
		expBroken         bool
		messageBroken     string
	}{
		"happy path": {
			creditCollections: []plasticcredit.CreditCollection{
				{
					Denom:     "ETEST/123",
					ProjectId: 1,
					TotalAmount: plasticcredit.CreditAmount{
						Active:  1000,
						Retired: 200,
					},
				},
				{
					Denom:     "PTEST/0001",
					ProjectId: 2,
					TotalAmount: plasticcredit.CreditAmount{
						Active:  100,
						Retired: 0,
					},
				},
			},
			creditBalances: []plasticcredit.CreditBalance{
				{
					Owner: sample.AccAddress(),
					Denom: "ETEST/123",
					Balance: plasticcredit.CreditAmount{
						Active:  200,
						Retired: 0,
					},
				},
				{
					Owner: sample.AccAddress(),
					Denom: "ETEST/123",
					Balance: plasticcredit.CreditAmount{
						Active:  800,
						Retired: 100,
					},
				},
				{
					Owner: sample.AccAddress(),
					Denom: "ETEST/123",
					Balance: plasticcredit.CreditAmount{
						Active:  0,
						Retired: 100,
					},
				},
				{
					Owner: sample.AccAddress(),
					Denom: "PTEST/0001",
					Balance: plasticcredit.CreditAmount{
						Active:  100,
						Retired: 0,
					},
				},
			},
			expBroken:     false,
			messageBroken: "amount of invalid supplies found 0",
		},
		"invalid active balance": {
			creditCollections: []plasticcredit.CreditCollection{
				{
					Denom:     "ETEST/123",
					ProjectId: 1,
					TotalAmount: plasticcredit.CreditAmount{
						Active:  1000,
						Retired: 200,
					},
				},
				{
					Denom:     "PTEST/0001",
					ProjectId: 2,
					TotalAmount: plasticcredit.CreditAmount{
						Active:  80,
						Retired: 0,
					},
				},
			},
			creditBalances: []plasticcredit.CreditBalance{
				{
					Owner: sample.AccAddress(),
					Denom: "ETEST/123",
					Balance: plasticcredit.CreditAmount{
						Active:  200,
						Retired: 0,
					},
				},
				{
					Owner: sample.AccAddress(),
					Denom: "ETEST/123",
					Balance: plasticcredit.CreditAmount{
						Active:  800,
						Retired: 100,
					},
				},
				{
					Owner: sample.AccAddress(),
					Denom: "ETEST/123",
					Balance: plasticcredit.CreditAmount{
						Active:  0,
						Retired: 100,
					},
				},
				{
					Owner: sample.AccAddress(),
					Denom: "PTEST/0001",
					Balance: plasticcredit.CreditAmount{
						Active:  100,
						Retired: 0,
					},
				},
			},
			expBroken:     true,
			messageBroken: "amount of invalid supplies found 1\nPTEST/0001 collection has 80 active and 0 retired credits, but the total of active is 100 and retired is 0",
		},
		"invalid retired balance": {
			creditCollections: []plasticcredit.CreditCollection{
				{
					Denom:     "ETEST/123",
					ProjectId: 1,
					TotalAmount: plasticcredit.CreditAmount{
						Active:  1000,
						Retired: 200,
					},
				},
				{
					Denom:     "PTEST/0001",
					ProjectId: 2,
					TotalAmount: plasticcredit.CreditAmount{
						Active:  100,
						Retired: 20,
					},
				},
			},
			creditBalances: []plasticcredit.CreditBalance{
				{
					Owner: sample.AccAddress(),
					Denom: "ETEST/123",
					Balance: plasticcredit.CreditAmount{
						Active:  200,
						Retired: 0,
					},
				},
				{
					Owner: sample.AccAddress(),
					Denom: "ETEST/123",
					Balance: plasticcredit.CreditAmount{
						Active:  800,
						Retired: 100,
					},
				},
				{
					Owner: sample.AccAddress(),
					Denom: "ETEST/123",
					Balance: plasticcredit.CreditAmount{
						Active:  0,
						Retired: 100,
					},
				},
				{
					Owner: sample.AccAddress(),
					Denom: "PTEST/0001",
					Balance: plasticcredit.CreditAmount{
						Active:  100,
						Retired: 0,
					},
				},
			},
			expBroken:     true,
			messageBroken: "amount of invalid supplies found 1\nPTEST/0001 collection has 100 active and 20 retired credits, but the total of active is 100 and retired is 0",
		},
	}
	for name, tc := range testCases {
		s.Run(name, func() {
			k := MockInvariantKeeper{creditCollections: tc.creditCollections, creditBalances: tc.creditBalances}
			invariant := keeper.TotalSupplyInvariant(k)
			message, broken := invariant(s.ctx)
			s.Require().True(strings.Contains(message, tc.messageBroken))
			s.Require().Equal(tc.expBroken, broken)
		})
	}
}
