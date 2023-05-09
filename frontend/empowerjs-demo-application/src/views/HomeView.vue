<script setup lang="ts">
import {contracts, cosmos, empowerchain, getSigningTM37EmpowerchainClient} from "@empower-plastic/empowerjs";
import {CosmWasmClient, SigningCosmWasmClient} from "@cosmjs/cosmwasm-stargate";
import {Decimal} from "@cosmjs/math";
import Long from "long";

const offlineSigner = window.keplr.getOfflineSigner("empowerchain-local-1");


const connect = async () => {
    const chainConfig = {
        chainId: "empowerchain-local-1",
        chainName: "EmpowerChain Local Serve",
        rpc: "tpc://0.0.0.0:26657",
        rest: "http://0.0.0.0:1317",
        bip44: {
            coinType: 118,
        },
        bech32Config: {
            bech32PrefixAccAddr: "empower",
            bech32PrefixAccPub: "empower" + "pub",
            bech32PrefixValAddr: "empower" + "valoper",
            bech32PrefixValPub: "empower" + "valoperpub",
            bech32PrefixConsAddr: "empower" + "valcons",
            bech32PrefixConsPub: "empower" + "valconspub",
        },
        currencies: [
            {
                coinDenom: "MPWR",
                coinMinimalDenom: "umpwr",
                coinDecimals: 6,
                coinGeckoId: "mpwr",
            },
        ],
        feeCurrencies: [
            {
                coinDenom: "MPWR",
                coinMinimalDenom: "umpwr",
                coinDecimals: 6,
                gasPriceStep: {
                    low: 0.01,
                    average: 0.025,
                    high: 0.04,
                },
            },
        ],
        stakeCurrency: {
            coinDenom: "MPWR",
            coinMinimalDenom: "umpwr",
            coinDecimals: 6,
        },
    };
    await window.keplr.experimentalSuggestChain(chainConfig);
    /*await window.leap.experimentalSuggestChain(chainConfig);
    await window.cosmostation.providers.keplr.experimentalSuggestChain(
        chainConfig
    );*/
}

const getListings = async () => {
    const cosmwasmClient = await CosmWasmClient.connect("0.0.0.0:26657")
    console.log("cosmwasmClient", cosmwasmClient);
    const contract = new contracts.PlasticCreditMarketplace.PlasticCreditMarketplaceQueryClient(cosmwasmClient, "empower14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sfg4umu");
    console.log("contract", contract);

    const res = await contract.listings({})
    console.log(res);
}

const createListing = async () => {
    const denom = prompt("Enter denom")
    const price = prompt("Enter price per credit")
    const credits = prompt("Enter number of credits")

    const client = await getSigningTM37EmpowerchainClient({
        rpcEndpoint: "0.0.0.0:26657",
        signer: offlineSigner,
    });
    const w = empowerchain.plasticcredit.TransferAuthorization.fromPartial({
        denom: denom!,
        maxCredits: BigInt(credits!),
    })
    const authz = cosmos.authz.v1beta1.MessageComposer.withTypeUrl.grant({
        granter: "empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m",
        grantee: "empower14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sfg4umu",
        grant: {
            authorization: {
                typeUrl: "/empowerchain.plasticcredit.TransferAuthorization",
                value: empowerchain.plasticcredit.TransferAuthorization.encode(w).finish()
            }
        }
    })
    await client.signAndBroadcast(
        "empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m",
        [authz],
        {
            amount: [{ amount: "100000", denom: "umpwr" }],
            gas: "200000",
        }
    );

    const cosmWasmClient = await SigningCosmWasmClient.connectWithSigner("0.0.0.0:26657", offlineSigner, {
        gasPrice: {
            denom: "umpwr",
            amount: Decimal.fromAtomics("25", 6),
        }
    });
    const contract = new contracts.PlasticCreditMarketplace.PlasticCreditMarketplaceClient(cosmWasmClient, "empower1qnk2n4nlkpw9xfqntladh74w6ujtulwnz7rf8m", "empower14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sfg4umu");
    const res = await contract.createListing({
        denom: denom!,
        pricePerCredit: {
            denom: "umpwr",
            amount: price!,
        },
        numberOfCredits: credits!,
    });
}

</script>

<template>
  <main>
    <button @click="connect">Connect to wallet</button>
    <br>
    <button @click="getListings">Get Listings</button>
    <br>
    <button @click="createListing">Create Listing</button>
  </main>
</template>
