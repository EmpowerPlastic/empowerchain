<script setup lang="ts">
import "flowbite";
import NavBar from "./components/NavBar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <NavBar/>
  <RouterView/>
  <Footer/>
</template>

