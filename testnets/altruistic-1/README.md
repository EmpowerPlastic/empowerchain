![empower](https://user-images.githubusercontent.com/104348282/192093493-67779857-653e-4018-8c78-49530690f7a0.png)

# Prepare testnet altruistic-1
**Update packages and install required packages**
```bash
sudo apt update && sudo apt upgrade -y && \
sudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential bsdmainutils git make ncdu gcc git jq chrony liblz4-tool -y
```

**Install Go 1.18.3**
```bash
cd $HOME && version="1.18.3" && \
wget "https://golang.org/dl/go$version.linux-amd64.tar.gz" && \
sudo rm -rf /usr/local/go && \
sudo tar -C /usr/local -xzf "go$version.linux-amd64.tar.gz" && \
rm "go$version.linux-amd64.tar.gz" && \
echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile && \
source $HOME/.bash_profile && \
go version
```

**Install binary empowerd**
```bash
cd $HOME && git clone https://github.com/empowerchain/empowerchain && \
cd empowerchain/chain && \
make install && \
empowerd version --long | head
```

**Init moniker and set chain-id**
```bash
empowerd init <MONIKER> --chain-id altruistic-1 && \
empowerd config chain-id altruistic-1
```

**Create wallet**
```bash
empowerd keys add <WALLET_NAME>
```
🔴 **Save the mnemonic of your wallet!**

**Add genesis account**
```bash
empowerd add-genesis-account <WALLET_NAME> 1000000umpwr
```

**Create gentx**
```bash
empowerd gentx <WALLET_NAME> 1000000umpwr \
--chain-id=altruistic-1 \
--moniker="<MONIKER>" \
--commission-max-change-rate 0.1 \
--commission-max-rate 0.2 \
--commission-rate 0.05 \
--pubkey $(empowerd tendermint show-validator) \
--website="" \
--security-contact="" \
--identity="" \
--details=""
```

After executing this command, you have a gentx. Submit a pull request (gentx folder) with the given gentx
```bash
File Genesis transaction written to "/.empowerchain/config/gentx/gentx-xxx.json"
```
🟡 Save **priv_validator_key.json** in **config** folder!
