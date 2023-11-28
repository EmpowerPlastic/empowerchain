<script setup lang="ts">
import { useAuth } from '@/stores/auth'
export interface BuyButtonProps {
  showButtonSpinner: boolean;
  insufficientBalance: boolean;
  coinFormatted: string;
  handleCardPayment: () => void;
}
defineProps<BuyButtonProps>();

const buyCredits = () => {
  alert('Call API with transaction details to get a generated stripe link')
}
const { isAuthenticated, handleSignIn } = useAuth();
const buttonsCssClasses = `btn btn-ghost w-full md:max-w-[80%] normal-case bg-greenPrimary text-title24 p-0 font-normal md:ml-4 disabled:bg-lightGray disabled:text-white`;
</script>
<template>
  <button
    v-if="isAuthenticated"
    :disabled="showButtonSpinner || insufficientBalance"
    :class="buttonsCssClasses"
    @click="handleCardPayment"
  > <span v-if="showButtonSpinner" class="loading loading-spinner"></span>
    {{
      insufficientBalance
        ? "Insufficient balance"
        : showButtonSpinner
        ? "Processing transaction"
        // : "Buy with $" + coinFormatted
        : "Pay with card"
    }}
  </button>
  <!-- <div class="dropdown dropdown-end">
    <label
      tabindex="0"
      class="btn btn-ghost rounded-l-none bg-dropdownGreen !px-0 mr-5"
    >
      <img class="w-4 mx-5" src="../assets/dropdownIconButton.svg" />
    </label>
    <div
      tabindex="0"
      class="dropdown-content menu p-4 shadow bg-dropdownGray rounded-box w-52 !list-none"
    >
      <li
        disabled
        class="text-title12 font-semibold my-1 cursor-pointer"
        v-for="coin in coinsArray"
        :key="coin"
      >
        {{ coin }}
      </li>
    </div>
  </div> -->

  <button
    v-else
    :class="buttonsCssClasses"
    @click="handleSignIn">Log in to pay
  </button>
  
  

</template>