<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Wallet } from "@/types/enums";
import { CHAIN_ID, REST_URL, RPC_URL } from "@/config/config";
import { toast } from "vue3-toastify";

//Modal props
export interface ModalProps {
  closeModal: (val: MouseEvent) => void;
}
defineProps<ModalProps>();
//Pass selected wallet to parent
const emit = defineEmits(["selectedWallet"]);

const showWarning = ref(false);

const passWalletToParent = (wallet: Wallet) => {
  showWarning.value = false;
  emit("selectedWallet", wallet);
};

const handleWallet = async (wallet: Wallet, provider: any) => {
  const checkWalletInstalled =
    wallet === Wallet.Cosmostation
      ? await window.cosmostation?.providers?.keplr
      : await window?.[provider];

  if (!checkWalletInstalled) {
    showWarning.value = true;
    return;
  }

  try {
    if (wallet === Wallet.Cosmostation) {
      await window.cosmostation.providers.keplr.enable(CHAIN_ID);
    } else {
      await window[provider]?.enable(CHAIN_ID);
    }
    passWalletToParent(wallet);
  } catch (error) {
    toast.error(`Failed to enable wallet: ${error}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
    console.error(`Failed to enable wallet: ${error}`);
  }
};

const addExperimentalChain = async () => {
  const chainConfig = {
    chainId: CHAIN_ID,
    chainName: "EmpowerChain Testnet",
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
  <div
    id="selectWalletModal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full flex flex-col justify-center items-center"
  >
    <div class="relative w-full items-center h-full max-w-xl md:h-auto">
      <!-- Modal content -->
      <div class="relative w-full bg-white rounded-lg shadow">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-4 rounded-t">
          <h3 class="font-bold text-black text-title28">Select your wallet</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            @click="closeModal"
          >
            X
          </button>
        </div>
        <!-- Modal body -->
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
            class="h-20 cursor-pointer mb-3"
            @click="handleWallet(Wallet.Keplr, 'keplr')"
          />
          <img
            src="../../assets/images/wallet-cosmostation.png"
            class="h-20 cursor-pointer mb-3"
            @click="
              handleWallet(Wallet.Cosmostation, 'cosmostation.providers.keplr')
            "
          />
          <img
            src="../../assets/images/wallet-leap.png"
            class="h-20 cursor-pointer mb-3"
            @click="handleWallet(Wallet.Leap, 'leap')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
