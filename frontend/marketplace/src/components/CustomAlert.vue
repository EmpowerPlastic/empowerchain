<script setup lang="ts">
export interface CustomAlertProps {
  visible: boolean;
  label: string;
}
defineProps<CustomAlertProps>();
</script>
<template>
  <div
    v-if="visible"
    class="bg-darkGreen p-5 text-title15 rounded-sm text-center text-white"
  >
    {{ label }}
  </div>
</template>
