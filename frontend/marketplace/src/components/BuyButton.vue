<script setup lang="ts">
import { computed } from 'vue';
import { useAuth } from '@/stores/auth';
export interface BuyButtonProps {
  showButtonSpinner: boolean;
  insufficientBalance: boolean;
  coinFormatted: string;
  handleCardPayment: () => void;
  handleBuyCredits: () => void;
  walletConnected: () => boolean;
}
const props = defineProps<BuyButtonProps>();

const { isAuthenticated, handleSignIn } = useAuth();

enum BuyButtonState {
  DISABLED = 'disabled',
  ENABLED_UNAUTHORIZED = 'enabled_unauthorized',
  ENABLED_CARD = 'enabled_card',
  ENABLED_WALLET = 'enabled_wallet',
  LOADING = 'loading',
}

const buttonState = computed<BuyButtonState>(() => {
  if (props.showButtonSpinner) {
    return BuyButtonState.LOADING;
  }

  if (isAuthenticated) {
    return BuyButtonState.ENABLED_CARD;
  }

  if (props.insufficientBalance) {
    return BuyButtonState.DISABLED;
  }

  if (props.walletConnected()) {
    return BuyButtonState.ENABLED_WALLET;
  }

  return BuyButtonState.ENABLED_UNAUTHORIZED;
});

const buttonText = computed(() => {
  switch (buttonState.value) {
    case BuyButtonState.LOADING:
      return 'Processing transaction';
    case BuyButtonState.ENABLED_CARD:
      return 'Pay with card';
    case BuyButtonState.ENABLED_WALLET:
      return 'Pay with wallet';
    case BuyButtonState.ENABLED_UNAUTHORIZED:
      return 'Log in to pay';
    case BuyButtonState.DISABLED:
      return 'Insufficient balance';
    default:
      return 'Unknown state';
  }
});

const buttonHandler = computed<() => void>(() => {
  switch (buttonState.value) {
    case BuyButtonState.ENABLED_CARD:
      return props.handleCardPayment;
    case BuyButtonState.ENABLED_WALLET:
      return props.handleBuyCredits;
    case BuyButtonState.ENABLED_UNAUTHORIZED:
      return handleSignIn;
    default:
      return null
  }
})

const isDisabled = computed(() => buttonState.value === BuyButtonState.DISABLED || buttonState.value === BuyButtonState.LOADING);

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
  > <span v-if="showButtonSpinner" class="loading loading-spinner"></span>
    {{ buttonText }}
  </button>
</template>