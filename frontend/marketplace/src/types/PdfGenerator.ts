import { jsPDF } from "jspdf";

export interface MediaFileUrl {
  type: string;
  url: string;
  description?: string;
}

export interface BinaryFileUrl {
  type: string;
  url: string;
  metadata?: { [key: string]: string | number | boolean };
}

export interface CreditDataNode {
  applicantDataByCreditDataId: {
    nodes: {
      name: string;
      description: string;
    }[];
  };
  binaryFiles: {
    nodes: {
      name: string;
      url: string;
    }[];
  };
  mediaFiles: {
    nodes: {
      name: string;
      url: string;
    }[];
  };
  eventData: {
    nodes: {
      country: string;
      longitude: number;
      latitude: number;
      material: {
        nodes: {
          key: string;
          value: string;
        }[];
      }[];
    }[];
  };
}

export interface Unique {
  country: string;
  longitude: number | string;
  latitude: number | string;
  type: string;
}

export interface CreditCollectionData {
  activeAmount: number;
  retiredAmount: number;
  issuanceDate: string;
}

export interface MaterialNode {
  key: string;
  value: string;
}

export interface IjsPDF extends jsPDF {
  lastAutoTable: {
    finalY?: number;
  };
}

export interface MaterialDetails {
  Condition: string;
  "Material Origin": string;
  "Plastic Type": string;
  "Registration Date": string;
  type: string;
}

export interface CertificateDataNode {
  amount: string;
  denom: string;
  id: string;
  nodeId: string;
  retiringEntityAdditionalData: string;
  retiringEntityName: string;
  walletId: string;
  timestamp?: string;
}

export interface eventNode {
  country: string;
  longitude: number;
  latitude: number;
  material: {
    nodes: MaterialNode[];
  };
  registrationDate: string;
}

export interface BinaryFileNode {
  name: string;
  url: string;
}

export interface MediaFileNode {
  name: string;
  url: string;
}
export interface Item {
  name: string;
  url: string;
  type: string;
}

export interface Category {
  type: string;
  items: Item[];
}

export interface Material {
  type: string;
  [key: string]: any;
}

export interface DataItem {
  name: string;
  url: string;
}

export interface PagesData {
  type: string;
  items: Item[];
}

export interface primaryHeaders {
  type: string;
  items: Item[];
}

export interface secondaryHeaders {
  length: number;
  type: string;
  items: Item[];
}

export interface MediaFiles {
  map(arg0: (mf: MediaFiles) => { name: string; url: string }): unknown;
  name: string;
  url: string;
}

export interface BinaryFiles {
  map(arg0: (bf: BinaryFiles) => { name: string; url: string }): unknown;
  name: string;
  url: string;
}

export interface AllData {
  mediaFiles: MediaFiles;
  binaryFiles: BinaryFiles;
  locations: Location[];
  materialDetails: MaterialDetails[];
  type: string;
}
