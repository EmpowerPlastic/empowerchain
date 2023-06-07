## empowerd query gov vote

Query details of a single vote

### Synopsis

Query details for a single vote on a proposal given its identifier.

Example:
```bash
$ empowerd query gov vote 1 cosmos1skjwj5whet0lpe65qaq4rpq03hjxlwd9nf39lk
```

```
empowerd query gov vote [proposal-id] [voter-addr] [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for vote
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### SEE ALSO

* [empowerd query gov](empowerd_query_gov.md)	 - Querying commands for the governance module

