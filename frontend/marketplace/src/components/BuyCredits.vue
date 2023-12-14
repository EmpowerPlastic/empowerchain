<script setup lang="ts">
import { contracts, empowerchain } from "@empower-plastic/empowerjs";
import { GasPrice } from "@cosmjs/stargate";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Tendermint37Client } from "@cosmjs/tendermint-rpc";
import {
  CHAIN_ID,
  MARKETPLACE_CONTRACT,
  PC_BACKEND_ENDPOINT,
  PC_BACKEND_ENDPOINT_API,
  RPC_ENDPOINT,
} from "@/config/config";
import { onMounted, ref, watch, computed } from "vue";
import { getWallet } from "@/utils/wallet-utils";
import { formatDenom, resolveSdkError } from "@/utils/wallet-utils";
import BuyButton from "@/components/BuyButton.vue";
import { useFetcher, authHeader } from "@/utils/fetcher";
import { useAuth } from "@/stores/auth";
import { useWallet } from "@/stores/wallet";
import { useNotifyer } from "@/utils/notifyer";

export interface BuyCreditsProps {
  availableCredits: number;
  initialCredits: number;
  pricePerCredit: number;
  selectedCoin: string;
  denom: string;
  owner: string;
}

const { isAuthenticated, getAccessToken } = useAuth();
const { isWalletConnected } = useWallet();
const { notifyer } = useNotifyer();
const amount = ref<number>(1);
const props = defineProps<BuyCreditsProps>();
const showButtonSpinner = ref(false);
const insufficientBalance = ref(false);
const coinFormatted = ref("");
const currentBalance = ref(Number.MAX_SAFE_INTEGER);
const availableCreditsString = computed<string>(() => {
  return `${props.availableCredits}/${props.initialCredits}`;
});

watch(isWalletConnected, async (newVal) => {
  if (newVal === true) {
    await initValues();
  }
});

watch(amount, (newVal) => {
  checkBalanceForPurchase(newVal);
});

watch(props, async (newVal) => {
  if (newVal.selectedCoin) {
    coinFormatted.value = await formatDenom(newVal.selectedCoin);
  }
});

const initValues = async () => {
  if (props.selectedCoin) {
    coinFormatted.value = await formatDenom(props.selectedCoin);
  }
  const { createRPCQueryClient } = empowerchain.ClientFactory;
  const rpcQueryClient = await createRPCQueryClient({
    rpcEndpoint: RPC_ENDPOINT,
  });
  const balance = await rpcQueryClient.cosmos.bank.v1beta1.allBalances({
    address: (await getWallet().getKey(CHAIN_ID)).bech32Address,
  });
  currentBalance.value = 0;
  balance.balances.forEach((b) => {
    if (b.denom === props.selectedCoin) {
      currentBalance.value = parseInt(b.amount);
    }
  });
  checkBalanceForPurchase(amount.value);
};

onMounted(async () => {
  await initValues();
});

const checkBalanceForPurchase = (amount: number) => {
  if (amount * props.pricePerCredit * 1000000 > currentBalance.value) {
    insufficientBalance.value = true;
  } else {
    insufficientBalance.value = false;
  }
};

const handleBuyCredits = async () => {
  if (!isWalletConnected.value) {
    notifyer.error("Please connect to wallet");
    return;
  }

  showButtonSpinner.value = true;
  try {
    const wallet = getWallet();
    const offlineSigner = wallet.getOfflineSigner(CHAIN_ID);
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
    const fee = {
      amount: [{ amount: "100000", denom: "umpwr" }],
      gas: "250000",
    };
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
      },
      fee,
      "",
      [
        {
          denom: props.selectedCoin,
          amount: (props.pricePerCredit * 1000000 * amount.value).toString(),
        },
      ],
    );
    if (res) {
      notifyer.success("Purchase was successful");
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

const handleCardPayment = async () => {
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
  };
  try {
    const accessToken = await getAccessToken(PC_BACKEND_ENDPOINT);

    const response = await post(
      `${PC_BACKEND_ENDPOINT_API}/payments/create-checkout-session`,
      body,
      {
        headers: authHeader(accessToken),
      },
    );
    const paymentGatewayLink = await response.text();
    window.location.href = paymentGatewayLink;
  } catch (error) {
    console.error(error);
    notifyer.error("This API call is not implemented yet"); // TODO: handle error
  } finally {
    showButtonSpinner.value = false;
  }
};
</script>
<template>
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
          <p class="text-title18 text-subLabel text-right hidden md:block mr-3">
            Cost
          </p>
          <p class="text-title18 text-subLabel text-right hidden md:block mr-3">
            {{ amount >= 0 ? pricePerCredit * amount : "0" }}
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
      <p class="text-title18 text-subLabel md:hidden">
        Cost {{ pricePerCredit * amount }} ${{ coinFormatted }}
      </p>
    </div>
    <div class="flex flex-col w-full lg:w-auto lg:self-end">
      <BuyButton
        :show-button-spinner="showButtonSpinner"
        :insufficient-balance="insufficientBalance"
        :coin-formatted="coinFormatted"
        :handle-buy-credits="handleBuyCredits"
        :handle-card-payment="handleCardPayment"
        :is-wallet-connected="isWalletConnected"
        :available-credits="availableCredits"
        :buying-credit-amount="amount"
      ></BuyButton>
    </div>
  </div>
</template>
