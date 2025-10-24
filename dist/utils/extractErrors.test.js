"use strict";

var _extractErrors = _interopRequireDefault(require("./extractErrors"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
describe('extractErrors', function () {
  it('should correct extract errors', function () {
    var input = {
      profile: {
        name: true,
        surname: ['error msg']
      },
      settings: {
        keys: {
          first: true,
          second: true
        },
        colors: {
          main: true,
          secondary: ['Can not be the same as main']
        },
        size: true
      },
      id: true,
      type: ['some error msg']
    };
    expect((0, _extractErrors["default"])(input)).toMatchObject({
      profile: {
        surname: ['error msg']
      },
      settings: {
        colors: {
          secondary: ['Can not be the same as main']
        }
      },
      type: ['some error msg']
    });
  });
});