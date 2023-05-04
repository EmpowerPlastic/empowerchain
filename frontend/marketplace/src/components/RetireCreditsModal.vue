<script setup lang="ts">
export interface ModalProps {
  showModal: boolean
}

defineProps<ModalProps>();
</script>
<template>
  <input type="checkbox" id="retire-credits-modal" class="modal-toggle" :checked="showModal"/>
  <div class="modal bg-white">
    <div class="modal-box text-white bg-black rounded-sm border-[1.5px] border-borderBlack shadow-md px-7 py-5 max-w-4xl relative">
      <label for="retire-credits-modal" class="btn btn-ghost btn-sm btn-circle absolute right-2 top-2">
        <img class="h-7" src="../assets/closeIcon.svg"/>
      </label>

      <div class="flex justify-between">
        <p class="text-title38">
          Retire credits
        </p>
      </div>

      <div class="flex justify-between my-5">
        <div class="form-control">
          <label class="label">
            <span class="label-text text-white text-title18">How many Plastic credits do you want to retire?</span>
          </label>
          <label class="input-group rounded-sm">
            <input type="text" placeholder="0.01" class="input text-white text-title24 bg-mediumGray" />
            <span class="bg-mediumGray text-title16 text-dropDownText">$MPWR</span>
          </label>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text text-white text-title18">Available credits in your account</span>
          </label>
          <label class="input-group rounded-sm">
            <input type="text" placeholder="0.01" class="input text-white text-title24 bg-mediumGray" />
            <span class="bg-mediumGray text-title16 text-dropDownText">$MPWR</span>
          </label>
        </div>
      </div>

     <div>
       <p class="text-title18">Provide a name of the entity that should be visible as a retriever</p>
       <p class="text-title14 text-textGray">(will be visible on generated Plastic Credit certificate)</p>
       <textarea class="textarea w-full bg-mediumGray rounded-sm" rows="4" ></textarea>
     </div>

      <div>
        <p class="text-title18">Provide a name of the entity that should be visible as a retriever</p>
        <p class="text-title14 text-textGray">(will be visible on generated Plastic Credit certificate)</p>
        <textarea class="textarea w-full bg-mediumGray  rounded-sm" rows="4" ></textarea>
      </div>

    </div>
  </div>
</template>