## empowerd query wasm contract-state raw

Prints out internal state for key of a contract given its address

### Synopsis

Prints out internal state for of a contract given its address

```
empowerd query wasm contract-state raw [bech32_address] [key] [flags]
```

### Options

```
      --ascii              ascii encoded key argument
      --b64                base64 encoded key argument
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for raw
      --hex                hex encoded key argument
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### SEE ALSO

* [empowerd query wasm contract-state](empowerd_query_wasm_contract-state.md)	 - Querying commands for the wasm module

