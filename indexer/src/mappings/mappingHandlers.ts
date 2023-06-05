import { ExecuteEvent, Message, Transaction, Block, CreditCollection, EventData, MaterialData, MetadataUri, MediaFile, BinaryFile, ApplicantData, WebReference, CreditData, CreateListingWasmEvent, MarketplaceListing, BuyCreditsWasmEvent, UpdateListingWasmEvent, CancelListingWasmEvent, Country, Organization, Wallet, CreditBalance, TransferedCreditsEvent, RetiredCreditsEvent, Certificate, CreditOffsetCertificate } from "../types";
import {
  CosmosEvent,
  CosmosBlock,
  CosmosMessage,
  CosmosTransaction,
} from "@subql/types-cosmos";
import fetch from "node-fetch";


export async function handleBlock(block: CosmosBlock): Promise<void> {
  const blockRecord = Block.create({
    id: block.block.id,
    height: BigInt(block.block.header.height),
  });
  await blockRecord.save();
}



export async function handleTransaction(tx: CosmosTransaction): Promise<void> {
  // If you want to index each transaction in Cosmos (Stargaze), you could do that here
  const transactionRecord = Transaction.create({
    id: tx.hash,
    blockHeight: BigInt(tx.block.block.header.height),
    timestamp: tx.block.block.header.time,
  });
  await transactionRecord.save();
}


export async function handleMessage(msg: CosmosMessage): Promise<void> {
  const messageRecord = Message.create({
    id: `${msg.tx.hash}-${msg.idx}`,
    blockHeight: BigInt(msg.block.block.header.height),
    txHash: msg.tx.hash,
  });
  await messageRecord.save();
}

export async function handleEvent(event: CosmosEvent): Promise<void> {
  const eventRecord = ExecuteEvent.create({
    id: `${event.tx.hash}-${event.msg.idx}-${event.idx}`,
    blockHeight: BigInt(event.block.block.header.height),
    txHash: event.tx.hash,
  });

  await eventRecord.save();
}

async function createNewWallet(address: string): Promise<Wallet> {
  const wallet = Wallet.create({
    id: address,
    address: address,
  });
  await wallet.save();
  return wallet;
}

export async function handleCreateListing(event: CosmosEvent): Promise<void> {

  const listingOwner = fetchPropertyFromEvent(event, "listing_owner");
  const denom = fetchPropertyFromEvent(event, "denom");
  const numberOfCredits = BigInt(fetchPropertyFromEvent(event, "number_of_credits"));
  const pricePerCreditAmount = BigInt(fetchPropertyFromEvent(event, "price_per_credit_amount"));
  const pricePerCreditDenom = fetchPropertyFromEvent(event, "price_per_credit_denom");


  const createListingWasmEvent = CreateListingWasmEvent.create({
    id: `${event.tx.hash}-${event.msg.idx}-${event.idx}`,
    listingOwner: listingOwner,
    denom: denom,
    numberOfCredits: numberOfCredits,
    pricePerCreditAmount: pricePerCreditAmount,
    pricePerCreditDenom: pricePerCreditDenom,
  });
  await createListingWasmEvent.save();
  const marketplaceListing = MarketplaceListing.create({
    id: `${listingOwner}-${denom}`,
    owner: listingOwner,
    denom: denom,
    amount: numberOfCredits,
    initialAmount: numberOfCredits,
    pricePerCreditAmount: pricePerCreditAmount,
    pricePerCreditDenom: pricePerCreditDenom,
    creditCollectionId: denom,
  });
  await marketplaceListing.save();
}

