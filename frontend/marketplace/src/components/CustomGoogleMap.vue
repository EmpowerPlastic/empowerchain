<script setup lang="ts">
import { GOOGLE_MAPS_API_KEY } from "@/config/config";
import {GoogleMap, Marker} from "vue3-google-map"

export interface CustomGoogleMapProps {
  locations: {
    lat: number;
    lng: number
  }[]
}
defineProps<CustomGoogleMapProps>()

</script>
<template>
  <GoogleMap
      class="google-map"
      :api-key="GOOGLE_MAPS_API_KEY"
      style="width: 100%; height:100%;overflow: hidden"
      :center="locations[0]"
      :zoom="15"
  >
    <MarkerCluster>
      <Marker v-for="(location, i) in locations" :options="{ position: location }" :key="i" />
    </MarkerCluster>
  </GoogleMap>
</template>