# Validator Setup

## Create A Wallet

Every validator must have a wallet associated with it. This guide assumes a software wallet will be used, but hardware wallets like a Ledger can also be used.

```bash
empowerd keys add <wallet-name>
```

WARNING: Be sure to back up the mnemonic shown after creating the wallet. This will not be presented again at any point in the future.

To recover an existing wallet, add the `--recover` flag to the previous command:

```bash
empowerd keys add <wallet-name> --recover
```

This will prompt the user for the bip-32 mnemonic to properly recover the wallet.


## Pre-Genesis

For validators trying to join a testnet prior to launch, follow these instructions. For existing networks, follow the Post-Genesis steps.

Now that a wallet has been created for the validator, initial funds must be added to the genesis account. The amount of the token to be added to the genesis account will normally be communicated prior to gentx collection.

```bash
empowerd gentx <key-name> 100000000umpwr
```

To assign this node as a validator during genesis, the initial gentx must be created. Replace any of the informational fields with the desired values at launch. Replace the `chain-id` with the desired chain-id.

```bash
empowerd gentx <key-name> 100000000umpwr \
    --chain-id circulus-1 \
    --commission-max-change-rate 0.1  \
    --commission-max-rate 0.2   \
    --commission-rate 0.05   \
    --min-self-delegation "1"   \
    --moniker "<moniker>"   \
    --details= "" \
    --website "" \
    --security-contact=""   \
    --identity= "<keybase-id>"
```

## Post-Genesis

For validators trying to join an existing network, follow this section to join the network.

Ensure the wallet address created in [Create A Wallet](#create-a-wallet) has funds in it.

Ensure the node is synced to the latest network height. To check if the node is still syncing to the network, run the following command:

```bash
empowerd status 2>&1 | jq .SyncInfo.catching_up
```

The command should output either `true` to represent that the node is still syncing, or `false` to represent that the node has been fully synced to the network.

Once the node is synced and the wallet has funds in it, the node can be upgraded from a standard node to a validator node by submitting a `create-validator` transaction:

```bash
empowerd tx staking create-validator \
    --amount 1000000umpwr \
    --chain-id circulus-1 \
    --commission-max-change-rate 0.1 \
    --commission-max-rate 0.2 \
    --commission-rate 0.05 \
    --min-self-delegation "1" \
    --moniker "<moniker>" \
    --details="<validator-description" \
    --website "<validator-website>" \
    --security-contact="<validator-security-contact>" \
    --identity="<keybase-id>" \
    --pubkey=$(empowerd tendermint show-validator) \
    --gas-prices 0.025umpwr \
    --from <key-name>
