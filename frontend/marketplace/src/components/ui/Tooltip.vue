<script setup lang="ts">
interface Props {
  label: string;
  iconClass: string;
}
const props = defineProps<Props>();
</script>
<template>
  <p class="tooltip" :data-tip="props.label">
    <img :class="props.iconClass" src="../../assets/questionIcon.svg" />
  </p>
</template>
<style>
.tooltip {
  --tooltip-color: #000000;
  --tooltip-text-color: #ffffff;
  --tooltip-tail: 10px;
}
</style>
