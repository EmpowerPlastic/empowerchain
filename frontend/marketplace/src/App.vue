<script setup lang="ts">
import "flowbite";
import NavBar from "./components/NavBar.vue";
import AuctionCard from "@/components/AuctionCard.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <NavBar/>

  <div class="p-5 md:px-[10%]">
    <!--    Search Auction-->
    <div class="relative md:hidden z-0 w-full mb-7 mt-3">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <img src="./assets/searchIcon.svg">
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-3">
        <button type="button" class="bg-transparent left-1/2 -translate-x-1/2" id="dropdownDividerButton"
                data-dropdown-toggle="dropdownDivider">
          <img src="./assets/filterIcon.svg">
        </button>
      </div>
      <input type="text"
             class="bg-white text-textPlaceHolderGray border-0 font-Inter text-title14 rounded-lg w-full pl-10"
             placeholder="Search auctions">
    </div>

    <!--Filter Dropdown-->
    <div id="dropdownDivider"
         class="z-10 hidden  divide-y bg-dropdownBlack absolute right-0 rounded-lg w-11/12 m-l-[-30px]">
      <ul class="p-4 font-Inter grid grid-cols-1 gap-4" aria-labelledby="dropdownDividerButton">
        <li>
          <div>
            <p class="text-title14 text-dropDownText">LOCATION</p>
            <div class="flex flex-row justify-between text-title18 text-white">Select Location
              <button type="button" class="bg-transparent">
                <img src="./assets/dropdown-icon.svg">
              </button>
            </div>
          </div>
        </li>
        <li>
          <div>
            <p class="text-title14 text-dropDownText">VOLUME</p>
            <div class="flex flex-row justify-between text-title18 text-white">Select volume
              <button type="button" class="bg-transparent">
                <img src="./assets/dropdown-icon.svg">
              </button>
            </div>
          </div>
        </li>
        <li>
          <div>
            <p class="text-title14 text-dropDownText">REGISTRATION DATE</p>
            <div class="flex flex-row justify-between text-title18 text-white">Select date
              <button type="button" class="bg-transparent">
                <img src="./assets/dropdown-icon.svg">
              </button>
            </div>
          </div>
        </li>
        <li>
          <div>
            <p class="text-title14 text-dropDownText">COLLECTOR ORGANISATION</p>
            <div class="flex flex-row justify-between text-title18 text-white">Select collector
              <button type="button" class="bg-transparent">
                <img src="./assets/dropdown-icon.svg">
              </button>
            </div>
          </div>
        </li>
        <li>
          <div>
            <p class="text-title14 text-dropDownText">CREDIT TYPE</p>
            <div class="flex flex-row justify-between text-title18 text-white">Select credit
              <button type="button" class="bg-transparent">
                <img src="./assets/dropdown-icon.svg">
              </button>
            </div>
          </div>
        </li>
        <li>
          <div>
            <p class="text-title14 text-dropDownText">PRICE PER CREDIT</p>
            <div class="flex flex-row justify-between text-title18 text-white">Select price
              <button type="button" class="bg-transparent">
                <img src="./assets/dropdown-icon.svg">
              </button>
            </div>
          </div>
        </li>
        <li>
          <div>
            <button class="bg-greenPrimary font-Inter text-title15 text-white w-full p-3 rounded-sm">Search</button>
          </div>
        </li>
      </ul>
    </div>

    <!--Search and filter-->
    <div class="hidden md:grid grid-flow-row auto-rows-max  mb-10 font-Inter h-full">
      <div class="flex flex-row bg-darkGray w-full p-4 rounded-t-sm">
        <input class="w-full rounded-sm bg-darkGray px-3 h-12 text-lightGray text-title24"
               placeholder="Search auctions"/>
        <button class="flex justify-center items-center bg-greenPrimary w-[60px] ml-4 rounded-sm">
          <img class="h-5" src="./assets/searchIconWhite.svg">
        </button>
      </div>
      <div class="grid grid-cols-6  divide-x divide-dividerGray bg-mediumGray w-full rounded-b-sm">
        <div class="w-full p-3 px-4">
          <p class="text-title14 text-dropDownText">VOLUME</p>
          <div class="flex flex-row justify-between text-title18 text-white">Select volume
            <button type="button" class="bg-transparent mr-5">
              <img src="./assets/dropdown-icon.svg">
            </button>
          </div>
        </div>
        <div class="w-full p-3 px-4">
          <p class="text-title14 text-dropDownText">LOCATION</p>
          <div class="flex flex-row justify-between  text-title18 text-white">Select Location
            <button type="button" class="bg-transparent mr-5">
              <img src="./assets/dropdown-icon.svg">
            </button>
          </div>
        </div>
        <div class="w-full p-3 px-4">
          <p class="text-title14 text-dropDownText">REGISTRATION DATE</p>
          <div class="flex flex-row justify-between  text-title18 text-white">Select date
            <button type="button" class="bg-transparent mr-5">
              <img src="./assets/dropdown-icon.svg">
            </button>
          </div>
        </div>
        <div class="w-full p-3 px-4">
          <p class="text-title14 text-dropDownText">COLLECTOR ORGANISATION</p>
          <div class="flex flex-row justify-between text-title18 text-white">Select collector
            <button type="button" class="bg-transparent mr-5">
              <img src="./assets/dropdown-icon.svg">
            </button>
          </div>
        </div>
        <div class="w-full p-3 px-4">
          <p class="text-title14 text-dropDownText">CREDIT TYPE</p>
          <div class="flex flex-row justify-between text-title18 text-white">Select credit
            <button type="button" class="bg-transparent mr-5">
              <img src="./assets/dropdown-icon.svg">
            </button>
          </div>
        </div>
        <div class="w-full p-3 px-4">
          <p class="text-title14 text-dropDownText">PRICE PER CREDIT</p>
          <div class="flex flex-row justify-between text-title18 text-white">Select price
            <button type="button" class="bg-transparent mr-5">
              <img src="./assets/dropdown-icon.svg">
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--  Home Banner-->
    <div class="text-white">
      <div class="flex flex-row justify-center md:justify-end bg-white rounded-lg md:h-[30vw] p-2">
        <div class="hidden md:block mt-7 text-black self-center px-10 pb-5">
          <p class="font-openSans whitespace-pre-wrap text-title40">
            <b>Empower</b>
          </p>
          <p class="font-openSans whitespace-pre-wrap text-title40">Marketplace
          </p>
          <p class="font-openSans whitespace-pre-wrap text-title14">On a mission to accelerate the transition to a
            circular economy-and build a future where no plastic waste ends up in nature.
          </p>
        </div>
        <img class="h-[90%] md:mr-10 self-center" src="./assets/homeBanner.svg">
      </div>
      <div class="mt-7  md:hidden">
        <p class="font-openSans whitespace-pre-wrap text-title16">
          <b>Empower</b>
        </p>
        <p class="font-openSans whitespace-pre-wrap text-title26">Marketplace
        </p>
        <p class="font-openSans whitespace-pre-wrap text-title12">On a mission to accelerate the transition to a
          circular economy-and build a future where no plastic waste ends up in nature.
        </p>
      </div>
    </div>

    <!--Auctions section-->
    <div class="mt-5">
      <p class="font-Inter text-white text-title24 mb-3 md:text-title38">
        Feature Auctions
      </p>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
        <AuctionCard/>
        <AuctionCard/>
        <AuctionCard/>
        <AuctionCard/>
        <AuctionCard/>
        <div
            class="grid grid-rows-3 p-4 bg-greenPrimary h-[346px] md:h-full w-full rounded-sm font-Inter text-title32 text-white font-bold">
          <div class="row-start-2 flex flex-row justify-center items-center">
            View all auctions
          </div>
          <div class="row-start-3 flex flex-row justify-end ">
            <img class="h-14 self-end" src="./assets/viewAllIcon.svg">
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer/>
</template>

