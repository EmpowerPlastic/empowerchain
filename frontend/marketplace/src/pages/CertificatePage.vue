<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { onBeforeUnmount, onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { PDFGenerator } from "@/pdfGenerator/pdfGenerator";
import { toast } from "vue3-toastify";

const doc = new jsPDF("p", "mm", "a4", true);
const router = useRoute();
const certificateData = ref();
const creditData = ref();
const dataFormatted = ref();
const loading = ref(true);
const materialData = ref();
const eventData = ref();
const plastciValuesString = ref('');
const locations = ref([]);
const mediaFileUrls = ref([]);
const binaryFilesUrls = ref([]);
const collectionAmount = ref(0);
const issuanceDate = ref('');
const applicantData = ref('');
const materialDetails = ref([]);
const currentHeaders = ref([]);
const primaryHeaders = ref([]);
const secondaryHeaders = ref([]);
const retiredDate = ref('');


onMounted(() => {
  document.body.style.backgroundColor = "#ffff";
  queryNow();
});
onBeforeUnmount(() => {
  document.body.style.backgroundColor = "";
});

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
  const { result, loading, error } = useQuery(
    gql`
      ${query}
    `
  );
  console.log(result.value.creditCollections.nodes[0]);
  
  watchEffect(() => {
  if (result.value?.creditCollections?.nodes?.length) {
    const eventDataNodes = result.value.creditCollections.nodes[0]?.creditData?.nodes[0]?.eventData?.nodes;
    const creditDataNode = result.value.creditCollections.nodes[0]?.creditData?.nodes[0];
    creditData.value = result.value.creditCollections.nodes[0];

    const creditCollectionsNode = result.value.creditCollections.nodes[0];

    if(creditCollectionsNode) {
      collectionAmount.value = Number(creditCollectionsNode.activeAmount) + Number(creditCollectionsNode.retiredAmount);
      issuanceDate.value = creditCollectionsNode.issuanceDate.substring(0, 10);
    }

    if (creditDataNode) {
      binaryFilesUrls.value = creditDataNode.binaryFiles.nodes.map(binaryFileNode => {
        return {
          name: binaryFileNode.name || "N/A",
          url: binaryFileNode.url || "N/A",
        };
      });
      mediaFileUrls.value = creditDataNode.mediaFiles.nodes.map(mediaFileNode => {
        return {
          name: mediaFileNode.name || "N/A",
          url: mediaFileNode.url || "N/A",
        };
      });
      applicantData.value = creditDataNode.applicantDataByCreditDataId.nodes[0].name;
    }

    if (eventDataNodes && eventDataNodes.length) {
      eventData.value = eventDataNodes[0];
      materialData.value = eventDataNodes[0].material.nodes[0];
      
      locations.value = eventDataNodes.reduce((unique, eventNode) => {
        const duplicate = unique.find(location => 
          location.longitude === eventNode.longitude && location.latitude === eventNode.latitude
        );

        if (!duplicate) {
          unique.push({
            country: eventNode.country || "N/A",
            longitude: eventNode.longitude != null ? eventNode.longitude : "N/A",
            latitude: eventNode.latitude != null ? eventNode.latitude : "N/A",
          });
        }
        
        return unique;
      }, []);
    
      const uniqueMaterialsSet = new Set();
      const uniqueMaterials = [];

      // Process each eventNode's material nodes
      eventDataNodes.forEach(eventNode => {
        const materialCombination = {
          plasticType: '',
          condition: '',
          shapeGranularity: '',
          color: '',
          brand: '',
        };

        eventNode.material.nodes.forEach(materialNode => {
          const key = materialNode.key === 'granularity' || materialNode.key === 'shape / granularity' ? 'shapeGranularity' : materialNode.key;
          materialCombination[key] = materialNode.value;
        });

        const materialString = JSON.stringify(materialCombination);

        if (!uniqueMaterialsSet.has(materialString)) {
          uniqueMaterialsSet.add(materialString);
          uniqueMaterials.push(materialCombination);
        }
      });

      materialDetails.value = uniqueMaterials;


      const getTableHeaders = () => {
        // Assuming materialDetails is an array of objects with keys as the property names
        // and values are the content you want to display
        const headers = [];

        // Check if at least one object has a non-empty value for each key
        for (const detail of materialDetails.value) {
          for (const key in detail) {
            if (detail[key] && !headers.includes(key)) {
              headers.push(key); // Only push unique keys
            }
          }
        }
        return headers;
      };

      // Call this method to get the current headers based on `materialDetails`
      currentHeaders.value = getTableHeaders();

      primaryHeaders.value = currentHeaders.value.slice(0, 2); // First three headers
        if (currentHeaders.value.length >= 3) { // Only split if more than three headers
          secondaryHeaders.value = currentHeaders.value.slice(2); // Remaining headers
          console.log(secondaryHeaders.value);
          
        } else {
          secondaryHeaders.value = [];
          console.log(secondaryHeaders.value);
           // No secondary headers if three or less
        }


      const plastciValuesSet = new Set(
        eventDataNodes.map(eventNode =>
          eventNode.material.nodes
            .filter(material => material.key == 'plasticType') 
            .map(material => material.value)
        ).flat()
      );
      
      plastciValuesString.value = Array.from(plastciValuesSet).join(', ');

    }
  }
});

};
  
