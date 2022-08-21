# EmpowerChain

This is where the code for EmpowerChain is located. Documentation is being built right now.

In the meantime, take a look at our [whitepaper](https://github.com/empowerchain/empowerchain/blob/main/Whitepaper.pdf), [website](https://empowerchain.io) and [@empowerchain_io on twitter](https://twitter.com/empowerchain_io).

## Development

### Requirements

- Go 1.18

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
