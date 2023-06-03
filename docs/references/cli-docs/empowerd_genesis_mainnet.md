## empowerd genesis mainnet

Creates new mainnet genesis file

### Synopsis

Creates new mainnet genesis file.
Params:
	- 1st param: Chain ID
	- 2nd param: Genesis time in RFC3339 format
	- 3rd param: Path to the genesis file (optional). Defaults to the default node home directory.
Example:
	empowerd genesis mainnet empowerchain-1 2021-01-01T00:00:00Z
Output:
	- Creates a new genesis file


```
empowerd genesis mainnet chain-id genesis-time [path_to_genesis_file] [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for mainnet
      --home string        The application home directory (default "/root/.empowerchain")
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### SEE ALSO

* [empowerd genesis](empowerd_genesis.md)	 - Application's genesis-related subcommands

