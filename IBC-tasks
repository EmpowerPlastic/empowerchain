# Empower Chain Testnet IBC Tasks
[Empower Testnet Explorer](https://empowerchain.exploreme.pro/dashboard)

## 0) Empower Chain wallet variables setup
```
WALLET=wallet
echo "export WALLET=wallet" >> $HOME/.bash_profile
WALLET_ADDRESS=$(empowerd keys show $WALLET -a)
echo "export WALLET_ADDRESS="$WALLET_ADDRESS >> $HOME/.bash_profile
source $HOME/.bash_profile
VALOPER_ADDRESS=$(empowerd keys show $WALLET --bech val -a)
echo 'export VALOPER_ADDRESS='${VALOPER_ADDRESS} >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## 1) IBC Transfer [EMPOWER-COSMOS] channel-2 <> channel-2765
### install go v1.20
```
ver="1.20"
wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"
rm "go$ver.linux-amd64.tar.gz"
echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile
source $HOME/.bash_profile
go version
```

### install Cosmos binaries
```
git clone https://github.com/cosmos/gaia cosmos
cd cosmos
git checkout v10.0.1
make install
```

### Cosmos wallet variables setup (also import your Empower Chain wallet mnemonic)
```
COSMOS_WALLET=cosmos-wallet
echo "export COSMOS_WALLET=cosmos-wallet" >> $HOME/.bash_profile
gaiad keys add $COSMOS_WALLET --keyring-backend test --recover
```
```
COSMOS_WALLET_ADDRESS=$(gaiad keys show $COSMOS_WALLET --keyring-backend test -a)
echo "export COSMOS_WALLET_ADDRESS="$COSMOS_WALLET_ADDRESS >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Empower —> Cosmos transfer ($MPWR)
```
empowerd tx ibc-transfer transfer transfer channel-2 $COSMOS_WALLET_ADDRESS 100000umpwr --from=$WALLET --chain-id circulus-1 --packet-timeout-height 0-0 --fees 200umpwr
```

### Cosmos —> Empower halfback transfer ($MPWR)
```
gaiad tx ibc-transfer transfer transfer channel-2765 <empower-wallet-address> 50000ibc/C3D75AA5082B8EEC8E6DE916F0CA9C1C71978A6BB0FA5AAE3E5ABE81BAF57B42 --from=$COSMOS_WALLET --fees 5000uatom --chain-id theta-testnet-001 --keyring-backend test --node https://rpc.state-sync-01.theta-testnet.polypore.xyz:443
```

### Cosmos —> Empower transfer ($ATOM)
```
gaiad tx ibc-transfer transfer transfer channel-2765 <empower-wallet-address> 100000uatom --from=$COSMOS_WALLET --fees 5000uatom --chain-id theta-testnet-001 --keyring-backend test --node https://rpc.state-sync-01.theta-testnet.polypore.xyz:443
```

[Cosmos Testnet Explorer](https://testnet.mintscan.io/cosmoshub-testnet)

---------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------

## 2) IBC Transfer [EMPOWER-STARGAZE] channel-1 <> channel-459
### install go v1.20
```
ver="1.20"
wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"
rm "go$ver.linux-amd64.tar.gz"
echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile
source $HOME/.bash_profile
go version
```

### install Stargaze binaries
```
git clone https://github.com/public-awesome/stargaze stargaze
cd stargaze
git checkout v10.0.0-beta.1
make install
```

### Stargaze wallet variables setup (also import your Empower Chain wallet mnemonic)
```
STARGAZE_WALLET=stargaze-wallet
echo "export STARGAZE_WALLET=stargaze-wallet" >> $HOME/.bash_profile
starsd keys add $STARGAZE_WALLET --keyring-backend test --recover
```
```
STARGAZE_WALLET_ADDRESS=$(starsd keys show $STARGAZE_WALLET --keyring-backend test -a)
echo "export STARGAZE_WALLET_ADDRESS="$STARGAZE_WALLET_ADDRESS >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Empower —> Stargaze transfer ($MPWR)
```
empowerd tx ibc-transfer transfer transfer channel-1 $STARGAZE_WALLET_ADDRESS 100000umpwr --from=$WALLET --chain-id circulus-1 --packet-timeout-height 0-0 --fees 200umpwr
```

### Stargaze —> Empower halfback transfer ($MPWR)
```
starsd tx ibc-transfer transfer transfer channel-459 <empower-wallet-address> 50000ibc/B077B9DE697E073055B12CEB81C0FBF259A2D418230FDF51EB348CDAD8D65FE8 --from=$STARGAZE_WALLET --fees 2000ustars --chain-id elgafar-1 --keyring-backend test --node https://stargaze-testnet-rpc.polkachu.com:443
```

### Stargaze —> Empower transfer ($STARS)
```
starsd tx ibc-transfer transfer transfer channel-459 <empower-wallet-address> 100000ustars --from=$STARGAZE_WALLET --fees 2000ustars --chain-id elgafar-1 --keyring-backend test --node https://stargaze-testnet-rpc.polkachu.com:443
```

[Stargaze Testnet Explorer](https://testnet-explorer.publicawesome.dev/stargaze)

---------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------

## 3) IBC Transfer [EMPOWER-OSMOSIS] channel-0 <> channel-155
### install go v1.19
```
ver="1.19"
wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"
rm "go$ver.linux-amd64.tar.gz"
echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile
source $HOME/.bash_profile
go version
```

### install Osmosis binaries
```
git clone https://github.com/osmosis-labs/osmosis osmosis
cd osmosis
git checkout v15.1.0-testnet
make install
```

### Osmosis wallet variables setup (also import your Empower Chain wallet mnemonic)
```
OSMOSIS_WALLET=osmosis-wallet
echo "export OSMOSIS_WALLET=osmosis-wallet" >> $HOME/.bash_profile
osmosisd keys add $OSMOSIS_WALLET --keyring-backend test --recover
```
```
OSMOSIS_WALLET_ADDRESS=$(osmosisd keys show $OSMOSIS_WALLET --keyring-backend test -a)
echo "export OSMOSIS_WALLET_ADDRESS="$OSMOSIS_WALLET_ADDRESS >> $HOME/.bash_profile
source $HOME/.bash_profile
```

### Empower —> Osmosis transfer ($MPWR)
```
empowerd tx ibc-transfer transfer transfer channel-0 $OSMOSIS_WALLET_ADDRESS 100000umpwr --from=$WALLET --chain-id circulus-1 --packet-timeout-height 0-0 --fees 200umpwr
```

### Osmosis —> Empower halfback transfer ($MPWR)
```
osmosisd tx ibc-transfer transfer transfer channel-155 <empower-wallet-address> 50000ibc/E0FDA81C892EEA14C2398519260AA706A068B36AE5BE8AE9FAD8EB1540A6E02E --from=$OSMOSIS_WALLET --fees 5000uosmo --chain-id osmo-test-5 --keyring-backend test --node https://rpc.osmotest5.osmosis.zone:443
```

### Osmosis —> Empower transfer ($aUSDC) (before to do this task, you must swap your $OSMO to $axUSDC in https://testnet.osmosis.zone/?from=OSMO&to=aUSDC)
```
osmosisd tx ibc-transfer transfer transfer channel-155 <empower-wallet-address> 100000ibc/6F34E1BD664C36CE49ACC28E60D62559A5F96C4F9A6CCE4FC5A67B2852E24CFE --from=$OSMOSIS_WALLET --fees 5000uosmo --chain-id osmo-test-5 --keyring-backend test --node https://rpc.osmotest5.osmosis.zone:443
```

### Osmosis —> Empower transfer ($OSMO)
```
osmosisd tx ibc-transfer transfer transfer channel-155 <empower-wallet-address> 100000uosmo --from=$OSMOSIS_WALLET --fees 5000uosmo --chain-id osmo-test-5 --keyring-backend test --node https://rpc.osmotest5.osmosis.zone:443
```

[Osmosis Testnet Explorer](https://testnet.mintscan.io/osmosis-testnet)
