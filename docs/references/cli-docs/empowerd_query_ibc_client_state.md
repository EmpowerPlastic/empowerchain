## empowerd query ibc client state

Query a client state

### Synopsis

Query stored client state

```
empowerd query ibc client state [client-id] [flags]
```

### Examples

```
empowerd query ibc client state [client-id]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for state
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
      --prove              show proofs for the query results (default true)
```

### SEE ALSO

* [empowerd query ibc client](empowerd_query_ibc_client.md)	 - IBC client query subcommands

