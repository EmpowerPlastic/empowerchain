<script setup lang="ts">
import ImageCarousel from "@/components/ImageCarousel.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import CustomGoogleMap from "@/components/CustomGoogleMap.vue";
import { ref } from "vue";
import ProjectDetailContent from "@/components/ProjectDetailContent.vue";
import { useRoute } from "vue-router";
import CustomSpinner from "@/components/CustomSpinner.vue";

const router = useRoute();
const data = ref();
const showSpinner = ref(true);
</script>
<template>
  <CustomSpinner :visible="!showSpinner" />
  <div
    v-if="showSpinner"
    class="p-5 md:px-[10%] min-h-[60vh] text-white font-Inter"
  >
    <!--  Title Section-->
    <h1 class="text-title24 md:text-title38 text-white mb-5">
      Plastic Credit Registry
    </h1>
    <!--    Gallery-->
    <ImageCarousel
      class="md:hidden my-5"
      :image-array="['https://dummyimage.com/16:9x1080/']"
    />
    <ImageGallery
      class="hidden md:flex"
      :image-array="['https://dummyimage.com/16:9x1080/']"
    />

    <!--    Retired credits detail-->
    <div
      class="flex flex-col justify-between md:flex-row bg-lightBlack p-6 rounded-sm"
    >
      <ProjectDetailContent label="Retirerer name" value="Test" />
      <ProjectDetailContent label="Retirerer data" value="Test" />
      <ProjectDetailContent label="Retired amount" value="Test" />
    </div>
    <!--    Project Details-->
    <div class="flex flex-col md:flex-row w-full mt-5 justify-between">
      <div
        class="grid md:grid-cols-2 md:gap-x-[10px] md:w-[50%] gap-y-5 bg-lightBlack rounded-sm p-6"
      >
        <ProjectDetailContent label="CREDIT type" value="" />
        <ProjectDetailContent label="Material" value="" list />
        <ProjectDetailContent label="Credits per kg" value="1" />
        <ProjectDetailContent label="Registration date" value="" />
        <ProjectDetailContent label="Location" value="" list />
        <ProjectDetailContent label="Collection organization" value="" />
        <ProjectDetailContent label="Volume" value="" />
      </div>

      <!--      Map Section-->
      <div
        class="mt-5 md:mt-0 md:w-[60%] md:ml-5 h-[330px] md:h-auto rounded-lg relative"
      >
        <CustomGoogleMap :locations="[{ lat: 40.7322, lng: -74.004 }]" />
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
          v-for="file in [{ name: 'Test', url: '' }]"
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
