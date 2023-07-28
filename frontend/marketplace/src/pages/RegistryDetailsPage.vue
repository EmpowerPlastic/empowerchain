<script setup lang="ts">
import ImageCarousel from "@/components/ImageCarousel.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import CustomGoogleMap from "@/components/CustomGoogleMap.vue";
import { ref } from "vue";
import ProjectDetailContent from "@/components/ProjectDetailContent.vue";
import { useRoute } from "vue-router";

import CustomSpinner from "@/components/CustomSpinner.vue";
import { convertIPFStoHTTPS } from "@/utils/utils";

const router = useRoute();

const getDetailsList = (data: any) => {
  let applicantArray: string[] = [];
  let locationArray: string[] = [];
  let locationPointersArray: {
    lat: number;
    lng: number;
  }[] = [];
  let imageArray: string[] = [];
  let fileArray: { url: string; name: string }[] = [];
  let materialArray: { key: string; value: string }[] = [];
  let volume: number = 0;
  let registrationDateArray: string[] = [];

  data?.map((item: any) => {
    item.applicantDataByCreditDataId.nodes.map((node: any) => {
      applicantArray.push(node.name);
    });

    item.eventData.nodes.map((node: any) => {
      volume = volume + node.amount;
      locationArray.push(node.country);
      locationPointersArray.push({ lat: node.latitude, lng: node.longitude });
      materialArray.push(...node.material.nodes);
      registrationDateArray.push(
        new Date(node.registrationDate).toLocaleDateString()
      );
    });

    item.mediaFiles.nodes.map((node: any) => {
      imageArray.push(convertIPFStoHTTPS(node.url));
    });
    item.binaryFiles.nodes.map((node: any) => {
      fileArray.push({
        url: convertIPFStoHTTPS(node.url),
        name: node.name,
      });
    });
  });

  const uniqueMaterialArray = materialArray.filter(
    (obj, index, self) =>
      index ===
      self.findIndex((o) => o.key === obj.key && o.value === obj.value)
  );
  return {
    applicant: applicantArray[0],
    location: Array.from(new Set(locationArray)),
    material: uniqueMaterialArray.map((item) => item.value),
    volume: volume,
    image: imageArray,
    file: fileArray,
    locationPointers: locationPointersArray,
    registrationDate: registrationDateArray[0],
  };
};

const data = ref();
const orderHistory = ref();
const showSpinner = ref(true);
const amount = ref(0);
const denom = ref("");
const owner = ref("");
const auctionDetails = ref(getDetailsList(null));
</script>
<template>
  <CustomSpinner :visible="showSpinner" />
  <div
    v-if="showSpinner"
    class="p-5 md:px-[10%] min-h-[60vh] text-white font-Inter"
  >
    <!--  Title Section-->

    <h1 class="text-title24 md:text-title38 text-white mb-5">
      Plastic Credit Registry
    </h1>

    <h1 class="text-title38">
      {{ data?.result?.marketplaceListings?.nodes[0].denom }}
    </h1>
    <!--    <p class="text-title18 text-subTextGray">Sri Lanka</p>-->

    <!--    Gallery-->
    <ImageCarousel
      class="md:hidden my-5"
      :image-array="auctionDetails?.image"
    />
    <ImageGallery class="hidden md:flex" :image-array="auctionDetails?.image" />

    <!--    Project Details-->
    <div class="flex flex-col md:flex-row w-full mt-5 justify-between">
      <div
        class="grid md:grid-cols-2 md:gap-x-[10px] md:w-[50%] gap-y-5 bg-lightBlack rounded-sm p-6"
      >
        <ProjectDetailContent
          label="CREDIT type"
          :value="
            data?.result?.marketplaceListings?.nodes[0].creditCollection
              .creditType
          "
        />
        <ProjectDetailContent
          label="Material"
          :value="auctionDetails?.material"
          list
        />
        <ProjectDetailContent label="Credits per kg" value="1" />
        <ProjectDetailContent
          label="Registration date"
          :value="auctionDetails?.registrationDate"
        />
        <ProjectDetailContent
          label="Location"
          :value="auctionDetails?.location"
          list
        />
        <ProjectDetailContent
          label="Collection organization"
          :value="auctionDetails?.applicant"
        />
        <ProjectDetailContent
          label="Volume"
          :value="auctionDetails?.volume + 'kg'"
        />
      </div>

      <!--      Map Section-->
      <div
        class="mt-5 md:mt-0 md:w-[60%] md:ml-5 h-[330px] md:h-auto rounded-lg relative"
      >
        <CustomGoogleMap :locations="auctionDetails?.locationPointers" />
      </div>
    </div>

    <!--    Project Information-->
    <div class="bg-lightBlack p-6 mt-5 rounded-sm">
      <p class="text-title18 font-semibold mb-3">Project information</p>
      <p class="text-title14 text-textInfoGray">
        {{
          data?.result?.marketplaceListings?.nodes[0].creditCollection
            ?.creditData?.nodes[0].applicantDataByCreditDataId.nodes[0]
            .description
        }}
      </p>
    </div>

    <!--Files For download-->
    <div class="bg-lightBlack p-6 mt-5 rounded-sm">
      <p class="text-title18 font-semibold mb-3">
        Public files available for download
      </p>
      <ul class="pl-5">
        <li
          class="text-title14 text-greenPrimary underline"
          v-for="file in auctionDetails?.file"
          :key="file.name"
        >
          <a target="_blank" :href="file.url">{{ file.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
ul li::before {
  content: "\2022";
  color: white;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
</style>
