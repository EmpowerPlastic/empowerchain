<script setup lang="ts">
import type { ButtonHTMLAttributes, ReservedProps } from "vue";
interface Props
  extends /* @vue-ignore */ ButtonHTMLAttributes,
    /* @vue-ignore */ ReservedProps {}

const props = defineProps<Props>();
</script>
<template>
  <button
    v-bind="props"
    class="btn btn-ghost text-white btn-block normal-case bg-greenPrimary hover:bg-greenDark text-title24 lg:text-title32 lg:btn-lg p-0 px-12 font-normal disabled:bg-lightGray disabled:text-white"
  >
    <slot />
  </button>
</template>
