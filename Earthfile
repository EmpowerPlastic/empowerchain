VERSION 0.6
FROM earthly/dind:ubuntu
WORKDIR /empowerchain

docker:
    RUN apt-get update -yq \
        && apt-get install --no-install-recommends -yq \
        wget gnupg ca-certificates gcc g++ make
    RUN wget -qO- https://go.dev/dl/go1.18.6.linux-amd64.tar.gz | tar -v -C /usr/local -xz
    ENV PATH $PATH:/usr/local/go/bin:/root/go/bin

build:
    FROM +docker
    COPY .git .
    COPY Makefile .
    COPY go.mod .
    COPY go.sum .
    COPY app app
    COPY cmd cmd
    COPY proto proto
    COPY scripts scripts
    COPY testutil testutil
    COPY x x
    RUN make build
    SAVE ARTIFACT go.mod AS LOCAL go.mod
    SAVE ARTIFACT go.sum AS LOCAL go.sum

test:
    FROM +build
    RUN make test

smoketest:
    FROM +build
    RUN make smoketest

lint:
    FROM +build
    RUN make lint
