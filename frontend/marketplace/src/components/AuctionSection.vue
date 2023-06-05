<script setup lang="ts">
import AuctionCard from "@/components/AuctionCard.vue";
import router from "@/router";
export interface AuctionSectionProps{
  auctionArray:any[]
}
defineProps<AuctionSectionProps>()
</script>
<template>
  <!--Auctions section-->
  <div class="mt-5">
    <p class="font-Inter text-white text-title24 mb-3 md:text-title38">
      Feature Auctions
    </p>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
      <AuctionCard v-for="auction in auctionArray" :key="auction" :auction-data="auction"/>
      <div
          class="grid grid-rows-3 p-4 bg-greenPrimary h-[346px] md:h-full w-full rounded-sm font-Inter text-title32 text-white font-bold cursor-pointer" @click="router.push('/auction')">
        <div class="row-start-2 flex flex-row justify-center items-center">
          View all auctions
        </div>
        <div class="row-start-3 flex flex-row justify-end ">
          <img class="h-14 self-end" src="../assets/viewAllIcon.svg">
        </div>
      </div>
    </div>
  </div>
</template>