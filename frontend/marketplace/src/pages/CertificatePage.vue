<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { onBeforeUnmount, onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { getDetailsList } from "@/utils/utils";
import { jsPDF } from "jspdf";
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
  console.log(creditData.value);
  
  creditData.value = result?.value?.creditCollections?.nodes[0];

  if (result?.value?.creditCollections?.nodes[0]?.creditData?.nodes) {
    dataFormatted.value = getDetailsList(
      result?.value?.creditCollections?.nodes[0]?.creditData?.nodes
    );
    loading.value = false;
  }
};

watchEffect(() => {
  const query = `query{
  creditOffsetCertificate(id:"${router.params?.id}"){
    nodeId
    denom
    retiringEntityName
    walletId
  }
}`;
  const { result } = useQuery(
    gql`
      ${query}
    `
  );
  certificateData.value = result?.value?.creditOffsetCertificate;
  if (result?.value?.creditOffsetCertificate?.denom) {
    getCreditData(result.value.creditOffsetCertificate.denom);
  }
});

const generatePDF = async () => {
  try {
    const PDFData = {
      title: certificateData.value?.retiringEntityName,
      volume: dataFormatted.value?.volume,
      material: dataFormatted.value?.material,
      credit: creditData?.value?.creditType,
      projectInfo:
        creditData?.value?.creditData?.nodes[0]?.applicantDataByCreditDataId
          ?.nodes[0]?.description,
      images: dataFormatted.value?.image,
    };
    const results = await PDFGenerator(PDFData);
    if (results?.success) {
      toast.success("Certificate downloaded successfully");
    }
  } catch (e) {
    console.error(e);
    toast.error("Something went wrong");
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
      <img src="../assets/wastePick.jpg" alt="">
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
        <h1 class="namePage1">John Doe</h1>
        <div class="horizontal-line2"></div>
        <h2 class="presented">FOR OFFSETTING</h2>
        <p class="weight">750 kg</p>
        <h2 class="presented">OF</h2>
        <p class="weight">OCEAN BOUND PLASTIC</p>

        <div class="logoBox">
          <img src="../assets/circular.png" alt="">
        </div>
    </div>
    <img src="../assets/leaf2.png" alt="" class="leaf2">
    <img src="../assets/leaf4.png" alt="" class="leaf4">
    <img src="../assets/leaf3.png" alt="" class="leaf3">
    <img src="../assets/leaf5.png" alt="" class="leaf5">
    <img src="../assets/leaf6.png" alt="" class="leaf6">
  </page>

  <page size="A4" class="page2">
      <div class="innerBox2">

      </div>
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

.page2[size="A4"] {
  @apply w-[21cm] h-[29.7cm];
  padding: 40px;
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
}

.wasteBox img {
  height: 100%;
  width: auto;
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
.innerBox2 {
  position: relative;
  background-color: white;
  height: 100%;
}

</style>
