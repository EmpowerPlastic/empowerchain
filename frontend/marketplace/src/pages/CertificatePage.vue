<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { onBeforeUnmount, onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import CustomGoogleMap from "@/components/CustomGoogleMap.vue";

const router = useRoute();
const data = ref();

onMounted(() => {
  document.body.style.backgroundColor = "#ffff";
});
onBeforeUnmount(() => {
  document.body.style.backgroundColor = "";
});

const getCreditData = (denom: string) => {
  let query = `query{
  creditCollections(filter:{
    denom:{equalTo:"${denom}"}
  }){
    nodes{
      projectId
      id
      denom
      creditType
      creditData{
        nodes{
          mediaFiles{
            nodes{
              name
              url
            }
          }
          eventData{
            nodes{
              material{
                nodes{
                  value
                  key
                }
              }
              latitude
              longitude
            }
          }
        }
      }
    }
  }
}`;
  const { result, loading, error } = useQuery(
    gql`
      ${query}
    `
  );
  data.value = result?.value?.creditCollections?.nodes[0];
  console.log(result.value.creditCollections.nodes);
};

watchEffect(() => {
  const query = `query{
  creditOffsetCertificate(id:"${router.params?.id}"){
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
  if (result?.value?.creditOffsetCertificate?.denom) {
    getCreditData(result.value.creditOffsetCertificate.denom);
  }
});
</script>
<template>
  <page size="A4">
    <div class="h-full bg-certificate-image bg-cover p-5">
      <img src="../assets/cerificateVerified.svg" />

      <div class="flex flex-col mt-[120px] items-center font-Inter text-black">
        <p class="text-title38 font-bold">Andrey Raevskiy</p>
        <p class="text-title38 font-bold mt-[10px]">50kg</p>
        <div class="flex w-full mt-7 px-[80px] flex-row justify-between">
          <div>
            <p class="text-title16 font-semibold">Material</p>
            <p class="text-title24 mt-[5px]">PP, PET</p>
          </div>
          <div>
            <p class="text-title16 font-semibold">CREDIT type</p>
            <p class="text-title24 mt-[5px]">PCRD</p>
          </div>
        </div>

        <div class="mt-10 flex flex-col items-center">
          <p class="text-title16 font-semibold">Material data</p>
          <p class="text-title12 text-center mt-3 line">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div class="flex w-full flex-row mt-[60px] justify-between px-2">
          <img class="h-[145px] rounded-sm" src="../assets/auctionCard.png" />
          <img class="h-[145px] rounded-sm" src="../assets/auctionCard.png" />
          <img class="h-[145px] rounded-sm" src="../assets/auctionCard.png" />
        </div>

        <div class="flex flex-row w-full mt-5 justify-between">
          <div class="w-[500px] h-[225px]">
            <CustomGoogleMap
              :locations="[{ lat: 44.968046, lng: -94.420307 }]"
            />
          </div>
          <div class="flex flex-col w-[240px] items-center mt-[50px]">
            <div class="flex flex-col items-center">
              <img src="../assets/certificateLogo.svg" />
              <img class="mt-4" src="../assets/certificateLogoTitle.svg" />
            </div>
            <div class="flex flex-col mt-[30px]">
              <div class="bg-certificateButton py-1 px-7 rounded-[7px]">
                12345
              </div>
              <img
                class="mt-[25px] w-[118px] absolute cursor-pointer"
                src="../assets/certificateButton.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </page>
</template>
<style scoped>
page {
  background: white;
  display: block;
  margin: 0.5cm auto;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
}
page[size="A4"] {
  @apply w-[21cm] h-[29.7cm];
}
</style>
