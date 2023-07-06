<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { onBeforeUnmount, onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import CustomGoogleMap from "@/components/CustomGoogleMap.vue";
import { getDetailsList } from "@/utils/utils";
import auctionCard from "@/assets/auctionCard.png";

const router = useRoute();
const certificateData = ref();
const creditData = ref();
const dataFormatted = ref();

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
              amount
              magnitude
            }
          }
          applicantDataByCreditDataId{
            nodes{
              name
              description
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

  creditData.value = result?.value?.creditCollections?.nodes[0];

  if (result?.value?.creditCollections?.nodes[0]?.creditData?.nodes) {
    dataFormatted.value = getDetailsList(
      result?.value?.creditCollections?.nodes[0]?.creditData?.nodes
    );
  }
};

watchEffect(() => {
  const query = `query{
  creditOffsetCertificate(id:"${router.params?.id}"){
    nodeId
    denom
    retiringEntityName
    walletId
  }
}`;
  const { result } = useQuery(
    gql`
      ${query}
    `
  );
  certificateData.value = result?.value?.creditOffsetCertificate;
  if (result?.value?.creditOffsetCertificate?.denom) {
    getCreditData(result.value.creditOffsetCertificate.denom);
  }
});
</script>
<template>
  <page size="A4" id="page">
    <div class="h-full bg-certificate-image bg-cover p-5">
      <div class="flex flex-row justify-between">
        <img src="../assets/cerificateVerified.svg" />
        <img class="mt-3 h-9" src="../assets/logo.png" />
      </div>

      <div class="flex flex-col mt-[90px] items-center font-Inter text-black">
        <p class="text-title38 font-bold">
          {{ certificateData?.retiringEntityName }}
        </p>
        <p class="text-title38 font-bold mt-[10px]">
          {{ dataFormatted?.volume }}kg
        </p>
        <div class="flex w-full mt-7 px-[80px] flex-row justify-between">
          <div>
            <p class="text-title16 font-semibold">Material</p>
            <div class="columns-1 gap-10 h-[70px]">
              <ul class="list-disc">
                <li
                  class="text-title14 mt-[5px] leading-[15px]"
                  v-for="material in dataFormatted?.material"
                  :key="material"
                >
                  {{ material?.value }}
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p class="text-title16 font-semibold">CREDIT type</p>
            <p class="text-title24 mt-[2px]">PCRD</p>
          </div>
        </div>

        <div class="mt-10 flex flex-col items-center">
          <p class="text-title16 font-semibold">Project Information</p>
          <p
            class="text-title12 text-center mt-3 h-[70px] text-ellipsis line-clamp-4"
          >
            {{
              creditData?.creditData?.nodes[0]?.applicantDataByCreditDataId
                ?.nodes[0]?.description
            }}
          </p>
        </div>

        <div class="flex w-full flex-row mt-[60px] justify-between px-2">
          <img
            :key="item"
            class="h-[145px] w-[230px] rounded-sm"
            :src="dataFormatted?.image[index] || auctionCard"
            v-for="(item, index) in 3"
          />
        </div>

        <div class="flex flex-row w-full mt-5 justify-between">
          <div class="w-[500px] h-[225px]">
            <CustomGoogleMap :locations="dataFormatted?.locationPointers" />
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
