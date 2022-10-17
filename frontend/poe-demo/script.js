import {Client} from "empowerchain-empowerchain-client-ts";

const CHAIN_ID = "empowerchain-local-1";

let client;
let hash;

window.hashString = async () => {
    const toHash = document.getElementById("area-to-hash").value;
    hash = await sha256(toHash);
    document.getElementById("output").style.display = "block";
    document.getElementById("output-hash").innerHTML = hash;
}

window.createProof = async () => {
    const offlineSigner =  window.keplr.getOfflineSigner(CHAIN_ID);
    client = new Client({
            apiURL: "http://localhost:8010/proxy",
            rpcURL: "http://localhost:8011/proxy",
            prefix: "empower",
        },
        offlineSigner
    )

    const key = await window.keplr.getKey(CHAIN_ID);
    await client.EmpowerchainProofofexistence.tx.sendMsgCreateProof({
        value: {
            creator: key.bech32Address,
            hash: hash
        }
    });
}

window.connect = async () => {
    window.keplr.enable(CHAIN_ID)
    document.getElementById("connect-button").textContent = "Connected!";
}

window.onload = async () => {
    if (!window.keplr) {
        alert("Please install keplr extension");
    } else {
        await window.keplr.experimentalSuggestChain({
            chainId: CHAIN_ID,
            chainName: "EmpowerChain Testnet",
            rpc: "http://localhost:8011/proxy",
            rest: "http://localhost:8010/proxy",
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
        });
    }
}

async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}