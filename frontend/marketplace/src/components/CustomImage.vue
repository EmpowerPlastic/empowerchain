<script setup lang="ts">
import defaultListingImage from "../assets/defaultListingImage.png";
export interface CustomImageProps {
  src: string;
  imageClass: string;
  fallbackImageSrc?: string;
}

const props = defineProps<CustomImageProps>();

const handleError = (event: Event) => {
  const img = event.target as HTMLImageElement;

  if (props.fallbackImageSrc) {
    img.src = props.fallbackImageSrc;
  } else {
    img.src = defaultListingImage;
  }
};
</script>
<template>
  <img
    :class="imageClass || 'rounded-sm h-[200px] w-[200px]'"
    v-bind="props"
    @error="handleError"
  />
</template>
