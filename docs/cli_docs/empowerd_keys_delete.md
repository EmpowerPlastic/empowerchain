## empowerd keys delete

Delete the given keys

### Synopsis

Delete keys from the Keybase backend.

Note that removing offline or ledger keys will remove
only the public key references stored locally, i.e.
private keys stored in a ledger device cannot be deleted with the CLI.


```
empowerd keys delete \<name\>... [flags]
```

### Options

```
  -f, --force   Remove the key unconditionally without asking for the passphrase. Deprecated.
  -h, --help    help for delete
  -y, --yes     Skip confirmation prompt when deleting offline or ledger key references
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

