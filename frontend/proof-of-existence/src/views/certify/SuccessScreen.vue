<script setup lang="ts"></script>
<template>
  <div
    class="flex flex-col items-center w-full px-14 text-left bg-lightBlack rounded-lg sm:p-8"
  >
    <h5 class="mb-2 mt-3 mb-4 font-bold text-white text-title28">
      Congratulations!
    </h5>
    <p class="text-white text-title12 text-center mb-7">
      This document’s digest was successfully embedded in the Bitcoin
      blockchain. It is now permanently certified and proven to exist since the
      transaction was confirmed.
    </p>
    <div
      class="flex justify-center bg-lightGray rounded-lg break-words text-center items-center flex flex-col p-4 mb-5"
    >
      <img class="w-20 mb-4" src="../../assets/images/certificate.png" />
      <div v-show="$route.query.fileName">
        <p class="text-lightGreen text-title14 break-all">File</p>
        <p class="text-white text-title18 mb-3 break-all">
          {{ $route.query.fileName }}
        </p>
      </div>
      <p class="text-lightGreen text-title14" break-all>Received Time</p>
      <p class="text-white text-title18 mb-3 break-all">
        {{ new Date(Number($route.query.time)).toLocaleString() }}
      </p>
      <p class="text-lightGreen text-title14 break-all">Transaction Hash</p>
      <p class="text-white text-title18 mb-6 break-all">
        {{ $route.query.hash }}
      </p>
      <p class="text-white text-title14">Hooray!! We are just one step away!</p>
      <p class="text-white text-title12">
        Connect your wallet for the transaction fee, its Only 0.00025 $MPWR
      </p>
    </div>
  </div>
</template>

<style></style>
