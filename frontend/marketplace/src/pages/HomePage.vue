<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import AuctionSection from "@/components/AuctionSection.vue";
import HomePageHeroBanner from "@/components/HomePageHeroBanner.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { onMounted, ref } from "vue";
import { ListingsQueryBuilder } from "@/utils/query-builder";
import { DEFAULT_CREDIT_TYPE } from "@/config/config";

const queryBuilder = new ListingsQueryBuilder();
const data = ref();
const filter = ref();
const showSpinner = ref(true);

onMounted(() => {
  queryBuilder.addCreditTypes([DEFAULT_CREDIT_TYPE]);
  queryBuilder.addPagination(5, 0);
  let query = queryBuilder.build();
  loadQueryData(query);
});

const loadQueryData = (query: string) => {
  showSpinner.value = true;
  const { result, loading, error } = useQuery(
    gql`
      ${query}
    `
  );
  data.value = { result, loading, error };
  showSpinner.value = false;
};

const handleSearch = (filterValues: any) => {
  filter.value = filterValues;
  queryBuilder.reset();
  if (filterValues.location.length > 0) {
    queryBuilder.addLocations(filterValues.location);
  }
  if (
    filterValues.volume &&
    (filterValues.volume[0] || filterValues.volume[1])
  ) {
    queryBuilder.addVolume(filterValues.volume[0], filterValues.volume[1]);
  }
  if (
    filterValues.registrationDate &&
    (filterValues.registrationDate[0] || filterValues.registrationDate[1])
  ) {
    queryBuilder.addRegistrationDate(
      filterValues.registrationDate[0],
      filterValues.registrationDate[1]
    );
  }
  if (filterValues.organization.length > 0) {
    queryBuilder.addOrganizations(filterValues.organization);
  }
  queryBuilder.addCreditTypes(["PCRD"]);
  if (filterValues.price && (filterValues.price[0] || filterValues.price[1])) {
    queryBuilder.addPricePerCredit(
      filterValues.price[0],
      filterValues.price[1]
    );
  }
  queryBuilder.addPagination(5, 0);
  queryBuilder.addTextSearch(filterValues.searchTerm);

  let query = queryBuilder.build();
  loadQueryData(query);
};
</script>
<template>
  <div class="p-5 md:px-[10%]">
    <SearchBar @search-click="handleSearch" />
    <HomePageHeroBanner />
    <CustomSpinner :visible="showSpinner" />
    <template v-if="!showSpinner">
      <AuctionSection
        :auction-array="data?.result?.marketplaceListings?.nodes"
        :filter-values="filter"
      />
    </template>
  </div>
</template>
