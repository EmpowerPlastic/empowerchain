import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
  constructor({
    requestClient
  }) {
    _defineProperty(this, "req", void 0);
    this.req = requestClient;
    this.balance = this.balance.bind(this);
    this.owner = this.owner.bind(this);
    this.supply = this.supply.bind(this);
    this.nFTs = this.nFTs.bind(this);
    this.nFT = this.nFT.bind(this);
    this.class = this.class.bind(this);
    this.classes = this.classes.bind(this);
  }
  /* Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */

  async balance(params) {
    const endpoint = `cosmos/nft/v1beta1/balance/${params.owner}/${params.classId}`;
    return await this.req.get(endpoint);
  }
  /* Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */

  async owner(params) {
    const endpoint = `cosmos/nft/v1beta1/owner/${params.classId}/${params.id}`;
    return await this.req.get(endpoint);
  }
  /* Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */

  async supply(params) {
    const endpoint = `cosmos/nft/v1beta1/supply/${params.classId}`;
    return await this.req.get(endpoint);
  }
  /* NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
   ERC721Enumerable */

  async nFTs(params) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.classId) !== "undefined") {
      options.params.class_id = params.classId;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.owner) !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/nft/v1beta1/nfts`;
    return await this.req.get(endpoint, options);
  }
  /* NFT queries an NFT based on its class and id. */

  async nFT(params) {
    const endpoint = `cosmos/nft/v1beta1/nfts/${params.classId}/${params.id}`;
    return await this.req.get(endpoint);
  }
  /* Class queries an NFT class based on its id */

  async class(params) {
    const endpoint = `cosmos/nft/v1beta1/classes/${params.classId}`;
    return await this.req.get(endpoint);
  }
  /* Classes queries all NFT classes */

  async classes(params = {
    pagination: undefined
  }) {
    const options = {
      params: {}
    };
    if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/nft/v1beta1/classes`;
    return await this.req.get(endpoint, options);
  }
}