'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notEmpty = require('../rules/notEmpty');

var _notEmpty2 = _interopRequireDefault(_notEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  firstName: [[_notEmpty2.default, 'Should not be empty']],
  lastName: [[_notEmpty2.default, 'Should not be empty']],
  middleName: [[_notEmpty2.default, 'Should not be empty']]
};