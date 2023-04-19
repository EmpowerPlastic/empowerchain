"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _codegen = require("./codegen");
Object.keys(_codegen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _codegen[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _codegen[key];
    }
  });
});