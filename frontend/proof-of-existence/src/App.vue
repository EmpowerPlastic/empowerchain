<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'flowbite-vue'
</script>

<template>
  <Accordion>
    <accordion-panel>
      <accordion-header>header</accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a
              href="/docs/getting-started/introduction/"
              class="text-blue-600 dark:text-blue-500 hover:underline"
            >get started</a> and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>another header</accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a
              href="https://flowbite.com/figma/"
              class="text-blue-600 dark:text-blue-500 hover:underline"
            >Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>and one more header</accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out the <a
              href="https://flowbite.com/figma/"
              class="text-blue-600 dark:text-blue-500 hover:underline"
            >Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </accordion-content>
    </accordion-panel>
  </Accordion>
  <header class="navbar navbar-dark sticky-top flex-md-nowrap p-0">
    <a
      class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6"
      href="#"
    >
      <img
        class="logo"
        src="src/assets/images/emp-logo.png"
      >
    </a>
    <button
      class="navbar-toggler position-absolute d-md-none collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <!--<a class="nav-link px-3" href="#">Sign out</a>-->
      </div>
    </div>
  </header>

  <div class="container-fluid">
    <div class="row">
      <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block sidebar collapse shadow emp-sidebar"
      >
        <div class="position-sticky pt-3 sidebar-sticky menu-deck">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a
                class="nav-link active home"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link wallet"
                href="#"
              >
                My wallet
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link contact"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="emp-content-box emp-astro">
          <div class="emp-character" />
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  display: flex;
  justify-content: center;
}
.logo {
  width: 90%;
  max-width: 200px;
}
.container-fluid {
  height: calc(100vh - 75px);
}
.emp-sidebar {
  background-color: rgba(0, 0, 0, 0.22);
}
.menu-deck {
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav {
  width: 70%;
}
.nav-item {
  margin: 10px 0;
}
.nav-link {
  color: #ffffff;
  font-size: 14px;
  padding-left: 70px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-repeat: no-repeat;
  background-position: 10% center;
  border-radius: 16px;
}
.nav-link.home {
  background-image: url("src/assets/images/icon-home.svg");
}
.nav-link.wallet {
  background-image: url(src/assets//images/icon-my-wallet.svg);
}
.nav-link.contact {
  background-image: url(src/assets//images/icon-contact.svg);
}
.nav-link.active {
  background-color: rgba(0, 0, 0, 0.4);
}
.emp-content-box {
  background-color: rgba(0, 0, 0, 0.22);
  border-radius: 16px;
  padding: 2rem;
  max-width: 1000px;
}
.emp-content-box.emp-astro {
  margin-top: 160px;
  position: relative;
}
.emp-character {
  background-image: url(src/assets//images/emp-astro-1.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 248px;
  height: 194px;
  position: absolute;
  top: -184px;
  right: calc(25% + 124px);
  animation: float 6s ease-in-out infinite;
}
@media (max-width: 575.98px) {
  .emp-sidebar {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .nav-link.active {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .emp-content-box.emp-astro {
    margin-top: 0;
  }
  .emp-character {
    background-image: none;
  }
}
@media (max-width: 767.98px) {
  .emp-content-box.emp-astro {
    margin-top: 0;
  }
  .emp-character {
    background-image: none;
  }
}
@media (max-width: 991.98px) {
  .emp-character {
    width: 248px;
    height: 194px;
    top: -184px;
  }
}
.sidebar {
  position: fixed;
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 4.4rem;
  }
}

.sidebar-sticky {
  height: calc(100vh - 48px);
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.navbar-toggler {
  right: 1rem;
}

</style>
