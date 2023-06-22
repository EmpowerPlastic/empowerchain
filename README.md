# Installation Guide Validator Empower

<p align="center">
  <img style="margin: auto; height: 100px; border-radius: 50%;" src="https://user-images.githubusercontent.com/65535542/244278045-aa939243-febb-4f46-9014-7d85b59423d9.jpg">
</p>


# [Docs](https://docs.empowerchain.io/validators/validator-setup)

# Network Type:Testnet
# Chain-id: circulus-1

## Hardware Requirements
```
Minimum:
- 4 or more physical CPU cores
- At least 500GB of SSD disk storage
- At least 16GB of memory (RAM)
- At least 120mbps network bandwidth
Recommended:
- 16+ vCPUs or Intel or AMD 16 core CPU
- At least 64GB RAM
- 4TB+ nVME drives
```

# Manual Installation

### Installing Package Requirements
```
sudo apt update
sudo apt upgrade -y curl git jq lz4 build-essential unzip
bash <(curl -s "https://raw.githubusercontent.com/nodejumper-org/cosmos-scripts/master/utils/go_install.sh")
source .bash_profile
```

### Install GO
```
cd $HOME
ver="1.20.4"
wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"
rm "go$ver.linux-amd64.tar.gz"
echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> ~/.bash_profile
source ~/.bash_profile
go version
```
so the output will be
```
go version go1.20.4 linux/amd64
```

### Download Binary
```
cd $HOME
rm -rf empowerchain/
git clone https://github.com/EmpowerPlastic/empowerchain
cd empowerchain/chain
git checkout v1.0.0-rc2
make install
```

then
```
empowerd version
```
make sure empower was installed on your machine

### Intialize Node
Change "YoruNodeName" to anything you want (Validator Name)
```
empowerd config keyring-backend test
empowerd config chain-id circulus-1
empowerd init "YourNodeName" --chain-id circulus-1
```

### Download Genesis File and addrbook to your machine
```
curl -s https://raw.githubusercontent.com/EmpowerPlastic/empowerchain/main/testnets/circulus-1/genesis.json > $HOME/.empowerchain/config/genesis.json
curl -s https://snapshots2-testnet.nodejumper.io/empower-testnet/addrbook.json > $HOME/.empowerchain/config/addrbook.json
```

### Configuring Seed & Peers
```
SEEDS="258f523c96efde50d5fe0a9faeea8a3e83be22ca@seed.circulus-1.empower.aviaone.com:20272,d6a7cd9fa2bafc0087cb606de1d6d71216695c25@51.159.161.174:26656,babc3f3f7804933265ec9c40ad94f4da8e9e0017@testnet-seed.rhinostake.com:17456"
PEERS=""
sed -i 's|^seeds *=.*|seeds = "'$SEEDS'"|; s|^persistent_peers *=.*|persistent_peers = "'$PEERS'"|' $HOME/.empowerchain/config/config.toml
sed -i -e "s/^filter_peers *=.*/filter_peers = \"true\" /" $HOME/.empowerchain/config/config.toml
sed -i -e "s|^minimum-gas-prices *=.*|minimum-gas-prices = \"0.001umpwr\"|" $HOME/.empowerchain/config/app.toml
```

### Set Prunning
```
sed -i 's|^pruning *=.*|pruning = "custom"|g' $HOME/.empowerchain/config/app.toml
sed -i 's|^pruning-keep-recent  *=.*|pruning-keep-recent = "100"|g' $HOME/.empowerchain/config/app.toml
sed -i 's|^pruning-interval *=.*|pruning-interval = "10"|g' $HOME/.empowerchain/config/app.toml
sed -i 's|^snapshot-interval *=.*|snapshot-interval = 0|g' $HOME/.empowerchain/config/app.toml

sed -i 's|^minimum-gas-prices *=.*|minimum-gas-prices = "0.001umpwr"|g' $HOME/.empowerchain/config/app.toml
sed -i 's|^prometheus *=.*|prometheus = true|' $HOME/.empowerchain/config/config.toml
```

### Create Services File
```
sudo tee /etc/systemd/system/empowerd.service > /dev/null << EOF
[Unit]
Description=Empower Node
After=network-online.target
[Service]
User=$USER
ExecStart=$(which empowerd) start
Restart=on-failure
RestartSec=10
LimitNOFILE=10000
[Install]
WantedBy=multi-user.target
EOF
```
### Enable Services
```
sudo systemctl daemon-reload
sudo systemctl enable empowerd
```
then start the node
```
sudo systemctl start empowerd
```

### Check Log
```
sudo journalctl -fu empowerd -o cat
```
### Create Validator
```
empowerd tx staking create-validator \
--amount=10000000umpwr \
--pubkey=$(empowerd tendermint show-validator) \
--moniker="MONIKER" \
--website="CHANGE_TO_YOUR_WEBSITE" \
--identity="KEYBASE" \
--details="YOUR_DETAILS"\
--chain-id=circulus-1 \
--commission-rate=0.1 \
--commission-max-rate=0.2 \
--commission-max-change-rate=0.05 \
--min-self-delegation=1 \
--fees=10000umpwr \
--from=wallet \
-y
```
you can edit or remove `moniker` `website` `identity` `details` as you want

