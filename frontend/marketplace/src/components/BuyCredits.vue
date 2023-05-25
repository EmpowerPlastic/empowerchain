<script setup lang="ts">
export interface BuyCreditsProps {
  availableCredits: string
  pricePerCredit: number
  selectedCoin:string
  amount:number
}
defineProps<BuyCreditsProps>()
const emitModalValue = defineEmits(['update:selectedCoin','update:amount'])

const updateSelectedCoinValue = (val:string) => {
  emitModalValue('update:selectedCoin', val)
}

const updateAmount = (e: Event) => {
  emitModalValue('update:amount', (e.target as HTMLInputElement).value)
}
</script>
<template>
  <div class="bg-darkGray md:grid md:grid-cols-4 flex flex-col gap-1 p-6 rounded-sm">
    <div>
      <p class="text-title18">Available credits</p>
      <p class="text-title38">750/1500</p>
    </div>
    <div>
      <p class="text-title18">Price per credit</p>
      <p class="text-title38 font-bold">$100.00 </p>
    </div>
    <div>
      <div class="flex md:ml-[-60px]">
        <p class="text-title18 text-subLabel  text-right hidden md:block mr-3 mt-8">Cost 00000</p>
        <div>
          <p class="text-title18">How many you want to buy?</p>
          <input type="text" class="input bg-darkGray mt-1 text-white text-title38 font-bold w-full" :value="amount" @input="updateAmount"/>
        </div>
      </div>
      <p class="text-title18 text-subLabel mt-1 md:hidden">Cost 00000</p>
    </div>
    <div class="flex flex-row mt-8">
      <button
          class="btn btn-ghost w-full rounded-r-none md:max-w-[80%] max-w-[85%] normal-case bg-greenPrimary text-title24 p-0 font-normal md:ml-4">
        Buy with ${{selectedCoin}}
      </button>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost rounded-l-none bg-dropdownGreen">
          <img class="w-4" src="../assets/dropdownIconButton.svg"/>
        </label>
        <div tabindex="0" class="dropdown-content menu p-4 shadow bg-dropdownGray rounded-box w-52 !list-none">
          <li class="text-title18 font-semibold my-1 cursor-pointer" v-for="item in 3" :key="item" @click="updateSelectedCoinValue(item)">Item 1</li>
        </div>
      </div>
    </div>
  </div>
</template>