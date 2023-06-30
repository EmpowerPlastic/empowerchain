<script setup lang="ts">
import { toBech32, fromBech32 } from "cosmwasm";
import { ref } from "vue";

const address = ref();
const toStars = (addr: string) => {
  try {
    // const { prefix, data } = fromBech32(addr);
    // const starsAddr = toBech32("stars", data);
    // // wallet address length 20, contract address length 32
    // if (![20, 32].includes(data.length)) {
    //   throw new Error("Invalid address: " + addr + " " + starsAddr);
    // }
    // addr = starsAddr;
    // return addr;
  } catch (e) {
    throw new Error("Invalid address: " + addr + "," + e);
  }
};
</script>
<template>
  <div class="p-5 md:px-[10%] min-h-[50vh]">
    <!--    Header-->
    <div class="flex flex-row">
      <div class="flex flex-col mt-10">
        <div class="flex flex-row items-end">
          <h1 class="text-title38 mr-2">EMPOWER CHAIN</h1>
          <h1 class="text-titleText text-title86 leading-[133px]">AIRDROP</h1>
        </div>
        <div>
          <h1 class="text-white text-title86 leading-[90px]">CHECKER</h1>
        </div>
      </div>
      <div>
        <img class="w-80 ml-10" src="../assets/coinImage.svg" />
      </div>
    </div>
    <!--    Check Eligibility-->
    <div class="flex flex-row p-[30px] bg-inputContainer rounded-lg mt-10">
      <input
        v-model="address"
        class="input bg-inputBox w-full rounded-sm border-[2px] border-inputBorder text-white text-title18"
      />
      <button
        class="btn btn-ghost bg-buttonGreen ml-5 normal-case px-7"
        @click=""
      >
        Check Eligibility
      </button>
    </div>
    <!--    Content-->
    <div class="flex flex-col mt-14 px-[120px] break-words mt-20">
      <div class="flex flex-row">
        <div class="text-left mr-10">
          <p class="text-title24 text-contentTitle">What is an Airdrop?</p>
          <p class="text-title17 text-contentTitle capitalize">
            An Airdrop is a free distribution of tokens across a number of
            wallet addresses that meet a certain criteria, or show past signs of
            activity on chain or other chains.
          </p>
        </div>
        <div class="min-w-[350px] min-h-[200px]">
          <img
            class="w-[350px] h-[200px]"
            src="https://dummyimage.com/16:9x1080/"
          />
        </div>
      </div>

      <div class="flex flex-row mt-20">
        <div class="min-w-[350px] min-h-[200px]">
          <img
            class="w-[350px] h-[200px]"
            src="https://dummyimage.com/16:9x1080/"
          />
        </div>
        <div class="text-right ml-10">
          <p class="text-title24 text-contentTitle">Why we’re doing it</p>
          <p class="text-title17 text-contentTitle capitalize">
            The Genesis Airdrop is a way for the Archway Foundation to give back
            to active Cosmonauts and at the same time decentralize the ARCH
            token supply, making sure we’re what you want us to be, from day
            one.
          </p>
        </div>
      </div>

      <div class="flex flex-row mt-20">
        <div class="text-left mr-10">
          <p class="text-title24 text-contentTitle">Eligibility Criteria</p>
          <p class="text-title17 text-contentTitle capitalize">
            To participate in this first airdrop, your address must meet the
            following criteria:
            <br />
            &#x2022; You must not be a U.S. person or from a prohibited
            jurisdiction. At 1/16/2023 18:03 UTC, you had either More than 25
            ATOM delegated (to any number of validators) Bridged more than €5k
            worth of assets in a single transaction, through Axelar Deployed a
            contract on Terra (Classic) Used Constantine-2, or Torii testnets By
            providing an address that meets at least one of the practical
            requirements you will be able to participate in the airdrop. But
            your total possible allocation will change depending on how many of
            the practical requirements you meet. More details can be found here.
          </p>
        </div>
        <div class="min-w-[350px] min-h-[200px]">
          <img
            class="w-[350px] h-[200px]"
            src="https://dummyimage.com/16:9x1080/"
          />
        </div>
      </div>
    </div>
  </div>
</template>
