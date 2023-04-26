<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
import { RPC_URL } from "@/config/config";
import { empowerchain } from "@empower-plastic/empowerjs";
import { Data } from "@empower-plastic/empowerjs/src/codegen/tendermint/types/types";
import NoProofModal from "@/views/Verify/NoProofModal.vue";
import { ErrorModalType } from "@/types/enums";

const file = ref<File | undefined>(undefined);
const inputHash = ref<string | undefined>(undefined);
const isValid = ref<boolean>(false);
const showModal = ref<boolean>(false);
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

const hashAndSetResult = (byteArray: Uint8Array) => {
  const result = window.empSha256(byteArray);
  verifyHash(result?.value);
};

const verifyHash = async (hash: string) => {
  console.log(hash, "verifyHash");
  try {
    const client = await createRPCQueryClient({ rpcEndpoint: RPC_URL });
    const proof = await client.empowerchain.proofofexistence.proof({
      hash: hash,
    });
    pushToSuccessPage(hash, new Date(proof.metadata.timestamp).getTime());
    console.log(proof, "proof");
  } catch (error) {
    console.log(error);
    openModal();
  }
};

const pushToSuccessPage = (hash: string, timeStamp: number) => {
  router.push({
    path: `/certify/success`,
    query: {
      hash: hash,
      fileName: undefined,
      time: timeStamp,
    },
  });
};

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <NoProofModal
    v-show="showModal"
    :close-modal="closeModal"
    :modal-type="modalType"
  />
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
            id="hash-tab"
            data-tabs-target="#hash"
            type="button"
            role="tab"
            aria-controls="hash"
            aria-selected="false"
            class="flex flex-col justify-center text-center px-6 text-title16 aria-selected:bg-lightWhite aria-selected:text-white rounded-t-lg h-9"
          >
            Hash
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
              Verify
            </button>
          </div>
        </div>
        <div
          class="hidden md:p-1 border-t border-lightGray"
          id="hash"
          role="tabpanel"
          aria-labelledby="hash-tab"
        >
          <p class="mb-3 text-white text-title14 mt-2">
            Input the SHA256 checksum hexadecimal digest for your file here.
          </p>
          <div class="w-full p-3 mt-7 rounded bg-lightGray">
            <label class="cursor-pointer" for="file_input">
              <input
                placeholder="Document Hash"
                v-model="inputHash"
                class="p-1 rounded bg-lightGray w-full mr-4 text-white text-title16 h-36 md:h-auto"
              />
            </label>
          </div>
          <div class="flex flex-row justify-center">
            <button
              :disabled="!/\b[A-Fa-f0-9]{64}\b/.test(inputHash || '')"
              @click="handleInputHash"
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
