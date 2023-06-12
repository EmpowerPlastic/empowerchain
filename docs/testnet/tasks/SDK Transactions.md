# Guide For Task SDK Transactions

## Authz grant
```
empowerd tx authz grant new_wallet send --spend-limit=1000umpwr --from wallet -y
```

## Authz revoke
```
empowerd tx authz revoke new_wallet /cosmos.bank.v1beta1.MsgSend --from wallet -y
```

## Auth exect
```
empowerd tx bank send wallet_address_1 wallet_address_2 1000umpwr --generate-only > tx.json
empowerd tx authz exec tx.json --from wallet --fees 200umpwr
```

## Send
```
empowerd tx bank send wallet YOUR_TO_WALLET_ADDRESS 1000000umpwr --from wallet --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```

## Multi-send
```
empowerd tx bank multi-send wallet wallet-1 wallet-2 1000umpwr --from wallet --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```

## Delegate
```
empowerd tx staking delegate YOUR_TO_VALOPER_ADDRESS 1000000umpwr --from wallet --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```

## Redelegate
```
empowerd tx staking redelegate $(empowerd keys show wallet --bech val -a) YOUR_TO_VALOPER_ADDRESS 1000000umpwr --from wallet --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```

## Unbond
``` 
empowerd tx staking unbond $(empowerd keys show wallet --bech val -a) 1000000umpwr --from wallet --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```

## Cancel-unbound
```
empowerd tx staking cancel-unbond valoperaddress 100umpwr WRITE_UNBOND_HIGHT --from wallet -y
```

## Withdraw-rewards
```
empowerd tx distribution withdraw-all-rewards --from wallet --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```

## Withdraw-rewards with commission
```
empowerd tx distribution withdraw-rewards $(empowerd keys show wallet --bech val -a) --commission --from wallet --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```

Do not forget to fill out the form: https://docs.google.com/forms/d/e/1FAIpQLScmjUZ_VfJ0AgwdI6hl7gp1Ce8UPGe8t28YoMjgN-6FpISvTw/viewform