export async function handleUpdateListing(event: CosmosEvent): Promise<void> {

  const listingOwner = fetchPropertyFromEvent(event, "listing_owner");
  const denom = fetchPropertyFromEvent(event, "denom");
  const numberOfCredits = BigInt(fetchPropertyFromEvent(event, "number_of_credits"));
  const pricePerCreditAmount = BigInt(fetchPropertyFromEvent(event, "price_per_credit_amount"));
  const pricePerCreditDenom = fetchPropertyFromEvent(event, "price_per_credit_denom");

  const updateListingWasmEvent = UpdateListingWasmEvent.create({
    id: `${event.tx.hash}-${event.msg.idx}-${event.idx}`,
    listingOwner: listingOwner,
    denom: denom,
    numberOfCredits: numberOfCredits,
    pricePerCreditAmount: pricePerCreditAmount,
    pricePerCreditDenom: pricePerCreditDenom,
  });
  await updateListingWasmEvent.save();

  const marketplaceListing = await MarketplaceListing.get(`${listingOwner}-${denom}`);
  marketplaceListing.amount = numberOfCredits;
  marketplaceListing.initialAmount = numberOfCredits;
  marketplaceListing.pricePerCreditAmount = pricePerCreditAmount;
  marketplaceListing.pricePerCreditDenom = pricePerCreditDenom;
  await marketplaceListing.save();
}

export async function handleCancelListing(event: CosmosEvent): Promise<void> {

  const listingOwner = fetchPropertyFromEvent(event, "listing_owner");
  const denom = fetchPropertyFromEvent(event, "denom");

  const cancelListingWasmEvent = CancelListingWasmEvent.create({
    id: `${event.tx.hash}-${event.msg.idx}-${event.idx}`,
    listingOwner: listingOwner,
    denom: denom,
  });
  await cancelListingWasmEvent.save();

  await MarketplaceListing.remove(`${listingOwner}-${denom}`);
}

export async function handleBuyCredits(event: CosmosEvent): Promise<void> {

  const listingOwner = fetchPropertyFromEvent(event, "listing_owner");
  const denom = fetchPropertyFromEvent(event, "denom");
  const buyer = fetchPropertyFromEvent(event, "buyer");
  const numberOfCreditsBought = BigInt(fetchPropertyFromEvent(event, "number_of_credits_bought"));
  const totalPriceAmount = BigInt(fetchPropertyFromEvent(event, "total_price_amount"));
  const totalPriceDenom = fetchPropertyFromEvent(event, "total_price_denom");

  const buyCreditsWasmEvent = BuyCreditsWasmEvent.create({
    id: `${event.tx.hash}-${event.msg.idx}-${event.idx}`,
    listingOwner: listingOwner,
    denom: denom,
    buyer: buyer,
    numberOfCreditsBought: numberOfCreditsBought,
    totalPriceAmount: totalPriceAmount,
    totalPriceDenom: totalPriceDenom,
  });
  await buyCreditsWasmEvent.save();

  const marketplaceListing = await MarketplaceListing.get(`${listingOwner}-${denom}`);
  marketplaceListing.amount = marketplaceListing.amount - numberOfCreditsBought;
  if (marketplaceListing.amount === BigInt(0)) {
    await MarketplaceListing.remove(`${listingOwner}-${denom}`);
  } else {
    await marketplaceListing.save();
  }
}

export async function handleWasmEvents(event: CosmosEvent): Promise<void> {
  const action = fetchPropertyFromEvent(event, "action");
  switch (action) {
    case "create_listing":
      await handleCreateListing(event);
      break;
    case "update_listing":
      await handleUpdateListing(event);
      break;
    case "cancel_listing":
      await handleCancelListing(event);
      break;
    case "buy_credits":
      await handleBuyCredits(event);
      break;
    default:
      break;
  }
}