const queryNow = () => {
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

  const { result, loading, error } = useQuery(query, {
    id: `${router.params?.id}`,
  });
  

  watchEffect(() => {
    if (result.value) {
      certificateData.value = result.value.creditOffsetCertificates.nodes[0];
      console.log(certificateData.value);
      if(certificateData.value.timestamp) {
        retiredDate.value = certificateData.value.timestamp.substring(0, 10);
      } else {
        retiredDate.value = 'N/A';
      }
      
      getCreditData(result.value.creditOffsetCertificates.nodes[0].denom);
    }
    if (error.value) {
      console.error("Error fetching credit offset certificate:", error.value);
    }
  });
};

const generatePDF = async () => {
  if (!certificateData.value) {
    toast.error("No data available to generate the PDF");
    return;
  }

  // Create a new instance of jsPDF in landscape orientation
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'px',
    format: 'a4',
  });

  // Element with the content of your first page
  let contentPage1 = document.getElementById('pdfContent');
  if (contentPage1) {
    // Use html2canvas and jsPDF to capture the content
    html2canvas(contentPage1, { scale: 2 }).then(canvas => {
      // Add the first page
      doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
      // After the first page is added, insert the second page in portrait orientation
      doc.addPage('a4', 'portrait');

      // Element with the content of your second page
      let contentPage2 = document.getElementById('pdfContent2');
      if (contentPage2) {
        html2canvas(contentPage2, { scale: 2 }).then(canvas => {
          // Add the second page
          doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
          // Save the PDF after adding the second page
          doc.save('certificate.pdf');
          toast.success("Certificate downloaded successfully");
        });
      } else {
        toast.error("Failed to find the content for the second page of the PDF");
      }
    });
  } else {
    toast.error("Failed to find the content for the first page of the PDF");
  }
};

