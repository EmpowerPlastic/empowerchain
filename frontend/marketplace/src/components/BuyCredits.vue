<script setup lang="ts">
import {contracts} from "@empower-plastic/empowerjs";
import {GasPrice} from '@cosmjs/stargate';
import {SigningCosmWasmClient} from "@cosmjs/cosmwasm-stargate";
import {Tendermint37Client} from '@cosmjs/tendermint-rpc';
import {CHAIN_ID, MARKETPLACE_CONTRACT, RPC_ENDPOINT} from "@/config/config";
import {ref} from "vue";
import {toast} from "vue3-toastify";

export interface BuyCreditsProps {
  availableCredits: string
  pricePerCredit: number
  selectedCoin: string
  denom: string,
  owner: string
}

const amount = ref<number>(0)
const props = defineProps<BuyCreditsProps>();
const showButtonSpinner = ref(false)

const coinsArray = ['Pay by invoice coming soon']

const buyCredits = async () => {
  showButtonSpinner.value = true
  try {
    const offlineSigner = window.keplr.getOfflineSigner(CHAIN_ID);
    const accounts = await offlineSigner.getAccounts();
    const tmClient = await Tendermint37Client.connect(
        RPC_ENDPOINT);
    // TODO replace with empowerjs getter when path registry issue is solved
    const cosmWasmClient = await SigningCosmWasmClient.createWithSigner(tmClient,
        offlineSigner, {
          gasPrice: GasPrice.fromString("0.025umpwr"),
        }
    );
    const contract = new contracts.PlasticCreditMarketplace.PlasticCreditMarketplaceClient(cosmWasmClient, accounts[0].address, MARKETPLACE_CONTRACT);
    const res = await contract.buyCredits({
      denom: props.denom,
      owner: props.owner,
      numberOfCreditsToBuy: amount.value ,
    }, "auto", "", [{
      denom: "umpwr",
      amount: (props.pricePerCredit * 1000000 * amount.value).toString(),
    }]);
    if (res) {
      toast.success('Purchase was successful')
      showButtonSpinner.value = false
    }
  } catch (error) {
    showButtonSpinner.value = false
    console.error(error)
    toast.error(`Purchase failed ${error}`)
  }
}

</script>
<template>
  <div class="bg-darkGray md:flex-row flex md:justify-between flex-col gap-1 p-6 rounded-sm flex-wrap">
    <div class="flex flex-col">
      <p class="text-title18">Available credits</p>
      <p class="text-title38">{{ availableCredits }}</p>
    </div>
    <div class="flex flex-col">
      <p class="text-title18">Price per credit</p>
      <p class="text-title38 font-bold">{{ pricePerCredit }} $MPWR</p>
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
          <input type="number" class="input bg-darkGray mt-1 text-white text-title38 font-bold md:max-w-[200px] w-full"
                 v-model="amount"/>
        </div>
      </div>
      <p class="text-title18 text-subLabel mt-1 md:hidden">Cost {{ amount >= 0 ? pricePerCredit * amount : "0" }}
        $MPWR</p>
    </div>
    <div class="flex flex-row mt-8">
      <button
          :disabled="showButtonSpinner || (amount <= 0)"
          class="btn btn-ghost w-full rounded-r-none w-[75%] normal-case bg-greenPrimary text-title24 p-0 font-normal md:ml-4 disabled:bg-lightGray disabled:text-white text-ellipsis overflow-hidden whitespace-nowrap"
          @click="buyCredits">
        {{ showButtonSpinner ? 'Processing transaction' : `Buy with ${selectedCoin}` }}
      </button>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost rounded-l-none bg-dropdownGreen !px-0 mr-5">
          <img class="w-4 mx-5" src="../assets/dropdownIconButton.svg"/>
        </label>
        <div tabindex="0" class="dropdown-content menu p-4 shadow bg-dropdownGray rounded-box w-52 !list-none">
          <li disabled class="text-title12 font-semibold my-1 cursor-pointer" v-for="coin in coinsArray" :key="coin"
          >{{ coin }}
          </li>
        </div>
      </div>
    </div>
  </div>
</template>