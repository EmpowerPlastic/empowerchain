#  Empower commands
Commands to help you properly set up and manage an empowerchain node


##  Wallet
* create a wallet
```python
empowerd keys add <wallet_name>
```
* recover wallet
```python
empowerd keys add <wallet_name> --recover
```
* check balance
```python
empowerd q bank balances <wallet_addres>
```
* list wallets
```python
empowered keys list
```
* show account key
```python
empowered keys show <wallet_name> --bech acc
```
* show validator key
```python
empowered keys show <wallet_name> --bech val
```
* show consensus key
```python
empowered keys show <wallet_name> --bech cons
```
* show all supported addresses
```python
empowered debug addr <wallet_addres>
```
* show private key
```python
empowered keys export <wallet_name> --unarmored-hex --unsafe
```
* delete wallet
```python
empowered keys delete <wallet_name>
```

<wallet_name> - the name of your wallet, not the address!!
<wallet_addres> - wallet address

### Logs
* SyncInfo and block height
```python
empowerd status 2>&1 | jq ."SyncInfo"."latest_block_height"
```
* logs
```python
journalctl -u empowerd -f -o cat
```

* status
```python
curl localhost:26657/status
```
### Validator
* get your valoper address
```python
empowerd keys show <wallet_name> --bech val -a
```
* check the pubkey of the validator
```python
empowerd tendermint show-validator
```
* active validators list
```python
empowerd query staking validators --limit 2000 -o json | jq -r '.validators[] | select(.status=="BOND_STATUS_BONDED") | [.operator_address, .status, (.tokens|tonumber / pow(10; 6)), .description.moniker] | @csv' | column -t -s"," | sort -k3 -n -r
```
* inactive validators list
```python
empowerd query staking validators --limit 2000 -o json | jq -r '.validators[] | select(.status=="BOND_STATUS_UNBONDED") | [.operator_address, .status, (.tokens|tonumber / pow(10; 6)), .description.moniker] | @csv' | column -t -s"," | sort -k3 -n -r
```
* checking information on TX_HASH
```python
empowered query tx <TX_HASH>
```
* check how many blocks were skipped by the validator and from which block the asset
```python
empowered q slashing signing-info $(empowerd tendermint show-validator)
```
* check your peer
```python
PORTR=$(grep -A 3 "\[p2p\]" ~/.empowerchain/config/config.toml | egrep -o ":[0-9]+") 
echo $(empowerd tendermint show-node-id)@$(wget -qO- eth0.me)$PORTR
```

### Delegated, redelegation, staking, unjail, unbond

* collect rewards from all validators delegated (no commission)
```python
empowered tx distribution withdraw-all-rewards --from <wallet_name> --chain-id circulus-1 --fees 5000umpwr -y
```
* collect rewards from a separate validator or rewards + commission from your own validator
```python
empowered tx distribution withdraw-rewards <valoper_address> --from <wallet_name> --chain-id circulus-1 --fees 5000umpwr --commission -y
```
* delegate more to your stake (this is how 1 token)
```python
empowered tx staking delegate <valoper_address> 1000000umpwr --from <wallet_name> --chain-id circulus-1 --fees 5000umpwr -y
```
* redelegation to another validator
```python
empowered tx staking redelegate <src-validator-addr> <dst-validator-addr> 1000000umpwr --from <wallet_name> --chain-id circulus-1 --fees 5000umpwr -y
```
* unbond
```python
empowered tx staking unbond <addr_valoper> 1000000umpwr --from <wallet_name> --chain-id circulus-1 --fees 5000umpwr -y
```
* send coins to another address
```python
empowered tx bank send <name_wallet> <address> 1000000umpwr --chain-id circulus-1 --fees 5000umpwr -y
```
* get out of prison
```python
empowered tx slashing unjail --from <wallet_name> --chain-id circulus-1 --fees 5000umpwr -y
```

### Proposals
# list of proposals
genesisd q gov proposals

# vote for the proposal ( yes, no, abstain, nowithveto)
genesisd tx gov vote 1 yes --from <wallet_name> --fees 5000umpwr -y

### Port change
Ports used by default  26656, 26657, 9091, 9090, 6060, 1317

```python
sed -i.bak -e "s%^proxy_app = \"tcp://127.0.0.1:26658\"%proxy_app = \"tcp://127.0.0.1:27658\"%; s%^laddr = \"tcp://127.0.0.1:26657\"%laddr = \"tcp://127.0.0.1:27657\"%; s%^pprof_laddr = \"localhost:6060\"%pprof_laddr = \"localhost:6760\"%; s%^laddr = \"tcp://0.0.0.0:26656\"%laddr = \"tcp://0.0.0.0:27656\"%; s%^prometheus_listen_addr = \":26660\"%prometheus_listen_addr = \":27660\"%" $HOME/.empowerchain/config/config.toml


sed -i.bak -e "s%^address = \"0.0.0.0:9090\"%address = \"0.0.0.0:9790\"%; s%^address = \"0.0.0.0:9091\"%address = \"0.0.0.0:9791\"%" $HOME/.empowerchain/config/app.toml

sed -i.bak -e "s%^node = \"tcp://localhost:26657\"%node = \"tcp://localhost:27657\"%" $HOME/.empowerchain/config/client.toml
```


### Indexer (off)
```python
indexer="null" && \
sed -i -e "s/^indexer *=.*/indexer = \"$indexer\"/" $HOME/.empowerchain/config/config.toml
```

### Delete node *enter in one command
```python
sudo systemctl stop empowerd && \
sudo systemctl disable empowerd && \
rm /etc/systemd/system/empowerd.service && \
sudo systemctl daemon-reload && \
cd $HOME && \
rm -rf .empowerchain && \
rm -rf empowerchain && \
rm -rf $(which empowerd)
```
