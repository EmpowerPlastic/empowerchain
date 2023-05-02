package simulation

import (
	"bytes"
	"fmt"

	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/types/kv"

	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence"
)

// NewDecodeStore returns a decoder function closure that unmarshal the KVPair's
// value to the corresponding plasticcredit type.
func NewDecodeStore(cdc codec.Codec) func(kvA, kvB kv.Pair) string {
	return func(kvA, kvB kv.Pair) string {
		switch {
		case bytes.Equal(kvA.Key[:1], proofofexistence.ProofStorePrefixKey):
			var proofA, proofB proofofexistence.ProofMetadata
			cdc.MustUnmarshal(kvA.Value, &proofA)
			cdc.MustUnmarshal(kvB.Value, &proofB)
			return fmt.Sprintf("%v\n%v", proofA, proofB)
		default:
			panic(fmt.Sprintf("invalid plasticcredit key %X", kvA.Key))
		}
	}
}
