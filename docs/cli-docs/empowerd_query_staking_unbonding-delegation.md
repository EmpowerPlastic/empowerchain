## empowerd query staking unbonding-delegation

Query an unbonding-delegation record based on delegator and validator address

### Synopsis

Query unbonding delegations for an individual delegator on an individual validator.

Example:
```bash
$ empowerd query staking unbonding-delegation cosmos1gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p cosmosvaloper1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj
```

```
empowerd query staking unbonding-delegation [delegator-addr] [validator-addr] [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for unbonding-delegation
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### SEE ALSO

* [empowerd query staking](empowerd_query_staking.md)	 - Querying commands for the staking module

