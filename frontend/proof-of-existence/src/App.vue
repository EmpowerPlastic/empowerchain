<script setup lang="ts">
import { RouterView } from "vue-router";
import "flowbite";
</script>

<template>
  <button
    data-drawer-target="logo-sidebar"
    data-drawer-toggle="logo-sidebar"
    aria-controls="logo-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
  >
    <span class="sr-only">Open sidebar</span>
    <img class="w-7" src="../src/assets/images/sideButton.svg" />
  </button>

  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-lightBlack">
      <a href="/" class="flex items-center pl-2.5 mb-5">
        <img
          src="../src/assets/images/emp-logo.png"
          class="h-8 mr-3 sm:h-7"
          alt="Logo"
        />
      </a>
      <div class="flex justify-center flex-col h-5/6 items-center">
        <ul class="space-y-2 w-full flex flex-col items-center">
          <li>
            <a href="/" class="flex items-center w-full">
              <img class="w-7" src="../src/assets/images/certifyIcon.svg" />
              <span class="flex-1 ml-3 whitespace-nowrap text-white"
                >Certify</span
              >
            </a>
          </li>
          <li>
            <a
              href="/verify"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img class="w-7" src="../src/assets/images/verifyIcon.svg" />
              <span class="flex-1 ml-3 whitespace-nowrap text-white"
                >Verify</span
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </aside>

  <div class="p-4 sm:ml-64">
    <div class="flex flex-col items-start p-4 mt-0 sm:mt-40">
      <div class="flex flex-col items-center">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
