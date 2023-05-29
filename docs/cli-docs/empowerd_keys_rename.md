## empowerd keys rename

Rename an existing key

### Synopsis

Rename a key from the Keybase backend.

Note that renaming offline or ledger keys will rename
only the public key references stored locally, i.e.
private keys stored in a ledger device cannot be renamed with the CLI.


```
empowerd keys rename \<old_name\> \<new_name\> [flags]
```

### Options

```
  -h, --help   help for rename
  -y, --yes    Skip confirmation prompt when renaming offline or ledger key references
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

