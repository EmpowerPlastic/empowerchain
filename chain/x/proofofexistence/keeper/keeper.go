package keeper

import (
	"encoding/hex"

	"github.com/cosmos/cosmos-sdk/codec"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/empowerchain/empowerchain/x/proofofexistence/types"
)

const (
	ProofStoreKeyPrefix = "Proof/value/"
)

type Keeper struct {
	cdc      codec.BinaryCodec
	storeKey storetypes.StoreKey
}

func NewKeeper(cdc codec.BinaryCodec, storeKey storetypes.StoreKey) Keeper {
	return Keeper{
		cdc:      cdc,
		storeKey: storeKey,
	}
}

func (k Keeper) InitGenesis(ctx sdk.Context, genState types.GenesisState) error {
	// Set all the proof
	for _, elem := range genState.ProofList {
		hash, err := hex.DecodeString(elem.Hash)
		if err != nil {
			return err
		}

		_, err = sdk.AccAddressFromBech32(elem.Metadata.Creator)
		if err != nil {
			return err
		}

		if err := k.setProof(ctx, hash, *elem.Metadata); err != nil {
			return err
		}
	}

	return nil
}

func (k Keeper) ExportGenesis(ctx sdk.Context) (*types.GenesisState, error) {
	genesis := types.DefaultGenesisState()

	proofMap, err := k.getAllProof(ctx)
	if err != nil {
		return nil, err
	}

	for hash, metadata := range proofMap {
		genesis.ProofList = append(genesis.ProofList, types.Proof{Hash: hash, Metadata: &types.ProofMetadata{
			Timestamp: metadata.Timestamp,
			Creator:   metadata.Creator,
		}})
	}

	return genesis, nil
}

func KeyPrefix(p string) []byte {
	return []byte(p)
}
