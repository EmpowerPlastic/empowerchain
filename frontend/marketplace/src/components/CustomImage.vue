<script setup lang="ts">
import AuctionCard from "../assets/auctionCard.png";
import CustomSpinner from "@/components/CustomSpinner.vue";
export interface CustomImageProps {
  src: string;
  imageClass: string;
  fallbackImageSrc?: string;
  showSpinner?: boolean;
}

const props = defineProps<CustomImageProps>();
const defaultImage = AuctionCard;

const handleError = (event: Event) => {
  const img = event.target as HTMLImageElement;

  if (props.fallbackImageSrc) {
    img.src = props.fallbackImageSrc;
  } else {
    img.src = defaultImage;
  }
};
</script>
<template>
  <CustomSpinner v-if="showSpinner" :visible="showSpinner" />
  <img
    v-else
    :class="imageClass || 'rounded-sm h-[200px] w-[200px]'"
    v-bind="props"
    @error="handleError"
  />
</template>
