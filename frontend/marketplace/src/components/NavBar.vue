<script setup lang="ts">
</script>

<template>
  <nav class="bg-gradient-radial bg-opacity-40 px-5 py-3"
       style="background-image: radial-gradient(50% 50% at 50% 50%, rgba(0, 227, 58, 0.4) 0%, rgba(0, 0, 0, 0.4) 88.02%);">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
      <a href="/" class="flex items-center">
        <img src="../assets/logo.png" class="h-6 mr-3 md:h-8 md:m-2" alt="Logo"/>
      </a>
      <button data-collapse-toggle="navbar-default" type="button"
              class="inline-flex items-center ml-3 text-sm text-gray-500 rounded-lg md:hidden"
              aria-controls="navbar-default" aria-expanded="false">
        <img class="w-6" src="../assets/sideButton.svg">
      </button>
      <!--  Navbar list for big devices-->
      <div class="hidden md:grid grid grid-cols-2 gap-16 mr-10  font-Inter text-title18 text-white h-10">
        <div class="w-full">
          <ul class="flex flex-row items-center gap-8 h-full">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Get MPWR</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div>

          <div class="flex flex-row items-center">
            <button class="bg-lightBlack border border-borderBlack  w-full rounded-xl h-full ">Connect wallet</button>
            <!--          User Profile Dropdown-->
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-circle m-1">
                <div class="avatar">
                  <div class="w-[48px] rounded-full border-borderBlack bg-lightBlack border-[1.5px]">
                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
                  </div>
                </div>
              </label>
              <div tabindex="0"
                   class="dropdown-content menu font-Inter divide-y divide-lightGray  bg-avatarBlack rounded-sm items-center border-avatarBorder border-[1.5px]">
                <div class="menu py-5 items-center mx-16">
                  <div class="avatar mb-3">
                    <div class="w-[82px] rounded-full">
                      <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
                    </div>
                  </div>
                  <p class="text-title18">Natasha Shneider</p>
                  <p class="text-title14 text-textGray">natasha@empower.eco</p>
                </div>

                <div class="menu py-2 items-center w-full">
                  <button
                      class="btn nav-dropdown-button">
                    Manage my account
                  </button>
                  <button
                      class="btn nav-dropdown-button">
                    Sign out
                  </button>
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
      class="absolute hidden z-10 top-0 text-white flex flex-col items-center h-full w-full bg-navBarBlack md:hidden"
      id="navbar-default">
    <button type="button"
            data-drawer-target="navbar-default"
            data-collapse-toggle="navbar-default"
            class="bg-transparent self-end  mt-5 mr-3">
      <img class="h-7" src="../assets/closeIcon.svg">
    </button>
    <div class="grid grid-cols-1 gap-8 p-5 w-full font-Inter text-title24 text-white">
      <div>
        <button class="bg-buttonGray border border-greenPrimary w-full h-11 rounded-xl ">Connect wallet</button>
      </div>
      <ul class="flex flex-col items-center gap-4">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Get MPWR</a>
        </li>
        <li>
          <a>FAQ</a>
        </li>
      </ul>
    </div>


  </div>

</template>

<style scoped>
.nav-dropdown-button{
  @apply btn-ghost rounded-sm text-greenPrimary font-bold text-title14 normal-case border-none
}
</style>


