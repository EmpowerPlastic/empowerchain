#!/bin/bash
set -eE -o functrace

failure() {
  local lineno=$1
  local msg=$2
  echo "Failed at $lineno: $msg"
}
trap 'failure ${LINENO} "$BASH_COMMAND"' ERR

source scripts/serve_env.sh

# Stop if it is already running
if pgrep -x "$BINARY" >/dev/null; then
    echo "Terminating $BINARY..."
    pkill $BINARY
    sleep 5 # To avoid removing the folder to be any issue
fi

if [ -d $CHAIN_DIR ]; then
  echo "Removing previous data..."
  rm -rf $CHAIN_DIR &> /dev/null
fi

# Add directories for chain(s), exit if an error occurs
if ! mkdir -p $CHAIN_DIR 2>/dev/null; then
    echo "Failed to create chain folder. Aborting..."
    exit 1
fi

make install # To make sure we use the latest version
empowerd init test --home $CHAIN_DIR

GENESIS_BASE=$CHAIN_DIR/config/genesis-base.json
$BINARY genesis mainnet emp-42 $(date -u -d "$(date -u +'%Y-%m-%d') 00:00:00" +"%Y-%m-%dT%H:%M:%SZ") $GENESIS_BASE

echo "$VALIDATOR_MNEMONIC" | $BINARY keys add validator --home $CHAIN_DIR --recover --keyring-backend=test

$BINARY genesis single-validator $GENESIS_BASE validator $(jq -r .pub_key.value $CHAIN_DIR/config/priv_validator_key.json)
cp $GENESIS_BASE.generated $CHAIN_DIR/config/genesis.json

echo "Starting $CHAIN_ID in $CHAIN_DIR..."
echo "Creating log file at $LOG_FILE_PATH"
$BINARY start --log_format json --home $CHAIN_DIR --pruning=nothing --rpc.unsafe --grpc.address="0.0.0.0:$GRPC_PORT" --grpc-web.address="0.0.0.0:$GRPC_WEB" --state-sync.snapshot-interval 10 --state-sync.snapshot-keep-recent 2 > $LOG_FILE_PATH 2>&1 &

sleep 3

echo ""
echo "----------- Config -------------"
echo "RPC: tcp://0.0.0.0:$RPC_PORT"
echo "REST: tcp://0.0.0.0:$REST_PORT"
echo "chain-id: $CHAIN_ID"
echo ""

if ! $BINARY --home $CHAIN_DIR --node tcp://:$RPC_PORT status; then
  echo "Chain failed to start"
  exit 1
fi

echo "-------- Chain started! --------"
