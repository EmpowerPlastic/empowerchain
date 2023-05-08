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

echo "--- Test: Plastic Credit Update Issuer ---"
ISSUER_ID=$(empowerd q plasticcredit issuer 1 -o json | jq ".issuer.id")
empowerd tx plasticcredit update-issuer empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7 1 "updated Empower" "updated Empower issuer" --from empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7 --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5

echo "--- Test: Plastic Credit Create Applicants ---"
empowerd tx plasticcredit create-applicant "First applicant" "With description" --from empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd tx plasticcredit update-applicant empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m 1 "Updated applicant" "With updated description" --from empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd tx plasticcredit create-applicant "Second applicant" "With description" --from empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5

empowerd q plasticcredit applicant 1
empowerd q plasticcredit applicant 2

echo "--- Test: Plastic Credit Create Credit Type ---"
empowerd q bank balances empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7

empowerd tx plasticcredit create-credit-type PTEST 1 "Empower Plastic Credits" --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test  --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd tx plasticcredit create-credit-type RCRD 1 "Empower Recycling Credits" --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5

empowerd tx plasticcredit update-credit-type PTEST "Updated Empower Recycling Credits" --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5


empowerd q plasticcredit credit-type PTEST
empowerd q plasticcredit credit-type RCRD
empowerd q plasticcredit credit-types
NUM_CREDIT_TYPES=$(empowerd q plasticcredit credit-types -o json | jq ".credit_types | length")
if [ "$NUM_CREDIT_TYPES" != "2" ]; then
  echo "Error: number of credit types from credit-types query was: $NUM_CREDIT_TYPES"
  exit 1
fi

echo "--- Test: Plastic Credit Create Projects ---"
empowerd tx plasticcredit create-project 1 PTEST "My Project" --from bob --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd tx plasticcredit create-project 1 RCRD "My Recycling Project" --from bob --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd tx plasticcredit create-project 2 PTEST "My Project" --from bob --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd q plasticcredit project 1
empowerd q plasticcredit project 2
empowerd q plasticcredit project 3
empowerd tx plasticcredit update-project 1 "My Updated Project" --from bob --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5

echo "--- Test: Plastic Credit Approve Projects ---"

empowerd tx pc approve-project 1 --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
STATUS=$(empowerd q plasticcredit project 1 -o json | jq -r ".project.status")
if [ "$STATUS" != "APPROVED" ]; then
  echo "Error: project was not approved, it was: $STATUS"
  exit 1
fi
empowerd tx pc approve-project 2 --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
STATUS=$(empowerd q plasticcredit project 2 -o json | jq -r ".project.status")
if [ "$STATUS" != "APPROVED" ]; then
  echo "Error: project was not approved, it was: $STATUS"
  exit 1
fi
empowerd tx pc approve-project 3 --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
STATUS=$(empowerd q plasticcredit project 3 -o json | jq -r ".project.status")
if [ "$STATUS" != "APPROVED" ]; then
  echo "Error: project was not approved, it was: $STATUS"
  exit 1
fi

echo "--- Test: Plastic Credit Reject Projects ---"
empowerd tx plasticcredit create-project 1 PTEST "My Project" --from bob --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd tx plasticcredit create-project 2 PTEST "My Other Project" --from bob --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd q plasticcredit project 4
empowerd q plasticcredit project 5
empowerd tx pc reject-project 4 --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
STATUS=$(empowerd q plasticcredit project 4 -o json | jq -r ".project.status")
if [ "$STATUS" != "REJECTED" ]; then
  echo "Error: project was not rejected, it was: $STATUS"
  exit 1
fi
empowerd tx pc reject-project 5 --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
STATUS=$(empowerd q plasticcredit project 5 -o json | jq -r ".project.status")
if [ "$STATUS" != "REJECTED" ]; then
  echo "Error: project was not rejected, it was: $STATUS"
  exit 1
fi

