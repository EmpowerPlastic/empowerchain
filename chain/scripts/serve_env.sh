#!/bin/bash

BINARY=empowerd
CHAIN_ID=empowerchain-local-1
ROOT_DIR=/tmp

CHAIN_DIR=$ROOT_DIR/$CHAIN_ID
LOG_FILE_PATH=$CHAIN_DIR/$CHAIN_ID.log
ALICE_MNEMONIC="clock post desk civil pottery foster expand merit dash seminar song memory figure uniform spice circle try happy obvious trash crime hybrid hood cushion"
BOB_MNEMONIC="angry twist harsh drastic left brass behave host shove marriage fall update business leg direct reward object ugly security warm tuna model broccoli choice"
VALIDATOR_MNEMONIC="banner spread envelope side kite person disagree path silver will brother under couch edit food venture squirrel civil budget number acquire point work mass"
P2P_PORT=26656
RPC_PORT=26657
REST_PORT=1317
ROSETTA_PORT=8080
GRPC_PORT=8090
GRPC_WEB=8091

SECONDARY_NODE_CHAIN_DIR=$ROOT_DIR/$CHAIN_ID-secondary-node
SECONDARY_NODE_LOG_FILE_PATH=$SECONDARY_NODE_CHAIN_DIR/$CHAIN_ID.log
SECONDARY_NODE_P2P_PORT=26658
SECONDARY_NODE_RPC_PORT=26659
SECONDARY_NODE_REST_PORT=1318
SECONDARY_NODE_ROSETTA_PORT=8081
SECONDARY_NODE_GRPC_PORT=8092
SECONDARY_NODE_GRPC_WEB=8093
