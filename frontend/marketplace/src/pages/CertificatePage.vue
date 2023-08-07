<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { onBeforeUnmount, onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import CustomGoogleMap from "@/components/CustomGoogleMap.vue";
import { getDetailsList } from "@/utils/utils";
import auctionCard from "@/assets/auctionCard.png";
import { GOOGLE_MAPS_API_KEY } from "@/config/config";
import { jsPDF } from "jspdf";
import { PDFGenerator } from "@/pdfGenerator/pdfGenerator";
import { toast } from "vue3-toastify";

const doc = new jsPDF("p", "mm", "a4", true);
const router = useRoute();
const certificateData = ref();
const creditData = ref();
const dataFormatted = ref();
const loading = ref(true);

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
    loading.value = false;
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

const generatePDF = async () => {
  try {
    const PDFData = {
      title: certificateData.value?.retiringEntityName,
      volume: dataFormatted.value?.volume,
      material: dataFormatted.value?.material,
      credit: creditData?.value?.creditType,
      projectInfo:
        creditData?.value?.creditData?.nodes[0]?.applicantDataByCreditDataId
          ?.nodes[0]?.description,
      images: dataFormatted.value?.image,
      map: generateMapImageUrl(dataFormatted.value?.locationPointers),
    };
    const results = await PDFGenerator(PDFData);
    if (results?.success) {
      toast.success("Certificate downloaded successfully");
    }
  } catch (e) {
    console.error(e);
    toast.error("Something went wrong");
  }
};

const generateMapImageUrl = (locations: { lat: number; lng: number }[]) => {
  const baseUrl = "https://maps.googleapis.com/maps/api/staticmap?";
  const apiKey = GOOGLE_MAPS_API_KEY;

  const markers = locations
    .map((location) => `markers=${location.lat},${location.lng}`)
    .join("&");

  const url = `${baseUrl}size=1500x300&maptype=roadmap&${markers}&key=${apiKey}`;
  return url;
};
</script>
<template>
  <div class="flex flex-row justify-end p-5 min-w-[21cm]">
    <button
      class="btn btn-ghost text-white normal-case bg-greenPrimary"
      @click="generatePDF"
      :disabled="!loading"
    >
      <img class="w-7 mr-2" src="../assets/downloadIcon.svg" />
      Download Certificate
    </button>
  </div>
  <page size="A4" id="pdfContent">
    <div class="h-full bg-certificate-image bg-cover p-5">
      <div class="flex flex-row justify-between">
        <a href="https://www.empower.eco/" target="_blank">
          <img src="../assets/cerificateVerified.svg" />
        </a>
        <img class="mt-3 h-9" src="../assets/logo.png" />
      </div>

      <div class="flex flex-col mt-[90px] items-center font-Inter text-black">
        <p
          class="text-title38 font-bold max-w-[700px] text-ellipsis whitespace-nowrap overflow-hidden"
        >
          {{ certificateData?.retiringEntityName }}
        </p>
        <p class="text-title38 font-bold mt-[10px]">
          {{ dataFormatted?.volume }}kg
        </p>
        <div class="flex w-full mt-7 px-[80px] flex-row justify-between">
          <div>
            <p class="text-title16 font-semibold">Material</p>
            <div class="columns-1 gap-10 h-[80px]">
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
            <p class="text-title16 mt-[2px]">{{ creditData?.creditType }}</p>
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

        <div class="flex w-full flex-row mt-[55px] justify-between px-2">
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
          <div class="flex flex-col w-[240px] items-center mt-[80px]">
            <div class="flex flex-col items-center">
              <img src="../assets/certificateLogo.svg" />
              <img class="mt-4" src="../assets/certificateLogoTitle.svg" />
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
