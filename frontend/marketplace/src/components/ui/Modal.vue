<script setup lang="ts">
import { ref, defineExpose } from "vue";
interface Props {
  title?: string;
}
const props = defineProps<Props>();
const isOpen = ref(false);
const dialog = ref<HTMLDialogElement>();

const show = () => {
  isOpen.value = true;
  dialog.value?.showModal();
};

const close = () => {
  isOpen.value = false;
  dialog.value?.close();
};

defineExpose({
  show,
  close,
});
</script>

<template>
  <dialog ref="dialog" id="modal_dialog" class="modal">
    <div class="modal-box bg-modalBackground border border-white">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 v-if="props.title" class="font-bold text-lg">{{ props.title }}</h3>
      <slot name="body" />
      <div class="modal-action">
        <slot name="actions"></slot>
      </div>
    </div>
  </dialog>
</template>
