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
      self.findIndex((o) => o.key === obj.key && o.value === obj.value)
  );

  return {
    applicant: Array.from(new Set(applicantArray)),
    location: Array.from(new Set(locationArray)),
    material: uniqueMaterialArray,
    volume: volume,
    thumbnailUrl: thumbnailUrl,
    image: imageArray,
  };
};
