<script setup lang="ts">
export interface CustomSpinner {
  visible: boolean;
}
defineProps<CustomSpinner>();
</script>
<template>
  <div v-if="visible" class="w-full flex justify-center p-10">
    <span class="loading loading-spinner loading-lg text-greenPrimary"></span>
  </div>
</template>
