<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from "vue";
import SearchFilterSelect from "@/components/SearchFilterSelect.vue";
import SearchFilterRange from "@/components/SearchFilterRange.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { DEFAULT_CREDIT_TYPE } from "@/config/config";

export interface SearchBarProps {
  filterValues?: {
    volume: any[];
    location: string[];
    registrationDate: any[];
    organization: string[];
    creditType: string[];
    price: any[];
    searchTerm: string;
  };
}

const props = defineProps<SearchBarProps>();
const filterValues = ref({
  volume: ["", ""],
  location: [],
  registrationDate: ["", ""],
  organization: [],
  creditType: [],
  price: ["", ""],
  searchTerm: "",
});

watch(props, () => {
  if (Object.keys(props?.filterValues as any).length !== 0) {
    filterValues.value = props.filterValues as any;
  }
});

const creditOptions = ref([DEFAULT_CREDIT_TYPE]);

const emitSearch = defineEmits(["searchClick"]);

const handleSearchButtonClick = () => {
  emitSearch("searchClick", filterValues.value);
};

const locationData: any = useQuery(gql`
  query {
    countries {
      nodes {
        id
      }
    }
  }
`);

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
          <p class="text-title14 text-dropDownText">Location</p>
          <SearchFilterSelect
            select
            :options="Array.from(new Set(locationData?.result.value?.countries?.nodes.map((item: any) => item.id)))"
            v-model="filterValues.location"
            placeholder="Select Location"
          />
        </div>
        <!-- <div>
          <p class="filter-subtitle">VOLUME</p>
          <SearchFilterRange v-model:from="filterValues.volume[0]" v-model:to="filterValues.volume[1]"
                             placeholder="Select Volume" unit="Kg" class="ml-1"/>
        </div> -->
        <div>
          <p class="filter-subtitle">REGISTRATION DATE</p>
          <VueDatePicker
            :enable-time-picker="false"
            placeholder="Select date"
            v-model="filterValues.registrationDate"
            range
            multi-calendars
            dark
            hide-input-icon
          />
        </div>
        <div>
          <p class="filter-subtitle">COLLECTOR ORGANISATION</p>
          <SearchFilterSelect
            :options="Array.from(new Set(applicantData?.result.value?.applicantData?.nodes.map((item: any)=>item.name)))"
            v-model="filterValues.organization"
            placeholder="Select collector"
          />
        </div>
        <div>
          <p class="filter-subtitle">CREDIT TYPE</p>
          <SearchFilterSelect
            :options="creditOptions"
            v-model="filterValues.creditType"
            placeholder="Select credit"
          />
        </div>
        <div>
          <p class="filter-subtitle">PRICE PER CREDIT</p>
          <SearchFilterRange
            v-model:from="filterValues.price[0]"
            v-model:to="filterValues.price[1]"
            placeholder="Select Price"
            unit="$"
            class="ml-1"
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
        <p class="filter-subtitle">LOCATION</p>
        <SearchFilterSelect
          :options="Array.from(new Set(locationData?.result.value?.countries?.nodes.map((item: any)=>item.id)))"
          v-model="filterValues.location"
          placeholder="Select Location"
        />
      </div>
      <!-- <div class="filter-box">
        <p class="filter-subtitle mb-2">VOLUME</p>
        <SearchFilterRange v-model:from="filterValues.volume[0]" v-model:to="filterValues.volume[1]"
                           placeholder="Select Volume" unit="Kg"/>
      </div> -->
      <div class="filter-box">
        <p class="filter-subtitle mb-1">REGISTRATION DATE</p>
        <VueDatePicker
          :enable-time-picker="false"
          placeholder="Select date"
          format="MM/dd/yyyy"
          v-model="filterValues.registrationDate"
          range
          multi-calendars
          dark
          hide-input-icon
        />
      </div>
      <div class="filter-box">
        <p class="filter-subtitle">COLLECTOR ORGANISATION</p>
        <SearchFilterSelect
          :options="Array.from(new Set(applicantData?.result.value?.applicantData?.nodes.map((item: any)=>item.name)))"
          v-model="filterValues.organization"
          placeholder="Select collector"
        />
      </div>
      <div class="filter-box">
        <p class="filter-subtitle">CREDIT TYPE</p>
        <SearchFilterSelect
          :options="creditOptions"
          v-model="filterValues.creditType"
          placeholder="Select credit"
        />
      </div>
      <div class="filter-box">
        <p class="filter-subtitle mb-2">PRICE PER CREDIT</p>
        <SearchFilterRange
          v-model:from="filterValues.price[0]"
          v-model:to="filterValues.price[1]"
          placeholder="Select Price"
          unit="$"
        />
      </div>
    </div>
  </div>
</template>
