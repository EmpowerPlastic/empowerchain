<script setup lang="ts">
import { ref } from "vue";
import RetireCreditTextArea from "@/components/RetireCreditTextArea.vue";
import InputWithLabel from "@/components/InputWithLabel.vue";
import {
  empowerchain,
  getSigningTM37EmpowerchainClient,
} from "@empower-plastic/empowerjs";
import { toast } from "vue3-toastify";
import { CHAIN_ID, RPC_ENDPOINT } from "@/config/config";
import { getWallet } from "@/utils/wallet-utils";
import { resolveSdkError } from "@/utils/wallet-utils";
const { retireCredits, transferCredits } =
  empowerchain.plasticcredit.MessageComposer.withTypeUrl;

export interface ModalProps {
  showModal: boolean;
  denom: string;
  availableCredits: string;
  address: string;
}

const props = defineProps<ModalProps>();
const emitShowModal = defineEmits(["update:showModal"]);

const name = ref();
const additionalInfo = ref();
const retireCreditsAmount = ref();
const loading = ref(false);

const closeModal = () => {
  emitShowModal("update:showModal", false);
};

const handleRetireCredits = async () => {
  try {
    loading.value = true;
    const retireCreditsMsg = retireCredits({
      owner: props.address,
      denom: props.denom,
      amount: retireCreditsAmount.value as bigint,
      retiringEntityName: name.value,
      retiringEntityAdditionalData: additionalInfo.value,
    });
    const wallet = getWallet();
    const offlineSigner = await wallet.getOfflineSigner(CHAIN_ID);
    const chainClient = await getSigningTM37EmpowerchainClient({
      rpcEndpoint: RPC_ENDPOINT,
      signer: offlineSigner,
    });
    const fee = {
      amount: [{ amount: "100000", denom: "umpwr" }],
      gas: "200000",
    };
    const response = await chainClient.signAndBroadcast(
      props.address,
      [retireCreditsMsg],
      fee
    );
    if (response && !response.code) {
      loading.value = false;
      toast.success("Retire credits successfully");
      closeModal();
    } else {
      throw new Error("Retire credits failed " + response.rawLog);
    }
  } catch (error) {
    loading.value = false;
    toast.error("Retire credits failed: " + resolveSdkError(error));
    throw error;
  }
};
</script>
<template>
  <input
    type="checkbox"
    id="retire-credits-modal"
    class="modal-toggle"
    :checked="showModal"
  />
  <div class="modal bg-modalBackground">
    <div
      class="modal-box text-white bg-black rounded-sm border-[1.5px] border-borderBlack shadow-md px-7 py-5 max-w-5xl relative font-Inter"
    >
      <label
        class="btn btn-ghost btn-sm btn-circle absolute right-2 top-2"
        @click="closeModal"
      >
        <img class="h-7" src="../assets/closeIcon.svg" />
      </label>

      <div class="flex justify-between">
        <p class="text-title38">Retire credits</p>
      </div>

      <div class="grid md:grid-cols-2 gap-5 mb-6 mt-2">
        <InputWithLabel
          v-model="retireCreditsAmount"
          label="How many Plastic credits do you want to retire?"
          placeholder="10"
          id="input-1"
          :denom="denom"
          type="number"
        />
        <InputWithLabel
          :model-value="availableCredits"
          label="Available credits in your account"
          placeholder="0.01"
          id="input-2"
          dashed
          :disabled="true"
          :denom="denom"
          type="number"
        />
      </div>

      <RetireCreditTextArea
        label="Provide a name of the entity that should be visible as a retirerer"
        sub-text="(will be visible on generated Plastic Credit certificate)"
        id="message-1"
        v-model="name"
      />
      <RetireCreditTextArea
        label="Provide additional data about the retirerer"
        sub-text="(will be visible on generated Plastic Credit certificate)"
        id="message-2"
        v-model="additionalInfo"
      />

      <div class="flex flex-col md:flex-row justify-between modal-action">
        <label
          class="btn modal-button text-greenPrimary bg-lightGray mb-4 md:m-0"
          @click="closeModal"
          >Cancel!</label
        >
        <button
          :disabled="
            !(retireCreditsAmount && name && additionalInfo) || loading
          "
          class="btn modal-button !ml-0 bg-greenPrimary disabled:text-white"
          @click="handleRetireCredits"
        >
          {{ loading ? "Processing..." : "Retire credits" }}
        </button>
      </div>
    </div>
  </div>
</template>
