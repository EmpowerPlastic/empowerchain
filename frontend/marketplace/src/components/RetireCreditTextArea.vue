<script setup lang="ts">
export interface RetireCreditsTextAreaProps {
  modelValue: string;
  label: string;
  subText: string;
  id: string;
}
defineProps<RetireCreditsTextAreaProps>();

const emitModalValue = defineEmits(["update:modelValue"]);

const updateValue = (e: Event) => {
  emitModalValue("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
<template>
  <div class="form-control my-2">
    <label class="label" :for="id">
      <span class="label-text text-title18 text-white">{{ label }}</span>
    </label>
    <p class="text-title14 text-textGray">{{ subText }}</p>
    <textarea
      :id="id"
      class="textarea w-full bg-mediumGray rounded-sm my-1"
      rows="3"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>
