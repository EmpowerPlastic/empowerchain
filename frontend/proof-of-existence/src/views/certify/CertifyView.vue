<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";

const file = ref<File | undefined>(undefined);

//Methods
const handleFileUpload = async (e: Event) => {
  const target = e.target as HTMLInputElement;
  const targetFiles = target.files;
  const hasTargetFiles = targetFiles && targetFiles.length > 0;
  file.value = hasTargetFiles ? targetFiles[0] : undefined;
};

const hashFile = async (file?: File) => {
  if (file) {
    const bytes = await readFile(file);
    const byteArray = new Uint8Array(bytes);
    hashAndSetResult(byteArray);
  }
};

const readFile = async (file: File): Promise<ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("loadend", (e: ProgressEvent<FileReader>) => {
      const buffer: ArrayBuffer | null = e.target?.result as ArrayBuffer | null;
      if (buffer !== null) {
        resolve(buffer);
      } else {
        reject(new Error("File reading failed"));
      }
    });

    reader.addEventListener("error", (e: ProgressEvent<FileReader>) => {
      reject(e.target?.error);
    });
    // Read file
    reader.readAsArrayBuffer(file);
  });
};

const hashAndSetResult = (byteArray: Uint8Array) => {
  const result = window.empSha256(byteArray);
  router.push({
    path: `/proof/${result?.value}`,
    query: { fileName: file.value?.name, time: new Date().getTime() },
  });
};
</script>

<template>
  <img
    src="../../assets/images/emp-astro-1.png"
    class="left-28 top-full sm:top-auto sm:left-auto w-32 absolute animate-bounce -m-24"
  />
  <div class="w-full p-4 text-left bg-lightBlack rounded-lg sm:p-8">
    <h5 class="mb-2 mt-3 text-2xl font-bold text-white text-title28">
      Certify documents
    </h5>
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
            class="inline-block p-4 text-white text-title16 hover:text-gray-600 hover:bg-gray-100"
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
            class="inline-block p-4 text-title16 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
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
          <p class="mb-3 text-white text-title14">
            Drag and drop your document here, or choose a file. Your file will
            <b>not</b> be uploaded.
            <a
              href="#"
              class="inline-flex items-center font-medium text-lightGreen"
              >Learn more.</a
            >
          </p>
          <div class="w-full p-3 mt-7 rounded bg-lightGray">
            <label class="cursor-pointer" for="file_input">
              <input
                class="hidden"
                id="file_input"
                type="file"
                @change="handleFileUpload"
              />
              <div class="flex items-center">
                <div
                  class="flex justify-center p-1 rounded bg-lightGreen w-24 mr-4 text-white text-title16"
                >
                  Browse
                </div>
                <span class="text-lightGray text-title16">{{
                  file ? file?.name : "Choose file"
                }}</span>
              </div>
            </label>
          </div>
          <div class="flex flex-row justify-center">
            <button
              :disabled="!file"
              @click="hashFile(file)"
              class="bg-lightGreen mt-10 content-center p-1 px-9 rounded text-white text-title22 disabled:bg-lightGray disabled:text-gray"
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
