<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { onBeforeUnmount, onMounted, ref, watchEffect } from "vue";
import { useRoute } from "@/router";
import { toast } from "vue3-toastify";
import { generatePDF } from "../pdfGenerator/pdfGenerator";
import CustomSpinner from "@/components/CustomSpinner.vue";
import { ipfsToHttpsProtocol } from "@/utils/utils";
import QRCode from "qrcode";

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

const router = useRoute();
const certificateData = ref();
const creditData = ref();
const loading = ref(true);
const materialData = ref<Array<{ type: string; [key: string]: any }>>([]);
const eventData = ref();
const plastciValuesString = ref("");
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
const ID = router.params.id;
const showSpinner = ref(true);
const firstPageMaxRows = ref(0);
const secondPageMaxRows = ref(0);
const otherPageMaxRows = ref(35);
const qrCodeUrl = ref<string | undefined>(undefined);
type RowData = {
  data?: any[];
  type: string;
};

onMounted(async () => {
  document.body.style.backgroundColor = "#ffff";
  queryNow();
  qrCodeUrl.value = await generateQRCode();
});
onBeforeUnmount(() => {
  document.body.style.backgroundColor = "";
});

const queryNow = () => {
  showSpinner.value = true;
  const query = gql`
    query GetCreditOffsetCertificate($id: String!) {
      creditOffsetCertificates(filter: { id: { equalTo: $id } }) {
        nodes {
          id
          nodeId
          denom
          retiringEntityName
          retiringEntityAdditionalData
          walletId
          amount
        }
      }
    }
  `;

  const { result, error } = useQuery(query, {
    id: `${router.params?.id}`,
  });

  watchEffect(() => {
    if (result.value) {
      processCertificateDataNode(
        result.value.creditOffsetCertificates.nodes[0],
      );
      getCreditData(result.value.creditOffsetCertificates.nodes[0].denom);
    }
    if (error.value) {
      console.error("Error fetching credit offset certificate:", error.value);
    }
  });
};

const getCreditData = (denom: string) => {
  let query = `query{
  creditCollections(filter:{
    denom:{equalTo:"${denom}"}
  }){
    nodes{
      projectId
      id
      denom
      creditType
      activeAmount
      retiredAmount
      issuanceDate
      retiredCreditsEvents{
        nodes {
          amount
          id
          owner
          creditCollectionId
        }
      }
      creditData{
        nodes{
          id
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
          eventData{
            nodes{
              material{
                nodes{
                  value
                  key
                }
              }
              latitude
              longitude
              amount
              magnitude
              country
              registrationDate
            }
          }
          applicantDataByCreditDataId{
            nodes{
              name
              description
            }
          }
        }
      }
    }
  }
}`;
  const { result, error } = useQuery(gql`
    ${query}
  `);

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
  }
  if (error.value) {
    console.error("Error fetching credit offset certificate:", error.value);
  }
  preparePagesData();
  showSpinner.value = false;
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
  plastciValuesString.value = Array.from(plastciValuesSet).join(", ");

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
  const url = await QRCode.toDataURL(
    `https://empower.market/registry/${ID as string}`,
  );

  // Create a new image for the QR code
  const qrImage = new Image();
  qrImage.src = url;

  // Create a new image for the logo
  const logo = new Image();
  logo.src = "/src/assets/greenlogo.svg"; // Replace with the path to your logo
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

const onGeneratePDF = () => {
  try {
    generatePDF(
      certificateData.value,
      pagesData.value,
      primaryHeaders.value,
      secondaryHeaders.value,
      plastciValuesString.value,
      collectionAmount.value,
      applicantData.value,
      issuanceDate.value,
      retiredDate.value,
      creditData.value,
      ID as string,
      applicantDataDescription.value,
      qrCodeUrl.value,
    );
    toast.success("Certificate downloaded successfully");
  } catch (e) {
    console.error(e);
    toast.error("Something went wrong");
  }
};
</script>

