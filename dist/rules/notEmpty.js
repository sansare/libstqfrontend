"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = require("ramda");

// @flow
var _default = (0, _ramda.complement)(_ramda.isEmpty);

exports.default = _default;