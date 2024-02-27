<script setup lang="ts">
import { PageNames } from "@/router";
import { convertIPFStoHTTPS } from "@/utils/utils";
import auctionCard from "@/assets/auctionCard.png";
import { formatDenom } from "@/utils/wallet-utils";
import { onMounted, ref } from "vue";
import CustomImage from "@/components/CustomImage.vue";
import tracking, { TrackEvents } from "@/utils/analytics";
import CustomSpinner from "@/components/CustomSpinner.vue";
import {
  getDetailsList,
  findPlasticTypeInMaterial,
  stripPlasticTypeFromMaterial,
  prettifyCardProperty,
} from "@/utils/utils";
import type { MaterialProperty } from "@/types/GraphqlSchema";
import iconLocation from "@/assets/icons/location-pin.svg";
export interface ListingCardProps {
  listingData: any;
  class?: string;
}

interface CardDetailsList {
  applicant: string[];
  location: string[];
  material: MaterialProperty[][];
  volume: number;
  thumbnailUrl: string;
  image: string[];
  locationPointers: {
    lat: number;
    lng: number;
  }[];
}

const props = defineProps<ListingCardProps>();
const denom = ref("");
const showSpinner = ref(true);
const cardDetailsList = ref<CardDetailsList>();

const data = ref({
  id: props.listingData?.id,
  ipfsImage:
    props.listingData?.creditCollection?.creditData?.nodes[0].mediaFiles
      ?.nodes[0].url,
  pricePerCreditAmount: props.listingData?.pricePerCreditAmount,
  projectName:
    props.listingData?.creditCollection?.creditData?.nodes[0].projectName,
  applicant:
    props.listingData.creditCollection.creditData.nodes[0]
      .applicantDataByCreditDataId.nodes[0].name,
  materials:
    props.listingData.creditCollection.creditData.nodes[0].eventData.nodes[0]
      .material.nodes[0],
  material: findPlasticTypeInMaterial(
    props.listingData.creditCollection.creditData.nodes[0].eventData.nodes[0]
      .material.nodes,
  )?.value,
  country:
    props.listingData.creditCollection.creditData.nodes[0].eventData.nodes[0]
      .country,
});

onMounted(async () => {
  denom.value = await formatDenom(props.listingData?.pricePerCreditDenom);
  if (
    props.listingData?.creditCollection?.creditData?.nodes[0].mediaFiles
      ?.nodes[0].url !== ""
  ) {
    showSpinner.value = false;
  }

  cardDetailsList.value = getDetailsList(
    props.listingData.creditCollection.creditData.nodes,
  );
});

const handleClick = () => {
  tracking.trackEvent(TrackEvents.CLICKED_VIEW_DETAILS, {
    id: props.listingData.id,
    context: "collection list",
  });
};
</script>
<template>
  <div :class="props.class">
    <router-link
      :to="{ name: PageNames.LISTING, params: { id: props.listingData.id } }"
      class="h-full card card-side bg-lightGray border-lightGray card-bordered hover:border-greenPrimary cursor-pointer text-white font-Inter card-compact"
      @click="handleClick"
    >
      <figure class="max-h-32 min-h-32 w-56 m-2 mb-10 rounded-sm">
        <CustomSpinner v-if="showSpinner" :visible="showSpinner" />
        <CustomImage
          v-else
          image-class="max-h-32 max-w-56"
          :src="convertIPFStoHTTPS(data.ipfsImage) || auctionCard"
        />
      </figure>
      <div class="card-body flex-row justify-between">
        <div class="w-52">
          <h2 class="card-title font-normal text-title32">
            {{ data.projectName }}
          </h2>
          <p
            class="font-light text-title15 md:text-title18 flex-row flex items-center mt-3"
          >
            <img :src="iconLocation" alt="Location" />
            <span>{{ data.country }}</span>
          </p>
        </div>
        <dl class="">
          <dt class="details-title mb-5 font-Inter">Material</dt>
          <dd>
            <div
              v-for="(material, index) in cardDetailsList?.material"
              :key="`${material}-material-${index}`"
            >
              <h3>{{ findPlasticTypeInMaterial(material)?.value }}</h3>
              <ul class="list-disc ml-6">
                <li
                  v-for="property in stripPlasticTypeFromMaterial(material)"
                  :key="property.key"
                  class="text-title14"
                >
                  {{ prettifyCardProperty(property) }}
                </li>
              </ul>
            </div>
          </dd>
        </dl>
        <dl>
          <dt class="details-title mb-5">Collection org.</dt>
          <dd>{{ data.applicant }}</dd>
        </dl>
        <dl>
          <dt class="details-title mb-5">Total volume</dt>
          <dd>{{ listingData?.initialAmount }}</dd>
        </dl>
        <dl class="flex flex-col">
          <dt class="details-title mb-5">Price per kg removed</dt>
          <dd class="grow grid content-between">
            <span class="text-title32 font-bold"
              >{{ listingData?.pricePerCreditAmount / 1000000 }} USD</span
            >
            <dl class="flex flex-col">
              <dd class="text-title26 font-bold">
                {{ listingData?.initialAmount - listingData?.amount }} of
                {{ listingData?.initialAmount }} kg
              </dd>
              <dt class="text-title11 md:text-title12 font-light">
                removed by sponsors
              </dt>
            </dl>
          </dd>
        </dl>
      </div>
      <div class="absolute bottom-2 left-2 text-title11 text-white/60">
        ID: {{ props.listingData.denom }}
      </div>
    </router-link>
  </div>
</template>
