# CLI: Sdk transactions

Create a second wallet (save your mnemonics) to use as a grantee-wallet and then replace the grantee-wallet variable in the commands with your second wallet address. 
So you will have 2 wallets
1. wallet > main wallet
2. grantee-wallet > secondary wallet for transactions
Make sure you have enough $MPWR tokens in your wallet to make transactions.


## empowerd tx authz grant
Grant authorization to your secondary wallet
```
empowerd tx authz grant grantee-wallet send --from wallet
```


## empowerd tx authz exec
First creates tx.json and then signs it
```
empowerd tx bank send wallet grantee-wallet 100umpwr --generate-only > tx.json
```
```
empowerd tx authz exec tx.json --from wallet
```

## empowerd tx authz revoke
Used to revoke the authorization from the wallet
```
empowerd tx authz revoke grantee-wallet /cosmos.bank.v1beta1.MsgSend --from=wallet --fees 200umpwr
```

## empowerd tx bank send
Use to send balance.
```
empowerd tx bank send wallet empower1falklhdx5yd2lunm409z0qn8kyq2zcclese6em 1000umpwr --fees 200umpwr
```


## empowerd tx bank multi-send
Use to send balance to multiple accounts.
```
empowerd tx bank multi-send wallet empower1falklhdx5yd2lunm409z0qn8kyq2zcclese6em empower1s492paw57du0kpudjr7pfwt350cprma7hhxh8k 100umpwr --fees 200umpwr
```
## empowerd tx staking create-validator (optional)
Used to create a validator. Change ``Moniker`` name.

```
empowerd tx staking create-validator \
--amount=1000000umpwr \
--pubkey=$(empowerd tendermint show-validator) \
--moniker="Moniker" \
--chain-id=circulus-1 \
--commission-rate=0.10 \
--commission-max-rate=0.20 \
--commission-max-change-rate=0.01 \
--min-self-delegation=1 \
--from=wallet \
--gas-prices=0.1umpwr \
--gas-adjustment=1.5 \
--gas=auto \
-y 
```

## empowerd tx staking edit-validator (optional)
Used to edit Validator info. For example change value of ```--details`` flag.
```
empowerd tx staking edit-validator --from=wallet --details="Geralt" --gas-prices=0.1umpwr --gas-adjustment=1.5 --gas=auto
```

## empowerd tx staking delegate
Use to stake MPWR to a validator.
```
empowerd tx staking delegate empowervaloper1s492paw57du0kpudjr7pfwt350cprma70vccfr 1000umpwr --fees 200umpwr --from wallet
```


## empowerd tx staking redelegate
Use to stake your MPWR to another validator from staked one.
```
empowerd tx staking redelegate $(empowerd keys show wallet --bech val -a) empowervaloper1s492paw57du0kpudjr7pfwt350cprma70vccfr 1000umpwr --from wallet --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y 
```


## empowerd tx staking unbond 
Used to unbond the staked balance.Save blockheight that command executed, will be use cancel-unbond task.
```
empowerd tx staking unbond empowervaloper1s492paw57du0kpudjr7pfwt350cprma70vccfr 10umpwr --fees 200umpwr --from wallet
```


## empowerd tx staking cancel-unbond 
Used to stop the unbond process. Change ``blockheight`` with previous blockheight value.
```
empowerd tx staking cancel-unbond empowervaloper1s492paw57du0kpudjr7pfwt350cprma70vccfr 10umpwr blockheight --fees 200umpwr --from wallet
 ```





## empowerd tx distribution withdraw-all-rewards 
Used to withdraw Stake rewards from all validators. Wait a while for the prize to accumulate and then execute.
```
empowerd tx distribution withdraw-all-rewards --from wallet --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y 
``` 


## empowerd tx distribution withdraw-rewards
Used to withdraw Stake rewards from the validator of your choice. In this example you claim from your own validator. Wait a while for the prize to accumulate and then execute.
```
empowerd tx distribution withdraw-rewards $(empowerd keys show wallet --bech val -a) --commission --from wallet --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y 
```
