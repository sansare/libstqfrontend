'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (input) {
  if (typeof input === 'string') {
    return input.trim().length > 0;
  } else if (Array.isArray(input)) {
    return input.length > 0;
  }
  return false;
};