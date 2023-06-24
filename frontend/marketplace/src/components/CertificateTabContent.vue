<script setup lang="ts">
import { onMounted, ref } from "vue";
import CustomSearchBar from "@/components/CustomSearchBar.vue";
import CustomPagination from "@/components/CustomPagination.vue";
import CertificateCard from "@/components/CertificateCard.vue";
import { CHAIN_ID } from "@/config/config";
import { toast } from "vue3-toastify";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import CustomAlert from "@/components/CustomAlert.vue";
import { walletConnected, getWallet } from "@/utils/wallet-utils";

const pageNumber = ref(1);
const itemsPerPage = ref(5);
const searchTerm = ref("");
const data = ref();
const showSpinner = ref(true);

const handlePageChange = () => {
  getCertificatesData();
};
const handleSearch = () => {
  pageNumber.value = 1;
  getCertificatesData();
};

const getCertificatesData = async () => {
  try {
    const wallet = getWallet();
    const account = await wallet.getKey(CHAIN_ID);
    const walletAddress = account.bech32Address;
    if (walletAddress) {
      const query = `query {
    creditOffsetCertificates(
    first:${itemsPerPage.value},offset:${
        (pageNumber.value - 1) * itemsPerPage.value
      }
    filter: {
      wallet: {
        address: { equalTo: "${walletAddress}" }
      }
      ${searchTerm.value && `denom: { equalTo: "${searchTerm.value}" }`}
    }
  ) {
    totalCount
    nodes {
      amount
      denom
    }
  }
  }
`;
      loadQueryData(query);
    }
  } catch (error) {
    toast.error("Please connect to wallet");
  }
};

const loadQueryData = (query: string) => {
  showSpinner.value = true;
  const { result, loading, error } = useQuery(
    gql`
      ${query}
    `
  );
  data.value = { result, loading, error };
  showSpinner.value = false;
};

onMounted(() => {
  if (walletConnected()) {
    getCertificatesData();
  } else {
    toast.error("Please connect to wallet");
  }
});
</script>
<template>
  <!-- TODO disabling search here for now. Not sure how it should work -->
  <!-- <CustomSearchBar v-model="searchTerm" placeholder="Search Certificates" @search-click="handleSearch"/> -->
  <div class="my-3">
    <CustomSpinner :visible="showSpinner" />
    <template v-if="!showSpinner">
      <CustomAlert
        :visible="true"
        :label="`${
          data?.result?.creditOffsetCertificates?.totalCount || 0
        } certificates found`"
      />
      <div
        v-for="certificate in data?.result?.creditOffsetCertificates?.nodes"
        :key="certificate.id"
      >
        <CertificateCard :card-data="certificate" />
      </div>
      <div class="flex justify-center md:justify-end my-10">
        <CustomPagination
          :total="data?.result?.creditOffsetCertificates?.totalCount"
          :item-per-page="itemsPerPage"
          v-model:current-page="pageNumber"
          @page-change="handlePageChange"
        />
      </div>
    </template>
  </div>
</template>
