<script setup lang="ts">
import { CHAIN_ID } from "@/config/config";
import { onMounted, ref } from "vue";
import { RouterLink, PageNames } from "@/router";
import { toast } from "vue3-toastify";
import { useRoute } from "@/router";
import SellectWalletModal from "@/components/SellectWalletModal.vue";
import {
  getWalletFromType,
  disconnectWallet,
  walletConnected,
} from "@/utils/wallet-utils";
import { useAuth } from "@/stores/auth";
import { useWallet } from "@/stores/wallet";
import tracking, { TrackEvents } from "@/utils/analytics";
import { log } from "@/utils/logger";

const { handleSignIn, handleSignOut, isAuthenticated, user } = useAuth();
const { address } = useWallet();
const route = useRoute();
const addressVisible = ref();
const showNav = ref(false);
const selectedWallet = ref();
const selectWalletModal = ref(false);
const userDetails = ref(user);

onMounted(() => {
  //Disable wallet connection for email login
  if (!isAuthenticated.value && walletConnected()) {
    connect();
  }
});

const openSelectWalletModal = () => {
  handleLoginClick("wallet");
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
  try {
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
      tracking.identify(walletAddress, {
        walletType,
        loginType: "wallet",
      });
      localStorage.setItem("address", walletAddress);
      localStorage.setItem("wallet", walletType);
    }
    closeSelectWalletModal();
  } catch (error) {
    disconnectWallet();
    log(error);
  }
};

const copyAddress = async () => {
  await navigator.clipboard.writeText(address.value ?? "");
  toast.success("Address copied to clipboard");
};

const handleLoginClick = (variant: "open menu" | "wallet" | "email") => {
  tracking.trackEvent(TrackEvents.CLICKED_LOGIN, {
    variant,
  });
};

const handleSignInClick = () => {
  handleLoginClick("email");
  handleSignIn();
};

const handleGetMPWR = () => {
  const pageContext =
    typeof route.meta?.pageViewEvent === "function"
      ? route.meta?.pageViewEvent(route)[0]
      : route.meta?.pageViewEvent;

  toast.info("Coming soon!");
  tracking.trackEvent(TrackEvents.CLICKED_GET_MPWR, {
    context: pageContext ?? PageNames.UNKNOWN,
  });
};
</script>

