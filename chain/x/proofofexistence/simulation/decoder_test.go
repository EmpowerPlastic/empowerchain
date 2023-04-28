package simulation_test

import (
	"fmt"
	"testing"
	"time"

	"github.com/cosmos/cosmos-sdk/types/kv"
	"github.com/stretchr/testify/require"

	"github.com/EmpowerPlastic/empowerchain/app"
	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence"
	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence/simulation"
)

func TestNewDecodeStore(t *testing.T) {
	cdc := app.MakeEncodingConfig().Codec
	decodeStore := simulation.NewDecodeStore(cdc)
	timestamp, err := time.Parse("2006-01-02 15:04:05", "2020-01-01 00:00:00")
	require.NoError(t, err)
	proofMetadata := proofofexistence.ProofMetadata{
		Timestamp: timestamp,
		Creator:   "empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7",
	}

	testCases := map[string]struct {
		kvPair        kv.Pair // we use the same kv pair as both a and b
		expectErr     bool
		expectedValue string
	}{
		"proofMetadata": {
			kvPair: kv.Pair{
				Key:   proofofexistence.ProofStorePrefixKey,
				Value: cdc.MustMarshal(&proofMetadata),
			},
			expectErr:     false,
			expectedValue: fmt.Sprintf("%v\n%v", proofMetadata, proofMetadata),
		},
	}

	for name, tc := range testCases {
		t.Run(name, func(t *testing.T) {
			if tc.expectErr {
				require.Panics(t, func() { decodeStore(tc.kvPair, tc.kvPair) })
			} else {
				require.Equal(t, tc.expectedValue, decodeStore(tc.kvPair, tc.kvPair))
			}
		})
	}
}
