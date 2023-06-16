<script setup lang="ts">
import {useQuery} from "@vue/apollo-composable";
import gql from "graphql-tag";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
const data = ref()
const showSpinner = ref(true)

onMounted(() => {
  getCertificateData()
})

const getCertificateData = () => {
  const
      let
  query = `query{
  creditOffsetCertificate(id:"1"){
    nodeId
    denom
    walletId
  }
}`
  showSpinner.value = true
  const {result, loading, error} = useQuery(gql`${query}`);
  data.value = {result, loading, error}
  showSpinner.value = false
}

</script>
<template>
  <div class="background">
    <p class="text-black text-[200px]">Hiiiiiiiiii</p>
  </div>
</template>
<style scoped>
.background {
  @apply h-screen w-screen bg-white;
}
</style>