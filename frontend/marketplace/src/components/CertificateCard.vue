<script setup lang="ts">
import CustomImage from "@/components/CustomImage.vue";
import {
GET_CREDIT_COLLECTIONS,
GET_CREDIT_OFFSET_CERTIFICATE,
} from "@/graphql/queries";
import { generatePDF } from "@/pdfGenerator/pdfGenerator";
import { useNotifyer } from "@/utils/notifyer";
import { convertIPFStoHTTPS } from "@/utils/utils";
import { useQuery } from "@vue/apollo-composable";
import { computed, ref } from "vue";

export interface CreditCardProps {
  cardData: any;
}

// Define the expected properties from the parent component
const props = defineProps<CreditCardProps>();
const certificate = computed(() => {
  return props.cardData[0];
});
const image = computed(() => {
  return props.cardData[1];
});

const { notifyer } = useNotifyer();

const certificateData = ref();
const creditData = ref();
const creditCollectionData = ref();
const ID = certificate.value.id;
const showSpinner = ref(false);

const downloadCertificate = async () => {
  showSpinner.value = true;
  queryCertificateData();
};

const onGeneratePDF = async () => {
  try {
    await generatePDF(
      certificateData.value,
      creditData.value,
      creditCollectionData.value,
      ID as string,
    );
    notifyer.success("Certificate downloaded successfully");
    showSpinner.value = false;
    resetValues();
  } catch (e) {
    console.error(e);
    notifyer.error("Something went wrong");
  }
};

const resetValues = () => {
  certificateData.value = null;
  creditData.value = null;
  creditCollectionData.value = null;
};

const queryCertificateData = () => {
  const { result, error, onResult } = useQuery(GET_CREDIT_OFFSET_CERTIFICATE, {
    id: ID,
  });
  onResult(() => {
    if (result.value) {
      certificateData.value = result.value.creditOffsetCertificates.nodes[0];
      getCreditData(result.value.creditOffsetCertificates.nodes[0].denom);
    }
  });
  if (error.value) {
    console.error("Error fetching credit offset certificate:", error.value);
  }
};

const getCreditData = (denom: string) => {
  const { result, error, onResult } = useQuery(GET_CREDIT_COLLECTIONS, {
    denoms: [denom],
  });

  onResult(async () => {
    if (result.value) {
      creditData.value =
        result.value.creditCollections.nodes[0].creditData.nodes[0];
      creditCollectionData.value = result.value.creditCollections.nodes[0];
      await onGeneratePDF();
      showSpinner.value = false;
    }
  });
  if (error.value) {
    console.error("Error fetching credit offset certificate:", error.value);
  }
};
</script>
<template>
  <div
    class="w-full rounded-lg bg-borderGray md:grid md:grid-cols-3 md:p-2 md:bg-lightBlack my-3"
  >
    <CustomImage
      :showSpinner="!image?.url"
      image-class="h-48 w-full rounded-lg max-w-sm"
      :src="convertIPFStoHTTPS(image?.url)"
    />
    <!--        Desktop UI-->
    <div class="hidden md:grid md:col-span-2">
      <div class="grid-cols-3 grid gap-3 p-5">
        <div class="col-span-1">
          <p class="text-title14 font-light text-textGray">CREDIT type</p>
          <p class="text-title18 font-bold">PCRD</p>
        </div>
        <div class="col-span-2 flex flex-col justify-between text-right">
          <p class="text-title32 font-bold">{{ certificate?.amount }} kg</p>
          <p class="text-title14 text-subTextGray mb-1">
            {{ certificate?.denom }}
          </p>
          <div>
            <button class="btn certificate-button" @click="downloadCertificate">
              <span v-if="showSpinner" class="loading loading-spinner"></span>
              Download certificate
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--        Mobile UI-->
    <div class="md:hidden">
      <div class="grid grid-cols-2 gap-1 pt-5 px-5">
        <div>
          <p class="text-title14 font-light">CREDIT type</p>
          <p class="text-title14 font-bold">PCRD</p>
        </div>
        <div class="text-right">
          <p class="text-title24 font-bold">{{ certificate?.amount }} kg</p>
          <p class="text-title12 font-light break-words">
            {{ certificate?.denom }}
          </p>
        </div>
      </div>

      <div class="grid grid-col-1 gap-6 p-5">
        <button class="btn certificate-button" @click="downloadCertificate">
          <span v-if="showSpinner" class="loading loading-spinner"></span>
          Download certificate
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.certificate-button {
  @apply rounded-sm text-greenPrimary font-bold text-title14 bg-buttonBlack normal-case border-none;
}
</style>
