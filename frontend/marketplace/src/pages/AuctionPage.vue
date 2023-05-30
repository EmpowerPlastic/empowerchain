<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import AuctionResultsCard from "@/components/AuctionResultsCard.vue";
import CustomAlert from "@/components/CustomAlert.vue";
import CustomPagination from "@/components/CustomPagination.vue";
import {onMounted, ref} from "vue";
import CustomSpinner from "@/components/CustomSpinner.vue";
import {useQuery} from "@vue/apollo-composable";
import gql from "graphql-tag";
import {ListingsQueryBuilder} from "@/utils/query-builder";


const pageNumber = ref(1)
const itemsPerPage = ref(2)
const total = ref(20)
const data = ref()
const queryBuilder = new ListingsQueryBuilder();

const handlePageChange = (currentPage: number) => {
  pageNumber.value = currentPage
  queryBuilder.addPagination(itemsPerPage.value, (pageNumber.value - 1) * itemsPerPage.value)
  let query = queryBuilder.build()
  loadQueryData(query)
}

onMounted(() => {
  queryBuilder.addCreditTypes(['ETEST']);
  queryBuilder.addPagination(itemsPerPage.value, (pageNumber.value - 1) * itemsPerPage.value)
  let query = queryBuilder.build();
  loadQueryData(query)
})

const loadQueryData = (query: string) => {
  const {result, loading, error} = useQuery(gql`${query}`);
  data.value = {result, loading, error}
}
const handleSearch = (filterValues: any) => {
  queryBuilder.reset();
  queryBuilder.addLocations(filterValues.location);
  queryBuilder.addVolume(filterValues.volume.from, filterValues.volume.to);
  queryBuilder.addRegistrationDate(filterValues.registrationDate[0], filterValues.registrationDate[1]);
  queryBuilder.addOrganizations(filterValues.location);
  queryBuilder.addCreditTypes(['ETEST']);
  queryBuilder.addPricePerCredit(filterValues.price.from, filterValues.price.to);
  queryBuilder.addPagination(itemsPerPage.value, (pageNumber.value - 1) * itemsPerPage.value)
  let query = queryBuilder.build();
  loadQueryData(query)
  console.log(query, 'query')
}
</script>
<template>
  <div class="p-5 md:px-[10%] min-h-[50vh] font-Inter">
    <h1 class="text-title24 md:text-title38 text-white mb-5 ">Auctions </h1>
    <SearchBar @search-click="handleSearch"/>
    <CustomSpinner :visible="data?.value"/>
    <CustomAlert :visible="true" :label="`${data?.result.marketplaceListings?.totalCount || 0} auctions found`"/>
    <div v-for="auction in data?.result.marketplaceListings?.nodes" :key="auction.id">
      <AuctionResultsCard :card-data="auction"/>
    </div>
    <!--    <CustomAlert :visible="true" label="No more auctions found"/>-->
    <div class="flex justify-center md:justify-end my-10">
      <CustomPagination :total="data?.result.marketplaceListings?.totalCount" :item-per-page="itemsPerPage"
                        v-model:current-page="pageNumber"
                        @page-change="handlePageChange"/>
    </div>
  </div>
</template>
