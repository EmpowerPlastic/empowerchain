#!/bin/bash

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

# Send SoftwareUpgrade proposal - Upgrade Name: v2
$V1_BINARY tx gov submit-proposal scripts/upgrade_proposal_v2.json --from validator --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test

sleep 5

# Deposit for the proposal - Proposal ID: 1
$V1_BINARY tx gov deposit 1 10000000umpwr --from validator --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test

sleep 5

# Vote for the proposal
$V1_BINARY tx gov vote 1 yes --from validator --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test

# Query proposal
$V1_BINARY q gov proposal 1

sleep 5

$V1_BINARY --home $CHAIN_DIR tx proofofexistence create ipZS+n+DPPkPp+mQRdHJLBlqvQGsevJhXhMHgOT/iO0= --from alice --keyring-backend test --chain-id $CHAIN_ID --yes