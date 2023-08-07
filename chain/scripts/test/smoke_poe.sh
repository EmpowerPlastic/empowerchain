#!/bin/bash
set -e

make serve

source scripts/serve_env.sh

$BINARY --home $CHAIN_DIR --node tcp://:$RPC_PORT tx proofofexistence create-proof ffb5ff85bf44c95908f7965d9d379a378ab93bc3e9c14eb99c9980e3c41ae270 --from alice --keyring-backend test --chain-id $CHAIN_ID --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75 --yes
sleep 5
$BINARY --home $CHAIN_DIR --node tcp://:$RPC_PORT tx poe create-proof 0e20301f3eb8458c455bc5b94bd4f6059d1e8a103526bc22520a7278344541c6 --from alice --keyring-backend test --chain-id $CHAIN_ID --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75 --yes
sleep 5

$BINARY --home $CHAIN_DIR --node tcp://:$RPC_PORT q proofofexistence proof 0e20301f3eb8458c455bc5b94bd4f6059d1e8a103526bc22520a7278344541c6
$BINARY --home $CHAIN_DIR --node tcp://:$RPC_PORT q poe proof ffb5ff85bf44c95908f7965d9d379a378ab93bc3e9c14eb99c9980e3c41ae270

echo "Tests completed successfully!"

make kill-all

echo "Serve killed"