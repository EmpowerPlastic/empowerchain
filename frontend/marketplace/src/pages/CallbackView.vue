<script setup lang="ts">
import { useHandleSignInCallback } from "@logto/vue";
import router from "@/router";
import CustomSpinner from "@/components/CustomSpinner.vue";
const { isLoading } = useHandleSignInCallback(() => {
  router.push("/");
});
</script>
<template>
  <div class="h-[30vh] w-full flex">
    <CustomSpinner :visible="isLoading" />
  </div>
</template>
