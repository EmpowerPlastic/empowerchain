## empowerd rollback

rollback cosmos-sdk and tendermint state by one height

### Synopsis


A state rollback is performed to recover from an incorrect application state transition,
when Tendermint has persisted an incorrect app hash and is thus unable to make
progress. Rollback overwrites a state at height n with the state at height n - 1.
The application also rolls back to height n - 1. No blocks are removed, so upon
restarting Tendermint the transactions in block n will be re-executed against the
application.


```
empowerd rollback [flags]
```

### Options

```
      --hard          remove last block as well as state
  -h, --help          help for rollback
      --home string   The application home directory (default "/root/.empowerchain")
```

### SEE ALSO

* [empowerd](empowerd.md)	 - EmpowerChain CLI

