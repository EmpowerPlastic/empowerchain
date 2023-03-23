<script setup lang="ts">
import { useRoute } from "vue-router";
import router from "@/router";
import SelectWalletModel from "@/views/certify/SelectWalletModel.vue";
import { ref } from "vue";
import { getSigningEmpowerchainClient } from "@/helpers/signing-client";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { empowerchain } from "@empowerplastic/empowerchain-ts-client";
import { Wallet } from "@/types/enums";

const CHAIN_ID = "emp-devnet-1";
const RPC_URL: string | HttpEndpoint = "https://devnet.empowerchain.io:26657";
const fee = {
  amount: [{ amount: "100000", denom: "umpwr" }],
  gas: "200000",
};

const route = useRoute();
const hash: string = route.params.hash;

const { createProof } =
  empowerchain.proofofexistence.MessageComposer.withTypeUrl;

const showModal = ref(false);
const selectedWallet = ref("");
const showError = ref(false);
const errorMessage = ref("");
const loading = ref(false);

//Methods
const back = () => {
  router.push({
    path: `/`,
  });
};

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const handleSelectedWallet = (wallet: Wallet) => {
  selectedWallet.value = wallet;
  closeModal();
};

const handleTransaction = () => {
  loading.value = true;
  switch (selectedWallet.value) {
    case Wallet.Keplr:
      handleKeplrWallet();
      break;
    case Wallet.Cosmostation:
      handleCosmostationWallet();
      break;
    case Wallet.Leap:
      handleLeapWallet();
      break;
    default:
      openModal();
  }
};

const handleKeplrWallet = async () => {
  const offlineSigner = window.keplr.getOfflineSigner(CHAIN_ID);
  const accounts = await offlineSigner.getAccounts();

  const cosmJS = await getSigningEmpowerchainClient({
    rpcEndpoint: RPC_URL,
    signer: offlineSigner,
  });

  const createProofMsg = createProof({
    creator: accounts[0].address,
    hash: hash,
  });
  const response = await cosmJS.signAndBroadcast(
    accounts[0].address,
    [createProofMsg],
    fee
  );
  handleResponse(response);
};

const handleCosmostationWallet = async () => {
  await window.cosmostation.providers.keplr.enable(CHAIN_ID);
  const offlineSigner =
    window.cosmostation.providers.keplr.getOfflineSigner(CHAIN_ID);
  const accounts = await offlineSigner.getAccounts();

  const wasmChainClient = await getSigningEmpowerchainClient({
    rpcEndpoint: RPC_URL,
    signer: offlineSigner,
  });

  const createProofMsg = createProof({
    creator: accounts[0].address,
    hash: hash,
  });

  const response = await wasmChainClient.signAndBroadcast(
    accounts[0].address,
    [createProofMsg],
    fee
  );
  handleResponse(response);
};

const handleLeapWallet = async () => {
  const offlineSigner = window.leap.getOfflineSigner(CHAIN_ID);
  const accounts = await offlineSigner.getAccounts();
  console.log(accounts, "accounts");
  const wasmChainClient = await getSigningEmpowerchainClient({
    rpcEndpoint: RPC_URL,
    signer: offlineSigner,
  });
  const createProofMsg = createProof({
    creator: accounts[0].address,
    hash: hash,
  });

  const response = await wasmChainClient.signAndBroadcast(
    accounts[0].address,
    [createProofMsg],
    fee
  );
  handleResponse(response);
};

const handleResponse = (response: any) => {
  if (response?.code === 0) {
    loading.value = false;
    pushToSuccessPage();
  } else {
    loading.value = false;
    showError.value = true;
    errorMessage.value = response?.rawLog;
  }
};

const pushToSuccessPage = () => {
  router.push({
    path: `/certify/success`,
    query: {
      hash: route.params.hash,
      fileName: route.query.fileName,
      time: route.query.time,
    },
  });
};
</script>
<template>
  <SelectWalletModel
    v-show="showModal"
    :show-modal="showModal"
    :close-modal="closeModal"
    @selected-wallet="handleSelectedWallet"
  />
  <img
    src="../../assets/images/emp-astro-2.png"
    class="left-28 top-full sm:top-auto sm:left-auto w-32 fixed sm:absolute animate-bounce -m-24"
  />

  <div class="w-full p-8 text-left bg-lightBlack rounded-lg sm:p-8">
    <h5 class="mb-2 mt-3 font-bold text-white text-title28">Create proof</h5>
    <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-6">
      <div class="col-span-2 w-full mt-3">
        <div
          class="bg-lightGray rounded-lg break-words text-center items-center flex flex-col p-4"
        >
          <img class="w-20 mb-4" src="../../assets/images/certificate.png" />
          <p class="text-lightGreen text-title14 break-all">File</p>
          <p class="text-white text-title18 mb-3 break-all">
            {{ $route.query.fileName }}
          </p>
          <p class="text-lightGreen text-title14" break-all>Received Time</p>
          <p class="text-white text-title18 mb-3 break-all">
            {{ new Date(Number($route.query.time)).toLocaleString() }}
          </p>
          <p class="text-lightGreen text-title14 break-all">Transaction Hash</p>
          <p class="text-white text-title18 mb-6 break-all">
            {{ $route.params.hash }}
          </p>
          <p class="text-white text-title14">
            Hooray!! We are just one step away!
          </p>
          <p class="text-white text-title12">
            Connect your wallet for the transaction fee, its Only 0.00025 $MPWR
          </p>
        </div>
        <div
          class="p-4 my-4 w-full text-sm text-red-800 rounded-lg bg-red-50 break-all"
          role="alert"
          v-show="showError"
        >
          {{ errorMessage }}
        </div>
        <div class="flex flex-col sm:flex-row justify-between">
          <button
            :disabled="!selectedWallet || loading"
            @click="handleTransaction"
            class="bg-lightGreen disabled:bg-lightGray mt-4 content-center p-1 px-14 rounded text-white"
          >
            {{ loading ? "Loading..." : "Complete" }}
          </button>
          <button
            @click="back"
            class="bg-transparent mt-4 content-center p-1 rounded text-lightGreen"
          >
            Back
          </button>
        </div>
      </div>
      <div class="sm:col-span-1 p-3">
        <h5 class="mb-2 mt-3 mb-6 text-2xl font-bold text-white text-title28">
          Wallet
        </h5>
        <img
          src="../../assets/images/wallet-keplr.png"
          class="h-20 cursor-pointer mb-3"
          v-if="selectedWallet === Wallet.Keplr"
        />
        <img
          src="../../assets/images/wallet-cosmostation.png"
          class="h-20 cursor-pointer mb-3"
          v-if="selectedWallet === Wallet.Cosmostation"
        />
        <img
          src="../../assets/images/wallet-leap.png"
          class="h-20 cursor-pointer mb-3"
          v-if="selectedWallet === Wallet.Leap"
        />
        <button
          @click="openModal"
          data-modal-target="selectWalletModal"
          data-modal-toggle="selectWalletModal"
          class="bg-lightGreen mt-7 content-center p-1 px-7 rounded text-white"
        >
          {{ selectedWallet ? "Change wallet" : "Connect your wallet" }}
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