<template>
  <CustomSpinner :visible="showSpinner" />
  <div v-if="!showSpinner">
    <div class="flex flex-row justify-end p-5 min-w-[21cm]">
      <button
        class="btn btn-ghost text-white normal-case bg-greenPrimary"
        @click="onGeneratePDF()"
        :disabled="!loading"
      >
        <img class="w-7 mr-2" src="../assets/downloadIcon.svg" />
        Download Certificate
      </button>
    </div>
    <page size="A4" id="pdfContent" class="page1">
      <div class="wasteBox"></div>
      <div class="innerBox1">
        <img src="../assets/leaf1.png" alt="" class="leaf1" />
        <div class="certificateBox">
          <div class="plasticCreditText">
            <h1>plastic credit</h1>
          </div>
          <h1 class="certificateText">certificate</h1>
        </div>

        <div class="horizontal-line"></div>

        <div class="nameBox"></div>
        <h2 class="presented">PROUDLY PRESENTED TO</h2>
        <h1 class="namePage1" v-if="certificateData">
          {{ certificateData.retiringEntityName }}
        </h1>
        <div class="horizontal-line2"></div>
        <h2 class="presented">
          FOR MAKING AN IMPACT<br />
          BY NEUTRALIZING AN IMPRESSIVE
        </h2>
        <p class="weight" v-if="certificateData">
          {{ certificateData.amount + " KG" }}
        </p>
        <h2 class="presented">OF</h2>
        <p class="weight" v-if="plastciValuesString">
          {{ plastciValuesString }}
        </p>
        <div class="logoBox">
          <img src="../assets/circular.svg" alt="" />
          <div id="qrCode" class="qrCode" v-if="qrCodeUrl">
            <img :src="qrCodeUrl" />
          </div>
        </div>
      </div>
      <img src="../assets/leaf2.png" alt="" class="leaf2" />
      <img src="../assets/leaf4.png" alt="" class="leaf4" />
      <img src="../assets/leaf3.png" alt="" class="leaf3" />
      <img src="../assets/leaf5.png" alt="" class="leaf5" />
      <img src="../assets/leaf6.png" alt="" class="leaf6" />
    </page>

    <div v-for="(page, pageIndex) in pagesData" :key="pageIndex">
      <page size="A4" :id="`pdfContent-${pageIndex}`" class="page2">
        <div class="innerBox2">
          <div v-if="pageIndex === 0">
            <img src="../assets/leaf1.png" alt="" class="leaf7" />
            <div class="titleBoxPage2">
              <h1>
                plastic credit
                <span class="highlight">certificate</span>
                <span class="detail"> details</span>
              </h1>
            </div>
            <div class="infoBox">
              <p class="certificateHodler">
                Name of Certificate Holder:
                <span v-if="certificateData">{{
                  certificateData.retiringEntityName
                }}</span>
              </p>
              <p class="certificateHodler">Credit Information</p>
              <table class="certificateTable" id="creditTable">
                <tr class="tableTitle">
                  <th>Amount</th>
                  <th>ID</th>
                  <th>Retired Date</th>
                </tr>
                <tr>
                  <td v-if="certificateData">
                    {{ certificateData.amount + " KG" }}
                  </td>
                  <td v-if="creditData">{{ creditData.id }}</td>
                  <td>{{ retiredDate }}</td>
                </tr>
              </table>
              <p class="certificateHodler">Collection Information</p>
              <table class="certificateTable" id="collectionsTable">
                <tr class="tableTitle">
                  <th>Amount</th>
                  <th>Organization</th>
                  <th>Issuance Date</th>
                </tr>
                <tr>
                  <td>{{ collectionAmount + " KG" }}</td>
                  <td>{{ applicantData }}</td>
                  <td>{{ issuanceDate }}</td>
                </tr>
              </table>
              <p class="certificateHodler">Project description</p>
              <p class="descriptionText">{{ applicantDataDescription }}</p>
            </div>
          </div>
          <div class="infoBox">
            <div
              v-for="category in page"
              :key="`category-${pageIndex}-${category.type}`"
            >
              <!-- Binary Files Table -->
              <div v-if="category.type === 'binary'">
                <p class="certificateHodler">Documents</p>
                <table class="certificateTable" id="binaryTable">
                  <tr class="tableTitle">
                    <th>Name</th>
                    <th>URL</th>
                  </tr>
                  <tr
                    v-for="(binaryFile, index) in category.items"
                    :key="`binary-${pageIndex}-${index}`"
                  >
                    <td>{{ binaryFile.name }}</td>
                    <td>
                      <a :href="binaryFile.url" target="_blank">{{
                        binaryFile.url
                      }}</a>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Media Files Table -->
              <div v-if="category.type === 'media'">
                <p class="certificateHodler">Photos</p>
                <table class="certificateTable" id="mediaTable">
                  <tr class="tableTitle">
                    <th>Name</th>
                    <th>URL</th>
                  </tr>
                  <tr
                    v-for="(mediaFile, index) in category.items"
                    :key="`media-${pageIndex}-${index}`"
                  >
                    <td>{{ mediaFile.name }}</td>
                    <td>
                      <a
                        :href="ipfsToHttpsProtocol(mediaFile.url)"
                        target="_blank"
                        >{{ mediaFile.url }}</a
                      >
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Material Details Table -->
              <div v-if="category.type === 'material'">
                <p class="certificateHodler">Material tracking events</p>
                <table class="certificateTable">
                  <tr class="tableTitle">
                    <th v-for="header in primaryHeaders" :key="header">
                      {{ header }}
                    </th>
                  </tr>
                  <tr
                    v-for="(material, index) in category.items"
                    :key="`material-${pageIndex}-${index}`"
                  >
                    <td
                      v-for="header in primaryHeaders"
                      :key="`${pageIndex}-${index}-${header}`"
                    >
                      {{ material[header] ? material[header] : "-" }}
                    </td>
                  </tr>
                </table>

                <!-- Additional table for Secondary Headers -->
                <div v-if="secondaryHeaders.length > 0">
                  <table class="certificateTable">
                    <tr class="tableTitle">
                      <th v-for="header in secondaryHeaders" :key="header">
                        {{ header }}
                      </th>
                    </tr>
                    <tr
                      v-for="(material, index) in category.items"
                      :key="`material-secondary-${pageIndex}-${index}`"
                    >
                      <td
                        v-for="header in secondaryHeaders"
                        :key="`${pageIndex}-${index}-${header}`"
                      >
                        {{ material[header] ? material[header] : "-" }}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

              <!-- Location Information Table -->
              <div v-if="category.type === 'location'">
                <p class="certificateHodler">Location information</p>
                <table class="certificateTable" id="locations">
                  <tr class="tableTitle">
                    <th>Country</th>
                    <th>Longitude</th>
                    <th>Latitude</th>
                  </tr>
                  <tr
                    v-for="(location, index) in category.items"
                    :key="`location-${pageIndex}-${index}`"
                  >
                    <td>{{ location.country }}</td>
                    <td>{{ location.longitude }}</td>
                    <td>{{ location.latitude }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <img src="../assets/leaf3.png" class="leaf8" alt="" />
        <img src="../assets/leaf9.svg" class="leaf9" alt="" />
        <img src="../assets/leaf10.svg" class="leaf10" alt="" />
        <img src="../assets/leaf11.svg" class="leaf11" alt="" />
        <img src="../assets/leaf12.svg" class="leaf12" alt="" />
        <img src="../assets/leaf13.svg" class="leaf13" alt="" />
      </page>
    </div>
  </div>
</template>

<style scoped>
page {
  background: #32393c;
  display: block;
  margin: 0.5cm auto;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
}
.page1[size="A4"] {
  position: relative;
  overflow: hidden;
  @apply w-[29.7cm] h-[21cm];
}

.page3 {
  @apply w-[21cm] h-[29.7cm];
  padding: 40px;
  position: relative;
}
.innerBox1 {
  z-index: 2;
  display: flex;
  position: relative;
  background-color: white;
  height: 712px;
  width: 766px;
  top: 40px;
  left: 317px;
  align-items: center;
  flex-direction: column;
  padding: 30px;
}

.wasteBox {
  position: absolute;
  background-color: green;
  height: 100%;
  width: 280px;
  left: 37px;
  z-index: 1;
  background: url(../assets/wastePick.png);
  background-size: cover;
  opacity: 90%;
}

.certificateBox {
  display: flex;
  flex-direction: column;
  font-family: "Open Sans";
  align-items: center;
}

.leaf1 {
  position: absolute;
  left: 233px;
  top: 37px;
  height: 34px;
  width: auto;
}

.leaf2 {
  position: absolute;
  left: 415px;
  bottom: -10px;
  height: 65px;
  width: auto;
  z-index: 2;
}
.leaf3 {
  position: absolute;
  right: 20px;
  top: 0px;
  height: 76px;
  width: auto;
  z-index: 3;
}
.leaf4 {
  position: absolute;
  left: 319px;
  bottom: 0px;
  height: 113px;
  width: auto;
  z-index: 2;
}

.leaf5 {
  position: absolute;
  right: 0px;
  top: 39px;
  height: 113px;
  width: auto;
  z-index: 2;
}

.leaf6 {
  position: absolute;
  right: 0px;
  top: 0px;
  height: 70px;
  width: auto;
  z-index: 2;
}
.plasticCreditText {
  font-size: 30px;
  font-weight: 700;
  color: #206948;
  margin-bottom: 50px;
}

.certificateText {
  position: absolute;
  top: 60px;
  font-family: "Open Sans";
  font-size: 50px;
  font-weight: 700;
  color: #232323;
}

.horizontal-line {
  height: 5px;
  width: 60px;
  background-color: black;
  margin-top: 10px;
  margin-bottom: 80px;
}

.horizontal-line2 {
  height: 3px;
  width: 500px;
  background-color: #232323;
  margin-bottom: 20px;
}

.nameBox {
  position: absolute;
  justify-content: center;
  display: flex;
  width: 806px;
  top: 190px;
  left: 0px;
  bottom: 190px;
  padding: 30px;
  background-color: #dbe7d6;
  z-index: -1;
}

.presented {
  font-family: "Inter";
  font-size: 18px;
  font-weight: 400;
  color: #231f20;
  letter-spacing: 3px;
  text-align: center;
}

.weight {
  font-family: "Open Sans";
  font-size: 20px;
  font-weight: 700;
  color: #206a49;
  margin: 5px 5px;
}

.namePage1 {
  font-family: "Open Sans";
  font-size: 60px;
  font-weight: 700;
  color: #58b947;
}

.logoBox {
  position: relative;
  margin-top: auto;
  height: 140px;
  width: 140px;
}
.logoBox img {
  height: 100%;
  width: auto;
}

.page2[size="A4"] {
  @apply w-[21cm] h-[29.7cm];
  padding: 40px;
  position: relative;
}
.innerBox2 {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: white;
  height: 100%;
  overflow: hidden;
}

.leaf7 {
  position: absolute;
  left: 100px;
  top: 33px;
  height: 33px;
  width: auto;
  z-index: 2;
}

.titleBoxPage2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
}

