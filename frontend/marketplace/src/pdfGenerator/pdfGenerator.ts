import { jsPDF } from "jspdf";
import "jspdf-autotable";
import {
  wastePick,
  circular,
  leaf1,
  greenLogo,
  horizontalLeafs,
  verticalLeafs,
} from "../pdfGenerator/AssetsBase64";
import {
  addTextWithSpacing,
  calculateTextProperties,
  calculateXPosition,
} from "@/utils/utils";
import { ref } from "vue";

const addedBinaryFiles = ref(false);
const addedMediaFiles = ref(false);
const addedMaterialData = ref(false);
const addedLocations = ref(false);

function resetAddedValues() {
  addedBinaryFiles.value = false;
  addedMediaFiles.value = false;
  addedMaterialData.value = false;
  addedLocations.value = false;
}

export const generatePDF = (
  certificateData,
  pagesData,
  primaryHeaders,
  secondaryHeaders,
  plastciValuesString,
  collectionAmount,
  applicantData,
  issuanceDate,
  retiredDate,
  creditData,
  ID,
  applicantDataDescription
) => {
  const doc = new jsPDF("landscape");

  const addGrayPadding = (doc: any) => {
    const paddingInMM = 10.58;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    doc.setFillColor(50, 57, 60);
    doc.rect(0, 0, pageWidth, paddingInMM, "F");
    doc.rect(0, pageHeight - paddingInMM, pageWidth, paddingInMM, "F");
    doc.rect(0, 0, paddingInMM, pageHeight, "F");
    doc.rect(pageWidth - paddingInMM, 0, paddingInMM, pageHeight, "F");
  };
  addGrayPadding(doc);
  const pageWidth = doc.internal.pageSize.getWidth();

  doc.setFillColor(219, 231, 214);

  const x = 40;
  const y = 60;

  const rectWidth = pageWidth;
  const rectHeight = 90;

  doc.rect(x, y, rectWidth, rectHeight, "F");

  doc.addImage(wastePick, "PNG", 10.58, 0, 70, 220);
  doc.addImage(horizontalLeafs, "png", 0, 0, 297, 210);

  const customDrawCell = (data: any) => {
    doc.setDrawColor(126, 194, 66);
    doc.setLineWidth(0.3);

    if (data.row.index === 0 && data.cell.section === "head") {
      doc.line(
        data.cell.x,
        data.cell.y + data.cell.height,
        data.cell.x + data.cell.width,
        data.cell.y + data.cell.height
      );
    }
    if (data.row.index === 0 && data.cell.section === "head") {
      doc.line(
        data.cell.x,
        data.cell.y,
        data.cell.x + data.cell.width,
        data.cell.y
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
        data.cell.y + data.cell.height
      );
    }
  };

  doc.addImage(leaf1, "png", 137, 20, 10, 8);

  doc.setFontSize(28);
  doc.setTextColor(32, 105, 72);
  doc.setFont("Open Sans", "bold");
  doc.text("plastic credit", 152, 28);

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(50);
  doc.text("certificate", 142, 44);

  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(1.5);
  doc.line(170, 50, pageWidth - 110, 50);

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

  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.5);
  doc.line(110, 100, pageWidth - 50, 100);

  doc.setFontSize(15);
  doc.setTextColor(35, 31, 32);
  doc.setFont("inter", "normal");
  addTextWithSpacing(doc, "FOR OFFSETTING", 154, 110, 0.5);

  const weightText = certificateData.amount + " KG" || "N/A";
  let xPosition = calculateXPosition(weightText);

  doc.setFontSize(15);
  doc.setTextColor(32, 105, 72);
  doc.setFont("Open Sans", "bold");
  doc.text(weightText, xPosition, 120);

  doc.setFontSize(15);
  doc.setTextColor(35, 31, 32);
  doc.setFont("inter", "normal");
  addTextWithSpacing(doc, "OF", 176, 130, 0.5);

  doc.addImage(circular, "png", 160, 155, 40, 40);
  doc.addImage(greenLogo, "png", 176, 162, 7, 6);
  doc.setFontSize(15);
  doc.setTextColor(0, 0, 0);
  doc.setFont("Open Sans", "bold");
  doc.text(ID, 174, 175);
  doc.setTextColor(88, 185, 71);
  doc.setFontSize(12);
  doc.text("check on", 171, 180);
  doc.text("blockchain!", 169, 185);

  const plasticText = plastciValuesString || "N/A";
  xPosition = calculateXPosition(plasticText);

  doc.setFontSize(15);
  doc.setTextColor(32, 105, 72);
  doc.setFont("Open Sans", "bold");
  doc.text(plasticText, xPosition, 140);

  if (pagesData.length > 0) {
    doc.addPage("a4", "portrait");
    addGrayPadding(doc);
    doc.addImage(verticalLeafs, "png", 0, 0, 210, 297);
    doc.addImage(leaf1, "png", 30, 23, 10, 8);

    doc.setFontSize(25);
    doc.setTextColor(32, 105, 72);
    doc.setFont("Open Sans", "normal");
    doc.text("plastic credit", 45, 30);
    doc.setTextColor(0, 0, 0);
    doc.setFont("Open Sans", "bold");
    doc.text("certificate", 93, 30);
    doc.setFont("Open Sans", "normal");
    doc.text("details", 133, 30);

    doc.setFontSize(15);
    doc.setTextColor(32, 105, 72);
    doc.setFont("Open Sans", "bold");
    doc.text("Name of Certificate Holder:", 20, 44);
    doc.setTextColor(0, 0, 0);
    doc.text(certificateData.retiringEntityName, 84, 44);
  }

  doc.setLineWidth(0.5);
  function addTitle(doc, title, yPosition) {
    doc.setFontSize(15);
    doc.setTextColor(32, 105, 72);
    doc.setFont("Open Sans", "bold");
    doc.text(title, 20, yPosition);
    return yPosition + 5;
  }

  function prepareMaterialDataForPdf(materialDetails, primaryHeaders) {
    const tableData = materialDetails.map((material) => {
      return primaryHeaders.map((header) => {
        return material[header] || "-";
      });
    });

    return tableData;
  }

  function prepareSecondaryMaterialDataForPdf(
    materialDetails,
    secondaryHeaders
  ) {
    const tableData = materialDetails.map((material) => {
      return secondaryHeaders.map((header) => {
        return material[header] || "-";
      });
    });

    return tableData;
  }

  function addMaterialTableToPdf(
    doc,
    materialDetails,
    primaryHeaders,
    startY,
    title
  ) {
    const tableData = prepareMaterialDataForPdf(
      materialDetails,
      primaryHeaders
    );
    startY += 10;
    startY = addTitle(doc, title, startY);
    doc.autoTable({
      startY: startY,
      head: [primaryHeaders],
      body: tableData,
      theme: "plain",
      didDrawCell: customDrawCell,
      styles: {
        cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 },
        fontSize: 11,
        lineWidth: 0,
        align: "center",
        fillColor: false,
        halign: "center",
        textColor: [0, 0, 0],
        fontFamily: "Inter",
      },
      headStyles: {
        cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 },
        fillColor: false,
        textColor: [0, 0, 0],
        fontStyle: "bold",
        align: "center",
        fontSize: 12,
      },
      columnStyles: {
        0: { cellWidth: "auto" },
        1: { cellWidth: "auto" },
        halign: "center",
        fillColor: false,
      },
    });

    return doc.lastAutoTable.finalY;
  }

  function addSecondaryMaterialTableToPdf(
    doc,
    materialDetails,
    secondaryHeaders,
    startY
  ) {
    const tableData = prepareSecondaryMaterialDataForPdf(
      materialDetails,
      secondaryHeaders
    );
    startY -= 10;
    doc.autoTable({
      startY: startY,
      head: [secondaryHeaders],
      body: tableData,
      theme: "plain",
      didDrawCell: customDrawCell,
      styles: {
        fillColor: false,
        cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 },
        lineWidth: 0,
        halign: "center",
        textColor: [0, 0, 0],
        fontFamily: "Inter",
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
        fillColor: false,
        0: { cellWidth: "auto" },
        1: { cellWidth: "auto" },
        halign: "center",
      },
    });

    return doc.lastAutoTable.finalY;
  }

  function addSimpleTable(doc, title, headers, data, startY) {
    startY = addTitle(doc, title, startY);

    doc.autoTable({
      startY: startY,
      head: [headers],
      body: data,
      theme: "plain",
      didDrawCell: customDrawCell,
      styles: {
        cellPadding: { top: 1, right: 0.5, bottom: 1, left: 0.5 },
        fontSize: 11,
        lineWidth: 0,
        halign: "center",
        fillColor: false,
        textColor: [0, 0, 0],
        fontFamily: "Inter",
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
        halign: "center",
        fillColor: false,
      },
    });

    return doc.lastAutoTable.finalY;
  }

  function addTableWithLinks(doc, title, data, startY) {
    startY = addTitle(doc, title, startY);
    doc.autoTable({
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
        fontFamily: "Inter",
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
        halign: "center",
        fillColor: false,
      },
      willDrawCell: (data) => {
        if (data.column.index === 1 && data.cell.section === "body") {
          data.cell.text = "";
        }
      },
      body: data.map((item) => [item.name, item.url]),
      didDrawCell: (data) => {
        doc.setDrawColor(126, 194, 66);
        doc.setLineWidth(0.3);
        if (data.row.index === 0 && data.cell.section === "head") {
          doc.line(
            data.cell.x,
            data.cell.y + data.cell.height,
            data.cell.x + data.cell.width,
            data.cell.y + data.cell.height
          );
        }
        if (data.row.index === 0 && data.cell.section === "head") {
          doc.line(
            data.cell.x,
            data.cell.y,
            data.cell.x + data.cell.width,
            data.cell.y
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
            data.cell.y + data.cell.height
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
              url: url,
            });
          }
        }
      },
    });

    return doc.lastAutoTable.finalY;
  }

  function addAllTables(doc, pagesData, primaryHeaders, secondaryHeaders) {
    let yPosition = 0;
    let marginBetweenTables = 10;

    // Iterate over each page
    pagesData.forEach((page, pageIndex) => {
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
        yPosition = addSimpleTable(
          doc,
          "Credit Information",
          ["Amount", "Credit ID", "Retired Date"],
          [credit],
          yPosition + marginBetweenTables
        );

        const collection = [
          collectionAmount + " KG",
          applicantData,
          issuanceDate,
        ];
        yPosition = addSimpleTable(
          doc,
          "Collection Information",
          ["Amount", "Organization", "Issuance Date"],
          [collection],
          yPosition + marginBetweenTables
        );

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
        doc.line(14, yPosition + 1, pageWidth - 101, yPosition + 1);
        const lines = doc.splitTextToSize(description, 170);

        lines.forEach((line) => {
          yPosition += 6;
          doc.text(line, 20, yPosition);
        });
        doc.setDrawColor(126, 194, 66);
        doc.line(14, yPosition + 2, pageWidth - 102, yPosition + 2);
        yPosition += 2;
      }

      page.forEach((category) => {
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

    function addLocations(locations) {
      if (addedLocations.value === false) {
        const locationsData = locations.map((loc) => [
          loc.country,
          loc.longitude,
          loc.latitude,
        ]);
        yPosition = addSimpleTable(
          doc,
          "Locations",
          ["Country", "Longitude", "Latitude"],
          locationsData,
          yPosition + marginBetweenTables
        );
        addedLocations.value = true;
      } else {
        yPosition -= 10;
        const locationsData = locations.map((loc) => [
          loc.country,
          loc.longitude,
          loc.latitude,
        ]);
        yPosition = addSimpleTable(
          doc,
          "",
          ["Country", "Longitude", "Latitude"],
          locationsData,
          yPosition + marginBetweenTables
        );
      }
    }

    function addMediaFiles(mediaFiles) {
      if (addedMediaFiles.value === false) {
        const photosTableData = mediaFiles.map((mf) => ({
          name: mf.name,
          url: mf.url,
        }));
        yPosition = addTableWithLinks(
          doc,
          "Photos",
          photosTableData,
          yPosition + marginBetweenTables
        );
        addedMediaFiles.value = true;
      } else {
        yPosition -= 10;
        const photosTableData = mediaFiles.map((mf) => ({
          name: mf.name,
          url: mf.url,
        }));
        yPosition = addTableWithLinks(
          doc,
          "",
          photosTableData,
          yPosition + marginBetweenTables
        );
      }
    }

    function addMaterialData(materialDetails) {
      if (addedMaterialData.value === false) {
        yPosition = addMaterialTableToPdf(
          doc,
          materialDetails,
          primaryHeaders,
          yPosition,
          "Materials"
        );
        yPosition = doc.lastAutoTable.finalY + marginBetweenTables;
        addedMaterialData.value = true;
        if (secondaryHeaders.length > 0) {
          yPosition = addSecondaryMaterialTableToPdf(
            doc,
            materialDetails,
            secondaryHeaders,
            yPosition
          );
          yPosition = doc.lastAutoTable.finalY + marginBetweenTables;
        }
      } else {
        yPosition -= 10;
        yPosition = addMaterialTableToPdf(
          doc,
          materialDetails,
          primaryHeaders,
          yPosition,
          ""
        );
        yPosition = doc.lastAutoTable.finalY + marginBetweenTables;
        if (secondaryHeaders.length > 0) {
          yPosition = addSecondaryMaterialTableToPdf(
            doc,
            materialDetails,
            secondaryHeaders,
            yPosition
          );
          yPosition = doc.lastAutoTable.finalY + marginBetweenTables;
        }
      }
    }

    function addBinaryFiles(binaryFiles) {
      if (addedBinaryFiles.value === false) {
        const binaryFilesTableData = binaryFiles.map((bf) => ({
          name: bf.name,
          url: bf.url,
        }));
        yPosition = addTableWithLinks(
          doc,
          "Documents",
          binaryFilesTableData,
          yPosition + marginBetweenTables
        );
        addedBinaryFiles.value = true;
      } else {
        yPosition -= 10;
        const binaryFilesTableData = binaryFiles.map((bf) => ({
          name: bf.name,
          url: bf.url,
        }));
        yPosition = addTableWithLinks(
          doc,
          "",
          binaryFilesTableData,
          yPosition + marginBetweenTables
        );
      }
    }

    resetAddedValues();
  }

  addAllTables(doc, pagesData, primaryHeaders, secondaryHeaders);
  doc.save("certificate.pdf");
};
