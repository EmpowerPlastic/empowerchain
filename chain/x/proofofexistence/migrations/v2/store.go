package v2

import (
	"encoding/base64"

	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	v1 "github.com/empowerchain/empowerchain/x/proofofexistence/migrations/v1"
	"github.com/empowerchain/empowerchain/x/proofofexistence/types"
)

func MigrateStore(ctx sdk.Context, storeKey storetypes.StoreKey, cdc codec.BinaryCodec) error {
	store := prefix.NewStore(ctx.KVStore(storeKey), []byte(v1.ProofKeyPrefix))
	return migrateProofs(store, cdc)
}

func migrateProofs(store sdk.KVStore, cdc codec.BinaryCodec) error {
	iter := store.Iterator(nil, nil)

	for ; iter.Valid(); iter.Next() {
		var oldProof v1.Proof
		if err := cdc.Unmarshal(iter.Value(), &oldProof); err != nil {
			return err
		}

		hash, err := base64.StdEncoding.DecodeString(oldProof.Hash)
		if err != nil {
			return err
		}

		proofMetadata := types.ProofMetadata{
			Timestamp: oldProof.Timestamp,
			Creator:   oldProof.Reporter,
		}
		b, err := cdc.Marshal(&proofMetadata)
		if err != nil {
			return err
		}

		store.Delete(iter.Key())
		store.Set(hash, b)
	}

	return nil
}