.titleBoxPage2 h1 {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  font-size: 27px;
  gap: 0.5rem;
  color: #206948;
}

.titleBoxPage2 .highlight {
  font-family: "Open Sans";
  font-weight: 700;
  color: #232323;
}

.titleBoxPage2 .detail {
  color: #232323;
}

.horizontal-line3 {
  margin-left: auto;
  margin-right: auto;
  height: 5px;
  width: 60px;
  background-color: black;
  margin-top: 10px;
  margin-bottom: 30px;
}

.infoBox {
  padding-left: 25px;
  padding-right: 25px;
}

.infoBox3 {
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 30px;
}

.certificateHodler {
  font-family: "Open Sans";
  font-size: 18px;
  font-weight: 700;
  color: #206a49;
  margin-bottom: 10px;
}

.certificateHodler span {
  color: #232323;
}
.textBox span {
  font-weight: bold;
}

.certificateTable {
  display: table;
  width: 100%;
  text-align: center;
  border-top: solid 1px #7ec242;
  border-bottom: solid 1px #7ec242;
  margin-bottom: 20px;
}

.certificateTable td {
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
}

.descriptionText {
  margin-bottom: 20px;
  border-top: solid 1px #7ec242;
  border-bottom: solid 1px #7ec242;
}

.tableTitle {
  border-bottom: solid 1px #7ec242;
}

.leaf8 {
  position: absolute;
  top: 0px;
  right: 30px;
  height: 70px;
  width: auto;
  z-index: 2;
  overflow: hidden;
}
.leaf9 {
  position: absolute;
  top: 0px;
  right: 0px;
  height: 50px;
  width: auto;
  z-index: 2;
  overflow: hidden;
}

.leaf10 {
  position: absolute;
  top: 10px;
  right: 0px;
  height: 120px;
  width: auto;
  z-index: 2;
  overflow: hidden;
}
.leaf11 {
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 90px;
  width: auto;
  z-index: 2;
  overflow: hidden;
}

.leaf12 {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 120px;
  width: auto;
  z-index: 2;
  overflow: hidden;
}
.leaf13 {
  position: absolute;
  top: 0px;
  left: 30px;
  height: 30px;
  width: auto;
  z-index: 2;
  overflow: hidden;
}

.qrCode {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55%;
}
</style>
