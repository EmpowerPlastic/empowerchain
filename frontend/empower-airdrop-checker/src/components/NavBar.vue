<script setup lang="ts"></script>
<template>
  <div
    class="navbar bg-gradient-radial bg-opacity-40 md:px-[10%]"
    style="
      background-image: radial-gradient(
        50% 50% at 50% 50%,
        rgba(0, 227, 58, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 88.02%
      );
    "
  >
    <div class="flex-1">
      <a href="/">
        <img class="h-7" src="../assets/mainLogo.svg" />
      </a>
    </div>
    <div class="flex-none">
      <button
        class="max-w-[220px] bg-lightBlack border border-borderBlack text-white text-title18 w-full rounded-xl h-full px-5 py-1 px-7"
      >
        Connect wallet
      </button>
    </div>
  </div>
</template>
