#!/bin/bash

# Good parts of this script is lifted off of the validator Polkachu's typical state_sync setup script
# Example: https://polkachu.com/state_sync/empower

if [ -z "$1" ]; then
    echo "Missing STATE_SYNC_RPC"
    exit 1
fi
STATE_SYNC_RPC=$1

if [ -z "$2" ]; then
    echo "Missing STATE_SYNC_PEER"
    exit 1
fi
STATE_SYNC_PEER=$2

SNAP_RPC="${STATE_SYNC_RPC}"
PEER="${STATE_SYNC_PEER}"

LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)
BLOCK_HEIGHT=$((LATEST_HEIGHT - 2000))
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

echo SNAP_RPC: $SNAP_RPC
echo LATEST_HEIGHT: $LATEST_HEIGHT
echo BLOCK_HEIGHT: $BLOCK_HEIGHT
echo TRUST_HASH: $TRUST_HASH
echo PEER: $PEER

sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ; \
s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"$SNAP_RPC,$SNAP_RPC\"| ; \
s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\1$BLOCK_HEIGHT| ; \
s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\1\"$TRUST_HASH\"| ; \
s|^(persistent_peers[[:space:]]+=[[:space:]]+).*$|\1\"$PEER\"|" $HOME/.empowerchain/config/config.toml