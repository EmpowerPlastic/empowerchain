package keeper

import (
	"fmt"

	"github.com/cometbft/cometbft/libs/log"
	"github.com/cosmos/cosmos-sdk/codec"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"

	certificatesKeeper "github.com/EmpowerPlastic/empowerchain/x/certificates/keeper"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
)

type (
	Keeper struct {
		cdc                codec.BinaryCodec
		storeKey           storetypes.StoreKey
		memKey             storetypes.StoreKey
		distrKeeper        plasticcredit.DistrKeeper
		certificatesKeeper certificatesKeeper.Keeper
		// the address capable of executing a MsgUpdateParams message. Typically, this
		// should be the x/gov module account.
		authority string
	}
)

func NewKeeper(
	cdc codec.BinaryCodec,
	storeKey,
	memKey storetypes.StoreKey,
	distrKeeper plasticcredit.DistrKeeper,
	certificatesKeeper certificatesKeeper.Keeper,
	authority string,
) *Keeper {
	return &Keeper{
		cdc:                cdc,
		storeKey:           storeKey,
		memKey:             memKey,
		authority:          authority,
		distrKeeper:        distrKeeper,
		certificatesKeeper: certificatesKeeper,
	}
}

func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", plasticcredit.ModuleName))
}

func (k Keeper) Authority() string {
	return k.authority
}
