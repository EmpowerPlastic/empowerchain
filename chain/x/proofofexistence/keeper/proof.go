package keeper

import (
	"encoding/hex"

	"cosmossdk.io/errors"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence"
)

// CreateNewProof create a new proof from its hash
func (k Keeper) CreateNewProof(ctx sdk.Context, sha256hex string, creator sdk.AccAddress) error {
	if sha256hex == "" {
		return errors.Wrap(proofofexistence.ErrInvalidProof, "sha256hex cannot be empty")
	}

	if sdk.VerifyAddressFormat(creator) != nil {
		return proofofexistence.ErrInvalidCreator
	}

	proofMetadata := proofofexistence.ProofMetadata{
		Timestamp: ctx.BlockTime(),
		Creator:   creator.String(),
	}

	hash, err := hex.DecodeString(sha256hex)
	if err != nil {
		return errors.Wrapf(proofofexistence.ErrInvalidProof, "sha256hex is %s not hex", sha256hex)
	}

	if len(hash) != 32 {
		return errors.Wrapf(proofofexistence.ErrInvalidProof, "sha256hex %s is not SHA-256", sha256hex)
	}

	store := k.getProofStore(ctx)
	if store.Has(hash) {
		return errors.Wrap(proofofexistence.ErrHashExists, sha256hex)
	}

	if err := k.setProof(ctx, hash, proofMetadata); err != nil {
		return err
	}

	return ctx.EventManager().EmitTypedEvent(&proofofexistence.EventCreateProof{
		Hash:    sha256hex,
		Creator: creator.String(),
	})
}

func (k Keeper) setProof(ctx sdk.Context, hash []byte, proofMetadata proofofexistence.ProofMetadata) error {
	store := k.getProofStore(ctx)

	b, err := k.cdc.Marshal(&proofMetadata)
	if err != nil {
		return err
	}
	store.Set(hash, b)

	return nil
}

func (k Keeper) getAllProof(ctx sdk.Context) map[string]proofofexistence.ProofMetadata {
	store := k.getProofStore(ctx)
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	proofs := make(map[string]proofofexistence.ProofMetadata)
	for ; iterator.Valid(); iterator.Next() {
		var md proofofexistence.ProofMetadata
		k.cdc.MustUnmarshal(iterator.Value(), &md)
		hash := iterator.Key()
		sha256hex := hex.EncodeToString(hash)
		proofs[sha256hex] = md
	}

	return proofs
}

func (k Keeper) GetProof(ctx sdk.Context, sha256hex string) (md proofofexistence.ProofMetadata, found bool, err error) {
	store := k.getProofStore(ctx)

	hash, err := hex.DecodeString(sha256hex)
	if err != nil {
		return proofofexistence.ProofMetadata{}, false, errors.Wrapf(proofofexistence.ErrInvalidProof, "sha256hex is %s not hex", sha256hex)
	}

	bz := store.Get(hash)
	if bz == nil {
		return proofofexistence.ProofMetadata{}, false, nil
	}

	k.cdc.MustUnmarshal(bz, &md)

	return md, true, nil
}

func (k Keeper) getProofStore(ctx sdk.Context) prefix.Store {
	store := ctx.KVStore(k.storeKey)
	proofStore := prefix.NewStore(store, proofofexistence.ProofStorePrefixKey)

	return proofStore
}
