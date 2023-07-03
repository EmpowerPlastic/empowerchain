<script setup lang="ts">
import { toBech32, fromBech32 } from "@cosmjs/encoding";
import { onMounted, ref, watch } from "vue";
import { cosmos, empowerchain } from "@empower-plastic/empowerjs";
import SuccessModal from "@/components/ResultModal.vue";
import { RPC_ENDPOINT } from "@/config/config";
import { toast } from "vue3-toastify";
import { store } from "@/store/store";
import type { QueryAccountResponse } from "@empower-plastic/empowerjs/types/codegen/cosmos/auth/v1beta1/query";

const address = ref();
const showModal = ref(false);
const showModalError = ref(false);
const data = ref();
const loading = ref(false);

const toEmpowerAddress = () => {
  console.log("Address", address.value);
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
    console.log("DIS HAPPENING", newValue);
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

    let queryAccount: QueryAccountResponse;
    try {
      queryAccount = await rpcQueryClient.cosmos.auth.v1beta1.account({
        address: empowerAddress,
      });
    } catch (e: any) {
      loading.value = false;
      if (e.message && e.message.includes("key not found")) {
        showModal.value = true;
        showModalError.value = true;
      } else {
        toast.error(`${e}`);
      }
      return;
    }

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

    if (
      queryAccount.account?.typeUrl ===
      "/cosmos.vesting.v1beta1.ContinuousVestingAccount"
    ) {
      console.log("is vesting account");
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
      showModalError.value = false;
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
        placeholder="Enter your cosmos-based wallet address (or connect your wallet)"
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
          <p class="content-title">What is this Airdrop thing?</p>
          <p class="content-text">
            An airdrop is a distribution of tokens to a wallet addresses that
            meet some set of criteria. In our case, we’re airdropping to stakers
            on certain blockchains which Empower is aligned and/or partnering
            with. For full details, see the Eligibility Criteria section below.
            <br />
            <br />
            All tokens airdropped will be locked until 7th of July 2023 and then
            vest linearly over 12 months (meaning you’ll get 1/12th of after the
            first month of vesting, 2/12th after the second month, etc).
          </p>
        </div>
        <div class="image-container">
          <img class="image" src="../assets/image1.png" />
        </div>
      </div>

      <div class="flex flex-row mt-20">
        <div class="image-container">
          <img class="image" src="../assets/image3.png" />
        </div>
        <div class="text-left ml-10">
          <p class="content-title">EmpowerChain and MPWR</p>
          <p class="content-text">
            EmpowerChain is a blockchain network designed to support the
            circular economy and promote equal opportunities for all
            stakeholders. Empower has been working on this problem for more than
            5 years and already have users on our SaaS platform from more than
            45 countries.
            <br />
            <br />
            The MPWR token is the native utility network token for EmpowerChain
            and is needed to secure the network, participate in governance and
            pay for fees on different dApps built on it. For a deeper dive into
            the tokenomics, see
            <a
              style="text-decoration: underline"
              href="https://docs.empowerchain.io/tokenomics/overview"
              target="_blank"
              >Tokenomics Overview</a
            >
            in our docs.
          </p>
        </div>
      </div>

      <div class="flex flex-row mt-20">
        <div class="text-left mr-10">
          <p class="content-title">Eligibility Criteria</p>
          <p class="content-text">
            At the genesis of EmpowerChain, 7,250,000 MPWR tokens have been
            distributed to 122,386 recipients. More airdrops will come at a
            later time, with main bonuses coming to those who keep and stake
            their MPWR.
            <br />
            <br />
            The following chains have gotten airdropped: <br />
            &#x2022; Stargaze (cap at 15000 STARS and minimum 251 STARS)<br />
            &#x2022; Osmosis (cap at 300 OSMO and minimum 11 OSMO)<br />
            &#x2022; Regen (cap at 1000 REGEN and minimum 10 REGEN)<br />
            &#x2022; Cheqd (cap at 5000 CHEQ, minimum 15 CHEQ)<br />
            &#x2022; Ixo (cap at 2500 IXO, minimum 100 IXO)<br />
            &#x2022; Jackal (cap 1000 JKL, minimum 11 JKL)<br />
            <br /><br />
            To read more about the whole process, see the
            <a
              style="text-decoration: underline"
              href="https://medium.com/empowerplastic/empowerchain-launch-airdrop-and-testnet-rewards-1c8a595cd26f"
              target="_blank"
              >EmpowerChain launch blogpost</a
            >
          </p>
        </div>
        <div class="image-container">
          <img class="image" src="../assets/eligible2.png" />
        </div>
      </div>
    </div>
  </div>
</template>
