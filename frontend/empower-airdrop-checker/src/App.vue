<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template>
  <NavBar />
  <RouterView />
  <MainFooter />
</template>

<style scoped></style>
