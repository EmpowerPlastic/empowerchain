<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { ref, watch } from "vue";
import CustomImage from "@/components/CustomImage.vue";

export interface ImageGalleryProps {
  imageArray: string[];
}

const props = defineProps<ImageGalleryProps>();
const activeImageURL = ref(props.imageArray[0]);

watch(
  () => props.imageArray,
  (newValue) => {
    activeImageURL.value = newValue[0];
  },
);

const handleActiveImage = (url: string) => {
  activeImageURL.value = url;
};
</script>
<template>
  <div class="grid grid-cols-6 gap-5 max-h-[500px] my-5 w-full">
    <div class="col-span-4 w-full">
      <CustomImage
        :src="activeImageURL"
        image-class="rounded-sm h-[500px] w-full object-none"
      />
    </div>
    <div class="max-h-[500px] px-3 col-span-2 overflow-auto">
      <button class="btn btn-circle scroll-button">
        <img src="../assets/scrollTopIcon.svg" />
      </button>
      <button class="btn absolute btn btn-circle scroll-button mt-[455px]">
        <img src="../assets/scrollBottomIcon.svg" />
      </button>
      <div class="grid grid-cols-2 gap-5">
        <CustomImage
          @click="handleActiveImage(url)"
          :src="url"
          image-class="rounded-sm h-[150px] w-full cursor-pointer"
          v-for="url in imageArray"
          :id="url"
          :key="url"
        />
      </div>
    </div>
  </div>
</template>
