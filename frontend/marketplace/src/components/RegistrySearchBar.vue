<script setup lang="ts">
import { ref } from "vue";
import SearchFilterSelect from "@/components/SearchFilterSelect.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const filterValues = ref({
  retirerer: [],
  applicant: [],
  region: [],
  searchTerm: "",
});

const emitSearch = defineEmits(["searchClick"]);

const handleSearchButtonClick = () => {
  emitSearch("searchClick", filterValues.value);
};

const applicantData: any = useQuery(gql`
  query {
    applicantData {
      nodes {
        id
        name
      }
    }
  }
`);
const locationData: any = useQuery(gql`
  query {
    countries {
      nodes {
        id
      }
    }
  }
`);
</script>
<template>
  <!--    Search Auction Mobile-->
  <div
    class="md:hidden input-group w-full mb-5 bg-white rounded-full !rounded-lg px-1 border-none font-Inter"
  >
    <img class="ml-3" src="../assets/searchIcon.svg" />
    <input
      type="text"
      placeholder="Search…"
      class="input w-full bg-white border-none"
      v-model="filterValues.searchTerm"
    />
    <div class="dropdown dropdown-end">
      <button class="btn btn-ghost bg-white !rounded-lg border-none p-0">
        <img class="mr-4" src="../assets/filterIcon.svg" />
      </button>
      <div
        class="dropdown-content menu p-2 shadow bg-dropdownBlack rounded-lg w-[85vw] p-5 gap-4 font-normal"
      >
        <div>
          <p class="text-title14 text-dropDownText">Retirerer</p>
          <SearchFilterSelect
            select
            :options="Array.from(new Set(locationData?.result.value?.countries?.nodes.map((item: any) => item.id)))"
            v-model="filterValues.retirerer"
            placeholder="Select Retirerer"
          />
        </div>
        <div>
          <p class="filter-subtitle">Applicant</p>
          <SearchFilterSelect
            select
            :options="Array.from(new Set(applicantData?.result.value?.applicantData?.nodes.map((item: any)=>item.name)))"
            v-model="filterValues.applicant"
            placeholder="Select Applicant"
          />
        </div>
        <div>
          <p class="filter-subtitle">Region</p>
          <SearchFilterSelect
            :options="Array.from(new Set(locationData?.result.value?.countries?.nodes.map((item: any) => item.id)))"
            v-model="filterValues.region"
            placeholder="Select Region"
          />
        </div>
        <div>
          <button
            class="btn btn-ghost bg-greenPrimary w-full rounded-sm text-white text-title15 px-2"
            @click="handleSearchButtonClick"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </div>

  <!--Search and filter Desktop-->
  <div
    class="hidden md:grid grid-flow-row auto-rows-max mb-10 font-Inter h-full"
  >
    <div class="flex flex-row bg-darkGray w-full p-4 rounded-t-sm">
      <input
        class="w-full rounded-sm bg-darkGray px-3 h-12 text-lightGray text-title24"
        placeholder="Search auctions"
        v-model="filterValues.searchTerm"
      />
      <button
        class="btn bg-greenPrimary w-[60px] ml-4 rounded-sm"
        @click="handleSearchButtonClick"
      >
        <img class="h-5" src="../assets/searchIconWhite.svg" />
      </button>
    </div>
    <div
      class="flex divide-x divide-dividerGray bg-mediumGray w-full rounded-b-sm"
    >
      <div class="filter-box">
        <p class="filter-subtitle">Retirerer</p>
        <SearchFilterSelect
          :options="Array.from(new Set(applicantData?.result.value?.countries?.nodes.map((item: any)=>item.id)))"
          v-model="filterValues.retirerer"
          placeholder="Select Retirerer"
        />
      </div>
      <div class="filter-box">
        <p class="filter-subtitle">Applicant</p>
        <SearchFilterSelect
          :options="Array.from(new Set(applicantData?.result.value?.applicantData?.nodes.map((item: any)=>item.name)))"
          v-model="filterValues.applicant"
          placeholder="Select Applicant"
        />
      </div>
      <div class="filter-box">
        <p class="filter-subtitle">Regions</p>
        <SearchFilterSelect
          :options="Array.from(new Set(locationData?.result.value?.countries?.nodes.map((item: any) => item.id)))"
          v-model="filterValues.region"
          placeholder="Select Region"
        />
      </div>
    </div>
  </div>
</template>
