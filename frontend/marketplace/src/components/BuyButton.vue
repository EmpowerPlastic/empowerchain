<script setup lang="ts">
import { computed } from "vue";
import { useAuth } from "@/stores/auth";
import { isValidCreditAmount } from "@/utils/utils";
export interface BuyButtonProps {
  showButtonSpinner: boolean;
  insufficientBalance: boolean;
  coinFormatted: string;
  handleCardPayment: () => void;
  handleBuyCredits: () => void;
  isWalletConnected: boolean;
  availableCredits: number;
  buyingCreditAmount: number;
}
const props = defineProps<BuyButtonProps>();

const { isAuthenticated, handleSignIn } = useAuth();

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
      return "Log in to pay";
    case BuyButtonState.DISABLED:
      return "Insufficient balance";
    case BuyButtonState.INVALID_CREDIT:
      return "Invalid credit";
    default:
      return "Unknown state";
  }
});

const buttonHandler = computed<(() => void) | undefined>(() => {
  switch (buttonState.value) {
    case BuyButtonState.ENABLED_CARD:
      return props.handleCardPayment;
    case BuyButtonState.ENABLED_WALLET:
      return props.handleBuyCredits;
    case BuyButtonState.ENABLED_UNAUTHORIZED:
      return handleSignIn;
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
    <span v-if="showButtonSpinner" class="loading loading-spinner"></span>
    {{ buttonText }}
  </button>
</template>
