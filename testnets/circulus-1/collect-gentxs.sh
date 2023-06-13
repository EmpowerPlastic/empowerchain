#!/bin/bash
DENOM=umpwr
VALIDATOR_COINS=1000000$DENOM
MAXBOND=1000000

set -e

find /root/.empowerchain/config/gentx -iname "*.json" -print0 |
    while IFS= read -r -d '' line; do
        GENACC=$(cat $line | sed -n 's|.*"delegator_address":"\([^"]*\)".*|\1|p')
        denomquery=$(jq -r '.body.messages[0].value.denom' $line)
        amountquery=$(jq -r '.body.messages[0].value.amount' $line)

        echo $GENACC
        echo $amountquery
        echo $denomquery

        # only allow $DENOM tokens to be bonded
        if [ $denomquery != $DENOM ]; then
            echo "invalid denomination"
            exit 1
        fi
        # limit the amount that can be bonded
        if [ $amountquery -gt $MAXBOND ]; then
            echo "bonded too much: $amountquery > $MAXBOND"
            exit 1
        fi

        ./empowerd genesis add-genesis-account $(jq -r '.body.messages[0].delegator_address' $line) $VALIDATOR_COINS
    done
./empowerd genesis collect-gentxs

./empowerd start &
sleep 10s
PID=$(pgrep -x empowerd)
if [ -z "$PID" ]; then
    echo "empowerd did not start"
    exit 1
fi
kill -9 $PID