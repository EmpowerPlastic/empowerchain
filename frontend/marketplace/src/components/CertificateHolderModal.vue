<script setup lang="ts">
import { ref, computed } from "vue";
import Modal from "@/components/ui/Modal.vue";
import PrimaryButton from "@/components/ui/PrimaryButton.vue";

const emit = defineEmits(["continue"]);
const baseModal = ref<HTMLDialogElement | null>(null);
const certificateHolder = ref<string>("");
const isCertificateHolderValid = computed<boolean>(() => {
  return (
    certificateHolder.value.length > 0 && certificateHolder.value.length < 31
  );
});
const isCertificateHolderTooLong = computed<boolean>(() => {
  return certificateHolder.value.length > 30;
});
const handleOpenModal = () => {
  baseModal.value?.show();
};

const handleContinue = () => {
  emit("continue", certificateHolder.value);
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
          class="input input-bordered w-full text-white"
          v-model="certificateHolder"
        />
        <div class="label" v-if="isCertificateHolderTooLong">
          <span class="label-text-alt text-white"
            >Name can not be more than 30 characters.</span
          >
        </div>
      </div>
    </template>
    <template v-slot:actions>
      <PrimaryButton
        @click.prevent="handleContinue"
        :disabled="!isCertificateHolderValid"
        >Continue</PrimaryButton
      >
    </template>
  </Modal>
</template>
