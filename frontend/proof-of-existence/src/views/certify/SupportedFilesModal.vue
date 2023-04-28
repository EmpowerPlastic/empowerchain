<script setup lang="ts">
export interface ModalProps {
  closeModal: (val: MouseEvent) => void;
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
        <div class="flex items-start justify-between p-4 rounded-t">
          <h3 class="font-bold text-black text-title22">
            Supported file formats
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            @click="closeModal"
          >
            X
          </button>
        </div>
        <!-- Modal body -->
        <div class="flex flex-wrap sm:flex-row justify-around p-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
