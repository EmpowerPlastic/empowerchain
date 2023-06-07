#!/bin/bash
set -e

source scripts/serve_env.sh

WASM_FILE=../cosmwasm/artifacts/plastic_credit_marketplace.wasm

if [ ! -f "$WASM_FILE" ]; then
    echo "$WASM_FILE does not exist. Run 'earthly -P +build-optimized' in the cosmwasm directory first."
fi

STORE_TX_HASH=$($BINARY tx wasm store $WASM_FILE --from alice --home $CHAIN_DIR --node tcp://:$RPC_PORT --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75 --chain-id $CHAIN_ID --yes --output json | jq -r ".txhash")
sleep 5
CODE_ID=$($BINARY q tx $STORE_TX_HASH --output json | jq -r '.events[] | select(.type=="store_code") | .attributes[] | select(.key=="code_id") | .value')
sleep 5
INSTANTIATE_TX_HASH=$($BINARY tx wasm instantiate $CODE_ID '{}' --label marketplace --admin empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7 --from alice --home $CHAIN_DIR --node tcp://:$RPC_PORT --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75 --chain-id $CHAIN_ID --yes --output json | jq -r ".txhash")
sleep 5
CONTRACT_ADDRESS=$($BINARY q tx $INSTANTIATE_TX_HASH --output json | jq -r '.events[] | select(.type=="instantiate") | .attributes[] | select(.key=="_contract_address") | .value')
sleep 5

$BINARY q wasm contract $CONTRACT_ADDRESS

echo "Contract address: $CONTRACT_ADDRESS"