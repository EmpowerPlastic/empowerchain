## empowerd keys parse

Parse address from hex to bech32 and vice versa

### Synopsis

Convert and print to stdout key addresses and fingerprints from
hexadecimal into bech32 cosmos prefixed format and vice versa.


```
empowerd keys parse \<hex-or-bech32-address\> [flags]
```

### Options

```
  -h, --help   help for parse
```

### Options inherited from parent commands

```
      --home string              The application home directory (default "/root/.empowerchain")
      --keyring-backend string   Select keyring's backend (os|file|kwallet|pass|test|memory) (default "os")
      --keyring-dir string       The client Keyring directory; if omitted, the default 'home' directory will be used
      --output string            Output format (text|json) (default "text")
```

### SEE ALSO

* [empowerd keys](empowerd_keys.md)	 - Manage your application's keys

