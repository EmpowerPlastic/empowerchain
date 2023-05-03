<script setup lang="ts">
import CreditsSearchBar from "@/components/CreditsSearchBar.vue";
import CreditCard from "@/components/CreditCard.vue";
</script>
<template>

  <div class="p-5 md:px-[10%] min-h-[60vh] text-white font-Inter">

    <div
        class="grid grid-cols-2 gap-4 max-w-[350px] bg-dividerGray w-full items-center rounded-xl border-[1.5px] border-borderGray p-1">
      <div class="text-center rounded-xl p-2">My certificates</div>
      <div class="text-center bg-greenTabs rounded-xl p-2">My credits</div>
    </div>

    <CreditsSearchBar/>
    <CreditCard/>
    <CreditCard/>
    <CreditCard/>
    <CreditCard/>

  </div>
</template>
