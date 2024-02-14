import {
  __awaiter,
  __generator
} from "./chunk-QZ2OSRME.js";
import "./chunk-I7XXR53E.js";

// node_modules/@segment/analytics-next/dist/pkg/plugins/legacy-video-plugins/index.js
function loadLegacyVideoPlugins(analytics) {
  return __awaiter(this, void 0, void 0, function() {
    var plugins;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [
            4,
            import(
              // @ts-expect-error
              "./index.umd-PKXQU32A.js"
            )
            // This is super gross, but we need to support the `window.analytics.plugins` namespace
            // that is linked in the segment docs in order to be backwards compatible with ajs-classic
            // @ts-expect-error
          ];
        case 1:
          plugins = _a.sent();
          analytics._plugins = plugins;
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
export {
  loadLegacyVideoPlugins
};
//# sourceMappingURL=legacy-video-plugins-XTJT6SZL.js.map
