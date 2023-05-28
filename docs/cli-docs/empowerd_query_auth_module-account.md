## empowerd query auth module-account

Query module account info by module name

```
empowerd query auth module-account [module-name] [flags]
```

### Examples

```
empowerd q auth module-account auth
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for module-account
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### SEE ALSO

* [empowerd query auth](empowerd_query_auth.md)	 - Querying commands for the auth module

