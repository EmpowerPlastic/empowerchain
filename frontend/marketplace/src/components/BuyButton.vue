<script setup lang="ts">
import { computed, ref } from "vue";
import { useAuth } from "@/stores/auth";
import { isValidCreditAmount } from "@/utils/utils";
import tracking, { TrackEvents } from "@/utils/analytics";
import CertificateHolderModal from "@/components/CertificateHolderModal.vue";
import { UserType } from "@/types/UserType";

export interface BuyButtonProps {
  showButtonSpinner: boolean;
  insufficientBalance: boolean;
  coinFormatted: string;
  handleCardPayment: (name: string) => void;
  handleBuyCredits: (name: string) => void;
  handleUnauthorizedUserPayment: (name: string, email: string) => void;
  isWalletConnected: boolean;
  availableCredits: number;
  buyingCreditAmount: number;
}
const props = defineProps<BuyButtonProps>();
const { isAuthenticated, handleSignIn } = useAuth();
const modalEl = ref<HTMLDialogElement | null>(null);
const continueHandler = ref<((name: string) => void) | undefined>(undefined);
const continueUnauthorizedPaymentHandler = ref<
  ((name: string, email: string) => void) | undefined
>(undefined);
const modalType = ref<UserType | null>(null);

enum BuyButtonState {
  DISABLED = "disabled",
  ENABLED_UNAUTHORIZED = "enabled_unauthorized",
  ENABLED_CARD = "enabled_card",
  ENABLED_WALLET = "enabled_wallet",
  LOADING = "loading",
  INVALID_CREDIT = "invalid_credit",
}

const buttonState = computed<BuyButtonState>(() => {
  if (props.showButtonSpinner) {
    return BuyButtonState.LOADING;
  }

  if (!isValidCreditAmount(props.buyingCreditAmount, props.availableCredits)) {
    return BuyButtonState.INVALID_CREDIT;
  }

  if (isAuthenticated.value) {
    return BuyButtonState.ENABLED_CARD;
  }

  if (props.insufficientBalance) {
    return BuyButtonState.DISABLED;
  }

  if (props.isWalletConnected) {
    return BuyButtonState.ENABLED_WALLET;
  }

  return BuyButtonState.ENABLED_UNAUTHORIZED;
});

const buttonText = computed(() => {
  switch (buttonState.value) {
    case BuyButtonState.LOADING:
      return "Processing transaction";
    case BuyButtonState.ENABLED_CARD:
      return "Pay with card";
    case BuyButtonState.ENABLED_WALLET:
      return "Pay with $USDC";
    case BuyButtonState.ENABLED_UNAUTHORIZED:
      return "Buy credits";
    case BuyButtonState.DISABLED:
      return "Insufficient balance";
    case BuyButtonState.INVALID_CREDIT:
      return "Invalid credit";
    default:
      return "Unknown state";
  }
});

const addModalToHandler = (newContinueHandler: (name: string) => void) => {
  return () => {
    continueHandler.value = newContinueHandler;
    modalEl.value?.show();
  };
};

const addUnauthorizedPaymentModalToHandler = (
  newContinueHandler: (name: string, email: string) => void,
) => {
  return () => {
    continueUnauthorizedPaymentHandler.value = newContinueHandler;
    modalEl.value?.show();
  };
};

const handleModalType = (type: UserType) => {
  modalType.value = type;
};

const buttonHandler = computed<(() => void) | undefined>(() => {
  switch (buttonState.value) {
    case BuyButtonState.ENABLED_CARD:
      handleModalType(UserType.EMAIL_AUTHORIZED);
      tracking.trackEvent(TrackEvents.CLICKED_PAYMENT_BUTTON, {
        status: "pay with card",
      });
      return addModalToHandler(props.handleCardPayment);
    case BuyButtonState.ENABLED_WALLET:
      handleModalType(
        UserType.CRYPTO_WALLET_AUTHORIZED,
      );
      tracking.trackEvent(TrackEvents.CLICKED_PAYMENT_BUTTON, {
        status: "pay with crypto",
      });
      return addModalToHandler(props.handleBuyCredits);
    case BuyButtonState.ENABLED_UNAUTHORIZED:
      handleModalType(UserType.GUEST);
      tracking.trackEvent(TrackEvents.CLICKED_PAYMENT_BUTTON, {
        status: "unauthorized",
      });
      return addUnauthorizedPaymentModalToHandler(
        props.handleUnauthorizedUserPayment,
      );
    default:
      return undefined;
  }
});

const isDisabled = computed(
  () =>
    buttonState.value === BuyButtonState.DISABLED ||
    buttonState.value === BuyButtonState.LOADING ||
    buttonState.value === BuyButtonState.INVALID_CREDIT,
);

const handleContinue = (name: string, email?: string) => {
  if (
    modalType.value === UserType.GUEST &&
    continueUnauthorizedPaymentHandler.value
  ) {
    return continueUnauthorizedPaymentHandler.value(name, email || "");
  } else if (continueHandler.value) {
    return continueHandler.value(name);
  }
};

const buttonsCssClasses = `
  btn
  btn-ghost
  btn-block
  normal-case
  bg-greenPrimary
  hover:bg-greenDark
  text-title24
  lg:text-title32
  lg:btn-lg
  p-0
  px-12
  font-normal
  disabled:bg-lightGray
  disabled:text-white
`;
</script>
<template>
  <button
    :disabled="isDisabled"
    :class="buttonsCssClasses"
    @click="buttonHandler"
  >
    <span
      v-if="showButtonSpinner"
      class="hidden md:loading loading-spinner"
    ></span>
    <!-- Always render the text container, but control visibility with classes -->
    <span
      :class="{
        'hidden md:block': showButtonSpinner,
        block: !showButtonSpinner,
      }"
    >
      {{ buttonText }}
    </span>
  </button>
  <CertificateHolderModal
    ref="modalEl"
    @continue="handleContinue"
    :modal-type="modalType"
  />
</template>
