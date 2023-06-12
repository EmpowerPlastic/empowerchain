<script setup lang="ts">
import {ref} from 'vue'
import RetireCreditTextArea from '@/components/RetireCreditTextArea.vue'
import InputWithLabel from '@/components/InputWithLabel.vue'
import {empowerchain} from "@empower-plastic/empowerjs";
import {toast} from "vue3-toastify";

const {retireCredits, transferCredits} = empowerchain.plasticcredit.MessageComposer.withTypeUrl;

export interface ModalProps {
  showModal: boolean
  denom: string
  availableCredits: string
  owner: string
}

const props = defineProps<ModalProps>()
const emitShowModal = defineEmits(['update:showModal'])

const name = ref()
const additionalInfo = ref()
const retireCreditsAmount = ref()

const closeModal = () => {
  emitShowModal("update:showModal", false)
}

const handleRetireCredits = () => {
  try {
    const results = retireCredits({
      owner: props.owner,
      denom: props.denom,
      amount: retireCreditsAmount.value as string,
      retiringEntityName: name.value,
      retiringEntityAdditionalData: additionalInfo.value,
    })
    console.log(results, 'res')
    if (results) {
      toast.success("Retire credits successfully")
    }
  } catch (error) {
    toast.success("Retire credits failed")
    console.log(error)
  }
  console.log(name.value, additionalInfo.value, retireCreditsAmount.value)
}
</script>
<template>
  <input type="checkbox" id="retire-credits-modal" class="modal-toggle" :checked="showModal"/>
  <div class="modal bg-modalBackground">
    <div
        class="modal-box text-white bg-black rounded-sm border-[1.5px] border-borderBlack shadow-md px-7 py-5 max-w-5xl relative font-Inter"
    >
      <label
          class="btn btn-ghost btn-sm btn-circle absolute right-2 top-2"
          @click="closeModal"
      >
        <img class="h-7" src="../assets/closeIcon.svg"/>
      </label>

      <div class="flex justify-between">
        <p class="text-title38">Retire credits</p>
      </div>

      <div class="grid md:grid-cols-2 gap-5 mb-6 mt-2">
        <InputWithLabel
            v-model="retireCreditsAmount"
            label="How many Plastic credits do you want to retire?"
            placeholder="0.01"
            id="input-1"
            :denom="denom"
            type="number"
        />
        <InputWithLabel
            :model-value="availableCredits"
            label="Available credits in your account"
            placeholder="0.01"
            id="input-2"
            dashed
            :disabled="true"
            :denom="denom"
            type="number"
        />
      </div>

      <RetireCreditTextArea
          label="Provide a name of the entity that should be visible as a retriever"
          sub-text="(will be visible on generated Plastic Credit certificate)"
          id="message-1"
          v-model="name"
      />
      <RetireCreditTextArea
          label="Provide additional data about the retriever"
          sub-text="(will be visible on generated Plastic Credit certificate)"
          id="message-2"
          v-model="additionalInfo"
      />

      <div class="flex flex-col md:flex-row justify-between modal-action">
        <label
            class="btn modal-button text-greenPrimary bg-lightGray mb-4 md:m-0"
            @click="closeModal"
        >Cancel!</label
        >
        <button :disabled="!(retireCreditsAmount && name && additionalInfo)"
                class="btn modal-button !ml-0 bg-greenPrimary disabled:text-white" @click="handleRetireCredits">Retire credits
        </button>
      </div>
    </div>
  </div>
</template>
