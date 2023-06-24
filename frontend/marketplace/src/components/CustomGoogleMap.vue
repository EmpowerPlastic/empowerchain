<script setup lang="ts">
import { GOOGLE_MAPS_API_KEY } from "@/config/config";
import { GoogleMap, Marker } from "vue3-google-map";
import { ref, watch } from "vue";

export interface CustomGoogleMapProps {
  locations: {
    lat: number;
    lng: number;
  }[];
}

const props = defineProps<CustomGoogleMapProps>();

const center = ref();
const zoomLevel = ref();

const getMapCenter = () => {
  const locations = [...props.locations];

  // Find the minimum and maximum latitude and longitude values
  const minLat = Math.min(...locations.map((location) => location.lat));
  const maxLat = Math.max(...locations.map((location) => location.lat));
  const minLng = Math.min(...locations.map((location) => location.lng));
  const maxLng = Math.max(...locations.map((location) => location.lng));

  // Calculate the center point
  const centerLat = (minLat + maxLat) / 2;
  const centerLng = (minLng + maxLng) / 2;

  // Calculate the zoom level
  let zoom = 12; // Initial zoom level
  const maxDistance = Math.max(maxLat - minLat, maxLng - minLng);

  // Adjust the zoom level based on the maximum distance
  if (maxDistance !== 0) {
    zoom = Math.floor(Math.log2(360 / maxDistance));
  }

  center.value = {
    lat: centerLat,
    lng: centerLng,
  };
  zoomLevel.value = zoom;
};

watch(
  () => props.locations,
  () => {
    getMapCenter();
  }
);
</script>
<template>
  <GoogleMap
    class="google-map"
    :api-key="GOOGLE_MAPS_API_KEY"
    style="width: 100%; height: 100%; overflow: hidden"
    :center="center"
    :zoom="zoomLevel"
  >
    <MarkerCluster>
      <Marker
        v-for="(location, i) in locations"
        :options="{ position: location }"
        :key="i"
      />
    </MarkerCluster>
  </GoogleMap>
</template>
