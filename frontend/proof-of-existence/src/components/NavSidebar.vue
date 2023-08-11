<script></script>
<template>
  <nav class="bg-transparent md:hidden">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="/" class="flex items-center">
        <img
          src="./src/assets/images/emp-logo.png"
          class="ml-3 mt-3 w-32 md:w-36"
          alt="Logo"
        />
      </a>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <img class="w-7" src="../src/assets/images/sideButton.svg" />
      </button>
    </div>
  </nav>

  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 md:w-64 w-full h-screen transition-transform -translate-x-full md:translate-x-0 md:bg-lightBlack bg-darkBlack"
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
        <img class="w-7" src="../src/assets/images/close-icon.svg" />
      </button>
    </div>

    <div class="h-full px-3 py-4 overflow-y-auto bg-lightBlack">
      <a href="/" class="flex items-center pl-2.5 mb-5">
        <img
          src="../src/assets/images/emopwer-logo.svg"
          class="ml-3 mt-3 hidden md:inline-block md:w-36"
          alt="Logo"
        />
      </a>
      <div class="flex justify-center flex-col h-5/6 items-center">
        <div class="space-y-2 w-full flex flex-col items-center p-3">
          <a
            href="/"
            class="flex flex-row w-full p-2 md:justify-start justify-center md:ml-14"
          >
            <img class="w-7 mr-3" src="../src/assets/images/certifyIcon.svg" />
            <p href="/verify" class="text-white text-title16">Certify</p>
          </a>
          <a
            href="/verify"
            class="flex flex-row w-full p-2 md:justify-start justify-center md:ml-14"
          >
            <img class="w-7 mr-3" src="../src/assets/images/verifyIcon.svg" />
            <p href="/verify" class="text-white text-title16">Verify</p>
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>
