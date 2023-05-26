<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import AuctionResultsCard from "@/components/AuctionResultsCard.vue";
import CustomAlert from "@/components/CustomAlert.vue";
import CustomPagination from "@/components/CustomPagination.vue";
import {ref} from "vue";
import CustomSpinner from "@/components/CustomSpinner.vue";
import {useQuery} from "@vue/apollo-composable";
import gql from "graphql-tag";
import {ListingsQueryBuilder} from "@/utils/query-builder";

const dummyDataArray = [
  {
    id: 1,
    price: 100.00,
    availableCredits: "750/1500",
    volume: 300,
    applicant: "Plastic Collectors Ltd",
    location: "Portugal, Vigo",
    material: "Marine Litter",
    imageURL: "../../assets/auctionCard.png"
  },
  {
    id: 2,
    price: 100.00,
    availableCredits: "750/1500",
    volume: 300,
    applicant: "Plastic Collectors Ltd",
    location: "Portugal, Vigo",
    material: "Marine Litter",
    imageURL: "../../assets/auctionCard.png"
  },
  {
    id: 3,
    price: 100.00,
    availableCredits: "750/1500",
    volume: 300,
    applicant: "Plastic Collectors Ltd",
    location: "Portugal, Vigo",
    material: "Marine Litter",
    imageURL: "../../assets/auctionCard.png"
  },
  {
    id: 4,
    price: 100.00,
    availableCredits: "750/1500",
    volume: 300,
    applicant: "Plastic Collectors Ltd",
    location: "Portugal, Vigo",
    material: "Marine Litter",
    imageURL: "../../assets/auctionCard.png"
  },
]
const pageNumber = ref(1)

const queryBuilder = new ListingsQueryBuilder();
queryBuilder.addCreditTypes(['ETEST']);
const query = queryBuilder.build();

console.log(query, 'query')

const handlePageChange = (currentPage: number) => {
  console.log(currentPage, pageNumber.value)
}

const {result, loading, error, fetchMore} = useQuery(gql`${query}`);

</script>
<template>
  <div class="p-5 md:px-[10%] min-h-[50vh] font-Inter">
    <h1 class="text-title24 md:text-title38 text-white mb-5 ">Auctions</h1>
    <SearchBar/>
    <CustomSpinner :visible="loading.value"/>
    <CustomAlert :visible="true" label="5 auctions found"/>
    <div v-for="auction in result?.marketplaceListings?.nodes" :key="auction.id">
      <AuctionResultsCard :card-data="auction"/>
    </div>
    <CustomAlert :visible="true" label="No more auctions found"/>
    <div class="flex justify-center md:justify-end my-10">
      <CustomPagination :total="20" :item-per-page="5" v-model:current-page="pageNumber"
                        @page-change="handlePageChange"/>
    </div>
  </div>
</template>
