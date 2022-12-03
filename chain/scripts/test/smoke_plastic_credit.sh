#!/bin/bash
set -e

make serve

source scripts/serve_env.sh

echo "--- Test: Plastic Credit Issuer ---"
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

echo "--- Test: Plastic Credit Applicants ---"
empowerd tx plasticcredit create-applicant empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m "First applicant" "With description" --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.5
sleep 5
empowerd tx plasticcredit create-applicant bob "Second applicant" "With description" --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.5
sleep 5

empowerd q plasticcredit applicant 1
empowerd q plasticcredit applicant 2

echo "--- Test: Plastic Credit Class ---"
empowerd tx plasticcredit create-credit-class PCRD 1 "Empower Plastic Credits" --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.5
sleep 5
empowerd tx plasticcredit create-credit-class RCRD 1 "Empower Recycling Credits" --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.5
sleep 5

empowerd q plasticcredit credit-class PCRD
empowerd q plasticcredit credit-class RCRD
empowerd q plasticcredit credit-classes
NUM_CREDIT_CLASSES=$(empowerd q plasticcredit credit-classes -o json | jq ".credit_classes | length")
if [ "$NUM_CREDIT_CLASSES" != "2" ]; then
  echo "Error: number of credit classes from credit-classes query was: $NUM_CREDIT_CLASSES"
  exit 1
fi

echo "Tests completed successfully!"

make kill

echo "Serve killed"