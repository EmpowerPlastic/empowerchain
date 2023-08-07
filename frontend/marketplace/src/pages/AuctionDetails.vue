<script setup lang="ts">
import ImageCarousel from "@/components/ImageCarousel.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import CustomGoogleMap from "@/components/CustomGoogleMap.vue";
import BuyCredits from "@/components/BuyCredits.vue";
import { onMounted, ref, watch } from "vue";
import ProjectDetailContent from "@/components/ProjectDetailContent.vue";
import { useRoute } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import CustomSpinner from "@/components/CustomSpinner.vue";
import { convertIPFStoHTTPS } from "@/utils/utils";
import { toast } from "vue3-toastify";

const router = useRoute();

const getDetailsList = (data: any) => {
  let applicantArray: string[] = [];
  let locationArray: string[] = [];
  let locationPointersArray: {
    lat: number;
    lng: number;
  }[] = [];
  let imageArray: string[] = [];
  let fileArray: { url: string; name: string }[] = [];
  let materialArray: { key: string; value: string }[] = [];
  let volume: number = 0;
  let registrationDateArray: string[] = [];

  data?.map((item: any) => {
    item.applicantDataByCreditDataId.nodes.map((node: any) => {
      applicantArray.push(node.name);
    });

    item.eventData.nodes.map((node: any) => {
      volume = volume + node.amount;
      locationArray.push(node.country);
      locationPointersArray.push({ lat: node.latitude, lng: node.longitude });
      materialArray.push(...node.material.nodes);
      registrationDateArray.push(
        new Date(node.registrationDate).toLocaleDateString()
      );
    });

    item.mediaFiles.nodes.map((node: any) => {
      imageArray.push(convertIPFStoHTTPS(node.url));
    });
    item.binaryFiles.nodes.map((node: any) => {
      fileArray.push({
        url: convertIPFStoHTTPS(node.url),
        name: node.name,
      });
    });
  });

  const uniqueMaterialArray = materialArray.filter(
    (obj, index, self) =>
      index ===
      self.findIndex((o) => o.key === obj.key && o.value === obj.value)
  );
  return {
    applicant: applicantArray[0],
    location: Array.from(new Set(locationArray)),
    material: uniqueMaterialArray.map((item) => item.value),
    volume: volume,
    image: imageArray,
    file: fileArray,
    locationPointers: locationPointersArray,
    registrationDate: registrationDateArray[0],
  };
};

const copyToken = async (text: string) => {
  await navigator.clipboard.writeText(text);
  toast.success("Copied to clipboard");
};
const data = ref();
const orderHistory = ref();
const showSpinner = ref(true);
const amount = ref(0);
const denom = ref("");
const owner = ref("");
const auctionDetails = ref(getDetailsList(null));

const getAuctionDetails = (id: string | string[]) => {
  let query = `query {
  marketplaceListings(
    filter: { id:{equalTo:"${id}"} }
  ) {
    totalCount
    nodes {
      id
      amount
      initialAmount
      denom
      owner
      pricePerCreditAmount
      pricePerCreditDenom
      creditCollection {
        creditType
        creditData {
          nodes {
            mediaFiles{
              nodes{
                name
                url
              }
            }
            binaryFiles{
              nodes{
                name
                url
              }
            }
            eventData {
              nodes {
                magnitude
                registrationDate
                amount
                country
                latitude
                longitude
                material {
                  nodes {
                    key
                    value
                  }
                }
              }
            }
            applicantDataByCreditDataId {
              nodes {
                name
                description
              }
            }
          }
        }
      }
    }
  }
}
`;

  const { result, loading, error, refetch } = useQuery(
    gql`
      ${query}
    `
  );
  data.value = { result, loading, error };
  setInterval(() => {
    refetch();
  }, 5000);

  watch(result, (value) => {
    auctionDetails.value = getDetailsList(
      value.marketplaceListings?.nodes[0].creditCollection.creditData.nodes
    );
  });

  showSpinner.value = false;
  denom.value = result.value?.marketplaceListings?.nodes[0].denom;
  owner.value = result.value?.marketplaceListings?.nodes[0].owner;
};

const getOrderHistory = (id: string | string[]) => {
  let owner = id.toString().split("-")[0];
  let denom = id.toString().split("-")[1];

  let query = `query {
  buyCreditsWasmEvents(filter:{
    denom:{equalTo:"${denom}"},
    listingOwner:{equalTo:"${owner}"}
  }){
    nodes{
      totalPriceAmount
      totalPriceDenom
      listingOwner
      denom
      buyer
      numberOfCreditsBought
      saleDate
    }
  }
}`;

  const { result, loading, error } = useQuery(
    gql`
      ${query}
    `
  );
  orderHistory.value = { result, loading, error };
};

