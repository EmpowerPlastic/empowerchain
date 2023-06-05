<script setup lang="ts">
import { toast } from "vue3-toastify";

const copyLink = () => {
  const url = new URL(window.location.href);
  url.searchParams.delete("fileName");
  url.searchParams.delete("time");

  url.pathname = "/verify/success";

  navigator.clipboard.writeText(url.toString());
  toast.info("Link copied to clipboard");
};
</script>

<template>
  <div
    class="flex flex-col items-center w-full px-14 text-left bg-lightBlack rounded-lg sm:p-8 md:-mt-[120px]"
  >
    <h5 class="mb-2 mt-3 mb-4 font-bold text-white text-title28">
      Congratulations!
    </h5>
    <p class="text-white text-title12 text-center mb-7">
      This document’s digest is embedded in the EmpowerChain blockchain. It is
      permanently certified and proven to exist since the transaction was
      confirmed.
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
      <p class="text-lightGreen text-title14" break-all>Certification Time</p>
      <p class="text-white text-title18 mb-3 break-all">
        {{ new Date(Number($route.query.time)).toLocaleString() }}
      </p>
      <p class="text-lightGreen text-title14 break-all">Data Hash</p>
      <p class="text-white text-title18 mb-6 break-all">
        {{ $route.query.hash }}
      </p>
    </div>
    <button
      @click="copyLink"
      class="bg-lightGreen mt-7 content-center p-1 px-7 rounded text-white"
    >
      Copy verification link
    </button>
  </div>
</template>

<style></style>
