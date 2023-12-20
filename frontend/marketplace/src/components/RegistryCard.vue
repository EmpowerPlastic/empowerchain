<script setup lang="ts">
import router from "@/router";
import auctionCard from "@/assets/auctionCard.png";

export interface RegistryCardProps {
  cardData: {
    retirererName: string;
    applicant: string;
    region: string;
    amount: number;
  };
}

const props = defineProps<RegistryCardProps>();
</script>
<template>
  <div
    class="bg-auctionBackground md:bg-lightBlack rounded-lg font-Inter text-white my-5 md:p-3 md:grid md:grid-cols-5 min-h-[150px]"
  >
    <img
      class="h-[220px] md:h-[140px] w-[100%] md:w-[250px] col-span-1 rounded-sm"
      :src="auctionCard"
    />

    <!--    Details for Mobile UI-->
    <div
      class="grid grid-rows-2 p-4 gap-4 md:hidden cursor-pointer"
      @click="router.push(`/registry/1`)"
    >
      <div>
        <p class="text-title24 font-bold mb-2">11,000 kgs</p>
        <p class="text-title18">The Coca-Cola Company</p>
      </div>
      <div class="flex justify-between">
        <div>
          <p class="text-title11 font-light">Region</p>
          <p class="text-title13 font-bold">Asia</p>
        </div>
        <div>
          <p class="text-title15 font-light">Applicant</p>
          <p class="text-title13 font-bold">Plastic Collectors Ltd</p>
        </div>
      </div>
    </div>

    <!--      Details for Desktop UI-->
    <div
      class="hidden md:grid grid-cols-4 gap-5 w-full col-span-4 py-5 px-6 ml-2 cursor-pointer"
      @click="router.push(`/registry/1`)"
    >
      <div class="col-span-1 ...">
        <p class="details-title">Retirerer Name</p>
        <p>The Coca-Cola Company</p>
      </div>
      <div class="col-span-1">
        <p class="details-title">Region</p>
        <p>Asia</p>
      </div>
      <div class="col-span-1">
        <p class="details-title">Applicant</p>
        <p>Plastic Collectors Ltd</p>
      </div>
      <div class="col-span-1">
        <div class="flex w-full h-full justify-center items-center">
          <p class="text-title32 font-bold">11,000 kgs</p>
        </div>
      </div>
    </div>
  </div>
</template>
