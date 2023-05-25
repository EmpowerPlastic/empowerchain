<script setup lang="ts">
import ImageCarousel from "@/components/ImageCarousel.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import CustomGoogleMap from "@/components/CustomGoogleMap.vue";
import BuyCredits from "@/components/BuyCredits.vue";
import {ref} from "vue";
import ProjectDetailContent from "@/components/ProjectDetailContent.vue";

const position = {lat: 40.689247, lng: -74.044502}
const copyToken = async (text: string) => {
  await navigator.clipboard.writeText(text);
}
const selectedCoin = ref('MPWR')
const amount = ref(0)
const dummyArray = [
  "https://dummyimage.com/16:9x1080/",
  "https://dummyimage.com/16:9x1080/",
  "https://entiretools.com/placeholder/600x300/D5D5D5/584959",
  "https://dummyimage.com/16:9x1080/",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MFL-2acE0aF3uUpVR00OnTGSIQtQMkTO8HEm375XIQ8ak9fiGq9qgNZRvRTb2tUORyc&usqp=CAU",
  "https://dummyimage.com/16:9x1080/"
]

</script>
<template>
  <div class="p-5 md:px-[10%] min-h-[60vh] text-white font-Inter">
    <!--  Title Section-->
    <p class="text-title18 mb-5">Project <span class="text-subTextGray">/ Project Details</span></p>
    <h1 class="text-title38">COMMUNITY COLLECTION AND CO-PROCESSING 2022</h1>
    <p class="text-title18 text-subTextGray">Sri Lanka</p>

    <!--    Gallery-->
    <ImageCarousel class="md:hidden my-5" :image-array="dummyArray"/>
    <ImageGallery class="hidden md:flex" :image-array="dummyArray"/>

    <!--    Buy Credits-->
    <BuyCredits available-credits="750/1500" v-model:selected-coin="selectedCoin" price-per-credit="$100.00"
                v-model:amount="amount"/>

    <!--    Project Details-->
    <div class="flex flex-col md:flex-row w-full mt-5 justify-between">
      <div class="grid md:grid-cols-2 md:gap-x-[180px] gap-y-5 bg-lightBlack rounded-sm p-6">
        <ProjectDetailContent label="CREDIT type" value="PCRD"/>
        <ProjectDetailContent label="Material" value="PP,PET"/>
        <ProjectDetailContent label="Credits per kg" value="1"/>
        <ProjectDetailContent label="Registration date" value="May 16, 2022"/>
        <ProjectDetailContent label="Location" value="Sri Lanka"/>
        <ProjectDetailContent label="Collection organization" value="ABCD org plc"/>
        <ProjectDetailContent label="Volume" value="100kg"/>
      </div>

      <!--      Map Section-->
      <div class="mt-5 md:mt-0 md:w-[60%] md:ml-5 h-[330px] md:h-auto rounded-lg relative">
        <CustomGoogleMap :position="position"/>
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
        <div class="md:p-2 py-2 md:flex md:justify-between" :class="index%2===0 ? 'md:bg-lightBlack':null"
             v-for="(data,index) in 5" :key="data">
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
<style scoped>
ul li::before {
  content: "\2022";
  color: white;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
</style>