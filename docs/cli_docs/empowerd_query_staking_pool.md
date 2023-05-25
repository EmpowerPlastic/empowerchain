## empowerd query staking pool

Query the current staking pool values

### Synopsis

Query values for amounts stored in the staking pool.

Example:
```bash
$ empowerd query staking pool
```

```
empowerd query staking pool [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for pool
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### SEE ALSO

* [empowerd query staking](empowerd_query_staking.md)	 - Querying commands for the staking module

