<script setup lang="ts">
import type { MaterialProperty } from "@/types/GraphqlSchema";
import BuyCredits from "@/components/BuyCredits.vue";
import CustomGoogleMap from "@/components/CustomGoogleMap.vue";
import CustomSpinner from "@/components/CustomSpinner.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import ProjectDetailContent from "@/components/ProjectDetailContent.vue";
import ProjectDetailMaterial from "@/components/ProjectDetailMaterial.vue";
import { useRoute } from "@/router";
import {
  convertIPFStoHTTPS,
  uniqueMaterials,
  findPlasticTypeInMaterial,
} from "@/utils/utils";
import { useQuery } from "@vue/apollo-composable";
import { ref, watch, computed } from "vue";
import { GET_MARKETPLACE_LISTING } from "@/graphql/queries";
import tracking, { PageViewEvents } from "@/utils/analytics";

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
  locationPointers:
    | null
    | {
        lat: number;
        lng: number;
      }[];
  registrationDate: string;
}

const route = useRoute();

const data = ref();
const showSpinner = ref(true);
const denom = ref("");
const owner = ref("");
const auctionDetails = ref<AuctionDetails>({
  applicant: "",
  location: [""],
  material: [],
  volume: 0,
  image: [""],
  file: [{ url: "", name: "" }],
  locationPointers: null,
  registrationDate: "",
});
const pricePerCreditDenom = ref("");
const plasticType = ref("");
const currentId = computed(() => {
  return route.params.id as string;
});

const getDetailsList = (data: any, materialVolume: number) => {
  const applicantArray: string[] = [];
  const locationArray: string[] = [];
  const locationPointersArray: {
    lat: number;
    lng: number;
  }[] = [];
  const imageArray: string[] = [];
  const fileArray: { url: string; name: string }[] = [];
  const materialArray: MaterialProperty[][] = [];
  const volume = materialVolume;
  const registrationDateArray: string[] = [];

  data?.map((item: any) => {
    item.applicantDataByCreditDataId.nodes.map((node: any) => {
      applicantArray.push(node.name);
    });

    item.eventData.nodes.map((node: any) => {
      locationArray.push(node.country);
      locationPointersArray.push({ lat: node.latitude, lng: node.longitude });
      materialArray.push(node.material.nodes);
      registrationDateArray.push(
        new Date(node.registrationDate).toLocaleDateString(),
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
  const uniqueMaterialArray = uniqueMaterials(materialArray);
  plasticType.value =
    findPlasticTypeInMaterial(uniqueMaterialArray[0])?.value ?? "";

  return {
    applicant: applicantArray[0],
    location: Array.from(new Set(locationArray)),
    material: uniqueMaterialArray,
    volume: volume,
    image: imageArray,
    file: fileArray,
    locationPointers: locationPointersArray,
    registrationDate: registrationDateArray[0],
  };
};

const getAuctionDetails = (id: string | string[]) => {
  const { result, loading, error, onResult } = useQuery(
    GET_MARKETPLACE_LISTING,
    {
      id: id,
    },
    {
      pollInterval: 5000,
      fetchPolicy: "no-cache",
    },
  );
  data.value = {
    result,
    loading,
    error,
  };

  onResult(({ data }) => {
    auctionDetails.value = getDetailsList(
      data.marketplaceListings?.nodes[0].creditCollection.creditData.nodes,
      parseInt(
        data.marketplaceListings?.nodes[0].creditCollection.activeAmount,
      ) +
        parseInt(
          data.marketplaceListings?.nodes[0].creditCollection.retiredAmount,
        ),
    );
    pricePerCreditDenom.value =
      data.marketplaceListings?.nodes[0].pricePerCreditDenom;
  });

  showSpinner.value = false;
  denom.value = result.value?.marketplaceListings?.nodes[0].denom;
  owner.value = result.value?.marketplaceListings?.nodes[0].owner;
};

const handlePageLoadAndCollectionIdChange = (newId: string, oldId?: string) => {
  if (newId && newId !== oldId) {
    getAuctionDetails(newId);
  }
};

watch(currentId, handlePageLoadAndCollectionIdChange, { immediate: true });
</script>
<template>
  <CustomSpinner :visible="showSpinner" />
  <div v-if="!showSpinner" class="p-5 min-h-[60vh] text-white font-Inter">
    <!--  Title Section-->
    <p class="text-title18 mb-5">
      <a href="/auction">Auctions</a
      ><span class="text-subTextGray">/ Auction Details</span>
    </p>
    <h1 class="text-title38">
      {{
        data?.result?.marketplaceListings?.nodes[0].creditCollection?.creditData
          ?.nodes[0].applicantDataByCreditDataId.nodes[0].name
      }}
      - {{ plasticType }}
    </h1>
    <!--    <p class="text-title18 text-subTextGray">Sri Lanka</p>-->

    <!--    Gallery-->
    <ImageCarousel
      class="md:hidden my-5"
      :image-array="auctionDetails?.image"
    />
    <ImageGallery class="hidden md:flex" :image-array="auctionDetails?.image" />

    <!--    Buy Credits-->
    <BuyCredits
      :available-credits="data?.result?.marketplaceListings?.nodes[0].amount"
      :initial-credits="
        data?.result?.marketplaceListings?.nodes[0].initialAmount
      "
      :selected-coin="`${pricePerCreditDenom}`"
      :price-per-credit="
        data?.result?.marketplaceListings?.nodes[0].pricePerCreditAmount /
        1000000
      "
      :denom="data?.result?.marketplaceListings?.nodes[0].denom"
      :owner="data?.result?.marketplaceListings?.nodes[0].owner"
    />

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
