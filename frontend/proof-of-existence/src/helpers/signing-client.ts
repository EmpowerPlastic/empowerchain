import type { GeneratedType, OfflineSigner } from "@cosmjs/proto-signing";
import { SigningStargateClient, defaultRegistryTypes } from "@cosmjs/stargate";
import { Tendermint37Client } from "@cosmjs/tendermint-rpc";
import type { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { getSigningEmpowerchainClientOptions } from "@empowerplastic/empowerchain-ts-client";

export const getSigningEmpowerchainClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes,
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const { registry, aminoTypes } = getSigningEmpowerchainClientOptions({
    defaultTypes,
  });
  const tm37Client = await Tendermint37Client.connect(rpcEndpoint);
  const client = await SigningStargateClient.createWithSigner(
    tm37Client,
    signer,
    {
      registry,
      aminoTypes,
    }
  );
  return client;
};
