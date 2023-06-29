## empowerd query gov deposits

Query deposits on a proposal

### Synopsis

Query details for all deposits on a proposal.
You can find the proposal-id by running "empowerd query gov proposals".

Example:
```bash
$ empowerd query gov deposits 1
```

```
empowerd query gov deposits [proposal-id] [flags]
```

### Options

```
      --count-total        count total number of records in deposits to query for
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for deposits
      --limit uint         pagination limit of deposits to query for (default 100)
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --offset uint        pagination offset of deposits to query for
  -o, --output string      Output format (text|json) (default "text")
      --page uint          pagination page of deposits to query for. This sets offset to a multiple of limit (default 1)
      --page-key string    pagination page-key of deposits to query for
      --reverse            results are sorted in descending order
```

### SEE ALSO

* [empowerd query gov](empowerd_query_gov.md)	 - Querying commands for the governance module

