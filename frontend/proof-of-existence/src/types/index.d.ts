export {};
declare global {
  interface Window {
    empSha256: (byteArray: Uint8Array) => { value: string };
    keplr: any;
    leap: any;
    cosmostation: any;
  }
}
