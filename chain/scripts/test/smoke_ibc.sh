#!/bin/bash
set -e

make serve-ibc

source scripts/serve_env.sh

$BINARY tx ibc-transfer transfer transfer channel-0 cosmos1j0hkmu8rklcewz4g0wclxlzf4tzhlx00fe2uew 1337mpwr --home $CHAIN_DIR --node tcp://:$RPC_PORT --keyring-backend test --from alice --gas auto --gas-adjustment 1.75 --gas-prices 0.025umpwr --chain-id $CHAIN_ID --yes
sleep 10

IBC_MPWR_AMOUNT=$($IBC_CHAIN_BINARY q bank balances cosmos1j0hkmu8rklcewz4g0wclxlzf4tzhlx00fe2uew --node tcp://:$IBC_CHAIN_RPC_PORT --output json | jq -r '.balances[] | select(.denom=="ibc/776B4039A673F254B52DAF89A2DBC94E26D1C3245F2DB0A99114BBD820C597B0") | .amount')
if [ "$IBC_MPWR_AMOUNT" != 1337000000 ]; then
  echo "Error: IBC transfer not successful: $IBC_MPWR_AMOUNT"
  exit 1
fi

echo "Tests completed successfully!"

make kill-all

echo "Serve killed"