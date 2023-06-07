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
const showSpinner = ref(true)

onMounted(() => {
  queryBuilder.addCreditTypes(['PCRD']);
  queryBuilder.addPagination(5,0)
  let query = queryBuilder.build();
  loadQueryData(query)
})

const loadQueryData = (query: string) => {
  showSpinner.value = true
  const {result, loading, error} = useQuery(gql`${query}`);
  data.value = {result, loading, error}
  showSpinner.value = false
}

const handleSearch = (filterValues: any) => {
  queryBuilder.reset();
  if (filterValues.location.length > 0) {
    queryBuilder.addLocations(filterValues.location);
  }
  if (filterValues.volume.from || filterValues.volume.to) {
    queryBuilder.addVolume(filterValues.volume.from, filterValues.volume.to);
  }
  if (filterValues.registrationDate && (filterValues.registrationDate[0] || filterValues.registrationDate[1])) {
   queryBuilder.addRegistrationDate(filterValues.registrationDate[0], filterValues.registrationDate[1]);
  }
  if (filterValues.organization.length > 0) {
    queryBuilder.addOrganizations(filterValues.organization);
  }
  queryBuilder.addCreditTypes(['PCRD']);
  if (filterValues.price.from || filterValues.price.to) {
    queryBuilder.addPricePerCredit(filterValues.price.from, filterValues.price.to);
  }
  queryBuilder.addPagination(5, 0)
  queryBuilder.addTextSearch(filterValues.searchTerm)

  let query = queryBuilder.build();
  loadQueryData(query)
}

</script>
<template>
  <div class="p-5 md:px-[10%]">
    <!-- <SearchBar @search-click="handleSearch"/> -->
    <HomePageHeroBanner/>
    <CustomSpinner :visible="showSpinner"/>
    <template v-if="!showSpinner">
      <AuctionSection  :auction-array="data?.result?.marketplaceListings?.nodes"/>
    </template>
  </div>
</template>

