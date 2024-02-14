// node_modules/@segment/analytics-next/dist/pkg/lib/is-plan-event-enabled.js
function isPlanEventEnabled(plan, planEvent) {
  var _a, _b;
  if (typeof (planEvent === null || planEvent === void 0 ? void 0 : planEvent.enabled) === "boolean") {
    return planEvent.enabled;
  }
  return (_b = (_a = plan === null || plan === void 0 ? void 0 : plan.__default) === null || _a === void 0 ? void 0 : _a.enabled) !== null && _b !== void 0 ? _b : true;
}

export {
  isPlanEventEnabled
};
//# sourceMappingURL=chunk-QVRRMSIR.js.map
