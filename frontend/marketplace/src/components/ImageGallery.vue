<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { ref, watch } from "vue";
import CustomImage from "@/components/CustomImage.vue";
import CustomSpinner from "@/components/CustomSpinner.vue";

export interface ImageGalleryProps {
  imageArray: string[];
}

const props = defineProps<ImageGalleryProps>();
const activeImageURL = ref(props.imageArray[0]);
const showSpinner = ref(true);

watch(
  () => props.imageArray,
  (newValue) => {
    activeImageURL.value = newValue[0];
    showSpinner.value = false;
  },
);

const handleActiveImage = (url: string) => {
  activeImageURL.value = url;
};
</script>
<template>
  <div class="flex flex-row h-[520px] my-5">
    <div class="flex w-[75%] mr-5">
      <div class="flex-auto bg-dividerGray rounded-sm">
        <CustomImage
          :src="activeImageURL"
          image-class="rounded-sm h-full w-full object-contain"
          :showSpinner="showSpinner"
        />
      </div>
    </div>

    <div class="flex w-[25%] bg-dividerGray rounded-sm p-2">
      <div
        class="flex-auto grid auto-rows-min grid-cols-2 gap-4 h-full overflow-auto"
      >
        <div
          v-for="url in [...imageArray]"
          class="h-[160px] overflow-hidden bg-darkGray rounded-sm cursor-pointer"
          :key="url"
        >
          <CustomImage
            @click="handleActiveImage(url)"
            :src="url"
            image-class="rounded-sm h-full w-full object-contain"
            :id="url"
            :key="url"
            :showSpinner="showSpinner"
          />
        </div>
      </div>
    </div>
  </div>
</template>
