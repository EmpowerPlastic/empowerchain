
### Before doing the task must run validator first

Explorer: https://empowerchain.exploreme.pro/

## empowerx tx authz grant
```
empowerd tx authz grant YOUR_WALLET_ADDRESS send --from $WALLET --chain-id circulus-1 --gas auto --gas-adjustment 1.5 --spend-limit 1000umpwr --fees 1000umpwr
```

## empowerx tx authz revoke
```
empowerd tx authz revoke YOUR_WALLET_ADDRESS /cosmos.bank.v1beta1.MsgSend --from $WALLET --chain-id circulus-1 --gas auto --gas-adjustment 1.5 --fees 1000umpwr
```

## empowerx tx bank send
```
empowerd tx bank send YOUR_WALLET OTHER_WALLET_ADDRESS 1000umpwr --from YOUR_WALLET --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```

## empowerx tx bank multi-send
```
empowerd tx bank multi-send YOUR_WALLET OTHER_WALLET_ADDRESS SECOND_OTHER_WALLET_ADDRESS 1000umpwr --from YOUR_WALLET --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```

## empowerx tx staking delegate
```
empowerd tx staking delegate YOUR_VALOPER_ADDRESS 10000umpwr --from YOUR_WALLET --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```

## empowerx tx staking redelegate
```
empowerd tx staking redelegate YOUR_VALOPER_ADDRESS DESTINATION_VALOPER_ADDRESS 10000umpwr --from YOUR_WALLET --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```


## empowerx tx staking unbond
``` 
empowerd tx staking unbond YOUR_VALOPER_ADDRESS 10000umpwr --from YOUR_WALLET --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```

## empowerx tx cancel-unbound
```
empowerd tx staking cancel-unbond VALIDATOR_ADDRESS 100umpwr LAST_BLOCK_HEIGHT --from YOUR_WALLET --fees 500umpwr
```

## empowerd tx distribution withdraw-all-rewards
```
empowerd tx distribution withdraw-all-rewards --from YOUR_WALLET --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```

## empowerd tx distribution withdraw-rewards**
```
empowerd tx distribution withdraw-rewards VALIDATOR_ADDRESS --commission --from YOUR_WALLET --chain-id circulus-1 --fees 350umpwr
```

## empowerx tx auth exect

For this task you must create second wallet on command line or you can import it via keplr

### first command

```
empowerd tx bank send YOUR_FIRST_WALLET_ADDRESS YOUR_SECOND_WALLET_ADDRESS 1000umpwr --generate-only > tx.json
```

### second command

```
empowerd tx authz exec tx.json --from YOUR_WALLET --fees 200umpwr
```