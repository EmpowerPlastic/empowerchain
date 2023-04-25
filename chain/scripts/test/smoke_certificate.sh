#!/bin/bash
set -e

make serve

source scripts/serve_env.sh

# alice is issuer admin

echo "--- Test: Plastic Credit Create Issuer ---"
empowerd tx gov submit-proposal scripts/test/testdata/proposal_create_issuer.json --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd tx gov vote 1 yes --from validator --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
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
empowerd tx certificates update-params empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m '{"empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7"}' --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
exit 0
empowerd tx certificates create-certificate CertificateType_CREDIT_RETIREMENT empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7 empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7 "{}" --from empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7 --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd q certificates certificates
NUM_CERTIFICATES=$(empowerd q certificates certificates -o json | jq ".certificates | length")

if [ "$NUM_CERTIFICATES" != "1" ]; then
  echo "Error: number of certificates from certificates query was: $NUM_CERTIFICATES"
  exit 1
fi

echo "Terminating $BINARY..."
pkill $BINARY
sleep 5

echo "Serve killed"

echo "--- Test: Plastic Credit Genesis Export and Import ---"
empowerd export --home $CHAIN_DIR > $CHAIN_DIR/export.json

# TODO: TEST GENESIS OUTPUT
# TODO: TEST GENESIS IMPORT

echo "Tests completed successfully!"
