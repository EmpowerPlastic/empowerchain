<script setup lang="ts">
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
      api-key="AIzaSyBezM4SJJO5t2bS5j2CPOdWJm_kHsdN4n0"
      style="width: 100%; height:100%;overflow: hidden"
      :center="locations[0]"
      :zoom="15"
  >
    <MarkerCluster>
      <Marker v-for="(location, i) in locations" :options="{ position: location }" :key="i" />
    </MarkerCluster>
  </GoogleMap>
</template>