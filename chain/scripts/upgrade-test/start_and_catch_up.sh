#!/bin/bash

empowerd start > /tmp/start_and_catch_up 2>&1 &
sleep 5

max_catch_up_wait_attempts=30; # TODO, MAKE HIGHER
catch_up_wait_count=0;

while [ "`empowerd status | jq -r ".SyncInfo.catching_up"`" != "false" ] && [ $catch_up_wait_count -lt $max_catch_up_wait_attempts ]; do
    echo "Waiting to catch up, attempt ${catch_up_wait_count}/${max_catch_up_wait_attempts}), current block: $(empowerd status | jq -r ".SyncInfo.latest_block_height")";
    sleep 5;
    catch_up_wait_count=$((catch_up_wait_count+1));
done

if [ $catch_up_wait_count -eq $max_catch_up_wait_attempts ]; then
    echo "Failed to wait for catch up after ${max_catch_up_wait_attempts} attempts.";
    cat /tmp/start_and_catch_up;
    exit 1;
fi;