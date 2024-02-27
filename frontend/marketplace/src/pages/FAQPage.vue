<script setup lang="ts">
import FAQCollapse from "@/components/FAQCollapse.vue";
const faqData = [
  {
    id: "FAQ_1",
    title: "What are plastic credits?",
    content:
      "A plastic credit is a certificate representing the collection of a specified weight of plastic waste that has been recovered and/or recycled. The plastic credit can represent plastic which would have otherwise ended up in the natural environment or it can represent plastic that has been cleaned up from the environment. These credits are measurable, traceable, and verifiable, ensuring that they represent actual reductions in plastic waste.",
  },
  {
    id: "FAQ_2",
    title: "What does one plastic credit represent?",
    content:
      "On the Empower platform 1 plastic credit equals 1 kg of plastic collected or recycled from the environment or other unmanaged locations that could cause a plastic leakage.",
  },
  {
    id: "FAQ_3",
    title: "Why would I want to buy plastic credits?",
    content:
      "Plastic credits are a way to combat the global problem of plastic pollution. Organisations and individuals can purchase plastic credits in order to support plastic clean up efforts around the world, offset their own plastic footprint. Purchasing plastic credits is an efficient way of financing projects that help remove and recycle plastic waste from the environment as well as build recycling infrastructure around the world. This creates a market-based solution that incentivises the reduction of plastic usage and waste while also providing funding for plastic waste recovery and recycling efforts.",
  },
  {
    id: "FAQ_4",
    title: "How do I pay for plastic credits?",
    content:
      "You can purchase plastic credits through the empower plastic credit marketplace. We accept various payment methods including credit cards, debit cards and crypto.",
  },
  {
    id: "FAQ_5",
    title: "How much is a plastic credit?",
    content:
      "The price of a plastic credit varies based on market conditions and the cost of collecting and recycling plastic waste. Please check the different projects on the platform for the current price.",
  },
  {
    id: "FAQ_6",
    title: "How much money does the seller of plastic credit get?",
    content:
      "Out of the total transaction, the seller retains a substantial percentage. There is a 3% service fee, and in addition, a payment processing fee of 0-5%, depending on the selected payment method. The exact percentage retained by the seller can be calculated by deducting these fees from the total transaction amount",
  },
  {
    id: "FAQ_7",
    title: "What is blockchain?",
    content:
      "Blockchain is a type of distributed ledger technology, a distributed data table if you will, that allows for data to be stored across a network of computers in a secure and transparent manner. It's the technology that underpins cryptocurrencies like Bitcoin, Ethereum and MPWR.",
  },
  {
    id: "FAQ_8",
    title: "What is MPWR?",
    content:
      "MPWR is the Empower platform's native digital currency. You can use MPWR to purchase plastic credits and other services on the Empower platform.",
  },
  {
    id: "FAQ_9",
    title: "What is an 'offset certificate'?",
    content:
      "An offset certificate is a document that certifies you have offset a certain amount of plastic waste by purchasing and retiring plastic credits.",
  },
  {
    id: "FAQ_10",
    title: "What is plastic offsetting?",
    content:
      "Plastic offsetting is a mechanism for companies or individuals to compensate for the plastic produced, consumed, or disposed of from their products, services, operations or consumption. Through the purchase of credits, companies or individuals fund projects that physically remove plastic from the environment or from recycling plastics that would otherwise be disposed of. These projects can take various forms, including environmental collection and leakage prevention projects (waste management) to recycling technologies.",
  },
  {
    id: "FAQ_11",
    title: "What does it mean to retire a plastic credit?",
    content:
      "In practice, retiring a credit means taking this credit off of the market, claiming part of the impact it made on the environment and receiving a certificate for it .\n" +
      "Retiring a credit always means that someone is a “retirer” and is taking the credit off of the market either by themselves or on behalf of someone else (a client, a relative, a public institution, etc).\n" +
      "Some companies may refer to retirement of credits as “offset” and claim different achievements through it. These claims are the sole responsibility of the entity that emits them. To learn more on plastic offset methodologies and claims, visit <a href='https://www.plasticfootprint.earth' target='_blank'>https://www.plasticfootprint.earth</a>\n" +
      "As a result of retirement, Empower registry will display publicly all informations linked to this specific event, including:\n" +
      "\u2022 The project issuing the credit, \n" +
      "\u2022 The date of issuance and retirement, \n" +
      "\u2022 The number of credits retired and all their contained data, along with \n" +
      "\u2022 The name of the end-buyer of the credit, who shall be able to claim the impact made.\n",
  },
  {
    id: "FAQ_12",
    title: "Can I get my name on the certificate?",
    content:
      "Yes, when you purchase plastic credits, you have the option to include your name on the offset certificate.",
  },
  {
    id: "FAQ_13",
    title: "Will I get a receipt for my purchase?",
    content:
      "Yes, you will receive a receipt for your purchase. The receipt will be sent to the email address you provide during the purchase process.",
  },
  {
    id: "FAQ_14",
    title: "How do I know plastic has been collected?",
    content:
      "Empower´s platform uses blockchain technology to track the collection and recycling of plastic waste. This provides a transparent and verifiable record of the plastic waste that has been offset by your purchase. You can view the plastic which your plastic credits represent on the plastic credit registry.",
  },
  {
    id: "FAQ_15",
    title: "How can I use this in my company's CSR work?",
    content:
      "Purchasing plastic credits can be a part of your company's Corporate Social Responsibility (CSR) strategy. By purchasing plastic credits, you can demonstrate your company's commitment to sustainable practices and social responsibility and can help enhance your company's reputation.",
  },
  {
    id: "FAQ_16",
    title: "Who creates the credits listed for sale?",
    content:
      "Collectors using Empower tools for traceability are able to create credits based on the data of the materials collected. Active and vetted collectors are the generators of the plastic credits listed for sale.",
  },
  {
    id: "FAQ_17",
    title:
      "How do I know the credits are based on real collection/recycling efforts?",
    content:
      "On this marketplace, all collectors able to list credits for sale have been subject to a Due Diligence and Impact assessment. Additionally, all data contained in listed credits have been verified pre-publishing by Empower, or by third-party auditors if the collector is certified under a certain standard, in which case the listing will display the standard in question.",
  },
  {
    id: "FAQ_18",
    title: "What are the different standards of the marketplace listings?",
    content:
      "Empower allows validated auditors of different standards to audit the data of certified collectors. Certain standards may focus on social impact, origin of the material or even traceability. We invite you to consult the online websites of any of these standards to learn more about their requirements.",
  },
  {
    id: "FAQ_19",
    title:
      "I want to purchase credits in larger quantities, or I have special purchasing criterias. Who can I get in contact with to discuss my needs?",
    content:
      "Empower Global Cleanup Fund can help you meet these requirements. Send us your questions at hi@empower.eco and we will be in touch for your special order.",
  },
];
</script>

<template>
  <div class="p-5 min-h-[50vh] font-Inter">
    <h3 class="text-white text-title24 md:mt-10 mt-5">
      Frequently asked questions
    </h3>

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
