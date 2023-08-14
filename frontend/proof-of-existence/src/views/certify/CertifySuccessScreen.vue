<script setup lang="ts">
import CertifyView from "@/views/certify/CertifyView.vue";
import SuccessModal from "@/views/certify/SuccessModal.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const showSuccessModal = ref(false);
const route = useRoute();

onMounted(() => {
  if (route.query.hash && route.query.time) {
    showSuccessModal.value = true;
  }
});

const closSuccessModal = () => {
  showSuccessModal.value = false;
};
</script>

<template>
  <template v-if="route && route.query && route.query.hash">
    <SuccessModal
      modal-type="CERTIFY"
      :close-modal="closSuccessModal"
      v-show="showSuccessModal"
      :time="new Date(Number(route.query.time)).toLocaleString()"
      :hash="route?.query?.hash.toString()"
    />
  </template>
  <CertifyView />
</template>
