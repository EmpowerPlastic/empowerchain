## Empower // Validator Setup

### Server
* recommended requirements 4 CPU / 8 GB RAM / 200 GB SSD

### Installation the node
##### Server preparing
```bash
sudo apt update && sudo apt upgrade -y && \
sudo apt install curl tar wget clang pkg-config libssl-dev libleveldb-dev jq build-essential bsdmainutils git make ncdu htop screen unzip bc fail2ban htop -y
```
##### Install Go
```bash
ver="1.20" && \
wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz" && \
sudo rm -rf /usr/local/go && \
sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz" && \
rm "go$ver.linux-amd64.tar.gz" && \
echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile && \
source $HOME/.bash_profile && \
go version
```
##### Download the binary file
```bash
Download the binary file
git clone https://github.com/EmpowerPlastic/empowerchain
cd empowerchain
git checkout v1.0.0-rc3
cd chain
make install
```
##### Initialize node (change “f5nodes” when configuring)
```bash
empowerd init f5nodes --chain-id circulus-1 && \
empowerd config chain-id circulus-1
```
##### Create wallet for node (change “f5nodes” when configuring)
* Create a new key
```bash
empowerd keys keys add f5nodes
```
* Restore an existing key using a mnemonic (optional)
```bash
empowerd keys keys add f5nodes --recover
```
##### Download genesis
```bash
wget https://raw.githubusercontent.com/karloinv/Empower/main/genesis.json -O $HOME/.archway/config/genesis.json
```
##### Download addrbook
```bash
wget -O $HOME/.archway/config/addrbook.json "https://raw.githubusercontent.com/karloinv/Empower/main/addrbook.json"
```
##### Create a service file
```bash
sudo tee /etc/systemd/system/empowerd.service > /dev/null <<EOF
[Unit]
Description=EmpowerChain Node
After=network.target

[Service]
User=$USER
Type=simple
ExecStart=$(which empowerd) start
Restart=on-failure
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
EOF
```
##### Start the node
```bash
sudo systemctl daemon-reload && sudo systemctl enable empowerd
sudo systemctl restart empowerd && sudo journalctl -u empowerd -f -o cat
```
##### Go to <small>[#faucet channel on Discord](https://discord.com/invite/e6FsMT5u) and request test tokens in format
```bash
$request <empower14gn80ue...> circulus-1
```
> If the value is false, proceed to creating a validator.
##### Create a validator
```bash
empowerd tx staking create-validator \
  --amount=5000000umpwr \
  --pubkey=$(empowerd tendermint show-validator) \
  --moniker=$MONIKER \
  --chain-id=circulus-1 \
  --commission-rate="0.10" \
  --commission-max-rate="0.20" \
  --commission-max-change-rate="0.05" \
  --min-self-delegation=1 \
  --from=$WALLET \
  --identity=$IDENTITY \
  --website=$WEBSITE \
  --details=$DETAILS \
  -y
```
***
### Update
##### Stop the node
```bash
sudo systemctl stop empowerd
```
##### Upgrade to the latest version
```bash
cd $HOME/empowerchain
git pull
git checkout v1.0.0-rc3
make build
```
##### Start the node
```bash
systemctl restart empowerd
systemctl restart empowerd
```
##### Check logs
```bash
journalctl -u empowerd -f -o cat
```
