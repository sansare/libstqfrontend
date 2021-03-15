"use strict";

var _index = require("../index");

var _notEmpty = _interopRequireDefault(require("../rules/notEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var objInvalid = {
  name: '',
  surname: 'a'
};
var objValid = {
  name: 'a',
  surname: 'a'
};
var spec = {
  name: [[_notEmpty.default, 'Should not be empty']],
  surname: [[_notEmpty.default, 'Should not be empty']]
};
describe('validate', function () {
  it('should return errors array when object is not valid', function () {
    expect((0, _index.validate)(spec, objInvalid)).toMatchObject({
      errors: {
        name: ['Should not be empty']
      },
      isValid: false
    });
  });
  it('should return `{ isValid: true }` when object is valid', function () {
    var validationObj = (0, _index.validate)(spec, objValid);
    expect(validationObj).toMatchObject({
      isValid: true
    });
    expect(validationObj.errors).toBeUndefined();
  });
});