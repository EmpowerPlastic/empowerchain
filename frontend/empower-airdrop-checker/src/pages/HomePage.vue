<script setup lang="ts">
import { toBech32, fromBech32 } from "@cosmjs/encoding";
import { onMounted, ref, watch } from "vue";
import { cosmos, empowerchain } from "@empower-plastic/empowerjs";
import SuccessModal from "@/components/SuccessModal.vue";
import { RPC_ENDPOINT } from "@/config/config";
import { toast } from "vue3-toastify";
import { store } from "@/store/store";

const address = ref();
const showModal = ref(false);
const showModalError = ref(false);
const data = ref();
const loading = ref(false);

const toEmpowerAddress = () => {
  const addr = address.value.trim();
  try {
    const { data } = fromBech32(addr);
    const empowerAddress = toBech32("empower", data);
    // wallet address length 20, contract address length 32
    if (![20, 32].includes(data.length)) {
      throw new Error("Invalid address: " + addr + ", got: " + empowerAddress);
    }
    return empowerAddress;
  } catch (e) {
    throw new Error("Invalid address: " + addr + "," + e);
  }
};
watch(
  () => store.address,
  (newValue: string) => {
    address.value = newValue;
  }
);

const checkAirdrop = async () => {
  try {
    loading.value = true;
    const empowerAddress = toEmpowerAddress();
    const { createRPCQueryClient } = empowerchain.ClientFactory;
    const rpcQueryClient = await createRPCQueryClient({
      rpcEndpoint: RPC_ENDPOINT,
    });
    let queryBalanceResponse = await rpcQueryClient.cosmos.bank.v1beta1.balance(
      {
        address: empowerAddress,
        denom: "umpwr",
      }
    );
    let querySpendableBalance =
      await rpcQueryClient.cosmos.bank.v1beta1.spendableBalanceByDenom({
        address: empowerAddress,
        denom: "umpwr",
      });

    let queryAccount = await rpcQueryClient.cosmos.auth.v1beta1.account({
      address: empowerAddress,
    });

    if (
      queryAccount.account?.typeUrl ===
      "/cosmos.vesting.v1beta1.ContinuousVestingAccount"
    ) {
      const vestingAccount =
        cosmos.vesting.v1beta1.ContinuousVestingAccount.decode(
          queryAccount.account.value
        );

      data.value = {
        totalBalance: queryBalanceResponse.balance?.amount / 1000000,
        spendableBalance: querySpendableBalance.balance?.amount / 1000000,
        startDate: new Date(Number(vestingAccount.startTime) * 1000),
        endDate: new Date(
          Number(vestingAccount.baseVestingAccount?.endTime) * 1000
        ),
      };
      loading.value = false;
      showModal.value = true;
    } else {
      showModal.value = true;
      showModalError.value = true;
    }
  } catch (e) {
    toast.error(`${e}`);
    console.error(e);
    loading.value = false;
  }
};
</script>
<template>
  <SuccessModal
    v-model:show-modal="showModal"
    :data="data"
    :show-error="showModalError"
  />
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
        class="btn btn-ghost bg-buttonGreen ml-5 normal-case px-7 disabled:bg-modalBackground text-title24 disabled:text-white"
        @click="checkAirdrop"
        :disabled="loading || !address"
      >
        {{ loading ? "Processing" : "Check Eligibility" }}
      </button>
    </div>
    <!--    Content-->
    <div class="flex flex-col mt-14 px-[120px] break-words mt-20">
      <div class="flex flex-row">
        <div class="text-left mr-10">
          <p class="content-title">What is an Airdrop?</p>
          <p class="content-text">
            An Airdrop is a free distribution of tokens across a number of
            wallet addresses that meet a certain criteria, or show past signs of
            activity on chain or other chains.
          </p>
        </div>
        <div class="image-container">
          <img class="image" src="../assets/image3.png" />
        </div>
      </div>

      <div class="flex flex-row mt-20">
        <div class="image-container">
          <img class="image" src="../assets/image6.png" />
        </div>
        <div class="text-right ml-10">
          <p class="content-title">Why we’re doing it</p>
          <p class="content-text">
            The Genesis Airdrop is a way for the Archway Foundation to give back
            to active Cosmonauts and at the same time decentralize the ARCH
            token supply, making sure we’re what you want us to be, from day
            one.
          </p>
        </div>
      </div>

      <div class="flex flex-row mt-20">
        <div class="text-left mr-10">
          <p class="content-title">Eligibility Criteria</p>
          <p class="content-text">
            To participate in this first airdrop, your address must meet the
            following criteria:
            <br />
            &#x2022; You must not be a U.S. person or from a prohibited
            jurisdiction.<br />
            &#x2022; At 1/16/2023 18:03 UTC, you had either <br />
            &emsp; &#x2022; More than 25 ATOM delegated (to any number of
            validators)<br />
            &emsp; &#x2022; Bridged more than €5k worth of assets in a single
            transaction, through &emsp;&nbsp;&nbsp; Axelar <br />
            &emsp; &#x2022; Deployed a contract on Terra (Classic) <br />
            &emsp; &#x2022; Used Constantine-2, or Torii testnets <br />By
            providing an address that meets at least one of the practical
            requirements you will be able to participate in the airdrop. But
            your total possible allocation will change depending on how many of
            the practical requirements you meet. More details can be found here.
          </p>
        </div>
        <div class="image-container">
          <img class="image" src="../assets/image1.png" />
        </div>
      </div>
    </div>
  </div>
</template>
