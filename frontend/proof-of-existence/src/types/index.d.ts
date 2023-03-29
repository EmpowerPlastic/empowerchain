export {};
import { Window as KeplrWindow } from "@keplr-wallet/types";
declare global {
  interface Window {
    empSha256: (byteArray: Uint8Array) => { value: string };
    keplr: KeplrWindow;
    leap: KeplrWindow;
    cosmostation: KeplrWindow;
  }
}
