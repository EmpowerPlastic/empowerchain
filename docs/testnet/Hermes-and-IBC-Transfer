# Empower - Osmosis - Stars - Cosmos IBC transfer Hermes


For IBC transfer it is not mandatory to install hermes as the channels are open, you can use the transfer commands at the end of the repo after installing the testnet binary.
Hermes installation is included as a tutorial guide.
This guide allows you to transfer IBC with osmosis osmo-test-5 chain over Empower circulus-1 chain installed server using Hermes. I am not responsible for any damages. Do not forget to take backups.
If you encounter any error while executing the commands, you can tag me on discord and ask.


irlandali_turist#7300 

## For Ubuntu 22
## Download Hermes Binary 

```
cd $HOME
mkdir -p $HOME/.hermes/bin

version="v1.5.0"
wget "https://github.com/informalsystems/ibc-rs/releases/download/${version}/hermes-${version}-x86_64-unknown-linux-gnu.tar.gz"

tar -C $HOME/.hermes/bin/ -vxzf hermes-${version}-x86_64-unknown-linux-gnu.tar.gz

rm hermes-$version-x86_64-unknown-linux-gnu.tar.gz

```
## For Ubuntu 20, start from here

```
curl https://sh.rustup.rs -sSf | sh
source "$HOME/.cargo/env"
```

```
git clone https://github.com/informalsystems/hermes.git
cd hermes
cargo build --release --bin hermes
```

```
cd $HOME
mkdir -p $HOME/.hermes/bin
```

```
mv $HOME/hermes/target/release/hermes $HOME/.hermes/bin/
```

## Edit PATH
```
echo "export PATH=$PATH:$HOME/.hermes/bin" >> $HOME/.bash_profile
source $HOME/.bash_profile

hermes version
```

## Create hermes service file

```
tee $HOME/hermesd.service > /dev/null <<EOF
[Unit]
Description=HERMES
After=network.target
[Service]
Type=simple
User=$USER
ExecStart=$(which hermes) start
Restart=on-failure
RestartSec=10
LimitNOFILE=65535
[Install]
WantedBy=multi-user.target
EOF

sudo mv $HOME/hermesd.service /etc/systemd/system/


```
## Enable Hermes service

```
sudo systemctl daemon-reload
sudo systemctl enable hermesd
```

## Create hermes config // change memo_prefix for each chain

