<script setup lang="ts">
import { computed, ref } from "vue";
import CustomImage from "@/components/CustomImage.vue";
import { convertIPFStoHTTPS } from "@/utils/utils";
import auctionCard from "@/assets/auctionCard.png";
import { useQuery } from "@vue/apollo-composable";
import {
  GET_CREDIT_COLLECTIONS,
  GET_CREDIT_OFFSET_CERTIFICATE,
} from "@/graphql/queries";
import QRCode from "qrcode";
import { generatePDF } from "@/pdfGenerator/pdfGenerator";
import { useNotifyer } from "@/utils/notifyer";
import greenLogo from "@/assets/greenlogo.svg";

export interface CreditCardProps {
  cardData: any;
}
interface CertificateDataNode {
  amount: string;
  denom: string;
  id: string;
  nodeId: string;
  retiringEntityAdditionalData: string;
  retiringEntityName: string;
  walletId: string;
  timestamp?: string;
}
type RowData = {
  data?: any[];
  type: string;
};

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
const materialData = ref<Array<{ type: string; [key: string]: any }>>([]);
const eventData = ref();
const plasticValuesString = ref("");
const locations = ref<Array<{ type: string; [key: string]: any }>>([]);
const mediaFileUrls = ref<Array<{ type: string; [key: string]: any }>>([]);
const binaryFilesUrls = ref<Array<{ type: string; [key: string]: any }>>([]);
const collectionAmount = ref(0);
const issuanceDate = ref("");
const applicantData = ref("");
const applicantDataDescription = ref("");
const materialDetails = ref<Array<{ type: string; [key: string]: any }>>([]);
const currentHeaders = ref<Array<string>>([]);
const primaryHeaders = ref<Array<string>>([]);
const secondaryHeaders = ref<Array<string>>([]);
const retiredDate = ref("");
const allData = ref<RowData[]>([]);
const pagesData = ref<Array<{ type: string; [key: string]: any }>>([]);
const ID = certificate.value.id;
const showSpinner = ref(false);
const firstPageMaxRows = ref(0);
const secondPageMaxRows = ref(0);
const otherPageMaxRows = ref(35);
const qrCodeUrl = ref<string | undefined>(undefined);

const downloadCertificate = async () => {
  showSpinner.value = true;
  queryCertificateData();
  qrCodeUrl.value = await generateQRCode();
};

