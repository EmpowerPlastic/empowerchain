## empowerd query group proposals-by-group-policy

Query for proposals by account address of group policy with pagination flags

```
empowerd query group proposals-by-group-policy [group-policy-account] [flags]
```

### Options

```
      --count-total        count total number of records in proposals-by-group-policy to query for
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for proposals-by-group-policy
      --limit uint         pagination limit of proposals-by-group-policy to query for (default 100)
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --offset uint        pagination offset of proposals-by-group-policy to query for
  -o, --output string      Output format (text|json) (default "text")
      --page uint          pagination page of proposals-by-group-policy to query for. This sets offset to a multiple of limit (default 1)
      --page-key string    pagination page-key of proposals-by-group-policy to query for
      --reverse            results are sorted in descending order
```

### SEE ALSO

* [empowerd query group](empowerd_query_group.md)	 - Querying commands for the group module

