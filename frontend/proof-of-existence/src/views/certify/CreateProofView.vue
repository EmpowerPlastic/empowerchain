<script setup lang="ts">
import { Tabs } from "flowbite";
import { ref } from "vue";
import router from "@/router";
//Methods
const back = () => {
  router.push({
    path: `/`,
  });
};
</script>

<template>
  <img
    src="../../assets/images/emp-astro-2.png"
    class="left-28 top-full sm:top-auto sm:left-auto w-32 fixed sm:absolute animate-bounce -m-24"
  />
  <div class="w-full p-8 text-left bg-lightBlack rounded-lg sm:p-8">
    <h5 class="mb-2 mt-3 text-2xl font-bold text-white text-title28">
      Create proof
    </h5>
    <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-6">
      <div class="col-span-2 w-full mt-3">
        <div
          class="bg-lightGray rounded-lg break-words text-center items-center flex flex-col p-4"
        >
          <img class="w-20 mb-4" src="../../assets/images/certificate.png" />
          <p class="text-lightGreen text-title14 break-all">File</p>
          <p class="text-white text-title18 mb-3 break-all">
            {{ $route.query.fileName }}
          </p>
          <p class="text-lightGreen text-title14" break-all>Received Time</p>
          <p class="text-white text-title18 mb-3 break-all">
            {{ new Date(Number($route.query.time)).toLocaleString() }}
          </p>
          <p class="text-lightGreen text-title14 break-all">Transaction Hash</p>
          <p class="text-white text-title18 mb-6 break-all">
            {{ $route.params.hash }}
          </p>
          <p class="text-white text-title14">
            Hooray!! We are just one step away!
          </p>
          <p class="text-white text-title12">
            Connect your wallet for the transaction fee, its Only 0.00025 $MPWR
          </p>
        </div>
        <div class="flex flex-col sm:flex-row justify-between">
          <button
            class="bg-lightGray mt-7 content-center p-1 px-14 rounded text-white"
          >
            Complete
          </button>
          <button
            @click="back"
            class="bg-transparent mt-7 content-center p-1 rounded text-lightGreen"
          >
            Back
          </button>
        </div>
      </div>
      <div class="sm:col-span-1 p-3">
        <h5 class="mb-2 mt-3 text-2xl font-bold text-white text-title28">
          Connect wallet
        </h5>
        <button
          class="bg-lightGreen mt-7 content-center p-1 px-7 rounded text-white"
        >
          Connect your wallet
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
