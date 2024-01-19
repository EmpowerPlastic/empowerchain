import type { MaterialProperty } from "@/types/GraphqlSchema";
import {
  convertIPFStoHTTPS,
  findPlasticTypeInMaterial,
  uniqueMaterials,
} from "@/utils/utils";

export const formatAuctionDetails = (data: any, materialVolume: number) => {
  const applicantArray: string[] = [];
  const locationArray: string[] = [];
  const locationPointersArray: {
    lat: number;
    lng: number;
  }[] = [];
  const imageArray: string[] = [];
  const fileArray: { url: string; name: string }[] = [];
  const materialArray: MaterialProperty[][] = [];
  const volume = materialVolume;
  const registrationDateArray: string[] = [];

  data?.map((item: any) => {
    item.applicantDataByCreditDataId.nodes.map((node: any) => {
      applicantArray.push(node.name);
    });

    item.eventData.nodes.map((node: any) => {
      locationArray.push(node.country);
      locationPointersArray.push({ lat: node.latitude, lng: node.longitude });
      materialArray.push(node.material.nodes);
      registrationDateArray.push(
        new Date(node.registrationDate).toLocaleDateString(),
      );
    });

    item.mediaFiles.nodes.map((node: any) => {
      imageArray.push(convertIPFStoHTTPS(node.url));
    });
    item.binaryFiles.nodes.map((node: any) => {
      fileArray.push({
        url: convertIPFStoHTTPS(node.url),
        name: node.name,
      });
    });
  });
  const uniqueMaterialArray = uniqueMaterials(materialArray);
  const plasticType =
    findPlasticTypeInMaterial(uniqueMaterialArray[0])?.value ?? "";

  return {
    applicant: applicantArray[0],
    location: Array.from(new Set(locationArray)),
    material: uniqueMaterialArray,
    volume: volume,
    image: imageArray,
    file: fileArray,
    locationPointers: locationPointersArray,
    registrationDate: registrationDateArray[0],
    plasticType: plasticType,
  };
};
