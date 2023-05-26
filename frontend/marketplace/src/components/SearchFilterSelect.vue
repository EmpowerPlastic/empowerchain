<script setup lang="ts">
export interface SearchFilterSelectProps {
  placeholder: string;
  options: {
    label: string;
    value: string;
  }[];
  modelValue: string;
}
defineProps<SearchFilterSelectProps>()

const emitModalValue = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  emitModalValue('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
<template>
  <select
      class="bg-dropdownBlack text-title18 text-white pr-3 bg-none font-normal focus:text-white w-full" @change="updateValue">
    <option disabled selected class="text-white">{{ placeholder}}</option>
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.label }}
      </option>
  </select>
</template>