import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as empowerchainCertificatesTxRegistry from "./certificates/tx.registry";
import * as empowerchainPlasticcreditTxRegistry from "./plasticcredit/tx.registry";
import * as empowerchainProofofexistenceTxRegistry from "./proofofexistence/tx.registry";
import * as empowerchainCertificatesTxAmino from "./certificates/tx.amino";
import * as empowerchainPlasticcreditTxAmino from "./plasticcredit/tx.amino";
import * as empowerchainProofofexistenceTxAmino from "./proofofexistence/tx.amino";
export const empowerchainAminoConverters = {
  ...empowerchainCertificatesTxAmino.AminoConverter,
  ...empowerchainPlasticcreditTxAmino.AminoConverter,
  ...empowerchainProofofexistenceTxAmino.AminoConverter
};
export const empowerchainProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...empowerchainCertificatesTxRegistry.registry, ...empowerchainPlasticcreditTxRegistry.registry, ...empowerchainProofofexistenceTxRegistry.registry];
export const getSigningEmpowerchainClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...empowerchainProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...empowerchainAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningEmpowerchainClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
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