<script setup lang="ts">
import ListingCard from "@/components/ListingCard.vue";
import { RouterLink } from "vue-router";
import { PageNames } from "@/router";
import viewAllIcon from "@/assets/viewAllIcon.svg";

export interface FeaturedListingsProps {
  listings: any[];
  filterValues: any;
}

defineProps<FeaturedListingsProps>();
</script>
<template>
  <!--Listings section-->
  <div class="mt-5">
    <p class="font-Inter text-white text-title24 mb-3 md:text-title38">
      Feature projects
    </p>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
      <ListingCard
        v-for="listing in listings"
        :key="listing"
        :listing-data="listing"
      />
      <router-link
        class="grid grid-rows-3 p-4 bg-greenPrimary h-[346px] md: md:min-h-[346px] md:h-full w-full rounded-sm font-Inter text-title32 text-white font-bold cursor-pointer"
        :to="{ name: PageNames.LISTINGS }"
      >
        <div class="row-start-2 flex flex-row justify-center items-center">
          View all projects
        </div>
        <div class="row-start-3 flex flex-row justify-end">
          <img class="h-14 self-end" :src="viewAllIcon" />
        </div>
      </router-link>
    </div>
  </div>
</template>
