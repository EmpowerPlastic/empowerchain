<script setup lang="ts">
export interface RetireCreditsTextAreaProps {
  modelValue: string
  label: string
  subText: string
}
defineProps<RetireCreditsTextAreaProps>()

const emitModalValue = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  emitModalValue('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
<template>
  <div class="my-2">
    <p class="text-title18">{{ label }}</p>
    <p class="text-title14 text-textGray">{{ subText }}</p>
    <textarea
      class="textarea w-full bg-mediumGray rounded-sm my-1"
      rows="3"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>