export async function handleTransferCredits(event: CosmosEvent): Promise<void> {
  const sender = fetchPropertyFromEvent(event, "sender");
  const recipient = fetchPropertyFromEvent(event, "recipient");
  const denom = fetchPropertyFromEvent(event, "denom");
  const amount = BigInt(fetchPropertyFromEvent(event, "amount"));

  const transferedCreditsEvent = TransferedCreditsEvent.create({
    id: `${event.tx.hash}-${event.msg.idx}-${event.idx}`,
    sender: sender,
    recipient: recipient,
    amount: amount,
    creditCollectionId: denom,
  });
  await transferedCreditsEvent.save();

  let senderBalance = await CreditBalance.get(`${sender}-${denom}`);
  senderBalance.amountActive = senderBalance.amountActive - amount;
  await senderBalance.save();

  let recipientWallet = await Wallet.get(recipient);
  if (!recipientWallet) {
    recipientWallet = Wallet.create({
      id: recipient,
      address: recipient,
    });
    await recipientWallet.save();
  }
  let recipientBalance = await CreditBalance.get(`${recipient}-${denom}`);
  if (!recipientBalance) {
    recipientBalance = CreditBalance.create({
      id: `${recipient}-${denom}`,
      walletId: recipientWallet.id,
      creditCollectionId: denom,
      amountActive: amount,
      amountRetired: BigInt(0),
    });
    await recipientBalance.save();
  } else {
    recipientBalance.amountActive = recipientBalance.amountActive + amount;
    await recipientBalance.save();
  }
}

export async function handleRetiredCredits(event: CosmosEvent): Promise<void> {
  const owner = fetchPropertyFromEvent(event, "owner");
  const denom = fetchPropertyFromEvent(event, "denom");
  const amount = BigInt(fetchPropertyFromEvent(event, "amount"));

  const retiredCreditsEvent = RetiredCreditsEvent.create({
    id: `${event.tx.hash}-${event.msg.idx}-${event.idx}`,
    owner: owner,
    amount: amount,
    creditCollectionId: denom,
  });
  await retiredCreditsEvent.save();

  let ownerBalance = await CreditBalance.get(`${owner}-${denom}`);
  ownerBalance.amountActive = ownerBalance.amountActive - amount;
  ownerBalance.amountRetired = ownerBalance.amountRetired + amount;
  await ownerBalance.save();

  let creditCollection = await CreditCollection.get(denom);
  creditCollection.activeAmount = creditCollection.activeAmount - amount;
  creditCollection.retiredAmount = creditCollection.retiredAmount + amount;
  await creditCollection.save();
}

function findCertificateDataValueByKey(certificate: any[], key: string): string {
  return certificate.find(data => data.key === key).value;
}

async function handleOffsetCertificate(certificateId: string, owner: string, certificateData: string): Promise<void> {
  certificateData = certificateData.replace(/(?:\\\\)*\\(?!\\)/g, '');
  const certificate = JSON.parse(certificateData);
  const denom = findCertificateDataValueByKey(certificate, "denom");
  const amount = BigInt(findCertificateDataValueByKey(certificate, "amount"));
  const retiringEntityAddress = findCertificateDataValueByKey(certificate, "retiring_entity_address");
  const retiringEntityName = findCertificateDataValueByKey(certificate, "retiring_entity_name");
  const retiringEntityAdditionalData = findCertificateDataValueByKey(certificate, "retiring_entity_additional_data");

  const offsetCertificate = CreditOffsetCertificate.create({
    id: certificateId,
    denom: denom,
    amount: amount,
    retiringEntityAddress: retiringEntityAddress,
    retiringEntityName: retiringEntityName,
    retiringEntityAdditionalData: retiringEntityAdditionalData,
    walletId: owner,
  });
  await offsetCertificate.save();
}

export async function handleCreateCertificate(event: CosmosEvent): Promise<void> {
  const certificateId = fetchPropertyFromEvent(event, "certificate_id");
  const issuer = fetchPropertyFromEvent(event, "issuer");
  const owner = fetchPropertyFromEvent(event, "owner");
  const certificateType = fetchPropertyFromEvent(event, "certificate_type");
  const additionalData = fetchPropertyFromEvent(event, "additional_data");

  const certificate = Certificate.create({
    id: certificateId,
    type: certificateType,
    issuer: issuer,
    owner: owner,
    data: additionalData,
    walletId: owner,
  });
  await certificate.save();

  if (certificateType === "CREDIT_RETIREMENT") {
    await handleOffsetCertificate(certificateId, owner, additionalData);
  }
}

