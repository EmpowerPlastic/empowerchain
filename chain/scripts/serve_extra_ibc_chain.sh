#!/bin/bash
set -eE -o functrace
failure() {
  local lineno=$1
  local msg=$2
  echo "Failed at $lineno: $msg"
}
trap 'failure ${LINENO} "$BASH_COMMAND"' ERR

BINARY=gaiad
CHAIN_ID=gaia-local-1
ROOT_DIR=/tmp

CHAIN_DIR=$ROOT_DIR/$CHAIN_ID
LOG_FILE_PATH=$CHAIN_DIR/$CHAIN_ID.log
# cosmos1j0hkmu8rklcewz4g0wclxlzf4tzhlx00fe2uew
KAARE_MNEMONIC="skate height year measure reunion toast onion canal cupboard innocent dash develop spend pottery wine nest orchard vibrant zebra climb cricket carbon unhappy color"
# cosmos1yza3nu6qz8kwn67tgd395s8yedpq45vfqa79fs
KENT_ROGER_MNEMONIC="name rose pill armor surprise position vague suggest rescue april evidence all silly original dignity wet seven lazy slogan smoke genre cost faith royal"
# cosmos16vrj6an5f7pl0g8gl8qxex7rts2vucq4ujcx4f
BERTHILD_VALIDATOR_MNEMONIC="traffic occur lens age swim tilt canvas train stairs leg base inmate vessel trigger abstract thunder whale resist summer popular nature move original tired"
# cosmos1sl3mpymvv70z5xyxfe7fvlqqjvm4v4hlh8tapg
GAIA_RELAY_ACCOUNT="result impulse book sand wedding mass top ritual swing assault claw mind outside hand kind detect gasp large radar relief wool tank taxi item"
P2P_PORT=36656
RPC_PORT=36657
REST_PORT=2317
ROSETTA_PORT=9080
GRPC_PORT=9090
GRPC_WEB=9091

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
$BINARY init test --home $CHAIN_DIR --chain-id=$CHAIN_ID

echo "Adding genesis accounts..."
echo "$KAARE_MNEMONIC" | $BINARY keys add kaare --home $CHAIN_DIR --recover --keyring-backend=test
echo "$KENT_ROGER_MNEMONIC" | $BINARY keys add kent_roger --home $CHAIN_DIR --recover --keyring-backend=test
echo "$BERTHILD_VALIDATOR_MNEMONIC" | $BINARY keys add berthild_validator --home $CHAIN_DIR --recover --keyring-backend=test
echo "$GAIA_RELAY_ACCOUNT" | $BINARY keys add gaia_relay_account --home $CHAIN_DIR --recover --keyring-backend=test

$BINARY add-genesis-account $($BINARY --home $CHAIN_DIR keys show kaare --keyring-backend test -a) 100000000000uatom  --home $CHAIN_DIR
$BINARY add-genesis-account $($BINARY --home $CHAIN_DIR keys show kent_roger --keyring-backend test -a) 100000000000uatom  --home $CHAIN_DIR
$BINARY add-genesis-account $($BINARY --home $CHAIN_DIR keys show berthild_validator --keyring-backend test -a) 100000000000uatom  --home $CHAIN_DIR
$BINARY add-genesis-account $($BINARY --home $CHAIN_DIR keys show gaia_relay_account --keyring-backend test -a) 100000000000uatom  --home $CHAIN_DIR

$BINARY gentx berthild_validator 7000000000uatom --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test
$BINARY collect-gentxs --home $CHAIN_DIR

sed -i -e 's/stake/uatom/g' $CHAIN_DIR/config/genesis.json
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
sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"0.025uatom\"/" $CHAIN_DIR/config/app.toml


echo "Starting $CHAIN_ID in $CHAIN_DIR..."
echo "Creating log file at $LOG_FILE_PATH"
$BINARY start --log_format json --home $CHAIN_DIR --pruning=nothing --rpc.unsafe --grpc.address="0.0.0.0:$GRPC_PORT" --grpc-web.address="0.0.0.0:$GRPC_WEB" --state-sync.snapshot-interval 10 --state-sync.snapshot-keep-recent 2 > $LOG_FILE_PATH 2>&1 &

sleep 3

if ! $BINARY --home $CHAIN_DIR --node tcp://:$RPC_PORT status; then
  echo "Chain failed to start"
fi

echo ""
echo "----------- Config -------------"
echo "RPC: tcp://0.0.0.0:$RPC_PORT"
echo "REST: tcp://0.0.0.0:$REST_PORT"
echo "chain-id: $CHAIN_ID"
echo ""
echo "-------- Chain started! --------"