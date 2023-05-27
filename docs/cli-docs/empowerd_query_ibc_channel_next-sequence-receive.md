## empowerd query ibc channel next-sequence-receive

Query a next receive sequence

### Synopsis

Query the next receive sequence for a given channel

```
empowerd query ibc channel next-sequence-receive [port-id] [channel-id] [flags]
```

### Examples

```
empowerd query ibc channel next-sequence-receive [port-id] [channel-id]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for next-sequence-receive
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
      --prove              show proofs for the query results (default true)
```

### SEE ALSO

* [empowerd query ibc channel](empowerd_query_ibc_channel.md)	 - IBC channel query subcommands

