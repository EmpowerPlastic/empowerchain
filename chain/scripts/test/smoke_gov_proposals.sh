#!/bin/bash
set -e

make serve

source scripts/serve_env.sh

empowerd tx gov submit-proposal scripts/test/testdata/proposal_update_issuer_creator.json --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd tx gov vote 1 yes --from validator --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd q gov proposal 1
sleep 25
RESULT1=$(empowerd q gov proposal 1 -o json | jq -r ".status")
if [ "$RESULT1" != "PROPOSAL_STATUS_PASSED" ]; then
  echo "Error: Proposal not passed: $RESULT1"
  exit 1
fi
NEW_ISSUER_CREATOR=$(empowerd q plasticcredit params -o json | jq -r ".params.issuer_creator")
if [ "$NEW_ISSUER_CREATOR" != "empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7" ]; then
  echo "Error: New issuer creator was not correct, instead it was: $NEW_ISSUER_CREATOR"
  exit 1
fi

#TODO: Add some more normal (from the Cosmos SDK) proposals and check that they work OK

echo "Tests completed successfully!"

make kill-all

echo "Serve killed"