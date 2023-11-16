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
    class="fixed bg-modalBackground top-0 left-0 right-0 z-50 w-full p-5 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] md:h-full flex flex-col justify-center items-center"
  >
    <div class="relative w-full items-center h-full max-w-xl md:h-auto">
      <!-- Modal content -->
      <div class="relative w-full bg-bgPrimary rounded-lg shadow">
        <!-- Modal header -->
        <div class="flex items-start justify-between rounded-t">
          <button type="button" class="bg-transparent" @click="closeModal">
            <img
              src="../../assets/images/close-icon.svg"
              class="h-6 cursor-pointer absolute top-1 right-1"
            />
          </button>
        </div>
        <!-- Modal body -->
        <div class="flex flex-wrap flex-col items-center p-2 mt-7">
          <img
            src="../../assets/images/no-proof-1.svg"
            v-show="modalType === ErrorModalType.FILE"
            class="w-24"
          />
          <img
            src="../../assets/images/no-proof-2.svg"
            v-show="modalType === ErrorModalType.STRING"
            class="w-32"
          />
          <h3 class="font-bold text-textPrimary text-title28 my-7 text-center">
            {{
              modalType === ErrorModalType.FILE
                ? "No proof of existence for this data!"
                : "Data verification failed!"
            }}
          </h3>
          <button
            class="bg-bgSecondary w-[200px] py-1 rounded-sm text-textPrimary text-title22 mb-7"
            @click="closeModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
