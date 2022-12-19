package keeper_test

import (
	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/keeper"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

type HappyInvariantKeeper struct {
}

func (k HappyInvariantKeeper) IterateCreditCollections(ctx sdk.Context, handler func(creditCollection plasticcredit.CreditCollection)) {
	creditCollections := []plasticcredit.CreditCollection{
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
	}
	for _, creditCollection := range creditCollections {
		handler(creditCollection)
	}
}

func (k HappyInvariantKeeper) IterateCreditBalances(ctx sdk.Context, handler func(creditBalance plasticcredit.CreditBalance)) {
	creditBalances := []plasticcredit.CreditBalance{
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
	}
	for _, creditBalance := range creditBalances {
		handler(creditBalance)
	}
}

type InvalidActiveBalanceInvariantKeeper struct {
}

func (k InvalidActiveBalanceInvariantKeeper) IterateCreditCollections(ctx sdk.Context, handler func(creditCollection plasticcredit.CreditCollection)) {
	creditCollections := []plasticcredit.CreditCollection{
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
	}
	for _, creditCollection := range creditCollections {
		handler(creditCollection)
	}
}

func (k InvalidActiveBalanceInvariantKeeper) IterateCreditBalances(ctx sdk.Context, handler func(creditBalance plasticcredit.CreditBalance)) {
	creditBalances := []plasticcredit.CreditBalance{
		{
			Owner: sample.AccAddress(),
			Denom: "EMP/123",
			Balance: plasticcredit.CreditAmount{
				Active:  180,
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
	}
	for _, creditBalance := range creditBalances {
		handler(creditBalance)
	}
}

type InvalidRetiredBalanceInvariantKeeper struct {
}

func (k InvalidRetiredBalanceInvariantKeeper) IterateCreditCollections(ctx sdk.Context, handler func(creditCollection plasticcredit.CreditCollection)) {
	creditCollections := []plasticcredit.CreditCollection{
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
	}
	for _, creditCollection := range creditCollections {
		handler(creditCollection)
	}
}

func (k InvalidRetiredBalanceInvariantKeeper) IterateCreditBalances(ctx sdk.Context, handler func(creditBalance plasticcredit.CreditBalance)) {
	creditBalances := []plasticcredit.CreditBalance{
		{
			Owner: sample.AccAddress(),
			Denom: "EMP/123",
			Balance: plasticcredit.CreditAmount{
				Active:  200,
				Retired: 100,
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
	}
	for _, creditBalance := range creditBalances {
		handler(creditBalance)
	}
}

func (s *TestSuite) TestTotalSuppliesInvariant() {
	s.Run("happy path", func() {
		k := HappyInvariantKeeper{}
		invariant := keeper.TotalSupplyInvariant(k)
		_, broken := invariant(s.ctx)
		s.Require().False(broken)
	})
	s.Run("invalid active balance", func() {
		k := InvalidActiveBalanceInvariantKeeper{}
		invariant := keeper.TotalSupplyInvariant(k)
		_, broken := invariant(s.ctx)
		s.Require().True(broken)
	})
	s.Run("invalid retired balance", func() {
		k := InvalidRetiredBalanceInvariantKeeper{}
		invariant := keeper.TotalSupplyInvariant(k)
		_, broken := invariant(s.ctx)
		s.Require().True(broken)
	})
}
