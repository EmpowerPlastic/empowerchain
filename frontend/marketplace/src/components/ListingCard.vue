<script setup lang="ts">
import { PageNames } from "@/router";
import { convertIPFStoHTTPS } from "@/utils/utils";
import defaultListingImage from "@/assets/defaultListingImage.png";
import { onMounted, ref, computed } from "vue";
import CustomImage from "@/components/CustomImage.vue";
import tracking, { TrackEvents } from "@/utils/analytics";
import { findPlasticTypeInMaterial } from "@/utils/utils";
import { formatDenom } from "@/utils/wallet-utils";
export interface ListingCardProps {
  listingData: any;
  class?: string;
}
const props = defineProps<ListingCardProps>();
const showSpinner = ref(true);
const denom = ref("");

const data = ref({
  id: props.listingData?.id,
  ipfsImage:
    props.listingData?.creditCollection?.creditData?.nodes[0].mediaFiles
      ?.nodes[0].url,
  pricePerCreditAmount: props.listingData?.pricePerCreditAmount,
  projectName:
    props.listingData?.creditCollection?.creditData?.nodes[0].projectName,
});

const subheader = computed(() => {
  const materials =
    props.listingData.creditCollection.creditData.nodes[0].eventData.nodes[0]
      .material;
  const applicant =
    props.listingData.creditCollection.creditData.nodes[0]
      .applicantDataByCreditDataId.nodes[0].name;
  const material = findPlasticTypeInMaterial(materials.nodes)?.value;
  const country =
    props.listingData.creditCollection.creditData.nodes[0].eventData.nodes[0]
      .country;
  return `${material} from ${country} by ${applicant}`;
});

onMounted(async () => {
  denom.value = await formatDenom(props.listingData?.pricePerCreditDenom);
  if (
    props.listingData?.creditCollection?.creditData?.nodes[0].mediaFiles
      ?.nodes[0].url !== ""
  ) {
    showSpinner.value = false;
  }
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
      class="h-full card bg-lightGray border-lightGray card-bordered hover:border-greenPrimary cursor-pointer text-white font-Inter card-compact"
      @click="handleClick"
    >
      <figure>
        <CustomImage
          :showSpinner="showSpinner"
          image-class="h-[250px] w-full"
          :src="convertIPFStoHTTPS(data.ipfsImage) || defaultListingImage"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title font-bold text-title32">
          {{ data.projectName }}
        </h2>
        <p class="font-light text-title15 md:text-title18">
          {{ subheader }}
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
  </div>
</template>
