import type { CreditOffsetCertificate } from "@/types";
import {
  addTextWithSpacing,
  calculateTextProperties,
  calculateXPosition,
  fontSize,
  ipfsToHttpsProtocol,
} from "@/utils/utils";
import { jsPDF } from "jspdf";
import autoTable, { type FontStyle } from "jspdf-autotable";
import QRCode from "qrcode";
import {
  circular,
  greenLogo,
  horizontalLeafs,
  interRegular,
  leaf1,
  openSans,
  openSansBold,
  verticalLeafs,
  wastePick,
} from "../pdfGenerator/AssetsBase64";

// https://github.com/simonbengtsson/jsPDF-AutoTable/issues/848
interface IjsPDF extends jsPDF {
  lastAutoTable: {
    finalY?: number;
  };
}

interface MaterialDetails {
  Condition: string;
  "Material Origin": string;
  "Plastic Type": string;
  "Registration Date": string;
  type: string;
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

let addedBinaryFiles = false;
let addedMediaFiles = false;
let addedMaterialData = false;
let addedLocations = false;
let xPosition = 0;
let firstPageMaxRows = 0;
let secondPageMaxRows = 0;
let allData: any[] = [];
let pagesData: any[] = [];
let qrCodeUrl = undefined;
let plasticValuesString = "";
let locations: Array<{ type: string; [key: string]: any }> = [];
let mediaFileUrls: Array<{ type: string; [key: string]: any }> = [];
let binaryFilesUrls: Array<{ type: string; [key: string]: any }> = [];
let collectionAmount: number = 0;
let issuanceDate: string = "";
let applicantData: string = "";
let applicantDataDescription: string = "";
let materialDetails: Array<{ type: string; [key: string]: any }> = [];
let currentHeaders: Array<string> = [];
let primaryHeaders: Array<string> = [];
let secondaryHeaders: Array<string> = [];
let retiredDate: string = "";
const otherPageMaxRows: number = 35;
const fontOpenSans: string = "Open Sans";
const fontInter: string = "Inter";

export const generatePDF = async (
  certificateData: CreditOffsetCertificate,
  creditData: any,
  creditCollectionData: any,
  ID: string,
) => {
  //To compress the PDF size
  const doc = new jsPDF("landscape", undefined, undefined, true) as IjsPDF;
  qrCodeUrl = await generateQRCode();
  processCreditCollectionsNode(creditCollectionData);
  processEventDataNode(creditData.eventData.nodes);
  processCreditDataNode(creditData);
  assignApplicantData(creditData);
  assignAllDataValue();
  processCertificateDataNode(certificateData);
  preparePagesData();
  addFonts(doc);
  addGrayPadding(doc);
  addGreenRectanglePage1(doc);
  addImagesPage1(doc);
  addHeaderPage1(doc);
  addHorizontalLinePage1(doc);
  addCertificateHolderPage1(doc, certificateData);
  addHorizontalLongLinePage1(doc);
  addCertificateDetailsPage1(doc, certificateData, plasticValuesString);
  addCirularImagePage1(doc, ID, qrCodeUrl);
  addVerticalImagesPage2(doc);
  addHeaderPage2(doc);
  addCertificateHodlerPage2(doc, certificateData);
  addAllTables(
    doc,
    pagesData,
    primaryHeaders,
    secondaryHeaders,
    certificateData,
    collectionAmount,
    applicantData,
    issuanceDate,
    retiredDate,
    creditData,
    applicantDataDescription,
  );
  addFinalPage(doc);
  doc.save("certificate.pdf");
};

const processCertificateDataNode = (
  certificateDataNode: CertificateDataNode,
) => {
  console.log(certificateDataNode);

  if (certificateDataNode.timestamp) {
    retiredDate = certificateDataNode.timestamp.substring(0, 10);
  } else {
    retiredDate = "N/A";
  }
};

const processCreditCollectionsNode = (creditCollectionsNode: any) => {
  //Create string for issuance date on second page
  collectionAmount =
    Number(creditCollectionsNode.activeAmount) +
    Number(creditCollectionsNode.retiredAmount);
  issuanceDate = creditCollectionsNode.issuanceDate.substring(0, 10);
};

const processEventDataNode = (eventDataNode: any) => {
  console.log(eventDataNode);

  // Correct the typo here
  const plasticValuesSet = new Set(
    eventDataNode
      .flatMap((eventNode: any) =>
        eventNode.material.nodes.filter(
          (material: any) => material.key === "plasticType",
        ),
      )
      .map((material: any) => JSON.stringify(material)),
  );

  // Convert plasticValuesSet to an array of unique objects based on their properties and values
  const uniqueMaterials = Array.from(plasticValuesSet, JSON.parse);

  // Extract the value property from the unique objects and join them into a string
  plasticValuesString = uniqueMaterials
    .map((material: any) => material.value)
    .join(", ");
  console.log(plasticValuesString);

  //Assign data to location table variables
  locations = eventDataNode.reduce((unique: any, eventNode: any) => {
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

  let eventData;
  let materialData;
  if (eventDataNode.length) {
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
        // Assign the value property instead of the entire object
        if (materialNode && materialNode.value) {
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

    materialDetails = uniqueMaterials;

    //create headers for material table
    const getTableHeaders = () => {
      const headers: Array<string> = [];
      for (const detail of materialDetails) {
        for (const key in detail) {
          if (detail[key] && !headers.includes(key)) {
            headers.push(key);
          }
        }
      }
      return headers;
    };

    currentHeaders = getTableHeaders();

    //Assign data to material table one and material table two
    primaryHeaders = currentHeaders.slice(1, 6);
    secondaryHeaders;
    if (currentHeaders.length >= 6) {
      secondaryHeaders = currentHeaders.slice(6);
    } else {
      secondaryHeaders = [];
    }
  }
};

const processCreditDataNode = (creditDataNode: any) => {
  //Assign data to binary table variables

  binaryFilesUrls = creditDataNode.binaryFiles.nodes.map(
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
  mediaFileUrls = creditDataNode.mediaFiles.nodes.map((mediaFileNode: any) => {
    return {
      name: mediaFileNode.name || "N/A",
      url: mediaFileNode.url || "N/A",
      type: "media",
    };
  });
};

const assignApplicantData = (creditDataNode: any) => {
  //Assign data to Organization in collection information table
  applicantData = creditDataNode.applicantDataByCreditDataId.nodes[0].name;

  //Assign data to description in project description table
  applicantDataDescription =
    creditDataNode.applicantDataByCreditDataId.nodes[0].description;
};

const assignAllDataValue = () => {
  allData = [
    ...mediaFileUrls,
    ...binaryFilesUrls,
    ...locations,
    ...materialDetails,
  ];
};

//Calculate how many categories in total
const calculateCategoryDistribution = () => {
  const categoryCounts = new Map();

  allData.forEach((item) => {
    categoryCounts.set(item.type, (categoryCounts.get(item.type) || 0) + 1);
  });

  return categoryCounts;
};

//Calculate how many rows in page one and page two
const calculateMaxRows = () => {
  const categoryCounts = calculateCategoryDistribution();
  const descriptionRows = Math.ceil(applicantDataDescription.length / 90);
  const mediaCount = categoryCounts.get("media");
  const binaryCount = categoryCounts.get("binary");
  const locationCount = categoryCounts.get("location");

  if (mediaCount + descriptionRows >= 22) {
    firstPageMaxRows = 22 - descriptionRows;
  } else if (mediaCount + binaryCount + descriptionRows >= 19) {
    firstPageMaxRows = 19 - descriptionRows;
  } else if (mediaCount + binaryCount + locationCount + descriptionRows >= 14) {
    firstPageMaxRows = 14 - descriptionRows;
  } else {
    firstPageMaxRows = 11 - descriptionRows;
  }
  if (mediaCount + descriptionRows > 65) {
    secondPageMaxRows = 47;
  } else if (mediaCount + binaryCount + descriptionRows > 60) {
    secondPageMaxRows = 42;
  } else if (mediaCount + binaryCount + locationCount + descriptionRows > 55) {
    secondPageMaxRows = 38;
  } else {
    secondPageMaxRows = 35;
  }
};

interface CurrentPageData {
  type: string;
  items: any[]; // Change 'any' to the specific type of items if possible
}

//Organize the data for each page
const preparePagesData = () => {
  let currentPageData: CurrentPageData[] = [];
  let currentRowCount = 0;
  let isFirstPage = true;
  let isSecondPage = false;

  calculateMaxRows();

  allData.forEach((item: any) => {
    let maxRowsPerPage = isFirstPage ? firstPageMaxRows : otherPageMaxRows;

    if (isSecondPage) {
      maxRowsPerPage = secondPageMaxRows;
    }

    if (item.type === "material" && secondaryHeaders.length > 0) {
      maxRowsPerPage -= item["Tracking Event"];
    }

    currentRowCount++;

    if (currentRowCount > maxRowsPerPage) {
      pagesData.push(currentPageData);
      currentPageData = [];
      currentRowCount = 0;

      if (isFirstPage) {
        isFirstPage = false;
        isSecondPage = true;
      } else if (isSecondPage) {
        isSecondPage = false;
      }
    }

    let category: any = currentPageData.find((c: any) => c.type === item.type);
    if (!category) {
      category = { type: item.type, items: [] };
      currentPageData.push(category);
    }
    category.items.push(item);

    if (currentRowCount === maxRowsPerPage && !isSecondPage) {
      pagesData.push(currentPageData);
      currentPageData = [];
      currentRowCount = 0;
      if (isFirstPage) {
        isFirstPage = false;
        isSecondPage = true;
      }
    }
  });

  if (currentPageData.length > 0) {
    pagesData.push(currentPageData);
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
  logo.src = "data:image/png;base64," + greenLogo;
  // Wait for both images to load
  await Promise.all([
    new Promise((resolve, reject) => {
      qrImage.onload = resolve;
      qrImage.onerror = () => reject(new Error("Failed to load QR image"));
    }),
    new Promise((resolve, reject) => {
      logo.onload = resolve;
      logo.onerror = () => reject(new Error("Failed to load logo"));
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

const bold = (): string => "bold";

type Color = [number, number, number];
const black: Color = [0, 0, 0];
const lightBlack: Color = [35, 31, 32];
const darkGreen: Color = [32, 105, 72];
const lightGreen: Color = [88, 185, 71];

const addFonts = (doc: IjsPDF) => {
  if (openSans) {
    doc.addFileToVFS("OpenSans-Regular.ttf", openSans);
  }
  if (openSansBold) {
    doc.addFileToVFS("OpenSans-Bold.ttf", openSans);
  }
  if (interRegular) {
    doc.addFileToVFS("Inter-Regular.ttf", interRegular);
  }
  doc.addFont("OpenSans-Regular.ttf", fontOpenSans, "regular");
  doc.addFont("OpenSans-Bold.ttf", fontOpenSans, bold());
  doc.addFont("Inter-Regular.ttf", fontInter, "regular");
};

const addFinalPage = (doc: IjsPDF) => {
  doc.addPage("a4", "portrait");
  addGrayPadding(doc);
  doc.addImage(verticalLeafs, "png", 0, 0, 210, 297);

  doc.setFontSize(fontSize("small"));
  doc.setTextColor(...lightBlack);
  doc.setFont(fontOpenSans, "regular");

  doc.text(
    `
    This certificate is issued by Empower.

    Blockchain technology ensures the transparency and integrity of this certificate.
    Each transaction is recorded on a decentralized and immutable ledger, providing a
    clear audit trail. This guarantees that each credit is unique, cannot be
    double-counted, and its environmental impact is accurately represented.

    Read more at https://www.empower.eco
  `,
    doc.internal.pageSize.width / 2,
    doc.internal.pageSize.height / 2 - 72,
    {
      align: "center",
    },
  );

  doc.addImage(
    greenLogo,
    "png",
    doc.internal.pageSize.width / 2 - 5,
    60,
    10,
    10,
  );
};

const addGrayPadding = (doc: IjsPDF) => {
  const paddingInMM = 10.58;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  doc.setFillColor(50, 57, 60);
  doc.rect(0, 0, pageWidth, paddingInMM, "F");
  doc.rect(0, pageHeight - paddingInMM, pageWidth, paddingInMM, "F");
  doc.rect(0, 0, paddingInMM, pageHeight, "F");
  doc.rect(pageWidth - paddingInMM, 0, paddingInMM, pageHeight, "F");
};

const addGreenRectanglePage1 = (doc: IjsPDF) => {
  const pageWidth = doc.internal.pageSize.getWidth();

  doc.setFillColor(219, 231, 214);

  const x = 80.58;
  const y = 56;
  const paddingToTheLeft = 80.58;
  const paddingToTheRight = 10.58;

  const rectWidth = pageWidth - paddingToTheLeft - paddingToTheRight;
  const rectHeight = 90;

  doc.rect(x, y, rectWidth, rectHeight, "F");
};

const addImagesPage1 = (doc: IjsPDF) => {
  doc.addImage(wastePick, "PNG", 10.58, 0, 70, 220);
  doc.addImage(horizontalLeafs, "png", 0, 0, 297, 210);

  doc.addImage(leaf1, "png", 137, 20, 10, 8);
};

const addHeaderPage1 = (doc: IjsPDF) => {
  doc.setFontSize(fontSize("header1Page1"));
  doc.setTextColor(...darkGreen);
  doc.setFont(fontOpenSans, bold());
  doc.text("plastic credit", 152, 28);

  doc.setTextColor(...black);
  doc.setFontSize(fontSize("header2Page1"));
  doc.text("certificate", 142, 44);
};

const addHorizontalLinePage1 = (doc: IjsPDF) => {
  const pageWidth = doc.internal.pageSize.getWidth();
  doc.setDrawColor(...black);
  doc.setLineWidth(1.5);
  doc.line(170, 50, pageWidth - 110, 50);
};

const addCertificateHolderPage1 = (
  doc: IjsPDF,
  certificateData: CreditOffsetCertificate,
) => {
  doc.setFontSize(fontSize("medium"));
  doc.setTextColor(...lightBlack);
  doc.setFont(fontInter, "regular");
  addTextWithSpacing(doc, "PROUDLY PRESENTED TO", 142, 75, 0.5);

  const name = certificateData.retiringEntityName || "N/A";
  const yPos = 91;

  const { xPos, fontSize2 } = calculateTextProperties(name);

  doc.setFontSize(fontSize2);
  doc.setTextColor(...lightGreen);
  doc.setFont(fontOpenSans, "regular");
  doc.text(name, xPos, yPos);

  doc.setFontSize(fontSize("x-small"));
  doc.setTextColor(...lightBlack);
  const logoWidth = 5;
  doc.text(
    "Certificate issued by Empower",
    doc.internal.pageSize.width / 2 + 35 - logoWidth - 4,
    doc.internal.pageSize.height - 12,
    {
      align: "center",
    },
  );
  doc.addImage(
    greenLogo,
    "png",
    doc.internal.pageSize.width / 2 + 35 + 13 + logoWidth,
    doc.internal.pageSize.height - 17,
    logoWidth,
    logoWidth,
  );
};

const addHorizontalLongLinePage1 = (doc: IjsPDF) => {
  const pageWidth = doc.internal.pageSize.getWidth();
  doc.setDrawColor(...black);
  doc.setLineWidth(0.5);
  doc.line(110, 100, pageWidth - 50, 100);
};

const addCertificateDetailsPage1 = (
  doc: IjsPDF,
  certificateData: CreditOffsetCertificate,
  plasticValuesString: any,
) => {
  doc.setFontSize(fontSize("medium"));
  doc.setTextColor(...lightBlack);
  doc.setFont(fontInter, "regular");
  // addTextWithSpacing(doc, "FOR OFFSETTING", 154, 110, 0.5);
  addTextWithSpacing(doc, "FOR MAKING AN IMPACT", 143, 110, 0.5);
  addTextWithSpacing(doc, "BY NEUTRALIZING AN IMPRESSIVE", 128, 116, 0.5);
  const weightText = certificateData.amount + " KG" || "N/A";
  xPosition = calculateXPosition(weightText);

  doc.setFontSize(fontSize("medium"));
  doc.setTextColor(...lightBlack);
  doc.setFont(fontInter, "regular");
  addTextWithSpacing(doc, "OF", 176, 132, 0.5);

  doc.setFontSize(fontSize("medium"));
  doc.setTextColor(...darkGreen);
  doc.setFont(fontOpenSans, bold());
  doc.text(weightText, xPosition, 124);

  const plasticText = plasticValuesString || "N/A";
  xPosition = calculateXPosition(plasticText);

  doc.setFontSize(fontSize("medium"));
  doc.setTextColor(...darkGreen);
  doc.setFont(fontOpenSans, bold());
  doc.text(plasticText, xPosition, 140);
};

const addCirularImagePage1 = (
  doc: IjsPDF,
  ID: string,
  qrCodeUrl: string | undefined,
) => {
  const startY = 151;
  const textY = startY + 20;
  const qrY = startY + 9;

  doc.addImage(circular, "png", 160, startY, 40, 40);
  doc.setFontSize(fontSize("medium"));
  doc.setTextColor(...black);
  doc.setFont(fontOpenSans, bold());
  doc.text(ID, 174, textY);
  doc.setTextColor(...lightGreen);
  doc.setFontSize(fontSize("small"));
  if (qrCodeUrl) {
    doc.addImage(qrCodeUrl, "svg", 168, qrY, 23, 23);
  }
  //Hyperlink the QR
  doc.link(168, qrY, 20, 20, {
    url: "https://www.empowerchain.io/",
  });
};

const addVerticalImagesPage2 = (doc: IjsPDF) => {
  doc.addPage("a4", "portrait");
  addGrayPadding(doc);
  doc.addImage(verticalLeafs, "png", 0, 0, 210, 297);
  doc.addImage(leaf1, "png", 30, 23, 10, 8);
};

const addHeaderPage2 = (doc: IjsPDF) => {
  doc.setFontSize(fontSize("headerPage2"));
  doc.setTextColor(...darkGreen);
  doc.setFont(fontOpenSans, "regular");
  doc.text("plastic credit", 45, 30);
  doc.setTextColor(...black);
  doc.setFont(fontOpenSans, bold());
  doc.text("certificate", 95, 30);
  doc.setFont(fontOpenSans, "regular");
  doc.text("details", 135, 30);
};

const addCertificateHodlerPage2 = (
  doc: IjsPDF,
  certificateData: CreditOffsetCertificate,
) => {
  doc.setFontSize(fontSize("medium"));
  doc.setTextColor(...darkGreen);
  doc.setFont(fontOpenSans, bold());
  doc.text("Name of Certificate Holder:", 20, 44);
  doc.setTextColor(...black);
  doc.text(certificateData.retiringEntityName, 90, 44);
};

const addTitle = (doc: IjsPDF, title: string, yPosition: number) => {
  doc.setFontSize(fontSize("medium"));
  doc.setTextColor(...darkGreen);
  doc.setFont(fontOpenSans, bold());
  doc.text(title, 20, yPosition);
  return yPosition + 5;
};

const prepareMaterialDataForPdf = (
  materialDetails: MaterialDetails[],
  primaryHeaders: [],
) => {
  const tableData = materialDetails.map((material) => {
    return primaryHeaders.map((header) => {
      return material[header] || "-";
    });
  });

  return tableData;
};

const prepareSecondaryMaterialDataForPdf = (
  materialDetails: MaterialDetails[],
  secondaryHeaders: [],
) => {
  const tableData = materialDetails.map((material: any) => {
    return secondaryHeaders.map((header: any) => {
      return material[header] || "-";
    });
  });

  return tableData;
};

const addMaterialTableToPdf = (
  doc: IjsPDF,
  materialDetails: MaterialDetails[],
  primaryHeaders: [],
  startY: number,
  title: string,
) => {
  const tableData = prepareMaterialDataForPdf(materialDetails, primaryHeaders);

  startY += 10;
  startY = addTitle(doc, title, startY);
  autoTable(doc, {
    startY: startY,
    head: [primaryHeaders],
    body: tableData,
    theme: "plain",
    didDrawCell: (data: any) => {
      doc.setDrawColor(126, 194, 66);
      doc.setLineWidth(0.3);

      if (data.row.index === 0 && data.cell.section === "head") {
        doc.line(
          data.cell.x,
          data.cell.y + data.cell.height,
          data.cell.x + data.cell.width,
          data.cell.y + data.cell.height,
        );
      }
      if (data.row.index === 0 && data.cell.section === "head") {
        doc.line(
          data.cell.x,
          data.cell.y,
          data.cell.x + data.cell.width,
          data.cell.y,
        );
      }
      if (
        data.cell.section === "body" &&
        data.row.index === data.table.body.length - 1
      ) {
        doc.line(
          data.cell.x,
          data.cell.y + data.cell.height,
          data.cell.x + data.cell.width,
          data.cell.y + data.cell.height,
        );
      }
    },
    styles: {
      cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 },
      fontSize: 11,
      lineWidth: 0,
      fillColor: false,
      halign: "center",
      textColor: [...black],
    },
    headStyles: {
      cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 },
      fillColor: false,
      textColor: [...black],
      fontStyle: bold() as FontStyle,
      fontSize: 12,
    },
    columnStyles: {
      0: { cellWidth: "auto" },
      1: { cellWidth: "auto" },
    },
  });

  return doc.lastAutoTable.finalY;
};

const addSecondaryMaterialTableToPdf = (
  doc: IjsPDF,
  materialDetails: MaterialDetails[],
  secondaryHeaders: [],
  startY: number,
) => {
  const tableData = prepareSecondaryMaterialDataForPdf(
    materialDetails,
    secondaryHeaders,
  );
  startY -= 10;
  autoTable(doc, {
    startY: startY,
    head: [secondaryHeaders],
    body: tableData,
    theme: "plain",
    didDrawCell: (data: any) => {
      doc.setDrawColor(126, 194, 66);
      doc.setLineWidth(0.3);

      if (data.row.index === 0 && data.cell.section === "head") {
        doc.line(
          data.cell.x,
          data.cell.y + data.cell.height,
          data.cell.x + data.cell.width,
          data.cell.y + data.cell.height,
        );
      }
      if (data.row.index === 0 && data.cell.section === "head") {
        doc.line(
          data.cell.x,
          data.cell.y,
          data.cell.x + data.cell.width,
          data.cell.y,
        );
      }
      if (
        data.cell.section === "body" &&
        data.row.index === data.table.body.length - 1
      ) {
        doc.line(
          data.cell.x,
          data.cell.y + data.cell.height,
          data.cell.x + data.cell.width,
          data.cell.y + data.cell.height,
        );
      }
    },
    styles: {
      fillColor: false,
      cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 },
      lineWidth: 0,
      halign: "center",
      textColor: [...black],
      fontSize: 11,
    },
    headStyles: {
      fillColor: false,
      cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 },
      textColor: [...black],
      fontStyle: bold() as FontStyle,
      halign: "center",
      fontSize: 12,
    },
    columnStyles: {
      0: { cellWidth: "auto" },
      1: { cellWidth: "auto" },
    },
  });

  return doc.lastAutoTable.finalY;
};

const addSimpleTable = (
  doc: IjsPDF,
  title: string,
  headers: any,
  data: any,
  startY: number,
) => {
  startY = addTitle(doc, title, startY);

  autoTable(doc, {
    startY: startY,
    head: [headers],
    body: data,
    theme: "plain",
    didDrawCell: (data: any) => {
      doc.setDrawColor(126, 194, 66);
      doc.setLineWidth(0.3);

      if (data.row.index === 0 && data.cell.section === "head") {
        doc.line(
          data.cell.x,
          data.cell.y + data.cell.height,
          data.cell.x + data.cell.width,
          data.cell.y + data.cell.height,
        );
      }
      if (data.row.index === 0 && data.cell.section === "head") {
        doc.line(
          data.cell.x,
          data.cell.y,
          data.cell.x + data.cell.width,
          data.cell.y,
        );
      }
      if (
        data.cell.section === "body" &&
        data.row.index === data.table.body.length - 1
      ) {
        doc.line(
          data.cell.x,
          data.cell.y + data.cell.height,
          data.cell.x + data.cell.width,
          data.cell.y + data.cell.height,
        );
      }
    },
    styles: {
      cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 },
      fontSize: 11,
      lineWidth: 0,
      halign: "center",
      fillColor: false,
      textColor: [...black],
    },
    headStyles: {
      cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 },
      halign: "center",
      textColor: [...black],
      fontStyle: bold() as FontStyle,
      fontSize: 12,
      fillColor: false,
    },
    columnStyles: {
      0: { cellWidth: "auto" },
      1: { cellWidth: "auto" },
    },
  });

  return doc.lastAutoTable.finalY;
};

const addTableWithLinks = (
  doc: IjsPDF,
  title: string,
  data: any,
  startY: number,
) => {
  startY = addTitle(doc, title, startY);
  autoTable(doc, {
    startY: startY,
    theme: "grid",
    head: [["Name", "URL"]],
    styles: {
      cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 },
      fontSize: 11,
      lineWidth: 0,
      halign: "center",
      fillColor: false,
      textColor: [...black],
    },
    headStyles: {
      fillColor: false,
      cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 },
      halign: "center",
      textColor: [...black],
      fontStyle: bold() as FontStyle,
      fontSize: 12,
    },
    columnStyles: {
      0: { cellWidth: "auto" },
      1: { cellWidth: "auto" },
    },
    willDrawCell: (data: any) => {
      if (data.column.index === 1 && data.cell.section === "body") {
        data.cell.text = "";
      }
    },
    body: data.map((item: any) => [item.name, item.url]),
    didDrawCell: (data: any) => {
      doc.setDrawColor(126, 194, 66);
      doc.setLineWidth(0.3);
      if (data.row.index === 0 && data.cell.section === "head") {
        doc.line(
          data.cell.x,
          data.cell.y + data.cell.height,
          data.cell.x + data.cell.width,
          data.cell.y + data.cell.height,
        );
      }
      if (data.row.index === 0 && data.cell.section === "head") {
        doc.line(
          data.cell.x,
          data.cell.y,
          data.cell.x + data.cell.width,
          data.cell.y,
        );
      }
      if (
        data.cell.section === "body" &&
        data.row.index === data.table.body.length - 1
      ) {
        doc.line(
          data.cell.x,
          data.cell.y + data.cell.height,
          data.cell.x + data.cell.width,
          data.cell.y + data.cell.height,
        );
      }
      if (data.column.index === 1 && data.cell.section === "body") {
        const url = data.cell.raw;
        if (url) {
          doc.setTextColor(...black);
          doc.setFontSize(fontSize("table"));
          doc.setFont(fontInter, "regular");
          const textWidth = doc.getTextWidth(url);
          const textPosX = data.cell.x + (data.cell.width - textWidth) / 2;
          const textPosY = data.cell.y + data.cell.height / 1.5;
          doc.text(url, textPosX, textPosY);
          doc.link(textPosX, data.cell.y, textWidth, data.cell.height, {
            url: ipfsToHttpsProtocol(url),
          });
        }
      }
    },
  });

  return doc.lastAutoTable.finalY;
};

const addAllTables = (
  doc: IjsPDF,
  pagesData: any,
  primaryHeaders: any,
  secondaryHeaders: any,
  certificateData: CreditOffsetCertificate,
  collectionAmount: number,
  applicantData: string,
  issuanceDate: string,
  retiredDate: string,
  creditData: any,
  applicantDataDescription: string,
) => {
  let yPosition = 0;
  const marginBetweenTables = 10;
  const pageWidth = doc.internal.pageSize.getWidth();

  pagesData.forEach((page: any, pageIndex: number) => {
    if (pageIndex > 0) {
      doc.addPage();
      addGrayPadding(doc);
      yPosition = 10;
    }

    if (pageIndex === 0) {
      yPosition = 45;
      const credit = [
        certificateData.amount + " KG",
        creditData.id,
        retiredDate,
      ];
      yPosition =
        addSimpleTable(
          doc,
          "Credit Information",
          ["Amount", "Credit ID", "Retired Date"],
          [credit],
          yPosition + marginBetweenTables,
        ) ?? 0;

      const collection = [
        collectionAmount + " KG",
        applicantData,
        issuanceDate,
      ];
      yPosition =
        addSimpleTable(
          doc,
          "Collection Information",
          ["Amount", "Organization", "Issuance Date"],
          [collection],
          yPosition + marginBetweenTables,
        ) ?? 0;

      const title = "Project Information";
      const description = applicantDataDescription;

      yPosition += 10;
      doc.setDrawColor(...black);
      doc.setLineWidth(0.3);

      doc.text(title, 20, yPosition);
      doc.setFontSize(fontSize("small"));
      doc.setFont(fontInter, "regular");
      doc.setTextColor(...black);

      // Prepare for Description
      yPosition += 5;
      doc.setDrawColor(126, 194, 66);
      doc.line(14, yPosition + 1, pageWidth - 14, yPosition + 1);
      const lines = doc.splitTextToSize(description, 170);

      lines.forEach((line: any) => {
        yPosition += 6;
        doc.text(line, 20, yPosition);
      });
      doc.setDrawColor(126, 194, 66);
      doc.line(14, yPosition + 2, pageWidth - 14, yPosition + 2);
      yPosition += 2;
    }

    const addLocations = (locations: any) => {
      if (addedLocations === false) {
        const locationsData = locations.map((loc: any) => [
          loc.country,
          loc.longitude,
          loc.latitude,
        ]);
        yPosition =
          addSimpleTable(
            doc,
            "Locations",
            ["Country", "Longitude", "Latitude"],
            locationsData,
            yPosition + marginBetweenTables,
          ) ?? 0;
        addedLocations = true;
      } else {
        yPosition -= 10;
        const locationsData = locations.map((loc: any) => [
          loc.country,
          loc.longitude,
          loc.latitude,
        ]);
        yPosition =
          addSimpleTable(
            doc,
            "",
            ["Country", "Longitude", "Latitude"],
            locationsData,
            yPosition + marginBetweenTables,
          ) ?? 0;
      }
    };

    const addMediaFiles = (mediaFiles: any) => {
      if (addedMediaFiles === false) {
        const photosTableData = mediaFiles.map((mf: any) => ({
          name: mf.name,
          url: mf.url,
        }));
        yPosition =
          addTableWithLinks(
            doc,
            "Photos",
            photosTableData,
            yPosition + marginBetweenTables,
          ) ?? 0;
        addedMediaFiles = true;
      } else {
        yPosition -= 10;
        const photosTableData = mediaFiles.map((mf: any) => ({
          name: mf.name,
          url: mf.url,
        }));
        yPosition =
          addTableWithLinks(
            doc,
            "",
            photosTableData,
            yPosition + marginBetweenTables,
          ) ?? 0;
      }
    };

    const addMaterialData = (materialDetails: MaterialDetails[]) => {
      if (addedMaterialData === false) {
        yPosition =
          addMaterialTableToPdf(
            doc,
            materialDetails,
            primaryHeaders,
            yPosition,
            "Material Tracking Events",
          ) ?? 0;
        yPosition = (doc.lastAutoTable.finalY ?? 0) + marginBetweenTables;
        addedMaterialData = true;
        if (secondaryHeaders.length > 0) {
          yPosition =
            addSecondaryMaterialTableToPdf(
              doc,
              materialDetails,
              secondaryHeaders,
              yPosition,
            ) ?? 0;
          yPosition = (doc.lastAutoTable.finalY ?? 0) + marginBetweenTables;
        }
      } else {
        yPosition -= 10;
        yPosition =
          addMaterialTableToPdf(
            doc,
            materialDetails,
            primaryHeaders,
            yPosition,
            "",
          ) ?? 0;
        yPosition = (doc.lastAutoTable.finalY ?? 0) + marginBetweenTables;
        if (secondaryHeaders.length > 0) {
          yPosition =
            addSecondaryMaterialTableToPdf(
              doc,
              materialDetails,
              secondaryHeaders,
              yPosition,
            ) ?? 0;
          yPosition = (doc.lastAutoTable.finalY ?? 0) + marginBetweenTables;
        }
      }
    };

    const addBinaryFiles = (binaryFiles: any) => {
      if (addedBinaryFiles === false) {
        const binaryFilesTableData = binaryFiles.map((bf: any) => ({
          name: bf.name,
          url: bf.url,
        }));
        yPosition =
          addTableWithLinks(
            doc,
            "Documents",
            binaryFilesTableData,
            yPosition + marginBetweenTables,
          ) ?? 0;
        addedBinaryFiles = true;
      } else {
        yPosition -= 10;
        const binaryFilesTableData = binaryFiles.map((bf: any) => ({
          name: bf.name,
          url: bf.url,
        }));
        yPosition =
          addTableWithLinks(
            doc,
            "",
            binaryFilesTableData,
            yPosition + marginBetweenTables,
          ) ?? 0;
      }
    };

    page.forEach((category: any) => {
      switch (category.type) {
        case "location":
          addLocations(category.items);
          break;
        case "material":
          addMaterialData(category.items);
          break;
        case "media":
          addMediaFiles(category.items);
          break;
        case "binary":
          addBinaryFiles(category.items);
          break;
      }
    });
    if (pageIndex > 0) {
      doc.addImage(verticalLeafs, "png", 0, 0, 210, 297);
    }
  });

  resetAddedValues();
};

const resetAddedValues = () => {
  addedBinaryFiles = false;
  addedMediaFiles = false;
  addedMaterialData = false;
  addedLocations = false;
  plasticValuesString = "";
  locations = [];
  mediaFileUrls = [];
  binaryFilesUrls = [];
  collectionAmount = 0;
  issuanceDate = "";
  applicantData = "";
  applicantDataDescription = "";
  materialDetails = [];
  currentHeaders = [];
  primaryHeaders = [];
  secondaryHeaders = [];
  retiredDate = "";
  allData = [];
  pagesData = [];
};
