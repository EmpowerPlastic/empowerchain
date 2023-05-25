#!/bin/bash
#set -e
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

echo "Initializing $CHAIN_ID..."
$BINARY init test --home $CHAIN_DIR --chain-id=$CHAIN_ID --default-denom umpwr

echo "Adding genesis accounts..."
echo "$ALICE_MNEMONIC" | $BINARY keys add alice --home $CHAIN_DIR --recover --keyring-backend=test
echo "$BOB_MNEMONIC" | $BINARY keys add bob --home $CHAIN_DIR --recover --keyring-backend=test
echo "$VALIDATOR_MNEMONIC" | $BINARY keys add validator --home $CHAIN_DIR --recover --keyring-backend=test
echo "$EMPOWERCHAIN_RELAY_ACCOUNT" | $BINARY keys add empowerchain_relay_account --home $CHAIN_DIR --recover --keyring-backend=test

$BINARY genesis add-genesis-account $($BINARY --home $CHAIN_DIR keys show alice --keyring-backend test -a) 100000000000umpwr  --home $CHAIN_DIR
$BINARY genesis add-genesis-account $($BINARY --home $CHAIN_DIR keys show bob --keyring-backend test -a) 100000000000umpwr  --home $CHAIN_DIR
$BINARY genesis add-genesis-account $($BINARY --home $CHAIN_DIR keys show validator --keyring-backend test -a) 100000000000umpwr  --home $CHAIN_DIR
$BINARY genesis add-genesis-account $($BINARY --home $CHAIN_DIR keys show empowerchain_relay_account --keyring-backend test -a) 100000000000umpwr  --home $CHAIN_DIR

$BINARY genesis gentx validator 7000000000umpwr --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test
$BINARY genesis collect-gentxs --home $CHAIN_DIR

sed -i -e 's/stake/umpwr/g' $CHAIN_DIR/config/genesis.json
sed -i -e 's/"voting_period": "172800s"/"voting_period": "30s"/g' $CHAIN_DIR/config/genesis.json

echo "Changing defaults and ports in app.toml and config.toml files..."
sed -i -e 's#"tcp://0.0.0.0:26656"#"tcp://0.0.0.0:'"$P2P_PORT"'"#g' $CHAIN_DIR/config/config.toml
sed -i -e 's#"tcp://127.0.0.1:26657"#"tcp://0.0.0.0:'"$RPC_PORT"'"#g' $CHAIN_DIR/config/config.toml
sed -i -e 's/timeout_commit = "5s"/timeout_commit = "1s"/g' $CHAIN_DIR/config/config.toml
sed -i -e 's/timeout_propose = "3s"/timeout_propose = "1s"/g' $CHAIN_DIR/config/config.toml
sed -i -e 's/index_all_keys = false/index_all_keys = true/g' $CHAIN_DIR/config/config.toml
sed -i -e 's/enable = false/enable = true/g' $CHAIN_DIR/config/app.toml
sed -i -e 's/swagger = false/swagger = true/g' $CHAIN_DIR/config/app.toml
sed -i -e 's#"tcp://0.0.0.0:1317"#"tcp://0.0.0.0:'"$REST_PORT"'"#g' $CHAIN_DIR/config/app.toml
sed -i -e 's#":8080"#":'"$ROSETTA_PORT"'"#g' $CHAIN_DIR/config/app.toml
sed -i -e 's/enable-unsafe-cors = false/enable-unsafe-cors = true/g' $CHAIN_DIR/config/app.toml
sed -i -e 's/enabled-unsafe-cors = false/enable-unsafe-cors = true/g' $CHAIN_DIR/config/app.toml
sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"0.025umpwr\"/" $CHAIN_DIR/config/app.toml


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
