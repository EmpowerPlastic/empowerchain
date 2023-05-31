## empowerd debug pubkey-raw

Decode a ED25519 or secp256k1 pubkey from hex, base64, or bech32

### Synopsis

Decode a pubkey from hex, base64, or bech32.
Example:
```bash
$ empowerd debug pubkey-raw TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlz
```
$ empowerd debug pubkey-raw cosmos1e0jnq2sun3dzjh8p2xq95kk0expwmd7shwjpfg
			

```
empowerd debug pubkey-raw [pubkey] -t [{ed25519, secp256k1}] [flags]
```

### Options

```
  -h, --help          help for pubkey-raw
  -t, --type string   Pubkey type to decode (oneof secp256k1, ed25519) (default "ed25519")
```

### SEE ALSO

* [empowerd debug](empowerd_debug.md)	 - Tool for helping with debugging your application

