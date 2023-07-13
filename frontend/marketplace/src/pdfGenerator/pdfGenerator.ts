import { jsPDF } from "jspdf";
import {
  AssetsBase64,
  InterBold,
  BackgroundImage,
  EmpowerLogo,
  VerifiedImage,
  InterMedium,
  LogotTitle,
  LogoM,
} from "./AssetsBase64";
import auctionCard from "@/assets/auctionCard.png";

const doc = new jsPDF("p", "mm", "a4", true);
export const PDFGenerator = async (data: any) => {
  //Add font files
  try {
    if (AssetsBase64) {
      doc.addFileToVFS("Inter-Regular.ttf", AssetsBase64);
    }
    if (InterBold) {
      doc.addFileToVFS("Inter-Bold-normal.ttf", InterBold);
    }
    if (InterMedium) {
      doc.addFileToVFS("Inter-Medium.ttf", InterMedium);
    }

    //Add fonts
    doc.addFont("Inter-Regular.ttf", "Inter", "regular");
    doc.addFont("Inter-Bold-normal.ttf", "Inter", "bold");
    doc.addFont("Inter-Medium.ttf", "Inter", "medium");

    const pageWidth =
      doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

    if (BackgroundImage) {
      doc.addImage(BackgroundImage, "png", 0, 0, 210, 297, undefined, "FAST");
    }
    if (EmpowerLogo) {
      doc.addImage(EmpowerLogo, "png", 140, 10, 65, 9, undefined, "FAST");
    }
    if (VerifiedImage) {
      doc.addImage(VerifiedImage, "png", 5, 5, 40, 40, undefined, "FAST");
    }

    //Hyperlink above the image
    doc.textWithLink(
      "                                                                                                                                          ",
      5,
      10,
      {
        url: "https://www.empower.eco/",
        maxWidth: 40,
      }
    );

    doc.setFont("Inter", "bold");
    doc.setFontSize(35);
    const title = doc.splitTextToSize(data?.title, pageWidth - 10);
    doc.text(title[0]?.slice(0, -3) + "...", pageWidth / 2, 80, {
      align: "center",
    });
    doc.text(`${data?.volume}kg`, pageWidth / 2, 100, {
      align: "center",
    });

    doc.setFont("Inter", "medium");
    doc.setFontSize(13);
    doc.text("Material", 20, 120);
    doc.text("CREDIT type", pageWidth - 50, 120);

    doc.setFont("Inter", "regular");
    doc.setFontSize(11);
    let initialY = 127;
    let initialX = 20;
    data.material?.map((item: any, index: number) => {
      doc.text(`\u2022 ${item?.value}`, initialX, initialY);
      if ((index + 1) % 4 == 0) {
        initialY = 127;
        initialX = initialX + 40;
      } else {
        initialY = initialY + 5;
      }
    });
    doc.text(data?.credit, pageWidth - 50, 127);

    doc.setFont("Inter", "medium");
    doc.setFontSize(13);
    doc.text("Project Information", pageWidth / 2, 160, { align: "center" });
    doc.setFont("Inter", "regular");
    doc.setFontSize(9);
    const description = doc.splitTextToSize(data?.projectInfo, pageWidth - 20);
    if (description.length > 4) {
      description[3] = description[3]?.slice(0, -3) + "...";
    }
    const limitedDescription = description?.slice(0, 4);
    doc.text(limitedDescription, 10, 170, { lineHeightFactor: 1.4 });

    doc.addImage(
      data?.images[0] || auctionCard,
      "JPEG",
      10,
      198,
      60,
      35,
      undefined,
      "FAST"
    );
    doc.addImage(
      data?.images[1] || auctionCard,
      "JPEG",
      75,
      198,
      60,
      35,
      undefined,
      "FAST"
    );
    doc.addImage(
      data?.images[2] || auctionCard,
      "JPEG",
      140,
      198,
      60,
      35,
      undefined,
      "FAST"
    );
    doc.addImage(
      data?.map || auctionCard,
      "JPEG",
      10,
      240,
      125,
      51,
      undefined,
      "FAST"
    );

    doc.addImage(LogoM, "png", 167, 260, 12, 9, undefined, "FAST");
    doc.addImage(LogotTitle, "png", 152, 272, 40, 5.5, undefined, "FAST");

    doc.save("Certificate.pdf");
    return { success: true };
  } catch (e) {
    console.error(e);
    throw new Error("Failed to generate PDF");
  }
};