echo "--- Test: Plastic Credit Suspend Projects ---"
empowerd tx plasticcredit create-project 1 PTEST "My Suspendable Project" --from bob --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd q plasticcredit project 6
empowerd tx pc approve-project 6 --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd tx pc suspend-project 6 --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd tx pc approve-project 6 --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd tx pc suspend-project 6 --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
STATUS=$(empowerd q plasticcredit project 6 -o json | jq -r ".project.status")
if [ "$STATUS" != "SUSPENDED" ]; then
  echo "Error: project was not suspended, it was: $STATUS"
  exit 1
fi

echo "--- Test: Plastic Credit Issuance, Transfer and Retirement ---"
empowerd tx pc issue-credits 1 123 1000 ipfs://CID1 --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd tx pc issue-credits 2 00001 10000 ipfs://CID1 --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd tx pc issue-credits 3 987654321 9999999999 ipfs://CID1 --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5

empowerd tx pc transfer empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7 PTEST/123 50 false --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd tx pc transfer empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7 RCRD/00001 10 true --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd tx pc transfer empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7 PTEST/987654321 10 true --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5

empowerd tx pc retire PTEST/123 5 "test" "" --from alice --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd tx pc retire RCRD/00001 2 "test" "" --from bob --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5
empowerd tx pc retire PTEST/987654321 9999999989 "test" "retirement by test" --from bob --yes --home $CHAIN_DIR --chain-id $CHAIN_ID --keyring-backend test --gas auto --gas-prices 0.025umpwr --gas-adjustment 1.75
sleep 5

CREDITS_1_ACTIVE=$(empowerd q pc credit-collection PTEST/123 -o json | jq .credit_collection.total_amount.active)
CREDITS_1_RETIRED=$(empowerd q pc credit-collection PTEST/123 -o json | jq .credit_collection.total_amount.retired)
CREDITS_2_ACTIVE=$(empowerd q pc credit-collection RCRD/00001 -o json | jq .credit_collection.total_amount.active)
CREDITS_2_RETIRED=$(empowerd q pc credit-collection RCRD/00001 -o json | jq .credit_collection.total_amount.retired)
CREDITS_3_ACTIVE=$(empowerd q pc credit-collection PTEST/987654321 -o json | jq .credit_collection.total_amount.active)
CREDITS_3_RETIRED=$(empowerd q pc credit-collection PTEST/987654321 -o json | jq .credit_collection.total_amount.retired)
if [ "$CREDITS_1_ACTIVE" != "\"995\"" ]; then
  echo "Error: Expected 995 active PTEST/123, have $CREDITS_1_ACTIVE"
  exit 1
fi
if [ "$CREDITS_1_RETIRED" != "\"5\"" ]; then
  echo "Error: Expected 5 retired PTEST/123, have $CREDITS_1_RETIRED"
  exit 1
fi
if [ "$CREDITS_2_ACTIVE" != "\"9988\"" ]; then
  echo "Error: Expected 9988 active RCRD/00001, have $CREDITS_2_ACTIVE"
  exit 1
fi
if [ "$CREDITS_2_RETIRED" != "\"12\"" ]; then
  echo "Error: Expected 12 retired RCRD/00001, have $CREDITS_2_RETIRED"
  exit 1
fi
if [ "$CREDITS_3_ACTIVE" != "\"0\"" ]; then
  echo "Error: Expected 0 active PTEST/987654321, have $CREDITS_3_ACTIVE"
  exit 1
fi
if [ "$CREDITS_3_RETIRED" != "\"9999999999\"" ]; then
  echo "Error: Expected 9999999999 retired PTEST/987654321, have $CREDITS_3_RETIRED"
  exit 1
fi

ALICE_BALANCE_1_ACTIVE=$(empowerd q pc credit-balance empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7 PTEST/123 -o json | jq .balance.balance.active)
ALICE_BALANCE_1_RETIRED=$(empowerd q pc credit-balance empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7 PTEST/123 -o json | jq .balance.balance.retired)
ALICE_BALANCE_2_ACTIVE=$(empowerd q pc credit-balance empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7 RCRD/00001 -o json | jq .balance.balance.active)
ALICE_BALANCE_2_RETIRED=$(empowerd q pc credit-balance empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7 RCRD/00001 -o json | jq .balance.balance.retired)
ALICE_BALANCE_3_ACTIVE=$(empowerd q pc credit-balance empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7 PTEST/987654321 -o json | jq .balance.balance.active)
ALICE_BALANCE_3_RETIRED=$(empowerd q pc credit-balance empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7 PTEST/987654321 -o json | jq .balance.balance.retired)

