<script setup lang="ts">
import { useRoute } from "vue-router";
import router from "@/router";
import SelectWalletModel from "@/views/certify/SelectWalletModel.vue";
import { ref } from "vue";
import {
  empowerchain,
  getSigningTM37EmpowerchainClient,
} from "@empower-plastic/empowerjs";
import { Wallet } from "@/types/enums";
import { CHAIN_ID, RPC_URL } from "@/config/config";
import type { OfflineSigner } from "@cosmjs/proto-signing";
import type { DeliverTxResponse } from "@cosmjs/stargate/build/stargateclient";
import { toast } from "vue3-toastify";
import { getWalletFromType } from "@/utils/wallet-utils";

const fee = {
  amount: [{ amount: "100000", denom: "umpwr" }],
  gas: "200000",
};

const route = useRoute();
const hash: string | string[] = route.params.hash;

const { createProof } =
  empowerchain.proofofexistence.MessageComposer.withTypeUrl;

const showModal = ref(false);
const selectedWallet = ref("");
const errorMessage = ref<string | undefined>();
const loading = ref(false);
const address = ref();
const addressVisible = ref();

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
  showWalletAddress(wallet);
  closeModal();
};

const showWalletAddress = async (selectedWallet: Wallet) => {
  const wallet = getWalletFromType(selectedWallet);
  const account = await wallet.getKey(CHAIN_ID);
  const walletAddress = account.bech32Address;
  address.value = walletAddress;
  addressVisible.value =
    walletAddress?.substring(0, 10) +
    "..." +
    walletAddress?.substring(walletAddress?.length - 4);
};

const handleTransaction = async () => {
  loading.value = true;
  switch (selectedWallet.value) {
    case Wallet.Keplr:
      {
        const offlineSigner = window.keplr.getOfflineSigner(CHAIN_ID);
        await handleWalletTransaction(offlineSigner);
      }
      break;
    case Wallet.Cosmostation:
      {
        await window.cosmostation.providers.keplr.enable(CHAIN_ID);
        const offlineSigner =
          window.cosmostation.providers.keplr.getOfflineSigner(CHAIN_ID);
        await handleWalletTransaction(offlineSigner);
      }
      break;
    case Wallet.Leap:
      {
        const offlineSigner = window.leap.getOfflineSigner(CHAIN_ID);
        await handleWalletTransaction(offlineSigner);
      }
      break;
    default:
      openModal();
  }
};

