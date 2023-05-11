<script setup lang="ts">
import Paginate from 'vuejs-paginate-next'

export interface PaginationProps {
  pageCount: number
  currentPage: number
}
defineProps<PaginationProps>()

const emitPagination = defineEmits(['update:currentPage', 'pageChange'])

const handlePageChange = (current: number) => {
  emitPagination('update:currentPage', current)
  emitPagination('pageChange', current)
}
</script>
<template>
  <paginate
    :v-model="currentPage"
    :page-count="20"
    :click-handler="handlePageChange"
    first-last-button
    prev-text="<"
    next-text=">"
    first-button-text="<<"
    last-button-text=">>"
    :container-class="'rounded-sm flex bg-lightBlack rounded-sm items-center cursor-pointer'"
    :page-class="'md:px-4 px-2 py-3 bg-lightBlack border-none text-greenTabs'"
    :prev-class="'md:px-4 px-2 py-3 bg-lightBlack border-none  text-greenTabs'"
    :next-class="'md:px-4 px-2 py-3 bg-lightBlack border-none  text-greenTabs'"
    :active-class="'md:px-4 px-2 py-3 bg-paginationBlack border-none  text-greenTabs'"
  />
</template>