```
tee $HOME/.hermes/config.toml > /dev/null <<EOF
[global]
log_level = 'debug'
[mode]
[mode.clients]
enabled = true
refresh = true
misbehaviour = true
[mode.connections]
enabled = false
[mode.channels]
enabled = false
[mode.packets]
enabled = true
clear_interval = 100
clear_on_start = true
tx_confirmation = false
auto_register_counterparty_payee = false
[rest]
enabled = false
host = '127.0.0.1'
port = 3000
[telemetry]
enabled = false
host = '127.0.0.1'
port = 3001


[[chains]]
id = 'osmo-test-5'
ccv_consumer_chain = false

rpc_addr = 'https://rpc.osmotest5.osmosis.zone:443'
grpc_addr = 'https://grpc.osmotest5.osmosis.zone:443'
websocket_addr = 'wss://rpc.osmotest5.osmosis.zone/websocket'
rpc_timeout = '10s'
trusted_node = false
batch_delay = '500ms'   # hermes default 500ms

account_prefix = 'osmo'
key_name = 'osmo-wallet'
store_prefix = 'ibc'

default_gas = 800000
max_gas = 1600000
gas_price = { price = 0.025, denom = 'uosmo' }
gas_multiplier = 1.2

max_msg_num = 30
max_tx_size = 180000   # hermes default 2097152

clock_drift = '10s'
max_block_time = '30s'
trust_threshold = { numerator = '1', denominator = '3' }
address_type = { derivation = 'cosmos' }

memo_prefix = 'Geralt irlandali_turist#7300'
[chains.packet_filter]
policy = 'allow'
list = [
  ['transfer', 'channel-155' ], # circulus-1 channel-0
]

[[chains]]
id = 'circulus-1'
ccv_consumer_chain = false

rpc_addr = 'http://127.0.0.1:26657'
grpc_addr = 'http://127.0.0.1:9090'
websocket_addr = 'ws://127.0.0.1:26657/websocket'
rpc_timeout = '10s'
trusted_node = false
batch_delay = '500ms'

account_prefix = 'empower'
key_name = 'empower-wallet'
store_prefix = 'ibc'

default_gas = 800000
max_gas = 1600000
gas_price = { price = 0.01, denom = 'umpwr' }
gas_multiplier = 1.2

max_msg_num = 30
max_tx_size = 180000

clock_drift = '10s'
max_block_time = '30s'
trust_threshold = { numerator = '1', denominator = '3' }
address_type = { derivation = 'cosmos' }

memo_prefix = 'Geralt irlandali_turist#7300'
[chains.packet_filter]
policy = 'allow'
list = [
  ['transfer', 'channel-0, channel-1, channel-2'], # osmosis channel-155
]

[[chains]]
id = 'theta-testnet-001'
ccv_consumer_chain = false

rpc_addr = 'https://rpc.sentry-01.theta-testnet.polypore.xyz'
grpc_addr = 'https://grpc.sentry-01.theta-testnet.polypore.xyz'
websocket_addr = 'wss://rpc.sentry-01.theta-testnet.polypore.xyz/websocket'
rpc_timeout = '10s'
trusted_node = false
batch_delay = '500ms'

account_prefix = 'cosmos'
key_name = 'cosmos-wallet'
store_prefix = 'ibc'

default_gas = 800000
max_gas = 1600000
gas_price = { price = 0.0025, denom = 'uatom' }
gas_multiplier = 1.2

max_msg_num = 30
max_tx_size = 180000

clock_drift = '10s'
max_block_time = '30s'
trust_threshold = { numerator = '1', denominator = '3' }
address_type = { derivation = 'cosmos' }

memo_prefix = 'Geralt irlandali_turist#7300'
[chains.packet_filter]
policy = 'allow'
list = [
  ['transfer', 'channel-2765'], # circulus-1 channel-2
]

[[chains]]
id = 'elgafar-1'
ccv_consumer_chain = false

rpc_addr = 'https://rpc.elgafar-1.stargaze-apis.com'
grpc_addr = 'http://grpc-1.elgafar-1.stargaze-apis.com:26660'
websocket_addr = 'wss://rpc.elgafar-1.stargaze-apis.com/websocket'
rpc_timeout = '10s'
trusted_node = false
batch_delay = '500ms'

account_prefix = 'stars'
key_name = 'stars-wallet'
store_prefix = 'ibc'

default_gas = 800000
max_gas = 1600000
gas_price = { price = 0.03, denom = 'ustars' }
gas_multiplier = 1.2

max_msg_num = 30
max_tx_size = 180000

clock_drift = '10s'
max_block_time = '30s'
trust_threshold = { numerator = '1', denominator = '3' }
address_type = { derivation = 'cosmos' }

memo_prefix = 'Geralt irlandali_turist#7300'
[chains.packet_filter]
policy = 'allow'
list = [
  ['transfer', 'channel-459'], # circulus-1 channel-2
]

EOF
```

## test config
```
hermes config validate
```

## Add relayer wallets mnemonics. Enter your mnemonics after every command
```
read mnemonic && echo "$mnemonic" > $HOME/.hermes/empower-wallet.txt
## enter your mnemonics
```
```
read mnemonic && echo "$mnemonic" > $HOME/.hermes/osmo-wallet.txt
## enter your mnemonics
```
```
read mnemonic && echo "$mnemonic" > $HOME/.hermes/cosmos-wallet.txt
## enter your mnemonics
```
```
read mnemonic && echo "$mnemonic" > $HOME/.hermes/stars-wallet.txt
## enter your mnemonics
```

