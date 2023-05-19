<script setup lang="ts">
import {ref} from 'vue'
import CreditCard from '@/components/CreditCard.vue'
import CustomPagination from '@/components/CustomPagination.vue'
import CertificateCard from "@/components/CertificateCard.vue";
import CustomSearchBar from "@/components/CustomSearchBar.vue";

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
const activeTab = ref('MyCertificates')
const handlePageChange = (currentPage: number) => {
  console.log(currentPage, pageNumber.value)
}
</script>
<template>
  <div class="p-5 md:px-[10%] min-h-[60vh] text-white font-Inter">
    <div
        class="grid grid-cols-2 gap-4 max-w-[350px] bg-dividerGray w-full items-center rounded-xl border-[1.5px] border-borderGray p-1"
    >
      <div
          :class="[activeTab==='MyCertificates' ? 'text-center rounded-xl p-2 bg-greenTabs rounded-xl p-2' : 'text-center rounded-xl p-2']"
          @click="activeTab='MyCertificates'">My certificates
      </div>
      <div
          :class="[activeTab==='MyCredits' ? 'text-center rounded-xl p-2 bg-greenTabs rounded-xl p-2' : 'text-center rounded-xl p-2']"
          @click="activeTab='MyCredits'">My credits
      </div>
    </div>


    <template v-if="activeTab==='MyCertificates'">
      <CustomSearchBar v-model="searchTerm"/>
      <div v-for="credit in creditArray" :key="credit.id">
        <CertificateCard :card-data="credit"/>
      </div>
    </template>

    <template v-if="activeTab==='MyCredits'">
      <CustomSearchBar v-model="searchTerm"/>
      <div v-for="credit in creditArray" :key="credit.id">
        <CreditCard :card-data="credit"/>
      </div>
    </template>


    <div class="flex justify-center md:justify-end my-10">
      <CustomPagination :total="20" :item-per-page="5" v-model:current-page="pageNumber"
                        @page-change="handlePageChange"/>
    </div>
  </div>
</template>
<style scoped></style>
