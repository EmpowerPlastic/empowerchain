## empowerd query ibc-fee channel

Query the ibc-fee enabled status of a channel

### Synopsis

Query the ibc-fee enabled status of a channel

```
empowerd query ibc-fee channel [port-id] [channel-id] [flags]
```

### Examples

```
empowerd query ibc-fee channel transfer channel-6
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for channel
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### SEE ALSO

* [empowerd query ibc-fee](empowerd_query_ibc-fee.md)	 - IBC relayer incentivization query subcommands

