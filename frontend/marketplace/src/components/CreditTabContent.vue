<script setup lang="ts">
import { onMounted, ref } from "vue";
import CustomSearchBar from "@/components/CustomSearchBar.vue";
import CreditCard from "@/components/CreditCard.vue";
import CustomPagination from "@/components/CustomPagination.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { CHAIN_ID } from "@/config/config";
import CustomSpinner from "@/components/CustomSpinner.vue";
import CustomAlert from "@/components/CustomAlert.vue";
import { toast } from "vue3-toastify";
import { getWallet, walletConnected } from "@/utils/wallet-utils";

const pageNumber = ref(1);
const itemsPerPage = ref(5);
const searchTerm = ref("");
const data = ref();
const showSpinner = ref(true);

const handlePageChange = () => {
  getCreditsData();
};
const handleSearch = () => {
  pageNumber.value = 1;
  getCreditsData();
};

const getCreditsData = async () => {
  try {
    const wallet = getWallet();
    const account = await wallet.getKey(CHAIN_ID);
    const walletAddress = account.bech32Address;
    if (walletAddress) {
      const query = `{
    query {
    creditBalances(
    first:${itemsPerPage.value},offset:${
        (pageNumber.value - 1) * itemsPerPage.value
      }
    filter:{
      wallet:{
        address:{equalTo:"${walletAddress}"}
      }
      ${
        searchTerm.value &&
        `creditCollection:{
        denom:{includesInsensitive:"${searchTerm.value}"}
      }`
      }
    }){
      totalCount
      nodes{
      wallet{
          address
        }
        creditCollection{
          denom
          creditType
          creditData{
            nodes{
            mediaFiles{
              nodes{
                name
                url
              }
            }
              eventData{
                nodes{
                  material{
                    nodes{
                      key
                      value

                    }
                  }
                }
              }
            }
          }
        }
        amountActive
        amountRetired
      }
    }
  }
}`;
      loadQueryData(query);
    }
  } catch (error) {
    toast.error("Please connect to wallet");
  }
};

const loadQueryData = (query: string) => {
  showSpinner.value = true;
  const { result, loading, error, refetch } = useQuery(
    gql`
      ${query}
    `
  );
  data.value = { result, loading, error };
  showSpinner.value = false;
  setInterval(() => {
    refetch();
  }, 5000);
};

onMounted(() => {
  if (walletConnected()) {
    getCreditsData();
  } else {
    toast.error("Please connect to wallet");
  }
});
</script>
<template>
  <CustomSearchBar
    v-model="searchTerm"
    placeholder="Search Credits"
    @search-click="handleSearch"
  />
  <CustomSpinner :visible="showSpinner" />
  <template v-if="!showSpinner">
    <CustomAlert
      :visible="true"
      :label="`${
        data?.result?.query?.creditBalances?.totalCount || 0
      } credits found`"
    />
    <div
      v-for="credit in data?.result?.query?.creditBalances?.nodes"
      :key="credit.id"
    >
      <CreditCard :card-data="credit" />
    </div>
    <div class="flex justify-center md:justify-end my-10">
      <CustomPagination
        :total="data?.result?.query?.creditBalances?.totalCount"
        :item-per-page="itemsPerPage"
        v-model:current-page="pageNumber"
        @page-change="handlePageChange"
      />
    </div>
  </template>
</template>
