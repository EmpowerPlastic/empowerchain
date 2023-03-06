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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_25"
                      data-name="Rectangle 25"
                      width="16.139"
                      height="16.139"
                      fill="#fff"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_4"
                  data-name="Group 4"
                  transform="translate(-48 -590)"
                >
                  <g
                    id="Ellipse_1"
                    data-name="Ellipse 1"
                    transform="translate(48 590)"
                    fill="none"
                    stroke="#fff"
                    stroke-width="1.5"
                  >
                    <circle cx="15" cy="15" r="15" stroke="none" />
                    <circle cx="15" cy="15" r="14.25" fill="none" />
                  </g>
                  <g
                    id="Group_58"
                    data-name="Group 58"
                    transform="translate(54.931 596.933)"
                  >
                    <g
                      id="Group_57"
                      data-name="Group 57"
                      transform="translate(0 -0.002)"
                      clip-path="url(#clip-path)"
                    >
                      <path
                        id="Path_21"
                        data-name="Path 21"
                        d="M209.862,204.959a4.9,4.9,0,1,0,4.9,4.9,4.91,4.91,0,0,0-4.9-4.9m1.981,7.626-1.981-1.445-1.981,1.445.762-2.33-1.986-1.437,2.452,0,.753-2.333.753,2.333,2.452,0-1.986,1.437Z"
                        transform="translate(-201.793 -201.79)"
                        fill="#fff"
                        fill-rule="evenodd"
                      />
                      <path
                        id="Path_22"
                        data-name="Path 22"
                        d="M15.929,7.558,15.3,6.929c-.629-.629-.629-.635-.4-1.5l.228-.85a.723.723,0,0,0-.51-.883l-.855-.229c-.865-.232-.866-.235-1.1-1.107h0l-.226-.845a.723.723,0,0,0-.883-.51l-.86.231c-.859.23-.863.227-1.5-.41L8.579.208a.723.723,0,0,0-1.019,0L6.932.837c-.629.629-.635.629-1.5.4l-.85-.228a.723.723,0,0,0-.883.51l-.229.855c-.232.864-.235.866-1.107,1.1h0L1.518,3.7a.723.723,0,0,0-.51.883l.231.86c.23.859.227.863-.41,1.5L.21,7.558a.723.723,0,0,0,0,1.019l.628.628c.629.629.629.635.4,1.5l-.228.85a.723.723,0,0,0,.51.883l.855.229c.865.232.866.235,1.1,1.107h0l.226.845a.723.723,0,0,0,.883.51l.86-.231c.859-.23.863-.227,1.5.41l.619.619a.723.723,0,0,0,1.019,0l.628-.628c.629-.629.635-.629,1.5-.4l.85.228a.723.723,0,0,0,.883-.51l.229-.855c.232-.864.235-.866,1.107-1.1h0l.845-.226a.723.723,0,0,0,.51-.883L14.9,10.7c-.23-.859-.227-.863.41-1.5l.619-.619a.723.723,0,0,0,0-1.019M8.07,13.8A5.732,5.732,0,1,1,13.8,8.067,5.743,5.743,0,0,1,8.07,13.8"
                        transform="translate(0 0.002)"
                        fill="#fff"
                        fill-rule="evenodd"
                      />
                    </g>
                  </g>
                </g>
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_26"
                      data-name="Rectangle 26"
                      width="16"
                      height="14.253"
                      fill="#fff"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_4"
                  data-name="Group 4"
                  transform="translate(-48 -590)"
                >
                  <g
                    id="Ellipse_1"
                    data-name="Ellipse 1"
                    transform="translate(48 590)"
                    fill="none"
                    stroke="#fff"
                    stroke-width="1.5"
                  >
                    <circle cx="15" cy="15" r="15" stroke="none" />
                    <circle cx="15" cy="15" r="14.25" fill="none" />
                  </g>
                  <g
                    id="Group_60"
                    data-name="Group 60"
                    transform="translate(32 595.273)"
                  >
                    <g
                      id="Group_59"
                      data-name="Group 59"
                      transform="translate(24 2.856)"
                      clip-path="url(#clip-path)"
                    >
                      <path
                        id="Path_23"
                        data-name="Path 23"
                        d="M141.55,145.741l1.416,1.416a13.52,13.52,0,0,0,.712-3.086.071.071,0,0,0-.045-.075l-3.831-1.464a.072.072,0,0,0-.026,0,.071.071,0,0,0-.026,0L135.918,144a.072.072,0,0,0-.045.075,13.876,13.876,0,0,0,1.533,4.953c.77,1.409,1.655,2.25,2.369,2.25a1.684,1.684,0,0,0,1.049-.493l-2.157-2.157a2.038,2.038,0,1,1,2.883-2.883"
                        transform="translate(-133.155 -139.676)"
                        fill="#fff"
                      />
                      <path
                        id="Path_24"
                        data-name="Path 24"
                        d="M8.438,11.875a2.755,2.755,0,0,1-1.819.81C4.069,12.685,1.97,7.9,1.635,4.5a1.159,1.159,0,0,1,.739-1.2L6.206,1.841a1.159,1.159,0,0,1,.828,0L10.865,3.3A1.158,1.158,0,0,1,11.6,4.5a13.2,13.2,0,0,1-.284,1.684l1.85-1.85c.023-.162.044-.323.061-.482a1.538,1.538,0,0,0-.93-1.582L7.219.122a1.539,1.539,0,0,0-1.2,0L.938,2.271a1.539,1.539,0,0,0-.93,1.582c.479,4.448,3.506,10.4,6.611,10.4a4.3,4.3,0,0,0,3.035-1.763,2.029,2.029,0,0,1-1.179-.58Z"
                        transform="translate(0.001 -0.001)"
                        fill="#fff"
                      />
                      <path
                        id="Path_25"
                        data-name="Path 25"
                        d="M303.135,219.7a1.087,1.087,0,0,0-1.537,0l-4.227,4.227-2.2-2.2a1.087,1.087,0,1,0-1.537,1.537l2.964,2.964a1.087,1.087,0,0,0,1.537,0l5-5a1.087,1.087,0,0,0,0-1.537"
                        transform="translate(-287.454 -214.994)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </g>
              </svg>
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
