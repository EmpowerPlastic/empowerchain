## empowerd query upgrade plan

get upgrade plan (if one exists)

### Synopsis

Gets the currently scheduled upgrade plan, if one exists

```
empowerd query upgrade plan [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for plan
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### SEE ALSO

* [empowerd query upgrade](empowerd_query_upgrade.md)	 - Querying commands for the upgrade module

