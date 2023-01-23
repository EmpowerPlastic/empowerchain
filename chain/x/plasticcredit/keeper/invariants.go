package keeper

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/bank/types"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
)

type InvariantKeeper interface {
	IterateCreditBalances(ctx sdk.Context, handler func(creditBalance plasticcredit.CreditBalance))
	IterateCreditCollections(ctx sdk.Context, handler func(creditCollection plasticcredit.CreditCollection))
}

func RegisterInvariants(ir sdk.InvariantRegistry, k Keeper) {
	ir.RegisterRoute(types.ModuleName, "total-supply", TotalSupplyInvariant(k))
}

func AllInvariants(k Keeper) sdk.Invariant {
	return func(ctx sdk.Context) (string, bool) {
		return TotalSupplyInvariant(k)(ctx)
	}
}

// TotalSupplyInvariant checks that the total supply reflects all the credits held in accounts
func TotalSupplyInvariant(k InvariantKeeper) sdk.Invariant {
	return func(ctx sdk.Context) (string, bool) {
		var (
			msg   string
			count int
		)
		totalSupplies := make(map[string]struct {
			Active  uint64
			Retired uint64
		})
		k.IterateCreditBalances(ctx, func(creditBalance plasticcredit.CreditBalance) {
			if totalSupply, ok := totalSupplies[creditBalance.Denom]; ok {
				totalSupply.Active += creditBalance.Balance.Active
				totalSupply.Retired += creditBalance.Balance.Retired
				totalSupplies[creditBalance.Denom] = totalSupply
			} else {
				totalSupply.Active = creditBalance.Balance.Active
				totalSupply.Retired = creditBalance.Balance.Retired
				totalSupplies[creditBalance.Denom] = totalSupply
			}
		})

		k.IterateCreditCollections(ctx, func(creditCollection plasticcredit.CreditCollection) {
			if totalSupplies[creditCollection.Denom].Active != creditCollection.TotalAmount.Active || totalSupplies[creditCollection.Denom].Retired != creditCollection.TotalAmount.Retired {
				count++
				msg += fmt.Sprintf("%s collection has %d active and %d retired credits, but the total of active is %d and retired is %d\n", creditCollection.Denom, creditCollection.TotalAmount.Active, creditCollection.TotalAmount.Retired, totalSupplies[creditCollection.Denom].Active, totalSupplies[creditCollection.Denom].Retired)
			}
		})
		broken := count != 0
		return sdk.FormatInvariant(plasticcredit.ModuleName, "total supply",
			fmt.Sprintf("amount of invalid supplies found %d\n%s", count, msg),
		), broken
	}
}
