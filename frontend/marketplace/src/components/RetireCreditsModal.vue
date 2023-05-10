<script setup lang="ts">
import {ref} from 'vue'
import RetireCreditTextArea from "@/components/RetireCreditTextArea.vue";

export interface ModalProps {
  showModal: boolean
}

defineProps<ModalProps>();
const messageOne = ref('')
const messageTwo = ref('')
</script>
<template>
  <input type="checkbox" id="retire-credits-modal" class="modal-toggle" :checked="showModal"/>
  <div class="modal bg-modalBackground">
    <div
        class="modal-box text-white bg-black rounded-sm border-[1.5px] border-borderBlack shadow-md px-7 py-5 max-w-5xl relative font-Inter">
      <label for="retire-credits-modal" class="btn btn-ghost btn-sm btn-circle absolute right-2 top-2">
        <img class="h-7" src="../assets/closeIcon.svg"/>
      </label>

      <div class="flex justify-between">
        <p class="text-title38">
          Retire credits
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-5 mb-6 mt-2">
        <div class="form-control">
          <label class="label">
            <span class="input-label">How many Plastic credits do you want to retire?</span>
          </label>
          <label class="input-group input-box">
            <input type="text" placeholder="0.01" class="input-text"/>
            <span class="input-sub-text">$MPWR</span>
          </label>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="input-label">Available credits in your account</span>
          </label>
          <label class="input-group input-box border-dashed border-[1px] border-dashedBorderBlack">
            <input type="text" placeholder="0.01" class="input-text"/>
            <span class="input-sub-text">$MPWR</span>
          </label>
        </div>
      </div>

      <RetireCreditTextArea label="Provide a name of the entity that should be visible as a retriever"
                            sub-text="(will be visible on generated Plastic Credit certificate)"
                            v-model="messageOne"/>
      <RetireCreditTextArea label="Provide additional data about the retriever"
                            sub-text="(will be visible on generated Plastic Credit certificate)"
                            v-model="messageTwo"/>

      <div class="flex flex-col md:flex-row justify-between modal-action">
        <label for="retire-credits-modal"
               class="btn modal-button text-greenPrimary bg-lightGray mb-4 md:m-0">Cancel!</label>
        <button class="btn modal-button !ml-0 bg-greenPrimary">
          Retire credits
        </button>
      </div>

    </div>
  </div>
</template>
<style scoped>
.input-label{
  @apply label-text text-white text-title18
}
.input-text{
  @apply input text-white text-title24 bg-mediumGray w-[180px]
}
.input-box{
 @apply rounded-sm w-fit
}
.input-sub-text{
 @apply bg-mediumGray text-title16 text-dropDownText
}
.modal-button{
  @apply rounded-sm  font-bold text-title14 normal-case border-none px-10
}
</style>