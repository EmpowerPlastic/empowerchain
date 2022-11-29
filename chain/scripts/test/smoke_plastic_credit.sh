#!/bin/bash
set -e

make serve

source scripts/serve_env.sh

empowerd tx gov submit-proposal scripts/test/testdata/proposal_create_issuer.json --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.5
sleep 5
empowerd tx gov vote 1 yes --from validator --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.5
sleep 5
empowerd q gov proposal 1
sleep 25
GOV_RESULT=$(empowerd q gov proposal 1 -o json | jq -r ".status")
if [ "$GOV_RESULT" != "PROPOSAL_STATUS_PASSED" ]; then
  echo "Error: Proposal not passed: $GOV_RESULT"
  exit 1
fi

empowerd q plasticcredit issuer 1
empowerd q plasticcredit issuers
NUM_ISSUERS=$(empowerd q plasticcredit issuers -o json | jq ".issuers | length")
if [ "$NUM_ISSUERS" != "1" ]; then
  echo "Error: number of issuers from issuers query was: $NUM_ISSUERS"
  exit 1
fi

echo "Tests completed successfully!"

make kill

echo "Serve killed"