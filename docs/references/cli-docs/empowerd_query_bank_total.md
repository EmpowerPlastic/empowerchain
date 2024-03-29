## empowerd query bank total

Query the total supply of coins of the chain

### Synopsis

Query total supply of coins that are held by accounts in the chain.

Example:
  $ empowerd query bank total

To query for the total supply of a specific coin denomination use:
  $ empowerd query bank total --denom=[denom]

```
empowerd query bank total [flags]
```

### Options

```
      --count-total        count total number of records in all supply totals to query for
      --denom string       The specific balance denomination to query for
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for total
      --limit uint         pagination limit of all supply totals to query for (default 100)
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
      --offset uint        pagination offset of all supply totals to query for
  -o, --output string      Output format (text|json) (default "text")
      --page uint          pagination page of all supply totals to query for. This sets offset to a multiple of limit (default 1)
      --page-key string    pagination page-key of all supply totals to query for
      --reverse            results are sorted in descending order
```

### SEE ALSO

* [empowerd query bank](empowerd_query_bank.md)	 - Querying commands for the bank module

