<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import AuctionSection from "@/components/AuctionSection.vue";
import HomePageHeroBanner from "@/components/HomePageHeroBanner.vue";
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import {onMounted} from "vue";

const loadData=()=>{
  const { result } = useQuery(gql`
      query {
        eventData(first:5){
    nodes{
      latitude
      longitude
      amount
      magnitude
    }
  }
      }
    `);
console.log(result)
}

onMounted(()=>{
  loadData()
})

</script>

<template>


  <div class="p-5 md:px-[10%]">
    <SearchBar/>
    <HomePageHeroBanner/>
    <AuctionSection/>
  </div>
</template>

