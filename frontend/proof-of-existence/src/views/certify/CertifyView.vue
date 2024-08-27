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
      path: `certify/proof/${hash}`,
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
  <h5
    class="hidden md:block mt-5 my-5 text-title28 text-left font-bold text-textPrimary"
  >
    Certify documents
  </h5>
  <div
    class="p-4 text-left bg-bgPrimary rounded-sm md:p-8 lg:w-[700px] custom-shadow"
  >
    <h5
      class="md:hidden mt-5 my-7 text-title28 text-center font-bold text-textPrimary"
    >
      Certify documents
    </h5>
    <div class="mt-3 w-30">
      <div class="flex flex-row w-full border-b-1">
        <div
          class="px-7 py-2 text-textSecondary cursor-pointer"
          :class="{
            'bg-bgTertiary bg-opacity-[0.06] !text-textPrimary rounded-t-lg':
              activeTab === 'File',
          }"
          @click="activeTab = 'File'"
        >
          File
        </div>
        <div
          class="px-7 py-2 text-textSecondary cursor-pointer"
          @click="activeTab = 'Text'"
          :class="{
            'bg-bgTertiary bg-opacity-[0.06] !text-textPrimary rounded-t-lg':
              activeTab === 'Text',
          }"
        >
          Text
        </div>
      </div>
    </div>
    <template v-if="activeTab === 'File'">
      <div
        class="md:p-1 border-t border-textPrimary border-opacity-[0.3] w-full"
      >
        <p class="mb-3 text-textPrimary text-title14 mt-2">
          Create an immutable proof of existence for your document.
          <a
            href="#"
            @click="openModal"
            class="inline-flex items-center font-medium text-textSecondary"
            >Learn more.</a
          >
          <br />
          Drag and drop your document here, or choose a file. Your file will
          <b>not</b> be uploaded.
        </p>
        <div
          class="w-full p-3 mt-7 rounded-lg bg-textPrimary bg-opacity-[0.06]"
        >
          <label class="cursor-pointer" for="file_input">
            <input
              class="hidden"
              id="file_input"
              type="file"
              @change="handleFileUpload"
            />
            <div class="flex flex-col md:flex-row-reverse items-center">
              <span
                class="text-textPrimary text-title16 my-3 md:my-0 md:mb-0 text-left w-full"
                >{{ file ? file?.name : "Choose file" }}</span
              >
              <div
                class="flex w-full justify-center p-1 py-2 rounded-sm bg-bgSecondary md:w-[150px] md:mr-4 text-title16"
              >
                Browse
              </div>
            </div>
          </label>
        </div>
        <div class="flex flex-row justify-center px-2">
          <button
            :disabled="!file"
            @click="hashFile(file)"
            class="bg-bgSecondary md:w-[200px] w-full mt-10 content-center p-1 px-9 rounded-sm text-textPrimary text-title22 disabled:opacity-[0.3]"
          >
            Create proof
          </button>
        </div>
      </div>
    </template>
    <template v-if="activeTab === 'Text'">
      <div class="md:p-1 border-t border-textPrimary border-opacity-[0.3]">
        <p class="mb-3 text-textPrimary text-title14 mt-2">
          Create an immutable proof of existence for your document.
          <a
            href="#"
            @click="openModal"
            class="inline-flex items-center font-medium text-textSecondary"
            >Learn more.</a
          >
          <br />
          You can input arbitrary plain text below to create a proof of its
          existence.
        </p>
        <div class="w-full p-3 mt-7 rounded-lg">
          <label class="cursor-pointer" for="file_input">
            <textarea
              rows="3"
              placeholder="Text"
              v-model="inputString"
              class="p-2 border-none rounded-lg bg-bgTertiary bg-opacity-[0.06] w-full mr-4 text-textPrimary text-title16 h-36 md:h-auto"
            />
          </label>
        </div>

        <div class="p-5">
          <div class="flex items-center mb-2">
            <input
              id="checkbox-1"
              type="checkbox"
              v-model="includeWhiteSpace"
              class="w-4 h-4 rounded"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-textPrimary"
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
              class="ml-2 text-sm font-medium text-textPrimary"
              >Include letter casing</label
            >
          </div>
        </div>

        <div class="flex flex-row justify-center px-2">
          <button
            :disabled="!inputString"
            @click="handleInputString"
            class="bg-bgSecondary md:w-[200px] w-full mt-8 content-center p-1 rounded-sm text-textPrimary text-title22 disabled:opacity-[0.3]"
          >
            Create proof
          </button>
        </div>
      </div>
    </template>
  </div>
</template>
