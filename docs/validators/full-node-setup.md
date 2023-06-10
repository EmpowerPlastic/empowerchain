# Run a Full Node

## System Configuration
This documentation assumes that a Linux operating system is being used. All commands have been tested against Ubuntu 20.04 LTS, but other distributions of Linux can be used in place of this. Recent versions of macOS can also be used to compile the empowerd daemon.

## Hardware Requirements
Hardware requirements for Empowerchain vary based on the purpose of the full node. RPC nodes, validators, and archive nodes all serve different purposes with different system recommendations. For example, an archive node will need more storage than an RPC or Validator node require. The below recommendation is a starting point and should be modified to fit the node's use case. Since CosmWasm is active on the network, higher system specifications are needed compared to other cosmos-sdk chains.

- 4 CPU Cores
- 16GB RAM
- 500+ GB SSD (SATA or NVMe)

## Installation Prerequisites

### Linux Dependencies

Install the following build dependencies

```bash
sudo apt update
sudo apt install -y curl tar wget clang pkg-config libssl-dev jq build-essential bsdmainutils git make ncdu gcc git jq chrony liblz4-tool
```

### Golang
Golang version 1.20.0 or higher is required to build empowerd. Go can be installed as a stand-alone installation or as a managed installation through `gvm`.

#### gvm Installation (Recommended)

`gvm` requires the `bison` package to be installed in addition to the previous Linux package dependencies.

```bash
sudo apt install -y bison
```

The `gvm` documentation provides an installation script to get started with `gvm` and `go` quickly.

```bash
wget https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer
```

Inspect the file to ensure that you are aware of what it is doing on the system.

```bash
cat gvm-installer
```

Once inspected, change permissions on the file to make it executable and install it.

```bash
chmod +x gvm-installer
./gvm-installer
```

Since Empowerchain requires a modern version of `go`, version 1.4 is needed to compile later versions of `go` through `gvm`. Starting at `go1.20` and above, `gvm` has issues compiling when using `go1.4`, so it is recommended to use the binary download of `go1.19` and compile `go1.20`+ with that. Install `go1.19` and set the `GOROOT_BOOTSTRAP` value to the `$GOROOT` to configure this.

```bash
gvm install go1.19 -B
gvm use go1.19
export GOROOT_BOOTSTRAP=$GOROOT
```

Once `go1.19` is installed, other version of go can be compiled. `go1.20.3` can be installed through `gvm`.

```bash
gvm install go1.20.3
gvm use go1.20.3 --default
```

Check to ensure that version `1.20.3` is being used as the system's default `go` version.

```bash
$ go version

Output:
go version go1.20.3 linux/amd64
```
#### Stand Alone Installation

Download the golang tarball

```bash
curl -OL https://golang.org/dl/go1.20.3.linux-amd64.tar.gz
```

Unpack the tarball

```bash
sudo tar -C /usr/local -xvf go1.20.3.linux-amd64.tar.gz
```

Open the `~/.profile` file to add Golang environment variables

```bash
nano ~/.profile
```

Edit the contents of `~/.profile` to include the following variables

```bash
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export PATH=$PATH:/usr/local/go/bin
```

Refresh the active profile

```bash
source ~/.profile
```

Verify go is installed

```bash
$ go version

Output:
go version go1.20.3 linux/amd64
```

## Build Empowerd

Clone the Empowerchain source code and enter the directory

```bash
git clone https://github.com/EmpowerPlastic/empowerchain.git
cd empowerchain
```

