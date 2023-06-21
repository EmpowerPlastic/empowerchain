<script setup lang="ts">
export interface ProjectDetailContentProps {
  label: string;
  value: string | number | string[];
  list?: boolean;
}

defineProps<ProjectDetailContentProps>();
</script>
<template>
  <di v>
    <p class="details-label">{{ label }}</p>
    <p class="details-content" v-if="!list">{{ value }}</p>
    <ul v-if="list">
      <li class="details-content break-words" v-for="item in value" :key="item">
        {{ item }}
      </li>
    </ul>
  </di>
</template>
