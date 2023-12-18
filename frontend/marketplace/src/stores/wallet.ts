import { ref, computed } from "vue";

const address = ref<string | undefined>();
const isWalletConnected = computed(() => !!address.value);

export const useWallet = () => {
  return {
    address,
    isWalletConnected,
  };
};
