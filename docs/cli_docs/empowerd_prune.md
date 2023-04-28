## empowerd prune

Prune app history states by keeping the recent heights and deleting old heights

### Synopsis

Prune app history states by keeping the recent heights and deleting old heights.
		The pruning option is provided via the '--pruning' flag or alternatively with '--pruning-keep-recent'
		
		For '--pruning' the options are as follows:
		
		default: the last 362880 states are kept
		nothing: all historic states will be saved, nothing will be deleted (i.e. archiving node)
		everything: 2 latest states will be kept
		custom: allow pruning options to be manually specified through 'pruning-keep-recent'.
		besides pruning options, database home directory and database backend type should also be specified via flags
		'--home' and '--app-db-backend'.
		valid app-db-backend type includes 'goleveldb', 'cleveldb', 'rocksdb', 'boltdb', and 'badgerdb'.
		

```
empowerd prune [flags]
```

### Examples

```
prune --home './' --app-db-backend 'goleveldb' --pruning 'custom' --pruning-keep-recent 100
```

### Options

```
      --app-db-backend string      The type of database for application and snapshots databases
  -h, --help                       help for prune
      --home string                The database home directory
      --pruning string             Pruning strategy (default|nothing|everything|custom) (default "default")
      --pruning-interval uint      Height interval at which pruned heights are removed from disk (ignored if pruning is not 'custom'), 
                                   		this is not used by this command but kept for compatibility with the complete pruning options (default 10)
      --pruning-keep-recent uint   Number of recent heights to keep on disk (ignored if pruning is not 'custom')
```

### SEE ALSO

* [empowerd](empowerd.md)	 - EmpowerChain CLI

