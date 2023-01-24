#!/bin/bash

set -euox pipefail

#if [ -z "$1" ]; then
#    echo "Cosmos SDK version missing as first argument"
#fi

#COSMOS_SDK_VERSION=$1

# Get protoc executions
#go install github.com/regen-network/cosmos-proto/protoc-gen-gocosmos 2>/dev/null
#go install github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway@v1.16.0 2>/dev/null

# Get cosmos sdk from github
#go get github.com/cosmos/cosmos-sdk@"$COSMOS_SDK_VERSION" 2>/dev/null

echo "Generating gogo proto code"
cd proto
proto_dirs=$(find ./empowerchain -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
for dir in $proto_dirs; do
  for file in $(find "${dir}" -maxdepth 1 -name '*.proto'); do
    if grep go_package $file &>/dev/null; then
      buf generate --template buf.gen.gogo.yaml $file
    fi
  done
done

cd ..


cp -r ./github.com/EmpowerPlastic/empowerchain/* ./
rm -rf ./github.com
