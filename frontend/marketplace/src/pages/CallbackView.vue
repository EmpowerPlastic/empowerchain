<script setup lang="ts">
import { useHandleSignInCallback } from "@logto/vue";
import router, { useRoute } from "@/router";
import CustomSpinner from "@/components/CustomSpinner.vue";

const route = useRoute();
const { isLoading } = useHandleSignInCallback(() => {
  const { referrer } = route.query;
  if (referrer) {
    router.push(referrer as string);
    return;
  }
  router.push("/");
});
</script>
<template>
  <div class="h-[30vh] w-full flex">
    <CustomSpinner :visible="isLoading" />
  </div>
</template>
