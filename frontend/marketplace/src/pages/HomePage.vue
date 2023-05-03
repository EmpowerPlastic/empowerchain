<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import AuctionSection from "@/components/AuctionSection.vue";
import HomePageHeroBanner from "@/components/HomePageHeroBanner.vue";
</script>

<template>
  <div class="p-5 md:px-[10%]">
    <SearchBar/>
    <HomePageHeroBanner/>
    <AuctionSection/>
  </div>
</template>

