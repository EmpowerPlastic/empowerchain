# IBC 
This is a quick guide with command templates for the task: "IBC Testing". To execute them via the CLI, you must have the Empowerchain node installed, and the binaries of another node must be installed along the ibc route.


## OSMO  osmo-test-5
### Empower —> Osmo
```
empowerd tx ibc-transfer transfer transfer channel-0  <osmo-address>  10umpwr --from <empower-address> --chain-id circulus-1 --packet-timeout-height 0-0 --fees 200umpwr
```
### Osmo —> empower 
```
osmosisd tx ibc-transfer transfer transfer channel-155 <empower-address>  5ibc/E0FDA81C892EEA14C2398519260AA706A068B36AE5BE8AE9FAD8EB1540A6E02E --from <osmo-address> --chain-id osmo-test-5 --packet-timeout-height 0-0 --node https://osmosis-testnet-rpc.polkachu.com:443 --fees 1000uosmo

osmosisd tx ibc-transfer transfer transfer channel-155 <empower-address> 10000000uosmo --from <osmo-address> --chain-id osmo-test-5 --packet-timeout-height 0-0 --node https://osmosis-testnet-rpc.polkachu.com:443 --fees 1000uosmo
```

## Cosmos theta-testnet-001

### Empower —> Cosmos
```
empowerd tx ibc-transfer transfer transfer channel-2 <cosmos-address> 10umpwr --from <empower-address> --chain-id circulus-1 --packet-timeout-height 0-0 --fees 200umpwr 
```
### Cosmos —> empower 
```
gaiad tx ibc-transfer transfer transfer channel-2768 <empower-address> 5ibc/C3D75AA5082B8EEC8E6DE916F0CA9C1C71978A6BB0FA5AAE3E5ABE81BAF57B42 --from <cosmos-address> --chain-id theta-testnet-001 --packet-timeout-height 0-0 --node https://rpc.sentry-01.theta-testnet.polypore.xyz:443 --fees 500uatom

gaiad tx ibc-transfer transfer transfer channel-2768 <empower-address> 1000000uatom --from <cosmos-address> --chain-id theta-testnet-001 --packet-timeout-height 0-0 --node https://rpc.sentry-01.theta-testnet.polypore.xyz:443 --fees 500uatom
```

## Stargaze elgafar-1

### Empower —> Stargaze
```
empowerd tx ibc-transfer transfer transfer channel-1  <stargaze-address>  10umpwr --from <empower-address> --chain-id elgafar-1 --packet-timeout-height 0-0 --fees 200umpwr
```
### Stargaze --> empower
```
starsd tx ibc-transfer transfer transfer channel-459 <empower-address>  5ibc/B077B9DE697E073055B12CEB81C0FBF259A2D418230FDF51EB348CDAD8D65FE8 --from <stargaze-address> --chain-id elgafar-1 --packet-timeout-height 0-0 --node  https://stargaze-testnet-rpc.polkachu.com:443  --fees 2000ustars

starsd tx ibc-transfer transfer transfer channel-459 <empower-address>  10000ustars --from <stargaze-address> --chain-id elgafar-1 --packet-timeout-height 0-0 --node  https://stargaze-testnet-rpc.polkachu.com:443  --fees 2000ustars
```
