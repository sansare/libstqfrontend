"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _spected = _interopRequireDefault(require("spected"));
var _ramda = require("ramda");
var _extractErrors = _interopRequireDefault(require("./extractErrors"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var validate = function validate(specs, obj) {
  var result = (0, _spected["default"])(specs, obj);
  var errors = (0, _extractErrors["default"])(result);
  return {
    isValid: (0, _ramda.isEmpty)(errors),
    errors: errors && !(0, _ramda.isEmpty)(errors) ? errors : undefined
  };
};
var _default = exports["default"] = validate;