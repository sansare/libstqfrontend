"use strict";

var _index = require("../index");

var _notEmpty = _interopRequireDefault(require("../rules/notEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// мы используем profile из specs для того, чтобы дополнительно протестить,
// что specs экспортит корректный набор спек
// данные тесты являются актуальным набором правил валидации для обеих платформ (фронт и мобила)
describe('specs/profile', function () {
  it('should has correct rules', function () {
    expect(_index.specs.profile.firstName).toEqual([[_notEmpty.default, 'Should not be empty']]);
  });
});