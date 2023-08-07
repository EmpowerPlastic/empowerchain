<script setup lang="ts">
export interface SuccessModalProps {
  showModal: boolean;
  showError: boolean;
  data: {
    totalBalance: number;
    spendableBalance: number;
    startDate: Date;
    endDate: Date;
  };
}

defineProps<SuccessModalProps>();
const emitWalletModal = defineEmits(["update:showModal"]);

const closeModal = () => {
  emitWalletModal("update:showModal", false);
};

const goToStake = () => {
  window.open("https://ping.pub/empower/staking", "_blank");
};
</script>
<template>
  <input
    type="checkbox"
    id="success-modal"
    class="modal-toggle"
    :checked="showModal"
  />
  <div class="modal bg-modalBackground">
    <div
      class="modal-box text-white bg-modalBackground rounded-lg border-[1.5px] border-borderBlack shadow-md px-7 py-5 max-w-3xl relative font-Inter"
    >
      <label
        class="btn btn-ghost btn-sm btn-circle absolute right-2 top-2"
        @click="closeModal"
      >
        <img class="h-7" src="../assets/closeIcon.svg" />
      </label>
      <div class="p-10">
        <div class="flex justify-center">
          <p class="text-title24 md:text-title38 text-buttonGreen">
            {{ showError ? "Not this time..." : "Congratulations!" }}
          </p>
        </div>
        <div
          class="flex md:flex-row flex-col items-center justify-center gap-5 my-5"
        >
          <p class="text-title17 text-center" v-if="!showError">
            Congratulations, your address was eligible for the EmpowerChain
            airdrop and/or testnet rewards! The tokens are already in your
            wallet, nothing to claim!
            <br /><br />
            You got {{ data?.totalBalance }} MPWR tokens in the airdrop, and you
            have have {{ data?.spendableBalance }} MPWR which is spendable right
            now. The {{ data?.totalBalance }} MPWR from the airdrop will vest
            linearly from {{ new Date(data?.startDate).toLocaleString() }} to
            {{ new Date(data?.endDate).toLocaleDateString() }}
          </p>
          <p class="text-title17 text-center" v-if="showError">
            Sorry, you were not eligible for the airdrop.
          </p>
        </div>

        <button
          @click="goToStake"
          v-if="!showError"
          class="btn btn-ghost w-full bg-modalButton"
        >
          Stake your tokens now
        </button>
      </div>
    </div>
  </div>
</template>