export async function handleIssueCredits(event: CosmosEvent): Promise<void> {
  let denom = fetchPropertyFromEvent(event, "denom");
  let amount = fetchPropertyFromEvent(event, "amount");
  let projectId = fetchPropertyFromEvent(event, "project_id");
  let applicantId = fetchPropertyFromEvent(event, "applicant_id");
  let recipient = fetchPropertyFromEvent(event, "recipient");
  let creditTypeAbbreviation = fetchPropertyFromEvent(event, "credit_type_abbreviation");

  const metadataUrls = fetchPropertyFromEvent(event, "metadata_uris");
  const metadataUrlsArray = decodeUriArrayFromEvent(metadataUrls);

  const creditCollection = CreditCollection.create({
    id: denom,
    denom: denom,
    projectId: parseInt(projectId),
    applicantId: parseInt(applicantId),
    activeAmount: BigInt(amount),
    retiredAmount: BigInt(0),
    creditType: creditTypeAbbreviation,
  });
  await creditCollection.save();

  let wallet = await Wallet.get(recipient);
  if (!wallet) {
    wallet = await createNewWallet(recipient);
  }
  const creditBalance = CreditBalance.create({
    id: `${recipient}-${denom}`,
    creditCollectionId: denom,
    amountActive: BigInt(amount),
    amountRetired: BigInt(0),
    walletId: wallet.id,
  });
  await creditBalance.save();

  await handleMetadataUris(metadataUrlsArray, creditCollection.id);

  for (let [i, metadataUri] of metadataUrlsArray.entries()) {
    const metadata = await fetchMetadataFromIpfs(metadataUri);
    await handleCreditData(metadata, creditCollection.id, i.toString());
  }

}

function findPropById(id: string, creditProps: any[]): any {
  return creditProps.find((prop) => prop.id === id);
}

function removeDoubleQuotes(str: string): string {
  // if value starts and ends with double quotes, remove them
  if (str.startsWith("\"") && str.endsWith("\"")) {
    str = str.substring(1, str.length - 1);
  }
  return str;
}

function fetchPropertyFromEvent(event: CosmosEvent, property: string): string {
  const prop = event.event.attributes.find((attr) => attr.key === property)?.value;
  return removeDoubleQuotes(prop);
}

