#!/bin/bash
set -eE -o functrace
failure() {
  local lineno=$1
  local msg=$2
  echo "Failed at $lineno: $msg"
}
trap 'failure ${LINENO} "$BASH_COMMAND"' ERR

source scripts/serve_env.sh

echo "Removing previous data..."
rm -rf $SECONDARY_NODE_CHAIN_DIR &> /dev/null

# Add directories for chain(s), exit if an error occurs
if ! mkdir -p $SECONDARY_NODE_CHAIN_DIR 2>/dev/null; then
    echo "Failed to create chain folder. Aborting..."
    exit 1
fi

echo "Initializing secondary node $CHAIN_ID..."
$BINARY init secondary-test --home $SECONDARY_NODE_CHAIN_DIR --chain-id=$CHAIN_ID --default-denom umpwr

echo "Changing defaults and ports in app.toml and config.toml files..."
sed -i -e 's#"tcp://0.0.0.0:26656"#"tcp://0.0.0.0:'"$SECONDARY_NODE_P2P_PORT"'"#g' $SECONDARY_NODE_CHAIN_DIR/config/config.toml
sed -i -e 's#"tcp://127.0.0.1:26657"#"tcp://0.0.0.0:'"$SECONDARY_NODE_RPC_PORT"'"#g' $SECONDARY_NODE_CHAIN_DIR/config/config.toml
sed -i -e 's/timeout_commit = "5s"/timeout_commit = "1s"/g' $SECONDARY_NODE_CHAIN_DIR/config/config.toml
sed -i -e 's/timeout_propose = "3s"/timeout_propose = "1s"/g' $SECONDARY_NODE_CHAIN_DIR/config/config.toml
sed -i -e 's/index_all_keys = false/index_all_keys = true/g' $SECONDARY_NODE_CHAIN_DIR/config/config.toml
sed -i -e 's/enable = false/enable = true/g' $SECONDARY_NODE_CHAIN_DIR/config/app.toml
sed -i -e 's/swagger = false/swagger = true/g' $SECONDARY_NODE_CHAIN_DIR/config/app.toml
sed -i -e 's#"tcp://0.0.0.0:1317"#"tcp://0.0.0.0:'"$SECONDARY_NODE_REST_PORT"'"#g' $SECONDARY_NODE_CHAIN_DIR/config/app.toml
sed -i -e 's#":8080"#":'"$SECONDARY_NODE_ROSETTA_PORT"'"#g' $SECONDARY_NODE_CHAIN_DIR/config/app.toml
sed -i -e 's/enable-unsafe-cors = false/enable-unsafe-cors = true/g' $SECONDARY_NODE_CHAIN_DIR/config/app.toml
sed -i -e 's/enabled-unsafe-cors = false/enable-unsafe-cors = true/g' $SECONDARY_NODE_CHAIN_DIR/config/app.toml
sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"0.025umpwr\"/" $SECONDARY_NODE_CHAIN_DIR/config/app.toml

cp $CHAIN_DIR/config/genesis.json $SECONDARY_NODE_CHAIN_DIR/config/genesis.json
$BINARY tendermint unsafe-reset-all --home $SECONDARY_NODE_CHAIN_DIR

seeds=""
peers="$($BINARY tendermint show-node-id --home $CHAIN_DIR)@127.0.0.1:$P2P_PORT"
sed -i -e 's|^seeds *=.*|seeds = "'$seeds'"|; s|^persistent_peers *=.*|persistent_peers = "'$peers'"|' $SECONDARY_NODE_CHAIN_DIR/config/config.toml
sed -i -e "s%^indexer *=.*%indexer = \"null\"%; " $SECONDARY_NODE_CHAIN_DIR/config/config.toml

LATEST_HEIGHT=$(curl -s "http://0.0.0.0:$RPC_PORT/block" | jq -r .result.block.header.height)
BLOCK_HEIGHT=$((LATEST_HEIGHT - 10))
TRUST_HASH=$(curl -s "http://0.0.0.0:$RPC_PORT/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

echo $LATEST_HEIGHT
echo $BLOCK_HEIGHT
echo $TRUST_HASH

sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ; \

s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"http://127.0.0.1:$RPC_PORT,http://127.0.0.1:$RPC_PORT\"| ; \

s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\1$BLOCK_HEIGHT| ; \

s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\1\"$TRUST_HASH\"| ; \

s|^(seeds[[:space:]]+=[[:space:]]+).*$|\1\"\"|" $SECONDARY_NODE_CHAIN_DIR/config/config.toml


exit 0

#echo "Starting secondary node $CHAIN_ID in $SECONDARY_NODE_CHAIN_DIR..."
#echo "Creating log file at $SECONDARY_NODE_LOG_FILE_PATH"
#echo "$BINARY start --log_level trace --log_format json --home $SECONDARY_NODE_CHAIN_DIR --pruning=nothing --rpc.unsafe --grpc.address="0.0.0.0:$SECONDARY_NODE_GRPC_PORT" --grpc-web.address="0.0.0.0:$SECONDARY_NODE_GRPC_WEB" > $SECONDARY_NODE_LOG_FILE_PATH 2>&1 &"

sleep 3

if ! $BINARY --home $SECONDARY_NODE_CHAIN_DIR --node tcp://:$SECONDARY_NODE_RPC_PORT status; then
  echo "Secondary node failed to start"
fi

echo ""
echo "----------- Config -------------"
echo "RPC: tcp://0.0.0.0:$SECONDARY_NODE_RPC_PORT"
echo "REST: tcp://0.0.0.0:$SECONDARY_NODE_REST_PORT"
echo "chain-id: $CHAIN_ID"
echo ""
echo "-------- Secondary Node started! --------"
