package simulation

import (
	"bytes"
	"fmt"

	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/types/kv"

	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
)

// NewDecodeStore returns a decoder function closure that unmarshal the KVPair's
// value to the corresponding plasticcredit type.
func NewDecodeStore(cdc codec.Codec) func(kvA, kvB kv.Pair) string {
	return func(kvA, kvB kv.Pair) string {
		switch {
		case bytes.Equal(kvA.Key[:1], plasticcredit.IDCountersKey):
			var idCountersA, idCountersB plasticcredit.IDCounters
			cdc.MustUnmarshal(kvA.Value, &idCountersA)
			cdc.MustUnmarshal(kvB.Value, &idCountersB)
			return fmt.Sprintf("%v\n%v", idCountersA, idCountersB)

		case bytes.Equal(kvA.Key[:1], plasticcredit.IssuerKey):
			var issuerA, issuerB plasticcredit.Issuer
			cdc.MustUnmarshal(kvA.Value, &issuerA)
			cdc.MustUnmarshal(kvB.Value, &issuerB)
			return fmt.Sprintf("%v\n%v", issuerA, issuerB)

		case bytes.Equal(kvA.Key[:1], plasticcredit.ApplicantKey):
			var applicantA, applicantB plasticcredit.Applicant
			cdc.MustUnmarshal(kvA.Value, &applicantA)
			cdc.MustUnmarshal(kvB.Value, &applicantB)
			return fmt.Sprintf("%v\n%v", applicantA, applicantB)

		case bytes.Equal(kvA.Key[:1], plasticcredit.CreditTypeKey):
			var creditTypeA, creditTypeB plasticcredit.CreditType
			cdc.MustUnmarshal(kvA.Value, &creditTypeA)
			cdc.MustUnmarshal(kvB.Value, &creditTypeB)
			return fmt.Sprintf("%v\n%v", creditTypeA, creditTypeB)

		case bytes.Equal(kvA.Key[:1], plasticcredit.ProjectKey):
			var projectA, projectB plasticcredit.Project
			cdc.MustUnmarshal(kvA.Value, &projectA)
			cdc.MustUnmarshal(kvB.Value, &projectB)
			return fmt.Sprintf("%v\n%v", projectA, projectB)

		case bytes.Equal(kvA.Key[:1], plasticcredit.CreditCollectionKey):
			var creditCollectionA, creditCollectionB plasticcredit.CreditCollection
			cdc.MustUnmarshal(kvA.Value, &creditCollectionA)
			cdc.MustUnmarshal(kvB.Value, &creditCollectionB)
			return fmt.Sprintf("%v\n%v", creditCollectionA, creditCollectionB)

		case bytes.Equal(kvA.Key[:1], plasticcredit.CreditBalanceKey):
			var creditBalanceA, creditBalanceB plasticcredit.CreditBalance
			cdc.MustUnmarshal(kvA.Value, &creditBalanceA)
			cdc.MustUnmarshal(kvB.Value, &creditBalanceB)
			return fmt.Sprintf("%v\n%v", creditBalanceA, creditBalanceB)

		default:
			panic(fmt.Sprintf("invalid plasticcredit key %X", kvA.Key))
		}
	}
}
