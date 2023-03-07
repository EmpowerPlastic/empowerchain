export {};
declare global {
  interface Window {
    empSha256: (byteArray: Uint8Array) => { value: string };
  }
}
