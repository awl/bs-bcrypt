// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Bcrypt = require("../src/Bcrypt.bs.js");
var Bcryptjs = require("bcryptjs");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

describe("BCrypt Sync", (function () {
        Jest.test("genSaltSync", (function () {
                var salt = Bcryptjs.genSaltSync(8, 0);
                return Jest.Expect[/* toBe */2](29, Jest.Expect[/* expect */0](salt.length));
              }));
        return Jest.test("hashSync", (function () {
                      var hash = Bcryptjs.hashSync("test_string", 8);
                      return Jest.Expect[/* toBe */2](60, Jest.Expect[/* expect */0](hash.length));
                    }));
      }));

function failWith(e) {
  return Jest.fail(Js_option.getWithDefault("UNKNOWN", Js_primitive.undefined_to_opt(e.message)));
}

function handler(finish, success, res) {
  if (res[0] >= 106380200) {
    return Curry._1(finish, failWith(res[1]));
  } else {
    return Curry._1(success, res[1]);
  }
}

describe("Bcrypt Async", (function () {
        Jest.testAsync(/* None */0, "genSalt", (function (finish) {
                return Bcrypt.genSalt(8, (function (param) {
                              return handler(finish, (function (salt) {
                                            return Curry._1(finish, Jest.Expect[/* toBe */2](29, Jest.Expect[/* expect */0](salt.length)));
                                          }), param);
                            }));
              }));
        Jest.testAsync(/* None */0, "hash", (function (finish) {
                return Bcrypt.hash("test_string", /* `Length */[
                            -744748794,
                            8
                          ], (function (param) {
                              return handler(finish, (function (hash) {
                                            return Curry._1(finish, Jest.Expect[/* toBe */2](60, Jest.Expect[/* expect */0](hash.length)));
                                          }), param);
                            }));
              }));
        Jest.testAsync(/* None */0, "compare:pass", (function (finish) {
                return Bcrypt.hash("test_string", /* `Length */[
                            -744748794,
                            8
                          ], (function (param) {
                              return handler(finish, (function (hash) {
                                            return Bcrypt.compare("test_string", hash, (function (param) {
                                                          return handler(finish, (function (result) {
                                                                        return Curry._1(finish, Jest.ExpectJs[/* toBeTruthy */28](Jest.Expect[/* expect */0](result)));
                                                                      }), param);
                                                        }));
                                          }), param);
                            }));
              }));
        return Jest.testAsync(/* None */0, "compare:pass", (function (finish) {
                      return Bcrypt.hash("test_string", /* `Length */[
                                  -744748794,
                                  8
                                ], (function (param) {
                                    return handler(finish, (function (hash) {
                                                  return Bcrypt.compare("bad_string", hash, (function (param) {
                                                                return handler(finish, (function (result) {
                                                                              return Curry._1(finish, Jest.ExpectJs[/* toBeFalsy */26](Jest.Expect[/* expect */0](result)));
                                                                            }), param);
                                                              }));
                                                }), param);
                                  }));
                    }));
      }));

describe("BCrypt Promise", (function () {
        Jest.testPromise(/* None */0, "genSalt", (function () {
                return Bcryptjs.genSalt(8, 0).then((function (salt) {
                              return Promise.resolve(Jest.Expect[/* toBe */2](29, Jest.Expect[/* expect */0](salt.length)));
                            }));
              }));
        Jest.testPromise(/* None */0, "hash", (function () {
                return Bcryptjs.hash("test_string", 8).then((function (hash) {
                              return Promise.resolve(Jest.Expect[/* toBe */2](60, Jest.Expect[/* expect */0](hash.length)));
                            }));
              }));
        Jest.testPromise(/* None */0, "compare:pass", (function () {
                return Bcryptjs.hash("test_string", 8).then((function (param) {
                                return Bcryptjs.compare("test_string", param);
                              })).then((function (result) {
                              return Promise.resolve(Jest.ExpectJs[/* toBeTruthy */28](Jest.Expect[/* expect */0](result)));
                            }));
              }));
        return Jest.testPromise(/* None */0, "compare:fail", (function () {
                      return Bcryptjs.hash("test_string", 8).then((function (param) {
                                      return Bcryptjs.compare("should_fail", param);
                                    })).then((function (result) {
                                    return Promise.resolve(Jest.ExpectJs[/* toBeFalsy */26](Jest.Expect[/* expect */0](result)));
                                  }));
                    }));
      }));

exports.failWith = failWith;
exports.handler = handler;
/*  Not a pure module */
