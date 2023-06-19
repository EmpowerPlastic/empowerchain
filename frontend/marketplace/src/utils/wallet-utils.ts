import type {Keplr} from "@keplr-wallet/types";

export function getWallet(wallet: string): Keplr {
  switch (wallet) {
        case "Keplr":
            return window.keplr;
        case "Cosmostation":
            return window.cosmostation.providers.keplr;
        case "Leap":
            return window.leap;
        default:
            throw new Error("Wallet not supported");
    }

}