FROM mcr.microsoft.com/devcontainers/base:jammy

ENV GOLANG_VERSION=1.19.3 \
  GOLANG_PROTOBUF_VERSION=1.28.0 \
  GOGO_PROTOBUF_VERSION=1.3.2 \
  GRPC_GATEWAY_VERSION=1.16.0

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends build-essential software-properties-common gnupg2 rng-tools vim iputils-ping

RUN wget https://go.dev/dl/go${GOLANG_VERSION}.linux-amd64.tar.gz && tar -C /usr/local -xzf go${GOLANG_VERSION}.linux-amd64.tar.gz

RUN curl -sSL "https://github.com/bufbuild/buf/releases/download/v1.9.0/buf-$(uname -s)-$(uname -m)" --create-dirs -o "/home/vscode/.custom-single-path-executables/buf" && chmod +x "/home/vscode/.custom-single-path-executables/buf"
RUN su vscode -c "/usr/local/go/bin/go install github.com/cosmos/cosmos-proto/cmd/protoc-gen-go-pulsar@latest"
RUN su vscode -c "/usr/local/go/bin/go install google.golang.org/protobuf/cmd/protoc-gen-go@v${GOLANG_PROTOBUF_VERSION}"
RUN su vscode -c "/usr/local/go/bin/go install github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway@v${GRPC_GATEWAY_VERSION} \
    github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger@v${GRPC_GATEWAY_VERSION}"


ENV PATH="/usr/local/go/bin:/home/vscode/go/bin:/home/vscode/.custom-single-path-executables:${PATH}"