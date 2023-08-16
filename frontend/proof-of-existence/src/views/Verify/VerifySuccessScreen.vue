<script setup lang="ts">
import { useRoute } from "vue-router";
import { RPC_URL } from "@/config/config";
import { empowerchain } from "@empower-plastic/empowerjs";
import { onMounted, ref } from "vue";
import SuccessModal from "@/views/certify/SuccessModal.vue";
import VerifyView from "@/views/Verify/VerifyView.vue";
import { toast } from "vue3-toastify";

const { createRPCQueryClient } = empowerchain.ClientFactory;
const route = useRoute();

const proofTimestamp = ref("");
const showSuccessModal = ref(false);

const verifyHash = async (hash: string) => {
  const client = await createRPCQueryClient({ rpcEndpoint: RPC_URL });
  return await client.empowerchain.proofofexistence.proof({
    hash: hash,
  });
};

onMounted(async () => {
  const verifyResult = await verifyHash(route.query.hash as string);
  const time = verifyResult.metadata?.timestamp?.toISOString();
  if (time) {
    proofTimestamp.value = time;
    showSuccessModal.value = true;
  } else {
    toast.error("Not able to fetch proof timestamp");
  }
});

const closSuccessModal = () => {
  showSuccessModal.value = false;
};
</script>
<template>
  <template v-if="route && route.query && route.query.hash">
    <SuccessModal
      modal-type="VERIFY"
      :close-modal="closSuccessModal"
      :hash="route?.query?.hash?.toString()"
      :time="new Date(proofTimestamp).toLocaleString()"
      v-show="showSuccessModal"
    />
  </template>

  <VerifyView />
</template>

<style></style>
