<script setup lang="ts">
export interface FAQCollapseProps {
  title: string;
  content: string;
}
defineProps<FAQCollapseProps>();
</script>
<template>
  <div tabindex="0" class="collapse group collapse-arrow mb-1">
    <div class="flex collapse-title text-white bg-mediumGray">
      <div
        class="w-7 h-7 border-2 border-white rounded-full mr-3 group-focus:bg-greenPrimary"
      />
      {{ title }}
    </div>
    <div class="collapse-content bg-lightBlack">
      <p class="text-textWhite px-10 py-3">{{ content }}</p>
    </div>
  </div>
</template>
