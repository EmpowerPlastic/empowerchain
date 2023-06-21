import type { Keplr } from "@keplr-wallet/types";
import { Wallet } from "@/types/WalletEnums";
import { empowerchain, ibc } from "@empower-plastic/empowerjs";
import { RPC_ENDPOINT } from "@/config/config";

export function getWalletFromType(wallet: string): Keplr {
  switch (wallet) {
    case Wallet.KEPLR:
      return window.keplr;
    case Wallet.COSMOSTATION:
      return window.cosmostation.providers.keplr;
    case Wallet.LEAP:
      return window.leap;
    default:
      throw new Error("Wallet not supported");
  }
}

export const getWallet = () => {
  const selectedWallet = localStorage.getItem("wallet");
  if (selectedWallet) {
    return getWalletFromType(selectedWallet);
  } else {
    throw new Error("Please connect wallet");
  }
};

export const walletConnected = () => {
  const address = localStorage.getItem("address");
  return !!address;
};

export function resolveSdkError(error: any): string {
  switch (error?.code) {
    case 13:
      return "Fee too low";
    default:
      return "Unknown error";
  }
}

export async function formatDenom(denom: string): Promise<string> {
  const { createRPCQueryClient } = ibc.ClientFactory;
  const rpcQueryClient = await createRPCQueryClient({
    rpcEndpoint: RPC_ENDPOINT,
  });
  if (denom.startsWith("ibc/")) {
    const tracedDenom =
      await rpcQueryClient.ibc.applications.transfer.v1.denomTrace({
        hash: denom,
      });
    if (tracedDenom?.denomTrace) {
      denom = tracedDenom.denomTrace.baseDenom;
    }
  }
  denom = denom.slice(1);
  return denom.toUpperCase();
}
