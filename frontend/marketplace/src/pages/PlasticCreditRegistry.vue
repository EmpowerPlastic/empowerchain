<script setup lang="ts">
import MapWithInfoWindow from "@/components/MapWithInfoWindow.vue";
import RegistrySearchBar from "@/components/RegistrySearchBar.vue";
import RegistryCard from "@/components/RegistryCard.vue";
import CustomPagination from "@/components/CustomPagination.vue";
import CustomAlert from "@/components/CustomAlert.vue";
import RegistryIssuedCreditsGraph from "@/components/RegistryIssuedCreditsGraph.vue";
import RegistryTotalRetiredCreditsGraph from "@/components/RegistryTotalRetiredCreditsGraph.vue";
import RegistryDonutChart from "@/components/RegistryDonutChart.vue";
import GraphTimelineComponent from "@/components/GraphTimelineComponent.vue";
import { ref } from "vue";

const dummyData = [
  {
    location: { lat: 40.7322, lng: -74.004 },
    total: 15,
    chartData: {
      labels: ["DATA1", "DATA2"],
      data: [
        {
          backgroundColor: ["#00C131", "#67A377"],
          data: [40, 10],
        },
      ],
    },
  },
  {
    location: { lat: 47.41322, lng: -1.219443 },
    total: 30,
    chartData: {
      labels: ["DATA3", "DATA4"],
      data: [
        {
          backgroundColor: ["#00C131", "#67A377"],
          data: [20, 50],
        },
      ],
    },
  },
];
const activeTab = ref("Dashboard");
const activeViewIssuedCredit = ref<string>("day");
const activeViewRetiredCredit = ref<string>("day");
</script>
<template>
  <div class="p-5 md:px-[10%]">
    <h1 class="text-title24 md:text-title38 text-white mb-5">
      Plastic Credit Registry
    </h1>

    <div
      class="grid grid-cols-2 gap-4 max-w-[350px] bg-tabGray w-full items-center rounded-xl border-[1.5px] border-borderGray p-1 text-white"
    >
      <div
        class="custom-tab"
        :class="{ 'bg-greenTabs': activeTab === 'Dashboard' }"
        @click="activeTab = 'Dashboard'"
      >
        Dashboard
      </div>
      <div
        class="custom-tab"
        :class="{ 'bg-greenTabs': activeTab === 'Registry' }"
        @click="activeTab = 'Registry'"
      >
        Registry
      </div>
    </div>

    <template v-if="activeTab === 'Registry'">
      <div class="mt-10">
        <RegistrySearchBar />
      </div>
      <div class="mt-10">
        <CustomAlert
          :visible="true"
          label="5 Plastic Credit registries found"
        />
      </div>
      <div class="mt-10">
        <RegistryCard
          :card-data="{
            retirererName: 'test',
            applicant: 'test',
            region: 'test',
            amount: 10,
          }"
          :key="item"
          v-for="item in 4"
        />
      </div>
      <div class="flex justify-center md:justify-end my-10">
        <CustomPagination :total="10" :item-per-page="2" :current-page="1" />
      </div>
    </template>

    <template v-if="activeTab === 'Dashboard'">
      <div class="w-full md:h-[600px] h-[400px] mt-10">
        <MapWithInfoWindow :map-data="dummyData" />
      </div>
      <div class="mb-5 mt-10 flex justify-between">
        <p class="text-title18 md:text-title24 text-white">
          Total Issued Credits
        </p>
        <GraphTimelineComponent
          @onClick="(val) => (activeViewIssuedCredit = val)"
          :active="activeViewIssuedCredit"
        />
      </div>
      <div class="flex flex-col md:p-10 p-5">
        <div class="flex md:flex-row flex-col justify-between items-center">
          <div>
            <RegistryDonutChart />
          </div>
          <div
            class="flex flex-col md:text-right text-white justify-center mt-5 md:mt-0"
          >
            <p class="text-title14">Retired</p>
            <p class="text-title24">2500k</p>
            <p class="text-title14 mt-5">Issued</p>
            <p class="text-title24">7500k</p>
          </div>
        </div>
        <RegistryIssuedCreditsGraph />
      </div>
      <div class="mb-5 mt-10 flex justify-between">
        <p class="text-title18 md:text-title24 text-white">
          Total Retired Credits
        </p>
        <GraphTimelineComponent
          @onClick="(val) => (activeViewRetiredCredit = val)"
          :active="activeViewRetiredCredit"
        />
      </div>
      <div class="mt-10 p-10">
        <RegistryTotalRetiredCreditsGraph />
      </div>
    </template>
  </div>
</template>
