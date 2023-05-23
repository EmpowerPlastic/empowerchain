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
--details=""
```

8. **Copy genesis.json and gentx to empowerchain repo and submit a PR to circulus-1 branch**
```bash
cp ~/.empowerchain/config/genesis.json <PATH_TO_EMPOWERCHAIN_REPO>/testnets/circulus-1/genesis.json
cp ~/.empowerchain/config/gentx/gentx-*.json <PATH_TO_EMPOWERCHAIN_REPO>/testnets/circulus-1/gentx/
```


## Genesis launch

TODO
