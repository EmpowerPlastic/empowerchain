<script setup lang="ts">
import {contracts, cosmos, empowerchain, getSigningTM37EmpowerchainClient} from "@empower-plastic/empowerjs";
import {Decimal} from "@cosmjs/math";
import type { GeneratedType, OfflineSigner } from '@cosmjs/proto-signing';
import { GasPrice, SigningStargateClient, defaultRegistryTypes } from '@cosmjs/stargate';
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Tendermint37Client } from '@cosmjs/tendermint-rpc';
import type { HttpEndpoint } from '@cosmjs/tendermint-rpc';
export interface BuyCreditsProps {
  availableCredits: string
  pricePerCredit: number
  selectedCoin: string
  amount: number,
  denom: string,
  owner: string
}

const props = defineProps<BuyCreditsProps>();
const emitModalValue = defineEmits(['update:selectedCoin', 'update:amount'])

const updateSelectedCoinValue = (val: string) => {
  emitModalValue('update:selectedCoin', val)
}

const updateAmount = (e: Event) => {
  emitModalValue('update:amount', parseInt((e.target as HTMLInputElement).value))
}

const coinsArray = ['Pay by invoice coming soon']


const buyCredits = async () => {

    await window.keplr.enable("circulus-1");
    const offlineSigner = window.keplr.getOfflineSigner("circulus-1");
    const accounts = await offlineSigner.getAccounts();
    const client = await getSigningTM37EmpowerchainClient({
        rpcEndpoint: "51.159.141.221:26657",
        signer: offlineSigner,
    });
    const tmClient = await Tendermint37Client.connect(
        "51.159.141.221:26657");
    // TODO replace with empowerjs getter when path registry issue is solved
    const cosmWasmClient = await SigningCosmWasmClient.createWithSigner(tmClient,
        offlineSigner, {
          gasPrice: GasPrice.fromString("0.025umpwr"),
        }
    );
    const contract = new contracts.PlasticCreditMarketplace.PlasticCreditMarketplaceClient(cosmWasmClient, accounts[0].address, "empower14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sfg4umu");
    const res = await contract.buyCredits({
        denom: props.denom,
        owner: props.owner,
        numberOfCreditsToBuy: props.amount,
    }, 25000, "", [{
            denom: "umpwr",
            amount: (props.pricePerCredit * 1000000 * props.amount).toString(),
    }]);
}

</script>
<template>
  <div class="bg-darkGray md:grid md:grid-cols-4 flex flex-col gap-1 p-6 rounded-sm">
    <div>
      <p class="text-title18">Available credits</p>
      <p class="text-title38">{{availableCredits}}</p>
    </div>
    <div>
      <p class="text-title18">Price per credit</p>
      <p class="text-title38 font-bold">{{ pricePerCredit }} $MPWR</p>
    </div>
    <div>
      <div class="flex md:ml-[-60px]">
        <p class="text-title18 text-subLabel  text-right hidden md:block mr-3 mt-8">Cost {{pricePerCredit*amount}}</p>
        <div>
          <p class="text-title18">How many you want to buy?</p>
          <input type="number" class="input bg-darkGray mt-1 text-white text-title38 font-bold w-full" :value="amount"
                 @input="updateAmount"/>
        </div>
      </div>
      <p class="text-title18 text-subLabel mt-1 md:hidden">Cost {{pricePerCredit*amount}} $MPWR</p>
    </div>
    <div class="flex flex-row mt-8">
      <button
          class="btn btn-ghost w-full rounded-r-none md:max-w-[80%] max-w-[85%] normal-case bg-greenPrimary text-title24 p-0 font-normal md:ml-4" @click="buyCredits">
        Buy with ${{ selectedCoin }}
      </button>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost rounded-l-none bg-dropdownGreen">
          <img class="w-4" src="../assets/dropdownIconButton.svg"/>
        </label>
        <div tabindex="0" class="dropdown-content menu p-4 shadow bg-dropdownGray rounded-box w-52 !list-none">
          <li disabled class="text-title12 font-semibold my-1 cursor-pointer" v-for="coin in coinsArray" :key="coin"

          >{{coin}}
          </li>
        </div>
      </div>
    </div>
  </div>
</template>