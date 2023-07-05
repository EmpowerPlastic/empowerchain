#!/usr/bin/env bash

set -eo pipefail

# Ugly workaround to fix the sdk issue with buf workspace failing swagger generation
go mod download
cosmos_sdk_dir=$(go list -f '{{ .Dir }}' -m github.com/cosmos/cosmos-sdk)
chmod u+w $cosmos_sdk_dir
rm $cosmos_sdk_dir/buf.work.yaml

proto_dirs=$(find ./proto "$cosmos_sdk_dir"/proto/cosmos -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
for dir in $proto_dirs; do
  # generate swagger files (filter query files)
  query_file=$(find "${dir}" -maxdepth 1 \( -name 'query.proto' -o -name 'service.proto' \))
  if [[ ! -z "$query_file" ]]; then
    buf generate --template ./proto/buf.gen.swagger.yaml $query_file
  fi
done

# combine swagger files
# uses nodejs package `swagger-combine`.
# all the individual swagger files need to be configured in `config.json` for merging
swagger-combine ./client/docs/config.json -o ./client/docs/swagger-ui/swagger.yaml -f yaml --continueOnConflictingPaths true --includeDefinitions true

# clean swagger files
rm -rf ./tmp-swagger-gen
