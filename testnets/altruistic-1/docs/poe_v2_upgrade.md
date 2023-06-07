# Empowerchain Testnet v0.0.2 Upgrade
**Chain ID:** altruistic-1

The upgrade is scheduled for 580000.

## Cosmovisor manual build method

### Build the new binary verison

```bash
cd empowerchain
git pull
git checkout v0.0.2
cd chain && make install
```

### Check the version

__If you've set another home directory for EmpowerChain than the default `$HOME/.empowerchain`, make sure to update scripts accordingly.__

```bash
# The correct version should be 0.0.2
empowerd version
# Commit should be: 6e69cef55c3678c9588da805cf1fc840d15faa10
empowerd version --long
```

### Make new Cosmovisor directory and copy binary

```bash
mkdir -p $HOME/.empowerchain/cosmovisor/upgrades/v2/bin
cp $GOPATH/bin/empowerd $HOME/.empowerchain/cosmovisor/upgrades/v2/bin
```

### Verify the Cosmovisor upgrade version

```bash
# The correct version should be 0.0.2
$HOME/.empowerchain/cosmovisor/upgrades/v2/bin/empowerd version
```


## Non-Cosmovisor method

### Build the new binary verison

```bash
cd empowerchain
git pull
git checkout v0.0.2
cd chain && make build
```

Wait until the upgrade time. At the upgrade time, move to the next section.

### Replace the binaries

```bash
sudo systemctl stop empowerd.service
sudo cp $HOME/empowerchain/chain/build/empowerd $(which empowerd)
```

### Restart The Node

```bash
# Replace empowerd.service with whatever your service file is called
sudo systemctl restart empowerd.service
```

## Cosmovisor auto-download method

Run the Cosmovisor using following environment variables:

```bash
DAEMON_ALLOW_DOWNLOAD_BINARIES=true
DAEMON_RESTART_AFTER_UPGRADE=true
```

If you're using systemd, `cosmovisor.service` can look like this:

```bash
[Unit]
Description=Cosmovisor daemon
After=network-online.target
[Service]
Environment="DAEMON_NAME=empowerd"
Environment="DAEMON_HOME=/home/user/.empowerchain"
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=true"
Environment="DAEMON_RESTART_AFTER_UPGRADE=true"
Environment="DAEMON_POLL_INTERVAL=300ms"
User=user
ExecStart=/home/user/go/bin/cosmovisor run start
Restart=always
RestartSec=3
LimitNOFILE=4096
[Install]
WantedBy=multi-user.target
```
At the upgrade height, Cosmovisor will try to fetch the binary from the mirror included in the upgrade plan and if sucessful, it will create necessary directory structure, install the new binary in `<COSMOVISOR_HOME>/v2/bin` and run the new daemon.

__Be aware that if for some reason downloading the new binary fails, you'll have to revert to manually installing new binary.__
