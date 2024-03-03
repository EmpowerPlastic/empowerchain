import { useHead as useHeadUnhead } from "@unhead/vue";

type UseHead = typeof useHeadUnhead;

export const useHead: UseHead = (input, options?) => {
  useHeadUnhead(
    {
      titleTemplate: "%s | Empower Market",
      ...input,
    },
    options,
  );
};
