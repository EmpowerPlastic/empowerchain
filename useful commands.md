# Wallet
### create new wallet
```
empowerd keys add wallet
```
change "Wallet" to any name you want

### recover wallet
```
empowerd keys add wallet --recover
```
then enter the memonic

### see key list
```
empowerd keys list
```
### Delete Wallet
```
empowerd keys delete wallet
```
### Show Balance
```
empowerd query bank balances (address)
```
### Transfer Funds
```
empowerd tx send (from address) (destination address) 100000000umpwr
```

# Services
### Start Node
```
sudo systemctl start empowerd
```
### Stop Node
```
sudo systemctl stop empowerd
```
### Restart Node
```
sudo systemctl restart empowerd
```
### Check Logs
```
journalctl -fu empowerd -o cat
```

## Vote
```
empowerd tx gov vote 1 yes --from wallet --chain-id=circulus-1
```

## Stake
### Delegate 
```
empowerd tx staking delegate $(empowerd keys show wallet --bech val -a) 1000000umpwr --from wallet --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```
## Redelegate 
```
empowerd tx staking delegate YOUR_TO_VALOPER_ADDRESS 1000000umpwr --from wallet --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```
## Withdraw
```
empowerd tx distribution withdraw-all-rewards --from wallet --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```

# Validator
### Edit Validator
```
empowerd tx staking edit-validator \
  --moniker=$MONIKER \
  --identity=<your_keybase_id> \
  --website="<your_website>" \
  --details="<your_validator_description>" \
  --chain-id=circulus-1 \
  --from=wallet
```
### Unjail Validator
```
empowerd tx slashing unjail \
  --broadcast-mode=block \
  --from=wallet \
  --chain-id=circulus-1 \
  --gas=auto
```
# Delete Validator
```
sudo systemctl stop empowerd && sudo systemctl disable empowerd && sudo rm /etc/systemd/system/empowerd.service && sudo systemctl daemon-reload && rm -rf $HOME/.empowerchain  && sudo rm -rf $(which empowerd) 
```