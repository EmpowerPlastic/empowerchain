# Empowerchain-1

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
cd chain && \
make install
```

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
cp <PATH_TO_EMPOWERCHAIN_REPO>/mainnet/empowerchain-1/base-genesis.json ~/.empowerchain/config/genesis.json
```

6. **Add genesis account**
```bash
empowerd genesis add-genesis-account <WALLET_NAME> 1000000umpwr
```

7. **Create gentx**
```bash
empowerd genesis gentx <WALLET_NAME> 1000000umpwr \
--chain-id=empowerchain-1 \
--moniker="<MONIKER>" \
--commission-max-change-rate 0.1 \
--commission-max-rate 0.2 \
--commission-rate 0.05 \
--pubkey $(empowerd tendermint show-validator) \
--website="" \
--security-contact="" \
--identity="" \
--details="" \
```

8. **Copy gentx to empowerchain repo, __rename it__ and submit a PR to main branch**
```bash
cp ~/.empowerchain/config/gentx/gentx-*.json <PATH_TO_EMPOWERCHAIN_REPO>/mainnet/empowerchain-1/gentx/gentx-<VALIDATOR_NAME>.json
```
Make sure you also do a rename of the file when copying or before submitting the PR (should be `gentx-<VALIDATOR_NAME>.json`)

## Genesis launch

**Download genesis**
```bash
URL=https://github.com/EmpowerPlastic/empowerchain/raw/main/mainnet/empowerchain-1/genesis.tar.gz
curl -L $URL | tar -xz -C $HOME/.empowerchain/config/
```

**Check genesis**
```bash
sha256sum $HOME/.empowerchain/config/genesis.json
Result: 819d33d14c35bbfbc5997db9bf545eb7a5504b5870a307ce90c3813add4b316b
```

**Set minimum gas price**
```bash
sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"0.025umpwr\"/" $HOME/.empowerchain/config/app.toml
```

**Seeds**
```bash
seeds="a1427b456513ab70967a2a5c618d347bc89e8848@51.159.190.53:26656"
sed -i -e 's|^seeds *=.*|seeds = "'$seeds'"|' $HOME/.empowerchain/config/config.toml
```