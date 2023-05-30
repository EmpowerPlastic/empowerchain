<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import AuctionSection from "@/components/AuctionSection.vue";
import HomePageHeroBanner from "@/components/HomePageHeroBanner.vue";
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import {onMounted, ref} from "vue";
import {ListingsQueryBuilder} from "@/utils/query-builder";

const queryBuilder = new ListingsQueryBuilder();
const data = ref()

onMounted(() => {
  queryBuilder.addCreditTypes(['ETEST']);
  queryBuilder.addPagination(5,0)
  let query = queryBuilder.build();
  loadQueryData(query)
})

const loadQueryData = (query: string) => {
  const {result, loading, error} = useQuery(gql`${query}`);
  data.value = {result, loading, error}
}

</script>
<template>
  <div class="p-5 md:px-[10%]">
    <SearchBar/>
    <HomePageHeroBanner/>
    <AuctionSection :auction-array="data?.result.marketplaceListings?.nodes"/>
  </div>
</template>

