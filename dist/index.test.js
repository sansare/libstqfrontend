"use strict";

var _index = require("./index");

describe('package', function () {
  it('should has valid exports', function () {
    expect(_index.specs).toBeDefined();
    expect(_index.validate).toBeDefined();
  });
});