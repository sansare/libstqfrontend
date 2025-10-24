"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _notEmpty = _interopRequireDefault(require("../rules/notEmpty"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = {
  firstName: [[_notEmpty["default"], 'Should not be empty']],
  lastName: [[_notEmpty["default"], 'Should not be empty']],
  middleName: [[_notEmpty["default"], 'Should not be empty']]
};