BOB_BALANCE_1_ACTIVE=$(empowerd q pc credit-balance empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m PTEST/123 -o json | jq .balance.balance.active)
BOB_BALANCE_1_RETIRED=$(empowerd q pc credit-balance empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m PTEST/123 -o json | jq .balance.balance.retired)
BOB_BALANCE_2_ACTIVE=$(empowerd q pc credit-balance empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m RCRD/00001 -o json | jq .balance.balance.active)
BOB_BALANCE_2_RETIRED=$(empowerd q pc credit-balance empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m RCRD/00001 -o json | jq .balance.balance.retired)
BOB_BALANCE_3_ACTIVE=$(empowerd q pc credit-balance empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m PTEST/987654321 -o json | jq .balance.balance.active)
BOB_BALANCE_3_RETIRED=$(empowerd q pc credit-balance empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m PTEST/987654321 -o json | jq .balance.balance.retired)

if [ "$ALICE_BALANCE_1_ACTIVE" != "\"45\"" ]; then
  echo "Error: (Alice) Expected 45 active PTEST/123, have $ALICE_BALANCE_1_ACTIVE"
  exit 1
fi
if [ "$ALICE_BALANCE_1_RETIRED" != "\"5\"" ]; then
  echo "Error: (Alice) Expected 5 retired PTEST/123, have $ALICE_BALANCE_1_RETIRED"
  exit 1
fi
if [ "$ALICE_BALANCE_2_ACTIVE" != "\"0\"" ]; then
  echo "Error: (Alice) Expected 0 active RCRD/00001, have $ALICE_BALANCE_2_ACTIVE"
  exit 1
fi
if [ "$ALICE_BALANCE_2_RETIRED" != "\"10\"" ]; then
  echo "Error: (Alice) Expected 10 retired RCRD/00001, have $ALICE_BALANCE_2_RETIRED"
  exit 1
fi
if [ "$ALICE_BALANCE_3_ACTIVE" != "\"0\"" ]; then
  echo "Error: (Alice) Expected 0 active PTEST/987654321, have $ALICE_BALANCE_3_ACTIVE"
  exit 1
fi
if [ "$ALICE_BALANCE_3_RETIRED" != "\"10\"" ]; then
  echo "Error: (Alice) Expected 10 retired PTEST/987654321, have $ALICE_BALANCE_3_RETIRED"
  exit 1
fi
if [ "$BOB_BALANCE_1_ACTIVE" != "\"950\"" ]; then
  echo "Error: (Bob) Expected 950 active PTEST/123, have $BOB_BALANCE_1_ACTIVE"
  exit 1
fi
if [ "$BOB_BALANCE_1_RETIRED" != "\"0\"" ]; then
  echo "Error: (Bob) Expected 0 retired PTEST/123, have $BOB_BALANCE_1_RETIRED"
  exit 1
fi
if [ "$BOB_BALANCE_2_ACTIVE" != "\"9988\"" ]; then
  echo "Error: (Bob) Expected 9988 active RCRD/00001, have $BOB_BALANCE_2_ACTIVE"
  exit 1
fi
if [ "$BOB_BALANCE_2_RETIRED" != "\"2\"" ]; then
  echo "Error: (Bob) Expected 2 retired RCRD/00001, have $BOB_BALANCE_2_RETIRED"
  exit 1
fi
if [ "$BOB_BALANCE_3_ACTIVE" != "\"0\"" ]; then
  echo "Error: (Bob) Expected 0 active PTEST/987654321, have $BOB_BALANCE_3_ACTIVE"
  exit 1
fi
if [ "$BOB_BALANCE_3_RETIRED" != "\"9999999989\"" ]; then
  echo "Error: (Bob) Expected 9999999989 retired PTEST/987654321, have $BOB_BALANCE_3_RETIRED"
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
