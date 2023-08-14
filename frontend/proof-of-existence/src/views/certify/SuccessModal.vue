<script setup lang="ts">
import { toast } from "vue3-toastify";

export interface ModalProps {
  closeModal: (val: MouseEvent) => void;
  modalType: "CERTIFY" | "VERIFY";
  time: string;
  hash: string;
}
const props = defineProps<ModalProps>();

const copyAddress = async () => {
  await navigator.clipboard.writeText(props.hash);
  toast.success("Address copied to clipboard");
};

const copyLink = () => {
  const url = new URL(window.location.href);
  url.searchParams.delete("fileName");
  url.searchParams.delete("time");

  url.pathname = "/verify/success";

  navigator.clipboard.writeText(url.toString());
  toast.info("Link copied to clipboard");
};
</script>
<template>
  <div
    id="selectWalletModal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed bg-modalBackground top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full flex flex-col justify-center items-center"
  >
    <div
      class="relative mt-7 w-full items-center h-full max-w-lg md:h-auto relative"
    >
      <!-- Modal content -->
      <div class="relative w-full bg-bgPrimary rounded-lg shadow">
        <!-- Modal header -->

        <!-- Modal body -->
        <div class="flex flex-wrap md:flex-row justify-around">
          <div
            class="modal-top flex flex-col justify-center items-center w-full p-5 rounded-t-lg"
          >
            <button type="button" class="bg-transparent" @click="closeModal">
              <img
                src="../../assets/images/close-icon.svg"
                class="h-6 cursor-pointer absolute top-1 right-1"
              />
            </button>
            <img
              src="../../assets/images/modal-top-design.svg"
              class="h-[170px] mb-[-55px] overflow-hidden"
            />
          </div>
          <div
            class="flex flex-col h-[140px] w-[140px] mt-[-70px] rounded-[70px] bg-transparent border-[2px] border-bgPrimary items-center justify-center"
          >
            <div
              class="flex flex-col h-[120px] w-[120px] bg-bgPrimary round-shadow rounded-[60px] overflow-hidden items-center justify-center"
            >
              <img
                v-show="props.modalType === 'CERTIFY'"
                src="../../assets/images/modal-top-icon.svg"
                class="w-full mt-[-40px]"
              />
              <img
                v-show="props.modalType === 'VERIFY'"
                class="w-10"
                src="../../assets/images/certificate.svg"
              />
            </div>
          </div>
        </div>
        <div class="p-5 flex flex-col items-center">
          <h5 class="text-title28 text-center font-bold text-textPrimary">
            Congratulations!
          </h5>
          <p class="text-title14 text-textPrimary text-center">
            This document’s digest was successfully embedded in the Bitcoin
            blockchain. It is now permanently certified and proven to exist
            since the transaction was confirmed.
          </p>
          <p class="text-textPrimary text-title14 font-bold mt-7">
            Received Time
          </p>
          <p class="text-textPrimary text-title18 mb-3 break-all">
            {{ props.time }}
          </p>
          <p class="text-textPrimary text-title14 font-bold mt-3 mb-3">
            Transaction Hash
          </p>
          <div
            class="flex mb-3 bg-hashBackground justify-center rounded-lg p-3 w-full"
          >
            <p
              class="text-textPrimary text-title18 text-ellipsis w-[70%] overflow-hidden whitespace-nowrap"
            >
              {{ props.hash }}
            </p>
            <img
              @click="copyAddress"
              src="../../assets/images/copy-icon-2.svg"
              class="w-5 ml-3 cursor-pointer"
            />
          </div>
          <button
            v-if="props.modalType === 'CERTIFY'"
            @click="copyLink"
            class="bg-bgSecondary mt-3 content-center p-2 px-7 rounded-sm text-textPrimary"
          >
            Copy verification link
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
