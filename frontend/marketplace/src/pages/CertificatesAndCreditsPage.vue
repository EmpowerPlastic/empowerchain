<script setup lang="ts">
import { ref } from "vue";
import CreditTabContent from "@/components/CreditTabContent.vue";
import CertificateTabContent from "@/components/CertificateTabContent.vue";

const activeTab = ref("MyCertificates");
</script>
<template>
  <div class="p-5 md:px-[10%] min-h-[60vh] text-white font-Inter">
    <div
      class="grid grid-cols-2 gap-4 max-w-[350px] bg-tabGray w-full items-center rounded-xl border-[1.5px] border-borderGray p-1"
    >
      <div
        class="custom-tab"
        :class="{ 'bg-greenTabs': activeTab === 'MyCertificates' }"
        @click="activeTab = 'MyCertificates'"
      >
        My certificates
      </div>
      <div
        class="custom-tab"
        :class="{ 'bg-greenTabs': activeTab === 'MyCredits' }"
        @click="activeTab = 'MyCredits'"
      >
        My credits
      </div>
    </div>
    <template v-if="activeTab === 'MyCertificates'">
      <CertificateTabContent />
    </template>
    <template v-if="activeTab === 'MyCredits'">
      <CreditTabContent />
    </template>
  </div>
</template>
<style scoped></style>
