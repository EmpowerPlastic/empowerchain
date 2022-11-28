#!/bin/bash

if [ -z "$1" ]; then
    echo "Proposal path missing as first argument"
fi

source scripts/serve_env.sh

$BINARY tx gov submit-proposal "$1" --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.5

sleep 3

$BINARY tx gov vote 1 yes --from validator --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.5

sleep 1

$BINARY q gov proposal 1