import {Client} from "empowerchain-empowerchain-client-ts";

window.hashString = (str) => {
    console.log("HASHING", str)
}

window.onload = async () => {
    if (!window.keplr) {
        alert("Please install keplr extension");
    } else {
        await window.keplr.experimentalSuggestChain({
            chainId: "altruistic-1",
            chainName: "EmpowerChain Testnet",
            rpc: "https://empower-testnet-rpc.polkachu.com",
            rest: "https://empower-testnet-api.polkachu.com",
            bip44: {
                coinType: 118,
            },
            bech32Config: {
                bech32PrefixAccAddr: "mpwr",
                bech32PrefixAccPub: "mpwr" + "pub",
                bech32PrefixValAddr: "mpwr" + "valoper",
                bech32PrefixValPub: "mpwr" + "valoperpub",
                bech32PrefixConsAddr: "mpwr" + "valcons",
                bech32PrefixConsPub: "mpwr" + "valconspub",
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
        });
        const client = new Client({
                apiURL: "https://empower-testnet-api.polkachu.com",
                rpcURL: "https://empower-testnet-rpc.polkachu.com",
                prefix: "empower",
                
            },
            window.keplr.getOfflineSigner()
        )
        console.log(client)
        const response = await client.EmpowerchainEmpowerchainProofofexistence.query.queryProof("ipZS%2Bn%2BDPPkPp%2BmQRdHJLBlqvQGsevJhXhMHgOT%2FiO0%3D")
    }
}