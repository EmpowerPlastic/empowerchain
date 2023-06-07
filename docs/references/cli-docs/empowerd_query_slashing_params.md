## empowerd query slashing params

Query the current slashing parameters

### Synopsis

Query genesis parameters for the slashing module:

$ empowerd query slashing params

```
empowerd query slashing params [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for params
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### SEE ALSO

* [empowerd query slashing](empowerd_query_slashing.md)	 - Querying commands for the slashing module

