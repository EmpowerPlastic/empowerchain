<script setup lang="ts">
import { Tabs } from "flowbite";
import { ref } from "vue";
const activeTab = ref("first");

//Methods
const handleFileUpload = (e: HTMLInputElement) => {
  console.log(e.target.files);
};
</script>

<template>
  <div class="w-full p-4 text-left bg-lightBlack rounded-lg sm:p-8">
    <h5 class="mb-2 text-2xl font-bold text-white">Certify documents</h5>
    <div class="mt-3 p-4">
      <ul
        class="flex flex-wrap text-center text-lightGreen border-gray-200 rounded-t-lg"
        id="defaultTab"
        data-tabs-toggle="#defaultTabContent"
        role="tablist"
      >
        <li class="mr-2">
          <button
            id="file-tab"
            data-tabs-target="#file"
            type="button"
            role="tab"
            aria-controls="file"
            aria-selected="true"
            class="inline-block p-4 text-white hover:text-gray-600 hover:bg-gray-100"
          >
            File
          </button>
        </li>
        <li class="mr-2">
          <button
            id="hash-tab"
            data-tabs-target="#hash"
            type="button"
            role="tab"
            aria-controls="hash"
            aria-selected="false"
            class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          >
            Hash
          </button>
        </li>
      </ul>
      <div id="defaultTabContent">
        <div
          class="hidden md:p-1 border-t border-lightGray"
          id="file"
          role="tabpanel"
          aria-labelledby="file-tab"
        >
          <p class="mb-3 text-white text-sm">
            Drag and drop your document here, or choose a file. Your file will
            <b>not</b> be uploaded.
            <a
              href="#"
              class="inline-flex items-center font-medium text-lightGreen"
              >Learn more.</a
            >
          </p>
          <div class="w-full p-3 mt-7 rounded bg-lightGray">
            <!--            <div class="w-full bg-lightBlack rounded-full mb-2 mt-2">-->
            <!--              <div-->
            <!--                class="bg-lightGreen h-1.5 rounded-full"-->
            <!--                style="width: 45%"-->
            <!--              ></div>-->
            <!--            </div>-->
            <label class="cursor-pointer" for="file_input">
              <input
                class="hidden"
                id="file_input"
                type="file"
                @change="handleFileUpload"
              />
              <div class="flex items-center">
                <div
                  class="flex justify-center p-1 rounded bg-lightGreen w-24 mr-4 text-white"
                >
                  Browse
                </div>
                <span class="text-lightGray">choose file...</span>
              </div>
            </label>
          </div>
          <div class="flex flex-row justify-center">
            <button
              class="bg-lightGreen mt-10 content-center p-2 rounded text-white w-40"
            >
              Create proof
            </button>
          </div>
        </div>
        <div
          class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="hash"
          role="tabpanel"
          aria-labelledby="hash-tab"
        ></div>
      </div>
    </div>
  </div>
</template>

<style></style>
