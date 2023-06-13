## 🛠 Manual installation

### Updating packages & installing dependencies

  `sudo apt update && sudo apt upgrade -y`

  `sudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y`
  
### Install go

```
cd $HOME
VER="1.20.4"
wget "https://golang.org/dl/go$VER.linux-amd64.tar.gz"
sudo tar -C /usr/local -xzf "go$VER.linux-amd64.tar.gz"
sudo rm -rf  "go$VER.linux-amd64.tar.gz"
echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile
source $HOME/.bash_profile
#Check GO version
go version
```


### Download and compile binaries
```
cd $HOME
sudo rm -rf empowerchain
git clone https://github.com/EmpowerPlastic/empowerchain
cd empowerchain/chain
git checkout v1.0.0-rc2
make install
#Check empowerd version
empowerd version # v1.0.0-rc2
```
   
## Configure and start the application
```
empowerd config chain-id circulus-1
empowerd init [MONIKER] --chain-id circulus-1
```

## Download genesis
```
curl -s https://raw.githubusercontent.com/EmpowerPlastic/empowerchain/main/testnets/circulus-1/genesis.json > $HOME/.empowerchain/config/genesis.json
```
   
## Set seeds
```
SEEDS="258f523c96efde50d5fe0a9faeea8a3e83be22ca@seed.circulus-1.empower.aviaone.com:20272,<br>d6a7cd9fa2bafc0087cb606de1d6d71216695c25@51.159.161.174:26656,<br>babc3f3f7804933265ec9c40ad94f4da8e9e0017@testnet-seed.rhinostake.com:17456"
sed -i -e "s\|^seeds *=.*\|seeds = \"$SEEDS\"\|" $HOME/.empowerchain/config/config.toml
```
    
## Configure pruning
```
PRUNING="custom"
PRUNING_KEEP_RECENT="100"
PRUNING_INTERVAL="10"
    
sed -i -e "s/^pruning *=.*/pruning = \"$PRUNING\"/" $HOME/.empowerchain/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \
\"$PRUNING_KEEP_RECENT\"/" $HOME/.empowerchain/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \
\"$PRUNING_INTERVAL\"/" $HOME/.empowerchain/config/app.toml'
```
  
## Clean up old data

```
empowerd tendermint unsafe-reset-all --home $HOME/.empowerchain --keep-addr-book
```
   
## 🛎 Service with SystemD

Create the service file
```
  sudo tee <<EOF >/dev/null /etc/systemd/system/empowerd.service
  [Unit]
  Description=empowerd Empower daemon
  After=network-online.target
  [Service]
  User=$USER
  ExecStart=$HOME/go/bin/empowerd start
  Restart=on-failure
  RestartSec=3
  LimitNOFILE=4096
  [Install]
  WantedBy=multi-user.target
  EOF
```
    
### Enable, start service and check logs
```
  sudo systemctl daemon-reload
  sudo systemctl enable empowerd
  sudo systemctl restart empowerd
  sudo journalctl -u empowerd -f'
```
  
## 🗝Wallet
    
### Create wallet

Don’t forget to save the mnemonic.
```
empowerd keys add wallet'
```
### Restore wallet
```
empowerd keys add wallet --recover'
``` 
### Deposit funds into your wallet

Before creating a validator, you have to deposit funds in your wallet, go to the Empower  discord server and request them in the faucet channel.
 ```  
  $request [address wallet]
```
   
## 📝Validator
   
### Create Empower validator

Before creating a validator, you should make sure that the node is synchronised and check the balance of your wallet.
   
#### Check synchronisation status
  Once your node is fully synchronised, the output will read false.
```   
empowerd status 2>&1 \| jq .SyncInfo'
```

#### Check your balance
```
empowerd query bank balances $wallet_ADDRESS'
```

#### Create validator
```
empowerd tx staking create-validator \
--amount 1000000umpwr \
--from $wallet \
--commission-max-change-rate "0.01" \
--commission-max-rate "0.2" \
--commission-rate "0.05" \
--min-self-delegation "1" \
--pubkey  $(empowerd tendermint show-validator) \
--moniker [MONIKER] \
--chain-id $empowerd \
--gas auto \
--gas-adjustment 1.3 \
--fees 10000umpwr '
```

