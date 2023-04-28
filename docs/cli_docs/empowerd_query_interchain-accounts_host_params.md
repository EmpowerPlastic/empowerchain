## empowerd query interchain-accounts host params

Query the current interchain-accounts host submodule parameters

### Synopsis

Query the current interchain-accounts host submodule parameters

```
empowerd query interchain-accounts host params [flags]
```

### Examples

```
empowerd query interchain-accounts host params
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

* [empowerd query interchain-accounts host](empowerd_query_interchain-accounts_host.md)	 - IBC interchain accounts host query subcommands

