## empowerd query ibc-fee payee

Query the relayer payee address on a given channel

### Synopsis

Query the relayer payee address on a given channel

```
empowerd query ibc-fee payee [channel-id] [relayer] [flags]
```

### Examples

```
empowerd query ibc-fee payee channel-5 cosmos1layxcsmyye0dc0har9sdfzwckaz8sjwlfsj8zs
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for payee
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### SEE ALSO

* [empowerd query ibc-fee](empowerd_query_ibc-fee.md)	 - IBC relayer incentivization query subcommands

