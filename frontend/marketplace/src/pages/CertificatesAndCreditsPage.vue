<script setup lang="ts">
import { ref } from "vue";
import CreditTabContent from "@/components/CreditTabContent.vue";
import CertificateTabContent from "@/components/CertificateTabContent.vue";

const activeTab = ref("MyCertificates");
</script>
<template>
  <div class="p-5 md:px-[10%] min-h-[60vh] text-white font-Inter">
    <h1 class="text-title18 md:text-title24 text-white mb-5">
      My certificates
    </h1>
    <CertificateTabContent />
  </div>
</template>
<style scoped></style>
