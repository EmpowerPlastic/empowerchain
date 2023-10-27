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
            About Proof of Existence
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
            Proof of Existence is a blockchain-based protocol that allows you to
            prove the existence of a piece of data or a document at a specific
            point in time. By leveraging the immutability of blockchain and the
            process of cryptographic hashing, Proof of Existence ensures that
            once data is recorded, it cannot be altered, providing an
            irrefutable timestamped record of the data's existence. It serves as
            a powerful tool for data verification, intellectual property rights,
            integrity checks, and more in the digital world.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
