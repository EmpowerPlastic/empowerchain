## empowerd query gov proposer

Query the proposer of a governance proposal

### Synopsis

Query which address proposed a proposal with a given ID.

Example:
```bash
$ empowerd query gov proposer 1
```

```
empowerd query gov proposer [proposal-id] [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for proposer
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### SEE ALSO

* [empowerd query gov](empowerd_query_gov.md)	 - Querying commands for the governance module

