<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "@/router";
import { useAuth } from "@/stores/auth";
import { authHeader } from "@/utils/fetcher";
import { fetchRepeater } from "@/utils/fetchRepeater";
import { PC_BACKEND_ENDPOINT, PC_BACKEND_ENDPOINT_API } from "@/config/config";

// Ported from prisma schema in the backend
enum PaymentStatus {
  PENDING = "PENDING",
  INCOMPLETE = "INCOMPLETE",
  COMPLETE = "COMPLETE",
  ERROR = "ERROR",
  CANCELED = "CANCELED",
}

interface AuctionStatusResponse {
  status: PaymentStatus;
  id: string;
}

const auctionStatus = ref<PaymentStatus | undefined>(undefined);
const isCheckingStatus = ref(false);
const route = useRoute();

const handleFetchResponse = async (response: Response | null) => {
  // TODO: Handle 401 and maybe other errors
  if (!response) {
    return true;
  }

  try {
    const body = (await response.json()) as AuctionStatusResponse;
    auctionStatus.value = body.status;
    if (body.status === PaymentStatus.COMPLETE) {
      return false;
    }
  } catch (error) {
    console.error(error);
  }

  return true;
};

const checkAuctionStatus = async () => {
  const { getAccessToken } = useAuth();
  const accessToken = await getAccessToken(PC_BACKEND_ENDPOINT);

  isCheckingStatus.value = true;
  try {
    await fetchRepeater(
      `${PC_BACKEND_ENDPOINT_API}/payments/${route.query.paymentId}`,
      handleFetchResponse,
      5,
      5000,
      {
        headers: authHeader(accessToken),
      },
    );
  } catch (e) {
    console.log("e", e);
    auctionStatus.value = PaymentStatus.ERROR;
  } finally {
    isCheckingStatus.value = false;
  }
};

onMounted(async () => {
  await checkAuctionStatus();
});
</script>

<template>
  <div class="p-5 md:px-[10%] min-h-[50vh] font-Inter">
    <h1 class="text-white text-title38 md:mt-10 mb-10 text-center">
      Payment confirmation
    </h1>
    <div v-if="isCheckingStatus">
      <div>
        <span class="block text-center text-white mb-2"
          >Checking your order status, please wait</span
        >
        <span class="block text-center text-white">
          <span class="loading loading-spinner loading-lg"></span>
        </span>
      </div>
    </div>
    <div v-else class="flex justify-center">
      <div
        class="bg-white/10 rounded-lg md:rounded-sm p-4 max-w-xl text-center"
      >
        <span
          v-if="auctionStatus === PaymentStatus.COMPLETE"
          class="font-Inter text-white text-title18"
        >
          Your plastic credit purchase was successful and Plastic Credit Offset
          Certificate has been generated for you.
        </span>
        <span
          v-else-if="auctionStatus === PaymentStatus.ERROR"
          class="font-Inter text-white text-title18"
        >
          Transaction couldn't be completed. You will receive a refund shortly.
          Please contact us at
          <a href="mailto:marketplace@empower.eco">marketplace@empower.eco</a>
          if you encounter any issues.
        </span>
        <span v-else class="font-Inter text-white text-title18">
          Something went wrong with a credit transfer and we're currently
          investigating it. We'll contact you within 2 business days. If you
          haven't heard from us, please send us a message at
          <a href="mailto:marketplace@empower.eco">marketplace@empower.eco</a>.
        </span>
        <a
          class="mt-5 text-white btn btn-ghost btn-block normal-case bg-greenPrimary hover:bg-greenDark text-title24 lg:text-title32 lg:btn-lg p-0 px-12 font-normal md:max-w-lg"
          href="/certificate"
          >See your plastic credits</a
        >
      </div>
    </div>
  </div>
</template>
