<script setup lang="ts">
export interface CreditSearchBarProps {
  modelValue: string
  placeholder:string
}
defineProps<CreditSearchBarProps>()

const emitModalValue = defineEmits(['update:modelValue'])

const updateModalValue = (e: Event) => {
  emitModalValue('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <!--  Desktop UI-->
  <div class="hidden md:flex bg-darkGray p-3 rounded-sm my-9">
    <input
      type="text"
      class="w-full rounded-sm p-3 active:border-none bg-darkGray"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateModalValue"
    />
    <button class="btn btn-square bg-greenPrimary ml-3">
      <img class="h-5" src="../assets/searchIconWhite.svg" />
    </button>
  </div>
  <!-- Mobile UI-->
  <div class="md:hidden input-group bg-white text-black rounded-lg my-5">
    <img class="mx-3" src="../assets/searchIcon.svg" />
    <input
      type="text"
      class="w-full p-2 !rounded-lg active:border-none"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateModalValue"
    />
  </div>
</template>
