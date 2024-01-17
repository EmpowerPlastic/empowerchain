<script setup lang="ts">
import { onMounted, ref, computed, watch, onUnmounted } from "vue";
import CustomPagination from "@/components/CustomPagination.vue";
import CertificateCard from "@/components/CertificateCard.vue";
import { useNotifyer } from "@/utils/notifyer";
import { useQuery } from "@vue/apollo-composable";
import CustomSpinner from "@/components/CustomSpinner.vue";
import CustomAlert from "@/components/CustomAlert.vue";
import { useAuth } from "@/stores/auth";
import { useWallet } from "@/stores/wallet";
import {
  GET_CREDIT_OFFSET_CERTIFICATES,
  GET_CREDIT_COLLECTIONS,
} from "@/graphql/queries";

const pageNumber = ref(1);
const itemsPerPage = ref(5);
const certificatesData = ref();
const creditCollectionsData = ref();
const showSpinner = computed(() => {
  return (
    certificatesData.value?.loading?.value === true ||
    creditCollectionsData.value?.loading?.value === true
  );
});
const { notifyer } = useNotifyer();
const auth = useAuth();
const wallet = useWallet();

const creditOffsetCertificates = computed(() => {
  return certificatesData.value?.result?.creditOffsetCertificates ?? undefined;
});

// Looks complicated, but it returns an array where it merges the
// certificate data with the media files from the credit collection
const creditOffsetCertificatesAndCreditCollections = computed(() => {
  const creditOffsetCertificates =
    certificatesData.value?.result?.creditOffsetCertificates?.nodes ?? [];
  if (certificatesData.value) {
    return creditOffsetCertificates?.map((creditOffsetCertificate: any) => {
      return [
        creditOffsetCertificate,
        getCreditCollectionMediaFiles(creditOffsetCertificate.denom)[0],
      ];
    });
  }
  return [];
});

const getCreditCollection = (id: string) => {
  const nodes =
    creditCollectionsData.value?.result?.creditCollections?.nodes ?? [];
  return nodes.find((creditCollection: any) => creditCollection.id === id);
};

const getCreditCollectionMediaFiles = (id: string) => {
  const collection = getCreditCollection(id);
  if (collection) {
    const collectionNodes = collection.creditData?.nodes ?? [];
    return collectionNodes[0]?.mediaFiles?.nodes;
  }
  return [];
};

const hasEmailAddressOrWalletConnectedAddress = computed(() => {
  // We need to use address values instead of the booleans because they are set after the "isAuthenticated" booleans.
  // The auth logic should be moved out of the NavBar
  return !!auth.walletAddress.value || !!wallet.address.value;
});

const handlePageChange = () => {
  getCertificatesData();
};

const getCreditCollectionData = async () => {
  const nodes = creditOffsetCertificates.value?.nodes;
  const denoms = nodes?.map((node: any) => node.denom);
  const uniqueDenoms = [...new Set(denoms)];
  if (uniqueDenoms.length < 1) {
    return;
  }

  const { result, loading, error } = useQuery(GET_CREDIT_COLLECTIONS, {
    denoms: uniqueDenoms,
  });

  creditCollectionsData.value = { result, loading, error };
};

const getCertificatesData = () => {
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
    const { result, loading, error, onResult } = useQuery(
      GET_CREDIT_OFFSET_CERTIFICATES,
      {
        walletAddress,
        first: itemsPerPage.value,
        offset: (pageNumber.value - 1) * itemsPerPage.value,
      },
    );
    certificatesData.value = { result, loading, error };

    onResult(() => {
      getCreditCollectionData();
    });
  } catch (error) {
    notifyer.error("Error fetching your certificates, error has been logged");
    throw new Error("Error fetching certificates: " + error);
  }
};

let stopWatcher: () => void;
onMounted(() => {
  stopWatcher = watch(
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
  if (stopWatcher) {
    stopWatcher();
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
          creditOffsetCertificates?.totalCount || 0
        } certificates found`"
      />
      <div
        v-for="certificate in creditOffsetCertificatesAndCreditCollections"
        :key="certificate.id"
      >
        <CertificateCard :card-data="certificate" />
      </div>
      <div class="flex justify-center md:justify-end my-10">
        <CustomPagination
          v-if="creditOffsetCertificates?.totalCount > 0"
          :total="creditOffsetCertificates?.totalCount"
          :item-per-page="itemsPerPage"
          v-model:current-page="pageNumber"
          @page-change="handlePageChange"
        />
      </div>
    </template>
  </div>
</template>
