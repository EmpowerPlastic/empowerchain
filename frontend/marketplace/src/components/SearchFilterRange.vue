<script setup lang="ts">
export interface SearchFilterRange {
  placeholder: string;
  from: string;
  to: string;
  unit: string;
}
defineProps<SearchFilterRange>();
const emitModalValue = defineEmits(["update:from", "update:to"]);

const updateFromValue = (e: Event) => {
  emitModalValue("update:from", (e.target as HTMLInputElement).value);
};
const updateToValue = (e: Event) => {
  emitModalValue("update:to", (e.target as HTMLInputElement).value);
};
</script>
<template>
  <div class="dropdown break-words">
    <label tabindex="0">
      <div class="filter-title">
        <p class="text-ellipsis w-[110px]">
          {{ from || to ? `${from} - ${to}` : placeholder }}
        </p>
        <img class="ml-3" src="../assets/dropdown-icon.svg" />
      </div>
    </label>
    <div
      tabindex="0"
      class="md:dropdown-content min-w-[160px] shadow bg-dropdownBlack rounded-sm w-fit text-white p-3"
    >
      <label class="input-group">
        <input
          type="number"
          placeholder="From"
          class="input w-full bg-dropdownBlack mb-2"
          :value="from"
          @input="updateFromValue"
        />
        <span class="input bg-lightBlack">{{ unit }}</span>
      </label>
      <label class="input-group">
        <input
          type="number"
          placeholder="To"
          class="input w-full bg-dropdownBlack"
          :value="to"
          @input="updateToValue"
        />
        <span class="input bg-lightBlack">{{ unit }}</span>
      </label>
    </div>
  </div>
</template>
