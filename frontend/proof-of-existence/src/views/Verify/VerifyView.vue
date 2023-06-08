<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
import { RPC_URL } from "@/config/config";
import { empowerchain } from "@empower-plastic/empowerjs";
import NoProofModal from "@/views/Verify/NoProofModal.vue";
import { ErrorModalType } from "@/types/enums";
import AboutModal from "@/views/Verify/AboutModal.vue";

const file = ref<File | undefined>(undefined);
const inputString = ref<string>();
const isValid = ref<boolean>(false);
const shownNoProofModal = ref<boolean>(false);
const showAboutModal = ref<boolean>(false);
const modalType = ref<ErrorModalType>(ErrorModalType.FILE);

const { createRPCQueryClient } = empowerchain.ClientFactory;
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

const hashAndSetResult = async (byteArray: Uint8Array) => {
  try {
    const result = window.empSha256(byteArray);
    const verifyResult = await verifyHash(result?.value);
    pushToSuccessPage(result?.value);
  } catch (error) {
    modalType.value = ErrorModalType.FILE;
    openNoProofModal();
  }
};

const verifyHash = async (hash: string) => {
  const client = await createRPCQueryClient({ rpcEndpoint: RPC_URL });
  const proof = await client.empowerchain.proofofexistence.proof({
    hash: hash,
  });
  return proof;
};

const pushToSuccessPage = (hash: string) => {
  router.push({
    path: `/verify/success`,
    query: {
      hash: hash,
      fileName: undefined,
    },
  });
};

const handleInputString = async () => {
  const userInput = inputString?.value || "";
  const possibleStringValues = [
    userInput,
    userInput.replace(/\s/g, ""),
    userInput.toLowerCase(),
    userInput.toLowerCase().replace(/\s/g, ""),
  ];
  //Remove duplicate values
  const uniqueValues = [...new Set(possibleStringValues)];

  const encoder = new TextEncoder();
  const verifyResults = await Promise.all(
    uniqueValues.map(async (userString) => {
      const arrayBuffer = encoder.encode(userString);
      const hash = window.empSha256(arrayBuffer);
      try {
        const result = await verifyHash(hash?.value);
        return {
          success: true,
          hash: hash?.value,
          timestamp: result?.metadata?.timestamp,
        };
      } catch (error) {
        return { success: false, result: error };
      }
    })
  );

  const finalResult = verifyResults.find((result) => result.success);
  if (finalResult?.hash) {
    pushToSuccessPage(finalResult?.hash);
  } else {
    modalType.value = ErrorModalType.STRING;
    openNoProofModal();
  }
};

const openNoProofModal = () => {
  shownNoProofModal.value = true;
};

const closeNoProofModal = () => {
  shownNoProofModal.value = false;
};

const openAboutModal = () => {
  showAboutModal.value = true;
};

const closeAboutModal = () => {
  showAboutModal.value = false;
};
</script>

<template>
  <NoProofModal
    v-show="shownNoProofModal"
    :close-modal="closeNoProofModal"
    :modal-type="modalType"
  />
  <AboutModal :close-modal="closeAboutModal" v-show="showAboutModal" />
  <img
    src="../../assets/images/emp-astro-3.svg"
    class="left-28 top-full sm:top-auto sm:left-auto sm:ml-[500px] w-32 absolute animate-bounce -m-12"
  />
  <div class="p-4 text-left bg-lightBlack rounded-lg sm:p-8 lg:w-[700px]">
    <h5 class="mb-2 mt-3 text-2xl font-bold text-white text-title28">
      Verify documents
    </h5>
    <div class="mt-3 p-4 w-30">
      <ul
        class="flex flex-wrap text-center text-lightGreen border-gray-200 rounded-t-lg"
        id="defaultTab"
        data-tabs-toggle="#defaultTabContent"
        role="tablist"
      >
        <li>
          <button
            id="file-tab"
            data-tabs-target="#file"
            type="button"
            role="tab"
            aria-controls="file"
            aria-selected="true"
            class="flex flex-col justify-center text-center px-6 text-title16 aria-selected:bg-lightWhite aria-selected:text-white rounded-t-lg h-9"
          >
            File
          </button>
        </li>
        <li>
          <button
            id="text-tab"
            data-tabs-target="#text"
            type="button"
            role="tab"
            aria-controls="text"
            aria-selected="false"
            class="flex flex-col justify-center text-center px-6 text-title16 aria-selected:bg-lightWhite aria-selected:text-white rounded-t-lg h-9"
          >
            Text
          </button>
        </li>
      </ul>
      <div id="defaultTabContent">
        <div
          class="hidden md:p-1 border-t border-lightGray w-full"
          id="file"
          role="tabpanel"
          aria-labelledby="file-tab"
        >
          <p class="mb-3 text-white text-title14 mt-2">
            Select a file to verify if the file has a proof of existence on
            EmpowerChain.
            <a
              href="#"
              class="inline-flex items-center font-medium text-lightGreen"
              @click="openAboutModal"
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
              Verify
            </button>
          </div>
        </div>
        <div
          class="hidden md:p-1 border-t border-lightGray"
          id="text"
          role="tabpanel"
          aria-labelledby="text-tab"
        >
          <p class="mb-3 text-white text-title14 mt-2">
            Input some text to verify if the text has a proof of existence on
            the EmpowerChain.
            <a
              href="#"
              class="inline-flex items-center font-medium text-lightGreen"
              @click="openAboutModal"
              >Learn more.</a
            >
            <br />
            You can input arbitrary plain text below to verify a proof of its
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
          <div class="flex flex-row justify-center">
            <button
              :disabled="!inputString"
              @click="handleInputString"
              class="bg-lightGreen mt-10 content-center p-1 px-9 rounded text-white text-title22 disabled:bg-lightGray disabled:text-gray"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
