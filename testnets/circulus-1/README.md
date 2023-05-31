# Circulus-1

PLEASE READ:
> ⚠️ IMPORTANT: We do not accept gentx from anyone unless you have been explicitly told to create one. If you are supposed to do it, you will know.
> Failure to read basic information is not a good look for future considerations for the delegation program

**Prerequisites**
- Go 1.20+

## Preparation steps (Gentx submissions)

1. **Install binary empowerd**
```bash
git clone https://github.com/EmpowerPlastic/empowerchain && \
cd empowerchain && \
git checkout circulus-1 && \
cd chain && \
make install
```

> PLEASE: notice the `git checkout circulus-1`. Use this branch, and also target this branch in the PR

2. **Init chain directory**
```bash
empowerd init <MONIKER>
```

3. **Create wallet**
```bash
empowerd keys add <WALLET_NAME>
```

4. **Copy genesis.json from empowerchain repo to your local chain home directory**
```bash
cp <PATH_TO_EMPOWERCHAIN_REPO>/testnets/circulus-1/genesis.json ~/.empowerchain/config/genesis.json
```

6. **Add genesis account**
```bash
empowerd genesis add-genesis-account <WALLET_NAME> 1000000umpwr
```

7. **Create gentx**
```bash
empowerd genesis gentx <WALLET_NAME> 1000000umpwr \
--chain-id=circulus-1 \
--moniker="<MONIKER>" \
--commission-max-change-rate 0.1 \
--commission-max-rate 0.2 \
--commission-rate 0.05 \
--pubkey $(empowerd tendermint show-validator) \
--website="" \
--security-contact="" \
--identity="" \
--details="" \
--ip="<use your public ip to help other validators find you>"
```

8. **Copy gentx to empowerchain repo, __rename it__ and submit a PR to circulus-1 branch**
```bash
cp ~/.empowerchain/config/gentx/gentx-*.json <PATH_TO_EMPOWERCHAIN_REPO>/testnets/circulus-1/gentx/gentx-<VALIDATOR_NAME>.json
```
Make sure you also do a rename of the file when copying or before submitting the PR (should be `gentx-<VALIDATOR_NAME>.json`)

## Genesis launch

**Check genesis**
```bash
sha256sum $HOME/.empowerchain/config/genesis.json
Result: f01a9b70ac51d919091ad48465100d1f770c1c3788a322e4fa49549d5c3041de
```

**Set minimum gas price**
```bash
sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"0.025umpwr\"/" $HOME/.empowerchain/config/app.toml
```

**Seeds and peers**
```bash
seeds="d6a7cd9fa2bafc0087cb606de1d6d71216695c25@51.159.161.174:26656"
peers="e8b3fa38a15c426e046dd42a41b8df65047e03d5@95.217.144.107:26656,89ea54a37cd5a641e44e0cee8426b8cc2c8e5dfb@51.159.141.221:26656,0747860035271d8f088106814a4d0781eb7b2bc7@142.132.203.60:27656,3c758d8e37748dc692621a0d59b454bacb69b501@65.108.224.156:26656,41b97fced48681273001692d3601cd4024ceba59@5.9.147.185:26656"
sed -i -e 's|^seeds *=.*|seeds = "'$seeds'"|; s|^persistent_peers *=.*|persistent_peers = "'$peers'"|' $HOME/.empowerchain/config/config.toml
```