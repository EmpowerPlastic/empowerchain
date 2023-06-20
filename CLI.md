##  CLI testing

Tx HASH transactions submit in this <small>[form](https://docs.google.com/forms/d/e/1FAIpQLScmjUZ_VfJ0AgwdI6hl7gp1Ce8UPGe8t28YoMjgN-6FpISvTw/viewform?usp=send_form).

After sending the transactions, check its success in explorers. Here are some of them:
* https://empower.explorers.guru/
* https://explorer.stavr.tech/empower
***
##### Check info node
```bash
empowerd status 2>&1 | jq .NodeInfo
```
##### Check synchronization
```bash
empowerd status 2>&1 | jq .SyncInfo
```
##### Check logs
```bash
journalctl -u empowerd -f -o cat
```
##### Check balance
```bash
empowerd q bank balances <empower14gn80ue...>
```
##### Voting
```bash
empowerd tx gov vote <PROPOSAL_ID> <yes|no> --from $WALLET --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```
##### Unjail
```bash
empower tx slashing unjail --from $WALLET --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```
##### Delegate tokens
```bash
empowerd tx staking delegate $VALOPER <AMOUNT>umpwr--from $WALLET --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```
##### Redelegate tokens
```bash
empowerd tx staking redelegate $VALOPER $ANOTHER VALOPER <AMOUNT>umpwr --from $WALLET --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y 
```
##### Staking unbond
```bash
empowerd tx staking unbond $(empowerd keys show wallet --bech val -a) <AMOUNT>umpwr --from $WALLET --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```
##### Cancel staking unbond
```bash
empowerd tx staking cancel-unbond [validator-address] <AMOUNT>umpwr [creation_height] --from $WALLET -y
```
##### Send tokens
```bash
empowerd tx bank send wallet <empower14gn80ue...> <AMOUNT>umpwr -from $WALLET --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```
##### Multi-send tokens
```bash
empowerd tx bank send wallet <empower14gn80ue...> <AMOUNT>umpwr -from $WALLET --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```
##### Withdraw-rewards
```bash
empowerd tx distribution withdraw-rewards $(empowerd keys show wallet --bech val -a) --commission --from $WALLET --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```
##### Withdraw-all-rewards
```bash
empowerd tx distribution withdraw-all-rewards --from $WALLET --chain-id circulus-1 --gas-prices 0.1umpwr --gas-adjustment 1.5 --gas auto -y
```
##### Authz grant
```bash
empowerd tx authz grant $NEW-WALLET send --spend-limit=1000umpwr --from $WALLET -y
```
##### Authz revoke
```bash
empowerd tx authz revoke $NEW-WALLET /cosmos.bank.v1beta1.MsgSend --from $WALLET -y
```
##### Auth exect
```bash
empowerd tx bank send $WALLET1 $WALLET2 <AMOUNT>umpwr --generate-only > tx.json
```
```bash
empowerd tx authz exec tx.json --from $WALLET --fees 300umpwr
```
##### Delete node
```bash
sudo systemctl stop empowerd && \
sudo systemctl disable empowerd && \
rm /etc/systemd/system/empowerd.service && \
sudo systemctl daemon-reload && \
cd $HOME && \
rm -rf .empowerchain && \
rm -rf empowerchain && \
rm -rf $(which empowerd)
```
