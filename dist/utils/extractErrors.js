'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var omitSuccess = function omitSuccess(object) {
  if ((0, _ramda.is)(Boolean, object) && object === true) {
    return false;
  } else if ((0, _ramda.is)(Object, object) && (0, _ramda.map)((0, _ramda.values)(object), (0, _ramda.filter)(omitSuccess)) === []) {
    return false;
  }
  return true;
};

exports.default = (0, _ramda.pipe)((0, _ramda.filter)(omitSuccess));