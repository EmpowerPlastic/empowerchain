<script setup lang="ts">
import FAQCollapse from "@/components/FAQCollapse.vue";
const faqData = [
  {
    id: "foo",
    title: "Frequently asked q 1",
    content:
      "Decentralizing the new (circular) economy so everyone can get a fair share of the upside of making the world a cleaner and better place. Decentralizing the new (circular) economy",
  },
  {
    id: "bar",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Decentralizing the new (circular) economy so everyone can get a fair share of the upside of making the world a cleaner and better place. Decentralizing the new (circular) economy",
  },
  {
    id: "baz",
    title: "Ipsum dolor sit amet",
    content:
      "Decentralizing the new (circular) economy so everyone can get a fair share of the upside of making the world a cleaner and better place. Decentralizing the new (circular) economy",
  },
  {
    id: "qux",
    title: "Sit amet lorem ipsum",
    content:
      "Decentralizing the new (circular) economy so everyone can get a fair share of the upside of making the world a cleaner and better place. Decentralizing the new (circular) economy",
  },
  {
    id: "foo1",
    title: "Frequently asked q 1",
    content:
      "Decentralizing the new (circular) economy so everyone can get a fair share of the upside of making the world a cleaner and better place. Decentralizing the new (circular) economy",
  },
  {
    id: "bar1",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Decentralizing the new (circular) economy so everyone can get a fair share of the upside of making the world a cleaner and better place. Decentralizing the new (circular) economy",
  },
  {
    id: "baz1",
    title: "Ipsum dolor sit amet",
    content:
      "Decentralizing the new (circular) economy so everyone can get a fair share of the upside of making the world a cleaner and better place. Decentralizing the new (circular) economy",
  },
  {
    id: "qux1",
    title: "Sit amet lorem ipsum",
    content:
      "Decentralizing the new (circular) economy so everyone can get a fair share of the upside of making the world a cleaner and better place. Decentralizing the new (circular) economy",
  },
  {
    id: "foo2",
    title: "Frequently asked q 1",
    content:
      "Decentralizing the new (circular) economy so everyone can get a fair share of the upside of making the world a cleaner and better place. Decentralizing the new (circular) economy",
  },
  {
    id: "bar2",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Decentralizing the new (circular) economy so everyone can get a fair share of the upside of making the world a cleaner and better place. Decentralizing the new (circular) economy",
  },
  {
    id: "baz2",
    title: "Ipsum dolor sit amet",
    content:
      "Decentralizing the new (circular) economy so everyone can get a fair share of the upside of making the world a cleaner and better place. Decentralizing the new (circular) economy",
  },
  {
    id: "qux2",
    title: "Sit amet lorem ipsum",
    content:
      "Decentralizing the new (circular) economy so everyone can get a fair share of the upside of making the world a cleaner and better place. Decentralizing the new (circular) economy",
  },
];
</script>

<template>
  <div class="p-5 min-h-[50vh] font-Inter">
    <h3 class="text-white text-title24 md:mt-10">Frequently asked questions</h3>

    <div class="my-5 text-title18">
      <FAQCollapse
        v-for="faqItem in faqData"
        :key="faqItem.id"
        :id="faqItem.id"
        :title="faqItem.title"
        :content="faqItem.content"
        name="faq"
      />
    </div>
  </div>
</template>
