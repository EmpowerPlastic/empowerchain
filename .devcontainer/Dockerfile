FROM mcr.microsoft.com/devcontainers/base:jammy

ENV GOLANG_VERSION=1.20.3

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends build-essential software-properties-common gnupg2 rng-tools vim iputils-ping

RUN wget https://go.dev/dl/go${GOLANG_VERSION}.linux-amd64.tar.gz && tar -C /usr/local -xzf go${GOLANG_VERSION}.linux-amd64.tar.gz

RUN curl -sSL "https://github.com/bufbuild/buf/releases/download/v1.9.0/buf-$(uname -s)-$(uname -m)" --create-dirs -o "/home/vscode/.custom-single-path-executables/buf" && chmod +x "/home/vscode/.custom-single-path-executables/buf"
RUN su -c 'wget https://github.com/earthly/earthly/releases/latest/download/earthly-linux-amd64 -O /usr/local/bin/earthly && chmod +x /usr/local/bin/earthly && /usr/local/bin/earthly bootstrap --with-autocomplete'

ENV PATH="/usr/local/go/bin:/home/vscode/go/bin:/home/vscode/.custom-single-path-executables:${PATH}"