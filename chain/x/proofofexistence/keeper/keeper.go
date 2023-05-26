package keeper

import (
	"encoding/hex"

	"github.com/cosmos/cosmos-sdk/codec"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/EmpowerPlastic/empowerchain/x/proofofexistence"
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

func (k Keeper) InitGenesis(ctx sdk.Context, genState proofofexistence.GenesisState) error {
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

func (k Keeper) ExportGenesis(ctx sdk.Context) (*proofofexistence.GenesisState, error) {
	genesis := proofofexistence.DefaultGenesisState()

	proofMap := k.getAllProof(ctx)

	for hash, metadata := range proofMap {
		genesis.ProofList = append(genesis.ProofList, proofofexistence.Proof{Hash: hash, Metadata: &proofofexistence.ProofMetadata{
			Timestamp: metadata.Timestamp,
			Creator:   metadata.Creator,
		}})
	}

	return genesis, nil
}