</script>
<template>
  <div class="flex flex-row justify-end p-5 min-w-[21cm]">
    <button
      class="btn btn-ghost text-white normal-case bg-greenPrimary"
      @click="generatePDF"
      :disabled="!loading"
    >
      <img class="w-7 mr-2" src="../assets/downloadIcon.svg" />
      Download Certificate
    </button>
  </div>
  <page size="A4" id="pdfContent" class="page1">
    <div class="wasteBox">
      
    </div>
    <div class="innerBox1">

      <img src="../assets/leaf1.png" alt="" class="leaf1">
        <div class="certificateBox">
          <div class="plasticCreditText">
            <h1>plastic credit</h1>
          </div>
          <h1 class="certificateText">certificate</h1>
        </div> 
        
        <div class="horizontal-line"></div>

        <div class="nameBox">
        </div>

        <h2 class="presented">PROUDLY PRESENTED TO</h2>
        <h1 class="namePage1" v-if="certificateData">{{ certificateData.retiringEntityName }}</h1>
        <div class="horizontal-line2"></div>
        <h2 class="presented">FOR OFFSETTING</h2>
        <p class="weight" v-if="certificateData">{{ certificateData.amount + " KG" }}</p>
        <h2 class="presented">OF</h2>
        <p class="weight" v-if="plastciValuesString">{{ plastciValuesString }}</p>

        <div class="logoBox">
          <img src="../assets/circular.svg" alt="">
          <div class="idBox">{{ router.params.id }}</div>
          <p class="checkBlockchain">check on <br>
            blockchain!
          </p>
        </div>
    </div>
    <img src="../assets/leaf2.png" alt="" class="leaf2">
    <img src="../assets/leaf4.png" alt="" class="leaf4">
    <img src="../assets/leaf3.png" alt="" class="leaf3">
    <img src="../assets/leaf5.png" alt="" class="leaf5">
    <img src="../assets/leaf6.png" alt="" class="leaf6">
    <img src="../assets/greenlogo.svg" alt="" class="greenLogo">
  </page>

  <page size="A4" id="pdfContent2" class="page2">
      <div class="innerBox2">
        <img src="../assets/leaf1.png" alt="" class="leaf7">
        <div class="titleBoxPage2">
          <h1>
            plastic credit
            <span class="highlight">certificate</span>
            <span class="detail"> details</span>
          </h1>
        </div>
        <div class="horizontal-line3"></div>
        <div class="infoBox">
          <p class="certificateHodler">Name of Certificate Holder: <span v-if="certificateData">{{ certificateData.retiringEntityName  }}</span></p>

          <p class="certificateHodler">Credit Information</p>
          <table class="certificateTable">
            <tr class="tableTitle">
              <th>Amount</th>
              <th>ID</th>
              <th>Retired Date</th>

            </tr>
            <tr>
              <td v-if="certificateData">{{ certificateData.amount + " KG" }}</td>
              <td v-if="creditData">{{ creditData.id}}</td>
              <td>{{ retiredDate }}</td>
              
            </tr>
            <!-- More rows as needed -->
          </table>
          <div v-if="secondaryHeaders.length === 0">
            <p class="certificateHodler">Material</p>
            <table class="certificateTable">
              <tr class="tableTitle">
                <th>Event</th>
                <!-- Loop over each header -->
                <th v-for="header in primaryHeaders" :key="header">
                  {{ header }} <!-- Display the header's name -->
                </th>
              </tr>
              <!-- Loop over each row of details -->
              <tr v-for="(material, index) in materialDetails" :key="index">
                <td>{{ index + 1 }}</td> 
                <!-- Loop over each header again for the corresponding data cell -->
                <td v-for="header in currentHeaders" :key="`${index}-${header}`">
                  {{ material[header] ? material[header] : '-' }}
                </td>
              </tr>
            </table>
          </div>

          <div v-else-if="secondaryHeaders.length > 0">
            <p class="certificateHodler">Material</p>
            <table class="certificateTable">
              <tr class="tableTitle">
                <th>Event</th>
                <!-- Loop over each header -->
                <th v-for="header in primaryHeaders" :key="header">
                  {{ header }} <!-- Display the header's name -->
                </th>
              </tr>
              <!-- Loop over each row of details -->
              <tr v-for="(material, index) in materialDetails" :key="index">
                <td>{{ index + 1 }}</td> 
                <!-- Loop over each header again for the corresponding data cell -->
                <td v-for="header in primaryHeaders" :key="`${index}-${header}`">
                  {{ material[header] ? material[header] : '-' }}
                </td>
              </tr>
            </table>
            <table class="certificateTable">
              <tr class="tableTitle">
                <!-- Loop over each header -->
                <th v-for="header in secondaryHeaders" :key="header">
                  {{ header }} <!-- Display the header's name -->
                </th>
              </tr>
              <!-- Loop over each row of details -->
              <tr v-for="(material, index) in materialDetails" :key="index">
                <!-- Loop over each header again for the corresponding data cell -->
                <td v-for="header in secondaryHeaders" :key="`${index}-${header}`">
                  {{ material[header] ? material[header] : '-' }}
                </td>
              </tr>
            </table>
          </div>


          <p class="certificateHodler">Location Information</p>
          <table class="certificateTable">
            <tr class="tableTitle">
              <th>Country</th>
              <th>Longitude</th>
              <th>Latitude</th>
            </tr>
            <tr v-for="(location, index) in locations" :key="index">
              <td>{{ location.country }}</td>
              <td>{{ location.longitude }}</td>
              <td>{{ location.latitude }}</td>
            </tr>

            <!-- More rows as needed -->
          </table>

          <p class="certificateHodler">Photos</p>
            <table class="certificateTable">
              <tr class="tableTitle">
                <th>Name</th>
                <th>URL</th>
              </tr>
              <!-- Use v-for to create a row for each media file entry -->
              <tr v-for="(mediaFile, index) in mediaFileUrls" :key="`media-${index}`">
                <td>{{ mediaFile.name }}</td>
                <td><a :href="mediaFile.url" target="_blank">{{ mediaFile.url }}</a></td>
              </tr>
            </table>


            <p class="certificateHodler">Documents</p>
              <table class="certificateTable">
                <tr class="tableTitle">
                  <th>Name</th>
                  <th>URL</th>
                </tr>
                <!-- Use v-for to create a row for each binary file entry -->
                <tr v-for="(binaryFile, index) in binaryFilesUrls" :key="`binary-${index}`">
                  <td>{{ binaryFile.name }}</td>
                  <td><a :href="binaryFile.url" target="_blank">{{ binaryFile.url }}</a></td>
                </tr>
              </table>
              <p class="certificateHodler">Documents</p>
              <table class="certificateTable">
                <tr class="tableTitle">
                  <th>Name</th>
                  <th>URL</th>
                </tr>
                <!-- Use v-for to create a row for each binary file entry -->
                <tr v-for="(binaryFile, index) in binaryFilesUrls" :key="`binary-${index}`">
                  <td>{{ binaryFile.name }}</td>
                  <td><a :href="binaryFile.url" target="_blank">{{ binaryFile.url }}</a></td>
                </tr>
              </table>
                          <p class="certificateHodler">Documents</p>
              <table class="certificateTable">
                <tr class="tableTitle">
                  <th>Name</th>
                  <th>URL</th>
                </tr>
                <!-- Use v-for to create a row for each binary file entry -->
                <tr v-for="(binaryFile, index) in binaryFilesUrls" :key="`binary-${index}`">
                  <td>{{ binaryFile.name }}</td>
                  <td><a :href="binaryFile.url" target="_blank">{{ binaryFile.url }}</a></td>
                </tr>
              </table>



          <p class="certificateHodler">Collection Information</p>
          <table class="certificateTable">
            <tr class="tableTitle">
              <th>Amount</th>
              <th>Organization</th>
              <th>Issuance Date</th>
            </tr>
            <tr>
              <td>{{ collectionAmount + " KG"}}</td>
              <td>{{ applicantData }}</td>
              <td>{{ issuanceDate }}</td>
            </tr>
            <!-- More rows as needed -->
          </table>
        </div>
      </div>
      <img src="../assets/leaf3.png" class="leaf8" alt="">
      <img src="../assets/leaf9.svg" class="leaf9" alt="">
      <img src="../assets/leaf10.svg" class="leaf10" alt="">
      <img src="../assets/leaf11.svg" class="leaf11" alt="">
      <img src="../assets/leaf12.svg" class="leaf12" alt="">
      <img src="../assets/leaf13.svg" class="leaf13" alt="">
    </page>
