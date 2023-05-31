## empowerd query ibc channel packet-receipt

Query a packet receipt

### Synopsis

Query a packet receipt

```
empowerd query ibc channel packet-receipt [port-id] [channel-id] [sequence] [flags]
```

### Examples

```
empowerd query ibc channel packet-receipt [port-id] [channel-id] [sequence]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for packet-receipt
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
      --prove              show proofs for the query results (default true)
```

### SEE ALSO

* [empowerd query ibc channel](empowerd_query_ibc_channel.md)	 - IBC channel query subcommands

