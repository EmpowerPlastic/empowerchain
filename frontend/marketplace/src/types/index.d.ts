import { Window as KeplrWindow } from "@keplr-wallet/types";
import "vue-router";
export {};
declare global {
  interface Window {
    keplr: window & KeplrWindow;
    leap: window & KeplrWindow;
    cosmostation: window & KeplrWindow;
    enable: window & KeplrWindow;
  }
}

export * from "./Credits.ts";

declare module "vue-router" {
  interface RouteMeta {
    pageViewEvent?: PageNames | PageViewEventWithProperties;
    hideNavFooter?: boolean;
  }
}
