import {
  isPlanEventEnabled
} from "./chunk-QVRRMSIR.js";
import {
  __assign
} from "./chunk-QZ2OSRME.js";
import "./chunk-I7XXR53E.js";

// node_modules/@segment/analytics-next/dist/pkg/plugins/schema-filter/index.js
function disabledActionDestinations(plan, settings) {
  var _a, _b;
  if (!plan || !Object.keys(plan)) {
    return {};
  }
  var disabledIntegrations = plan.integrations ? Object.keys(plan.integrations).filter(function(i) {
    return plan.integrations[i] === false;
  }) : [];
  var disabledRemotePlugins = [];
  ((_a = settings.remotePlugins) !== null && _a !== void 0 ? _a : []).forEach(function(p) {
    disabledIntegrations.forEach(function(int) {
      if (p.name.includes(int) || int.includes(p.name)) {
        disabledRemotePlugins.push(p.name);
      }
    });
  });
  return ((_b = settings.remotePlugins) !== null && _b !== void 0 ? _b : []).reduce(function(acc, p) {
    if (p.settings["subscriptions"]) {
      if (disabledRemotePlugins.includes(p.name)) {
        p.settings["subscriptions"].forEach(
          // @ts-expect-error parameter 'sub' implicitly has an 'any' type
          function(sub) {
            return acc["".concat(p.name, " ").concat(sub.partnerAction)] = false;
          }
        );
      }
    }
    return acc;
  }, {});
}
function schemaFilter(track, settings) {
  function filter(ctx) {
    var plan = track;
    var ev = ctx.event.event;
    if (plan && ev) {
      var planEvent = plan[ev];
      if (!isPlanEventEnabled(plan, planEvent)) {
        ctx.updateEvent("integrations", __assign(__assign({}, ctx.event.integrations), { All: false, "Segment.io": true }));
        return ctx;
      } else {
        var disabledActions = disabledActionDestinations(planEvent, settings);
        ctx.updateEvent("integrations", __assign(__assign(__assign({}, ctx.event.integrations), planEvent === null || planEvent === void 0 ? void 0 : planEvent.integrations), disabledActions));
      }
    }
    return ctx;
  }
  return {
    name: "Schema Filter",
    version: "0.1.0",
    isLoaded: function() {
      return true;
    },
    load: function() {
      return Promise.resolve();
    },
    type: "before",
    page: filter,
    alias: filter,
    track: filter,
    identify: filter,
    group: filter
  };
}
export {
  schemaFilter
};
//# sourceMappingURL=schema-filter-WJD6NKW5.js.map
