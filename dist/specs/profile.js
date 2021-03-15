"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _notEmpty = _interopRequireDefault(require("../rules/notEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  firstName: [[_notEmpty.default, 'Should not be empty']],
  lastName: [[_notEmpty.default, 'Should not be empty']],
  middleName: [[_notEmpty.default, 'Should not be empty']]
};
exports.default = _default;