onMounted(() => {
  getAuctionDetails(router.params.id);
  getOrderHistory(router.params.id);
});
</script>
<template>
  <CustomSpinner :visible="showSpinner" />
  <div
    v-if="!showSpinner"
    class="p-5 md:px-[10%] min-h-[60vh] text-white font-Inter"
  >
    <!--  Title Section-->
    <p class="text-title18 mb-5">
      <a href="/auction">Auctions</a
      ><span class="text-subTextGray">/ Auction Details</span>
    </p>
    <h1 class="text-title38">
      {{ data?.result?.marketplaceListings?.nodes[0].denom }}
    </h1>
    <!--    <p class="text-title18 text-subTextGray">Sri Lanka</p>-->

    <!--    Gallery-->
    <ImageCarousel
      class="md:hidden my-5"
      :image-array="auctionDetails?.image"
    />
    <ImageGallery class="hidden md:flex" :image-array="auctionDetails?.image" />

    <!--    Buy Credits-->
    <BuyCredits
      :available-credits="`${data?.result?.marketplaceListings?.nodes[0].amount}/${data?.result?.marketplaceListings?.nodes[0].initialAmount}`"
      :selected-coin="`${data?.result?.marketplaceListings?.nodes[0].pricePerCreditDenom}`"
      :price-per-credit="
        data?.result?.marketplaceListings?.nodes[0].pricePerCreditAmount /
        1000000
      "
      :denom="data?.result?.marketplaceListings?.nodes[0].denom"
      :owner="data?.result?.marketplaceListings?.nodes[0].owner"
    />

    <!--    Project Details-->
    <div class="flex flex-col md:flex-row w-full mt-5 justify-between">
      <div
        class="grid md:grid-cols-2 md:gap-x-[10px] md:w-[50%] gap-y-5 bg-lightBlack rounded-sm p-6"
      >
        <ProjectDetailContent
          label="CREDIT type"
          :value="
            data?.result?.marketplaceListings?.nodes[0].creditCollection
              .creditType
          "
        />
        <ProjectDetailContent
          label="Material"
          :value="auctionDetails?.material"
          list
        />
        <ProjectDetailContent label="Credits per kg" value="1" />
        <ProjectDetailContent
          label="Registration date"
          :value="auctionDetails?.registrationDate"
        />
        <ProjectDetailContent
          label="Location"
          :value="auctionDetails?.location"
          list
        />
        <ProjectDetailContent
          label="Collection organization"
          :value="auctionDetails?.applicant"
        />
        <ProjectDetailContent
          label="Volume"
          :value="auctionDetails?.volume + 'kg'"
        />
      </div>

      <!--      Map Section-->
      <div
        class="mt-5 md:mt-0 md:w-[60%] md:ml-5 h-[330px] md:h-auto rounded-lg relative"
      >
        <CustomGoogleMap :locations="auctionDetails?.locationPointers" />
      </div>
    </div>

    <!--    Project Information-->
    <div class="bg-lightBlack p-6 mt-5 rounded-sm">
      <p class="text-title18 font-semibold mb-3">Project information</p>
      <p class="text-title14 text-textInfoGray">
        {{
          data?.result?.marketplaceListings?.nodes[0].creditCollection
            ?.creditData?.nodes[0].applicantDataByCreditDataId.nodes[0]
            .description
        }}
      </p>
    </div>

    <!--Files For download-->
    <div class="bg-lightBlack p-6 mt-5 rounded-sm">
      <p class="text-title18 font-semibold mb-3">
        Public files available for download
      </p>
      <ul class="pl-5">
        <li
          class="text-title14 text-greenPrimary underline"
          v-for="file in auctionDetails?.file"
          :key="file.name"
        >
          <a target="_blank" :href="file.url">{{ file.name }}</a>
        </li>
      </ul>
    </div>

    <!--    Order Buy History-->
    <div class="bg-lightBlack p-6 mt-5 rounded-sm">
      <p class="text-title18 font-semibold mb-3">Order buy history</p>

      <div class="divide-y md:divide-none divide-dividerGray">
        <div
          class="md:p-2 py-2 md:flex md:justify-between flex-wrap"
          :class="index % 2 === 0 ? 'md:bg-lightBlack' : null"
          v-for="(data, index) in orderHistory?.result?.buyCreditsWasmEvents
            ?.nodes"
          :key="data"
        >
          <div class="flex flex-row justify-between flex-wrap">
            <div
              class="flex flex-col md:flex-row text-title12 md:text-title14 flex-wrap break-words max-w-[70%] md:max-w-fit"
            >
              <p class="text-textInfoGray whitespace-nowrap overflow-hidden">
                {{ new Date(data?.saleDate).toLocaleString() }}
              </p>
              <p
                class="text-greenPrimary md:ml-16 text-ellipsis whitespace-nowrap overflow-hidden max-w-full cursor-pointer"
                @click="copyToken(data.buyer)"
              >
                {{ data.buyer }}
              </p>
            </div>
            <div class="flex">
              <button
                class="btn btn-ghost bg-transparent p-0 md:hidden"
                @click="copyToken(data.buyer)"
              >
                <img src="../assets/copyIcon.svg" />
              </button>
            </div>
          </div>
          <div class="flex justify-between text-title14 text-textInfoGray">
            <p>{{ data.numberOfCreditsBought }} {{ data.denom }}</p>
            <p class="md:ml-16">
              {{ data.totalPriceAmount }} {{ data.totalPriceDenom }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
ul li::before {
  content: "\2022";
  color: white;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
</style>
