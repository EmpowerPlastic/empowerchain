<script setup lang="ts">
import { onMounted, ref, computed, watch, onUnmounted } from "vue";
import CustomPagination from "@/components/CustomPagination.vue";
import CertificateCard from "@/components/CertificateCard.vue";
import { useNotifyer } from "@/utils/notifyer";
import { useQuery } from "@vue/apollo-composable";
import CustomSpinner from "@/components/CustomSpinner.vue";
import gql from "graphql-tag";
import CustomAlert from "@/components/CustomAlert.vue";
import { useAuth } from "@/stores/auth";
import { useWallet } from "@/stores/wallet";

const pageNumber = ref(1);
const itemsPerPage = ref(5);
const searchTerm = ref("");
const data = ref();
const showSpinner = ref(true);
const { notifyer } = useNotifyer();
const auth = useAuth();
const wallet = useWallet();
const viewCertificate = (certificateId: string) => {
  const url = `${window.location.origin}/certificate/${certificateId}`;
  window.open(url, "_blank");
};

const hasEmailAddressOrWalletConnectedAddress = computed(() => {
  // We need to use address values instead of the booleans because they are set after the "isAuthenticated" booleans.
  // The auth logic should be moved out of the NavBar
  return !!auth.walletAddress.value || !!wallet.address.value;
});

const handlePageChange = () => {
  getCertificatesData();
};

const getCertificatesData = async () => {
  let walletAddress: string | undefined;
  if (auth.walletAddress.value) {
    walletAddress = auth.walletAddress.value;
  } else if (wallet.address.value) {
    walletAddress = wallet.address.value;
  }
  if (!walletAddress) {
    notifyer.error("Please login to see your certificates");
    return;
  }

  try {
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
          id
        }
      }
    }
    `;
    loadQueryData(query);
  } catch (error) {
    notifyer.error("Error fetching your certificates, error has been logged");
    throw new Error("Error fetching certificates: " + error);
  }
};

const loadQueryData = (query: string) => {
  showSpinner.value = true;
  const { result, loading, error } = useQuery(gql`
    ${query}
  `);
  data.value = { result, loading, error };
  showSpinner.value = false;
};

let stopWatch: () => void;

onMounted(() => {
  stopWatch = watch(
    hasEmailAddressOrWalletConnectedAddress,
    () => {
      if (hasEmailAddressOrWalletConnectedAddress.value) {
        getCertificatesData();
      }
    },
    { immediate: true },
  );
});

onUnmounted(() => {
  stopWatch();
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
        <CertificateCard
          :card-data="certificate"
          @viewCertificate="viewCertificate"
        />
      </div>
      <div class="flex justify-center md:justify-end my-10">
        <CustomPagination
          v-if="data?.result?.creditOffsetCertificates?.totalCount > 0"
          :total="data?.result?.creditOffsetCertificates?.totalCount"
          :item-per-page="itemsPerPage"
          v-model:current-page="pageNumber"
          @page-change="handlePageChange"
        />
      </div>
    </template>
  </div>
</template>
