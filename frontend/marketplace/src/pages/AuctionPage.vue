<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
</script>
<template>
  <div class="p-5 md:px-[10%] min-h-[50vh] font-Inter">
    <h1 class="text-title24 text-white mb-5 ">Auctions</h1>
    <SearchBar/>

    <div class="bg-darkGreen p-5 text-title15 rounded-sm text-center text-white">
      5 auctions found
    </div>

    <div class="bg-auctionBackground rounded-lg font-Inter text-white my-5 md:p-3 md:grid md:grid-cols-5">
      <img src="../assets/auctionCard.png">



<!--      Details for Mobile UI-->
      <div class="grid grid-cols-2 p-5 gap-4 md:hidden">
        <div>
            <p class="text-title24 font-bold">
              $100.00
            </p>
            <p class="text-title15 font-light">
              Price per credit
            </p>
        </div>
        <div class="text-right">
          <p class="text-title13 font-bold">
            300kg
          </p>
          <p class="text-title11 font-light">
            Volume
          </p>
        </div>
        <div>
          <p class="text-title14 font-bold">
            750/1500
          </p>
          <p class="text-title12 font-light">
            Available credits
          </p>
        </div>
        <div>
          <button  class="btn bg-greenPrimary w-full h-full rounded-sm text-title15 px-2 normal-case font-normal">
            View details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>