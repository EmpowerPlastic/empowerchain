<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
import SupportedFilesModal from "@/views/certify/AboutModal.vue";

const file = ref<File | undefined>(undefined);
const inputString = ref<string>();
const isValid = ref<boolean>(false);
const includeWhiteSpace = ref<boolean>(false);
const includeLetterCasing = ref<boolean>(false);
const showModal = ref(false);
const activeTab = ref("File");

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
  redirectToWalletPage(file.value?.name, new Date().getTime(), result?.value);
};

const redirectToWalletPage = (
  fileName: string | undefined,
  timestamp: number,
  hash?: string
) => {
  if (hash) {
    router.push({
      path: `/proof/${hash}`,
      query: { fileName: fileName, time: timestamp },
    });
  } else {
    console.error("Hash value is undefined");
  }
};

const handleInputString = () => {
  let userInput = inputString?.value || "";

  if (!includeWhiteSpace.value) {
    userInput = userInput.replace(/\s/g, "");
  }

  if (!includeLetterCasing.value) {
    userInput = userInput.toLowerCase();
  }

  if (userInput) {
    const encoder = new TextEncoder();
    const arrayBuffer = encoder.encode(userInput);
    const result = window.empSha256(arrayBuffer);
    redirectToWalletPage(undefined, new Date().getTime(), result?.value);
  }
};

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <SupportedFilesModal v-show="showModal" :close-modal="closeModal" />
  <img
    src="../../assets/images/emp-astro-1.png"
    class="left-28 top-full sm:top-auto sm:left-auto w-32 absolute animate-bounce -m-24"
  />
  <div class="p-4 text-left bg-lightBlack rounded-lg sm:p-8 lg:w-[700px]">
    <h5 class="mb-2 mt-3 text-2xl font-bold text-white text-title28">
      Certify documents
    </h5>
    <div class="mt-3 w-30">
      <div class="flex flex-row w-full border-b-1">
        <div
          class="px-7 py-2 text-white cursor-pointer"
          :class="{
            'bg-lightWhite !text-lightGreen rounded-t-lg': activeTab === 'File',
          }"
          @click="activeTab = 'File'"
        >
          File
        </div>
        <div
          class="px-7 py-2 text-white cursor-pointer"
          @click="activeTab = 'Text'"
          :class="{
            'bg-lightWhite !text-lightGreen rounded-t-lg': activeTab === 'Text',
          }"
        >
          Text
        </div>
      </div>
    </div>
    <template v-if="activeTab === 'File'">
      <div class="md:p-1 border-t border-lightGray w-full">
        <p class="mb-3 text-white text-title14 mt-2">
          Create an immutable proof of existence for your document.
          <a
            href="#"
            @click="openModal"
            class="inline-flex items-center font-medium text-lightGreen"
            >Learn more.</a
          >
          <br />
          Drag and drop your document here, or choose a file. Your file will
          <b>not</b> be uploaded.
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
    </template>
    <template v-if="activeTab === 'Text'">
      <div class="md:p-1 border-t border-lightGray">
        <p class="mb-3 text-white text-title14 mt-2">
          Create an immutable proof of existence for your document.
          <a
            href="#"
            @click="openModal"
            class="inline-flex items-center font-medium text-lightGreen"
            >Learn more.</a
          >
          <br />
          You can input arbitrary plain text below to create a proof of its
          existence.
        </p>
        <div class="w-full p-3 mt-7 rounded bg-lightGray">
          <label class="cursor-pointer" for="file_input">
            <textarea
              rows="3"
              placeholder="Text"
              v-model="inputString"
              class="p-1 rounded bg-lightGray w-full mr-4 text-white text-title16 h-36 md:h-auto"
            />
          </label>
        </div>

        <div class="p-5 text-white">
          <div class="flex items-center mb-2">
            <input
              id="checkbox-1"
              type="checkbox"
              v-model="includeWhiteSpace"
              class="w-4 h-4 rounded"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Include whitespace characters (spaces, tabs, new lines,
              etc.)</label
            >
          </div>
          <div class="flex items-center">
            <input
              id="checkbox-2"
              type="checkbox"
              v-model="includeLetterCasing"
              class="w-4 h-4 rounded"
            />
            <label
              for="checked-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Include letter casing</label
            >
          </div>
        </div>

        <div class="flex flex-row justify-center">
          <button
            :disabled="!inputString"
            @click="handleInputString"
            class="bg-lightGreen mt-18 content-center p-1 px-9 rounded text-white text-title22 disabled:bg-lightGray disabled:text-gray"
          >
            Create proof
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<style></style>
