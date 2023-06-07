<script setup lang="ts">
import {CHAIN_ID} from '@/config/config';
import {onMounted, ref} from 'vue';
import { toast } from 'vue3-toastify';

const address = ref();
const showNav = ref(false)

onMounted(() => {
  connect();
});

const connect = async () => {
  if (!window.keplr) {
    toast.error("No wallet found");
  } else {
    const chainConfig = {
      chainId: "circulus-1",
      chainName: "EmpowerChain Testnet",
      rpc: "tpc://51.159.141.221:26657",
      rest: "http://51.159.141.221:1317",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "empower",
        bech32PrefixAccPub: "empower" + "pub",
        bech32PrefixValAddr: "empower" + "valoper",
        bech32PrefixValPub: "empower" + "valoperpub",
        bech32PrefixConsAddr: "empower" + "valcons",
        bech32PrefixConsPub: "empower" + "valconspub",
      },
      currencies: [
        {
          coinDenom: "MPWR",
          coinMinimalDenom: "umpwr",
          coinDecimals: 6,
          coinGeckoId: "mpwr",
        },
      ],
      feeCurrencies: [
        {
          coinDenom: "MPWR",
          coinMinimalDenom: "umpwr",
          coinDecimals: 6,
          gasPriceStep: {
            low: 0.01,
            average: 0.025,
            high: 0.04,
          },
        },
      ],
      stakeCurrency: {
        coinDenom: "MPWR",
        coinMinimalDenom: "umpwr",
        coinDecimals: 6,
      },
    };
    await window.keplr.experimentalSuggestChain(chainConfig);
    await window.keplr.enable(CHAIN_ID);
    const account = await window.keplr.getKey(CHAIN_ID);
    address.value = account.bech32Address.substring(0, 10) + '...';

    /*await window.leap.experimentalSuggestChain(chainConfig);
    await window.cosmostation.providers.keplr.experimentalSuggestChain(
        chainConfig
    );*/
  }

}

</script>

<template>
  <nav class="bg-gradient-radial bg-opacity-40 px-5 py-3"
       style="background-image: radial-gradient(50% 50% at 50% 50%, rgba(0, 227, 58, 0.4) 0%, rgba(0, 0, 0, 0.4) 88.02%);">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
      <a href="/" class="flex items-center">
        <img src="../assets/logo.png" class="h-6 mr-3 md:h-8 md:m-2" alt="Logo"/>
      </a>
      <button type="button"
              @click="showNav=true"
              class="inline-flex items-center ml-3 text-sm text-gray-500 rounded-lg md:hidden"

      >
        <img class="w-6" src="../assets/sideButton.svg">
      </button>
      <!--  Navbar list for big devices-->
      <div class="hidden md:grid grid grid-cols-2 gap-16 mr-10  font-Inter text-title18 text-white h-10">
        <div class="w-full">
          <ul class="flex flex-row items-center gap-8 h-full">
            <li>
              <a href="/">Home</a>
            </li>
            <!--            <li>-->
            <!--              <a>Get MPWR</a>-->
            <!--            </li>-->
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div>

          <div class="flex flex-row items-center">
            <button v-if="!address" class="bg-lightBlack border border-borderBlack  w-full rounded-xl h-full px-5 py-1"
                    @click="connect">
              {{ address || 'Connect wallet' }}
            </button>
            <!--          User Profile Dropdown-->
            <div class="dropdown dropdown-end">
              <template v-if="address">
                <label tabindex="0" class="btn btn-circle m-1">
                  <div class="avatar">
                    <div class="w-[48px] rounded-full border-borderBlack bg-darkBlack border-[1.5px] p-2">
                      <img src="../assets/walletAvatar.png"/>
                    </div>
                  </div>
                </label>
              </template>
              <div tabindex="0"
                   class="dropdown-content menu font-Inter divide-y divide-lightGray  bg-avatarBlack  rounded-sm items-center border-avatarBorder border-[1.5px]">
                <div class="menu py-5 items-center mx-16 min-w-[120px]">
                  <div class="avatar mb-3">
                    <div class="w-[82px] rounded-full bg-lightBlack">
                      <img class="p-4" src="../assets/walletAvatar.png"/>
                    </div>
                  </div>
                  <p class="text-title18">{{ address || 'Connect wallet' }}</p>
                  <!--                  <p class="text-title14 text-textGray">natasha@empower.eco</p>-->
                </div>

                <div class="menu py-2 items-center w-full">
                  <a
                      href="/certificate"
                      class="btn nav-dropdown-button">
                    My Credits
                  </a>
                  <!--                  <button-->
                  <!--                      class="btn nav-dropdown-button">-->
                  <!--                    Sign out-->
                  <!--                  </button>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!--  Navbar list for small devices-->
  <div
      v-if="showNav"
      class="absolute z-10 top-0 text-white flex flex-col items-center h-full w-full bg-navBarBlack md:hidden"
  >
    <button type="button"
            @click="showNav=false"
            data-drawer-target="navbar-default"
            data-collapse-toggle="navbar-default"
            class="bg-transparent self-end  mt-5 mr-3">
      <img class="h-7" src="../assets/closeIcon.svg">
    </button>
    <div class="grid grid-cols-1 gap-8 p-5 w-full font-Inter text-title24 text-white">
      <div>
        <button class="bg-buttonGray border border-greenPrimary w-full h-11 rounded-xl" @click="connect">  {{ address || 'Connect wallet' }}
        </button>
      </div>
      <ul class="flex flex-col items-center gap-4">
        <li>
          <a href="/">Home</a>
        </li>
        <!--        <li>-->
        <!--          <a>Get MPWR</a>-->
        <!--        </li>-->
        <li>
          <a href="/faq">FAQ</a>
        </li>
      </ul>
    </div>


  </div>

</template>

<style scoped>
.nav-dropdown-button {
  @apply btn-ghost rounded-sm text-greenPrimary font-bold text-title14 normal-case border-none
}
</style>


