<script setup lang="ts">
import { toast } from "vue3-toastify";
import { defineEmits, computed } from "vue";
import CustomImage from "@/components/CustomImage.vue";
import { convertIPFStoHTTPS } from "@/utils/utils";
import auctionCard from "@/assets/auctionCard.png";
export interface CreditCardProps {
  cardData: any;
}

// Define the expected properties from the parent component
const props = defineProps<CreditCardProps>();
const certificate = computed(() => {
  return props.cardData[0];
});
const image = computed(() => {
  return props.cardData[1];
});
// Define the events that this component can emit
const emit = defineEmits(["viewCertificate"]);

// Function to emit the 'viewCertificate' event
const viewCertificate = () => {
  if (certificate.value.id) {
    emit("viewCertificate", certificate.value.id);
  } else {
    toast.error("Certificate ID not found");
  }
};
</script>
<template>
  <div
    class="w-full rounded-lg bg-borderGray md:grid md:grid-cols-3 md:p-2 md:bg-lightBlack my-3"
  >
    <CustomImage
      v-if="image?.url"
      image-class="h-48 w-full rounded-lg max-w-sm"
      :src="convertIPFStoHTTPS(image?.url) || auctionCard"
    />
    <!--        Desktop UI-->
    <div class="hidden md:grid md:col-span-2">
      <div class="grid-cols-3 grid gap-3 p-5">
        <div class="col-span-1">
          <p class="text-title14 font-light text-textGray">CREDIT type</p>
          <p class="text-title18 font-bold">PCRD</p>
        </div>
        <div class="col-span-2 flex flex-col justify-between text-right">
          <p class="text-title32 font-bold">{{ certificate?.amount }} kg</p>
          <p class="text-title14 text-subTextGray mb-1">
            {{ certificate?.denom }}
          </p>
          <div>
            <button class="btn certificate-button" @click="viewCertificate">
              View certificate
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--        Mobile UI-->
    <div class="md:hidden">
      <div class="grid grid-cols-2 gap-1 pt-5 px-5">
        <div>
          <p class="text-title14 font-light">CREDIT type</p>
          <p class="text-title14 font-bold">PCRD</p>
        </div>
        <div class="text-right">
          <p class="text-title24 font-bold">{{ certificate?.amount }}</p>
          <p class="text-title14 font-light">{{ certificate?.denom }}</p>
        </div>
        <!--        <div>-->
        <!--          <p class="text-title14 font-light">Material</p>-->
        <!--          <p class="text-title14 font-bold">{{cardData.material}}</p>-->
        <!--        </div>-->
      </div>

      <div class="grid grid-col-1 gap-6 p-5">
        <button class="btn certificate-button" @click="viewCertificate">
          View certificate
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.certificate-button {
  @apply rounded-sm text-greenPrimary font-bold text-title14 bg-buttonBlack normal-case border-none;
}
</style>
