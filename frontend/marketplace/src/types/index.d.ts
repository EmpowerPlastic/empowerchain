export {};
import { Window as KeplrWindow } from "@keplr-wallet/types";
declare global {
  interface Window {
    keplr: window & KeplrWindow;
    leap: window & KeplrWindow;
    cosmostation: window & KeplrWindow;
    enable: window & KeplrWindow;
  }
}
