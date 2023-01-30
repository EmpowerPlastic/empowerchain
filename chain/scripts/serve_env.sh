#!/bin/bash

BINARY=empowerd
CHAIN_ID=empowerchain-local-1
ROOT_DIR=/tmp

CHAIN_DIR=$ROOT_DIR/$CHAIN_ID
LOG_FILE_PATH=$CHAIN_DIR/$CHAIN_ID.log
# empower18hl5c9xn5dze2g50uaw0l2mr02ew57zkk9vga7
ALICE_MNEMONIC="clock post desk civil pottery foster expand merit dash seminar song memory figure uniform spice circle try happy obvious trash crime hybrid hood cushion"
# empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m
BOB_MNEMONIC="angry twist harsh drastic left brass behave host shove marriage fall update business leg direct reward object ugly security warm tuna model broccoli choice"
# empower1m9l358xunhhwds0568za49mzhvuxx9uxl4sqxn
VALIDATOR_MNEMONIC="banner spread envelope side kite person disagree path silver will brother under couch edit food venture squirrel civil budget number acquire point work mass"
# empower12xhn82e4ykp43grlgq6l52yy9e9lccypmmgxlv
EMPOWERCHAIN_RELAY_ACCOUNT="minor fetch reward clean pepper agree online oppose enroll claw mimic stable around thrive lyrics deer unknown dutch fee enhance pact horse misery electric"
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

# IBC CHAIN
IBC_CHAIN_BINARY=gaiad
IBC_CHAIN_ID=gaia-local-1

IBC_CHAIN_DIR=$ROOT_DIR/$IBC_CHAIN_ID
IBC_CHAIN_LOG_FILE_PATH=$IBC_CHAIN_DIR/$IBC_CHAIN_ID.log
# cosmos1j0hkmu8rklcewz4g0wclxlzf4tzhlx00fe2uew
KAARE_MNEMONIC="skate height year measure reunion toast onion canal cupboard innocent dash develop spend pottery wine nest orchard vibrant zebra climb cricket carbon unhappy color"
# cosmos1yza3nu6qz8kwn67tgd395s8yedpq45vfqa79fs
KENT_ROGER_MNEMONIC="name rose pill armor surprise position vague suggest rescue april evidence all silly original dignity wet seven lazy slogan smoke genre cost faith royal"
# cosmos16vrj6an5f7pl0g8gl8qxex7rts2vucq4ujcx4f
BERTHILD_VALIDATOR_MNEMONIC="traffic occur lens age swim tilt canvas train stairs leg base inmate vessel trigger abstract thunder whale resist summer popular nature move original tired"
# cosmos1sl3mpymvv70z5xyxfe7fvlqqjvm4v4hlh8tapg
IBC_CHAIN_RELAY_ACCOUNT="result impulse book sand wedding mass top ritual swing assault claw mind outside hand kind detect gasp large radar relief wool tank taxi item"
IBC_CHAIN_P2P_PORT=36656
IBC_CHAIN_RPC_PORT=36657
IBC_CHAIN_REST_PORT=2317
IBC_CHAIN_ROSETTA_PORT=9080
IBC_CHAIN_GRPC_PORT=9090
IBC_CHAIN_GRPC_WEB=9091

# RELAYER
RELAYER_HOME_DIR=$ROOT_DIR/relayer-stuff
RELAYER_LOG_FILE_PATH=$RELAYER_HOME_DIR/relayer.log