function decodeUriArrayFromEvent(eventUris: string): string[] {
  eventUris = eventUris.replace(/\[/g, "");
  eventUris = eventUris.replace(/\]/g, "");
  eventUris = eventUris.replace(/\"/g, "");
  return eventUris.split(",");
}

async function fetchMetadataFromIpfs(url: string): Promise<any> {
  const reqUri = "http://51.159.197.8:8080/ipfs/" + url.substring(7);
  const res = await fetch(reqUri);
  return res.json();
}

async function handleCreditData(metadata: any, creditCollectionId: string, creditDataIndex: string): Promise<void> {

  const creditData = CreditData.create({
    id: `${creditCollectionId}-${creditDataIndex}`,
    issuanceDate: findPropById("issuance_date", metadata["credit_props"])?.content,
    creditType: findPropById("credit_type", metadata["credit_props"])?.content,
    // For now, we take only amount from first event
    // amount: findPropById("amount", findPropById("credit_events_data", metadata["credit_props"])?.content[0].content)?.content,
    aggregationLatitude: findPropById("aggregation_location", metadata["credit_props"])?.content.latitude || 0,
    aggregationLongitude: findPropById("aggregation_location", metadata["credit_props"])?.content.longitude || 0,
    rawJsonData: JSON.stringify(metadata),
    creditCollectionId: creditCollectionId,
  })
  await creditData.save();
  const eventData = findPropById("credit_events_data", metadata["credit_props"]);
  for (let [i, event] of eventData.content.entries()) {
    await handleEventData(event.content, creditData.id, i.toString());
  }
  const mediaFiles = findPropById("credit_media", metadata["credit_props"]);
  await handleMediaFiles(mediaFiles, creditData.id);
  const binaryFiles = findPropById("credit_files", metadata["credit_props"]);
  await handleBinaryFiles(binaryFiles, creditData.id);
  const applicantData = findPropById("applicant_data", metadata["credit_props"]);
  await handleApplicantData(applicantData, creditData.id);
}

async function handleEventData(eventDataJson: any, creditDataId: string, eventIndex: string): Promise<void> {
  let latitude = findPropById("location", eventDataJson)?.content.latitude || 0;
  let longitude = findPropById("location", eventDataJson)?.content.longitude || 0;
  let country = "";

  try {
    const reqUri = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key=KEY";
    const response = await fetch(reqUri);
    const result = await response.json();

    for (let r of result.results) {
      if (r.types.includes("country")) {
        country = r.formatted_address;
      }
    }
  }
  catch (e) {
    // if reverse geolocation fails, ignore the error
  }
  if (country) {
    const countryDict = Country.create({
      id: country,
    });
    await countryDict.save();
  }

  const eventData = EventData.create({
    id: `${creditDataId}-${eventIndex}`,
    latitude: latitude,
    longitude: longitude,
    country: country,
    amount: findPropById("amount", eventDataJson)?.content,
    magnitude: findPropById("magnitude", eventDataJson)?.content,
    registrationDate: findPropById("registration_date", eventDataJson)?.content,
    creditDataId: creditDataId,
  })
  await eventData.save();
  for (let [i, material] of findPropById("material", eventDataJson).content.entries()) {
    await handleMaterialData(material, eventData.id, i);
  }
}

async function handleMaterialData(materialDataJson: any, eventDataId: string, materialIndex: string): Promise<void> {
  const materialData = MaterialData.create({
    id: `${eventDataId}-${materialIndex}`,
    key: materialDataJson.key,
    value: materialDataJson.value,
    eventDataId: eventDataId,
  })
  await materialData.save();
}

async function handleMetadataUris(metadataUris: string[], creditCollectionId: string): Promise<void> {
  for (let [i, url] of metadataUris.entries()) {
    const metadataUri = MetadataUri.create({
      id: `${creditCollectionId}-${i}`,
      url: url,
      creditCollectionId: creditCollectionId,
    })
    await metadataUri.save();
  }
}

async function handleMediaFiles(mediaFiles: any, creditDataId: string): Promise<void> {
  for (let [i, mediaFileJson] of mediaFiles.content.entries()) {
    const mediaFile = MediaFile.create({
      id: `${creditDataId}-${i}`,
      url: mediaFileJson.url,
      name: mediaFileJson.name,
      creditDataId: creditDataId,
    })
    await mediaFile.save();
  }
}

async function handleBinaryFiles(binaryFiles: any, creditDataId: string): Promise<void> {
  for (let [i, binaryFileJson] of binaryFiles.content.entries()) {
    const binaryFile = BinaryFile.create({
      id: `${creditDataId}-${i}`,
      url: binaryFileJson.url,
      name: binaryFileJson.name,
      creditDataId: creditDataId,
    })
    await binaryFile.save();
  }
}

async function handleApplicantData(applicantDataJson: any, creditDataId: string): Promise<void> {
  const applicantData = ApplicantData.create({
    id: `${creditDataId}`,
    name: applicantDataJson.content.name,
    description: applicantDataJson.content.description,
    creditDataId: creditDataId,
  })
  await applicantData.save();
  const organization = Organization.create({
    id: applicantDataJson.content.name,
  });
  await organization.save();
  await handleWebReferences(applicantDataJson.content["web_refs"], applicantData.id);
}

async function handleWebReferences(webReferences: any, applicantId: string): Promise<void> {
  for (let [i, url] of webReferences.entries()) {
    const webReference = WebReference.create({
      id: `${applicantId}-${i}`,
      url: url,
      applicantDataId: applicantId,
    })
    await webReference.save();
  }
}