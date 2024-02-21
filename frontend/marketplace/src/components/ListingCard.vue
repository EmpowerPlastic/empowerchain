<script setup lang="ts">
import router from "@/router";
import { convertIPFStoHTTPS } from "@/utils/utils";
import auctionCard from "@/assets/auctionCard.png";
import { formatDenom } from "@/utils/wallet-utils";
import { onMounted, ref } from "vue";
import CustomImage from "@/components/CustomImage.vue";
import tracking, { TrackEvents } from "@/utils/analytics";
import CustomSpinner from "@/components/CustomSpinner.vue";
export interface ListingCardProps {
  listingData: any;
}
const props = defineProps<ListingCardProps>();
const denom = ref("");
const showSpinner = ref(true);

onMounted(async () => {
  denom.value = await formatDenom(props.listingData?.pricePerCreditDenom);
  if (
    props.listingData?.creditCollection?.creditData?.nodes[0].mediaFiles
      ?.nodes[0].url !== ""
  ) {
    showSpinner.value = false;
  }
  console.log(props);
});

const handleViewDetailsClick = () => {
  tracking.trackEvent(TrackEvents.CLICKED_VIEW_DETAILS, {
    id: props.listingData.id,
    context: "collection list",
  });
  router.push(`/auction/${encodeURIComponent(props.listingData.id)}`);
};
</script>
<template>
  <div>
    <router-link
      :to="`/auction/${encodeURIComponent(props.listingData.id)}`"
      class="card bg-lightGray border-lightGray card-bordered hover:border-greenPrimary cursor-pointer text-white font-Inter card-compact"
    >
      <figure>
        <CustomSpinner v-if="showSpinner" :visible="showSpinner" />
        <CustomImage
          v-else
          image-class="h-[250px] w-full"
          :src="
            convertIPFStoHTTPS(
              listingData?.creditCollection?.creditData?.nodes[0].mediaFiles
                ?.nodes[0].url,
            ) || auctionCard
          "
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title font-bold text-title32">Project clean oceans</h2>
        <p class="font-light text-title15 md:text-title18">
          PET from Sri Lanka by Verra
        </p>
        <div class="card-actions justify-between mt-4">
          <dl>
            <dd class="text-title26 font-bold">
              {{ listingData?.pricePerCreditAmount / 1000000 }} {{ denom }}
            </dd>
            <dt class="text-title11 md:text-title12 font-light">
              per kilo removed
            </dt>
          </dl>
          <dl>
            <dd class="text-title26 font-bold">
              {{ listingData?.initialAmount - listingData?.amount }} of
              {{ listingData?.initialAmount }} kg
            </dd>
            <dt class="text-title11 md:text-title12 font-light">
              removed by sponsors
            </dt>
          </dl>
        </div>
      </div>
    </router-link>

    <div class="bg-lightBlack rounded-lg md:rounded-sm">
      <div v-if="showSpinner">
        <CustomSpinner :visible="showSpinner" />
      </div>
      <div v-else>
        <CustomImage
          image-class="h-[250px] w-full rounded-lg"
          :src="
            convertIPFStoHTTPS(
              listingData?.creditCollection?.creditData?.nodes[0].mediaFiles
                ?.nodes[0].url,
            ) || auctionCard
          "
        />
      </div>
      <div class="grid grid-cols-2 p-3 gap-4">
        <div>
          <div>
            <p
              class="font-Inter text-white text-title24 md:text-title32 font-bold"
            >
              {{ listingData?.pricePerCreditAmount / 1000000 }} ${{ denom }}
            </p>
            <p class="font-Inter text-white text-title15 md:text-title18">
              Price per credit
            </p>
          </div>
        </div>
        <div>
          <div class="text-right">
            <p
              class="font-Inter text-white text-title13 md:text-title14 font-bold"
            >
              <!--            300kg-->
            </p>
            <p class="font-Inter text-white text-title11 md:text-title12">
              <!--            Volume-->
            </p>
          </div>
        </div>
        <div>
          <div>
            <p class="font-Inter text-white text-title14 font-bold">
              {{ listingData?.amount }}/{{ listingData?.initialAmount }}
            </p>
            <p class="font-Inter text-white text-title12">Available credits</p>
          </div>
        </div>
        <div>
          <button
            type="button"
            class="bg-greenPrimary w-full h-full rounded-sm font-Inter text-white md:text-title18 px-2"
            @click="handleViewDetailsClick"
          >
            View details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
