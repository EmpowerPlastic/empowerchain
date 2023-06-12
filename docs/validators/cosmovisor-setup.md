# Cosmovisor

Cosmovisor is a tool that automatically restarts the Empowerchain daemon and replaces it with the new version when an upgrade height is hit. The official documentation for Cosmovisor can be found in the [Cosmos SDK docs](https://docs.cosmos.network/main/tooling/cosmovisor)

## Installation

Go must be installed on the system before cosmovisor may be installed.

```bash
go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@latest
```

Ensure cosmovisor is installed and ready to be used by checking its version.

```bash
cosmovisor version
```

## Usage

Once cosmovisor is installed, the initial directory structure for it needs to be created. 

```bash
mkdir -p $HOME/.empowerchain/cosmovisor/genesis/bin
mkdir -p $HOME/.empowerchain/cosmovisor/upgrades
```

Copy the initial `empowerd` binary into `$HOME/.empowerchain/cosmovisor/genesis/bin`. This should be the very first version used on the chain if syncing from genesis. If syncing from a snapshot or state sync, use the latest version of the `empowerd` binary.

```bash
cp $(which empowerd) $HOME/.empowerchain/cosmovisor/genesis/bin/empowerd 
```

Once the initial binary has been copied, the `current` file must be created to point to the active binary.

```bash
ln -s $HOME/.empowerchain/cosmovisor/genesis/bin/empowerd $HOME/.empowerchain/cosmovisor/current
```

It is recommended to setup a systemd service to manage Cosmovisor. A full list of environment variables that may be used can be found in the [Cosmovisor docs](https://docs.cosmos.network/main/tooling/cosmovisor).

> Note: If using `gvm` instead of a standard go installation, the path in the following ExecStart line may be different. To get cosmovisor's path while using `gvm`, ensure the `gvm` go profile that was used to build cosmovsior is active and run `$(which cosmovisor)`. This path should be using in place of `/home/<username>/go/bin/cosmovisor`.

```bash
sudo tee /etc/systemd/system/empowerd.service > /dev/null <<EOF
[Unit]
Description=cosmovisor
After=network-online.target

[Service]
User=<username>
ExecStart=/home/<username>/go/bin/cosmovisor run start
Restart=always
RestartSec=3
LimitNOFILE=4096
Environment="DAEMON_NAME=empowerd"
Environment="DAEMON_HOME=/home/<username>/.empowerchain"
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"
Environment="DAEMON_RESTART_AFTER_UPGRADE=true"
Environment="UNSAFE_SKIP_BACKUP=true"

[Install]
WantedBy=multi-user.target
EOF
```

Once the `empowerd.service` file is created, it can be started and enabled on system startup with the following commands:

```bash
sudo systemctl start empowerd.service
sudo systemctl enable empowerd.service
```

To check the logs of the empowerd service while it is running, use `journalctl`:

```bash
sudo journalctl -fu empowerd.service -o cat
```

## Upgrades

When it comes time for empowerd to be upgraded, cosmovisor looks for the next binaries according to a specific directory structure.

All upgrades must be in the `$HOME/.empowerchain/cosmovisor/upgrades` directory. The name of the upgrade must be a subdirectory in this location. For example, if an upgrade named `v2` was released, the upgrade directory for this would be `$HOME/.empowerchain/cosmovisor/uprgades/v2`. Within this directory should be another directory called `bin`. Finally, within this `bin` directory, the new empowerd binary should be present. Once the upgrade height is reached, cosmovisor stops the running `empowerd` binary and switches to the new one assuming that there is a properly created cosmovisor upgrade directory.

The following is a visual representation of cosmovisor's expected directory structure, starting at `$HOME/.empowerchain/cosmovisor/`:

```
.
├── current -> symlink to 'genesis' or 'upgrades/<upgrade_name>'
├── genesis
│   └── bin
│       └── empowerd
└── upgrades
    └── <upgrade_name>
        └── bin
            └── empowerd
```

It should not be necessary to change the `current` symlink unless Cosmovisor fails to handle the upgrade once the upgrade height is reached.
