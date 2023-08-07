<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import AuctionResultsCard from "@/components/AuctionResultsCard.vue";
import CustomAlert from "@/components/CustomAlert.vue";
import CustomPagination from "@/components/CustomPagination.vue";
import { onMounted, ref } from "vue";
import CustomSpinner from "@/components/CustomSpinner.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ListingsQueryBuilder } from "@/utils/query-builder";
import { DEFAULT_CREDIT_TYPE } from "@/config/config";
import { useRoute } from "vue-router";

const router = useRoute();
const pageNumber = ref(1);
const itemsPerPage = ref(5);
const data = ref();
const filterVal = ref();
const showSpinner = ref(true);
const queryBuilder = new ListingsQueryBuilder();

const handlePageChange = (currentPage: number) => {
  pageNumber.value = currentPage;
  queryBuilder.addPagination(
    itemsPerPage.value,
    (pageNumber.value - 1) * itemsPerPage.value
  );
  let query = queryBuilder.build();
  loadQueryData(query);
};

const handleQueryParam = () => {
  if (Object.keys(router.query).length !== 0) {
    const objectOfArrays = router.query;
    const filter: any = {};
    for (const key in objectOfArrays) {
      if (Object.prototype.hasOwnProperty.call(objectOfArrays, key)) {
        const queryValue = objectOfArrays[key];
        if (typeof queryValue === "string") {
          filter[key] = JSON.parse(queryValue);
        } else if (Array.isArray(queryValue)) {
          filter[key] = queryValue.map((value) =>
            typeof value === "string" ? JSON.parse(value) : null
          );
        } else {
          filter[key] = null;
        }
      }
    }
    filterVal.value = filter;
    handleSearch(filter);
  } else {
    queryBuilder.addCreditTypes([DEFAULT_CREDIT_TYPE]);
    queryBuilder.addPagination(
      itemsPerPage.value,
      (pageNumber.value - 1) * itemsPerPage.value
    );
    let query = queryBuilder.build();
    loadQueryData(query);
  }
};

onMounted(() => {
  handleQueryParam();
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
  pageNumber.value = 1;
  queryBuilder.reset();
  if (filterValues?.location?.length > 0) {
    queryBuilder.addLocations(filterValues.location);
  }
  if (
    filterValues?.volume &&
    (filterValues.volume[0] || filterValues.volume[1])
  ) {
    queryBuilder.addVolume(filterValues.volume[0], filterValues.volume[1]);
  }
  if (
    filterValues?.registrationDate &&
    (filterValues.registrationDate[0] || filterValues.registrationDate[1])
  ) {
    queryBuilder.addRegistrationDate(
      new Date(filterValues.registrationDate[0]),
      new Date(filterValues.registrationDate[1])
    );
  }
  if (filterValues?.organization?.length > 0) {
    queryBuilder.addOrganizations(filterValues.organization);
  }
  if (filterValues?.price && (filterValues.price[0] || filterValues.price[1])) {
    queryBuilder.addPricePerCredit(
      filterValues.price[0],
      filterValues.price[1]
    );
  }
  queryBuilder.addPagination(
    itemsPerPage.value,
    (pageNumber.value - 1) * itemsPerPage.value
  );
  queryBuilder.addTextSearch(filterValues.searchTerm);

  let query = queryBuilder.build();
  loadQueryData(query);
};
</script>
<template>
  <div class="p-5 md:px-[10%] min-h-[50vh] font-Inter">
    <h1 class="text-title24 md:text-title38 text-white mb-5">Auctions</h1>
    <SearchBar @search-click="handleSearch" :filter-values="filterVal" />
    <CustomSpinner :visible="showSpinner" />
    <template v-if="!showSpinner">
      <CustomAlert
        :visible="true"
        :label="`${
          data?.result?.marketplaceListings?.totalCount || 0
        } auctions found`"
      />
      <div
        v-for="auction in data?.result?.marketplaceListings?.nodes"
        :key="auction.id"
      >
        <AuctionResultsCard :card-data="auction" />
      </div>
      <!--    <CustomAlert :visible="true" label="No more auctions found"/>-->
      <div class="flex justify-center md:justify-end my-10">
        <CustomPagination
          :total="data?.result?.marketplaceListings?.totalCount"
          :item-per-page="itemsPerPage"
          v-model:current-page="pageNumber"
          @page-change="handlePageChange"
        />
      </div>
    </template>
  </div>
</template>
