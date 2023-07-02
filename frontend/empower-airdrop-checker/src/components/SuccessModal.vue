<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
export interface SuccessModalProps {
  showModal: boolean;
}

defineProps<SuccessModalProps>();
const emitWalletModal = defineEmits(["update:showModal"]);

const closeModal = () => {
  emitWalletModal("update:showModal", false);
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
          <p class="text-title38 text-buttonGreen">Congratulations!</p>
        </div>
        <div class="flex md:flex-row flex-col items-center gap-5 my-5">
          <p class="text-title17 text-center">
            Congratulations, your address meets all the requirements to be able
            to participate in the airdrop. The actual value you’ll receive
            depends on the amount of challenges you successfully complete.
          </p>
        </div>
        <button class="btn btn-ghost w-full bg-modalButton">
          Action Button
        </button>
      </div>
    </div>
  </div>
</template>
