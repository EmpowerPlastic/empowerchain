<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import AuctionResultsCard from "@/components/AuctionResultsCard.vue";

const dummyData = {
  price: 100.00,
  availableCredits: "750/1500",
  volume: 300,
  applicant: "Plastic Collectors Ltd",
  location: "Portugal, Vigo",
  material: "Marine Litter",
  imageURL: "../../assets/auctionCard.png"
}
</script>
<template>
  <div class="p-5 md:px-[10%] min-h-[50vh] font-Inter">
    <h1 class="text-title24 text-white mb-5 ">Auctions</h1>
    <SearchBar/>
    <AuctionResultsCard :card-data="dummyData"/>
    <AuctionResultsCard :card-data="dummyData"/>
    <AuctionResultsCard :card-data="dummyData"/>
    <AuctionResultsCard :card-data="dummyData"/>
    <div class="md:hidden bg-darkGreen p-5 text-title15 rounded-sm text-center text-white">
      5 auctions found
    </div>


  </div>
</template>
