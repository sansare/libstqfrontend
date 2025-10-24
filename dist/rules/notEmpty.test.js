"use strict";

var _notEmpty = _interopRequireDefault(require("./notEmpty"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
describe('notEmpty', function () {
  it('should work for Strings', function () {
    expect((0, _notEmpty["default"])('')).toEqual(false);
    expect((0, _notEmpty["default"])('a')).toBe(true);
  });
  it('should work for Arrays', function () {
    expect((0, _notEmpty["default"])([])).toBe(false);
    expect((0, _notEmpty["default"])(['a'])).toBe(true);
  });
});