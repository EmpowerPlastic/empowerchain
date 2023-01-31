#!/bin/bash

# Inspiration taken from https://medium.com/web3-surfers/cosmos-dev-series-cosmos-sdk-based-blockchain-upgrade-b5e99181554c

set -eE -o functrace

failure() {
  local lineno=$1
  local msg=$2
  echo "Failed at $lineno: $msg"
}
trap 'failure ${LINENO} "$BASH_COMMAND"' ERR

source scripts/serve_env.sh
V1_BINARY_FOLDER=$ROOT_DIR/binary_empowerd_v1
V1_BINARY=$V1_BINARY_FOLDER/$BINARY

TMP_COSMOVISOR_DIR=$ROOT_DIR/cosmovisor

export DAEMON_HOME=$CHAIN_DIR
export DAEMON_NAME=$BINARY
export DAEMON_ALLOW_DOWNLOAD_BINARIES=false
export DAEMON_RESTART_AFTER_UPGRADE=true

# Stop if it is already running
if pgrep -x "$BINARY" >/dev/null; then
    echo "Terminating $BINARY..."
    killall $BINARY
fi


# Stop if it is already running
if pgrep -x "cosmovisor" >/dev/null; then
    echo "Terminating cosmovisor..."
    killall cosmovisor
fi

echo "Removing previous data..."
rm -rf $TMP_COSMOVISOR_DIR &> /dev/null
rm -rf $DAEMON_HOME &> /dev/null

mkdir -p $V1_BINARY_FOLDER
if [[ ! -f $V1_BINARY ]]
then
    echo "empowerd v1 does not exist, downloading"
    wget https://github.com/EmpowerPlastic/empowerchain/releases/download/v0.0.1/empowerd-v0.0.1-amd64 -O "$V1_BINARY"
    chmod +x $V1_BINARY
fi

mkdir -p $TMP_COSMOVISOR_DIR
mkdir -p $TMP_COSMOVISOR_DIR/genesis/bin
mkdir -p $TMP_COSMOVISOR_DIR/upgrades/v2/bin
cp $V1_BINARY $TMP_COSMOVISOR_DIR/genesis/bin/

make build
cp ./build/empowerd $TMP_COSMOVISOR_DIR/upgrades/v2/bin/

mkdir -p $DAEMON_HOME
$V1_BINARY init test --home $CHAIN_DIR --chain-id=$CHAIN_ID --default-denom umpwr
echo "Adding genesis accounts..."
echo "$ALICE_MNEMONIC" | $V1_BINARY keys add alice --home $CHAIN_DIR --recover --keyring-backend=test
echo "$BOB_MNEMONIC" | $V1_BINARY keys add bob --home $CHAIN_DIR --recover --keyring-backend=test
echo "$VALIDATOR_MNEMONIC" | $V1_BINARY keys add validator --home $CHAIN_DIR --recover --keyring-backend=test
$V1_BINARY add-genesis-account $($V1_BINARY --home $CHAIN_DIR keys show alice --keyring-backend test -a) 100000000000umpwr  --home $CHAIN_DIR
$V1_BINARY add-genesis-account $($V1_BINARY --home $CHAIN_DIR keys show bob --keyring-backend test -a) 100000000000umpwr  --home $CHAIN_DIR
$V1_BINARY add-genesis-account $($V1_BINARY --home $CHAIN_DIR keys show validator --keyring-backend test -a) 100000000000umpwr  --home $CHAIN_DIR
$V1_BINARY gentx validator 7000000000umpwr --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test
$V1_BINARY collect-gentxs --home $CHAIN_DIR
sed -i -e 's/stake/umpwr/g' $CHAIN_DIR/config/genesis.json
sed -i -e 's/"voting_period": "172800s"/"voting_period": "30s"/g' $CHAIN_DIR/config/genesis.json

cp -R $TMP_COSMOVISOR_DIR $DAEMON_HOME/
cosmovisor run start --home $DAEMON_HOME