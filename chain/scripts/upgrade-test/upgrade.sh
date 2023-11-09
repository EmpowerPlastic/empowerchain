#!/bin/bash

# Pre-start, it expects the following:
# - empowerd binary (in the PATH) of the current version
# - exported-genesis.json: A raw export from a live chain (testnet or mainnet)
# - new_empowerd binary (not in PATH, but same directory as this script) of the new version to use for the upgrade
# This script does the following, roughly:
# 1: Set up a fresh validator account
# 2: Manipulate the genesis file to a single-validator genesis (new chain-id and everything) with the new validator account
# 3: Start empowerd and wait for it to catch up (start up, really)
# 4: Create and submit a an upgrade proposal
# 5: Vote for the proposal and wait for the proposal to pass
# 6: Shut down chain (halted for the upgrade at upgrade height)
# 7: Start up the new version of empowerd and wait for it to catch up (start up, really)

if [ -z "$1" ]; then
    echo "Missing first argument UPGRADE_NAME"
    exit 1
fi
UPGRADE_NAME=$1

VALNAME=validator
VALPASS=passw0rd

# Set up a fresh validator account
empowerd init ${VALNAME}
{ echo ${VALPASS}; echo ${VALPASS}; } | empowerd keys add ${VALNAME}

# Set up genesis file as a single-validator genesis (with the new validator account)
echo ${VALPASS} | empowerd genesis single-validator ./exported-genesis.json ${VALNAME} $(jq -r .pub_key.value ~/.empowerchain/config/priv_validator_key.json)
mv exported-genesis.json.generated ~/.empowerchain/config/genesis.json

# Lower the voting period to 30s so that the upgrade proposal passes quickly
sed -i -e 's/"voting_period": "172800s"/"voting_period": "30s"/g' ~/.empowerchain/config/genesis.json

empowerd start > /tmp/before_upgrade_log 2>&1 &
sleep 10;

max_catch_up_attempts=10;
catch_up_count=0;
while [ "`empowerd status | jq -r ".SyncInfo.catching_up"`" != "false" ] && [ $catch_up_count -lt $max_catch_up_attempts ]; do \
    echo "Waiting to catch up (attempt ${catch_up_count}/${max_catch_up_attempts}, current block: $(empowerd status | jq -r ".SyncInfo.latest_block_height")";
    sleep 5;
    catch_up_count=$((catch_up_count+1));
done;
if [ $catch_up_count -eq $max_catch_up_attempts ]; then \
    echo "Failed to catch up after ${max_catch_up_attempts} attempts.";
    cat /tmp/before_upgrade_log;
    exit 1;
fi;
sleep 10; # Just for good measure

# Create and submit a an upgrade proposal
# Set the upgrade height to be current heigh + 20
UPGRADE_HEIGHT=$(($(empowerd status | jq -r ".SyncInfo.latest_block_height")+20));
echo "Upgrade prop for height $UPGRADE_HEIGHT";
echo "{
   \"messages\": [
    {
     \"@type\": \"/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade\",
     \"authority\": \"empower10d07y265gmmuvt4z0w9aw880jnsr700jxwhwvd\",
     \"plan\": {
      \"name\": \"${UPGRADE_NAME}\",
      \"time\": \"0001-01-01T00:00:00Z\",
      \"height\": \"${UPGRADE_HEIGHT}\",
      \"info\": \"${UPGRADE_NAME}\",
      \"upgraded_client_state\": null
     }
    }
   ],
   \"metadata\": \"ipfs://CID\",
   \"deposit\": \"2000000000umpwr\",
   \"title\": \"Test upgrade proposal\",
   \"summary\": \"Test upgrade proposal summary\"
          }" > upgrade_proposal.json;
echo ${VALPASS} | empowerd tx gov submit-proposal upgrade_proposal.json --from validator --yes --chain-id emp-devnet-1;
sleep 5;
PROP_ID=$(empowerd q gov proposals --reverse --limit 1 --output json | jq -r ".proposals[0].id");

# Vote and wait for proposal to pass
echo "Voting on proposal $PROP_ID";
echo ${VALPASS} | empowerd tx gov vote ${PROP_ID} yes --from validator --yes --chain-id emp-devnet-1;
sleep 30;

# Double check that the proposal went through
GOV_RESULT=$(empowerd q gov proposal ${PROP_ID} --output json | jq -r ".status");
if [ "$GOV_RESULT" != "PROPOSAL_STATUS_PASSED" ]; then \
  echo "Error: Proposal not passed: $GOV_RESULT";
  exit 1;
fi;

# Wait for upgrade height to come around
max_upgrade_wait_attempts=30;
upgrade_wait_count=0;
while [ "`empowerd status | jq -r ".SyncInfo.latest_block_height"`" != ${UPGRADE_HEIGHT} ] && [ $upgrade_wait_count -lt $max_upgrade_wait_attempts ]; do \
    echo "Waiting for upgrade height (${UPGRADE_HEIGHT}, attempt ${upgrade_wait_count}/${max_upgrade_wait_attempts}), current block: $(empowerd status | jq -r ".SyncInfo.latest_block_height")";
    sleep 5;
    upgrade_wait_count=$((upgrade_wait_count+1));
done;
if [ $upgrade_wait_count -eq $max_upgrade_wait_attempts ]; then \
    echo "Failed to wait for upgrade height ${max_upgrade_wait_attempts} attempts.";
    cat /tmp/before_upgrade_log;
    exit 1;
fi;
sleep 5; # Just for good measure

# Shut down chain (it is halted at upgrade height, anyway)
pkill empowerd;
sleep 5; # Just for good measure

# Start up the new version of empowerd
./new_empowerd start > /tmp/after_upgrade_log 2>&1 &
sleep 60; # Let the upgrade take

after_upgrade_max_catch_up_attempts=10;
after_upgrade_catch_up_count=0;
while [ "`./new_empowerd status | jq -r ".SyncInfo.catching_up"`" != "false" ] && [ $after_upgrade_catch_up_count -lt $after_upgrade_max_catch_up_attempts ]; do \
    echo "Waiting to catch up after upgrade (attempt ${after_upgrade_catch_up_count}/${after_upgrade_max_catch_up_attempts}, current block: $(./new_empowerd status | jq -r ".SyncInfo.latest_block_height")";
    sleep 5;
    after_upgrade_catch_up_count=$((after_upgrade_catch_up_count+1));
done;
if [ $after_upgrade_catch_up_count -eq $after_upgrade_max_catch_up_attempts ]; then \
    echo "Failed to catch up after the upgrade after ${after_upgrade_max_catch_up_attempts} attempts.";
    cat /tmp/after_upgrade_log;
    exit 1;
fi;
CURRENT_HEIGHT=$(./new_empowerd status | jq -r ".SyncInfo.latest_block_height");
if [ $CURRENT_HEIGHT -le $UPGRADE_HEIGHT ]; then \
    echo "Error: Current height ($CURRENT_HEIGHT) is less than or equal to upgrade height ($UPGRADE_HEIGHT)";
    cat /tmp/after_upgrade_log;
    exit 1;
fi;
echo "Upgrade test passed! Halted and upgraded on $UPGRADE_HEIGHT, current height: $CURRENT_HEIGHT";