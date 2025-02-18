<script setup lang="ts">
import BuyButton from "@/components/BuyButton.vue";
import Tooltip from "@/components/ui/Tooltip.vue";
import {
CHAIN_ID,
MARKETPLACE_CONTRACT,
PC_BACKEND_ENDPOINT,
PC_BACKEND_ENDPOINT_API,
RPC_ENDPOINT,
} from "@/config/config";
import { useAuth } from "@/stores/auth";
import { useWallet } from "@/stores/wallet";
import { authHeader, useFetcher } from "@/utils/fetcher";
import { log } from "@/utils/logger";
import { useNotifyer } from "@/utils/notifyer";
import {
formatDenom,
getWallet,
resolveSdkError,
walletConnected,
} from "@/utils/wallet-utils";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { GasPrice } from "@cosmjs/stargate";
import { Tendermint37Client } from "@cosmjs/tendermint-rpc";
import { contracts, empowerchain } from "@empower-plastic/empowerjs";
import BigNumber from "bignumber.js";
import { computed, onMounted, ref, watch } from "vue";

export interface BuyCreditsProps {
  availableCredits: number;
  initialCredits: number;
  pricePerCredit: number;
  selectedCoin: string;
  denom: string;
  owner: string;
}

const { isAuthenticated, getAccessToken } = useAuth();
const { isWalletConnected, address: walletAddress } = useWallet();
const { notifyer } = useNotifyer();
const amount = ref<number>(1);
const props = defineProps<BuyCreditsProps>();
const showButtonSpinner = ref(false);
const insufficientBalance = ref(false);
const coinFormatted = ref("");
const currentBalance = ref(Number.MAX_SAFE_INTEGER);
const currentPrice = ref(0);

const availableCreditsString = computed<string>(() => {
  return `${props.availableCredits}/${props.initialCredits}`;
});

watch(isWalletConnected, async (newVal) => {
  if (newVal === true) {
    await initValues();
  }
});

watch(amount, (newVal) => {
  currentPrice.value = calculatePrice(newVal);
  checkBalanceForPurchase(newVal);
});

watch(props, async (newVal) => {
  if (newVal.selectedCoin) {
    coinFormatted.value = await formatDenom(newVal.selectedCoin);
    currentPrice.value = calculatePrice(amount.value);
  }
});

const initValues = async () => {
  try {
    if (props.selectedCoin) {
      coinFormatted.value = await formatDenom(props.selectedCoin);
    }

    if (walletConnected()) {
      const wallet = getWallet();
      const { createRPCQueryClient } = empowerchain.ClientFactory;
      const rpcQueryClient = await createRPCQueryClient({
        rpcEndpoint: RPC_ENDPOINT,
      });
      const balance = await rpcQueryClient.cosmos.bank.v1beta1.allBalances({
        address: (await wallet.getKey(CHAIN_ID)).bech32Address,
      });
      currentBalance.value = 0;
      balance.balances.forEach((b) => {
        if (b.denom === props.selectedCoin) {
          currentBalance.value = parseInt(b.amount);
        }
      });
      checkBalanceForPurchase(amount.value);
    }
  } catch (error) {
    log(error);
  }
};

onMounted(async () => {
  await initValues();
});

const checkBalanceForPurchase = (amount: number) => {
  if (
    new BigNumber(currentPrice.value).times(1000000).toNumber() >
    currentBalance.value
  ) {
    insufficientBalance.value = true;
  } else {
    insufficientBalance.value = false;
  }
};

const calculatePrice = (amount: number) => {
  if (!amount) {
    return 0;
  }
  return new BigNumber(amount).times(props.pricePerCredit).toNumber();
};

const handleBuyCredits = async (retirererName: string) => {
  if (!isWalletConnected.value || !walletAddress.value) {
    notifyer.error("Please connect to wallet");
    return;
  }

  showButtonSpinner.value = true;
  try {
    const wallet = getWallet();
    const offlineSigner = await wallet.getOfflineSignerAuto(CHAIN_ID);
    const accounts = await offlineSigner.getAccounts();
    const tmClient = await Tendermint37Client.connect(RPC_ENDPOINT);
    // TODO replace with empowerjs getter when path registry issue is solved
    const cosmWasmClient = await SigningCosmWasmClient.createWithSigner(
      tmClient,
      offlineSigner,
      {
        gasPrice: GasPrice.fromString("0.025umpwr"),
      },
    );
    const contract =
      new contracts.PlasticCreditMarketplace.PlasticCreditMarketplaceClient(
        cosmWasmClient,
        accounts[0].address,
        MARKETPLACE_CONTRACT,
      );
    const res = await contract.buyCredits(
      {
        denom: props.denom,
        owner: props.owner,
        numberOfCreditsToBuy: amount.value,
        retire: true,
        retiringEntityName: retirererName,
      },
      "auto",
      "",
      [
        {
          denom: props.selectedCoin,
          amount: (props.pricePerCredit * 1000000 * amount.value).toString(),
        },
      ],
    );
    if (res) {
      notifyer.success(
        "Retired credits successfully and generated a certificate",
      );
    }
  } catch (error) {
    console.error(error);
    notifyer.error("Purchase failed: " + resolveSdkError(error));
  } finally {
    showButtonSpinner.value = false;
  }
};

