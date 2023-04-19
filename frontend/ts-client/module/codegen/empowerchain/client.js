import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as empowerchainPlasticcreditTxRegistry from "./plasticcredit/tx.registry";
import * as empowerchainProofofexistenceTxRegistry from "./proofofexistence/tx.registry";
import * as empowerchainPlasticcreditTxAmino from "./plasticcredit/tx.amino";
import * as empowerchainProofofexistenceTxAmino from "./proofofexistence/tx.amino";
export const empowerchainAminoConverters = _objectSpread(_objectSpread({}, empowerchainPlasticcreditTxAmino.AminoConverter), empowerchainProofofexistenceTxAmino.AminoConverter);
export const empowerchainProtoRegistry = [...empowerchainPlasticcreditTxRegistry.registry, ...empowerchainProofofexistenceTxRegistry.registry];
export const getSigningEmpowerchainClientOptions = ({
  defaultTypes = defaultRegistryTypes
} = {}) => {
  const registry = new Registry([...defaultTypes, ...empowerchainProtoRegistry]);
  const aminoTypes = new AminoTypes(_objectSpread({}, empowerchainAminoConverters));
  return {
    registry,
    aminoTypes
  };
};
export const getSigningEmpowerchainClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningEmpowerchainClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};