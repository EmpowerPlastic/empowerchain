# Empowechain Grafana Monitor Installation Guide
## Prerequisites

### Setup `exporter` to the server where your node is installed.
```
wget -O NodeistorExporter.sh https://raw.githubusercontent.com/Nodeist/Nodeistor/main/NodeistorExporter && chmod +x NodeistorExporter.sh && ./NodeistorExporter.sh
```
During the installation you will be asked for some information. These:

| KEY |VALUE |
|----------|-------------|
| **bond_denom** | Denom Value. For example `umpwr` for Empowerchain |
| **bench_prefix** | Bench Prefix Value. For example `empower` for Empowerchain. You can learn this value from your wallet address. **empower**jcqum902je9zwevat7zqczskwd4lhwuj9vwgsu |
| **grpc_port** | Your validator `grpc` port that is defined in `app.toml` file. Default value is `9090` |
| **rpc_port** | Your validator `rpc` port that is defined in `config.toml` file. Default value is `26657` |


Make sure the following ports are open on your server:
- `9100` (node-exporter)
- `9300` (cosmos-exporter)

## Grafana Monitor Setup
We recommend installing the grafana monitor on a separate server so that you can track and analyze your authenticator properly.
If your node stops, your server goes down etc. In such cases, you have the chance to follow the data. It does not require a huge system requirement.
A system with the following specifications is sufficient for the monitor.

### System requirements
Ubuntu 20.04 / 1 VCPU / 2 GB RAM / 20 GB SSD

### Monitor Setup
You can complete the monitor setup by typing the following code on your new server.
```
wget -O NodeistMonitor.sh https://raw.githubusercontent.com/Nodeist/Nodeistor/main/NodeistMonitor && chmod +x NodeistMonitor.sh && ./NodeistMonitor.sh
```

### Adding validator to Prometheus Configuration file.
You can use the code below multiple times for different networks. In other words, you can view the statistics of more than one validator on the same monitor.
In order to do this, write the following code by revising it for each network you want to add.
```
$HOME/Nodeistor/ag_ekle.sh VALIDATOR_IP WALLET_ADDRESS VALOPER_ADDRESS PROJECT_NAME
```
> example: ```$HOME/Nodeistor/ag_ekle.sh 1.2.3.4 empower1falklhdx5yd2lunm409z0qn8kyq2zcclese6em empowervaloper1falklhdx5yd2lunm409z0qn8kyq2zcclpt84hw Empowerchain```


### Start Docker
Begin monitor deployment.
```
cd $HOME/Nodeistor && docker compose up -d
```

Ports used:
- `9090` (prometheus)
- `9999` (grafana)

## Settings

### Grafana configuration
1. Open your web browser and enter your `serveripaddress:9999` to reach the grafana interface.

![image](https://i.hizliresim.com/q5v1rxg.png)

2. Your username and password are `admin`. After the first login, you will be asked to update your password.

3. Import the Nodeistor.

3.1. Press the `+` icon from the left menu and click `Import` from the pop-up window.

![image](https://i.hizliresim.com/g76skvm.png)

3.2. Type grafana.com Control panel ID `16580`. And press `Load`.

![image](https://i.hizliresim.com/2c4ely8.png)

3.3. Select prometheus as the data source and press import.

![image](https://i.hizliresim.com/achuede.png)

4. Explorer configuration

Normally the most missed block panel is based on nodes.guru explorer.

If you want to add a network that is not in nodes.guru explorer, you need to edit the most missed block tab.
> This process is only valid for the 'most missed block ' tab and is not essential.

Click on the tab title and press `edit`.

![image](https://i.hizliresim.com/7g70srb.png)

4.1. Go to the **Overrides** tab.

![image](https://i.hizliresim.com/abdah90.png)

4.2. Press the edit button in the **datalink** section.

![image](https://i.hizliresim.com/gpqoyah.png)

4.3 Update the Explorer address and press the **Save** button.

![image](https://i.hizliresim.com/b1st4xn.png)

4.4. Finally, press the **Save** button again from the upper right corner and then apply by pressing the **Apply** button.

5. Congratulations! You have successfully installed and configured Nodeistor.

## Clipboard content
The Grafana dashboard is divided into 4 sections:
- **Verifier health** - main statistics for verifier health. connected peers and missed blocks
- **Chain health** - summary of chain health statistics and list of missing blocks of top validators
- **Verifier statistics** - information about the validator such as rank, limited coins, commission, delegations and rewards
- **Hardware health** - system hardware metrics. cpu, ram, network usage

## Reset Statistics
```
cd $HOME/Nodeistor
docker compose down
docker volume prune -f
```
