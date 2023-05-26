#/bin/bash
set -e

# This script updates the SDK proto files from the go pkg repo based on the cosmos-sdk version in chain/go.mod.

# Get the cosmos-sdk version from the go.mod file.
COSMOS_SDK_VERSION=$(grep github.com/cosmos/cosmos-sdk ../../chain/go.mod | awk '{print $2}')
echo "Current Cosmos SDK version: $COSMOS_SDK_VERSION"

# Copy proto files from cosmos-sdk package in GOPATH.
COSMOS_SDK_PATH=$(go env GOPATH)/pkg/mod/github.com/cosmos/cosmos-sdk@$COSMOS_SDK_VERSION
echo "Copying proto files from $COSMOS_SDK_PATH"
cp -r $COSMOS_SDK_PATH/proto/tendermint $PWD/proto
chmod -R 775 $PWD/proto/tendermint
cp -r $COSMOS_SDK_PATH/proto/cosmos $PWD/proto
chmod -R 775 $PWD/proto/cosmos
cp -r $COSMOS_SDK_PATH/proto/amino $PWD/proto
chmod -R 775 $PWD/proto/amino

# If we decide we need it at some point:
# COSMWASM_VERSION=$(grep github.com/CosmWasm/wasmd ../../chain/go.mod | awk '{print $2}')
# echo "Current CosmWasm version: $COSMWASM_VERSION"
#
# # Copy proto files from cosmwasm package in GOPATH.
# COSMWASM_PATH=$(go env GOPATH)/pkg/mod/github.com/\!cosm\!wasm/wasmd@$COSMWASM_VERSION
# echo "Copying proto files from $COSMWASM_PATH"
# cp -r $COSMWASM_PATH/proto/cosmwasm $PWD/proto
# chmod -R 775 $PWD/proto/cosmwasm