You can add the flags — website — security-contact — identity — details (optional)
```
--website <WEB_SITE_URL> \
--security-contact <YOUR_CONTACT> \
--identity <KEYBASE_IDENTITY> \
--details <YOUR_VALIDATOR_DETAILS>'
```

## 🎛 Monitoring

If you want to set up a monitoring and alerting system use our guide to monitoring Cosmos nodes with tenderduty.

## 🛎 SystemD commands

#### Stop the service
```
sudo systemctl stop empowerd
```
#### Start service
```
sudo systemctl start empowerd
```
#### Restart service
```
sudo systemctl restart empowerd
```
#### Check logs
```
sudo journalctl -u empowerd -f
```
#### Check status
```
sudo systemctl status empowerd
```
   
## 📈 Node information
### Synchronization information
```
empowerd status 2>&1 \| jq .SyncInfo
```
### Node information
```
empowerd status 2>&1 \| jq .NodeInfo
```
### Validator information
```
empowerd status 2>&1 \| jq .ValidatorInfo
```
### Get peers
```
echo $(empowerd tendermint show-node-id)'@'$(curl -s ifconfig.me)':'$(cat $HOME/.empowerd/config/config.toml \| sed -n '/Address to listen for incoming connection/{n;p;}' \| sed 's/.*://; s/".*//')
```
   
## 🔏 Wallet operation
### Check balance
```
empowerd query bank balances $wallet_ADDRESS
```
#### Wallet Key List
```
empowerd keys list
```
#### Create a new wallet
```
empowerd keys add $wallet
```
#### Wallet recovering
```
empowerd keys add $wallet --recover
```
#### Delete wallet
```
empowerd keys delete $wallet
```
#### Transfer funds
```
empowerd tx bank send $wallet_ADDRESS <ANOTHER_wallet_ADDRESS> 800000000umpwr --gas auto --gas-adjustment 1.3
```
  
## 💬 Governance
### List all proposals
```
empowerd query gov proposals
```
### Vote YES
```
empowerd tx gov vote 1 yes --from $wallet --chain-id $EMPOWER_CHAIN_ID --gas-adjustment 1.4 --gas auto -y
```
### Vote NO
```
empowerd tx gov vote 1 no --from $wallet --chain-id $EMPOWER_CHAIN_ID --gas-adjustment 1.4 --gas auto -y
```
### Refrain
```
empowerd tx gov vote 1 abstain --from $wallet --chain-id $EMPOWER_CHAIN_ID --gas-adjustment 1.4 --gas auto -y
```
    
## 🚰 Staking, delegation and rewards
### Withdraw all rewards
```
empowerd tx distribution withdraw-all-rewards --from $wallet --chain-id circulus-1 --gas auto --gas-adjustment 1.3
```
### Withdraw commission
```
empowerd tx distribution withdraw-rewards $EMPOWER_VALOPER_ADDRESS --from $wallet --commission --fees 200umpwr
```
### Delegate Stake
```
empowerd tx staking delegate $EMPOWER_VALOPER_ADDRESS 10000000utia --from $wallet --chain-id circulus-1 --gas=auto --gas-adjustment 1.3
```
   
## ✔️ Validator operation
### Edit validator
```
empowerd tx staking edit-validator \
--moniker=$NODENAME \
--identity=<keybase_id> \
--website="<website>" \
--details="<validator_description>" \
--chain-id=$EMPOWER_CHAIN_ID \
--from=$wallet  --fees=200utia
```
    
## Validator information
```
empowerd status 2>&1 \| jq .ValidatorInfo
```
### Jailing information
```
empowerd q slashing signing-info $(empowerd tendermint show-validator)
```
### Validator unjailing
```
empowerd tx slashing unjail --broadcast-mode=block --from $wallet --chain-id $EMPOWER_CHAIN_ID --gas auto --gas-adjustment 1.5
```
## 🗑 Delete node
```
sudo systemctl stop empowerdsudo systemctl disable empowerdsudo rm -rf /etc/systemd/system/empowerd*
sudo systemctl daemon-reload
sudo rm $(which empowerd)
sudo rm -rf $HOME/.empowerd'
```
