<script setup lang="ts">
import {ref} from "vue";
import CustomSearchBar from "@/components/CustomSearchBar.vue";
import CreditCard from "@/components/CreditCard.vue";
import CustomPagination from "@/components/CustomPagination.vue";

const creditArray = [
  {
    id: '1',
    creditType: 'PCRD',
    material: 'PP, PET',
    price: '100.00'
  },
  {
    id: '2',
    creditType: 'PCRD',
    material: 'PP, PET',
    price: '100.00'
  },
  {
    id: '3',
    creditType: 'PCRD',
    material: 'PP, PET',
    price: '100.00'
  },
  {
    id: '4',
    creditType: 'PCRD',
    material: 'PP, PET',
    price: '100.00'
  }
]
const pageNumber = ref(1)
const searchTerm = ref('')

const handlePageChange = (currentPage: number) => {
  console.log(currentPage, pageNumber.value)
}
const handleSearch = () => {
  console.log(searchTerm.value)
}
</script>
<template>
  <CustomSearchBar v-model="searchTerm" placeholder="Search Credits" @search-click="handleSearch"/>
  <div v-for="credit in creditArray" :key="credit.id">
    <CreditCard :card-data="credit"/>
  </div>
  <div class="flex justify-center md:justify-end my-10">
    <CustomPagination :total="20" :item-per-page="5" v-model:current-page="pageNumber"
                      @page-change="handlePageChange"/>
  </div>
</template>