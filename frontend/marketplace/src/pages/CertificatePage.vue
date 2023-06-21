<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRoute();
const data = ref();

onMounted(() => {
  document.body.style.backgroundColor = "#ffff";
  const id = router.params?.id;
  if (id) {
    getCertificateData(id as string);
  }
});
onBeforeUnmount(() => {
  document.body.style.backgroundColor = "";
});

const getCertificateData = (id: string) => {
  const query = `query{
  creditOffsetCertificate(id:"${id}"){
    nodeId
    denom
    walletId
  }
}`;
  const { result, loading, error } = useQuery(
    gql`
      ${query}
    `
  );
  data.value = { result, loading, error };
};
</script>
<template>
  <div class="background">
    <p class="text-black text-title24">
      Node Id - {{ data?.result?.creditOffsetCertificate?.nodeId }}
    </p>
    <p class="text-black text-title38">
      Wallet Id - {{ data?.result?.creditOffsetCertificate?.walletId }}
    </p>
    <p class="text-black text-title38">
      Denom - {{ data?.result?.creditOffsetCertificate?.denom }}
    </p>
  </div>
</template>
