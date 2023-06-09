<script setup lang="ts">
import {ref} from 'vue'
import InputWithLabel from '@/components/InputWithLabel.vue'

export interface ModalProps {
  showModal: boolean
  denom:string
  availableCredits:number
}

defineProps<ModalProps>()
const emitShowModal = defineEmits(['update:showModal'])

const creditsAmount = ref('')
const recAddress = ref('')

const closeModal = () => {
  emitShowModal("update:showModal", false)
}

const handleRetireCredits = () => {
  console.log(creditsAmount.value,recAddress.value)
}
</script>
<template>
  <input type="checkbox" id="retire-credits-modal" class="modal-toggle" :checked="showModal"/>
  <div class="modal bg-modalBackground">
    <div
        class="modal-box text-white bg-black rounded-sm border-[1.5px] border-borderBlack shadow-md px-7 py-5 max-w-xl relative font-Inter"
    >
      <label
          class="btn btn-ghost btn-sm btn-circle absolute right-2 top-2"
          @click="closeModal"
      >
        <img class="h-7" src="../assets/closeIcon.svg"/>
      </label>

      <div class="flex justify-between">
        <p class="text-title38">Transfer credits</p>
      </div>

      <div class="grid md:grid-rows-2 gap-5 mb-6 mt-2">
        <InputWithLabel
            v-model="creditsAmount"
            label="Amount of credits"
            placeholder="10"
            id="input-1"
            :denom="denom"
        />
        <InputWithLabel
            v-model="recAddress"
            label="Receiver address"
            placeholder="empower"
            id="input-2"
            long-width
        />
      </div>
      <div class="flex flex-col md:flex-row justify-between modal-action">
        <label
            class="btn modal-button text-greenPrimary bg-lightGray mb-4 md:m-0"
            @click="closeModal"
        >Cancel!</label
        >
        <button class="btn modal-button !ml-0 bg-greenPrimary" @click="handleRetireCredits">Transfer credits</button>
      </div>
    </div>
  </div>
</template>
