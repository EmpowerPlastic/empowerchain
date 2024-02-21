import { computed, type Ref, toRefs, type ComputedRef } from "vue";
import { type CreditCollection } from "@/types/GraphqlSchema";

const isInteger = (value: number) => {
  return value == Math.round(value);
};

export const useListingVolume = (
  creditCollection: Ref<CreditCollection>,
): { volume: ComputedRef<number> } => {
  const { retiredAmount, activeAmount } = toRefs(creditCollection.value);
  // TODO: Wont work on float numbers
  if (!isInteger(retiredAmount.value) || !isInteger(activeAmount.value)) {
    throw new Error(
      "Listing volume is not a valid number. " + retiredAmount.value,
    );
  }
  const volume = computed(() => {
    return (
      parseInt(retiredAmount.value as unknown as string) +
      parseInt(activeAmount.value as unknown as string)
    );
  });

  return {
    volume,
  };
};
