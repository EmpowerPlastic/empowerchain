#!/bin/bash
set -eE -o functrace
failure() {
  local lineno=$1
  local msg=$2
  echo "Failed at $lineno: $msg"
}
trap 'failure ${LINENO} "$BASH_COMMAND"' ERR

make kill-all

source scripts/serve_env.sh

if [ -d $RELAYER_HOME_DIR ]; then
  echo "Removing relayer previous data..."
  rm -rf $RELAYER_HOME_DIR &> /dev/null
fi

mkdir -p $RELAYER_HOME_DIR
mkdir -p $RELAYER_HOME_DIR/config
cp scripts/rly-config.yaml $RELAYER_HOME_DIR/config/config.yaml

# Serve empowerchian
make serve

# Serve IBC chain (gaiad)

# Stop if it is already running
if pgrep -x "$IBC_CHAIN_BINARY" >/dev/null; then
    echo "Terminating $IBC_CHAIN_BINARY..."
    pkill $IBC_CHAIN_BINARY
    sleep 5 # To avoid removing the folder to be any issue
fi

if [ -d $IBC_CHAIN_DIR ]; then
  echo "Removing previous data..."
  rm -rf $IBC_CHAIN_DIR &> /dev/null
fi

# Add directories for chain(s), exit if an error occurs
if ! mkdir -p $IBC_CHAIN_DIR 2>/dev/null; then
    echo "Failed to create chain folder. Aborting..."
    exit 1
fi

echo "Initializing $IBC_CHAIN_ID..."
$IBC_CHAIN_BINARY init test --home $IBC_CHAIN_DIR --chain-id=$IBC_CHAIN_ID

echo "Adding genesis accounts..."
echo "$KAARE_MNEMONIC" | $IBC_CHAIN_BINARY keys add kaare --home $IBC_CHAIN_DIR --recover --keyring-backend=test
echo "$KENT_ROGER_MNEMONIC" | $IBC_CHAIN_BINARY keys add kent_roger --home $IBC_CHAIN_DIR --recover --keyring-backend=test
echo "$BERTHILD_VALIDATOR_MNEMONIC" | $IBC_CHAIN_BINARY keys add berthild_validator --home $IBC_CHAIN_DIR --recover --keyring-backend=test
echo "$IBC_CHAIN_RELAY_ACCOUNT" | $IBC_CHAIN_BINARY keys add ibc_chain_relay_account --home $IBC_CHAIN_DIR --recover --keyring-backend=test

$IBC_CHAIN_BINARY add-genesis-account $($IBC_CHAIN_BINARY --home $IBC_CHAIN_DIR keys show kaare --keyring-backend test -a) 100000000000uatom  --home $IBC_CHAIN_DIR
$IBC_CHAIN_BINARY add-genesis-account $($IBC_CHAIN_BINARY --home $IBC_CHAIN_DIR keys show kent_roger --keyring-backend test -a) 100000000000uatom  --home $IBC_CHAIN_DIR
$IBC_CHAIN_BINARY add-genesis-account $($IBC_CHAIN_BINARY --home $IBC_CHAIN_DIR keys show berthild_validator --keyring-backend test -a) 100000000000uatom  --home $IBC_CHAIN_DIR
$IBC_CHAIN_BINARY add-genesis-account $($IBC_CHAIN_BINARY --home $IBC_CHAIN_DIR keys show ibc_chain_relay_account --keyring-backend test -a) 100000000000uatom  --home $IBC_CHAIN_DIR

$IBC_CHAIN_BINARY gentx berthild_validator 7000000000uatom --home $IBC_CHAIN_DIR --chain-id $IBC_CHAIN_ID --keyring-backend test
$IBC_CHAIN_BINARY collect-gentxs --home $IBC_CHAIN_DIR

sed -i -e 's/stake/uatom/g' $IBC_CHAIN_DIR/config/genesis.json
sed -i -e 's/"voting_period": "172800s"/"voting_period": "30s"/g' $IBC_CHAIN_DIR/config/genesis.json

