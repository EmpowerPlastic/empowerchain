import { CreditCollection, EventData, MaterialData, MetadataUri, MediaFile, BinaryFile, ApplicantData, WebReference, CreditData, CreateListingWasmEvent, MarketplaceListing, BuyCreditsWasmEvent, UpdateListingWasmEvent, CancelListingWasmEvent, Country, Organization, Wallet, CreditBalance, TransferedCreditsEvent, RetiredCreditsEvent, Certificate, CreditOffsetCertificate } from "../types";
import {
  CosmosEvent,
} from "@subql/types-cosmos";
import fetch from "node-fetch";

async function logRollbarError(error: Error, txHash: string): Promise<void> {
  const request = await fetch("https://api.rollbar.com/api/1/item/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Rollbar-Access-Token": "$ROLLBAR_ACCESS_TOKEN",
    },
    body: JSON.stringify({
      data: {
        environment: "$ENVIRONMENT",
        level: "error",
        timestamp: Date.now() / 1000,
        platform: "javascript",
        framework: "node",
        language: "javascript",
        body: {
          message: {
            body: error?.message,
          },
        },
        custom: {
          txHash: txHash,
        },
      }
    }),
  });
  await request.json();
}

async function createNewWallet(address: string, applicantId?: number): Promise<Wallet> {
  const wallet = Wallet.create({
    id: address,
    address: address,
    applicantId: applicantId,
  });
  await wallet.save();
  return wallet;
}

export async function handleCreateListing(event: CosmosEvent): Promise<void> {
  try {
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
      timestamp: new Date(event.block.header.time.toISOString()),
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
      createdDate: new Date(event.block.header.time.toISOString()),
      creditCollectionId: denom,
    });
    await marketplaceListing.save();
  } catch (e) {
    await logRollbarError(e, event.tx.hash);
    throw new Error("Error in handleCreateListing: " + e.message);
  }
}

export async function handleUpdateListing(event: CosmosEvent): Promise<void> {
  try {
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
      timestamp: new Date(event.block.header.time.toISOString()),
    });
    await updateListingWasmEvent.save();

    const marketplaceListing = await MarketplaceListing.get(`${listingOwner}-${denom}`);
    marketplaceListing.amount = numberOfCredits;
    marketplaceListing.initialAmount = numberOfCredits;
    marketplaceListing.pricePerCreditAmount = pricePerCreditAmount;
    marketplaceListing.pricePerCreditDenom = pricePerCreditDenom;
    await marketplaceListing.save();
  } catch (e) {
    await logRollbarError(e, event.tx.hash);
    throw new Error("Error in handleUpdateListing: " + e.message);
  }
}

export async function handleCancelListing(event: CosmosEvent): Promise<void> {
  try {
    const listingOwner = fetchPropertyFromEvent(event, "listing_owner");
    const denom = fetchPropertyFromEvent(event, "denom");

    const cancelListingWasmEvent = CancelListingWasmEvent.create({
      id: `${event.tx.hash}-${event.msg.idx}-${event.idx}`,
      listingOwner: listingOwner,
      denom: denom,
      timestamp: new Date(event.block.header.time.toISOString()),
    });
    await cancelListingWasmEvent.save();

    await MarketplaceListing.remove(`${listingOwner}-${denom}`);
  } catch (e) {
    await logRollbarError(e, event.tx.hash);
    throw new Error("Error in handleCancelListing: " + e.message);
  }
}

