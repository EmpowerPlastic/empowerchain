<script setup lang="ts">
import MapWithInfoWindow from "@/components/MapWithInfoWindow.vue";
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
    <div class="w-full h-[600px]">
      <MapWithInfoWindow :map-data="dummyData" />
    </div>
    <div class="bg-white"></div>
  </div>
</template>
