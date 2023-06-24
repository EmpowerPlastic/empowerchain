<script setup lang="ts">
import VueMultiselect from "vue-multiselect";
import { ref, watch } from "vue";

export interface SearchFilterSelectProps {
  placeholder: string;
  options: string[];
  modelValue: string[];
}

const props = defineProps<SearchFilterSelectProps>();

const emitModalValue = defineEmits(["update:modelValue"]);
const selected = ref([]);

const updateValue = (val: string[]) => {
  emitModalValue("update:modelValue", val);
};

watch(props, () => {
  if (props.modelValue.length > 0) {
    selected.value = props.modelValue as any;
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
    :searchable="false"
    hideSelected
    :showLabels="false"
  />
</template>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style>
.multiselect__tags {
  background: rgba(33, 33, 33, 1) !important;
  border: none !important;
}

.multiselect__select {
  background: rgba(33, 33, 33, 1) !important;
}

.multiselect__placeholder {
  background: rgba(33, 33, 33, 1) !important;
  color: #ffffff !important;
  font-size: 16px !important;
}

.multiselect__content-wrapper {
  background: rgba(33, 33, 33, 1) !important;
  border: none !important;
  color: #ffffff !important;
}

.multiselect__input {
  background: rgba(33, 33, 33, 1) !important;
  border: none !important;
  color: #ffffff !important;
}

.multiselect__spinner {
  background: rgba(33, 33, 33, 1) !important;
  color: #ffffff !important;
}

.multiselect__tag {
  background: #00c131 !important;
}

.multiselect__tag > span {
  background: #00c131 !important;
}

.multiselect__content {
  background: rgba(33, 33, 33, 1) !important;
}

.multiselect__option {
  background: rgba(255, 255, 255, 0.06) !important;
}

.multiselect__option > span {
  background: transparent !important;
}
</style>
