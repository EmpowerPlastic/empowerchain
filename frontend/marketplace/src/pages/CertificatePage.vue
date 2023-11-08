<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { onBeforeUnmount, onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { getDetailsList } from "@/utils/utils";
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
      creditData{
        nodes{
          id
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
                  value
                  key
                }
              }
              latitude
              longitude
              amount
              magnitude
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
  console.log(result?.value?.creditCollections?.nodes[0]?.creditData?.nodes[0].eventData);
  
  creditData.value = result?.value?.creditCollections?.nodes[0];

  if (result?.value?.creditCollections?.nodes[0]?.creditData?.nodes) {
    dataFormatted.value = getDetailsList(
      result?.value?.creditCollections?.nodes[0]?.creditData?.nodes
    );
    loading.value = false;
  }
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
      console.log(result);
      getCreditData(result.value.creditOffsetCertificates.nodes[0].denom);
    }
    if (error.value) {
      console.error("Error fetching credit offset certificate:", error.value);
    }
  });
};

const generatePDF = async () => {
  if (!certificateData.value || !dataFormatted.value) {
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
        <h1 v-else>Loading</h1>
        <div class="horizontal-line2"></div>
        <h2 class="presented">FOR OFFSETTING</h2>
        <p class="weight" v-if="certificateData">{{ certificateData.amount + " KG" }}</p>
        <h2 class="presented">OF</h2>
        <p class="weight">OCEAN BOUND PLASTIC</p>

        <div class="logoBox">
          <img src="../assets/circular.svg" alt="">
        </div>
    </div>
    <img src="../assets/leaf2.png" alt="" class="leaf2">
    <img src="../assets/leaf4.png" alt="" class="leaf4">
    <img src="../assets/leaf3.png" alt="" class="leaf3">
    <img src="../assets/leaf5.png" alt="" class="leaf5">
    <img src="../assets/leaf6.png" alt="" class="leaf6">
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
          <p class="certificateHolder">Name of Certificate Holder: <span v-if="certificateData">{{ certificateData.retiringEntityName  }}</span></p>

          <p class="textBox">This certificate, referred in the client contract as scope certificate covers the following products <br>
              and units which complies with the <span>Ocean Bound Plastic Collection Organization</span></p>

          <p class="certificateHolder">Certified OBP products</p>
          <table class="certificateTable">
            <tr class="tableTitle">
              <th>OBP Cat</th>
              <th>OBP Source</th>
              <th>Material</th>
            </tr>
            <tr>
              <td>Potential CR OBP</td>
              <td>OBP within 50km from the Shoreline and 100m into the sea of low tide limits</td>
              <td>Dry / Clean, Urban land litter, PET, Mixed colors</td>
            </tr>
            <!-- More rows as needed -->
          </table>

        </div>
      </div>
      <img src="../assets/leaf3.png" class="leaf8" alt="">
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
  margin-top: auto;
  height: 140px;
  width: auto;
}
.logoBox img {
  height: 100%;
  width: auto;
}




.page2[size="A4"] {
  @apply w-[21cm] h-[29.7cm];
  padding: 40px;
}
.innerBox2 {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: white;
  height: 100%;
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

.certificateHolder {
  font-family: 'Open Sans';
  font-size: 18px;
  font-weight: 700;
  color: #206A49;
  margin-bottom: 20px;
}

.certificateHolder span {
  color: #232323;
}

.textBox {
  font-family: 'Open Sans';
  font-size:13px;
  font-weight: 400;
  color: #232323;
  margin-bottom: 20px;
}

.textBox span {
  font-weight: bold;
}

.certificateTable {
  border-top: solid 1px #7EC242;
  border-bottom: solid 1px #7EC242;
}

.tableTitle {
  border-bottom: solid 1px #7EC242;
}

.leaf8 {
  position: relative;
  right: 0px;
  bottom: 0px;
  height: 70px;
  width: auto;
  z-index: 2;
}
</style>
