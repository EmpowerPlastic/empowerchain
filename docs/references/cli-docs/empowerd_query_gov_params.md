## empowerd query gov params

Query the parameters of the governance process

### Synopsis

Query the all the parameters for the governance process.

Example:
```bash
$ empowerd query gov params
```

```
empowerd query gov params [flags]
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

* [empowerd query gov](empowerd_query_gov.md)	 - Querying commands for the governance module

