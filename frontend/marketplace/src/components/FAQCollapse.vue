<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
export interface FAQCollapseProps {
  id: string;
  title: string;
  content: string;
  name: string;
}
const props = defineProps<FAQCollapseProps>();
const rootElRef = ref<HTMLElement | null>(null);
const route = useRoute();
const router = useRouter();
const isChecked = computed(() => {
  const { hash } = route;
  return hash === `#${props.id}`;
});

onMounted(() => {
  const { hash } = route;
  if (hash === `#${props.id}` && rootElRef.value) {
    const topPos = rootElRef.value.getBoundingClientRect().top + window.scrollY;
    // need to push it back to the next tick to ensure the element is in the DOM
    setTimeout(() => {
      window.scrollTo({
        top: topPos, // scroll so that the element is at the top of the view
        behavior: "smooth", // smooth scroll
      });
    }, 1);
  }
});

const handleClick = () => {
  if (isChecked.value) {
    router.push({ hash: "" });
  } else {
    router.push({ hash: `#${props.id}` });
  }
};
</script>
<template>
  <div
    :id="props.id"
    ref="rootElRef"
    class="collapse group collapse-arrow mb-1"
  >
    <input
      type="radio"
      :name="props.name"
      :checked="isChecked"
      :onClick="handleClick"
    />
    <div
      class="flex collapse-title text-white bg-mediumGray"
      :onClick="handleClick"
    >
      <div
        class="w-7 h-7 border-2 border-white rounded-full mr-3"
        :class="{ 'bg-greenPrimary': isChecked }"
      />
      {{ title }}
    </div>
    <div class="collapse-content bg-lightBlack">
      <p class="text-textWhite px-10 py-3">{{ content }}</p>
    </div>
  </div>
</template>
