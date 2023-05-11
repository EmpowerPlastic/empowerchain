<script setup lang="ts">
import CreditsSearchBar from '@/components/CreditsSearchBar.vue'
import CreditCard from '@/components/CreditCard.vue'
import { ref } from 'vue'
import CustomPagination from '@/components/CustomPagination.vue'

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
</script>
<template>
  <div class="p-5 md:px-[10%] min-h-[60vh] text-white font-Inter">
    <div
      class="grid grid-cols-2 gap-4 max-w-[350px] bg-dividerGray w-full items-center rounded-xl border-[1.5px] border-borderGray p-1"
    >
      <div class="text-center rounded-xl p-2">My certificates</div>
      <div class="text-center bg-greenTabs rounded-xl p-2">My credits</div>
    </div>

    <CreditsSearchBar v-model="searchTerm" />

    <div v-for="credit in creditArray" :key="credit.id">
      <CreditCard :card-data="credit" />
    </div>

    <div class="flex justify-center md:justify-end my-10">
      <CustomPagination
        :page-count="20"
        v-model:current-page="pageNumber"
        @page-change="handlePageChange"
      />
    </div>
  </div>
</template>
<style scoped></style>
