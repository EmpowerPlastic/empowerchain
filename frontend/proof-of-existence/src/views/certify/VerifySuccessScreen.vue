<script setup lang="ts">
import { useRoute } from "vue-router";
import { RPC_URL } from "@/config/config";
import { empowerchain } from "@empower-plastic/empowerjs";
import {onMounted, ref} from "vue";

const { createRPCQueryClient } = empowerchain.ClientFactory;
const route = useRoute();

const proofTimestamp = ref("");

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
  } else {
    proofTimestamp.value = "Not able to fetch proof timestamp";
  }
});
</script>

<template>
  <div
    class="flex flex-col items-center w-full px-14 text-left bg-lightBlack rounded-lg sm:p-8"
  >
    <h5 class="mb-2 mt-3 mb-4 font-bold text-white text-title28">Verified!</h5>
    <p class="text-white text-title12 text-center mb-7">
      This data is embedded in the EmpowerChain blockchain. It is permanently
      certified and proven to exist since the transaction was confirmed.
    </p>
    <div
      class="flex justify-center bg-lightGray rounded-lg break-words text-center items-center flex flex-col p-4 mb-5"
    >
      <img class="w-20 mb-4" src="../../assets/images/certificate.png" />
      <p class="text-lightGreen text-title14" break-all>Certification Time</p>
      <p class="text-white text-title18 mb-3 break-all">
        {{ proofTimestamp }}
      </p>
      <p class="text-lightGreen text-title14 break-all">Data Hash</p>
      <p class="text-white text-title18 mb-6 break-all">
        {{ $route.query.hash }}
      </p>
    </div>
  </div>
</template>

<style></style>
