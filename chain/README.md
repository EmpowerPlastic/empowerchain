## Development

### Requirements

- Go 1.19

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
$ make kill
```

### Test

To run unit tests:
```shell
$ make test
```

To run a basic smoke test (spins up the chain and runs a couple of commands against it)
```shell
$ make smoketest
```
