<script setup lang="ts">
export interface BuyButtonProps {
  showButtonSpinner: boolean;
  insufficientBalance: boolean;
  isLoggedIn: boolean;
  coinFormatted: string;
}
defineProps<BuyButtonProps>();

const buyCredits = () => {}

</script>
<template>
      <button
        :disabled="showButtonSpinner || insufficientBalance"
        class="btn btn-ghost w-full rounded-r-none md:max-w-[80%] max-w-[85%] normal-case bg-greenPrimary text-title24 p-0 font-normal md:ml-4 disabled:bg-lightGray disabled:text-white"
        @click="buyCredits"
      >
        <span class="loading loading-spinner"></span>
        {{
          insufficientBalance
            ? "Insufficient balance"
            : showButtonSpinner
            ? "Processing transaction"
            : "Buy with $" + coinFormatted
        }}
      </button>

</template>