const checkIfCreditsAvailable = () => {
  if (props.availableCredits < amount.value) {
    notifyer.error("Not enough credits available");
    return false;
  }
  return true;
};

const handleCardPayment = async (retirererName: string) => {
  if (!checkIfCreditsAvailable()) {
    return;
  }

  if (!isAuthenticated) {
    notifyer.error("Please login to buy credits");
    return;
  }

  showButtonSpinner.value = true; // Guard against multiple clicks

  const { post } = useFetcher();

  const body = {
    amount: amount.value,
    denom: props.denom,
    listingOwner: props.owner,
    retirererName: retirererName,
  };
  try {
    const accessToken = await getAccessToken(PC_BACKEND_ENDPOINT);

    const response = await post(
      `${PC_BACKEND_ENDPOINT_API}/payments/create-checkout-session-auth`,
      body,
      {
        headers: authHeader(accessToken),
      },
    );
    const paymentGatewayLink = await response.text();
    window.location.href = paymentGatewayLink;
  } catch (error) {
    console.error("Custom error", error);
    notifyer.error("This API call is not implemented yet"); // TODO: handle error
  } finally {
    showButtonSpinner.value = false;
  }
};

const handleUnauthorizedUserPayment = async (
  retirererName: string,
  retirererEmail: string,
) => {
  if (!checkIfCreditsAvailable()) {
    return;
  }

  showButtonSpinner.value = true; // Guard against multiple clicks

  const { post } = useFetcher();

  const body = {
    amount: amount.value,
    denom: props.denom,
    listingOwner: props.owner,
    retirererName: retirererName,
    retirererEmail: retirererEmail,
  };
  try {
    const response = await post(
      `${PC_BACKEND_ENDPOINT_API}/payments/create-checkout-session-noauth`,
      body,
    );
    const paymentGatewayLink = await response.text();
    window.location.href = paymentGatewayLink;
  } catch (error) {
    console.error("Custom error", error);
    notifyer.error("This API call is not implemented yet"); // TODO: handle error
  } finally {
    showButtonSpinner.value = false;
  }
};
</script>
<template>
  <div
    v-if="showButtonSpinner"
    class="fixed inset-0 flex items-center justify-center z-50 bg-black opacity-80 md:hidden"
  >
    <div class="text-center">
      <span class="loading loading-spinner"></span>
      <p class="text-title24 lg:text-title32 text-white">
        Processing transaction
      </p>
    </div>
  </div>
  <div
    class="bg-darkGray md:flex-row flex md:justify-between flex-col gap-1 lg:gap-x-12 p-6 rounded-sm flex-wrap"
  >
    <div class="flex flex-col mb-6 lg:mb-0">
      <p class="text-title18">Available credits</p>
      <p class="text-title24 lg:text-title38">{{ availableCreditsString }}</p>
    </div>
    <div class="flex flex-col mb-6 lg:mb-0 xl:grow">
      <p class="text-title18">Price per credit</p>
      <p class="text-title24 lg:text-title38 font-bold">
        {{ pricePerCredit }} ${{ coinFormatted }}
      </p>
    </div>
    <div class="flex flex-col mb-6 lg:mb-0">
      <div class="flex">
        <div class="flex flex-col mb-0 mt-7">
          <div class="md:flex flex-row items-center hidden mr-3">
            <p class="text-title18 text-subLabel text-right mr-2">Cost</p>
            <Tooltip
              label="The seller will be charged a 3% service fee + 0-5% payment processing fee"
              icon-class="w-[40px] h-[40px]"
            />
          </div>
          <p class="text-title18 text-subLabel text-right hidden md:block mr-3">
            {{ currentPrice }}
          </p>
        </div>
        <div class="flex flex-col flex-wrap w-full">
          <p class="text-title18">How many you want to buy?</p>
          <input
            type="number"
            class="input bg-darkGray mt-1 p-7 text-white text-title24 font-bold w-full"
            min="1"
            v-model="amount"
          />
        </div>
      </div>
      <div class="flex items-center text-title18 text-subLabel mt-2 md:hidden">
        Cost
        {{ pricePerCredit * amount }} ${{ coinFormatted }}
        <Tooltip
          label="The seller will be charged a 3% service fee + 0-5% payment processing fee"
          icon-class="w-[20px] h-[20px]"
          class="ml-2"
        />
      </div>
    </div>
    <div class="flex flex-col w-full lg:w-auto lg:self-end">
      <BuyButton
        :show-button-spinner="showButtonSpinner"
        :insufficient-balance="insufficientBalance"
        :coin-formatted="coinFormatted"
        :handle-buy-credits="handleBuyCredits"
        :handle-card-payment="handleCardPayment"
        :handle-unauthorized-user-payment="handleUnauthorizedUserPayment"
        :is-wallet-connected="isWalletConnected"
        :available-credits="availableCredits"
        :buying-credit-amount="amount"
      ></BuyButton>
    </div>
  </div>
</template>
