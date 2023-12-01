<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "@/router";
import { fetchRepeater } from "@/utils/fetchRepeater";
enum AuctionStatus {
  PENDING = "Pending",
  COMPLETE = "Complete",
  INCOMPLETE = "Incomplete",
  ERROR = "Error",
}

const auctionStatus = ref<AuctionStatus>(null);
const isCheckingStatus = ref(false);
const route = useRoute();

const handleFetchResponse = (responseText: string) => {
  console.log('Response', responseText);
  return true;
};

const checkAuctionStatus = async () => {
  isCheckingStatus.value = true;
  try {
    await fetchRepeater(
      `https://pc-backend-public-qa-xv5zwi25ya-ew.a.run.app/api/v1/pc-backend-public/payments/${route.params.id}`,
      handleFetchResponse,
      5,
      5000
    );
  } catch (e) {
    console.log('e', e);
    auctionStatus.value = AuctionStatus.ERROR;
  } finally {
    isCheckingStatus.value = false;
  }
};

// .then((res) => {
//     if (res.status === 200) {
//       auctionStatus.value = AuctionStatus.COMPLETE;
//     } else {
//       auctionStatus.value = AuctionStatus.INCOMPLETE;
//     }
//   })
//   .catch(() => {
//     auctionStatus.value = AuctionStatus.ERROR;
//   })
//   .finally(() => {
//     isCheckingStatus.value = false;
//   });

onMounted(async () => {
  await checkAuctionStatus();
});
</script>

<template>
  <div class="p-5 md:px-[10%] min-h-[50vh] font-Inter">
    <h3 class="text-white text-title24 md:mt-10">Payment confirmation</h3>
    <span
      v-if="isCheckingStatus"
      class="loading loading-spinner loading-lg"
    ></span>
    <div v-else>Hej</div>
  </div>
</template>

<style scoped>
/* Your component styles here */
</style>
