VERSION 0.6
FROM earthly/dind:ubuntu
WORKDIR /empowerchain/chain

docker:
    RUN apt-get update -yq \
        && apt-get install --no-install-recommends -yq \
        wget gnupg ca-certificates gcc g++ make
    RUN wget -qO- https://go.dev/dl/go1.20.linux-amd64.tar.gz | tar -v -C /usr/local -xz
    ENV PATH $PATH:/usr/local/go/bin:/root/go/bin

build-prep:
    FROM +docker
    COPY . . # Until https://github.com/earthly/earthly/issues/1230

build:
    ARG EARTHLY_GIT_HASH
    ARG EARTHLY_GIT_SHORT_HASH
    ARG VERSION=dev-$EARTHLY_GIT_SHORT_HASH
    FROM +build-prep
    RUN make VERSION=$VERSION COMMIT=$EARTHLY_GIT_HASH build
    SAVE ARTIFACT build/empowerd
    SAVE ARTIFACT go.mod
    SAVE ARTIFACT go.sum

build-local:
    FROM +build
    SAVE ARTIFACT build/empowerd AS LOCAL build/empowerd
    SAVE ARTIFACT go.mod AS LOCAL go.mod
    SAVE ARTIFACT go.sum AS LOCAL go.sum

build-with-wasmvm:
    FROM +build
    RUN find /root/go -name libwasmvm.x86_64.so -exec cp {} build/libwasmvm.x86_64.so \;
    SAVE ARTIFACT build/*

build-static:
    ARG EARTHLY_GIT_HASH
    ARG EARTHLY_GIT_SHORT_HASH
    ARG VERSION=dev-$EARTHLY_GIT_SHORT_HASH
    FROM golang:1.20-alpine
    WORKDIR /app
    RUN apk add --no-cache ca-certificates build-base git libusb-dev linux-headers
    COPY . .
    RUN export ARCH=$(uname -m); \
        WASM_VERSION=$(go list -m all | grep github.com/CosmWasm/wasmvm | awk '{print $2}'); \
        if [ ! -z "${WASM_VERSION}" ]; then \
          wget -O /lib/libwasmvm_muslc.a https://github.com/CosmWasm/wasmvm/releases/download/${WASM_VERSION}/libwasmvm_muslc.${ARCH}.a; \
        fi;
    RUN go mod download
    RUN LEDGER_ENABLED=true BUILD_TAGS=muslc LINK_STATICALLY=true make VERSION=$VERSION COMMIT=$EARTHLY_GIT_HASH build
    SAVE ARTIFACT build/empowerd AS LOCAL build/empowerd-"$VERSION"-linux-amd64

test-prep:
    FROM +build
    COPY ../cosmwasm/+build-optimized/plastic_credit_marketplace.wasm ../cosmwasm/artifacts/plastic_credit_marketplace.wasm

test:
    FROM +test-prep
    RUN make test

test-with-coverage:
    FROM +test-prep
    RUN make test-with-coverage
    SAVE ARTIFACT coverage.out AS LOCAL coverage.out

test-sim-import-export:
    FROM +test-prep
    RUN make test-sim-import-export

test-sim-after-import:
    FROM +test-prep
    RUN make test-sim-after-import

test-sim-multi-seed-short:
    FROM +test-prep
    RUN make test-sim-multi-seed-short

test-sim-multi-seed-long:
    FROM +test-prep
    RUN make test-sim-multi-seed-long

test-sim-nondeterminism:
    FROM +test-prep
    RUN make test-sim-nondeterminism

smoketest-prep:
    FROM +test-prep
    WORKDIR /workbench
    GIT CLONE --branch v7.1.0 https://github.com/cosmos/gaia gaia
    RUN cd gaia && make install && cd ..
    GIT CLONE https://github.com/cosmos/relayer relayer
    RUN cd relayer && make install && cd ..

smoketest:
    FROM +smoketest-prep
    WORKDIR /empowerchain/chain
    RUN make smoketest

lint:
    FROM +build
    RUN make lint

swagger-gen:
    FROM +build-prep
    # Install buf
    RUN BIN="/usr/local/bin" && \
        VERSION="1.12.0" && \
        curl -sSL \
        "https://github.com/bufbuild/buf/releases/download/v${VERSION}/buf-$(uname -s)-$(uname -m)" \
        -o "${BIN}/buf" && \
        chmod +x "${BIN}/buf"
    # Install NodeJS
    RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
        apt-get install -y nodejs
    # Install swagger-combine
    RUN npm install -g swagger-combine
    # Install GoSwagger
    RUN download_url=$(curl -s https://api.github.com/repos/go-swagger/go-swagger/releases/latest | \
        jq -r '.assets[] | select(.name | contains("'"$(uname | tr '[:upper:]' '[:lower:]')"'_amd64")) | .browser_download_url') && \
        curl -o /usr/local/bin/swagger -L'#' "$download_url" && \
        chmod +x /usr/local/bin/swagger
    # Install protoc-gen-swagger
    RUN go install github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger@latest
    RUN make swagger-gen
    RUN cd client/docs/swagger-ui && swagger generate markdown
    SAVE ARTIFACT client/docs/swagger-ui/swagger.yaml
    SAVE ARTIFACT client/docs/swagger-ui/markdown.md

docgen:
    FROM +build-prep
    RUN cd ./scripts/docgen && go run ./...
    SAVE ARTIFACT scripts/docgen/output

devnet:
    FROM golang:1.20-bullseye
    ARG EARTHLY_GIT_SHORT_HASH
    ARG VERSION=$EARTHLY_GIT_SHORT_HASH
    ARG IMAGE_NAME=empowerchain-devnet
    ARG VALPASS=passw0rd
    ARG VALNAME=validator
    EXPOSE 26656 26657 1317 9090
    CMD empowerd start --rpc.laddr tcp://0.0.0.0:26657
    WORKDIR /
    COPY +build-with-wasmvm/empowerd /usr/local/bin/empowerd
    COPY +build-with-wasmvm/libwasmvm.x86_64.so /usr/local/lib/libwasmvm.x86_64.so
    ENV LD_LIBRARY_PATH=/usr/local/lib

    RUN apt update && apt install jq -y

    # Initialize empowerchain
    RUN empowerd init ${VALNAME}

    # Get devnet genesis
    COPY ../testnets/emp-devnet-1/+get-genesis/genesis.json /root/.empowerchain/config/genesis.json

    # Set up validator key
    RUN { echo ${VALPASS}; echo ${VALPASS}; } | empowerd keys add ${VALNAME}

    # Set up devnet genesis for new key
    RUN echo ${VALPASS} | empowerd genesis single-validator ~/.empowerchain/config/genesis.json ${VALNAME} $(jq -r .pub_key.value ~/.empowerchain/config/priv_validator_key.json)
    RUN mv ~/.empowerchain/config/genesis.json.generated ~/.empowerchain/config/genesis.json

    SAVE IMAGE --push ${IMAGE_NAME}:${VERSION} ${IMAGE_NAME}:latest

interchaintest-prep:
    FROM golang:1.20-bullseye
    WORKDIR /interchaintest
    GIT CLONE https://github.com/strangelove-ventures/interchaintest /interchaintest
    RUN make interchaintest
    SAVE ARTIFACT bin/interchaintest

ibc-conformance-test:
    FROM +build
    COPY +interchaintest-prep/interchaintest interchaintest
    WITH DOCKER --load empowerchain-devnet:interchaintest=(+devnet --VERSION=interchaintest)
        RUN ./interchaintest -matrix tests/e2e/interchaintest.json
    END
    SAVE ARTIFACT /root/.interchaintest/reports/* AS LOCAL build/interchaintest-reports/
