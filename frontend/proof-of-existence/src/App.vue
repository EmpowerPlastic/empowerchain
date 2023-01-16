<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar navbar-dark sticky-top flex-md-nowrap p-0">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
      <img class="logo" src="src/assets/images/emp-logo.png">
    </a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <!--<a class="nav-link px-3" href="#">Sign out</a>-->
      </div>
    </div>
  </header>

  <div class="container-fluid">
    <div class="row">
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse shadow emp-sidebar">
        <div class="position-sticky pt-3 sidebar-sticky menu-deck">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active home" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link wallet" href="#">
                My wallet
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link contact" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="emp-content-box emp-astro">
          <div class="emp-character"></div>
          <RouterView />
        </div>
      </main>
    </div>
  </div>

  <!--<nav>
    <RouterLink to="/">Certify</RouterLink>
    <RouterLink to="/about">Prove</RouterLink>
  </nav>-->
</template>

<style scoped>
.navbar .navbar-brand {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  display: flex;
  justify-content: center;
}
.navbar .navbar-brand .logo {
  width: 90%;
  max-width: 200px;
}
.container-fluid {
  height: calc(100vh - 75px);
}
.container-fluid .emp-sidebar {
  background-color: rgba(0, 0, 0, 0.22);
}
.container-fluid .emp-sidebar .menu-deck {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-fluid .emp-sidebar .menu-deck .nav {
  width: 70%;
}
.container-fluid .emp-sidebar .menu-deck .nav .nav-item {
  margin: 10px 0;
}
.container-fluid .emp-sidebar .menu-deck .nav .nav-item .nav-link {
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
.container-fluid .emp-sidebar .menu-deck .nav .nav-item .nav-link.home {
  background-image: url("src/assets/images/icon-home.svg");
}
.container-fluid .emp-sidebar .menu-deck .nav .nav-item .nav-link.wallet {
  background-image: url(src/assets//images/icon-my-wallet.svg);
}
.container-fluid .emp-sidebar .menu-deck .nav .nav-item .nav-link.contact {
  background-image: url(src/assets//images/icon-contact.svg);
}
.container-fluid .emp-sidebar .menu-deck .nav .nav-item .nav-link.active {
  background-color: rgba(0, 0, 0, 0.4);
}
.container-fluid .emp-content-box {
  background-color: rgba(0, 0, 0, 0.22);
  border-radius: 16px;
  padding: 2rem;
  max-width: 1000px;
}
.container-fluid .emp-content-box.emp-astro {
  margin-top: 160px;
  position: relative;
}
.container-fluid .emp-content-box.emp-astro .emp-character {
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
  .container-fluid .emp-sidebar {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .container-fluid .emp-sidebar .menu-deck .nav .nav-item .nav-link.active {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .container-fluid .emp-content-box.emp-astro {
    margin-top: 0;
  }
  .container-fluid .emp-content-box.emp-astro .emp-character {
    background-image: none;
  }
}
@media (max-width: 767.98px) {
  .container-fluid .emp-content-box.emp-astro {
    margin-top: 0;
  }
  .container-fluid .emp-content-box.emp-astro .emp-character {
    background-image: none;
  }
}
@media (max-width: 991.98px) {
  .container-fluid .emp-content-box.emp-astro .emp-character {
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

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link.active {
  color: #2470dc;
}

.navbar .navbar-toggler {
  right: 1rem;
}

</style>
