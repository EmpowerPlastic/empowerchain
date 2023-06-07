## empowerd tx interchain-accounts host generate-packet-data

Generates ICA packet data.

### Synopsis

generate-packet-data accepts a message string and serializes it
into packet data which is outputted to stdout. It can be used in conjunction with send-tx"
which submits pre-built packet data containing messages to be executed on the host chain.


```
empowerd tx interchain-accounts host generate-packet-data [message] [flags]
```

### Examples

```
empowerd tx interchain-accounts host generate-packet-data '{
    "@type":"/cosmos.bank.v1beta1.MsgSend",
    "from_address":"cosmos15ccshhmp0gsx29qpqq6g4zmltnnvgmyu9ueuadh9y2nc5zj0szls5gtddz",
    "to_address":"cosmos10h9stc5v6ntgeygf5xf945njqq5h32r53uquvw",
    "amount": [
        {
            "denom": "stake",
            "amount": "1000"
        }
    ]
}' --memo memo


empowerd tx interchain-accounts host generate-packet-data '[{
    "@type":"/cosmos.bank.v1beta1.MsgSend",
    "from_address":"cosmos15ccshhmp0gsx29qpqq6g4zmltnnvgmyu9ueuadh9y2nc5zj0szls5gtddz",
    "to_address":"cosmos10h9stc5v6ntgeygf5xf945njqq5h32r53uquvw",
    "amount": [
        {
            "denom": "stake",
            "amount": "1000"
        }
    ]
},
{
	"@type": "/cosmos.staking.v1beta1.MsgDelegate",
	"delegator_address": "cosmos15ccshhmp0gsx29qpqq6g4zmltnnvgmyu9ueuadh9y2nc5zj0szls5gtddz",
	"validator_address": "cosmosvaloper1qnk2n4nlkpw9xfqntladh74w6ujtulwnmxnh3k",
	"amount": {
		"denom": "stake",
		"amount": "1000"
	}
}]'
```

### Options

```
  -h, --help          help for generate-packet-data
      --memo string   an optional memo to be included in the interchain account packet data
```

### SEE ALSO

* [empowerd tx interchain-accounts host](empowerd_tx_interchain-accounts_host.md)	 - IBC interchain accounts host transaction subcommands

