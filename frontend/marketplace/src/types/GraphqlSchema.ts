interface Block {
  id: string;
  height: number;
}

interface Transaction {
  id: string;
  blockHeight: number;
  timestamp: number;
}

interface ExecuteEvent {
  id: string;
  blockHeight: number;
  timestamp: number;
}

interface EventData {
  id: string;
  latitude: number;
  longitude: number;
  country: string;
  amount: number;
  magnitude: string;
  material: MaterialData[];
  registrationDate: Date;
  creditData: CreditData;
}

interface MaterialData {
  id: string;
  key: string;
  value: string;
  eventData: EventData;
}

interface ApplicantData {
  id: string;
  name: string;
  description: string;
}

interface ExecuteEvent {
  id: string;
  blockHeight: number;
  txHash: string;
}

interface Country {
  id: string;
}

interface MarketplaceListing {
  id: string;
  owner: string;
  denom: string;
  amount: string;
  initialAmount: string;
  pricePerCreditAmount: number;
  pricePerCreditDenom: string;
  creditCollection: string;
}

interface CreateListingWasmEvent {
  id: string;
  listingOwner: string;
  denom: string;
  numberOfCredits: number;
  pricePerCreditAmount: number;
  pricePerCreditDenom: string;
}

interface UpdateListingWasmEvent {
  id: string;
  listingOwner: string;
  denom: string;
  numberOfCredits: number;
  pricePerCreditAmount: number;
  pricePerCreditDenom: string;
}

interface CancelListingWasmEvent {
  id: string;
  listingOwner: string;
  denom: string;
}

interface BuyCreditsWasmEvent {
  id: string;
  listingOwner: string;
  denom: string;
  buyer: string;
  numberOfCreditsBought: number;
  totalPriceAmount: number;
  totalPriceDenom: string;
}

interface CreateListing {
  id: string;
  owner: string;
  denom: string;
  amount: number;
  pricePerCredit: string;
}

interface CreditCollection {
  id: string;
  denom: string;
  projectId: number;
  applicantId: number;
  activeAmount: number;
  retiredAmount: number;
  creditType: string;
  metadataUris: MetadataUri[];
  creditData: CreditData[];
  marketplaceListings: MarketplaceListing[];
}

interface CreditData {
  id: string;
  issuanceDate: Date;
  creditType: string;
  aggregationLatitude: number;
  aggregationLongitude: number;
  rawJsonData: string;
  eventData: EventData[];
  mediaFiles: MediaFile[];
  binaryFiles: BinaryFile[];
  applicantData: ApplicantData;
  creditCollection: CreditCollection;
}

interface WebReference {
  id: string;
  applicantData: ApplicantData;
  url: string;
}

interface ApplicantData {
  id: string;
  name: string;
  description: string;
  webReferences: WebReference[];
  creditData: CreditData;
}

interface MediaFile {
  id: string;
  name: string;
  url: string;
  creditData: CreditData;
}

interface BinaryFile {
  id: string;
  name: string;
  url: string;
  creditData: CreditData;
}

interface EventData {
  id: string;
  latitude: number;
  longitude: number;
  country: string;
  amount: number;
  magnitude: string;
  material: MaterialData[];
  registrationDate: Date;
  creditData: CreditData;
}

interface MaterialData {
  id: string;
  key: string;
  value: string;
  eventData: EventData;
}

interface MetadataUri {
  id: string;
  creditCollection: CreditCollection;
  url: string;
}

interface Message {
  id: string;
  blockHeight: number;
  txHash: string;
}

export type {
  Block,
  Transaction,
  ExecuteEvent,
  Country,
  MarketplaceListing,
  CreateListingWasmEvent,
  UpdateListingWasmEvent,
  CancelListingWasmEvent,
  BuyCreditsWasmEvent,
  CreateListing,
  CreditCollection,
  CreditData,
  WebReference,
  ApplicantData,
  MediaFile,
  BinaryFile,
  EventData,
  MaterialData,
  MetadataUri,
  Message,
};
