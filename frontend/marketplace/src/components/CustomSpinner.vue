<script setup lang="ts">
export interface CustomSpinner {
  visible: boolean;
}
defineProps<CustomSpinner>();
</script>
<template>
  <div v-if="visible" class="w-full flex justify-center">
    <img src="../assets/spinner.svg" />
  </div>
</template>
