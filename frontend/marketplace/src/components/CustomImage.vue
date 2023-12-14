<script setup lang="ts">
import AuctionCard from "../assets/auctionCard.png";
export interface CustomImageProps {
  src: string;
  imageClass: string;
  fallbackImageSrc?: string;
}

const props = defineProps<CustomImageProps>();
const emits = defineEmits(["click"]);
const defaultImage = AuctionCard;
const handleClick = () => {
  emits("click");
};
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
  <button @click="handleClick" class="h-full w-full p-0 bg-transparent m-0">
    <img
      :class="imageClass || 'rounded-sm h-[200px] w-[200px]'"
      v-bind="props"
      @error="handleError"
    />
  </button>
</template>
