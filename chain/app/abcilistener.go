package app

import (
	"context"
	"sync"

	store "github.com/cosmos/cosmos-sdk/store/types"
	abci "github.com/tendermint/tendermint/abci/types"
)

type ABCIListener struct{}

func (l *ABCIListener) Stream(wg *sync.WaitGroup) error {
	return nil
}

func (l *ABCIListener) Listeners() map[store.StoreKey][]store.WriteListener {
	return nil
}

func (l *ABCIListener) Close() error {
	return nil
}

func (l *ABCIListener) ListenBeginBlock(ctx context.Context, req abci.RequestBeginBlock, res abci.ResponseBeginBlock) error {
	return nil
}

func (l *ABCIListener) ListenEndBlock(ctx context.Context, req abci.RequestEndBlock, res abci.ResponseEndBlock) error {
	return nil
}

func (l *ABCIListener) ListenDeliverTx(ctx context.Context, req abci.RequestDeliverTx, res abci.ResponseDeliverTx) error {
	return nil
}

func (l *ABCIListener) ListenCommit(ctx context.Context, res abci.ResponseCommit) error {
	return nil
}
