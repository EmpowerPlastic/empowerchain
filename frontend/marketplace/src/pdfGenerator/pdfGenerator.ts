import type { CreditOffsetCertificate } from "@/types";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import {
  wastePick,
  circular,
  leaf1,
  horizontalLeafs,
  verticalLeafs,
} from "../pdfGenerator/AssetsBase64";
import {
  addTextWithSpacing,
  calculateTextProperties,
  calculateXPosition,
} from "@/utils/utils";
import { ref } from "vue";
import { ipfsToHttpsProtocol } from "@/utils/utils";

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

const addedBinaryFiles = ref(false);
const addedMediaFiles = ref(false);
const addedMaterialData = ref(false);
const addedLocations = ref(false);
const xPosition = ref(0);

export const generatePDF = (
  certificateData: CreditOffsetCertificate,
  pagesData: any,
  primaryHeaders: any,
  secondaryHeaders: any,
  plastciValuesString: string,
  collectionAmount: number,
  applicantData: string,
  issuanceDate: string,
  retiredDate: string,
  creditData: any,
  ID: string,
  applicantDataDescription: string,
  qrCodeUrl: string | undefined,
) => {
  const doc = new jsPDF("landscape") as IjsPDF;
  addGrayPadding(doc);
  addGreenRectanglePage1(doc);
  addImagesPage1(doc);
  addHeaderPage1(doc);
  addHorizontalLinePage1(doc);
  addCertificateHolderPage1(doc, certificateData);
  addHorizontalLongLinePage1(doc);
  addCertificateDetailsPage1(doc, certificateData, plastciValuesString);
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
  doc.save("certificate.pdf");
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

  const x = 40;
  const y = 60;

  const rectWidth = pageWidth;
  const rectHeight = 90;

  doc.rect(x, y, rectWidth, rectHeight, "F");
};

const addImagesPage1 = (doc: IjsPDF) => {
  doc.addImage(wastePick, "PNG", 10.58, 0, 70, 220);
  doc.addImage(horizontalLeafs, "png", 0, 0, 297, 210);

  doc.addImage(leaf1, "png", 137, 20, 10, 8);
};

const addHeaderPage1 = (doc: IjsPDF) => {
  doc.setFontSize(28);
  doc.setTextColor(32, 105, 72);
  doc.setFont("Open Sans", "bold");
  doc.text("plastic credit", 152, 28);

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(50);
  doc.text("certificate", 142, 44);
};

const addHorizontalLinePage1 = (doc: IjsPDF) => {
  const pageWidth = doc.internal.pageSize.getWidth();
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(1.5);
  doc.line(170, 50, pageWidth - 110, 50);
};

const addCertificateHolderPage1 = (
  doc: IjsPDF,
  certificateData: CreditOffsetCertificate,
) => {
  doc.setFontSize(15);
  doc.setTextColor(35, 31, 32);
  doc.setFont("inter", "normal");
  addTextWithSpacing(doc, "PROUDLY PRESENTED TO", 142, 75, 0.5);

  const name = certificateData.retiringEntityName || "N/A";
  const yPos = 95;

  const { xPos, fontSize } = calculateTextProperties(name);

  doc.setFontSize(fontSize);
  doc.setTextColor(88, 185, 71);
  doc.setFont("Open Sans", "bold");
  doc.text(name, xPos, yPos);
};

const addHorizontalLongLinePage1 = (doc: IjsPDF) => {
  const pageWidth = doc.internal.pageSize.getWidth();
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.5);
  doc.line(110, 100, pageWidth - 50, 100);
};

const addCertificateDetailsPage1 = (
  doc: IjsPDF,
  certificateData: CreditOffsetCertificate,
  plastciValuesString: any,
) => {
  doc.setFontSize(15);
  doc.setTextColor(35, 31, 32);
  doc.setFont("inter", "normal");
  // addTextWithSpacing(doc, "FOR OFFSETTING", 154, 110, 0.5);
  addTextWithSpacing(doc, "FOR MAKING AN IMPACT", 143, 110, 0.5);
  addTextWithSpacing(doc, "BY NEUTRALIZING AN IMPRESSIVE", 128, 116, 0.5);
  const weightText = certificateData.amount + " KG" || "N/A";
  xPosition.value = calculateXPosition(weightText);

  doc.setFontSize(15);
  doc.setTextColor(35, 31, 32);
  doc.setFont("inter", "normal");
  addTextWithSpacing(doc, "OF", 176, 132, 0.5);

  doc.setFontSize(15);
  doc.setTextColor(32, 105, 72);
  doc.setFont("Open Sans", "bold");
  doc.text(weightText, xPosition.value, 124);

  const plasticText = plastciValuesString || "N/A";
  xPosition.value = calculateXPosition(plasticText);

  doc.setFontSize(15);
  doc.setTextColor(32, 105, 72);
  doc.setFont("Open Sans", "bold");
  doc.text(plasticText, xPosition.value, 140);
};

