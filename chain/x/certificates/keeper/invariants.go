package keeper

import (
	"fmt"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"

	certificates "github.com/EmpowerPlastic/empowerchain/x/certificates"
)

type InvariantKeeper interface {
	GetIDCounters(ctx sdk.Context) (idc certificates.IDCounters)
	GetCertificate(ctx sdk.Context, owner string, id uint64) (certificate certificates.Certificate, found bool)
}

func RegisterInvariants(ir sdk.InvariantRegistry, k Keeper) {
	ir.RegisterRoute(certificates.ModuleName, "id-counters", IDCountersInvariant(k))
}

// IDCountersInvariant checks if ID counters point to non-existing state objects
func IDCountersInvariant(k InvariantKeeper) sdk.Invariant {
	return func(ctx sdk.Context) (string, bool) {
		var invalidInvariants []string
		broken := false
		idCounters := k.GetIDCounters(ctx)
		// check if certificate with ID pointed by IDCounters exist
		_, found := k.GetCertificate(ctx, "string", idCounters.NextCertificateId)
		if found {
			invalidInvariants = append(invalidInvariants, "certificate id")
			broken = true
		}
		if len(invalidInvariants) == 0 {
			invalidInvariants = append(invalidInvariants, "none")
		}
		return sdk.FormatInvariant(certificates.ModuleName, "id counters",
			fmt.Sprintf("invalid id counters: %s", strings.Join(invalidInvariants, ", ")),
		), broken
	}
}
