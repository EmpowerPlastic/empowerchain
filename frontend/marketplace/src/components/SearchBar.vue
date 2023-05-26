<script setup lang="ts">
import {ref} from "vue";
import SearchFilterSelect from "@/components/SearchFilterSelect.vue";
import SearchFilterRange from "@/components/SearchFilterRange.vue";

const filterValues = ref({
  volume: {from: '', to: ''},
  location: '',
  registrationDate: {startDate: '', endDate: ''},
  organization: '',
  creditType: '',
  price: {from: '', to: ''}
})

const options = ref([
  {label: 'One', value: 'A'},
  {label: 'Two', value: 'B'},
  {label: 'Three', value: 'C'}
])

</script>
<template>
  <!--    Search Auction Mobile-->
  <div class="md:hidden input-group w-full mb-5  bg-white rounded-full !rounded-lg px-1 border-none font-Inter">
    <img class="ml-3" src="../assets/searchIcon.svg">
    <input type="text" placeholder="Search…" class="input w-full bg-white border-none"/>
    <div class="dropdown dropdown-end">
      <button class="btn btn-ghost bg-white !rounded-lg border-none p-0">
        <img class="mr-4" src="../assets/filterIcon.svg">
      </button>
      <div
          class="dropdown-content menu p-2 shadow bg-dropdownBlack rounded-lg w-[85vw] p-5 gap-4 font-normal">
        <div>
          <p class="text-title14 text-dropDownText">Location</p>
          <SearchFilterSelect :options="options" v-model="filterValues.location" placeholder="Select Location"/>
        </div>
        <div>
          <p class="filter-subtitle">VOLUME</p>
          <SearchFilterRange v-model:from="filterValues.volume.from" v-model:to="filterValues.volume.to"
                             placeholder="Select Volume" unit="Kg" class="ml-1"/>
        </div>
        <div>
          <p class="filter-subtitle">REGISTRATION DATE</p>
          <VueDatePicker :enable-time-picker="false" placeholder="Select date"
                         v-model="filterValues.registrationDate" range
                         multi-calendars dark hide-input-icon/>
        </div>
        <div>
          <p class="filter-subtitle">COLLECTOR ORGANISATION</p>
          <SearchFilterSelect :options="options" v-model="filterValues.organization" placeholder="Select collector"/>
        </div>
        <div>
          <p class="filter-subtitle">CREDIT TYPE</p>
          <SearchFilterSelect :options="options" v-model="filterValues.creditType" placeholder="Select credit"/>
        </div>
        <div>
          <p class="filter-subtitle">PRICE PER CREDIT</p>
          <SearchFilterRange v-model:from="filterValues.price.from" v-model:to="filterValues.price.to"
                             placeholder="Select Price" unit="$" class="ml-1"/>
        </div>
      </div>
    </div>
  </div>

  <!--Search and filter Desktop-->
  <div class="hidden md:grid grid-flow-row auto-rows-max  mb-10 font-Inter h-full">
    <div class="flex flex-row bg-darkGray w-full p-4 rounded-t-sm">
      <input class="w-full rounded-sm bg-darkGray px-3 h-12 text-lightGray text-title24"
             placeholder="Search auctions"/>
      <button class="btn bg-greenPrimary w-[60px] ml-4 rounded-sm">
        <img class="h-5" src="../assets/searchIconWhite.svg">
      </button>
    </div>
    <div class="grid grid-cols-6  divide-x divide-dividerGray bg-mediumGray w-full rounded-b-sm">
      <div class="filter-box">
        <p class="filter-subtitle mb-1">LOCATION</p>
        <SearchFilterSelect :options="options" v-model="filterValues.location" placeholder="Select Location"/>
      </div>
      <div class="filter-box">
        <p class="filter-subtitle">VOLUME</p>
        <SearchFilterRange v-model:from="filterValues.volume.from" v-model:to="filterValues.volume.to"
                           placeholder="Select Volume" unit="Kg"/>
      </div>
      <div class="filter-box">
        <p class="filter-subtitle">REGISTRATION DATE</p>
        <VueDatePicker :enable-time-picker="false" placeholder="Select date"
                       v-model="filterValues.registrationDate" range
                       multi-calendars dark hide-input-icon/>
      </div>
      <div class="filter-box">
        <p class="filter-subtitle mb-1">COLLECTOR ORGANISATION</p>
        <SearchFilterSelect :options="options" v-model="filterValues.organization" placeholder="Select collector"/>
      </div>
      <div class="filter-box">
        <p class="filter-subtitle mb-1">CREDIT TYPE</p>
        <SearchFilterSelect :options="options" v-model="filterValues.creditType" placeholder="Select credit"/>
      </div>
      <div class="filter-box">
        <p class="filter-subtitle">PRICE PER CREDIT</p>
        <SearchFilterRange v-model:from="filterValues.price.from" v-model:to="filterValues.price.to"
                           placeholder="Select Price" unit="$"/>
      </div>

    </div>
  </div>
</template>
