<script setup lang="ts">
import VueMultiselect from 'vue-multiselect'
import {ref, watch} from "vue";

export interface SearchFilterSelectProps {
  placeholder: string;
  options: string[];
  modelValue: string[];
}

const props = defineProps<SearchFilterSelectProps>()

const emitModalValue = defineEmits(['update:modelValue'])
const selected = ref([])

const updateValue = (val: string[]) => {
  emitModalValue('update:modelValue', val)
}

watch(props, () => {
  if (props.modelValue.length>0) {
    selected.value = props.modelValue as any
  }
});
</script>
<template>
  <VueMultiselect
      class="multiselect"
      @update:model-value="updateValue"
      v-model="selected"
      :options="options || []"
      :multiple="true"
      :close-on-select="false"
      :placeholder="placeholder"
      :select-label="''"

  />
</template>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style>
.multiselect__tags {
  @apply bg-dropdownBlack border-none
}

.multiselect__select {
  @apply md:bg-dropdownBlack
}

.multiselect__placeholder {
  @apply bg-dropdownBlack text-white text-title16
}

.multiselect__content-wrapper {
  @apply bg-dropdownBlack border-none text-white
}

.multiselect__input {
  @apply bg-dropdownBlack border-none text-white
}

.multiselect__spinner {
  @apply bg-dropdownBlack text-white
}

.multiselect__tag {
  @apply bg-greenPrimary
}

.multiselect__content {
  @apply bg-dropdownBlack
}

</style>