<script setup lang="ts">
export interface GraphTimelineProps {
  active: string;
}

const props = defineProps<GraphTimelineProps>();
const emitClick = defineEmits(["onClick"]);

const handleOnClick = (val: string) => {
  emitClick("onClick", val);
};
</script>
<template>
  <div
    class="grid grid-cols-3 gap-4 max-w-[280px] bg-tabGray w-full items-center rounded-xl border-[1.5px] border-borderGray p-1 text-white"
  >
    <div
      class="custom-tab"
      :class="{ 'bg-greenTabs': props.active === 'day' }"
      @click="handleOnClick('day')"
    >
      Day
    </div>
    <div
      class="custom-tab"
      :class="{ 'bg-greenTabs': props.active === 'month' }"
      @click="handleOnClick('month')"
    >
      Month
    </div>
    <div
      class="custom-tab"
      :class="{ 'bg-greenTabs': props.active === 'year' }"
      @click="handleOnClick('year')"
    >
      Year
    </div>
  </div>
</template>
