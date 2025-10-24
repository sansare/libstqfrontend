"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ramda = require("ramda");
var _omitSuccess = function omitSuccess(object) {
  if ((0, _ramda.is)(Boolean, object) && object === true) {
    return false;
  }
  if ((0, _ramda.is)(Object, object) && (0, _ramda.map)((0, _ramda.values)(object), (0, _ramda.filter)(_omitSuccess)) === []) {
    return false;
  }
  return true;
};
var _default = exports["default"] = (0, _ramda.pipe)((0, _ramda.filter)(_omitSuccess));