export async function handleBuyCredits(event: CosmosEvent): Promise<void> {
  try {
    const listingOwner = fetchPropertyFromEvent(event, "listing_owner");
    const denom = fetchPropertyFromEvent(event, "denom");
    const buyer = fetchPropertyFromEvent(event, "buyer");
    const numberOfCreditsBought = BigInt(fetchPropertyFromEvent(event, "number_of_credits_bought"));
    const totalPriceAmount = BigInt(fetchPropertyFromEvent(event, "total_price_amount"));
    const totalPriceDenom = fetchPropertyFromEvent(event, "total_price_denom");

    // this is because there is a bug in SubQuery, which causes event to be processed multiple times
    // for every transaction in the same block, therefore we're skipping processing
    // of events that are already present in the database
    const eventAlreadyProcessed = await BuyCreditsWasmEvent.get(`${event.tx.hash}-${event.msg.idx}-${event.idx}`);
    if (eventAlreadyProcessed) {
      return;
    }

    const buyCreditsWasmEvent = BuyCreditsWasmEvent.create({
      id: `${event.tx.hash}-${event.msg.idx}-${event.idx}`,
      listingOwner: listingOwner,
      denom: denom,
      buyer: buyer,
      numberOfCreditsBought: numberOfCreditsBought,
      totalPriceAmount: totalPriceAmount,
      totalPriceDenom: totalPriceDenom,
      saleDate: new Date(event.block.header.time.toISOString())
    });
    await buyCreditsWasmEvent.save();

    const marketplaceListing = await MarketplaceListing.get(`${listingOwner}-${denom}`);
    marketplaceListing.amount = marketplaceListing.amount - numberOfCreditsBought;
    if (marketplaceListing.amount === BigInt(0)) {
      await MarketplaceListing.remove(`${listingOwner}-${denom}`);
    } else {
      await marketplaceListing.save();
    }
  } catch (e) {
    await logRollbarError(e, event.tx.hash);
    throw new Error("Error in handleBuyCredits: " + e.message);
  }
}

export async function handleWasmEvents(event: CosmosEvent): Promise<void> {
  try {
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
  } catch (e) {
    await logRollbarError(e, event.tx.hash);
    throw new Error("Error in handleWasmEvents: " + e.message);
  }
}

export async function handleTransferCredits(event: CosmosEvent): Promise<void> {
  try {
    const sender = fetchPropertyFromEvent(event, "sender");
    const recipient = fetchPropertyFromEvent(event, "recipient");
    const denom = fetchPropertyFromEvent(event, "denom");
    const amount = BigInt(fetchPropertyFromEvent(event, "amount"));

    // this is because there is a bug in SubQuery, which causes event to be processed multiple times
    // for every transaction in the same block, therefore we're skipping processing
    // of events that are already present in the database
    const eventAlreadyProcessed = await TransferedCreditsEvent.get(`${event.tx.hash}-${event.msg.idx}-${event.idx}`);
    if (eventAlreadyProcessed) {
      return;
    }

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
  } catch (e) {
    await logRollbarError(e, event.tx.hash);
    throw new Error("Error in handleTransferCredits: " + e.message);
  }
}

export async function handleRetiredCredits(event: CosmosEvent): Promise<void> {
  try {
    const owner = fetchPropertyFromEvent(event, "owner");
    const denom = fetchPropertyFromEvent(event, "denom");
    const amount = BigInt(fetchPropertyFromEvent(event, "amount"));

    // this is because there is a bug in SubQuery, which causes event to be processed multiple times
    // for every transaction in the same block, therefore we're skipping processing
    // of events that are already present in the database
    const eventAlreadyProcessed = await RetiredCreditsEvent.get(`${event.tx.hash}-${event.msg.idx}-${event.idx}`);
    if (eventAlreadyProcessed) {
      return;
    }

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
  } catch (e) {
    await logRollbarError(e, event.tx.hash);
    throw new Error("Error in handleRetiredCredits: " + e.message);
  }
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
  try {
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
  } catch (e) {
    await logRollbarError(e, event.tx.hash);
    throw new Error("Error in handleCreateCertificate: " + e.message);
  }
}

export async function handleIssueCredits(event: CosmosEvent): Promise<void> {
  try {
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
      issuanceDate: new Date(event.block.header.time.toISOString()),
      activeAmount: BigInt(amount),
      retiredAmount: BigInt(0),
      creditType: creditTypeAbbreviation,
    });
    await creditCollection.save();

    let wallet = await Wallet.get(recipient);
    if (!wallet) {
      wallet = await createNewWallet(recipient, parseInt(applicantId));
    } else {
      if (!wallet.applicantId) {
        wallet.applicantId = parseInt(applicantId);
        await wallet.save();
      }
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
  } catch (e) {
    await logRollbarError(e, event.tx.hash);
    throw new Error("Error in handleIssueCredits: " + e.message);
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
    const reqUri = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key=$GOOGLE_MAPS_API_KEY";
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