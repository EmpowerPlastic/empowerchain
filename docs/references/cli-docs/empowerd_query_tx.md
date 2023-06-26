## empowerd query tx

Query for a transaction by hash, "\<addr\>/\<seq\>" combination or comma-separated signatures in a committed block

### Synopsis

Example:
```bash
$ empowerd query tx \<hash\>
```
$ empowerd query tx --type=acc_seq \<addr\>/\<sequence\>
$ empowerd query tx --type=signature \<sig1_base64\>,\<sig2_base64...\>

```
empowerd query tx --type=[hash|acc_seq|signature] [hash|acc_seq|signature] [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for tx
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
      --type string        The type to be used when querying tx, can be one of "hash", "acc_seq", "signature" (default "hash")
```

### SEE ALSO

* [empowerd query](empowerd_query.md)	 - Querying subcommands