echo "Changing defaults and ports in app.toml and config.toml files..."
sed -i -e 's#"tcp://0.0.0.0:26656"#"tcp://0.0.0.0:'"$IBC_CHAIN_P2P_PORT"'"#g' $IBC_CHAIN_DIR/config/config.toml
sed -i -e 's#"tcp://127.0.0.1:26657"#"tcp://0.0.0.0:'"$IBC_CHAIN_RPC_PORT"'"#g' $IBC_CHAIN_DIR/config/config.toml
sed -i -e 's/timeout_commit = "5s"/timeout_commit = "1s"/g' $IBC_CHAIN_DIR/config/config.toml
sed -i -e 's/timeout_propose = "3s"/timeout_propose = "1s"/g' $IBC_CHAIN_DIR/config/config.toml
sed -i -e 's/index_all_keys = false/index_all_keys = true/g' $IBC_CHAIN_DIR/config/config.toml
sed -i -e 's/enable = false/enable = true/g' $IBC_CHAIN_DIR/config/app.toml
sed -i -e 's/swagger = false/swagger = true/g' $IBC_CHAIN_DIR/config/app.toml
sed -i -e 's#"tcp://0.0.0.0:1317"#"tcp://0.0.0.0:'"$IBC_CHAIN_REST_PORT"'"#g' $IBC_CHAIN_DIR/config/app.toml
sed -i -e 's#":8080"#":'"$IBC_CHAIN_ROSETTA_PORT"'"#g' $IBC_CHAIN_DIR/config/app.toml
sed -i -e 's/enable-unsafe-cors = false/enable-unsafe-cors = true/g' $IBC_CHAIN_DIR/config/app.toml
sed -i -e 's/enabled-unsafe-cors = false/enable-unsafe-cors = true/g' $IBC_CHAIN_DIR/config/app.toml
sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"0.025uatom\"/" $IBC_CHAIN_DIR/config/app.toml


echo "Starting $IBC_CHAIN_ID in $IBC_CHAIN_DIR..."
echo "Creating log file at $IBC_CHAIN_LOG_FILE_PATH"
$IBC_CHAIN_BINARY start --log_format json --home $IBC_CHAIN_DIR --pruning=nothing --rpc.unsafe --grpc.address="0.0.0.0:$IBC_CHAIN_GRPC_PORT" --grpc-web.address="0.0.0.0:$IBC_CHAIN_GRPC_WEB" --state-sync.snapshot-interval 10 --state-sync.snapshot-keep-recent 2 > $IBC_CHAIN_LOG_FILE_PATH 2>&1 &

sleep 3

if ! $IBC_CHAIN_BINARY --home $IBC_CHAIN_DIR --node tcp://:$IBC_CHAIN_RPC_PORT status; then
  echo "Chain failed to start"
fi

echo ""
echo "----------- Config -------------"
echo "RPC: tcp://0.0.0.0:$IBC_CHAIN_RPC_PORT"
echo "REST: tcp://0.0.0.0:$IBC_CHAIN_REST_PORT"
echo "chain-id: $IBC_CHAIN_ID"
echo "-------- Chain started! --------"
echo ""

# Set up relayer!
rly keys restore gaia gaia-relay-account --home $RELAYER_HOME_DIR "result impulse book sand wedding mass top ritual swing assault claw mind outside hand kind detect gasp large radar relief wool tank taxi item"
rly keys restore empowerchain empowerchain-relay-account --home $RELAYER_HOME_DIR "minor fetch reward clean pepper agree online oppose enroll claw mimic stable around thrive lyrics deer unknown dutch fee enhance pact horse misery electric"

rly tx link-then-start empowerchain-gaia --home $RELAYER_HOME_DIR > $RELAYER_LOG_FILE_PATH 2>&1 &
echo ""
echo "------- Relayer starting... -------"

CONNECTION_OPEN=false
i=0
while [ $i -le 30 ]; do
  echo "Checking if connection is open..."
  CONNECTION_STATE=$($BINARY q ibc connection connections --output json | jq -r '.connections[] | select(.id == "connection-0") | .state')
  if [ "$CONNECTION_STATE" == "STATE_OPEN" ]; then
    CONNECTION_OPEN=true
    break
  fi
  sleep 3
  let i=i+1
done

if [ "$CONNECTION_OPEN" == false ]; then
  echo "After multiple attempts, the ibc relayer connections are still not open. Sorry :P"
  exit 1
fi

sleep 10 # Just for good measure
echo "------- IBC is up! -------"