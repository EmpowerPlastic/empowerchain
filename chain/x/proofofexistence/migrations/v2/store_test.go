package v2_test

import (
	"encoding/base64"
	"encoding/hex"
	"fmt"
	"testing"
	"time"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	"github.com/cosmos/cosmos-sdk/testutil"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/app"
	"github.com/empowerchain/empowerchain/app/params"
	"github.com/empowerchain/empowerchain/testutil/sample"
	v1 "github.com/empowerchain/empowerchain/x/proofofexistence/migrations/v1"
	v2 "github.com/empowerchain/empowerchain/x/proofofexistence/migrations/v2"
	"github.com/empowerchain/empowerchain/x/proofofexistence/types"
	"github.com/stretchr/testify/require"
	"github.com/tendermint/tendermint/crypto"
)

const testData = "This is just some random test data to be hashed. 42."

func TestMigrateStore(t *testing.T) {
	cdc := params.MakeEncodingConfig(app.ModuleBasics).Codec
	storeKey := sdk.NewKVStoreKey("proofofexistence")
	ctx := testutil.DefaultContext(storeKey, sdk.NewTransientStoreKey("transient_test"))
	store := prefix.NewStore(ctx.KVStore(storeKey), []byte(v1.ProofKeyPrefix))

	oldTestHash := crypto.Sha256([]byte(testData))
	oldTestHashBase64 := base64.StdEncoding.EncodeToString(oldTestHash)
	fromOldTests := v1.Proof{
		Hash:      oldTestHashBase64,
		Timestamp: time.Unix(1657454750, 0).UTC(),
		Reporter:  sample.AccAddress(),
	}
	b, err := cdc.Marshal(&fromOldTests)
	require.NoError(t, err)
	store.Set(v1.ProofKey(fromOldTests.Hash), b)

	fromTestNet := v1.Proof{
		Hash:      "ipZS+n+DPPkPp+mQRdHJLBlqvQGsevJhXhMHgOT/iO0=",
		Timestamp: time.UnixMilli(1665156498888).UTC(),
		Reporter:  "empower13rd4u8fqry9watezvnh4lgxypu3hklmfrs2gd0",
	}
	b, err = cdc.Marshal(&fromTestNet)
	require.NoError(t, err)
	store.Set(v1.ProofKey(fromTestNet.Hash), b)

	// Test it!
	require.NoError(t, v2.MigrateStore(ctx, storeKey, cdc))

	numberOfItems := 0
	iter := store.Iterator(nil, nil)
	for ; iter.Valid(); iter.Next() {
		numberOfItems++
		var newProof types.ProofMetadata
		require.NoError(t, cdc.Unmarshal(iter.Value(), &newProof))

		switch numberOfItems {
		case 1:
			newSha256hex := hex.EncodeToString(oldTestHash)
			keyToSha256hex := hex.EncodeToString(iter.Key())
			require.Equal(t, oldTestHash, iter.Key())
			require.Equal(t, newSha256hex, keyToSha256hex)
			require.Equal(t, fromOldTests.Timestamp.UnixMilli(), newProof.Timestamp.UnixMilli())
			require.Equal(t, fromOldTests.Reporter, newProof.Creator)
		case 2:
			oldHash, err := base64.StdEncoding.DecodeString(fromTestNet.Hash)
			require.NoError(t, err)
			oldAsSha256Hex := hex.EncodeToString(oldHash)
			fmt.Println(oldAsSha256Hex)
			keyToSha256hex := hex.EncodeToString(iter.Key())
			require.Equal(t, oldHash, iter.Key())
			require.Equal(t, oldAsSha256Hex, keyToSha256hex)
			require.Equal(t, fromTestNet.Timestamp.UnixMilli(), newProof.Timestamp.UnixMilli())
			require.Equal(t, fromTestNet.Reporter, newProof.Creator)
		}
	}
	require.Equal(t, 2, numberOfItems)
}
