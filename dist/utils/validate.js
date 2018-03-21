'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spected = require('spected');

var _spected2 = _interopRequireDefault(_spected);

var _ramda = require('ramda');

var _extractErrors = require('./extractErrors');

var _extractErrors2 = _interopRequireDefault(_extractErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validate = function validate(specs, obj) {
  var result = (0, _spected2.default)(specs, obj);
  var errors = (0, _extractErrors2.default)(result);
  return {
    isValid: (0, _ramda.isEmpty)(errors),
    errors: errors && !(0, _ramda.isEmpty)(errors) ? errors : undefined
  };
};

exports.default = validate;