<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/MainFooter.vue";
import { useAuth } from '@/stores/auth'

const { fetchUser } = useAuth();
onBeforeMount(async () => {
  await fetchUser()
})
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>