const onGeneratePDF = () => {
  try {
    generatePDF(
      certificateData.value,
      pagesData.value,
      primaryHeaders.value,
      secondaryHeaders.value,
      plasticValuesString.value,
      collectionAmount.value,
      applicantData.value,
      issuanceDate.value,
      retiredDate.value,
      creditData.value,
      ID as string,
      applicantDataDescription.value,
      qrCodeUrl.value,
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
  materialData.value = [];
  eventData.value = null;
  plasticValuesString.value = "";
  locations.value = [];
  mediaFileUrls.value = [];
  binaryFilesUrls.value = [];
  collectionAmount.value = 0;
  issuanceDate.value = "";
  applicantData.value = "";
  applicantDataDescription.value = "";
  materialDetails.value = [];
  currentHeaders.value = [];
  primaryHeaders.value = [];
  secondaryHeaders.value = [];
  retiredDate.value = "";
  allData.value = [];
  pagesData.value = [];
};

const queryCertificateData = () => {
  const { result, error, onResult } = useQuery(GET_CREDIT_OFFSET_CERTIFICATE, {
    id: ID,
  });
  onResult(() => {
    if (result.value) {
      processCertificateDataNode(
        result.value.creditOffsetCertificates.nodes[0],
      );
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
  onResult(() => {
    if (result.value) {
      processCreditCollectionsNode(result.value.creditCollections.nodes[0]);
      processEventDataNode(
        result.value.creditCollections.nodes[0].creditData.nodes[0].eventData
          .nodes,
      );
      processCreditDataNode(
        result.value.creditCollections.nodes[0].creditData.nodes[0],
      );
      assignApplicantData(
        result.value.creditCollections.nodes[0].creditData.nodes[0],
      );
      assignAllDataValue();
      preparePagesData();
      showSpinner.value = false;
      onGeneratePDF();
    }
  });
  if (error.value) {
    console.error("Error fetching credit offset certificate:", error.value);
  }
};

const processCertificateDataNode = (
  certificateDataNode: CertificateDataNode,
) => {
  certificateData.value = certificateDataNode;
  //Create string for retired date on second page, add timestamp to query when it's available in the index
  if (certificateDataNode.timestamp) {
    retiredDate.value = certificateDataNode.timestamp.substring(0, 10);
  } else {
    retiredDate.value = "N/A";
  }
};

const processCreditCollectionsNode = (creditCollectionsNode: any) => {
  //Create string for issuance date on second page
  collectionAmount.value =
    Number(creditCollectionsNode.activeAmount) +
    Number(creditCollectionsNode.retiredAmount);
  issuanceDate.value = creditCollectionsNode.issuanceDate.substring(0, 10);
};

const processEventDataNode = (eventDataNode: any) => {
  //Create string for plastic type on first page
  const plastciValuesSet = new Set(
    eventDataNode
      .map((eventNode: any) =>
        eventNode.material.nodes
          .filter((material: any) => material.key == "plasticType")
          .map((material: any) => material.value),
      )
      .flat(),
  );
  plasticValuesString.value = Array.from(plastciValuesSet).join(", ");

  //Assign data to location table variables
  locations.value = eventDataNode.reduce((unique: any, eventNode: any) => {
    const duplicate = unique.find(
      (location: any) =>
        location.longitude === eventNode.longitude &&
        location.latitude === eventNode.latitude,
    );

    if (!duplicate) {
      unique.push({
        country: eventNode.country || "N/A",
        longitude: eventNode.longitude != null ? eventNode.longitude : "N/A",
        latitude: eventNode.latitude != null ? eventNode.latitude : "N/A",
        type: "location",
      });
    }
    return unique;
  }, []);
  if (eventDataNode.length) {
    eventData.value = eventDataNode[0];
    materialData.value = eventDataNode[0].material.nodes[0];

    const uniqueMaterialsSet = new Set();
    const uniqueMaterials: any = [];

    //Assign new keys to material table variables
    const keyMapping: { [key: string]: string } = {
      granularity: "Shape/Granularity",
      "shape / granularity": "Shape/Granularity",
      plasticType: "Plastic Type",
      registrationDate: "Registration Date",
      color: "Color",
      kilo: "Weight (kg)",
      condition: "Condition",
      brand: "Brand",
      "material origin": "Material Origin",
    };

    //Assign data to material table variables
    eventDataNode.forEach((eventNode: any) => {
      const materialCombination: any = {
        type: "material",
        [keyMapping["registrationDate"]]: eventNode.registrationDate.substring(
          0,
          10,
        ),
      };

      eventNode.material.nodes.forEach((materialNode: any) => {
        const key = keyMapping[materialNode.key] || materialNode.key;

        if (materialNode.value) {
          materialCombination[key] = materialNode.value;
        }
      });

      if (Object.keys(materialCombination).length > 2) {
        const materialString = JSON.stringify(materialCombination);
        if (!uniqueMaterialsSet.has(materialString)) {
          uniqueMaterialsSet.add(materialString);
          uniqueMaterials.push(materialCombination);
        }
      }
    });

    materialDetails.value = uniqueMaterials;

    //create headers for material table
    const getTableHeaders = () => {
      const headers: Array<string> = [];
      for (const detail of materialDetails.value) {
        for (const key in detail) {
          if (detail[key] && !headers.includes(key)) {
            headers.push(key);
          }
        }
      }
      return headers;
    };

    currentHeaders.value = getTableHeaders();

    //Assign data to material table one and material table two
    primaryHeaders.value = currentHeaders.value.slice(1, 6);
    if (currentHeaders.value.length >= 6) {
      secondaryHeaders.value = currentHeaders.value.slice(6);
    } else {
      secondaryHeaders.value = [];
    }
  }
};

const processCreditDataNode = (creditDataNode: any) => {
  creditData.value = creditDataNode;

  //Assign data to binary table variables

  binaryFilesUrls.value = creditDataNode.binaryFiles.nodes.map(
    (binaryFileNode: any) => {
      return {
        name: binaryFileNode.name || "N/A",
        url: binaryFileNode.url || "N/A",
        type: "binary",
        startIndex: 0,
        endIndex: 0,
      };
    },
  );
  //Assign data to media table variables
  mediaFileUrls.value = creditDataNode.mediaFiles.nodes.map(
    (mediaFileNode: any) => {
      return {
        name: mediaFileNode.name || "N/A",
        url: mediaFileNode.url || "N/A",
        type: "media",
      };
    },
  );
};

const assignApplicantData = (creditDataNode: any) => {
  //Assign data to Organization in collection information table
  applicantData.value =
    creditDataNode.applicantDataByCreditDataId.nodes[0].name;

  //Assign data to description in project description table
  applicantDataDescription.value =
    creditDataNode.applicantDataByCreditDataId.nodes[0].description;
};

const assignAllDataValue = () => {
  allData.value = [
    ...mediaFileUrls.value,
    ...binaryFilesUrls.value,
    ...locations.value,
    ...materialDetails.value,
  ];
};

//Calculate how many categories in total
const calculateCategoryDistribution = () => {
  const categoryCounts = new Map();

  allData.value.forEach((item) => {
    categoryCounts.set(item.type, (categoryCounts.get(item.type) || 0) + 1);
  });

  return categoryCounts;
};

//Calculate how many rows in page one and page two
const calculateMaxRows = () => {
  const categoryCounts = calculateCategoryDistribution();
  const descriptionRows = Math.ceil(applicantDataDescription.value.length / 90);
  const mediaCount = categoryCounts.get("media");
  const binaryCount = categoryCounts.get("binary");
  const locationCount = categoryCounts.get("location");

  if (mediaCount + descriptionRows >= 22) {
    firstPageMaxRows.value = 22 - descriptionRows;
  } else if (mediaCount + binaryCount + descriptionRows >= 19) {
    firstPageMaxRows.value = 19 - descriptionRows;
  } else if (mediaCount + binaryCount + locationCount + descriptionRows >= 14) {
    firstPageMaxRows.value = 14 - descriptionRows;
  } else {
    firstPageMaxRows.value = 11 - descriptionRows;
  }
  if (mediaCount + descriptionRows > 65) {
    secondPageMaxRows.value = 47;
  } else if (mediaCount + binaryCount + descriptionRows > 60) {
    secondPageMaxRows.value = 42;
  } else if (mediaCount + binaryCount + locationCount + descriptionRows > 55) {
    secondPageMaxRows.value = 38;
  } else {
    secondPageMaxRows.value = 35;
  }
};

//Organize the data for each page
const preparePagesData = () => {
  let currentPageData: any = [];
  let currentRowCount = 0;
  let isFirstPage = true;
  let isSecondPage = false;

  calculateMaxRows();

  allData.value.forEach((item: any) => {
    let maxRowsPerPage = isFirstPage
      ? firstPageMaxRows.value
      : otherPageMaxRows.value;

    if (isSecondPage) {
      maxRowsPerPage = secondPageMaxRows.value;
    }

    if (item.type === "material" && secondaryHeaders.value.length > 0) {
      maxRowsPerPage -= item["Tracking Event"];
    }

    currentRowCount++;

    if (currentRowCount > maxRowsPerPage) {
      pagesData.value.push(currentPageData);
      currentPageData = [];
      currentRowCount = 0;

      if (isFirstPage) {
        isFirstPage = false;
        isSecondPage = true;
      } else if (isSecondPage) {
        isSecondPage = false;
      }
    }

    let category = currentPageData.find((c: any) => c.type === item.type);
    if (!category) {
      category = { type: item.type, items: [] };
      currentPageData.push(category);
    }
    category.items.push(item);

    if (currentRowCount === maxRowsPerPage && !isSecondPage) {
      pagesData.value.push(currentPageData);
      currentPageData = [];
      currentRowCount = 0;
      if (isFirstPage) {
        isFirstPage = false;
        isSecondPage = true;
      }
    }
  });

  if (currentPageData.length > 0) {
    pagesData.value.push(currentPageData);
  }
};

const generateQRCode = async () => {
  // const canvas = document.getElementById("qrCode") as HTMLCanvasElement;
  const url = await QRCode.toDataURL(`https://www.empowerchain.io/`);

  // Create a new image for the QR code
  const qrImage = new Image();
  qrImage.src = url;

  // Create a new image for the logo
  const logo = new Image();
  logo.src = greenLogo;
  // Wait for both images to load
  await Promise.all([
    new Promise((resolve) => {
      qrImage.onload = resolve;
    }),
    new Promise((resolve) => {
      logo.onload = resolve;
    }),
  ]);

  // Create a canvas and draw the QR code and logo on it
  const qrDimensions = { width: qrImage.width, height: qrImage.height };
  const canvas = document.createElement("canvas");
  canvas.width = qrDimensions.width;
  canvas.height = qrDimensions.height;
  const context = canvas.getContext("2d");
  if (context !== null) {
    context.drawImage(qrImage, canvas.width / 2 - qrImage.width / 2, 0);

    const logoX = canvas.width / 2 - logo.width / 2;
    const logoY = canvas.height / 2 - logo.height / 2;

    context.fillStyle = "white";
    context.fillRect(logoX - 5, logoY - 5, logo.width + 10, logo.height + 10);

    context.drawImage(logo, logoX, logoY);
  }

  // Get the data URL of the canvas
  return canvas.toDataURL();
};
</script>
<template>
  <div
    class="w-full rounded-lg bg-borderGray md:grid md:grid-cols-3 md:p-2 md:bg-lightBlack my-3"
  >
    <CustomImage
      v-if="image?.url"
      image-class="h-48 w-full rounded-lg max-w-sm"
      :src="convertIPFStoHTTPS(image?.url) || auctionCard"
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
