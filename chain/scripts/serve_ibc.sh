#!/bin/bash
set -e

ROOT_DIR=/tmp
RELAYER_HOME_DIR=$ROOT_DIR/relayer-stuff

if [ -d $RELAYER_HOME_DIR ]; then
  echo "Removing relayer previous data..."
  rm -rf $RELAYER_HOME_DIR &> /dev/null
fi

mkdir -p $RELAYER_HOME_DIR
mkdir -p $RELAYER_HOME_DIR/config
cp scripts/rly-config.yaml $RELAYER_HOME_DIR/config/config.yaml

make serve
make serve-extra-ibc-chain

# Set up relayer!
rly keys restore gaia gaia-relay-account --home $RELAYER_HOME_DIR "result impulse book sand wedding mass top ritual swing assault claw mind outside hand kind detect gasp large radar relief wool tank taxi item"
rly keys restore empowerchain empowerchain-relay-account --home $RELAYER_HOME_DIR "minor fetch reward clean pepper agree online oppose enroll claw mimic stable around thrive lyrics deer unknown dutch fee enhance pact horse misery electric"

#rly tx link-then-start empowerchain-gaia --home $RELAYER_HOME_DIR