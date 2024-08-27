<script setup lang="ts">
import { PC_BACKEND_ENDPOINT, PC_BACKEND_ENDPOINT_API } from "@/config/config";
import { useRoute } from "@/router";
import { useAuth } from "@/stores/auth";
import { fetchRepeater } from "@/utils/fetchRepeater";
import { authHeader } from "@/utils/fetcher";
import { onMounted, ref } from "vue";
import FireworksAnimation from "@/assets/animationJSON/fireWorksAnimation.json";
import { Vue3Lottie } from "vue3-lottie";

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

const paymentStatus = ref<PaymentStatus | undefined>(undefined);
const isCheckingStatus = ref(false);
const route = useRoute();

const { isAuthenticated } = useAuth()

const handleFetchResponse = async (response: Response | null) => {
  // TODO: Handle 401 and maybe other errors
  if (!response) {
    return true;
  }

  try {
    const body = (await response.json()) as AuctionStatusResponse;
    paymentStatus.value = body.status;
    if (body.status === PaymentStatus.COMPLETE) {
      return false;
    }
  } catch (error) {
    console.error(error);
  }

  return true;
};

const checkPaymentStatus = async () => {
  const { getAccessToken } = useAuth();
  const accessToken = await getAccessToken(PC_BACKEND_ENDPOINT);
  const paymentId = route.query.paymentId as string;
  if (!paymentId) {
    throw new Error("Payment ID is missing");
  }
  isCheckingStatus.value = true;
  try {
    await fetchRepeater(
      `${PC_BACKEND_ENDPOINT_API}/payments/${route.query.paymentId}`,
      handleFetchResponse,
      8,
      5000,
      {
        headers: authHeader(accessToken),
      },
    );
  } catch (e) {
    console.log("e", e);
    paymentStatus.value = PaymentStatus.ERROR;
  } finally {
    isCheckingStatus.value = false;
  }
};

onMounted(async () => {
  await checkPaymentStatus();
});
</script>

<template>
  <div class="p-5 min-h-[50vh] font-Inter">
    <h1
      v-if="isCheckingStatus"
      class="text-white text-title38 md:mt-10 mb-10 text-center"
    >
      Processing...
    </h1>
    <h1
      v-if="paymentStatus === PaymentStatus.COMPLETE"
      class="text-white text-title38 md:mt-10 mb-10 text-center"
    >
      Payment confirmation
    </h1>
    <h1
      v-else-if="paymentStatus === PaymentStatus.ERROR"
      class="text-white text-title38 md:mt-10 mb-10 text-center"
    >
      Transaction error
    </h1>
    <h1
      v-else-if="!isCheckingStatus"
      class="text-white text-title38 md:mt-10 mb-10 text-center"
    >
      Credit Transfer Issue
    </h1>
    <div class="pointer-events-none">
      <Vue3Lottie
        v-if="paymentStatus === PaymentStatus.COMPLETE"
        class="absolute top-0"
        :animation-data="FireworksAnimation"
        :loop="false"
      />
      <div class="pointer-events-auto">
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
              v-if="isAuthenticated && paymentStatus === PaymentStatus.COMPLETE"
              class="font-Inter text-white text-title18"
            >
              Your plastic credit purchase was successful and a Plastic Credit
              Offset Certificate has been generated for you.
            </span>
            <span
              v-else-if="paymentStatus === PaymentStatus.COMPLETE"
              class="font-Inter text-white text-title18"
            >
              Your plastic credit purchase was successful.
              You will receive an email shortly containing your Plastic Credit Offset Certificate.
            </span>
            <span
              v-else-if="paymentStatus === PaymentStatus.ERROR"
              class="font-Inter text-white text-title18"
            >
              Transaction couldn't be completed. You will receive a refund
              shortly. Please contact us at
              <a href="mailto:marketplace@empower.eco" class="underline"
                >marketplace@empower.eco</a
              >
              if you encounter any issues.
            </span>
            <span v-else class="font-Inter text-white text-title18">
              Transaction processing takes longer than usual due to blockchain
              traffic. You will receive an email shortly, confirming the status
              of your transaction.
            </span>
            <a
              v-if="isAuthenticated && paymentStatus === PaymentStatus.COMPLETE"
              class="mt-5 text-white btn btn-ghost btn-block normal-case bg-greenPrimary hover:bg-greenDark text-title24 lg:text-title32 lg:btn-lg p-0 px-12 font-normal md:max-w-lg"
              href="/certificate"
              >See your certificates
            </a>
            <a
              v-else
              class="mt-5 text-white btn btn-ghost btn-block normal-case bg-greenPrimary hover:bg-greenDark text-title24 lg:text-title32 lg:btn-lg p-0 px-12 font-normal md:max-w-lg"
              href="/"
              >Go to homepage</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
