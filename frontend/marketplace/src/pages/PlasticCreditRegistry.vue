<script setup lang="ts">
import MapWithInfoWindow from "@/components/MapWithInfoWindow.vue";
import RegistrySearchBar from "@/components/RegistrySearchBar.vue";
import RegistryCard from "@/components/RegistryCard.vue";
import CustomPagination from "@/components/CustomPagination.vue";
import CustomAlert from "@/components/CustomAlert.vue";
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
</script>
<template>
  <div class="p-5 md:px-[10%]">
    <h1 class="text-title24 md:text-title38 text-white mb-5">
      Plastic Credit Registry
    </h1>
    <div class="w-full md:h-[600px] h-[400px]">
      <MapWithInfoWindow :map-data="dummyData" />
    </div>
    <div class="mt-10">
      <RegistrySearchBar />
    </div>
    <div class="mt-10">
      <CustomAlert :visible="true" label="5 Plastic Credit registries found" />
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
  </div>
</template>
