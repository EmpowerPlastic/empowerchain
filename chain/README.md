## Development

### Requirements

- Go 1.20

### Build

To run a basic build:
```shell
$ make build
```

To install the `empowerd` executable:
```shell
$ make install
```

### Run locally

To spin up a local chain:
```shell
$ make serve
```

To kill the running instance:
```shell
$ make kill-all
```

### Test

To run unit tests:
```shell
$ make test-unit
```

To run e2e tests (and unit tests):
```shell
$ make test
```

To run a basic smoke test (spins up the chain and runs a couple of commands against it)
```shell
$ make smoketest
```

### Run CI/CD locally
EmpowerChain is using [Earthly](https://earthly.dev/) heavily for CI/CD. 
It abstracts away the underlying CI/CD system (such as GitHub actions) and allows you to run the same commands locally using a docker-like environment and set-up.

In short, Earthly is like a combination of Docker and a Makefile.

For instance, to run the tests in almost the same way as the GitHub action, you can run:
```shell
$ earthly -P +test
```

To see more targets, take a look at the Earthfile in this directory.

