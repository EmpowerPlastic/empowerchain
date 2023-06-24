<script setup lang="ts">
import { Wallet } from "@/types/WalletEnums";
import { toast } from "vue3-toastify";
import {
  CHAIN_ID,
  CHAIN_NAME,
  REST_ENDPOINT,
  RPC_ENDPOINT,
} from "@/config/config";
import { getWalletFromType } from "@/utils/wallet-utils";

export interface SelectWalletModalProps {
  showModal: boolean;
}

const chainConfig = {
  chainId: CHAIN_ID,
  chainName: CHAIN_NAME,
  rpc: RPC_ENDPOINT,
  rest: REST_ENDPOINT,
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

defineProps<SelectWalletModalProps>();
const emitWalletModal = defineEmits(["update:showModal", "onWalletSelect"]);

const closeModal = () => {
  emitWalletModal("update:showModal", false);
};

const passWalletToParent = (walletType: Wallet) => {
  emitWalletModal("onWalletSelect", walletType);
};

const handleWallet = async (walletType: Wallet, provider: any) => {
  const checkWalletInstalled =
    walletType === Wallet.COSMOSTATION
      ? await window.cosmostation?.providers?.keplr
      : await window?.[provider];

  if (!checkWalletInstalled) {
    toast.error(`Please install the wallet extension`);
    return;
  }
  try {
    const wallet = getWalletFromType(walletType);
    await wallet.experimentalSuggestChain(chainConfig);
    await wallet.enable(CHAIN_ID);

    passWalletToParent(walletType);
  } catch (error) {
    toast.error(`Failed to enable wallet: ${error}`);
    console.error(`Failed to enable wallet: ${error}`);
  }
};
</script>
<template>
  <input
    type="checkbox"
    id="retire-credits-modal"
    class="modal-toggle"
    :checked="showModal"
  />
  <div class="modal bg-modalBackground">
    <div
      class="modal-box text-white bg-black rounded-sm border-[1.5px] border-borderBlack shadow-md px-7 py-5 max-w-3xl relative font-Inter"
    >
      <label
        class="btn btn-ghost btn-sm btn-circle absolute right-2 top-2"
        @click="closeModal"
      >
        <img class="h-7" src="../assets/closeIcon.svg" />
      </label>

      <div class="flex justify-between">
        <p class="text-title26">Select Wallet</p>
      </div>

      <div class="flex md:flex-row flex-col items-center gap-5 my-5">
        <div class="wallet-box" @click="handleWallet(Wallet.KEPLR, 'keplr')">
          <img class="wallet-image" src="../assets/walletKeplr.png" />
        </div>
        <div
          class="wallet-box"
          @click="
            handleWallet(Wallet.COSMOSTATION, 'cosmostation.providers.keplr')
          "
        >
          <img class="wallet-image" src="../assets/walletCosmostation.png" />
        </div>
        <div class="wallet-box" @click="handleWallet(Wallet.LEAP, 'leap')">
          <img class="wallet-image" src="../assets/walletLeap.png" />
        </div>
      </div>
    </div>
  </div>
</template>
