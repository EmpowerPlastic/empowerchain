<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import "flowbite";
const route = useRoute();
const activeTab = (path: "certify" | "verify") => {
  return route?.path?.split("/")[1] === path;
};
</script>
<template>
  <nav class="bg-transparent md:hidden">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="/" class="flex items-center">
        <img
          src="../src/assets/images/empower-logo.svg"
          class="ml-3 mt-3 w-32 md:w-36"
          alt="Logo"
        />
      </a>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        type="button"
        class="inline-flex items-center p-2 ml-3 rounded-lg md:hidden"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <img class="w-7" src="../src/assets/images/side-button.svg" />
      </button>
    </div>
  </nav>

  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 md:w-64 w-full h-screen transition-transform -translate-x-full md:translate-x-0 bg-drawerBackground md:bg-transparent border-r-[1px] border-bgPrimary border-opacity-10"
    aria-label="Sidebar"
  >
    <div class="flex flex-row w-full justify-end md:hidden">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        type="button"
        class="md:hidden p-5"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <img
          class="w-7 bg-bgPrimary rounded-[16px]"
          src="../src/assets/images/close-icon.svg"
        />
      </button>
    </div>

    <div class="h-full px-3 py-4">
      <a href="/" class="flex items-center pl-2.5 mb-5">
        <img
          src="../src/assets/images/empower-logo.svg"
          class="mx-3 mt-3 hidden md:inline-block md:w-[180px]"
          alt="Logo"
        />
      </a>
      <div class="flex justify-center flex-col h-5/6 items-center">
        <!--        Desktop Sidebar-->
        <div
          class="hidden space-y-2 w-full md:flex flex-col items-center p-3 px-5"
        >
          <div
            :class="!activeTab('verify') && 'bg-bgPrimary rounded-[13px]'"
            class="flex flex-row w-full p-3 justify-start"
          >
            <a href="/" class="flex flex-row items-center">
              <img
                class="w-7 mr-3 md:ml-10"
                :src="
                  activeTab('verify')
                    ? '../src/assets/images/certify-icon.svg'
                    : '../src/assets/images/certify-active-icon.svg'
                "
              />
              <p class="text-textPrimary text-title16">Certify</p>
            </a>
          </div>
          <div
            :class="
              route?.path?.split('/')[1] === 'verify' &&
              'bg-bgPrimary rounded-[13px]'
            "
            class="flex flex-row w-full p-3 justify-start"
          >
            <a href="/verify" class="flex flex-row items-center">
              <img
                class="w-7 mr-3 md:ml-10"
                :src="
                  activeTab('verify')
                    ? '../src/assets/images/verify-active-icon.svg'
                    : '../src/assets/images/verify-icon.svg'
                "
              />
              <p class="text-textPrimary text-title16">Verify</p>
            </a>
          </div>
        </div>
        <!--        Mobile Sidebar-->
        <div class="flex flex-col items-center md:hidden mt-[-30px]">
          <div class="flex flex-row w-full p-3 justify-start">
            <a href="/" class="flex flex-row items-center">
              <img
                class="w-7 mr-3"
                :src="
                  activeTab('verify')
                    ? '../src/assets/images/certify-icon-mobile.svg'
                    : '../src/assets/images/certify-active-icon-mobile.svg'
                "
              />
              <p class="text-textTertiary text-title14">Certify</p>
            </a>
          </div>
          <div class="flex flex-row w-full p-3 justify-start">
            <a href="/verify" class="flex flex-row items-center">
              <img
                class="w-7 mr-3"
                :src="
                  activeTab('verify')
                    ? '../src/assets/images/verify-active-icon-mobile.svg'
                    : '../src/assets/images/verify-icon-mobile.svg'
                "
              />
              <p class="text-textTertiary text-title14">Verify</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </aside>

  <div class="p-4 md:ml-64">
    <div class="flex flex-col items-start mt-0 md:ml-4 md:mt-[110px]">
      <img
        class="hidden md:block absolute right-[50px] top-[30px]"
        src="./assets/images/top-logo.svg"
      />
      <div class="flex flex-col items-center md:items-start w-full">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
