// node_modules/@segment/analytics-next/dist/pkg/core/query-string/gracefulDecodeURIComponent.js
function gracefulDecodeURIComponent(encodedURIComponent) {
  try {
    return decodeURIComponent(encodedURIComponent.replace(/\+/g, " "));
  } catch (_a) {
    return encodedURIComponent;
  }
}

export {
  gracefulDecodeURIComponent
};
//# sourceMappingURL=chunk-75GJZ7JK.js.map
