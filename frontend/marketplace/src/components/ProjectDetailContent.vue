<script setup lang="ts">
export interface ProjectDetailContentProps {
  label: string;
  value: string
}
defineProps<ProjectDetailContentProps>()
</script>
<template>
  <div>
    <p class="details-label">{{label}}</p>
    <p class="details-content">{{value}}</p>
  </div>
</template>
