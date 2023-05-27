## empowerd query upgrade module_versions

get the list of module versions

### Synopsis

Gets a list of module names and their respective consensus versions.
Following the command with a specific module name will return only
that module's information.

```
empowerd query upgrade module_versions [optional module_name] [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for module_versions
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### SEE ALSO

* [empowerd query upgrade](empowerd_query_upgrade.md)	 - Querying commands for the upgrade module

