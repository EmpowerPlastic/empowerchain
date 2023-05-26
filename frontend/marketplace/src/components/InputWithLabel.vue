<script setup lang="ts">
export interface InputWithLabelProps {
  modelValue: string
  label: string
  placeholder: string
  id: string
  dashed?: boolean
}
defineProps<InputWithLabelProps>()

const emitModalValue = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  emitModalValue('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
<template>
  <div class="form-control">
    <label class="label" :for="id">
      <span class="input-label">{{ label }}</span>
    </label>
    <label
      :class="`input-group rounded-sm w-fit ${
        dashed ? 'border-dashed border-[1px] border-dashedBorderBlack' : ''
      }`"
    >
      <input
        :id="id"
        type="text"
        :placeholder="placeholder"
        class="input input-text"
        :value="modelValue"
        @input="updateValue"
      />
      <span class="input-sub-text">$MPWR</span>
    </label>
  </div>
</template>
