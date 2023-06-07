import type { GeneratedType, OfflineSigner } from '@cosmjs/proto-signing';
import { GasPrice, SigningStargateClient, defaultRegistryTypes } from '@cosmjs/stargate';
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Tendermint37Client } from '@cosmjs/tendermint-rpc';
import type { HttpEndpoint } from '@cosmjs/tendermint-rpc';
import { Decimal } from "@cosmjs/math";
import { getSigningEmpowerchainClientOptions } from '../codegen';

// Until the generated version of this file is fixed, we need to manually use tm37 here
export const getSigningTM37EmpowerchainClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes,
  gasPrice = {
    amount: Decimal.fromAtomics("25", 6),
    denom: 'umpwr'
  }
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
  gasPrice?: GasPrice;
}) => {
  const { registry, aminoTypes } = getSigningEmpowerchainClientOptions({
    defaultTypes
  });
  const tm37Client = await Tendermint37Client.connect(rpcEndpoint);
  const client = await SigningStargateClient.createWithSigner(
    tm37Client,
    signer,
    {
      registry: registry,
      aminoTypes: aminoTypes,
      gasPrice: gasPrice
    }
  );
  return client;
};

export const getSigningCosmWasmTM37EmpowerchainClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes,
  gasPrice = {
    amount: Decimal.fromAtomics("25", 6),
    denom: 'umpwr'
  }
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
  gasPrice?: GasPrice;
}) => {
  const { registry, aminoTypes } = getSigningEmpowerchainClientOptions({
    defaultTypes
  });
  const tm37Client = await Tendermint37Client.connect(rpcEndpoint);
  const client = await SigningCosmWasmClient.createWithSigner(
    tm37Client,
    signer,
    {
      registry: registry,
      aminoTypes: aminoTypes,
      gasPrice: gasPrice
    }
  );
  return client;
};
