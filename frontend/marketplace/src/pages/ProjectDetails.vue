<script setup lang="ts">
import {GoogleMap, Marker} from 'vue3-google-map'

const center = {lat: 40.689247, lng: -74.044502}
const copyToken = async (text: string) => {
  await navigator.clipboard.writeText(text);
}
</script>
<template>
  <div class="p-5 md:px-[10%] min-h-[60vh] text-white font-Inter">
    <!--  Title Section-->
    <p class="text-title18 mb-5">Project <span class="text-subTextGray">/ Project Details</span></p>
    <h1 class="text-title38">COMMUNITY COLLECTION AND CO-PROCESSING 2022</h1>
    <p class="text-title18 text-subTextGray">Sri Lanka</p>

    <!--    Gallery-->
    <div class="h-[300px] bg-darkGray my-5">
    </div>

    <!--    Buy Credits-->
    <div class="bg-darkGray md:grid md:grid-cols-4 flex flex-col gap-1 p-6 rounded-sm">
      <div>
        <p class="text-title18">Available credits</p>
        <p class="text-title38">750/1500</p>
      </div>
      <div>
        <p class="text-title18">Available credits</p>
        <p class="text-title38 font-bold">$100.00 </p>
      </div>
      <div>
        <div class="flex md:ml-[-60px]">
          <p class="text-title18 text-subLabel  text-right hidden md:block mr-3 mt-8">Cost 00000</p>
          <div>
            <p class="text-title18">How many you want to buy?</p>
            <input type="text" class="input bg-darkGray mt-1 text-white text-title38 font-bold w-full"/>
          </div>
        </div>
        <p class="text-title18 text-subLabel mt-1 md:hidden">Cost 00000</p>
      </div>
      <div class="flex flex-row mt-8">
        <button
            class="btn btn-ghost w-full rounded-r-none md:max-w-[80%] max-w-[85%] normal-case bg-greenPrimary text-title24 p-0 font-normal md:ml-4">
          Buy with $MPWR
        </button>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost rounded-l-none bg-dropdownGreen">
            <img class="w-4" src="../assets/dropdownIconButton.svg"/>
          </label>
          <ul tabindex="0" class="dropdown-content menu p-4 shadow bg-dropdownGray rounded-box w-52">
            <li class="text-title18 font-semibold my-1 cursor-pointer">Item 1</li>
            <li class="text-title18 font-semibold my-1">Item 2</li>
          </ul>
        </div>
      </div>
    </div>

    <!--    Project Details-->
    <div class="flex flex-col md:flex-row w-full mt-5 justify-between">
      <div class="grid md:grid-cols-2 md:gap-x-[180px] gap-y-5 bg-lightBlack rounded-sm p-6">
        <div>
          <p class="details-label">CREDIT type</p>
          <p class="details-content">PCRD</p>
        </div>
        <div>
          <p class="details-label">Material</p>
          <p class="details-content">PP, PET</p>
        </div>
        <div>
          <p class="details-label">Credits per kg</p>
          <p class="details-content">1</p>
        </div>
        <div>
          <p class="details-label">Registration date</p>
          <p class="details-content">May 16, 2022</p>
        </div>
        <div>
          <p class="details-label">Location</p>
          <p class="details-content">Sri Lanka</p>
        </div>
        <div>
          <p class="details-label">Collection organization</p>
          <p class="details-content">ABCD org plc</p>
        </div>
        <div>
          <p class="details-label">Volume</p>
          <p class="details-content">1000kg</p>
        </div>
      </div>

      <!--      Map Section-->
      <div class="mt-5 md:mt-0 md:w-[60%] md:ml-5 h-[330px] md:h-auto rounded-lg relative">
        <GoogleMap
            class="google-map"
            api-key="AIzaSyBezM4SJJO5t2bS5j2CPOdWJm_kHsdN4n0"
            style="width: 100%; height:100%;overflow: hidden"
            :center="center"
            :zoom="15"
        >
          <Marker :options="{ position: center }"/>
        </GoogleMap>
      </div>
    </div>

    <!--    Project Information-->
    <div class="bg-lightBlack p-6 mt-5 rounded-sm">
      <p class="text-title18  font-semibold mb-3">Project information</p>
      <p class="text-title14 text-textInfoGray">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
    </div>

    <!--Files For download-->
    <div class="bg-lightBlack p-6 mt-5 rounded-sm">
      <p class="text-title18  font-semibold mb-3">Public files available for download</p>
      <ul class="pl-5">
        <li class="text-title14 text-greenPrimary underline" v-for="data in 4" :key="data">
          <a href="#">Lorem ipsum dolor sit amet, consectet</a>
        </li>
      </ul>
    </div>

    <!--    Order Buy History-->
    <div class="bg-lightBlack p-6 mt-5 rounded-sm">
      <p class="text-title18 font-semibold mb-3">Order buy history</p>

      <div class="divide-y md:divide-none divide-dividerGray">
        <div class="md:p-2 py-2 md:flex md:justify-between" :class="index%2===0 ? 'md:bg-lightBlack':null" v-for="(data,index) in 5" :key="data">
          <div class="flex justify-between">
            <div class="md:flex x md:flex-row text-title12 md:text-title14 break-words">
              <p class="text-textInfoGray">07:00AM 10/Jan/2023</p>
              <p class="text-greenPrimary md:ml-16">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
            </div>
            <div>
              <button class="btn btn-ghost bg-transparent p-0 md:hidden" @click="copyToken('test')">
                <img src="../assets/copyIcon.svg"/>
              </button>
            </div>
          </div>
          <div class="flex justify-between text-title14 text-textInfoGray">
            <p>150 Token code</p>
            <p class="md:ml-16"> 750 MPWR</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style>
ul li::before {
  content: "\2022";
  color: white;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
</style>