## empowerd genesis single-validator

Edits a genesis file to work with a single validator

### Synopsis

Edits a genesis file to work with a single validator.
Params:
	- 1st param: Path to the genesis file
	- 2nd param: Name of the key from keyring to use as validator if preset is devnet
	- 3rd param: Base64 encoded tendermint pubkey of the validator if preset is devnet (present in the priv_validator_key.json file)
	- 4th param: Chain ID (optional, default: emp-devnet-1)
Example:
	empowerd genesis single-validator genesis.json validator 1dGwzfPmDwneX2qievD3CMVXzEupNOjEBZkwqpTbXqY=
Output:
	- Creates a new genesis file in the same directory with the suffix .generated


```
empowerd genesis single-validator path_to_genesis_file operator_key_name consensus_pubkey [chain_id] [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for single-validator
      --home string        The application home directory (default "/root/.empowerchain")
      --node string        \<host\>:\<port\> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### SEE ALSO

* [empowerd genesis](empowerd_genesis.md)	 - Application's genesis-related subcommands

