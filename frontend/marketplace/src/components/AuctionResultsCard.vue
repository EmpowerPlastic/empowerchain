<script setup lang="ts">
export interface AuctionResultsCardProps {
  cardData: {
    price: number
    availableCredits: string
    volume: number
    applicant: string
    location: string
    material: string
    imageURL: string
  }
}
defineProps<AuctionResultsCardProps>()
</script>
<template>
  <div
      class="bg-auctionBackground md:bg-lightBlack rounded-lg font-Inter text-white my-5 md:p-3 md:grid md:grid-cols-5 min-h-[180px]">
    <img class="h-full col-span-1" src="../assets/auctionCard.png">

    <!--      Details for Mobile UI-->
    <div class="grid grid-cols-2 p-5 gap-4 md:hidden">
      <div>
        <p class="text-title24 font-bold">
          ${{ cardData.price }}
        </p>
        <p class="text-title15 font-light">
          Price per credit
        </p>
      </div>
      <div class="text-right">
        <p class="text-title13 font-bold">
          {{ cardData.volume }}kg
        </p>
        <p class="text-title11 font-light">
          Volume
        </p>
      </div>
      <div>
        <p class="text-title14 font-bold">
          {{ cardData.availableCredits }}
        </p>
        <p class="text-title12 font-light">
          Available credits
        </p>
      </div>
      <div>
        <button class="btn bg-greenPrimary w-full h-full rounded-sm text-title15 px-2 normal-case font-normal">
          View details
        </button>
      </div>
    </div>

    <!--      Details for Desktop UI-->
    <div class="hidden md:grid grid-cols-5 gap-5 w-full col-span-4 py-2 px-6 ml-2">
      <div class="col-span-1 ...">
        <p class="details-title">Material</p>
        <p>{{ cardData.material }}</p>
        <ul class="list-disc ml-6">
          <li>
            Coloured
          </li>
          <li>
            Plastic Long
          </li>
        </ul>
      </div>
      <div class="col-span-1">
        <p class="details-title">Location</p>
        <p>{{ cardData.location }}</p>
      </div>
      <div class="col-span-1">
        <p class="details-title">Applicant</p>
        <p>{{ cardData.applicant }}</p>
      </div>
      <div class="col-span-1">
        <p class="details-title">Volume</p>
        <p>{{ cardData.volume }} kg</p>
      </div>
      <div class="col-span-1 text-right">
        <p class="text-title32 font-bold leading-7 mt-6">${{ cardData.price }}</p>
        <p class="text-title14 font-bold text-textGray leading-6">20MPWR</p>
        <p class="text-title18 leading-3 font-light">Price per credit</p>

        <p class="text-title14 font-bold mt-7 leading-[13px]">{{ cardData.availableCredits }}</p>
        <p class="text-title12 font-bold font-light">Available credits</p>
      </div>
    </div>

  </div>
</template>