<template>
  <!--  To hide on certificate page-->
  <template v-if="!route.meta?.hideNavFooter">
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
      <div class="hidden md:grid grid-cols-3 items-center">
        <div>
          <router-link :to="{ name: PageNames.START_PAGE }">
            <img
              src="../assets/logo.png"
              class="h-8"
              alt="Empower Marketplace"
            />
          </router-link>
        </div>

        <div class="flex flex-row justify-around text-white text-title18">
          <router-link :to="{ name: PageNames.START_PAGE }">Home</router-link>
          <button type="button" @click="handleGetMPWR">Get <b>$MPWR</b></button>
          <router-link :to="{ name: PageNames.FAQ }">FAQ</router-link>
        </div>

        <div class="flex flex-row justify-end">
          <!--          User Profile Dropdown-->
          <div class="dropdown dropdown-end z-10">
            <div
              class="avatar mb-3 cursor-pointer"
              tabindex="0"
              v-if="isAuthenticated || address"
            >
              <div class="w-[70px]">
                <img class="p-3" src="../assets/avatar.svg" />
              </div>
            </div>
            <button
              v-if="!(isAuthenticated || address)"
              tabindex="0"
              class="min-w-[150px] bg-lightBlack border border-borderBlack text-white text-title18 w-full rounded-xl h-full px-5 py-1"
              @click="() => handleLoginClick('open menu')"
            >
              Login
            </button>
            <div
              v-if="!(isAuthenticated || address)"
              tabindex="0"
              class="dropdown-content menu font-Inter divide-y divide-lightGray bg-avatarBlack rounded-sm items-center border-avatarBorder border-[1.5px]"
            >
              <div class="menu py-5 items-center mx-6 min-w-[180px]">
                <button
                  @click="openSelectWalletModal"
                  class="btn nav-dropdown-button"
                >
                  Wallet
                </button>
                <button
                  @click="handleSignInClick"
                  class="btn nav-dropdown-button"
                >
                  Email
                </button>
              </div>
            </div>
            <div
              v-if="isAuthenticated || address"
              tabindex="0"
              class="dropdown-content menu font-Inter divide-y divide-lightGray bg-avatarBlack rounded-sm items-center border-avatarBorder border-[1.5px]"
            >
              <div class="menu py-5 items-center mx-6 min-w-[180px]">
                <div class="avatar mb-3">
                  <div class="w-[70px] h-[65px]">
                    <img class="p-4" src="../assets/greenlogo.svg" />
                  </div>
                </div>
                <div
                  class="flex flex-row cursor-pointer"
                  @click="copyAddress"
                  v-if="addressVisible"
                >
                  <p class="text-title14 text-white">
                    {{ addressVisible }}
                  </p>
                  <img class="w-4 mx-3" src="../assets/copyIcon.svg" />
                </div>
                <p class="text-title14 text-white" v-if="userDetails?.email">
                  {{ userDetails?.email }}
                </p>
              </div>
              <div class="menu py-2 items-center w-full">
                <router-link
                  :to="{ name: PageNames.CERTIFICATES }"
                  class="btn nav-dropdown-button"
                >
                  My Certificates
                </router-link>
                <!--                <a-->
                <!--                  href="/profile"-->
                <!--                  class="btn nav-dropdown-button"-->
                <!--                  v-if="isAuthenticated"-->
                <!--                >-->
                <!--                  Profile-->
                <!--                </a>-->
                <button
                  v-if="address"
                  @click="disconnectWallet"
                  class="btn nav-dropdown-button"
                >
                  Disconnect
                </button>
                <button
                  v-if="isAuthenticated"
                  @click="handleSignOut"
                  class="btn nav-dropdown-button"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Mobile Navbar-->
    <div class="px-5 flex flex-row justify-between w-full md:hidden">
      <router-link
        :to="{ name: PageNames.START_PAGE }"
        class="flex items-center"
      >
        <img
          src="../assets/logo.png"
          class="h-6 mr-3"
          alt="Empower Marketplace"
        />
      </router-link>
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
          <div
            class="dropdown dropdown-start w-full"
            v-if="!(isAuthenticated || address)"
          >
            <button
              tabindex="0"
              class="bg-buttonGray border border-greenPrimary w-full h-11 rounded-xl text-ellipsis overflow-hidden"
            >
              Login
            </button>
            <!--          Login Option dropdown-->
            <div
              tabindex="0"
              class="dropdown-content menu font-Inter divide-y divide-lightGray bg-avatarBlack rounded-sm items-center border-avatarBorder border-[1.5px] w-full mt-2"
            >
              <div class="menu py-5 items-center mx-6 min-w-[180px]">
                <button
                  @click="openSelectWalletModal"
                  class="btn nav-dropdown-button"
                >
                  Wallet
                </button>
                <button
                  @click="handleSignInClick"
                  class="btn nav-dropdown-button"
                >
                  Email
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Navbar Items-->
        <div class="text-center">
          <template v-if="isAuthenticated || address">
            <div
              class="flex flex-row justify-center cursor-pointer text-center"
              @click="copyAddress"
              v-if="address"
            >
              <p class="text-title18 text-white">
                {{ addressVisible || "Connect wallet" }}
              </p>
              <img class="w-4 mx-3" src="../assets/copyIcon.svg" />
            </div>
            <p class="text-title18 text-white">
              {{ userDetails?.email }}
            </p>
            <router-link
              :to="{ name: PageNames.CERTIFICATES }"
              class="btn nav-dropdown-button-mobile"
            >
              My Certificates
            </router-link>
            <!-- <a
              href="/profile"
              class="btn nav-dropdown-button-mobile"
              v-if="isAuthenticated"
            >
              Profile
            </a> -->
            <button
              v-if="address"
              @click="disconnectWallet"
              class="btn nav-dropdown-button-mobile"
            >
              Disconnect
            </button>
            <br />
            <button
              @click="handleSignOut"
              class="btn nav-dropdown-button-mobile"
              v-if="isAuthenticated"
            >
              Logout
            </button>
          </template>
        </div>
        <ul class="flex flex-col items-center gap-4">
          <li>
            <router-link :to="{ name: PageNames.START_PAGE }">Home</router-link>
          </li>
          <li>
            <!--          <a>Get MPWR</a>-->
            <button type="button" @click="handleGetMPWR">
              Get <b>$MPWR</b>
            </button>
          </li>
          <li>
            <router-link :to="{ name: PageNames.FAQ }">FAQ</router-link>
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
.nav-dropdown-button-mobile {
  @apply btn-ghost rounded-sm text-greenPrimary font-bold text-title18 normal-case border-none;
}
</style>
