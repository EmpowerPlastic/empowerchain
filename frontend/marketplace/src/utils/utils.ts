import { HTTPS_FILE_URL } from "@/config/config";

export const convertIPFStoHTTPS = (url: string) => {
  const IPFS_URL = url.split("//")[1];
  const HTTPS_URL = `${HTTPS_FILE_URL}${IPFS_URL}`;
  return HTTPS_URL;
};

// TODO run in only once on component init
export const getDetailsList = (data: any) => {
  const applicantArray: string[] = [];
  const locationArray: string[] = [];
  const imageArray: string[] = [];
  const materialArray: { key: string; value: string }[] = [];
  let volume: number = 0;
  let thumbnailUrl: string = "";
  const locationPointersArray: {
    lat: number;
    lng: number;
  }[] = [];

  data.map((item: any) => {
    if (item.applicantDataByCreditDataId) {
      item.applicantDataByCreditDataId.nodes.map((node: any) => {
        applicantArray.push(node.name);
      });
    }
    if (item.eventData) {
      item.eventData.nodes.map((node: any) => {
        volume = volume + node.amount;
        if (node.country) {
          locationArray.push(node.country);
        }
        locationPointersArray.push({
          lat: node?.latitude,
          lng: node?.longitude,
        });
        materialArray.push(...node.material.nodes);
      });
    }
    if (item.mediaFiles) {
      item.mediaFiles.nodes.map((node: any) => {
        imageArray.push(convertIPFStoHTTPS(node.url));
      });
      thumbnailUrl = convertIPFStoHTTPS(item.mediaFiles.nodes[0].url);
    }
  });

  const uniqueMaterialArray = materialArray.filter(
    (obj, index, self) =>
      index ===
      self.findIndex((o) => o.key === obj.key && o.value === obj.value),
  );

  return {
    applicant: Array.from(new Set(applicantArray)),
    location: Array.from(new Set(locationArray)),
    material: uniqueMaterialArray,
    volume: volume,
    thumbnailUrl: thumbnailUrl,
    image: imageArray,
    locationPointers: locationPointersArray,
  };
};

export const addTextWithSpacing = (
  doc: any,
  text: string,
  x: number,
  y: number,
  spacing: number,
) => {
  for (let i = 0; i < text.length; i++) {
    const currentLetter = text[i];
    const letterWidth =
      (doc.getStringUnitWidth(currentLetter) * doc.internal.getFontSize()) /
      doc.internal.scaleFactor;

    doc.text(currentLetter, x, y);
    x += letterWidth + spacing;
  }
};

export const calculateTextProperties = (
  name: string,
  baseXPos: number = 163,
  baseFontSize: number = 50,
): { xPos: number; fontSize: number } => {
  const nameLength = name.length;

  let stepSize = 0;
  const charsPerStep = 1;
  let fontSize = baseFontSize;
  if (nameLength < 15) {
    stepSize = 4;
  } else if (nameLength >= 15 && nameLength < 20) {
    fontSize = 40;
    stepSize = 3;
  } else if (nameLength >= 20 && nameLength <= 30) {
    fontSize = 30;
    stepSize = 2.1;
  } else {
    fontSize = 20;
    stepSize = 1.4;
  }
  const steps = Math.floor((nameLength - 3) / charsPerStep);

  const xPos = baseXPos - steps * stepSize;

  return { xPos, fontSize };
};
export const calculateXPosition = (
  text: string,
  basePosition: number = 179,
  capitalStep: number = 1.5,
  otherStep: number = 1,
  numberStep: number = 1.4,
): number => {
  let currentPosition = basePosition;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === char.toUpperCase() && char.match(/[A-Z]/)) {
      currentPosition -= capitalStep;
    } else if (char.match(/[0-9]/)) {
      currentPosition -= numberStep;
    } else {
      currentPosition -= otherStep;
    }
  }

  return currentPosition;
};

export const ipfsToHttpsProtocol = (url: string) => {
  return url.replace("ipfs://", "https://ipfs.empowerchain.io/ipfs/");
};

export const isValidCreditAmount = (
  amount: number,
  available: number,
): boolean => {
  return amount > 0 && Number.isInteger(amount) && amount <= available;
};
