<script setup lang="ts">
import { CHAIN_ID } from "@/config/config";
import { onMounted, ref } from "vue";
import { toast } from "vue3-toastify";
import { useRoute } from "vue-router";
import SellectWalletModal from "@/components/SellectWalletModal.vue";
import { getWalletFromType } from "@/utils/wallet-utils";

const router = useRoute();
const address = ref();
const addressVisible = ref();
const showNav = ref(false);
const selectedWallet = ref();
const selectWalletModal = ref(false);

onMounted(() => {
  connect();
});

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
  }
  closeSelectWalletModal();
};

const disconnectWallet = () => {
  localStorage.removeItem("address");
  localStorage.removeItem("wallet");
  location.reload();
};

const copyAddress = async () => {
  await navigator.clipboard.writeText(address.value);
  toast.success("Address copied to clipboard");
};
</script>

<template>
  <!--  To hide on certificate page-->
  <template v-if="!router.meta?.hideNavFooter">
    <nav
      class="bg-gradient-radial bg-opacity-40 px-5 py-4"
      style="
        background-image: radial-gradient(
          50% 50% at 50% 50%,
          rgba(0, 227, 58, 0.4) 0%,
          rgba(0, 0, 0, 0.4) 88.02%
        );
      "
    >
      <SellectWalletModal
        v-model:show-modal="selectWalletModal"
        @on-wallet-select="onWalletSelect"
      />
      <!-- Desktop Navbar-->
      <div class="hidden md:grid grid-cols-3 md:px-[10%] items-center">
        <div>
          <a href="/">
            <img src="../assets/logo.png" class="h-8" alt="Logo" />
          </a>
        </div>

        <div class="flex flex-row justify-around text-white text-title18">
          <a href="/">Home</a>
          <button type="button" @click="toast.info('Coming soon!')">
            Get <b>$MPWR</b>
          </button>
          <button type="button" @click="toast.info('Coming soon!')">FAQ</button>
        </div>

        <div class="flex flex-row justify-end">
          <button
            v-if="!address"
            class="max-w-[220px] bg-lightBlack border border-borderBlack text-white text-title18 w-full rounded-xl h-full px-5 py-1"
            @click="openSelectWalletModal"
          >
            {{ address || "Connect wallet" }}
          </button>
          <!--          User Profile Dropdown-->
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
                <a href="/certificate" class="btn nav-dropdown-button">
                  My Credits
                </a>
                <button
                  @click="disconnectWallet"
                  class="btn nav-dropdown-button"
                >
                  Disconnect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Mobile Navbar-->
    <div class="px-5 flex flex-row justify-between w-full md:hidden">
      <a href="/" class="flex items-center">
        <img src="../assets/logo.png" class="h-6 mr-3" alt="Logo" />
      </a>
      <button
        type="button"
        @click="showNav = true"
        class="inline-flex items-center ml-3 text-sm text-gray-500 rounded-lg"
      >
        <img class="w-6" src="../assets/sideButton.svg" />
      </button>
    </div>

    <div
      v-if="showNav"
      class="absolute z-10 top-0 text-white flex flex-col items-center h-full w-full bg-navBarBlack md:hidden"
    >
      <button
        type="button"
        @click="showNav = false"
        data-drawer-target="navbar-default"
        data-collapse-toggle="navbar-default"
        class="bg-transparent self-end mt-5 mr-3"
      >
        <img class="h-7" src="../assets/closeIcon.svg" />
      </button>
      <div
        class="grid grid-cols-1 gap-8 p-5 w-full font-Inter text-title24 text-white"
      >
        <div>
          <button
            v-if="!address"
            class="bg-buttonGray border border-greenPrimary w-full h-11 rounded-xl text-ellipsis overflow-hidden"
            @click="openSelectWalletModal"
          >
            {{ address || "Connect wallet" }}
          </button>
          <!--          User Profile Dropdown-->
          <div class="dropdown dropdown-start w-full">
            <template v-if="address">
              <button
                class="bg-buttonGray border px-5 border-greenPrimary w-full h-11 rounded-xl text-ellipsis overflow-hidden"
              >
                {{ addressVisible || "Connect wallet" }}
              </button>
            </template>
            <div
              tabindex="0"
              class="dropdown-content menu font-Inter divide-y divide-lightGray bg-avatarBlack rounded-sm items-center border-avatarBorder border-[1.5px] w-full mt-2"
            >
              <div class="menu py-5 items-center mx-4 min-w-[120px]">
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
                <a href="/certificate" class="btn nav-dropdown-button">
                  My Credits
                </a>
                <button
                  @click="disconnectWallet"
                  class="btn nav-dropdown-button"
                >
                  Disconnect
                </button>
              </div>
            </div>
          </div>
        </div>
        <ul class="flex flex-col items-center gap-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <!--          <a>Get MPWR</a>-->
            <button type="button" @click="toast.info('Coming soon!')">
              Get <b>$MPWR</b>
            </button>
          </li>
          <li>
            <!-- <a href="/faq">FAQ</a> -->
            <button type="button" @click="toast.info('Coming soon!')">
              FAQ
            </button>
          </li>
        </ul>
      </div>
    </div>
  </template>
</template>

<style scoped>
.nav-dropdown-button {
  @apply btn-ghost rounded-sm text-greenPrimary font-bold text-title14 normal-case border-none;
}
</style>
