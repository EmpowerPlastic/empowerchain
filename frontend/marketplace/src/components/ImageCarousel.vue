<script setup lang="ts">
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import CustomImage from "@/components/CustomImage.vue";

export interface ImageCarouselProps {
  imageArray: string[];
}
defineProps<ImageCarouselProps>();
</script>

<template>
  <Carousel>
    <Slide v-for="url in imageArray" :key="url">
      <CustomImage
        :src="url"
        image-class="min-h-48 max-h-[200px] w-full rounded-lg"
      />
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
<style>
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  height: 20px !important;
  width: 20px !important;
  border-radius: 50%;
  padding: 10px;
  color: #00e33a;
  background: rgba(255, 255, 255, 0.38) !important;
}
</style>
