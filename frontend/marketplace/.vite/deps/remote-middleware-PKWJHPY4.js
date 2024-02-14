import {
  getNextIntegrationsURL,
  isServer,
  loadScript
} from "./chunk-AC7VDIFQ.js";
import {
  __awaiter,
  __generator
} from "./chunk-QZ2OSRME.js";
import "./chunk-I7XXR53E.js";

// node_modules/@segment/analytics-next/dist/pkg/plugins/remote-middleware/index.js
function remoteMiddlewares(ctx, settings, obfuscate) {
  var _a;
  return __awaiter(this, void 0, void 0, function() {
    var path, remoteMiddleware, names, scripts, middleware;
    var _this = this;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          if (isServer()) {
            return [2, []];
          }
          path = getNextIntegrationsURL();
          remoteMiddleware = (_a = settings.enabledMiddleware) !== null && _a !== void 0 ? _a : {};
          names = Object.entries(remoteMiddleware).filter(function(_a2) {
            var _ = _a2[0], enabled = _a2[1];
            return enabled;
          }).map(function(_a2) {
            var name = _a2[0];
            return name;
          });
          scripts = names.map(function(name) {
            return __awaiter(_this, void 0, void 0, function() {
              var nonNamespaced, bundleName, fullPath, error_1;
              return __generator(this, function(_a2) {
                switch (_a2.label) {
                  case 0:
                    nonNamespaced = name.replace("@segment/", "");
                    bundleName = nonNamespaced;
                    if (obfuscate) {
                      bundleName = btoa(nonNamespaced).replace(/=/g, "");
                    }
                    fullPath = "".concat(path, "/middleware/").concat(bundleName, "/latest/").concat(bundleName, ".js.gz");
                    _a2.label = 1;
                  case 1:
                    _a2.trys.push([1, 3, , 4]);
                    return [
                      4,
                      loadScript(fullPath)
                      // @ts-ignore
                    ];
                  case 2:
                    _a2.sent();
                    return [2, window["".concat(nonNamespaced, "Middleware")]];
                  case 3:
                    error_1 = _a2.sent();
                    ctx.log("error", error_1);
                    ctx.stats.increment("failed_remote_middleware");
                    return [3, 4];
                  case 4:
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          });
          return [4, Promise.all(scripts)];
        case 1:
          middleware = _b.sent();
          middleware = middleware.filter(Boolean);
          return [2, middleware];
      }
    });
  });
}
export {
  remoteMiddlewares
};
//# sourceMappingURL=remote-middleware-PKWJHPY4.js.map
