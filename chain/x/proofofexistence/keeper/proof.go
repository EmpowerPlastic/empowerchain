package keeper

import (
	"encoding/hex"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/empowerchain/empowerchain/x/proofofexistence/types"
)

// CreateNewProof create a new proof from its hash
func (k Keeper) CreateNewProof(ctx sdk.Context, sha256hex string, creator sdk.AccAddress) error {
	if sha256hex == "" {
		return sdkerrors.Wrap(types.ErrInvalidProof, "sha256hex cannot be empty")
	}

	if sdk.VerifyAddressFormat(creator) != nil {
		return types.ErrInvalidCreator
	}

	proofMetadata := types.ProofMetadata{
		Timestamp: ctx.BlockTime(),
		Creator:   creator.String(),
	}

	hash, err := hex.DecodeString(sha256hex)
	if err != nil {
		return sdkerrors.Wrapf(types.ErrInvalidProof, "sha256hex is %s not hex", sha256hex)
	}

	if len(hash) != 32 {
		return sdkerrors.Wrapf(types.ErrInvalidProof, "sha256hex %s is not SHA-256", sha256hex)
	}

	store := k.getProofStore(ctx)
	if store.Has(hash) {
		return sdkerrors.Wrap(types.ErrHashExists, sha256hex)
	}

	return k.setProof(ctx, hash, proofMetadata)
}

func (k Keeper) setProof(ctx sdk.Context, hash []byte, proofMetadata types.ProofMetadata) error {
	store := k.getProofStore(ctx)

	b, err := k.cdc.Marshal(&proofMetadata)
	if err != nil {
		return err
	}
	store.Set(hash, b)

	return nil
}

func (k Keeper) getAllProof(ctx sdk.Context) (map[string]types.ProofMetadata, error) {
	proofs := make(map[string]types.ProofMetadata)
	store := k.getProofStore(ctx)
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var md types.ProofMetadata
		if err := k.cdc.Unmarshal(iterator.Value(), &md); err != nil {
			return nil, err
		}
		hash := iterator.Key()
		sha256hex := hex.EncodeToString(hash)
		proofs[sha256hex] = md
	}

	return proofs, nil
}

func (k Keeper) GetProof(ctx sdk.Context, sha256hex string) (types.ProofMetadata, error) {
	store := k.getProofStore(ctx)

	hash, err := hex.DecodeString(sha256hex)
	if err != nil {
		return types.ProofMetadata{}, sdkerrors.Wrapf(types.ErrInvalidProof, "sha256hex is %s not hex", sha256hex)
	}

	bz := store.Get(hash)
	if bz == nil {
		return types.ProofMetadata{}, sdkerrors.Wrap(types.ErrProofNotFound, sha256hex)
	}

	var md types.ProofMetadata
	if err := k.cdc.Unmarshal(bz, &md); err != nil {
		return types.ProofMetadata{}, err
	}

	return md, nil
}

func (k Keeper) getProofStore(ctx sdk.Context) prefix.Store {
	store := ctx.KVStore(k.storeKey)
	proofStore := prefix.NewStore(store, KeyPrefix(ProofStoreKeyPrefix))

	return proofStore
}