const handleWalletTransaction = async (offlineSigner: OfflineSigner) => {
  try {
    const accounts = await offlineSigner.getAccounts();
    const wasmChainClient = await getSigningTM37EmpowerchainClient({
      rpcEndpoint: RPC_URL,
      signer: offlineSigner,
    });

    const createProofMsg = createProof({
      creator: accounts[0].address,
      hash: hash?.toString(),
    });

    const response = await wasmChainClient.signAndBroadcast(
      accounts[0].address,
      [createProofMsg],
      fee
    );
    handleResponse(response);
  } catch (error) {
    console.log(error);
    toast.error(`${error}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
    loading.value = false;
  }
};

const handleResponse = (response: DeliverTxResponse) => {
  if (response?.code === 0) {
    loading.value = false;
    pushToSuccessPage();
  } else {
    loading.value = false;
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

const copyAddress = async () => {
  await navigator.clipboard.writeText(address.value);
  toast.success("Address copied to clipboard");
};
</script>
<template>
  <SelectWalletModel
    v-show="showModal"
    :close-modal="closeModal"
    @selected-wallet="handleSelectedWallet"
  />
  <div class="flex flex-col !items-center w-full">
    <h5 class="font-bold text-textPrimary text-title28 mb-3">Create proof</h5>
    <div class="flex flex-col md:flex-row w-full gap-3">
      <div
        class="flex flex-col items-center bg-bgPrimary w-full rounded-lg custom-shadow p-3 py-5 text-center"
      >
        <img class="w-16 mb-4" src="../../assets/images/certificate.svg" />
        <p
          class="text-textPrimary text-title18 mb-3"
          v-show="$route.query.fileName"
        >
          {{ $route.query.fileName }}
        </p>
        <p class="text-textPrimary text-title14 font-bold">Received Time</p>
        <p class="text-textPrimary text-title18 mb-3 break-all">
          {{ new Date(Number($route.query.time)).toLocaleString() }}
        </p>
        <p class="text-textPrimary text-title14 break-all font-bold">
          Transaction Hash
        </p>
        <p class="text-textPrimary text-title18 mb-3 break-all">
          {{ $route.params.hash }}
        </p>
      </div>
      <div
        class="flex flex-col items-center bg-bgPrimary w-full rounded-lg custom-shadow p-3 py-5"
      >
        <p
          class="text-textPrimary text-title12 text-center my-5"
          v-if="selectedWallet === ''"
        >
          Hooray!! We are just one step away! <br />Connect your wallet for the
          transaction fee, its Only 0.00025 $MPWR
        </p>

        <div
          class="flex flex-col items-center mt-5"
          v-if="selectedWallet !== ''"
        >
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
        </div>

        <div
          v-if="addressVisible"
          class="flex flex-row justify-center bg-bgTertiary rounded-lg p-3 cursor-pointer w-full my-3 flex-wrap bg-opacity-[0.04]"
          @click="copyAddress"
        >
          <p class="text-textPrimary text-center text-title12">
            {{ addressVisible }}
          </p>
          <img class="w-4 ml-4" src="../../assets/images/copy-icon.svg" />
        </div>

        <button
          @click="openModal"
          class="bg-bgSecondary content-center p-1 rounded-sm text-textPrimary w-full text-title22"
        >
          {{ selectedWallet ? "Change wallet" : "Connect your wallet" }}
        </button>
      </div>
      <button
        :disabled="!selectedWallet || loading"
        @click="handleTransaction"
        class="bg-bgSecondary disabled:opacity-[0.3] mt-5 content-center p-1 rounded-sm text-textPrimary text-title22"
      >
        {{ loading ? "Loading..." : "Create proof" }}
      </button>
    </div>
  </div>
  <!--  <div class="w-full text-left">-->
  <!--      <h5 class="mb-2 mt-3 font-bold text-center text-textPrimary text-title28">-->
  <!--        Create proof-->
  <!--      </h5>-->
  <!--    <div class="grid grid-cols-1 md:grid-cols-3 md:gap-6">-->
  <!--      <div class="col-span-2 bg-bgPrimary w-full mt-3 custom-shadow rounded-lg">-->
  <!--        <div-->
  <!--          class="bg-lightGray rounded-lg break-words text-center items-center flex flex-col p-4"-->
  <!--        >-->
  <!--          <img class="w-20 mb-4" src="../../assets/images/certificate.svg" />-->
  <!--            <div v-show="$route.query.fileName">-->
  <!--              <p class="text-textPrimary text-title18 mb-3 break-all">-->
  <!--                {{ $route.query.fileName }}-->
  <!--              </p>-->
  <!--            </div>-->

  <!--            <p class="text-textPrimary text-title14 font-bold">Received Time</p>-->
  <!--            <p class="text-textPrimary text-title18 mb-3 break-all">-->
  <!--              {{ new Date(Number($route.query.time)).toLocaleString() }}-->
  <!--            </p>-->
  <!--            <p class="text-textPrimary text-title14 break-all font-bold">-->
  <!--              Transaction Hash-->
  <!--            </p>-->
  <!--            <p class="text-textPrimary text-title18 mb-6 break-all">-->
  <!--              {{ $route.params.hash }}-->
  <!--            </p>-->
  <!--            <p class="text-textPrimary text-title14">-->
  <!--              Hooray!! We are just one step away!-->
  <!--            </p>-->
  <!--              <p class="text-textPrimary text-title12">-->
  <!--                Connect your wallet for the transaction fee, its Only 0.00025 $MPWR-->
  <!--              </p>-->
  <!--        </div>-->
  <!--        <div-->
  <!--          class="p-4 my-4 w-full text-sm text-red-800 rounded-lg bg-red-50 break-all"-->
  <!--          role="alert"-->
  <!--          v-show="errorMessage"-->
  <!--        >-->
  <!--          {{ errorMessage }}-->
  <!--        </div>-->
  <!--        <div class="flex flex-col md:flex-row justify-between">-->
  <!--            <button-->
  <!--              :disabled="!selectedWallet || loading"-->
  <!--              @click="handleTransaction"-->
  <!--              class="bg-lightGreen disabled:bg-lightGray mt-4 content-center p-1 px-14 rounded text-white"-->
  <!--            >-->
  <!--              {{ loading ? "Loading..." : "Complete" }}-->
  <!--            </button>-->
  <!--          <button-->
  <!--            @click="back"-->
  <!--            class="bg-transparent mt-4 content-center p-1 rounded text-textPrimary"-->
  <!--          >-->
  <!--            Back-->
  <!--          </button>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="md:col-span-1 p-3 bg-bgPrimary mt-5 custom-shadow rounded-lg">-->
  <!--        <h5-->
  <!--          class="mb-2 mt-3 mb-6 text-2xl font-bold text-textPrimary text-title28"-->
  <!--        >-->
  <!--          Wallet-->
  <!--        </h5>-->
  <!--              <img-->
  <!--                src="../../assets/images/wallet-keplr.png"-->
  <!--                class="h-20 cursor-pointer mb-3"-->
  <!--                v-if="selectedWallet === Wallet.Keplr"-->
  <!--              />-->
  <!--              <img-->
  <!--                src="../../assets/images/wallet-cosmostation.png"-->
  <!--                class="h-20 cursor-pointer mb-3"-->
  <!--                v-if="selectedWallet === Wallet.Cosmostation"-->
  <!--              />-->
  <!--              <img-->
  <!--                src="../../assets/images/wallet-leap.png"-->
  <!--                class="h-20 cursor-pointer mb-3"-->
  <!--                v-if="selectedWallet === Wallet.Leap"-->
  <!--              />-->
  <!--          <div-->
  <!--            v-if="addressVisible"-->
  <!--            class="flex flex-row bg-lightGray rounded-lg p-2 cursor-pointer w-fit mt-5 flex-wrap"-->
  <!--            @click="copyAddress"-->
  <!--          >-->
  <!--            <p class="text-textPrimary text-title12">{{ addressVisible }}</p>-->
  <!--            <img class="w-4 ml-4" src="../../assets/images/copy-icon.svg" />-->
  <!--          </div>-->
  <!--          <button-->
  <!--            @click="openModal"-->
  <!--            class="bg-lightGreen mt-7 content-center p-1 px-7 rounded text-white"-->
  <!--          >-->
  <!--            {{ selectedWallet ? "Change wallet" : "Connect your wallet" }}-->
  <!--          </button>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<style></style>
