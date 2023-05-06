<script setup lang="ts">
export interface ModalProps {
  showModal: boolean
}

defineProps<ModalProps>();
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
            <span class="label-text text-white text-title18">How many Plastic credits do you want to retire?</span>
          </label>
          <label class="input-group rounded-sm w-fit">
            <input type="text" placeholder="0.01" class="input text-white text-title24 bg-mediumGray w-[180px]" />
            <span class="bg-mediumGray text-title16 text-dropDownText">$MPWR</span>
          </label>
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text text-white text-title18">Available credits in your account</span>
          </label>
          <label class="input-group rounded-sm w-fit border-dashed border-[1px] border-dashedBorderBlack">
            <input type="text" placeholder="0.01" class="input text-white text-title24 bg-mediumGray w-[180px]" />
            <span class="bg-mediumGray text-title16 text-dropDownText">$MPWR</span>
          </label>
        </div>
      </div>

      <div class="my-4">
        <p class="text-title18">Provide a name of the entity that should be visible as a retriever</p>
        <p class="text-title14 text-textGray">(will be visible on generated Plastic Credit certificate)</p>
        <textarea class="textarea w-full bg-mediumGray rounded-sm my-1" rows="3"></textarea>
      </div>

      <div class="my-4">
        <p class="text-title18">Provide additional data about the retriever</p>
        <p class="text-title14 text-textGray">(will be visible on generated Plastic Credit certificate)</p>
        <textarea class="textarea w-full bg-mediumGray  rounded-sm  my-1" rows="3"></textarea>
      </div>

      <div class="flex flex-col md:flex-row justify-between modal-action">
        <label for="retire-credits-modal"
               class="btn rounded-sm  font-bold text-greenPrimary text-title14 bg-lightGray normal-case border-none px-10 mb-4 md:m-0">Cancel!</label>
        <button class="btn rounded-sm  font-bold text-title14 bg-greenPrimary normal-case border-none px-10 !ml-0">
          Retire credits
        </button>
      </div>

    </div>
  </div>
</template>