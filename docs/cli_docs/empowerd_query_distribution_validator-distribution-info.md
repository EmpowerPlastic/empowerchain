## empowerd query distribution validator-distribution-info

Query validator distribution info

### Synopsis

Query validator distribution info.
Example:
```bash
$ empowerd query distribution validator-distribution-info cosmosvaloper1lwjmdnks33xwnmfayc64ycprww49n33mtm92ne
```

```
empowerd query distribution validator-distribution-info [validator] [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for validator-distribution-info
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### SEE ALSO

* [empowerd query distribution](empowerd_query_distribution.md)	 - Querying commands for the distribution module

