"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ramda = require("ramda");
var _extractErrors = _interopRequireDefault(require("./extractErrors"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Custom spected replacement
var runValidation = function runValidation(specs, obj) {
  var result = {};
  Object.keys(specs).forEach(function (key) {
    var rules = specs[key];
    var value = obj[key];
    if (Array.isArray(rules)) {
      result[key] = [];
      rules.forEach(function (rule) {
        if (Array.isArray(rule)) {
          var _rule = _slicedToArray(rule, 2),
            validator = _rule[0],
            errorMessage = _rule[1];
          if (typeof validator === 'function' && !validator(value)) {
            result[key].push(errorMessage);
          }
        }
      });

      // If no errors, mark as true (spected behavior)
      if (result[key].length === 0) {
        result[key] = true;
      }
    }
  });
  return result;
};
var validate = function validate(specs, obj) {
  var result = runValidation(specs, obj);
  var errors = (0, _extractErrors["default"])(result);
  return {
    isValid: (0, _ramda.isEmpty)(errors),
    errors: errors && !(0, _ramda.isEmpty)(errors) ? errors : undefined
  };
};
var _default = exports["default"] = validate;