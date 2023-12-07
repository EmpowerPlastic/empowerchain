<script setup lang="ts">
import { useHandleSignInCallback } from "@logto/vue";
import router from "@/router";
import CustomSpinner from "@/components/CustomSpinner.vue";
import { useRedirectAfterLoginUrl } from '@/utils/redirectAfterLoginUrl'

const { isLoading } = useHandleSignInCallback(() => {
  const redirectUrl = useRedirectAfterLoginUrl().get();
  if (redirectUrl) {
    router.push(redirectUrl);
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
