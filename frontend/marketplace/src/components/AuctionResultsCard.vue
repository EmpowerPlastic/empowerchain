<script setup lang="ts">
import type { MarketplaceListing } from "@/types/GraphqlSchema";
import router from "@/router";
import auctionCard from "@/assets/auctionCard.png";
import type { MaterialProperty } from "@/types/GraphqlSchema";
import {
  getDetailsList,
  prettifyCardProperty,
  stripPlasticTypeFromMaterial,
  findPlasticTypeInMaterial,
} from "@/utils/utils";
import { formatDenom } from "@/utils/wallet-utils";
import { computed, onMounted, ref } from "vue";
import CustomImage from "@/components/CustomImage.vue";

export interface AuctionResultsCardProps {
  cardData: MarketplaceListing & {
    creditCollection: any;
  };
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

const props = defineProps<AuctionResultsCardProps>();
const denom = ref("");
const cardDetailsList = ref<CardDetailsList>();
const applicant = computed<string>(() => {
  return cardDetailsList.value?.applicant[0] ?? "";
});

onMounted(async () => {
  denom.value = await formatDenom(props.cardData?.pricePerCreditDenom);
  cardDetailsList.value = getDetailsList(
    props.cardData.creditCollection.creditData.nodes,
  );
});
</script>
<template>
  <div
    class="bg-auctionBackground md:bg-lightBlack rounded-lg font-Inter text-white my-5 md:p-3 md:grid md:grid-cols-5 min-h-[180px]"
  >
    <CustomImage
      :src="cardDetailsList?.thumbnailUrl || auctionCard"
      image-class="max-h-[200px] w-full rounded-sm"
    />

    <!--      Details for Mobile UI-->
    <div class="grid grid-cols-2 p-5 gap-4 md:hidden">
      <div>
        <p class="text-title24 font-bold">
          ${{ cardData?.pricePerCreditAmount / 1000000 }}
        </p>
        <p class="text-title15 font-light">Price per credit</p>
      </div>
      <div class="text-right">
        <p class="text-title13 font-bold">{{ cardDetailsList?.volume }}kg</p>
        <p class="text-title11 font-light">Volume</p>
      </div>
      <div>
        <p class="text-title14 font-bold">
          {{ cardData?.amount }}/{{ cardData?.initialAmount }}
        </p>
        <p class="text-title12 font-light">Available credits</p>
      </div>
      <div>
        <button
          class="btn bg-greenPrimary w-full h-full rounded-sm text-title15 px-2 normal-case font-normal"
          @click="router.push(`/auction/${encodeURIComponent(cardData.id)}`)"
        >
          View details
        </button>
      </div>
    </div>

    <!--      Details for Desktop UI-->
    <div
      class="hidden md:grid grid-cols-5 gap-5 w-full col-span-4 py-2 px-6 ml-2 cursor-pointer"
      @click="router.push(`/auction/${encodeURIComponent(cardData.id)}`)"
    >
      <div class="col-span-1 ...">
        <p class="details-title">Material</p>
        <div
          v-for="(material, index) in cardDetailsList?.material"
          :key="`${cardData.id}-material-${index}`"
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
      </div>
      <div class="col-span-1">
        <p class="details-title">Location</p>
        <p>{{ cardData.creditCollection.nodes }}</p>
        <ul class="list-disc ml-6">
          <li v-for="location in cardDetailsList?.location" :key="location">
            {{ location }}
          </li>
        </ul>
      </div>
      <div class="col-span-1">
        <p class="details-title">Collection Organisation</p>
        <h3>{{ applicant }}</h3>
      </div>
      <div class="col-span-1">
        <p class="details-title">Volume</p>
        <p>{{ cardDetailsList?.volume }}kg</p>
      </div>
      <div class="col-span-1 text-right">
        <p class="text-title32 font-bold leading-7 mt-6">
          {{ cardData?.pricePerCreditAmount / 1000000 }}
        </p>
        <p class="text-title14 font-bold text-textGray leading-6">
          {{ denom }}
        </p>
        <p class="text-title18 leading-3 font-light">Price per credit</p>

        <p class="text-title14 font-bold mt-7 leading-[13px]">
          {{ cardData?.amount }}/{{ cardData?.initialAmount }}
        </p>
        <p class="text-title12 font-bold font-light">Available credits</p>
      </div>
    </div>
  </div>
</template>
