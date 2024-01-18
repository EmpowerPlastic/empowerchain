<script setup lang="ts">
import type { MaterialProperty } from "@/types/GraphqlSchema";
import CustomSpinner from "@/components/CustomSpinner.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";
import ProjectDetailContent from "@/components/ProjectDetailContent.vue";
import ProjectDetailMaterial from "@/components/ProjectDetailMaterial.vue";
import CustomGoogleMap from "@/components/CustomGoogleMap.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import { useRoute } from "@/router";
import { useQuery } from "@vue/apollo-composable";
import { onMounted, ref, watch } from "vue";
import { GET_MARKETPLACE_LISTING } from "@/graphql/queries";
import { formatAuctionDetails } from "@/utils/formatAuctionDetails";

interface AuctionDetails {
  applicant: string;
  location: string[];
  material: MaterialProperty[][];
  volume: number;
  image: string[];
  file: {
    url: string;
    name: string;
  }[];
  locationPointers: {
    lat: number;
    lng: number;
  }[];
  registrationDate: string;
  plasticType: string;
}

const router = useRoute();

const data = ref();
const showSpinner = ref(true);
const auctionDetails = ref<AuctionDetails>({
  applicant: "",
  location: [""],
  material: [],
  volume: 0,
  image: [""],
  file: [{ url: "", name: "" }],
  locationPointers: [{ lat: 0, lng: 0 }],
  registrationDate: "",
  plasticType: "",
});

const getAuctionDetails = (id: string | string[]) => {
  try {
    const { result, loading, error, onResult } = useQuery(
      GET_MARKETPLACE_LISTING,
      {
        id: id,
      },
    );

    onResult(() => {
      if (result.value) {
        data.value = {
          result,
          loading,
          error,
        };
        auctionDetails.value = formatAuctionDetails(
          result.value.marketplaceListings?.nodes[0].creditCollection.creditData
            .nodes,
          parseInt(
            result.value.marketplaceListings?.nodes[0].creditCollection
              .activeAmount,
          ) +
            parseInt(
              result.value.marketplaceListings?.nodes[0].creditCollection
                .retiredAmount,
            ),
        );
      }
    });
    showSpinner.value = false;
  } catch (error) {
    console.log("Error in getAuctionDetails", error);
  }
};

onMounted(() => {
  getAuctionDetails(router.params.denom);
});
</script>
<template>
  <CustomSpinner :visible="showSpinner" />
  <div v-if="!showSpinner" class="p-5 min-h-[60vh] text-white font-Inter">
    <!--  Title Section-->
    <h1 class="text-title24 md:text-title38 text-white mb-5">
      Credit Collection Page
    </h1>
    <h1 class="text-title38">
      {{
        data?.result?.marketplaceListings?.nodes[0].creditCollection?.creditData
          ?.nodes[0].applicantDataByCreditDataId.nodes[0].name
      }}
      - {{ auctionDetails.plasticType }}
    </h1>

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
        <ProjectDetailMaterial
          label="Material"
          :materials="auctionDetails?.material"
        />
        <ProjectDetailContent label="Kgs per credit" value="1" />
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
          label="Collection organisation"
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
          class="text-title14 text-greenPrimary underline truncate"
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
