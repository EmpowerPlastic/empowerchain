# Dockerfile for running devnet empowerchain locally in the container
# To build the image, run:
# docker build -t empowerchain-devnet .

# To run the container, run:
# docker run -it --rm -p 26656:26656 -p 26657:26657 -p 1317:1317 -p 9090:9090 empowerchain-devnet empowerd start

FROM --platform=$BUILDPLATFORM golang:1.20-bullseye AS build-env

WORKDIR /

# Download and build empowerchain
RUN git clone https://github.com/EmpowerPlastic/empowerchain.git

WORKDIR /empowerchain/chain

ARG TARGETOS TARGETARCH

RUN GOOS=$TARGETOS GOARCH=$TARGETARCH make build

# Find the libwasmvm.x86_64.so file and copy it to the build directory
RUN find $GOPATH -name "libwasmvm.x86_64.so" -exec cp {} /empowerchain/chain/build \;

FROM golang:1.20-bullseye

RUN apt update && apt install jq -y

ARG  VALPASS=passw0rd
ARG GENESISTEMPLATE=https://empowerchain-public.s3.fr-par.scw.cloud/genesis.json
ARG VALNAME=validator
EXPOSE 26656 26657 1317 9090
CMD ["empowerd"]
STOPSIGNAL SIGTERM
WORKDIR /root

# Copy empowerchain binaries and libwasmvm.x86_64.so
COPY --from=build-env /empowerchain/chain/build/empowerd /usr/local/bin/empowerd
COPY --from=build-env /empowerchain/chain/build/libwasmvm.x86_64.so /usr/local/lib/libwasmvm.x86_64.so
# Set LD_LIBRARY_PATH to the directory containing libwasmvm.x86_64.so
ENV LD_LIBRARY_PATH=/usr/local/lib

# Initialize empowerchain
RUN empowerd init ${VALNAME}

# Download devnet genesis
RUN curl -s ${GENESISTEMPLATE} > ~/.empowerchain/config/genesis.json

# Set up validator key
RUN { echo ${VALPASS}; echo ${VALPASS}; } | empowerd keys add ${VALNAME}

# Set up devnet genesis for new key
RUN echo ${VALPASS} | empowerd genesis devnet ~/.empowerchain/config/genesis.json ${VALNAME} $(jq .pub_key.value ~/.empowerchain/config/priv_validator_key.json | sed -r 's/"//g')
RUN mv ~/.empowerchain/config/genesis.json.generated ~/.empowerchain/config/genesis.json
