import { Wallet } from "@/types/enums";
import type { Keplr } from "@keplr-wallet/types";

export function getWalletFromType(wallet: string): Keplr {
  switch (wallet) {
    case Wallet.Keplr:
      return window.keplr;
    case Wallet.Cosmostation:
      return window.cosmostation.providers.keplr;
    case Wallet.Leap:
      return window.leap;
    default:
      throw new Error("Wallet not supported");
  }
}