const addCirularImagePage1 = (
  doc: IjsPDF,
  ID: string,
  qrCodeUrl: string | undefined,
) => {
  doc.addImage(circular, "png", 160, 155, 40, 40);
  doc.setFontSize(15);
  doc.setTextColor(0, 0, 0);
  doc.setFont("Open Sans", "bold");
  doc.text(ID, 174, 175);
  doc.setTextColor(88, 185, 71);
  doc.setFontSize(12);
  if (qrCodeUrl) {
    doc.addImage(qrCodeUrl, "svg", 168, 164, 23, 23);
  }
};

const addVerticalImagesPage2 = (doc: IjsPDF) => {
  doc.addPage("a4", "portrait");
  addGrayPadding(doc);
  doc.addImage(verticalLeafs, "png", 0, 0, 210, 297);
  doc.addImage(leaf1, "png", 30, 23, 10, 8);
};

const addHeaderPage2 = (doc: IjsPDF) => {
  doc.setFontSize(25);
  doc.setTextColor(32, 105, 72);
  doc.setFont("Open Sans", "normal");
  doc.text("plastic credit", 45, 30);
  doc.setTextColor(0, 0, 0);
  doc.setFont("Open Sans", "bold");
  doc.text("certificate", 93, 30);
  doc.setFont("Open Sans", "normal");
  doc.text("details", 133, 30);
};

const addCertificateHodlerPage2 = (
  doc: IjsPDF,
  certificateData: CreditOffsetCertificate,
) => {
  doc.setFontSize(15);
  doc.setTextColor(32, 105, 72);
  doc.setFont("Open Sans", "bold");
  doc.text("Name of Certificate Holder:", 20, 44);
  doc.setTextColor(0, 0, 0);
  doc.text(certificateData.retiringEntityName, 84, 44);
};

const addTitle = (doc: IjsPDF, title: string, yPosition: number) => {
  doc.setFontSize(15);
  doc.setTextColor(32, 105, 72);
  doc.setFont("Open Sans", "bold");
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
      // align: "center",
      fillColor: false,
      halign: "center",
      textColor: [0, 0, 0],
      // fontFamily: "Inter",
    },
    headStyles: {
      cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 },
      fillColor: false,
      textColor: [0, 0, 0],
      fontStyle: "bold",
      // align: "center",
      fontSize: 12,
    },
    columnStyles: {
      0: { cellWidth: "auto" },
      1: { cellWidth: "auto" },
      // halign: "center",
      // fillColor: false,
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
      textColor: [0, 0, 0],
      // fontFamily: "Inter",
      fontSize: 11,
    },
    headStyles: {
      fillColor: false,
      cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 },
      textColor: [0, 0, 0],
      fontStyle: "bold",
      halign: "center",
      fontSize: 12,
    },
    columnStyles: {
      // fillColor: false,
      0: { cellWidth: "auto" },
      1: { cellWidth: "auto" },
      // halign: "center",
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
      textColor: [0, 0, 0],
      // fontFamily: "Inter",
    },
    headStyles: {
      cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 },
      halign: "center",
      textColor: [0, 0, 0],
      fontStyle: "bold",
      fontSize: 12,
      fillColor: false,
    },
    columnStyles: {
      0: { cellWidth: "auto" },
      1: { cellWidth: "auto" },
      // halign: "center",
      // fillColor: false,
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
      textColor: [0, 0, 0],
      // fontFamily: "Inter",
    },
    headStyles: {
      fillColor: false,
      cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 },
      halign: "center",
      textColor: [0, 0, 0],
      fontStyle: "bold",
      fontSize: 12,
    },
    columnStyles: {
      0: { cellWidth: "auto" },
      1: { cellWidth: "auto" },
      // halign: "center",
      // fillColor: false,
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
          doc.setTextColor(0, 0, 0);
          doc.setFontSize(11);
          doc.setFont("Inter", "normal");
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
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.3);

      doc.text(title, 20, yPosition);
      doc.setFontSize(12);
      doc.setFont("Inter", "normal");
      doc.setTextColor(0, 0, 0);

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
      if (addedLocations.value === false) {
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
        addedLocations.value = true;
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
      if (addedMediaFiles.value === false) {
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
        addedMediaFiles.value = true;
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
      if (addedMaterialData.value === false) {
        yPosition =
          addMaterialTableToPdf(
            doc,
            materialDetails,
            primaryHeaders,
            yPosition,
            "Material Tracking Events",
          ) ?? 0;
        yPosition = (doc.lastAutoTable.finalY ?? 0) + marginBetweenTables;
        addedMaterialData.value = true;
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
      if (addedBinaryFiles.value === false) {
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
        addedBinaryFiles.value = true;
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
  addedBinaryFiles.value = false;
  addedMediaFiles.value = false;
  addedMaterialData.value = false;
  addedLocations.value = false;
};
