<script setup lang="ts">
export interface ModalProps {
  closeModal: (val: MouseEvent) => void;
}
defineProps<ModalProps>();
</script>
<template>
  <div
    id="aboutModal"
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
            About Proof of Existence Verification
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
            Proof of Existence Verification is the process through which you can
            confirm the existence and integrity of a piece of data or document
            at a specific point in time using the Proof of Existence protocol.
            This involves comparing the cryptographic hash of the data (which
            you add in our verify flow) in question with the hash stored on the
            blockchain. If the hashes match, it confirms that the data has
            remained unchanged since it was first recorded on the blockchain.
            This verification process provides a reliable and secure way to
            assert data authenticity and integrity.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
