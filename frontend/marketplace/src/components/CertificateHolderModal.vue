<script setup lang="ts">
import { computed, ref } from "vue";
import Modal from "@/components/ui/Modal.vue";
import PrimaryButton from "@/components/ui/PrimaryButton.vue";
import { CertificateHolderModalTypeEnums } from "@/types/CertificateHolderModalTypeEnums";

export interface BuyCreditsModalProps {
  modalType: CertificateHolderModalTypeEnums | null;
}

const props = defineProps<BuyCreditsModalProps>();
const emit = defineEmits(["continue"]);
const baseModal = ref<HTMLDialogElement | null>(null);
const certificateHolder = ref<string>("");
const certificateHolderEmail = ref<string>("");

const isCertificateHolderValid = computed<boolean>(() => {
  return (
    certificateHolder.value.length > 0 && certificateHolder.value.length < 31
  );
});
const isCertificateHolderTooLong = computed<boolean>(() => {
  return certificateHolder.value.length > 30;
});
const isCertificateHolderEmailValid = computed<boolean>(() => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(certificateHolderEmail.value);
});

const isButtonDisabled = () => {
  if (!isCertificateHolderValid.value) {
    return true;
  }

  return !(
    props.modalType === CertificateHolderModalTypeEnums.EMAIL_AUTHORIZED_USER ||
    props.modalType ===
      CertificateHolderModalTypeEnums.CRYPTO_WALLET_AUTHORIZED_USER ||
    (props.modalType === CertificateHolderModalTypeEnums.GUEST_USER &&
      isCertificateHolderEmailValid.value)
  );
};

const handleOpenModal = () => {
  baseModal.value?.show();
};

const handleContinue = () => {
  emit("continue", certificateHolder.value, certificateHolderEmail.value);
  baseModal.value?.close();
};

defineExpose({
  show: handleOpenModal,
});
</script>
<template>
  <Modal ref="baseModal" title="Certificate holder">
    <template v-slot:body>
      <p class="py-4">
        Provide an individual or company name that is going to be used for the
        Plastic Credit Offset Certificate.
        <b>Mind that this cannot be changed later.</b>
      </p>
      <div>
        <input
          type="text"
          placeholder="Certificate holder name"
          class="input input-bordered w-full text-white bg-lightGray"
          v-model="certificateHolder"
        />
        <div class="label" v-if="isCertificateHolderTooLong">
          <span class="label-text-alt text-white"
            >Name can not be more than 30 characters.</span
          >
        </div>
        <input
          v-if="modalType === CertificateHolderModalTypeEnums.GUEST_USER"
          type="email"
          placeholder="Certificate holder email"
          class="input input-bordered w-full text-white bg-lightGray mt-5"
          v-model="certificateHolderEmail"
        />
      </div>
    </template>
    <template v-slot:actions>
      <PrimaryButton
        @click.prevent="handleContinue"
        :disabled="isButtonDisabled()"
        >Continue</PrimaryButton
      >
    </template>
  </Modal>
</template>
