<script setup lang="ts">
import {GoogleMap, Marker} from "vue3-google-map"

export interface CustomGoogleMapProps {
  position: {
    lat: number;
    lng: number
  }
}
defineProps<CustomGoogleMapProps>()

</script>
<template>
  <GoogleMap
      class="google-map"
      api-key="AIzaSyBezM4SJJO5t2bS5j2CPOdWJm_kHsdN4n0"
      style="width: 100%; height:100%;overflow: hidden"
      :center="position"
      :zoom="15"
  >
    <Marker :options="{ position: position }"/>
  </GoogleMap>
</template>