package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/empowerchain/empowerchain/x/proofofexistence/types"
)

func (k Keeper) CreateProof(ctx sdk.Context, proof types.Proof) error {
	bz, err := k.cdc.Marshal(&proof)
	if err != nil {
		return sdkerrors.Wrap(err, "marshal proof failed")
	}

	store := ctx.KVStore(k.storeKey)
	key := proofStoreKey(proof.Hash)
	if store.Has(key) {
		return sdkerrors.Wrap(types.ErrHashExists, proof.Hash)
	}
	store.Set(proofStoreKey(proof.Hash), bz)
	return nil
}
