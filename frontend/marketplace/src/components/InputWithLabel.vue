<script setup lang="ts">
export interface InputWithLabelProps {
  modelValue: string;
  label: string;
  placeholder: string;
  id: string;
  dashed?: boolean;
  denom?: string;
  disabled?: boolean;
  longWidth?: boolean;
  type?: string;
}
defineProps<InputWithLabelProps>();

const emitModalValue = defineEmits(["update:modelValue"]);

const updateValue = (e: Event) => {
  emitModalValue("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
<template>
  <div class="form-control">
    <label class="label" :for="id">
      <span class="input-label">{{ label }}</span>
    </label>
    <label
      :class="`input-group rounded-sm w-fit ${
        dashed
          ? 'border-dashed border-[1px] border-dashedBorderBlack'
          : `${longWidth && 'w-full'}`
      }`"
    >
      <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        class="input input-text disabled:bg-lightBlack disabled:border-none disabled:text-white"
        :class="longWidth && '!w-[100%]'"
        :value="modelValue"
        @input="updateValue"
        :disabled="disabled"
      />
      <span class="input-sub-text" :class="disabled && '!bg-lightBlack'">{{
        denom
      }}</span>
    </label>
  </div>
</template>
