<script setup lang="ts">
import { ErrorModalType } from "@/types/enums";

export interface ModalProps {
  closeModal: (val: MouseEvent) => void;
  modalType: ErrorModalType;
}
defineProps<ModalProps>();
</script>
<template>
  <div
    id="selectWalletModal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full flex flex-col justify-center items-center"
  >
    <div class="relative w-full items-center h-full max-w-xl md:h-auto">
      <!-- Modal content -->
      <div class="relative w-full bg-white rounded-lg shadow">
        <!-- Modal header -->
        <div class="flex items-start justify-between rounded-t">
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center m-3"
            @click="closeModal"
          >
            X
          </button>
        </div>
        <!-- Modal body -->
        <div class="flex flex-wrap flex-col items-center p-2">
          <img
            src="../../assets/images/emp-astro-4.svg"
            v-show="modalType === ErrorModalType.FILE"
            class="w-32"
          />
          <img
            src="../../assets/images/emp-astro-5.svg"
            v-show="modalType === ErrorModalType.STRING"
            class="w-32"
          />
          <h3 class="font-bold text-black text-title22 my-3 text-center">
            {{
              modalType === ErrorModalType.FILE
                ? "No proof of existence for this data!"
                : "Data verification failed!"
            }}
          </h3>
          <button
            class="bg-lightGreen px-5 py-2 rounded text-white my-3"
            @click="closeModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
