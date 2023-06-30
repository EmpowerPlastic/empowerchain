import type { Keplr } from "@keplr-wallet/types";
import { Wallet } from "@/types/WalletEnums";

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
