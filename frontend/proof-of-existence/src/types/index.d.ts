export {};
import { Window as KeplrWindow } from "@keplr-wallet/types";
declare global {
  interface Window {
    empSha256: (byteArray: Uint8Array) => { value: string };
    keplr: window & KeplrWindow;
    leap: window & KeplrWindow;
    cosmostation: window & KeplrWindow;
    enable: window & KeplrWindow;
  }
}
