<script setup lang="ts">
</script>
<template>
  <div class="bg-lightBlack rounded-lg md:rounded-sm">
    <img src="../assets/auctionCard.png">
    <div class="grid grid-cols-2 p-3 gap-4">
      <div>
        <div>
          <p class="font-Inter text-white text-title24 md:text-title32 font-bold">
            $100.00
          </p>
          <p class="font-Inter text-white text-title15 md:text-title18">
            Price per credit
          </p>
        </div>
      </div>
      <div>
        <div class="text-right">
          <p class="font-Inter text-white text-title13 md:text-title14 font-bold">
            300kg
          </p>
          <p class="font-Inter text-white text-title11 md:text-title12">
            Volume
          </p>
        </div>
      </div>
      <div>
        <div>
          <p class="font-Inter text-white text-title14 font-bold">
            750/1500
          </p>
          <p class="font-Inter text-white text-title12">
            Available credits
          </p>
        </div>
      </div>
      <div>
        <button type="button" class="bg-greenPrimary w-full h-full rounded-sm font-Inter text-white md:text-title18 px-2">
          View details
        </button>
      </div>
    </div>
  </div>

</template>