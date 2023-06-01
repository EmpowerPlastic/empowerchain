## empowerd query distribution community-pool

Query the amount of coins in the community pool

### Synopsis

Query all coins in the community pool which is under Governance control.

Example:
```bash
$ empowerd query distribution community-pool
```

```
empowerd query distribution community-pool [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for community-pool
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### SEE ALSO

* [empowerd query distribution](empowerd_query_distribution.md)	 - Querying commands for the distribution module

