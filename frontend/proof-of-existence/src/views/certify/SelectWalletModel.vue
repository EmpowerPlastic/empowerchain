<script setup lang="ts">
import { onMounted, ref, toRefs } from "vue";
import { Modal } from "flowbite-vue";
import {
  empowerchain,
  getSigningEmpowerchainClient,
} from "@empowerplastic/empowerchain-ts-client";
import type { HttpEndpoint } from "@cosmjs/tendermint-rpc";

const showWarning = ref(false);
const props = defineProps({
  showModal: Boolean,
  closeModal: function () {},
});

const CHAIN_ID = "emp-devnet-1";
const RPC_URL: string | HttpEndpoint = "https://devnet.empowerchain.io:26657";
const REST_URL = "https://devnet.empowerchain.io:1317";

const { createProof } =
  empowerchain.proofofexistence.MessageComposer.withTypeUrl;
const emit = defineEmits(["wallet"]);

const handleKeplrWallet = async () => {
  const checkKeplrInstalled = window.keplr;

  emit("wallet", "test");
  if (!checkKeplrInstalled) {
    showWarning.value = true;
    console.log("nt instllaed");
  } else {
    //cosmoshub-4 emp-devnet-1
    await window.keplr.enable(CHAIN_ID);
    const offlineSigner = window.keplr.getOfflineSigner(CHAIN_ID);
    const accounts = await offlineSigner.getAccounts();
    console.log(accounts, "accounts");
    const cosmJS = await getSigningEmpowerchainClient({
      rpcEndpoint: RPC_URL,
      signer: offlineSigner,
    });

    const createProofMsg = createProof({
      creator: accounts[0].address,
      hash: "e43ed35ca574c7244b95145d5c7d0243e7a016d809fbe87df377c65b88405e59",
    });
    const fee = {
      amount: [{ amount: "100000", denom: "umpwr" }],
      gas: "200000",
    };
    const response = await cosmJS.signAndBroadcast(
      accounts[0].address,
      [createProofMsg],
      fee
    );
    console.log(cosmJS, response, "handleKeplrWallet");
  }
};

const handleCosmostationWallet = async () => {
  const checkCosmostationInstalled = await window.cosmostation;
  if (!checkCosmostationInstalled) {
    showWarning.value = true;
  } else {
    await window.cosmostation.providers.keplr.enable(CHAIN_ID);
    const offlineSigner =
      window.cosmostation.providers.keplr.getOfflineSigner(CHAIN_ID);
    const accounts = await offlineSigner.getAccounts();
    console.log(accounts, "accounts");
    const wasmChainClient = await getSigningEmpowerchainClient({
      rpcEndpoint: RPC_URL,
      signer: offlineSigner,
    });
    console.log(wasmChainClient, "handleCosmostationWallet");
  }
};

const handleLeapWallet = async () => {
  const checkLeapInstalled = await window.leap;
  if (!checkLeapInstalled) {
    showWarning.value = true;
  } else {
    await window.leap.enable(CHAIN_ID);
    const offlineSigner = window.leap.getOfflineSigner(CHAIN_ID);
    const accounts = await offlineSigner.getAccounts();
    console.log(accounts, "accounts");
    const wasmChainClient = await getSigningEmpowerchainClient({
      rpcEndpoint: RPC_URL,
      signer: offlineSigner,
    });
    console.log(wasmChainClient, "handleLeapWallet");
  }
};

const addExperimentalChain = async () => {
  const chainConfig = {
    chainId: CHAIN_ID,
    chainName: "EmpowerChain Devnet",
    rpc: RPC_URL,
    rest: REST_URL,
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
  await window.leap.experimentalSuggestChain(chainConfig);
  await window.cosmostation.providers.keplr.experimentalSuggestChain(
    chainConfig
  );
};

onMounted(() => {
  addExperimentalChain();
});
</script>
<template>
  <Modal size="xl" v-if="showModal" @close="closeModal">
    <template #header>
      <div class="flex items-start justify-between rounded-t w-full">
        <h3 class="font-bold text-black text-title28">Select your wallet</h3>
        <button
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          @click="closeModal"
        >
          X
        </button>
      </div>
    </template>
    <template #body>
      <div class="flex flex-wrap sm:flex-row justify-around p-2">
        <div
          v-show="showWarning"
          class="p-4 mb-4 w-full mx-2 text-sm text-red-800 rounded-lg bg-red-50"
          role="alert"
        >
          Please install wallet extension
        </div>
        <img
          src="../../assets/images/wallet-keplr.png"
          class="h-20 cursor-pointer mb-3 mx-4 md:mx-0"
          @click="handleKeplrWallet()"
        />
        <img
          src="../../assets/images/wallet-cosmostation.png"
          class="h-20 cursor-pointer mb-3 mx-4 md:mx-0"
          @click="handleCosmostationWallet()"
        />
        <img
          src="../../assets/images/wallet-leap.png"
          class="h-20 cursor-pointer mb-3 mx-4 md:mx-0"
          @click="handleLeapWallet()"
        />
      </div>
    </template>
  </Modal>
</template>
