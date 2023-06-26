<script setup lang="ts">
import { contracts, empowerchain } from "@empower-plastic/empowerjs";
import { GasPrice } from "@cosmjs/stargate";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Tendermint37Client } from "@cosmjs/tendermint-rpc";
import { CHAIN_ID, MARKETPLACE_CONTRACT, RPC_ENDPOINT } from "@/config/config";
import { onMounted, ref, watch } from "vue";
import { toast } from "vue3-toastify";
import { getWallet, walletConnected } from "@/utils/wallet-utils";
import { formatDenom, resolveSdkError } from "@/utils/wallet-utils";

export interface BuyCreditsProps {
  availableCredits: string;
  pricePerCredit: number;
  selectedCoin: string;
  denom: string;
  owner: string;
}

const amount = ref<number>(1);
const props = defineProps<BuyCreditsProps>();
const showButtonSpinner = ref(false);
const insufficientBalance = ref(false);
const coinFormatted = ref("");
const currentBalance = ref(Number.MAX_SAFE_INTEGER);

watch(amount, (newVal) => {
  checkBalanceForPurchase(newVal);
});

watch(props, async (newVal) => {
  coinFormatted.value = await formatDenom(newVal.selectedCoin);
});

const coinsArray = ["Pay by invoice coming soon"];

onMounted(async () => {
  coinFormatted.value = await formatDenom(props.selectedCoin);
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
});

const checkBalanceForPurchase = (amount: number) => {
  if (amount * props.pricePerCredit * 1000000 > currentBalance.value) {
    insufficientBalance.value = true;
  } else {
    insufficientBalance.value = false;
  }
};

const buyCredits = async () => {
  if (!walletConnected()) {
    toast.error("Please connect to wallet");
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
      }
    );
    const fee = {
      amount: [{ amount: "100000", denom: "umpwr" }],
      gas: "250000",
    };
    const contract =
      new contracts.PlasticCreditMarketplace.PlasticCreditMarketplaceClient(
        cosmWasmClient,
        accounts[0].address,
        MARKETPLACE_CONTRACT
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
      ]
    );
    if (res) {
      toast.success("Purchase was successful");
      showButtonSpinner.value = false;
    }
  } catch (error) {
    showButtonSpinner.value = false;
    console.error(error);
    toast.error("Purchase failed: " + resolveSdkError(error));
  }
};
</script>
<template>
  <div
    class="bg-darkGray md:flex-row flex md:justify-between flex-col gap-1 p-6 rounded-sm flex-wrap"
  >
    <div class="flex flex-col">
      <p class="text-title18">Available credits</p>
      <p class="text-title38">{{ availableCredits }}</p>
    </div>
    <div class="flex flex-col">
      <p class="text-title18">Price per credit</p>
      <p class="text-title38 font-bold">
        {{ pricePerCredit }} ${{ coinFormatted }}
      </p>
    </div>
    <div class="flex flex-col">
      <div class="flex">
        <div class="flex flex-col mb-0 mt-7">
          <p class="text-title18 text-subLabel text-right hidden md:block mr-3">
            Cost
          </p>
          <p class="text-title18 text-subLabel text-right hidden md:block mr-3">
            {{ amount >= 0 ? pricePerCredit * amount : "0" }}
          </p>
        </div>
        <div class="flex flex-col flex-wrap">
          <p class="text-title18">How many you want to buy?</p>
          <input
            type="number"
            class="input bg-darkGray mt-1 text-white text-title38 font-bold w-full md:max-w-[200px]"
            min="1"
            v-model="amount"
          />
        </div>
      </div>
      <p class="text-title18 text-subLabel mt-1 md:hidden">
        Cost {{ pricePerCredit * amount }} ${{ coinFormatted }}
      </p>
    </div>
    <div class="flex flex-row mt-8">
      <button
        :disabled="showButtonSpinner || insufficientBalance"
        class="btn btn-ghost w-full rounded-r-none md:max-w-[80%] max-w-[85%] normal-case bg-greenPrimary text-title24 p-0 font-normal md:ml-4 disabled:bg-lightGray disabled:text-white"
        @click="buyCredits"
      >
        <span class="loading loading-spinner"></span>
        {{
          insufficientBalance
            ? "Insufficient balance"
            : showButtonSpinner
            ? "Processing transaction"
            : "Buy with $" + coinFormatted
        }}
      </button>
      <div class="dropdown dropdown-end">
        <label
          tabindex="0"
          class="btn btn-ghost rounded-l-none bg-dropdownGreen !px-0 mr-5"
        >
          <img class="w-4 mx-5" src="../assets/dropdownIconButton.svg" />
        </label>
        <div
          tabindex="0"
          class="dropdown-content menu p-4 shadow bg-dropdownGray rounded-box w-52 !list-none"
        >
          <li
            disabled
            class="text-title12 font-semibold my-1 cursor-pointer"
            v-for="coin in coinsArray"
            :key="coin"
          >
            {{ coin }}
          </li>
        </div>
      </div>
    </div>
  </div>
</template>
