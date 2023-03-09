package keeper

import (
	"fmt"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
)

type InvariantKeeper interface {
	IterateCreditBalances(ctx sdk.Context, handler func(creditBalance plasticcredit.CreditBalance))
	IterateCreditCollections(ctx sdk.Context, handler func(creditCollection plasticcredit.CreditCollection))
	GetIDCounters(ctx sdk.Context) (idc plasticcredit.IDCounters)
	GetApplicant(ctx sdk.Context, id uint64) (applicant plasticcredit.Applicant, found bool)
	GetIssuer(ctx sdk.Context, id uint64) (issuer plasticcredit.Issuer, found bool)
	GetProject(ctx sdk.Context, projectID uint64) (project plasticcredit.Project, found bool)
}

func RegisterInvariants(ir sdk.InvariantRegistry, k Keeper) {
	ir.RegisterRoute(plasticcredit.ModuleName, "total-supply", TotalSupplyInvariant(k))
	ir.RegisterRoute(plasticcredit.ModuleName, "id-counters", IDCountersInvariant(k))
}

func AllInvariants(k Keeper) sdk.Invariant {
	return func(ctx sdk.Context) (string, bool) {
		res, stop := IDCountersInvariant(k)(ctx)
		if stop {
			return res, stop
		}
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
			totalSupply := totalSupplies[creditBalance.Denom]
			totalSupply.Active += creditBalance.Balance.Active
			totalSupply.Retired += creditBalance.Balance.Retired
			totalSupplies[creditBalance.Denom] = totalSupply
		})

		k.IterateCreditCollections(ctx, func(creditCollection plasticcredit.CreditCollection) {
			if totalSupplies[creditCollection.Denom].Active != creditCollection.TotalAmount.Active ||
				totalSupplies[creditCollection.Denom].Retired != creditCollection.TotalAmount.Retired {
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

// IDCountersInvariant checks if ID counters point to non-existing state objects
func IDCountersInvariant(k InvariantKeeper) sdk.Invariant {
	return func(ctx sdk.Context) (string, bool) {
		var invalidInvariants []string
		broken := false
		idCounters := k.GetIDCounters(ctx)
		// check if applicant with ID pointed by IDCounters exist
		_, found := k.GetApplicant(ctx, idCounters.NextApplicantId)
		if found {
			invalidInvariants = append(invalidInvariants, "applicant id")
			broken = true
		}
		// check if issuer with ID pointed by IDCounters exist
		_, found = k.GetIssuer(ctx, idCounters.NextIssuerId)
		if found {
			invalidInvariants = append(invalidInvariants, "issuer id")
			broken = true
		}
		// check if project with ID pointed by IDCounters exist
		_, found = k.GetProject(ctx, idCounters.NextProjectId)
		if found {
			invalidInvariants = append(invalidInvariants, "project id")
			broken = true
		}
		if len(invalidInvariants) == 0 {
			invalidInvariants = append(invalidInvariants, "none")
		}
		return sdk.FormatInvariant(plasticcredit.ModuleName, "id counters",
			fmt.Sprintf("invalid id counters: %s", strings.Join(invalidInvariants, ", ")),
		), broken
	}
}
