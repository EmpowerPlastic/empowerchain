<script lang="ts" setup>
import type { Ref } from "vue";
interface Props {
  handleOpen: () => void;
}
defineProps<Props>();
const modalEl = ref<HTMLDialogElement | null>(null);



</script>
<template>
  <dialog ref="modalEl" id="cert_name_modal" class="modal text-black">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 class="font-bold text-lg">Certificate holder</h3>
      <p class="py-4">
        Provide an individual or company name that is going to be used for the
        Plastic Credit Offset Certificate. Mind that this cannot be changed
        later.
      </p>
      <p>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full"
        />
      </p>
      <div class="modal-action">
        <button
          class="btn btn-ghost text-white btn-block normal-case bg-greenPrimary hover:bg-greenDark text-title24 lg:text-title32 lg:btn-lg p-0 px-12 font-normal disabled:bg-lightGray disabled:text-white"
        >
          Continue
        </button>
      </div>
    </div>
  </dialog>
</template>
