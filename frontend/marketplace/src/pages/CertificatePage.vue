<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { onBeforeUnmount, onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import html2canvas from "html2canvas";
import { PDFGenerator } from "@/pdfGenerator/pdfGenerator";
import { toast } from "vue3-toastify";
import 'jspdf-autotable';
import {
  wastePick,
  circular,
  leaf1,
  leaf2,
} from '../pdfGenerator/AssetsBase64';

const doc = new jsPDF("p", "mm", "a4", true);
const router = useRoute();
const certificateData = ref();
const creditData = ref();
const loading = ref(true);
const materialData = ref([]);
const eventData = ref();
const plastciValuesString = ref('');
const locations = ref([]);
const mediaFileUrls = ref([]);
const binaryFilesUrls = ref<Array<{ type: string; [key: string]: any }>>([]);
const collectionAmount = ref(0);
const issuanceDate = ref('');
const applicantData = ref('');
const materialDetails = ref([]);
const currentHeaders = ref([]);
const primaryHeaders = ref([]);
const secondaryHeaders = ref([]);
const retiredDate = ref('');
const allData = ref<RowData[]>([]);
const MAX_ROWS_PER_PAGE = 4; // Example, adjust based on your layout
const pagesData = ref([]);
const lastCategoryOnPreviousPage = ref('')

type RowData = {
  data?: any[]; // Replace `any[]` with a more specific type if possible
  type: string;
  // Include other properties that rows might have
};

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
          type: "binary",
          startIndex: 0,
          endIndex: 0,
        };
      });
      mediaFileUrls.value = creditDataNode.mediaFiles.nodes.map(mediaFileNode => {
        return {
          name: mediaFileNode.name || "N/A",
          url: mediaFileNode.url || "N/A",
          type: "media",
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
            type: "location",
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
          type: 'material',
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

   
      currentHeaders.value = getTableHeaders();

      primaryHeaders.value = currentHeaders.value.slice(0, 2); 
        if (currentHeaders.value.length >= 3) {
          secondaryHeaders.value = currentHeaders.value.slice(2);
          
        } else {
          secondaryHeaders.value = [];
        }
        allData.value = [...mediaFileUrls.value, ...binaryFilesUrls.value, ...locations.value, ...materialDetails.value]

      
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

  const preparePagesData = () => {
  let currentPageData = {
    locations: [],
    materialDetails: [],
    mediaFiles: [],
    binaryFiles: [],
    // Add other categories as needed
  };
  
  let currentRowCount = 0;

  allData.value.forEach(item => {
    // Determine item size (assuming each item counts as 1 row)
    let itemSize = 1; // Adjust if different items have different sizes

    // Check for page overflow
    if (currentRowCount + itemSize > MAX_ROWS_PER_PAGE) {
      
      // Start a new page if adding this item would overflow
      pagesData.value.push(currentPageData);
      currentPageData = { locations: [], materialDetails: [], mediaFiles: [], binaryFiles: [] };
      currentRowCount = 0;
    }

    if (item.type === 'material') {
      if (secondaryHeaders.value.length > 0) {
        // Count as 2 rows if there are secondary headers
        itemSize = 2;
      }
    }

    // Add item to current page data based on its type
    if (item.type === 'location') currentPageData.locations.push(item);
    if (item.type === 'material') currentPageData.materialDetails.push(item);
    if (item.type === 'media') currentPageData.mediaFiles.push(item);
    if (item.type === 'binary') currentPageData.binaryFiles.push(item);
    console.log(currentPageData);
    
    currentRowCount += itemSize;
  });

  // Push the last page if it has any content
  if (currentRowCount > 0) {
    console.log(currentPageData);
    pagesData.value.push(currentPageData);
    console.log(pagesData.value);
    
  }
};

watchEffect(() => {
  preparePagesData();
  
});

  watchEffect(() => {
    if (result.value) {
      certificateData.value = result.value.creditOffsetCertificates.nodes[0];
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


const generatePDF = () => {
  // Initialize jsPDF with the first page in landscape orientation
  const doc = new jsPDF('landscape');
  const yPosition = 30;

  // Add image to the first page
  const addGrayPadding = (doc) => {
    const paddingInMM = 10.58; // Approx 40px in mm
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Set gray fill color
    doc.setFillColor(50, 57, 60); // Light gray color (RGB)
    // Draw rectangle slightly larger than the page
    doc.rect(0, 0, pageWidth, paddingInMM, 'F');
    // Bottom border
    doc.rect(0, pageHeight - paddingInMM, pageWidth, paddingInMM, 'F');
    // Left border
    doc.rect(0, 0, paddingInMM, pageHeight, 'F');
    // Right border
    doc.rect(pageWidth - paddingInMM, 0, paddingInMM, pageHeight, 'F');
  };
    addGrayPadding(doc);
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Set the fill color for the green box
    doc.setFillColor(219, 231, 214); // RGB for green

    // Coordinates for the top-left corner of the box
    const x = 40; // 10mm from the left edge of the page
    const y = 60; // 40mm from the top edge of the page

    // The width and height of the box
    const rectWidth = pageWidth; // Box width of page width minus 20mm for padding
    const rectHeight = 90; // A height of 60mm

    // Draw the filled rectangle
    doc.rect(x, y, rectWidth, rectHeight, 'F');

  // Add gray padding to the first page
  
  doc.addImage(wastePick, "PNG", 10.58, 0, 70, 220);

  const customDrawCell = (data) => {
    // Set border color to green
    doc.setDrawColor(32, 105, 72); // RGB for green

    // Draw top border for each cell
    if (data.row.index === 0) { // Check if it's the first row
      doc.line(data.cell.x, data.cell.y, data.cell.x + data.cell.width, data.cell.y);
    }

    // Draw bottom border for each cell
    if (data.row.index === data.table.body.length - 1) { // Check if it's the last row
      doc.line(data.cell.x, data.cell.y + data.cell.height, data.cell.x + data.cell.width, data.cell.y + data.cell.height);
    }
  };

  doc.addImage(leaf1, "png", 137, 20, 10, 10);
  doc.addImage(leaf2, "png", 104, 193, 35, 17);

  doc.setFontSize(28);
  doc.setTextColor(32, 105, 72);
  doc.setFont('Open Sans', 'bold');
  doc.text("plastic credit", 152, 28);

  doc.setTextColor(0,0,0);
  doc.setFontSize(50);
  doc.text("certificate", 142, 44);

  doc.setDrawColor(0, 0, 0); 
  doc.setLineWidth(1.5);
  doc.line(170, 50, pageWidth - 110, 50);

  doc.setFontSize(15);
  doc.setTextColor(35, 31, 32);
  doc.setFont('inter', 'normal');
  doc.text("PROUDLY PRESENTED TO", 147, 75);

  const name = certificateData.value.retiringEntityName;
  const nameLength = name.length;

  let xPos= 158; // Starting position for x
  const yPos = 95; // Fixed Y position

  doc.setFontSize(50);
  doc.setTextColor(88, 185, 71);
  doc.setFont('Open Sans', 'bold');

  // Adjust xPosition based on the length of the name
  if (nameLength <= 3) {
      xPos = 170; // Position for names up to 3 characters
  } else if (nameLength <= 6) {
      xPos = 160; // Adjust position for names up to 6 characters
  } else if (nameLength <= 9) {
      xPos = 148; // Adjust for names up to 9 characters
  } else if (nameLength <= 12) {
      xPos = 138; // Adjust for names up to 12 characters
  } else if (nameLength <= 15) {
      xPos = 128; // Adjust for names up to 15 characters
  } else if (nameLength <= 18) {
      xPos = 118; // Adjust for names up to 18 characters
  } else if (nameLength <= 20) {
      xPos = 108; // Adjust for names up to 20 characters
  } // Continue adding more conditions if needed

  // Render the text at the calculated position
  doc.text(name, xPos, yPos);

  doc.setDrawColor(0, 0, 0); 
  doc.setLineWidth(0.5);
  doc.line(120, 100, pageWidth - 50, 100);

  doc.setFontSize(15);
  doc.setTextColor(35, 31, 32);
  doc.setFont('inter', 'normal');
  doc.text("FOR OFFSETTING", 158, 110);

  doc.setFontSize(15);
  doc.setTextColor(32, 105, 72);
  doc.setFont('Open Sans', 'bold');
  doc.text(certificateData.value.amount + " KG", 174, 120);


  doc.setFontSize(15);
  doc.setTextColor(35, 31, 32);
  doc.setFont('inter', 'normal');
  doc.text("OF", 176, 130);

  //doc.addImage(circular, "png", 150, 150, 50, 50);
  const text = plastciValuesString.value;
  const textLength = text.length;
  console.log(textLength);
  
  let xPosition = 0;

  if (textLength === 3) {
      xPosition = 175; // For shorter text
  }
  else if (textLength < 10) {
  xPosition = 170; // For shorter text
} else if (textLength >= 10 && textLength < 15) {
  xPosition = 165; // For medium length text
} else if (textLength >= 15 && textLength < 20) {
  xPosition = 160; // For longer text
} else if (textLength >= 20 && textLength < 25) {
  xPosition = 155; // For longer text
} else if (textLength >= 25 && textLength < 27) {
  xPosition = 150; // For longer text
  } else if (textLength >= 27 && textLength < 30) { 
  xPosition = 147; // For longer text
  } else if (textLength >= 30 && textLength < 35) {
  xPosition = 145; // For longer text
} else if (textLength >= 35 && textLength < 40) {
  xPosition = 140; // For longer text
} else if (textLength >= 40 && textLength < 45) {
  xPosition = 135; // For longer text
} else if (textLength >= 45 && textLength < 50) { 
  xPosition = 130; // For longer text
} 

  doc.setFontSize(15);
  doc.setTextColor(32, 105, 72);
  doc.setFont('Open Sans', 'bold');
  doc.text(text, xPosition, 140);


  // Check if there's additional content for the first page
  if (pagesData.value.length > 0) {
    // Check if the first item in pagesData has specific content to add
    doc.addPage('a4', 'portrait');
    addGrayPadding(doc);
    const firstPageData = pagesData.value[0];
    doc.setFontSize(25);
      doc.setTextColor(32, 105, 72);
      doc.setFont('Open Sans', 'normal');
      doc.text("plastic credit", 45, 30)
      doc.setTextColor(0, 0, 0);
      doc.setFont('Open Sans', 'bold');
      doc.text("certificate", 93, 30)
      doc.setFont('Open Sans', 'normal');
      doc.text("details", 133, 30)

      doc.setDrawColor(0, 0, 0); 

      doc.setLineWidth(1.5);
      const pageWidth = doc.internal.pageSize.getWidth();
      doc.line(95, 35, pageWidth - 95, 35);

      doc.setFontSize(15);
      doc.setTextColor(32, 105, 72);
      doc.setFont('Open Sans', 'bold');
      doc.text("Name of Certificate Holder:", 20, 45);
      doc.setTextColor(0,0,0);
      doc.text(certificateData.value.retiringEntityName, 84, 45);

      doc.setTextColor(32, 105, 72);
      doc.text("Credit Information", 20, 55);

      doc.autoTable({ 
          html: '#creditTable', 
          useCss: true, 
          startY: 60,
          didDrawCell: customDrawCell,
        styles: {
        lineWidth: 0.5, // Width of the border
      },
    });

    doc.text("Collection Information", 20, 85);
    doc.autoTable({ 
          html: '#collectionsTable', 
          useCss: true, 
          didDrawCell: customDrawCell,
          startY: 90,
        styles: {
        lineWidth: 0.5, // Width of the border
      },
    });
    if (firstPageData.binaryFiles.length) {
      
    }
    // ... Handle other content types for the first page similarly
  }

  // Loop through the rest of the pagesData array
  for (let i = 0; i < pagesData.value.length; i++) {
    // Add a new page in portrait orientation
    doc.addPage('a4', 'portrait');
    addGrayPadding(doc); 
    
    if (pagesData.value[i].binaryFiles[0]) {

        doc.text("Documents", 5, yPosition);
        doc.autoTable({ 
          html: '#binaryTable', 
          useCss: true,
          didDrawCell: customDrawCell,
        styles: {
        lineWidth: 0.5, // Width of the border
      },
    });
    }

    if (pagesData.value[i].locations[0]) {
        doc.autoTable({ 
          html: '#locations', 
          useCss: true, 
          didDrawCell: customDrawCell,
        styles: {
        lineWidth: 0.5,
      },
    });
    }

    if (pagesData.value[i].materialDetails[0]) {
      // Replace '#binaryTable' with the actual selector or content for this page
        doc.autoTable({ 
          html: '#materials', 
          useCss: true, 
          didDrawCell: customDrawCell,
        styles: {
        lineWidth: 0.5, // Width of the border
      },
    });
    }
    // If there's media content for this page
    if (pagesData.value[i].mediaFiles[0]) {
      doc.autoTable({ 
       html: '#mediaTable',
       useCss: true,
       didDrawCell: customDrawCell,
        styles: {
        lineWidth: 0.5, // Width of the border
      },
       });
    }
}

  // Save the PDF
  doc.save('certificate.pdf');
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


  <div v-for="(page, pageIndex) in pagesData" :key="pageIndex">
    <page size="A4" :id="`pdfContent-${pageIndex}`" class="page2">
      <div class="innerBox2">
        <!-- ... other elements ... -->
        <div v-if="pageIndex === 0">
      <div class="titleBoxPage2">
        <h1>
          plastic credit
          <span class="highlight">certificate</span>
          <span class="detail"> details</span>
        </h1>
      </div>
      <div class="horizontal-line3"></div>
      <div class="infoBox">
        <p class="certificateHodler">Name of Certificate Holder: <span v-if="certificateData">{{ certificateData.retiringEntityName }}</span></p>
        <p class="certificateHodler">Credit Information</p>
        <table class="certificateTable" id="creditTable">
          <tr class="tableTitle" >
            <th>Amount</th>
            <th>ID</th>
            <th>Retired Date</th>
          </tr>
          <tr>
            <td v-if="certificateData">{{ certificateData.amount + " KG" }}</td>
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
                <td>{{ collectionAmount + " KG"}}</td>
                <td>{{ applicantData }}</td>
                <td>{{ issuanceDate }}</td>
              </tr>
            </table>
      </div>
    </div>
    <div class="infoBox">

    <div v-if="page.binaryFiles.length">
      <p class="certificateHodler">Documents</p>
      <table class="certificateTable" id="binaryTable">
        <!-- Render binaryFiles table here -->
        <tr class="tableTitle">
          <th>Name</th>
          <th>URL</th>
        </tr>
        <tr v-for="(binaryFile, index) in page.binaryFiles" :key="`binary-${pageIndex}-${index}`">
          <td>{{ binaryFile.name }}</td>
          <td><a :href="binaryFile.url" target="_blank">{{ binaryFile.url }}</a></td>
        </tr>
      </table>
    </div>
    
    <div v-if="page.mediaFiles.length">
      <p class="certificateHodler">Photos</p>
      <table class="certificateTable" id="mediaTable">
        <!-- Render mediaFiles table here -->
        <tr class="tableTitle">
          <th>Name</th>
          <th>URL</th>
        </tr>
        <tr v-for="(mediaFile, index) in page.mediaFiles" :key="`binary-${pageIndex}-${index}`">
          <td>{{ mediaFile.name }}</td>
          <td><a :href="mediaFile.url" target="_blank">{{ mediaFile.url }}</a></td>
        </tr>
      </table>
    </div>

    <div v-if="page.materialDetails.length">
      <p class="certificateHodler">Material</p>
      <table class="certificateTable" id="materials">
        <!-- Render materialDetails table here -->
        <tr class="tableTitle">
          <th>Event</th>
          <th v-for="header in primaryHeaders" :key="header">{{ header }}</th>
        </tr>
        <tr v-for="(material, index) in page.materialDetails" :key="`material-primary-${pageIndex}-${index}`">
          <td>{{ index + 1 }}</td>
          <td v-for="header in primaryHeaders" :key="`${pageIndex}-${index}-${header}`">
            {{ material[header] ? material[header] : '-' }}
          </td>
        </tr>
      </table>
    </div>

    <div v-if="page.locations.length">
      <p class="certificateHodler">Location information</p>
      <table class="certificateTable" id="locations">
        <!-- Render locations table here -->
        <tr class="tableTitle">
          <th>Country</th>
          <th>Longitude</th>
          <th>Latitude</th>
        </tr>
        <tr v-for="(location, index) in page.locations" :key="`binary-${pageIndex}-${index}`">
          <td>{{ location.country }}</td>
          <td>{{ location.longitude }}</td>
          <td>{{ location.latitude }}</td>
        </tr>
      </table>
    </div>
  </div>
      </div>
      <img src="../assets/leaf3.png" class="leaf8" alt="">
      <img src="../assets/leaf9.svg" class="leaf9" alt="">
      <img src="../assets/leaf10.svg" class="leaf10" alt="">
      <img src="../assets/leaf11.svg" class="leaf11" alt="">
      <img src="../assets/leaf12.svg" class="leaf12" alt="">
      <img src="../assets/leaf13.svg" class="leaf13" alt="">
      <!-- ... other images or elements ... -->
    </page>
  </div>
  <!-- <page size="A4" id="pdfContent2" class="page2">
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
      
          </table>
          <div v-if="secondaryHeaders.length === 0">
            <p class="certificateHodler">Material</p>
            <table class="certificateTable">
              <tr class="tableTitle">
                <th>Event</th>
              
                <th v-for="header in primaryHeaders" :key="header">
                  {{ header }} 
                </th>
              </tr>
         
              <tr v-for="(material, index) in materialDetails" :key="index">
                <td>{{ index + 1 }}</td> 
                
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
            
                <th v-for="header in primaryHeaders" :key="header">
                  {{ header }} 
                </th>
              </tr>

              <tr v-for="(material, index) in materialDetails" :key="index">
                <td>{{ index + 1 }}</td> 
            
                <td v-for="header in primaryHeaders" :key="`${index}-${header}`">
                  {{ material[header] ? material[header] : '-' }}
                </td>
              </tr>
            </table>
            <table class="certificateTable">
              <tr class="tableTitle">
            
                <th v-for="header in secondaryHeaders" :key="header">
                  {{ header }} 
                </th>
              </tr>
        
              <tr v-for="(material, index) in materialDetails" :key="index">
           
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

         
          </table>

          <p class="certificateHodler">Photos</p>
            <table class="certificateTable">
              <tr class="tableTitle">
                <th>Name</th>
                <th>URL</th>
              </tr>
           
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
            
                <tr v-for="(binaryFile, index) in binaryFilesUrls" :key="`binary-${index}`">
                  <td>{{ binaryFile.name }}</td>
                  <td><a :href="binaryFile.url" target="_blank">{{ binaryFile.url }}</a></td>
                </tr>
              </table>
          <div v-if="createThirdPage===false">
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
            </table>
          </div>
        </div>
      </div>
      <img src="../assets/leaf3.png" class="leaf8" alt="">
      <img src="../assets/leaf9.svg" class="leaf9" alt="">
      <img src="../assets/leaf10.svg" class="leaf10" alt="">
      <img src="../assets/leaf11.svg" class="leaf11" alt="">
      <img src="../assets/leaf12.svg" class="leaf12" alt="">
      <img src="../assets/leaf13.svg" class="leaf13" alt="">
    </page> -->
<!-- 
    <div v-if="createThirdPage===true">
      <page class="page3">
        <div class="innerBox2">
          <div class="infoBox3">
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
    </div>
     -->
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

.page3{
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

.infoBox3 {
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 30px;
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
