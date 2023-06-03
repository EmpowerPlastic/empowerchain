## empowerd query wasm contract

Prints out metadata of a contract given its address

### Synopsis

Prints out metadata of a contract given its address

```
empowerd query wasm contract [bech32_address] [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for contract
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### SEE ALSO

* [empowerd query wasm](empowerd_query_wasm.md)	 - Querying commands for the wasm module

