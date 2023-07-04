<script setup lang="ts">
import SelectWalletModal from "@/components/SelectWalletModal.vue";
import { toast } from "vue3-toastify";
import { onMounted, ref } from "vue";
import { getWalletFromType } from "@/utils/wallet-utils";
import { CHAIN_ID } from "@/config/config";
import { store } from "../store/store";

const address = ref();
const addressVisible = ref();
const selectedWallet = ref();
const selectWalletModal = ref(false);

onMounted(() => {
  //Check wallet change in kepler
  window.addEventListener("keplr_keystorechange", () => {
    handleWalletAccountChange();
  });

  //Check wallet change in cosmostation
  window.addEventListener("cosmostation_keystorechange", () => {
    handleWalletAccountChange();
  });

  //Check wallet change in leap
  window.addEventListener("leap_keystorechange", () => {
    handleWalletAccountChange();
  });
});

const handleWalletAccountChange = () => {
  let wallet = localStorage.getItem("wallet");
  if (wallet && address.value) {
    handleSelectWallet(wallet);
  }
};
const openSelectWalletModal = () => {
  selectWalletModal.value = true;
};

const closeSelectWalletModal = () => {
  selectWalletModal.value = false;
};

const connect = async () => {
  let addressLocal = localStorage.getItem("address");
  let wallet = localStorage.getItem("wallet");
  if (addressLocal && wallet) {
    await handleSelectWallet(wallet);
  }
};

const onWalletSelect = (wallet: string) => {
  selectedWallet.value = wallet;
  handleSelectWallet(wallet);
};

const handleSelectWallet = async (walletType: string) => {
  if (!walletType) {
    localStorage.removeItem("address");
    localStorage.removeItem("wallet");
    openSelectWalletModal();
    return;
  }

  const wallet = getWalletFromType(walletType);
  const account = await wallet.getKey(CHAIN_ID);
  const walletAddress = account.bech32Address;

  address.value = walletAddress;
  addressVisible.value =
    walletAddress?.substring(0, 20) +
    "..." +
    walletAddress?.substring(walletAddress?.length - 4);
  if (walletAddress && walletType) {
    localStorage.setItem("address", walletAddress);
    localStorage.setItem("wallet", walletType);
    store.address = walletAddress;
  }
  closeSelectWalletModal();
};

const disconnectWallet = () => {
  localStorage.removeItem("address");
  localStorage.removeItem("wallet");
  store.address = undefined;
  location.reload();
};

const copyAddress = async () => {
  await navigator.clipboard.writeText(address.value);
  toast.success("Address copied to clipboard");
};
</script>
<template>
  <SelectWalletModal
    v-model:show-modal="selectWalletModal"
    @on-wallet-select="onWalletSelect"
  />
  <div
    class="navbar bg-gradient-radial bg-opacity-40 px-5 md:px-[10%]"
    style="
      background-image: radial-gradient(
        50% 50% at 50% 50%,
        rgba(0, 227, 58, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 88.02%
      );
    "
  >
    <div class="flex-1">
      <a href="/">
        <img class="h-6 md:h-7" src="../assets/mainLogo.svg" />
      </a>
    </div>
    <div class="flex-none">
      <button
        v-if="!address"
        @click="openSelectWalletModal"
        class="max-w-[220px] bg-lightBlack border border-borderBlack text-white text-title18 w-full rounded-xl h-full py-1 px-3 md:px-7"
      >
        Connect wallet
      </button>
      <div class="dropdown dropdown-end">
        <template v-if="address">
          <label tabindex="0" class="btn btn-circle m-1">
            <div class="avatar">
              <div
                class="w-[48px] rounded-full border-borderBlack bg-darkBlack border-[1.5px] p-2"
              >
                <img src="../assets/walletAvatar.png" />
              </div>
            </div>
          </label>
        </template>
        <div
          tabindex="0"
          class="dropdown-content menu font-Inter divide-y divide-lightGray bg-avatarBlack rounded-sm items-center border-avatarBorder border-[1.5px]"
        >
          <div class="menu py-5 items-center mx-6 min-w-[120px]">
            <div class="avatar mb-3">
              <div class="w-[82px] rounded-full bg-lightBlack">
                <img class="p-4" src="../assets/walletAvatar.png" />
              </div>
            </div>
            <div class="flex flex-row cursor-pointer" @click="copyAddress">
              <p class="text-title14 text-white">
                {{ addressVisible || "Connect wallet" }}
              </p>
              <img class="w-4 mx-3" src="../assets/copyIcon.svg" />
            </div>
          </div>

          <div class="menu py-2 items-center w-full">
            <button
              @click="disconnectWallet"
              class="btn btn-ghost bg-transparent rounded-sm text-titleText font-bold text-title14 normal-case border-none"
            >
              Disconnect
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
