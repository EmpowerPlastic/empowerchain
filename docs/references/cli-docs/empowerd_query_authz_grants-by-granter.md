## empowerd query authz grants-by-granter

query authorization grants granted by granter

### Synopsis

Query authorization grants granted by granter.
Examples:
$ empowerd q authz grants-by-granter cosmos1skj..

```
empowerd query authz grants-by-granter [granter-addr] [flags]
```

### Options

```
      --count-total        count total number of records in granter-grants to query for
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for grants-by-granter
      --limit uint         pagination limit of granter-grants to query for (default 100)
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --offset uint        pagination offset of granter-grants to query for
  -o, --output string      Output format (text|json) (default "text")
      --page uint          pagination page of granter-grants to query for. This sets offset to a multiple of limit (default 1)
      --page-key string    pagination page-key of granter-grants to query for
      --reverse            results are sorted in descending order
```

### SEE ALSO

* [empowerd query authz](empowerd_query_authz.md)	 - Querying commands for the authz module

