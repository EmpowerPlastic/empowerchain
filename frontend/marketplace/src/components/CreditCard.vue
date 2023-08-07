<script setup lang="ts">
import RetireCreditsModal from "@/components/RetireCreditsModal.vue";
import { ref } from "vue";
import ImageCarousel from "@/components/ImageCarousel.vue";
import { getDetailsList } from "@/utils/utils";
import TransferCreditsModal from "@/components/TransferCreditsModal.vue";

export interface CreditCardProps {
  cardData: any;
}

const props = defineProps<CreditCardProps>();

const showRetireCreditsModal = ref(false);
const showTransferCreditsModal = ref(false);
</script>
<template>
  <RetireCreditsModal
    v-model:show-modal="showRetireCreditsModal"
    :denom="cardData?.creditCollection?.denom"
    :available-credits="cardData.amountActive"
    :address="cardData?.wallet?.address"
  />
  <TransferCreditsModal
    v-model:show-modal="showTransferCreditsModal"
    :denom="cardData?.creditCollection?.denom"
    :address="cardData?.wallet?.address"
  />
  <div
    class="w-full rounded-lg bg-borderGray md:grid md:grid-cols-3 md:p-2 md:bg-lightBlack my-3"
  >
    <div class="max-h-[200px]">
      <ImageCarousel
        :image-array="
          getDetailsList(cardData.creditCollection.creditData.nodes).image
        "
      />
    </div>
    <!--        Desktop UI-->
    <div class="hidden md:grid md:col-span-2">
      <div class="grid-cols-4 grid gap-3 p-5">
        <div class="col-span-1">
          <p class="text-title14 font-light text-textGray mb-1">CREDIT type</p>
          <p class="text-title18">
            {{ cardData?.creditCollection?.creditType }}
          </p>
        </div>
        <div class="col-span-1">
          <p class="text-title14 font-light text-textGray mb-1">Material</p>
          <ul class="list-disc ml-6">
            <li
              class="text-title18"
              v-for="material in getDetailsList(
                cardData.creditCollection.creditData.nodes
              ).material"
              :key="material.key"
            >
              {{ material.value }}
            </li>
          </ul>
        </div>
        <div class="col-span-2 flex flex-col justify-between text-right">
          <div>
            <p class="text-title32 font-bold">{{ cardData.amountActive }}</p>
            <p class="text-title24 text-subTextGray">
              {{ cardData?.creditCollection?.denom }}
            </p>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <button
              class="btn certificate-button"
              @click="showTransferCreditsModal = true"
            >
              Transfer credits
            </button>
            <button
              class="btn certificate-button"
              @click="showRetireCreditsModal = true"
            >
              Retire credits
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
          <p class="text-title14 font-bold">
            {{ cardData?.creditCollection?.creditType }}
          </p>
        </div>
        <div class="text-right">
          <p class="text-title24 font-bold">{{ cardData.amountActive }}</p>
          <p class="text-title14 font-light">
            {{ cardData?.creditCollection?.denom }}
          </p>
        </div>
        <div>
          <p class="text-title14 font-light">Material</p>
          <p class="text-title14 font-bold">{{ cardData.material }}</p>
          <ul class="list-disc ml-6">
            <li
              class="text-title14 font-bold"
              v-for="material in getDetailsList(
                cardData.creditCollection.creditData.nodes
              ).material"
              :key="material.key"
            >
              {{ material.value }}
            </li>
          </ul>
        </div>
      </div>

      <div class="grid grid-col-1 gap-6 p-5">
        <button
          class="btn certificate-button"
          @click="showTransferCreditsModal = true"
        >
          Transfer credits
        </button>
        <button
          class="btn certificate-button"
          @click="showRetireCreditsModal = true"
        >
          Retire credits
        </button>
      </div>
    </div>
  </div>
</template>