</template>
<style scoped>
page {
  background: #32393C;
  display: block;
  margin: 0.5cm auto;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
}
.page1[size="A4"] {
  position: relative;
  overflow: hidden;
  @apply w-[29.7cm] h-[21cm];
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

.wasteBox{
  position: absolute;
  background-color: green;
  height: 100%;
  width: 280px;
  left: 37px;
  z-index: 1;
  background: linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(../assets/wastePick.png);
  background-size: cover;
  opacity: 90%;
}

.certificateBox {
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
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
  font-family: 'Open Sans';
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
  background-color: #DBE7D6;
  z-index: -1;
}

.presented {
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 400;
  color: #231F20;
  letter-spacing: 3px;
}

.weight {
  font-family: 'Open Sans';
  font-size: 20px;
  font-weight: 700;
  color: #206A49;
  margin: 5px 5px;
}

.namePage1 {
  font-family: 'Open Sans';
  font-size: 60px;
  font-weight: 700;
  color: #58B947;
}

.logoBox {
  position: relative;
  margin-top: auto;
  height: 140px;
  width: auto;
}
.logoBox img {
  height: 100%;
  width: auto;
}

.idBox {
  position: absolute;
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 18px;
  bottom: 60px;
  right: 46px;
  height: 27px;
  width: auto;
}

.checkBlockchain {
  position: absolute;
  font-family: 'Open Sans';
  text-align: center;
  font-weight: 700;
  font-size: 11px;
  bottom: 30px;
  right: 46px;
  letter-spacing: -1px;
  color: #58B947;
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
}

.titleBoxPage2 h1 {
  display: flex; 
  flex-wrap: wrap;
  align-items: baseline; 
  font-size: 27px;
  gap: 0.5rem;
  color: #206948
}

.titleBoxPage2 .highlight {
  font-family: 'Open Sans';
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

.certificateHodler {
  font-family: 'Open Sans';
  font-size: 18px;
  font-weight: 700;
  color: #206A49;
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
  border-top: solid 1px #7EC242;
  border-bottom: solid 1px #7EC242;
  margin-bottom: 20px;
}

.certificateTable td {
  padding-left: 10px;
  padding-right: 10px;
}

.tableTitle {
  border-bottom: solid 1px #7EC242;
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

.greenLogo {
  position: absolute;
  bottom: 164px;
  right: 411px;
  height: 18px;
  width: auto;
  z-index: 2;
  overflow: hidden;
}

</style>
