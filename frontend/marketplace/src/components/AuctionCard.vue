<script setup lang="ts">
import router from "@/router";
import { convertIPFStoHTTPS } from "@/utils/utils";
import auctionCard from "@/assets/auctionCard.png";
import { formatDenom } from "@/utils/wallet-utils";
import { onMounted, ref } from "vue";
export interface AuctionCardProps {
  auctionData: any;
}
const props = defineProps<AuctionCardProps>();
const denom = ref("");

onMounted(async () => {
  denom.value = await formatDenom(props.auctionData?.pricePerCreditDenom);
});
</script>
<template>
  <div class="bg-lightBlack rounded-lg md:rounded-sm">
    <img
      class="max-h-[250px] w-full rounded-lg"
      :src="
        convertIPFStoHTTPS(
          auctionData?.creditCollection?.creditData?.nodes[0].mediaFiles
            ?.nodes[0].url
        ) || auctionCard
      "
    />
    <div class="grid grid-cols-2 p-3 gap-4">
      <div>
        <div>
          <p
            class="font-Inter text-white text-title24 md:text-title32 font-bold"
          >
            {{ auctionData?.pricePerCreditAmount / 1000000 }} ${{ denom }}
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
            {{ auctionData?.amount }}/{{ auctionData?.initialAmount }}
          </p>
          <p class="font-Inter text-white text-title12">Available credits</p>
        </div>
      </div>
      <div>
        <button
          type="button"
          class="bg-greenPrimary w-full h-full rounded-sm font-Inter text-white md:text-title18 px-2"
          @click="router.push(`/auction/${encodeURIComponent(auctionData.id)}`)"
        >
          View details
        </button>
      </div>
    </div>
  </div>
</template>
