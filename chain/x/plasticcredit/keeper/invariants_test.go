package keeper_test

import (
	"strings"

	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/keeper"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

type MockInvariantKeeper struct {
	creditCollections []plasticcredit.CreditCollection
	creditBalances    []plasticcredit.CreditBalance
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
					Denom:     "EMP/123",
					ProjectId: 1,
					TotalAmount: plasticcredit.CreditAmount{
						Active:  1000,
						Retired: 200,
					},
				},
				{
					Denom:     "PCRD/0001",
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
					Denom: "EMP/123",
					Balance: plasticcredit.CreditAmount{
						Active:  200,
						Retired: 0,
					},
				},
				{
					Owner: sample.AccAddress(),
					Denom: "EMP/123",
					Balance: plasticcredit.CreditAmount{
						Active:  800,
						Retired: 100,
					},
				},
				{
					Owner: sample.AccAddress(),
					Denom: "EMP/123",
					Balance: plasticcredit.CreditAmount{
						Active:  0,
						Retired: 100,
					},
				},
				{
					Owner: sample.AccAddress(),
					Denom: "PCRD/0001",
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
					Denom:     "EMP/123",
					ProjectId: 1,
					TotalAmount: plasticcredit.CreditAmount{
						Active:  1000,
						Retired: 200,
					},
				},
				{
					Denom:     "PCRD/0001",
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
					Denom: "EMP/123",
					Balance: plasticcredit.CreditAmount{
						Active:  200,
						Retired: 0,
					},
				},
				{
					Owner: sample.AccAddress(),
					Denom: "EMP/123",
					Balance: plasticcredit.CreditAmount{
						Active:  800,
						Retired: 100,
					},
				},
				{
					Owner: sample.AccAddress(),
					Denom: "EMP/123",
					Balance: plasticcredit.CreditAmount{
						Active:  0,
						Retired: 100,
					},
				},
				{
					Owner: sample.AccAddress(),
					Denom: "PCRD/0001",
					Balance: plasticcredit.CreditAmount{
						Active:  100,
						Retired: 0,
					},
				},
			},
			expBroken:     true,
			messageBroken: "amount of invalid supplies found 1\nPCRD/0001 collection has 80 active and 0 retired credits, but the total of active is 100 and retired is 0",
		},
		"invalid retired balance": {
			creditCollections: []plasticcredit.CreditCollection{
				{
					Denom:     "EMP/123",
					ProjectId: 1,
					TotalAmount: plasticcredit.CreditAmount{
						Active:  1000,
						Retired: 200,
					},
				},
				{
					Denom:     "PCRD/0001",
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
					Denom: "EMP/123",
					Balance: plasticcredit.CreditAmount{
						Active:  200,
						Retired: 0,
					},
				},
				{
					Owner: sample.AccAddress(),
					Denom: "EMP/123",
					Balance: plasticcredit.CreditAmount{
						Active:  800,
						Retired: 100,
					},
				},
				{
					Owner: sample.AccAddress(),
					Denom: "EMP/123",
					Balance: plasticcredit.CreditAmount{
						Active:  0,
						Retired: 100,
					},
				},
				{
					Owner: sample.AccAddress(),
					Denom: "PCRD/0001",
					Balance: plasticcredit.CreditAmount{
						Active:  100,
						Retired: 0,
					},
				},
			},
			expBroken:     true,
			messageBroken: "amount of invalid supplies found 1\nPCRD/0001 collection has 100 active and 20 retired credits, but the total of active is 100 and retired is 0",
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
