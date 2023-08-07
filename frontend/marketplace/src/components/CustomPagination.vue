<script setup lang="ts">
export interface PaginationProps {
  total: number;
  itemPerPage: number;
  currentPage: number;
}
defineProps<PaginationProps>();

const emitPagination = defineEmits(["update:currentPage", "pageChange"]);

const handlePageChange = (current: number) => {
  emitPagination("update:currentPage", current);
  emitPagination("pageChange", current);
};
</script>
<template>
  <vue-awesome-paginate
    show-ending-buttons
    :total-items="total"
    v-model="$props.currentPage"
    :items-per-page="itemPerPage"
    :max-pages-shown="3"
    paginate-buttons-class="md:px-4 px-3 py-3 bg-lightBlack border-none text-greenTabs"
    pagination-container-class="rounded-sm flex bg-lightBlack rounded-sm items-center cursor-pointer"
    active-page-class="md:px-4 px-3 py-3 bg-paginationBlack border-none  text-greenTabs"
    :on-click="handlePageChange"
    last-page-content=">>"
    first-page-content="<<"
  />
</template>
