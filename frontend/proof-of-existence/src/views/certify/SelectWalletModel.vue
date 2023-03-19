<script setup lang="ts">
import { onMounted, ref, toRefs } from "vue";
import { empowerchain } from "@empowerplastic/empowerchain-ts-client";
import type { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { getSigningEmpowerchainClient } from "@/helpers/signing-client";
import { Modal } from "flowbite-vue";

const showWarning = ref(false);
const CHAIN_ID = "emp-devnet-1";
const RPC_URL: string | HttpEndpoint = "https://devnet.empowerchain.io:26657";
const REST_URL = "https://devnet.empowerchain.io:1317";

defineProps({
  showModal: Boolean,
  showWarning: Boolean,
  closeModal: function () {},
});
const { createProof } =
  empowerchain.proofofexistence.MessageComposer.withTypeUrl;
const emit = defineEmits(["wallet"]);
const isShowModal = ref(false);
function closeModal() {
  isShowModal.value = false;
}
function showModal() {
  isShowModal.value = true;
}
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

    const createProofMsg = createProof({
      creator: accounts[0].address,
      hash: "e43ed35ca574c7244b95145d5c7d0243e7a016d809fbe87df377c65b88405e59",
    });
    const fee = {
      amount: [{ amount: "100000", denom: "umpwr" }],
      gas: "200000",
    };
    const response = await wasmChainClient.signAndBroadcast(
      accounts[0].address,
      [createProofMsg],
      fee
    );
    console.log(wasmChainClient, response, "handleCosmostationWallet");
  }
};

const handleLeapWallet = async () => {
  console.log("leap");
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
    const createProofMsg = createProof({
      creator: accounts[0].address,
      hash: "e43ed35ca574c7244b95145d5c7d0243e7a016d809fbe87df377c65b88405e59",
    });
    const fee = {
      amount: [{ amount: "100000", denom: "umpwr" }],
      gas: "200000",
    };
    const response = await wasmChainClient.signAndBroadcast(
      accounts[0].address,
      [createProofMsg],
      fee
    );

    console.log(wasmChainClient, response, "handleLeapWallet");
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
  <button
    @click="showModal"
    type="button"
    class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Show modal
  </button>
  <Modal size="xl" v-if="isShowModal" @close="closeModal">
    <template #header>
      <div
        class="flex flex-row w-full justify-between justify-between rounded-t"
      >
        <h3 class="font-bold text-black text-title28">Select your wallet</h3>
        <button
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center"
          @click="modal.hide()"
        >
          X
        </button>
      </div>
    </template>
    <template #body>
      <div class="flex flex-wrap flex-row justify-around p-2">
        <div
          v-show="showWarning"
          class="p-4 mb-4 w-full mx-2 text-sm text-red-800 rounded-lg bg-red-50"
          role="alert"
        >
          Please install wallet extension
        </div>
        <img
          src="../../assets/images/wallet-keplr.png"
          class="h-20 cursor-pointer mb-3"
          @click="handleKeplrWallet()"
        />
        <img
          src="../../assets/images/wallet-cosmostation.png"
          class="h-20 cursor-pointer mb-3"
          @click="handleCosmostationWallet()"
        />
        <img
          src="../../assets/images/wallet-leap.png"
          class="h-20 cursor-pointer mb-3"
          @click="handleLeapWallet()"
        />
      </div>
    </template>
  </Modal>
</template>
<!--<template>-->
<!--  <div-->
<!--    id="selectWalletModal"-->
<!--    tabindex="-1"-->
<!--    aria-hidden="true"-->
<!--    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"-->
<!--  >-->
<!--    <div class="relative w-full items-center h-full max-w-xl md:h-auto">-->
<!--      &lt;!&ndash; Modal content &ndash;&gt;-->
<!--      <div class="relative w-full bg-white rounded-lg shadow">-->
<!--        &lt;!&ndash; Modal header &ndash;&gt;-->
<!--        <div class="flex items-start justify-between p-4 rounded-t">-->
<!--          <h3 class="font-bold text-black text-title28">Select your wallet</h3>-->
<!--          <button-->
<!--            type="button"-->
<!--            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"-->
<!--            @click="modal.hide()"-->
<!--          >-->
<!--            X-->
<!--          </button>-->
<!--        </div>-->
<!--        &lt;!&ndash; Modal body &ndash;&gt;-->

<!--        <div class="flex flex-wrap sm:flex-row justify-around p-2">-->
<!--          <div-->
<!--            v-show="showWarning"-->
<!--            class="p-4 mb-4 w-full mx-2 text-sm text-red-800 rounded-lg bg-red-50"-->
<!--            role="alert"-->
<!--          >-->
<!--            Please install wallet extension-->
<!--          </div>-->
<!--          <img-->
<!--            src="../../assets/images/wallet-keplr.png"-->
<!--            class="h-20 cursor-pointer mb-3"-->
<!--            @click="handleKeplrWallet()"-->
<!--          />-->
<!--          <img-->
<!--            src="../../assets/images/wallet-cosmostation.png"-->
<!--            class="h-20 cursor-pointer mb-3"-->
<!--            @click="handleCosmostationWallet()"-->
<!--          />-->
<!--          <img-->
<!--            src="../../assets/images/wallet-leap.png"-->
<!--            class="h-20 cursor-pointer mb-3"-->
<!--            @click="handleLeapWallet()"-->
<!--          />-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