Checkout the desired version to build. The latest release tag can be found on the [EmpowerChain Release Page](https://github.com/EmpowerPlastic/empowerchain/releases/)

```bash
git checkout v1.0.0-rc2
```

Compile the empowerd binary

```bash
make install
```

Verify empowerd was built and can be found in the existing PATH.

```bash
empowerd version --long
```

## Configure Empowerd

### Initialize the Empowerchain Node

Replace the `<chain-id>` field with the chain-id of the desired network.

```bash
empowerd init "custom_moniker" --chain-id <chain-id>
```

Example for the `circulus-1` testnet:

```bash
empowerd init "custom_moniker" --chain-id circulus-1
```

### Retrieve the Genesis File

Retrieve a copy of the genesis file for the desired chain. The genesis file defines the initial state of the chain. Replace the `<genesis-url>` with the desired chain's genesis file URL from the official Empowerchain repo. For pre-genesis validator nodes, skip to the [Validator Setup](/validators/validator-setup) page to continue following pre-genesis setup steps.

```bash
wget -O $HOME/empowerchain/config/genesis.json <genesis-url>
```

Example for the `circulus-1` testnet:
```bash
wget -O $HOME/.empowerchain/config/genesis.json https://raw.githubusercontent.com/EmpowerPlastic/empowerchain/main/testnets/circulus-1/genesis.json
```

### Set Persistent Peers and Seeds

Retrieve the persistent peers and seeds from the Empowerchain official repo. All peer addresses follow the format of `<NODE-ID>@<IP-ADDRESS>:<PORT>`

```bash
# Obtain the peers and seeds from the Empowerchain repository
seeds="d6a7cd9fa2bafc0087cb606de1d6d71216695c25@51.159.161.174:26656"
peers="e8b3fa38a15c426e046dd42a41b8df65047e03d5@95.217.144.107:26656,89ea54a37cd5a641e44e0cee8426b8cc2c8e5dfb@51.159.141.221:26656,0747860035271d8f088106814a4d0781eb7b2bc7@142.132.203.60:27656,3c758d8e37748dc692621a0d59b454bacb69b501@65.108.224.156:26656,41b97fced48681273001692d3601cd4024ceba59@5.9.147.185:26656"

# Set the peers and seeds in the empowerd configuration file
sed -i -e 's|^seeds *=.*|seeds = "'$seeds'"|; s|^persistent_peers *=.*|persistent_peers = "'$peers'"|' $HOME/.empowerchain/config/config.toml
```

### Set the minimum gas price

The minimum gas price should be set in the empowerd configuration. The following command adds a minimum gas value of `0.025umpwr` to the configuration.

```bash
sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"0.025umpwr\"/" $HOME/.empowerchain/config/app.toml
```

## Syncing Empowerd
There are three main ways to sync a node on Empowerchain: from scratch, state sync, and snapshots. Each of these has its own benefits and drawbacks.

| Method            	| Benefits                                          	| Drawbacks                                                                                           	| Restrictions                              	|
|-------------------	|---------------------------------------------------	|-----------------------------------------------------------------------------------------------------	|-------------------------------------------	|
| Sync from genesis 	| - Full network history is processed during the sync 	| - Slow<br>- Requires the most disk space<br>- Upgrades must be handled at their apprioriate block heights 	| - Required for Archive nodes                	|
| State Sync        	| - Very Fast<br>- Low Disk Usage                       	| - May be reliable than snapshots                                                                        	| - Must be using the latest empowerd version 	|
| Snapshot          	| - Reliable<br>- Moderately Fast                       	| - Slower than state sync<br>- May require more disk space than state sync                               	|                                           	|

### Sync from genesis

To sync from genesis, simply start the `empowerd` daemon. No additional configuration is needed to set up this sync method.

### State Sync

To sync from a state sync server, the `config.toml` file needs to be edited to include the state sync server details.

The values are not static, and will typically be provided by the state sync provider. The `rpc_servers`, `trust_height`, `trust_hash`, and `trust_period` values within the `[statesync]` section need to be set. Once set, state sync can be enabled by setting `enabled = true` in the `[statesync]` section of the config file.

### Snapshot

Exact snapshot instructions will vary by provider, but the concept is the same for all of them. A compressed archive of the current chain data is downloaded, uncompressed, and extracted into the `~/.empowerd/data` directory. Most snapshot providers include a script or set of instructions on how to download and extract the data properly based on their setup.

## Starting Empowerd

Once configured, the daemon can be directly started to connect to the network. However, it is recommended to either use a systemd service file or Cosmovisor to control the `empowerd` daemon.

To start it directly, run the following:

```bash
empowerd start
```

To use a systemd service file without Cosmovisor, the service file must be created. 

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

To use Cosmovisor to handle automatic upgrades, refer to the [Cosmovisor Setup](/validators/cosmovisor-setup) page.
