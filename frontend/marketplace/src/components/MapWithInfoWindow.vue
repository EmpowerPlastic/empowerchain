<script setup lang="ts">
import { GOOGLE_MAPS_API_KEY } from "@/config/config";
import { GoogleMap, Marker, InfoWindow, Circle } from "vue3-google-map";
import { ref, watch } from "vue";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
export interface CustomGoogleMapProps {
  mapData: {
    location: {
      lat: number;
      lng: number;
    };
    total: number;
    chartData: {
      labels: string[];
      data: { backgroundColor: string[]; data: number[] }[];
    };
  }[];
}
ChartJS.register(ArcElement, Tooltip, Legend);
const props = defineProps<CustomGoogleMapProps>();

const showInfo = ref(false);
const selectedIndex = ref(0);
const options = {
  styles: [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          color: "#757575",
        },
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd",
        },
      ],
    },
    {
      featureType: "administrative.neighborhood",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#181818",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1b1b1b",
        },
      ],
    },
    {
      featureType: "road",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#2c2c2c",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8a8a8a",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#373737",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#3c3c3c",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#4e4e4e",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3d3d3d",
        },
      ],
    },
  ],
};

const onMarkerClick = (
  location: { lat: number; lng: number },
  index: number
) => {
  showInfo.value = true;
  selectedIndex.value = index;
};
</script>
<template>
  <GoogleMap
    :styles="options.styles"
    :api-key="GOOGLE_MAPS_API_KEY"
    style="width: 100%; height: 100%; overflow: hidden"
    :center="{ lat: 0, lng: 0 }"
    :zoom="1.8"
    :zoomControl="false"
    :scrollwheel="false"
    :streetViewControl="false"
    :fullscreenControl="false"
    :draggable="false"
    :mapTypeControl="false"
    :keyboardShortcuts="false"
  >
    <Circle
      v-for="(point, index) in mapData"
      :key="index"
      :options="{
        center: point?.location,
        radius: 1,
        strokeWeight: point?.total,
        strokeColor: '#00C131',
      }"
      @click="onMarkerClick(point.location, index)"
    />
    <InfoWindow
      v-if="showInfo"
      :options="{
        position: mapData[selectedIndex]?.location,
      }"
      :opened="showInfo"
      @closeclick="showInfo = false"
    >
      <div class="w-[200px] h-[100px] p-1">
        <Pie
          :data="{
            labels: mapData[selectedIndex]?.chartData?.labels,
            datasets: mapData[selectedIndex]?.chartData?.data,
          }"
          :options="{
            responsive: true,
            maintainAspectRatio: false,
          }"
        />
      </div>
    </InfoWindow>
  </GoogleMap>
</template>
