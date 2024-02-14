<script setup lang="ts">
import router from "@/router";
import { convertIPFStoHTTPS } from "@/utils/utils";
import auctionCard from "@/assets/auctionCard.png";
import { formatDenom } from "@/utils/wallet-utils";
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import { PageNames } from "@/router";
import CustomImage from "@/components/CustomImage.vue";
import tracking, { TrackEvents } from "@/utils/analytics";
import CustomSpinner from "./CustomSpinner.vue";
import { useListingVolume } from "@/utils/useListingVolume";
export interface AuctionCardProps {
  auctionData: any;
}
const props = defineProps<AuctionCardProps>();
const denom = ref("");
const showSpinner = ref(true);
const creditCollection = ref(props.auctionData.creditCollection);
const { volume } = useListingVolume(creditCollection);

onMounted(async () => {
  denom.value = await formatDenom(props.auctionData?.pricePerCreditDenom);
  if (
    props.auctionData?.creditCollection?.creditData?.nodes[0].mediaFiles
      ?.nodes[0].url !== ""
  ) {
    showSpinner.value = false;
  }
});

const handleViewDetailsClick = () => {
  tracking.trackEvent(TrackEvents.CLICKED_VIEW_DETAILS, {
    id: props.auctionData.id,
    context: "collection list",
  });
  router.push(`/auction/${encodeURIComponent(props.auctionData.id)}`);
};
</script>
<template>
  <router-link
    :to="{ name: PageNames.LISTING, params: { id: props.auctionData.id } }"
    class="bg-lightBlack rounded-lg md:rounded-sm flex flex-col"
  >
    <div v-if="showSpinner">
      <CustomSpinner :visible="showSpinner" />
    </div>
    <div v-if="showSpinner === false">
      <CustomImage
        image-class="h-[250px] w-full rounded-lg"
        :src="
          convertIPFStoHTTPS(
            auctionData?.creditCollection?.creditData?.nodes[0].mediaFiles
              ?.nodes[0].url,
          ) || auctionCard
        "
      />
    </div>
    <div class="grid grid-cols-2 p-3 gap-4 grow">
      <div>
        <div>
          <p
            class="font-Inter text-white text-title24 md:text-title32 font-bold leading-tight"
          >
            {{ auctionData?.pricePerCreditAmount / 1000000 }} ${{ denom }}
          </p>
          <p
            class="font-Inter text-white text-title15 md:text-title18 font-light leading-tight"
          >
            Price per credit
          </p>
        </div>
      </div>
      <div class="text-right">
        <p class="font-Inter text-white text-title13 md:text-title14 font-bold">
          {{ volume }}kg
        </p>
        <p
          class="font-Inter text-white text-title11 md:text-title12 font-light"
        >
          Volume
        </p>
      </div>
      <div class="flex flex-col justify-end">
        <p class="font-Inter text-white text-title14 font-bold">
          {{ auctionData?.amount }}/{{ auctionData?.initialAmount }}
        </p>
        <p class="font-Inter text-white text-title12 font-light">
          Available credits
        </p>
      </div>
      <div class="grid justify-end">
        <button
          type="button"
          class="btn w-fit self-end bg-greenPrimary border-greenPrimary rounded-sm font-Inter text-white md:text-title18 px-5 max-h-10 hover:bg-greenMedium hover:border-greenMedium font-light"
          @click="handleViewDetailsClick"
        >
          View details
        </button>
      </div>
    </div>
  </router-link>
</template>