## Add wallet addresses
```
hermes keys add --key-name empower-wallet --chain circulus-1 --mnemonic-file $HOME/.hermes/empower-wallet.txt
hermes keys add --key-name osmo-wallet   --chain osmo-test-5 --mnemonic-file $HOME/.hermes/osmo-wallet.txt
hermes keys add --key-name cosmos-wallet   --chain theta-testnet-001 --mnemonic-file $HOME/.hermes/cosmos-wallet.txt
hermes keys add --key-name stars-wallet   --chain elgafar-1 --mnemonic-file $HOME/.hermes/stars-wallet.txt
```

## Start hermes
```
sudo systemctl start hermesd && journalctl -u hermesd -f -o cat
```
## If it works properly, you can proceed to the next steps.



## build osmosis binary (go 1.19 is required) To import the Osmosis wallet and execute transfers, you need to install Osmosis binary.
```
cd $HOME
git clone https://github.com/osmosis-labs/osmosis
cd osmosis
git checkout v15.1.2
make install
```

## Import osmosis wallet or remove --recover flag to create new one. Do not forget to save mnemonics.

```
osmosisd keys add osmo-wallet --recover
```

## You need osmosis test token, you can use faucet
```
https://faucet.osmotest5.osmosis.zone/
```

## Update clients example
```
hermes update client --host-chain circulus-1 --client 07-tendermint-1
hermes update client --host-chain osmo-test-5 --client 07-tendermint-146
```

## Ibc transfer commands, you can check the txhash to be sure.
```
empowerd tx ibc-transfer transfer transfer channel-0 osmowallet 111umpwr --from=empowerwallet --fees 200umpwr 
osmosisd tx ibc-transfer transfer transfer channel-155 empowerwallet 5555uosmo --from=osmowallet --fees 5000uosmo --chain-id osmo-test-5 --keyring-backend test --node https://rpc.osmotest5.osmosis.zone:443
```

## The codes below are for Empower to Osmosis transfer only. For transfers with other networks 
```
--key-name
--denom
--src-channel (source channel)
--src-chain (source chain)
--dst-chain (target chain)
```
You can use it by changing the flags.

You can access this information from the config content or from the [link](https://github.com/cosmos/chain-registry/pull/2293/files)


## Execute ft transfer between chains. 

circulus-1 ---- osmo-test-5
```
hermes tx ft-transfer   --key-name empower-wallet   --receiver osmo1s492paw57du0kpudjr7pfwt350cprma7rq3vt6   --denom umpwr   --timeout-seconds 30   --dst-chain osmo-test-5   --src-chain circulus-1   --src-port transfer   --src-channel channel-0   --amount 200
  
```
osmo-test-5 ---- circulus-1

```
hermes tx ft-transfer  --key-name osmo-wallet   --receiver empower1s492paw57du0kpudjr7pfwt350cprma7hhxh8k   --denom uosmo   --timeout-seconds 30   --dst-chain circulus-1   --src-chain osmo-test-5   --src-port transfer   --src-channel channel-155   --amount 2000

```

## How to do half back task?

Empower asks you to send back half of the $MPWR token you sent with IBC. You can try this way for this.

* With Hermes, you sent the $MPWR token to the Osmosis test network.
* Now check your osmosis wallet address at https://testnet.mintscan.io/osmosis-testnet and select "All Assets" from the "Asset Type" tab.

![image](https://github.com/neuweltgeld/empower-ibc-transfer/assets/101174090/2fb94e0f-0b40-4dd0-8263-c267859aca56)

* Now you can see your IBC tokens

![image](https://github.com/neuweltgeld/empower-ibc-transfer/assets/101174090/11fd2102-bcaa-4726-a8cd-7411db80f8e1)

* Check the amount of tokens you are sending and identify the IBC token.

![image](https://github.com/neuweltgeld/empower-ibc-transfer/assets/101174090/24044511-57e9-4292-884a-8b9c90271044)

* The IBC address of the token I sent is ibc/E0FDA81C892EEA14C2398519260AA706A068B36AE5BE8AE9FAD8EB1540A6E02E

* Write this address in the --denom flag you would write when following the osmo-test-5 ---- circulus-1 hermes step and change the --amount to half.

* Check the txhash in the osmosis explorer to check if the transmission has been established.

